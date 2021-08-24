using System;
using System.Configuration;
using System.Collections.Specialized;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Xamarin.Forms;
using Tweetinvi;
using Tweetinvi.Models;

namespace NOS
{
    public class App : Application
    {
        public App()
        {
            string ConsumerKey = ConfigurationManager.AppSettings.Get("ConsumerKey");
            string ConsumerSecret = ConfigurationManager.AppSettings.Get("ConsumerSecret");
            string AccessToken = ConfigurationManager.AppSettings.Get("AccessToken");
            string AccessTokenSecret = ConfigurationManager.AppSettings.Get("AccessTokenSecret");

            var credentials = new TwitterCredentials(ConsumerKey, ConsumerSecret, AccessToken, AccessTokenSecret);
            var client = new TwitterClient(credentials);

            string user = client.Users.GetUserAsync("pewdiepie").ToString();

            // The root page of your application
            MainPage = new ContentPage
            {
                Content = new StackLayout
                {
                    VerticalOptions = LayoutOptions.Center,
                    Children = {
                        new Label {
                            HorizontalTextAlignment = TextAlignment.Center,
                            Text = user
                        }
                    }
                }
            };
        }

        protected override void OnStart()
        {
            // Handle when your app starts
            
        }

        protected override void OnSleep()
        {
            // Handle when your app sleeps
        }

        protected override void OnResume()
        {
            
        }

    }
}
