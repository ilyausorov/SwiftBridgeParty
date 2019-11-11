# SwiftBridgeParty

Prepared with ❤️ for the React Native NYC Meetup on Nov 12, 2019.
My talk is called **Bridging a Native Module Doesn’t Have To Be Scary: Swift Edition**.
You can find the slides at **https://usorov.com/rnnyctalk.pptx** (if it's still up?)

Thanks to [@bpolonia]( https://github.com/bpolonia ) for organizing and [@majorleaguesoccer]( https://github.com/majorleaguesoccer ) for hosting!

This app was bootstrapped via react-native init and uses **react-native 0.61.4**. iOS only (because we're here for Swift).

The following native repos were used in the creation of this app:
1. [GradientView]( https://github.com/soffes/GradientView )
2. [ScrollableGraphView]( https://github.com/philackm/ScrollableGraphView )
3. [InputBarAccessoryView]( https://github.com/nathantannar4/InputBarAccessoryView )
4. [CameraBackground]( https://github.com/yonat/CameraBackground ) (won't work if running on simulator)

To run the app:
1. clone the repo to your machine,
2. install node_modules
3. cd into the ios directory, rm -rf Pods, rm Podfile.lock and then run pod install (requires CocoaPods; this is on purpose)
4. cd back to the main directory, and do git reset --hard (will bring back some fixes to the native code that will allow the app to compile properly)
5. run chmod u+x on buildProd.sh and then run ./buildProd.sh (incase you don't want to run my script, feel free to look inside buildProd.sh and then execute that command). This builds the main.jsbundle file.
3. turn on Metro bundler with npm/yarn start
4. open up XCode and Run the app from there either onto a simulator or your device.

###### P.S. Please don't sue me.
