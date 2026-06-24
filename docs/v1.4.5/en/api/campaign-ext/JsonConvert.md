<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JsonConvert`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JsonConvert

**Namespace:** Newtonsoft.Json
**Module:** Newtonsoft.Json
**Type:** `public static class JsonConvert`
**Base:** none
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json/JsonConvert.cs`

## Overview

`JsonConvert` lives in `Newtonsoft.Json` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Newtonsoft.Json` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DefaultSettings` | `public static Func<JsonSerializerSettings>? DefaultSettings { get; set; }` |

## Key Methods

### ToString
`public static string ToString(DateTime value)`

**Purpose:** Handles logic related to `to string`.

### ToString
`public static string ToString(DateTime value, DateFormatHandling format, DateTimeZoneHandling timeZoneHandling)`

**Purpose:** Handles logic related to `to string`.

### ToString
`public static string ToString(DateTimeOffset value)`

**Purpose:** Handles logic related to `to string`.

### ToString
`public static string ToString(DateTimeOffset value, DateFormatHandling format)`

**Purpose:** Handles logic related to `to string`.

### ToString
`public static string ToString(bool value)`

**Purpose:** Handles logic related to `to string`.

### ToString
`public static string ToString(char value)`

**Purpose:** Handles logic related to `to string`.

### ToString
`public static string ToString(Enum value)`

**Purpose:** Handles logic related to `to string`.

### ToString
`public static string ToString(int value)`

**Purpose:** Handles logic related to `to string`.

### ToString
`public static string ToString(short value)`

**Purpose:** Handles logic related to `to string`.

### ToString
`public static string ToString(ushort value)`

**Purpose:** Handles logic related to `to string`.

### ToString
`public static string ToString(uint value)`

**Purpose:** Handles logic related to `to string`.

### ToString
`public static string ToString(long value)`

**Purpose:** Handles logic related to `to string`.

### ToString
`public static string ToString(ulong value)`

**Purpose:** Handles logic related to `to string`.

### ToString
`public static string ToString(float value)`

**Purpose:** Handles logic related to `to string`.

### ToString
`public static string ToString(double value)`

**Purpose:** Handles logic related to `to string`.

### ToString
`public static string ToString(byte value)`

**Purpose:** Handles logic related to `to string`.

### ToString
`public static string ToString(sbyte value)`

**Purpose:** Handles logic related to `to string`.

### ToString
`public static string ToString(decimal value)`

**Purpose:** Handles logic related to `to string`.

### ToString
`public static string ToString(Guid value)`

**Purpose:** Handles logic related to `to string`.

### ToString
`public static string ToString(TimeSpan value)`

**Purpose:** Handles logic related to `to string`.

### ToString
`public static string ToString(Uri? value)`

**Purpose:** Handles logic related to `to string`.

### ToString
`public static string ToString(string? value)`

**Purpose:** Handles logic related to `to string`.

### ToString
`public static string ToString(string? value, char delimiter)`

**Purpose:** Handles logic related to `to string`.

### ToString
`public static string ToString(string? value, char delimiter, StringEscapeHandling stringEscapeHandling)`

**Purpose:** Handles logic related to `to string`.

### ToString
`public static string ToString(object? value)`

**Purpose:** Handles logic related to `to string`.

### SerializeObject
`public static string SerializeObject(object? value)`

**Purpose:** Handles logic related to `serialize object`.

### SerializeObject
`public static string SerializeObject(object? value, Formatting formatting)`

**Purpose:** Handles logic related to `serialize object`.

### SerializeObject
`public static string SerializeObject(object? value, params JsonConverter converters)`

**Purpose:** Handles logic related to `serialize object`.

### SerializeObject
`public static string SerializeObject(object? value, Formatting formatting, params JsonConverter converters)`

**Purpose:** Handles logic related to `serialize object`.

### SerializeObject
`public static string SerializeObject(object? value, JsonSerializerSettings? settings)`

**Purpose:** Handles logic related to `serialize object`.

### SerializeObject
`public static string SerializeObject(object? value, Type? type, JsonSerializerSettings? settings)`

