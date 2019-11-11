//
//  RNCameraView.m
//  testbridge
//
//  Created by Ilya Usorov on 11/2/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <React/RCTUIManager.h>

@interface

RCT_EXTERN_MODULE(RNCameraViewSwift, RCTViewManager)

RCT_EXTERN_METHOD(
  toggleCameraFromManager:(nonnull NSNumber *)node
  buttonMargins:(NSDictionary *)buttonMargins
)

RCT_EXTERN_METHOD(
  takeCameraSnapshotFromManager:(nonnull NSNumber *)node
  resolver: (RCTPromiseResolveBlock)resolve
  rejecter: (RCTPromiseRejectBlock)reject
)

@end
