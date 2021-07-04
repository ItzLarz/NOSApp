import requests
from bs4 import BeautifulSoup


class font:
   BOLD = '\033[1m'
   UNDERLINE = '\033[4m'
   END = '\033[0m'  


URL = "https://nos.nl/artikel/2387937-besmettingen-lopen-op-vooral-onder-jongeren-moeten-we-ons-zorgen-maken"
page = requests.get(URL)
soup = BeautifulSoup(page.content, "html.parser")

print("\n")

for text in soup.find_all(["p", "h1", "h2"]):
    if text.name == "p":
        if text["class"] == ['text_3v_J6Y0G'] and text.find("em") == None:
            print(text.text.strip())
            print("\n")

    elif text.name == "h1":
        if text["class"] == ['title_iP7Q1aiP']:
            print(font.BOLD + font.UNDERLINE)
            print(text.text.strip())
            print("\n")
            print(font.END)

    elif text.name == "h2":
        if text["class"] == ['heading_1HXI5QYv']:
            print(font.BOLD)
            print(text.text.strip())
            print("\n")
            print(font.END)




         
