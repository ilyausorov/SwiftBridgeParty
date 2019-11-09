//
//  RNScrollableGraphViewManager.swift
//  testbridge
//
//  Created by Ilya Usorov on 11/8/19.
//  Copyright © 2019 Facebook. All rights reserved.
//
import Foundation

@objc(RNSGViewSwift)
class RNSGViewManager : RCTViewManager {
  override func view() -> UIView! {
    return RNSGView();
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return false
  }
  
  @objc func toggleGraphViewFromManager(_ node: NSNumber) {
     DispatchQueue.main.async {
       let component = self.bridge.uiManager.view(
         forReactTag: node
       ) as! RNSGView
       component.toggleGraphView()
     }
   }
}
