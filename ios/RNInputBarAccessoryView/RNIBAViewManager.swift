//
//  RNIBAViewManager.swift
//  SwiftBridgeParty
//
//  Created by Ilya Usorov on 11/10/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

@objc(RNIBAViewSwift)
class RNIBAViewManager : RCTViewManager {
  override func view() -> UIView! {
    return RNIBAView();
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
