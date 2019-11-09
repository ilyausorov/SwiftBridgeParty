//
//  RNCameraView.swift
//  testbridge
//
//  Created by Ilya Usorov on 11/2/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation
import CameraBackground

@objc(RNCameraView)
class RNCameraView : CameraBackground {

  override init(frame: CGRect) {
    super.init(frame: frame);
    self.frame = frame;
  }

  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  @objc func toggleCamera(_ buttonMargins: NSDictionary) {
    addCameraBackground(
      buttonMargins: UIEdgeInsets(
        top: buttonMargins["top"] as! CGFloat,
        left: buttonMargins["left"] as! CGFloat,
        bottom: buttonMargins["bottom"] as! CGFloat,
        right: buttonMargins["right"] as! CGFloat
      )
    )
  }
  
  @objc func takePictureAsync(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
      takeCameraSnapshot({},
      completion: { (capturedImage, error) -> () in
//        self.freeCameraSnapshot() // unfreeze image
        if(error == nil) {
          let path: String = NSSearchPathForDirectoriesInDomains(.documentDirectory, .userDomainMask, true).first!
          let url = URL(fileURLWithPath: path).appendingPathComponent("newImage.jpeg")
          try! capturedImage!.jpegData(compressionQuality: 0.5)?.write(to: url)
          resolve(url.absoluteString)
        } else {
          let error = NSError(domain: "", code: 200, userInfo: nil)
          reject("E_IMAGE", "ERROR GETTING IMAGE", error)
        }
      })
   }
}
