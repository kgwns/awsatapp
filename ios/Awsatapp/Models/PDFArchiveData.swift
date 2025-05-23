//
//  PDFArchives.swift
//  Awsatapp
//
//  Created by Deepak Kumar on 11/05/22.
//

import Foundation
import SwiftyJSON

public final class PDFArchiveData: NSCoding {

  // MARK: Declaration for string constants to be used to decode and also serialize.
  private struct SerializationKeys {
    static let data = "data"
    static let success = "success"
  }

  // MARK: Properties
  public var data: [PDFEdition]?
  public var success: Bool? = false

  // MARK: SwiftyJSON Initializers
  /// Initiates the instance based on the object.
  ///
  /// - parameter object: The object of either Dictionary or Array kind that was passed.
  /// - returns: An initialized instance of the class.
  public convenience init(object: Any) {
    self.init(json: JSON(object))
  }

  /// Initiates the instance based on the JSON that was passed.
  ///
  /// - parameter json: JSON object from SwiftyJSON.
  public required init(json: JSON) {
    if let items = json[SerializationKeys.data].array { data = items.map { PDFEdition(json: $0) } }
    success = json[SerializationKeys.success].boolValue
  }

  /// Generates description of the object in the form of a NSDictionary.
  ///
  /// - returns: A Key value pair containing all valid values in the object.
  public func dictionaryRepresentation() -> [String: Any] {
    var dictionary: [String: Any] = [:]
    if let value = data { dictionary[SerializationKeys.data] = value.map { $0.dictionaryRepresentation() } }
    dictionary[SerializationKeys.success] = success
    return dictionary
  }

  // MARK: NSCoding Protocol
  required public init(coder aDecoder: NSCoder) {
    self.data = aDecoder.decodeObject(forKey: SerializationKeys.data) as? [PDFEdition]
    self.success = aDecoder.decodeBool(forKey: SerializationKeys.success)
  }

  public func encode(with aCoder: NSCoder) {
    aCoder.encode(data, forKey: SerializationKeys.data)
    aCoder.encode(success, forKey: SerializationKeys.success)
  }

}
