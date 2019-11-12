//
//  RNIBAView.swift
//  SwiftBridgeParty
//
//  Created by Ilya Usorov on 11/10/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation
import InputBarAccessoryView

@objc(RNIBAView)
class RNIBAView : InputBarAccessoryView {
  
  override init(frame: CGRect) {
    super.init(frame: frame);
    self.frame = frame;
  }

  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
    
  @objc var onTextChange: RCTDirectEventBlock?
  @objc var onSubmit: RCTDirectEventBlock?
  @objc var onHeightChange: RCTDirectEventBlock?
}

extension RNIBAView: InputBarAccessoryViewDelegate {
  func inputBar(_ inputBar: InputBarAccessoryView, didPressSendButtonWith text: String) {
    onSubmit!(["text": text])
    self.inputTextView.text = String()
  }
  
  func inputBar(_ inputBar: InputBarAccessoryView, textViewTextDidChangeTo text: String) {
    onTextChange!(["text": text])
  }
  
  func inputBar(_ inputBar: InputBarAccessoryView, didChangeIntrinsicContentTo size: CGSize) {
    onHeightChange!(["size": size.height])
  }
}

