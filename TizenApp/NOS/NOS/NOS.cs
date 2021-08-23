using System;
using System.Configuration;
using System.Collections.Specialized;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Xamarin.Forms;

namespace NOS
{
    public class App : Application
    {
        public App()
        {
            string ConsumerKey = ConfigurationManager.AppSettings.Get("ConsumerKey");
            string ConsumerSecret = ConfigurationManager.AppSettings.Get("ConsumerSecret");
            string AccesToken = ConfigurationManager.AppSettings.Get("AccessToken");
            string AccessTokenSecret = ConfigurationManager.AppSettings.Get("AccessTokenSecret");
        // The root page of your application
        MainPage = new ContentPage
            {
                Content = new StackLayout
                {
                    VerticalOptions = LayoutOptions.Center,
                    Children = {
                        new Label {
                            HorizontalTextAlignment = TextAlignment.Center,
                            Text = ConsumerKey
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
