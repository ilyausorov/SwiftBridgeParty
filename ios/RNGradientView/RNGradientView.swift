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

  @objc public func setLocations(_ locations: NSArray) {
    self.locations = locations.map({ return $0 as! CGFloat})
  }
  
  @objc public func setColors(_ colors: NSArray) {
    self.colors = colors.map({return RCTConvert.uiColor($0)})
  }
  
}
