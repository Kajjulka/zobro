package com.zoobrno;

import com.facebook.react.ReactActivity;
import com.reactnativecomponent.splashscreen.RCTSplashScreen;    //import RCTSplashScreen
import android.os.Bundle;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "zoobrno";
    }

    @Override
  protected void onCreate(Bundle savedInstanceState) {
      RCTSplashScreen.openSplashScreen(this);   //open splashscreen
      //RCTSplashScreen.openSplashScreen(this, true);   //open splashscreen fullscreen
      super.onCreate(savedInstanceState);
  }
}
