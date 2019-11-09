//
//  RNGradientViewManager.swift
//  testbridge
//
//  Created by Ilya Usorov on 10/31/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

@objc(RNLinearGradientSwift)
class RNGradientViewManager : RCTViewManager {
  override func view() -> UIView! {
    return RNGradientView();
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
