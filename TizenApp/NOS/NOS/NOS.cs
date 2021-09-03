using System;
using System.Configuration;
using System.Collections.Specialized;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using System.Text;
using Xamarin.Forms;

using Tweetinvi;
using Tweetinvi.Models;

namespace NOS
{
    public class App : Application
    {
        public class Globals
        {
            public static string ConsumerKey = ConfigurationManager.AppSettings.Get("ConsumerKey");
            public static string ConsumerSecret = ConfigurationManager.AppSettings.Get("ConsumerSecret");
            public static string AccessToken = ConfigurationManager.AppSettings.Get("AccessToken");
            public static string AccessTokenSecret = ConfigurationManager.AppSettings.Get("AccessTokenSecret");
            public static string BearerToken = ConfigurationManager.AppSettings.Get("BearerToken");
            public static string output = "kut";
            
        }
        

        public App()
        {
            
            
            // The root page of your application
            MainPage = new ContentPage
            {
                Content = new StackLayout
                {
                    VerticalOptions = LayoutOptions.Center,
                    Children = {
                        new Label {
                            HorizontalTextAlignment = TextAlignment.Center,
                            Text = "kut"
                        }
                    }
                }
            };
        }


        protected override void OnStart()
        {
            // Handle when your app starts
            
        }

        public async Task<IUser> GetUser(long user)
        {
            var appCredentials = new ConsumerOnlyCredentials(Globals.ConsumerKey, Globals.ConsumerSecret)
            {
                BearerToken = Globals.BearerToken
            };
            var userCredentials = new TwitterCredentials(Globals.ConsumerKey, Globals.ConsumerSecret, Globals.AccessToken, Globals.AccessTokenSecret);

            var appClient = new TwitterClient(appCredentials);
            var userClient = new TwitterClient(userCredentials);

            var output = await userClient.Users.GetUserAsync(user);
            return output;
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
