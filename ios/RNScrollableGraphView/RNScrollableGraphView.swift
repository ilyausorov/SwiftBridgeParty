//
//  RNScrollableGraphView.swift
//  testbridge
//
//  Created by Ilya Usorov on 11/8/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation
import ScrollableGraphView

@objc(RNSGView)
class RNSGView : UIView {
  
  override init(frame: CGRect) {
    super.init(frame: frame);
    self.frame = frame;
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  @objc var graphType: NSString = "createMultiPlotGraphOne" {
      didSet {
          toggleGraphView()
      }
  }
  
  @objc func toggleGraphView() {
    let examples = Examples()
    var graphView: ScrollableGraphView
    
    switch graphType {
    case "createSimpleGraph":
      graphView = examples.createSimpleGraph(self.frame)
      break
    case "createMultiPlotGraphOne":
      graphView = examples.createMultiPlotGraphOne(self.frame)
      break
    case "createMultiPlotGraphTwo":
      graphView = examples.createMultiPlotGraphTwo(self.frame)
      break
    case "createDarkGraph":
      graphView = examples.createDarkGraph(self.frame)
      break
    case "createBarGraph":
      graphView = examples.createBarGraph(self.frame)
      break
    case "createDotGraph":
      graphView = examples.createDotGraph(self.frame)
      break
    case "createPinkGraph":
      graphView = examples.createPinkGraph(self.frame)
      break
    case "createBlueOrangeGraph":
      graphView = examples.createBlueOrangeGraph(self.frame)
      break
    default:
      graphView = examples.createMultiPlotGraphOne(self.frame)
    }
    
    self.addSubview(graphView)
  }
  
}
