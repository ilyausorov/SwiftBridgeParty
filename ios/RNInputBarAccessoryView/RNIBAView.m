//
//  RNIBAView.m
//  SwiftBridgeParty
//
//  Created by Ilya Usorov on 11/10/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "RNIBAView.h"
#import <React/RCTUIManager.h>

@interface RCT_EXTERN_MODULE(RNIBAViewSwift, RCTViewManager)
RCT_EXPORT_VIEW_PROPERTY(onTextChange, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onSubmit, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onHeightChange, RCTDirectEventBlock)

@end
