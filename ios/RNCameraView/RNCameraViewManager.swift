//
//  RNGradientViewManager.swift
//  testbridge
//
//  Created by Ilya Usorov on 10/31/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

@objc(RNCameraViewSwift)
class RNCameraViewManager : RCTViewManager {
  override func view() -> UIView! {
    return RNCameraView();
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return false
  }
  
  @objc func takeCameraSnapshotFromManager(_ node: NSNumber, resolver resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
    DispatchQueue.main.async {
      let component = self.bridge.uiManager.view(
        forReactTag: node
      ) as! RNCameraView
      
      component.takePictureAsync(resolve, rejecter: reject)
    }
  }
  
  @objc func toggleCameraFromManager(_ node: NSNumber, buttonMargins: NSDictionary) {
    DispatchQueue.main.async {
      let component = self.bridge.uiManager.view(
        forReactTag: node
      ) as! RNCameraView
      component.toggleCamera(buttonMargins)
    }
  }
}