**Purpose:** Handles logic related to `serialize object`.

### SerializeObject
`public static string SerializeObject(object? value, Formatting formatting, JsonSerializerSettings? settings)`

**Purpose:** Handles logic related to `serialize object`.

### SerializeObject
`public static string SerializeObject(object? value, Type? type, Formatting formatting, JsonSerializerSettings? settings)`

**Purpose:** Handles logic related to `serialize object`.

### DeserializeObject
`public static object? DeserializeObject(string value)`

**Purpose:** Handles logic related to `deserialize object`.

### DeserializeObject
`public static object? DeserializeObject(string value, JsonSerializerSettings settings)`

**Purpose:** Handles logic related to `deserialize object`.

### DeserializeObject
`public static object? DeserializeObject(string value, Type type)`

**Purpose:** Handles logic related to `deserialize object`.

### DeserializeObject
`public static object? DeserializeObject(string value, Type type, params JsonConverter converters)`

**Purpose:** Handles logic related to `deserialize object`.

### DeserializeObject
`public static object? DeserializeObject(string value, Type? type, JsonSerializerSettings? settings)`

**Purpose:** Handles logic related to `deserialize object`.

### PopulateObject
`public static void PopulateObject(string value, object target)`

**Purpose:** Handles logic related to `populate object`.

### PopulateObject
`public static void PopulateObject(string value, object target, JsonSerializerSettings? settings)`

**Purpose:** Handles logic related to `populate object`.

### SerializeXmlNode
`public static string SerializeXmlNode(XmlNode? node)`

**Purpose:** Handles logic related to `serialize xml node`.

### SerializeXmlNode
`public static string SerializeXmlNode(XmlNode? node, Formatting formatting)`

**Purpose:** Handles logic related to `serialize xml node`.

### SerializeXmlNode
`public static string SerializeXmlNode(XmlNode? node, Formatting formatting, bool omitRootObject)`

**Purpose:** Handles logic related to `serialize xml node`.

### DeserializeXmlNode
`public static XmlDocument? DeserializeXmlNode(string value)`

**Purpose:** Handles logic related to `deserialize xml node`.

### DeserializeXmlNode
`public static XmlDocument? DeserializeXmlNode(string value, string? deserializeRootElementName)`

**Purpose:** Handles logic related to `deserialize xml node`.

### DeserializeXmlNode
`public static XmlDocument? DeserializeXmlNode(string value, string? deserializeRootElementName, bool writeArrayAttribute)`

**Purpose:** Handles logic related to `deserialize xml node`.

### DeserializeXmlNode
`public static XmlDocument? DeserializeXmlNode(string value, string? deserializeRootElementName, bool writeArrayAttribute, bool encodeSpecialCharacters)`

**Purpose:** Handles logic related to `deserialize xml node`.

### SerializeXNode
`public static string SerializeXNode(XObject? node)`

**Purpose:** Handles logic related to `serialize x node`.

### SerializeXNode
`public static string SerializeXNode(XObject? node, Formatting formatting)`

**Purpose:** Handles logic related to `serialize x node`.

### SerializeXNode
`public static string SerializeXNode(XObject? node, Formatting formatting, bool omitRootObject)`

**Purpose:** Handles logic related to `serialize x node`.

### DeserializeXNode
`public static XDocument? DeserializeXNode(string value)`

**Purpose:** Handles logic related to `deserialize x node`.

### DeserializeXNode
`public static XDocument? DeserializeXNode(string value, string? deserializeRootElementName)`

**Purpose:** Handles logic related to `deserialize x node`.

### DeserializeXNode
`public static XDocument? DeserializeXNode(string value, string? deserializeRootElementName, bool writeArrayAttribute)`

**Purpose:** Handles logic related to `deserialize x node`.

### DeserializeXNode
`public static XDocument? DeserializeXNode(string value, string? deserializeRootElementName, bool writeArrayAttribute, bool encodeSpecialCharacters)`

**Purpose:** Handles logic related to `deserialize x node`.

## Usage Example

```csharp
JsonConvert.ToString(value);
```

## See Also

- [Complete Class Catalog](../catalog)