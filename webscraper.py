# Importing the required libraries
import requests
import tweepy
from bs4 import BeautifulSoup

# Importing Twitter API Tokens from secret.py
from secret import *


# Connecting to Twitter API
auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
api = tweepy.API(auth, wait_on_rate_limit=True, wait_on_rate_limit_notify=True)
auth.set_access_token(access_key, access_secret)


# Class for changing the font of the articles
class font:
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'
    END = '\033[0m'


# Twitter Stream Class
class UserTracker(tweepy.StreamListener):
    # Initializing Class
    def __init__(self, api):
        self.api = api
        self.me = api.me()

    # Tweet met the criteria
    def on_status(self, tweet):
        print("Tweet found")

        if from_NOS(tweet)[0] == True:
            tweet_handler(tweet)

        elif from_NOS(tweet)[0] == False and from_NOS(tweet)[1] == "retweet":
            print("Tweet was a retweet")

        elif from_NOS(tweet)[0] == False and from_NOS(tweet)[1] == "reply":
            print("Tweet was a reply")

        else:
            print("Error: Can't read Tweet")

    # Error Handling
    def on_error(self, status):
        print("Error detected: " + str(status))


# Checking if tweet came from NOS
def from_NOS(tweet):
    if hasattr(tweet, 'retweeted_status'):
        return [False, "retweet"]
    elif tweet.in_reply_to_status_id != None:
        return [False, "reply"]
    elif tweet.in_reply_to_screen_name != None:
        return [False, "reply"]
    elif tweet.in_reply_to_user_id != None:
        return [False, "reply"]
    else:
        return [True]


# Handling the tweet if it came from NOS
def tweet_handler(tweet):
    # Checking all urls in the tweet
    for idx, url in enumerate(tweet.entities["urls"]):
        # Validating all urls in the tweet
        if "https://nos.nl" in url["expanded_url"]:

            # Starting webscraper
            URL = tweet.entities["urls"][idx]["expanded_url"]
            page = requests.get(URL)
            soup = BeautifulSoup(page.content, "html.parser")

            print("\n")

            # Separating titles, headings and paragraphs from the page
            for text in soup.find_all(["p", "h1", "h2"]):
                if text.name == "p":
                    if text["class"] == ['text_3v_J6Y0G'] and text.find("em") == None:
                        print(text.text.strip())

                elif text.name == "h1":
                    if text["class"] == ['title_iP7Q1aiP']:
                        print(font.BOLD + font.UNDERLINE)
                        print(text.text.strip())
                        print(font.END)

                elif text.name == "h2":
                    if text["class"] == ['heading_1HXI5QYv']:
                        print(font.BOLD)
                        print(text.text.strip())
                        print(font.END)

        else:
            print("There were no valid urls")


# Instantiating Twitter Stream
twitterStream = tweepy.Stream(api.auth, UserTracker(api))

# Waiting for Tweet from the NOS account
user = api.get_user("NOS")
twitterStream.filter(follow=[str(user.id)])
