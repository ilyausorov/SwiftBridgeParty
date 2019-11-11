//
//  RNLinearGradient.m
//  testbridge
//
//  Created by Ilya Usorov on 10/31/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "RNLinearGradient.h"
#import <React/RCTUIManager.h>

@interface RCT_EXTERN_MODULE(RNLinearGradientSwift, RCTViewManager)
RCT_EXPORT_VIEW_PROPERTY(locations, NSArray);
RCT_EXPORT_VIEW_PROPERTY(colors, NSArray);

@end


