//
//  DeviceOrientation.swift
//  Awsatapp
//
//  Created by Deepak Kumar on 11/05/22.
//

import Foundation
import UIKit

enum DeviceOrientation: String {
    case PhonePortrait = "PhonePortrait"
    case PhoneLandscape = "PhoneLandscape"
    case PadPortrait = "PadPortrait"
    case PadLandscape = "PadLandscape"
    
    static var current: DeviceOrientation {
        get {
            let size = UIScreen.main.coordinateSpace.bounds.size
            if UIDevice.current.userInterfaceIdiom == .phone {
                if size.width < size.height {
                    return .PhonePortrait
                } else {
                    return .PhoneLandscape
                }
            } else {
                if size.width < size.height {
                    return .PadPortrait
                } else {
                    return .PadLandscape
                }
            }
        }
    }
}

extension DeviceOrientation {
   static var detectiPhoneX: Bool {
        if #available(iOS 11.0, tvOS 11.0, *) {
            return UIApplication.shared.delegate?.window??.safeAreaInsets.top ?? 0 > 20
        }
        return false
    }
}
