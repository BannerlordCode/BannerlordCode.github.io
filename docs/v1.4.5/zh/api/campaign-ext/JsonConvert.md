<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `JsonConvert`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# JsonConvert

**Namespace:** Newtonsoft.Json
**Module:** Newtonsoft.Json
**Type:** `public static class JsonConvert`
**Base:** 无
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json/JsonConvert.cs`

## 概述

`JsonConvert` 位于 `Newtonsoft.Json`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Newtonsoft.Json` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DefaultSettings` | `public static Func<JsonSerializerSettings>? DefaultSettings { get; set; }` |

## 主要方法

### ToString
`public static string ToString(DateTime value)`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### ToString
`public static string ToString(DateTime value, DateFormatHandling format, DateTimeZoneHandling timeZoneHandling)`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### ToString
`public static string ToString(DateTimeOffset value)`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### ToString
`public static string ToString(DateTimeOffset value, DateFormatHandling format)`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### ToString
`public static string ToString(bool value)`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### ToString
`public static string ToString(char value)`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### ToString
`public static string ToString(Enum value)`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### ToString
`public static string ToString(int value)`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### ToString
`public static string ToString(short value)`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### ToString
`public static string ToString(ushort value)`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### ToString
`public static string ToString(uint value)`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### ToString
`public static string ToString(long value)`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### ToString
`public static string ToString(ulong value)`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### ToString
`public static string ToString(float value)`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### ToString
`public static string ToString(double value)`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### ToString
`public static string ToString(byte value)`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### ToString
`public static string ToString(sbyte value)`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### ToString
`public static string ToString(decimal value)`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### ToString
`public static string ToString(Guid value)`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### ToString
`public static string ToString(TimeSpan value)`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### ToString
`public static string ToString(Uri? value)`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### ToString
`public static string ToString(string? value)`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### ToString
`public static string ToString(string? value, char delimiter)`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### ToString
`public static string ToString(string? value, char delimiter, StringEscapeHandling stringEscapeHandling)`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### ToString
`public static string ToString(object? value)`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### SerializeObject
`public static string SerializeObject(object? value)`

**用途 / Purpose:** 处理 `serialize object` 相关逻辑。

### SerializeObject
`public static string SerializeObject(object? value, Formatting formatting)`

**用途 / Purpose:** 处理 `serialize object` 相关逻辑。

### SerializeObject
`public static string SerializeObject(object? value, params JsonConverter converters)`

**用途 / Purpose:** 处理 `serialize object` 相关逻辑。

### SerializeObject
`public static string SerializeObject(object? value, Formatting formatting, params JsonConverter converters)`

**用途 / Purpose:** 处理 `serialize object` 相关逻辑。

### SerializeObject
`public static string SerializeObject(object? value, JsonSerializerSettings? settings)`

**用途 / Purpose:** 处理 `serialize object` 相关逻辑。

### SerializeObject
`public static string SerializeObject(object? value, Type? type, JsonSerializerSettings? settings)`

**用途 / Purpose:** 处理 `serialize object` 相关逻辑。

### SerializeObject
`public static string SerializeObject(object? value, Formatting formatting, JsonSerializerSettings? settings)`

**用途 / Purpose:** 处理 `serialize object` 相关逻辑。

### SerializeObject
`public static string SerializeObject(object? value, Type? type, Formatting formatting, JsonSerializerSettings? settings)`

**用途 / Purpose:** 处理 `serialize object` 相关逻辑。

### DeserializeObject
`public static object? DeserializeObject(string value)`

**用途 / Purpose:** 处理 `deserialize object` 相关逻辑。

### DeserializeObject
`public static object? DeserializeObject(string value, JsonSerializerSettings settings)`

**用途 / Purpose:** 处理 `deserialize object` 相关逻辑。

### DeserializeObject
`public static object? DeserializeObject(string value, Type type)`

**用途 / Purpose:** 处理 `deserialize object` 相关逻辑。

### DeserializeObject
`public static object? DeserializeObject(string value, Type type, params JsonConverter converters)`

**用途 / Purpose:** 处理 `deserialize object` 相关逻辑。

### DeserializeObject
`public static object? DeserializeObject(string value, Type? type, JsonSerializerSettings? settings)`

**用途 / Purpose:** 处理 `deserialize object` 相关逻辑。

### PopulateObject
`public static void PopulateObject(string value, object target)`

**用途 / Purpose:** 处理 `populate object` 相关逻辑。

### PopulateObject
`public static void PopulateObject(string value, object target, JsonSerializerSettings? settings)`

**用途 / Purpose:** 处理 `populate object` 相关逻辑。

### SerializeXmlNode
`public static string SerializeXmlNode(XmlNode? node)`

**用途 / Purpose:** 处理 `serialize xml node` 相关逻辑。

### SerializeXmlNode
`public static string SerializeXmlNode(XmlNode? node, Formatting formatting)`

**用途 / Purpose:** 处理 `serialize xml node` 相关逻辑。

### SerializeXmlNode
`public static string SerializeXmlNode(XmlNode? node, Formatting formatting, bool omitRootObject)`

**用途 / Purpose:** 处理 `serialize xml node` 相关逻辑。

### DeserializeXmlNode
`public static XmlDocument? DeserializeXmlNode(string value)`

**用途 / Purpose:** 处理 `deserialize xml node` 相关逻辑。

### DeserializeXmlNode
`public static XmlDocument? DeserializeXmlNode(string value, string? deserializeRootElementName)`

**用途 / Purpose:** 处理 `deserialize xml node` 相关逻辑。

### DeserializeXmlNode
`public static XmlDocument? DeserializeXmlNode(string value, string? deserializeRootElementName, bool writeArrayAttribute)`

**用途 / Purpose:** 处理 `deserialize xml node` 相关逻辑。

### DeserializeXmlNode
`public static XmlDocument? DeserializeXmlNode(string value, string? deserializeRootElementName, bool writeArrayAttribute, bool encodeSpecialCharacters)`

**用途 / Purpose:** 处理 `deserialize xml node` 相关逻辑。

### SerializeXNode
`public static string SerializeXNode(XObject? node)`

**用途 / Purpose:** 处理 `serialize x node` 相关逻辑。

### SerializeXNode
`public static string SerializeXNode(XObject? node, Formatting formatting)`

**用途 / Purpose:** 处理 `serialize x node` 相关逻辑。

### SerializeXNode
`public static string SerializeXNode(XObject? node, Formatting formatting, bool omitRootObject)`

**用途 / Purpose:** 处理 `serialize x node` 相关逻辑。

### DeserializeXNode
`public static XDocument? DeserializeXNode(string value)`

**用途 / Purpose:** 处理 `deserialize x node` 相关逻辑。

### DeserializeXNode
`public static XDocument? DeserializeXNode(string value, string? deserializeRootElementName)`

**用途 / Purpose:** 处理 `deserialize x node` 相关逻辑。

### DeserializeXNode
`public static XDocument? DeserializeXNode(string value, string? deserializeRootElementName, bool writeArrayAttribute)`

**用途 / Purpose:** 处理 `deserialize x node` 相关逻辑。

### DeserializeXNode
`public static XDocument? DeserializeXNode(string value, string? deserializeRootElementName, bool writeArrayAttribute, bool encodeSpecialCharacters)`

**用途 / Purpose:** 处理 `deserialize x node` 相关逻辑。

## 使用示例

```csharp
JsonConvert.ToString(value);
```

## 参见

- [完整类目录](../catalog)