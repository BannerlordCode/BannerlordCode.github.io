---
title: "JValue"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `JValue`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# JValue

**Namespace:** Newtonsoft.Json.Linq
**Module:** Newtonsoft.Json
**Type:** `public class JValue : JToken, IEquatable<JValue>, IFormattable, IComparable, IComparable<JValue>, IConvertible`
**Base:** `JToken`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Linq/JValue.cs`

## 概述

`JValue` 位于 `Newtonsoft.Json.Linq`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Newtonsoft.Json.Linq` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Value` | `public new object? Value { get; set; }` |

## 主要方法

### TryConvert
`public override bool TryConvert(JValue instance, ConvertBinder binder, out object? result)`

**用途 / Purpose:** 尝试获取 `convert`，通常以 out 参数返回结果。

### TryBinaryOperation
`public override bool TryBinaryOperation(JValue instance, BinaryOperationBinder binder, object arg, out object? result)`

**用途 / Purpose:** 尝试获取 `binary operation`，通常以 out 参数返回结果。

### WriteToAsync
`public override Task WriteToAsync(JsonWriter writer, CancellationToken cancellationToken, params JsonConverter converters)`

**用途 / Purpose:** 处理 `write to async` 相关逻辑。

### CreateComment
`public static JValue CreateComment(string? value)`

**用途 / Purpose:** 创建一个 `comment` 实例或对象。

### CreateString
`public static JValue CreateString(string? value)`

**用途 / Purpose:** 创建一个 `string` 实例或对象。

### CreateNull
`public static JValue CreateNull()`

**用途 / Purpose:** 创建一个 `null` 实例或对象。

### CreateUndefined
`public static JValue CreateUndefined()`

**用途 / Purpose:** 创建一个 `undefined` 实例或对象。

### WriteTo
`public override void WriteTo(JsonWriter writer, params JsonConverter converters)`

**用途 / Purpose:** 处理 `write to` 相关逻辑。

### Equals
`public bool Equals(JValue? other)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### ToString
`public string ToString(string format)`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### ToString
`public string ToString(IFormatProvider formatProvider)`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### ToString
`public string ToString(string? format, IFormatProvider formatProvider)`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### CompareTo
`public int CompareTo(JValue obj)`

**用途 / Purpose:** 处理 `compare to` 相关逻辑。

## 使用示例

```csharp
var value = new JValue();
value.TryConvert(instance, binder, result);
```

## 参见

- [完整类目录](../catalog)