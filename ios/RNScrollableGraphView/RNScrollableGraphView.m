//
//  RNScrollableGraphView.m
//  testbridge
//
//  Created by Ilya Usorov on 11/8/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <React/RCTUIManager.h>

@interface RCT_EXTERN_MODULE(RNSGViewSwift, RCTViewManager)
RCT_EXTERN_METHOD(
  toggleGraphViewFromManager:(nonnull NSNumber *)node
)
RCT_EXPORT_VIEW_PROPERTY(graphType, NSString)

@end
