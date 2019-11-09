//
//  RNGradientView.swift
//  testbridge
//
//  Created by Ilya Usorov on 10/31/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation
import GradientView

@objc(RNGradientView)
class RNGradientView : GradientView {

  override init(frame: CGRect) {
    super.init(frame: frame);
    self.frame = frame;
  }

  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["initialCount": 0]
  }

  @objc(setLocations:)
  public func setLocations(_ locations: NSArray) {
    self.locations = locations.map({ return $0 as! CGFloat})
  }
  
  @objc(setColors:)
  public func setColors(_ colors: NSArray) {
    self.colors = colors.map({return RCTConvert.uiColor($0)})
  }
  
}
