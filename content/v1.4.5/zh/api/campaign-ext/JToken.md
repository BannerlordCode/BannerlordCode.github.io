---
title: "JToken"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `JToken`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# JToken

**Namespace:** Newtonsoft.Json.Linq
**Module:** Newtonsoft.Json
**Type:** `public abstract class JToken : IJEnumerable<JToken>, IEnumerable<JToken>, IEnumerable, IJsonLineInfo, ICloneable, IDynamicMetaObjectProvider`
**Base:** `IJEnumerable<JToken>`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Linq/JToken.cs`

## 概述

`JToken` 位于 `Newtonsoft.Json.Linq`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Newtonsoft.Json.Linq` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `EqualityComparer` | `public static JTokenEqualityComparer EqualityComparer { get; }` |
| `Parent` | `public JContainer? Parent { get; set; }` |
| `Root` | `public JToken Root { get; }` |
| `Type` | `public abstract JTokenType Type { get; set; }` |
| `HasValues` | `public abstract bool HasValues { get; set; }` |
| `Next` | `public JToken? Next { get; set; }` |
| `Previous` | `public JToken? Previous { get; set; }` |
| `Path` | `public string Path { get; }` |
| `this` | `public virtual JToken? this { get; set; }` |
| `First` | `public virtual JToken? First { get; }` |
| `Last` | `public virtual JToken? Last { get; }` |

## 主要方法

### WriteToAsync
`public virtual Task WriteToAsync(JsonWriter writer, CancellationToken cancellationToken, params JsonConverter converters)`

**用途 / Purpose:** 处理 `write to async` 相关逻辑。

### WriteToAsync
`public Task WriteToAsync(JsonWriter writer, params JsonConverter converters)`

**用途 / Purpose:** 处理 `write to async` 相关逻辑。

### ReadFromAsync
`public static Task<JToken> ReadFromAsync(JsonReader reader, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `read from async` 相关逻辑。

### ReadFromAsync
`public static async Task<JToken> ReadFromAsync(JsonReader reader, JsonLoadSettings? settings, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `read from async` 相关逻辑。

### LoadAsync
`public static Task<JToken> LoadAsync(JsonReader reader, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 加载 `async` 数据。

### LoadAsync
`public static Task<JToken> LoadAsync(JsonReader reader, JsonLoadSettings? settings, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 加载 `async` 数据。

### DeepEquals
`public static bool DeepEquals(JToken? t1, JToken? t2)`

**用途 / Purpose:** 处理 `deep equals` 相关逻辑。

### AddAfterSelf
`public void AddAfterSelf(object? content)`

**用途 / Purpose:** 向当前集合/状态中添加 `after self`。

### AddBeforeSelf
`public void AddBeforeSelf(object? content)`

**用途 / Purpose:** 向当前集合/状态中添加 `before self`。

### Ancestors
`public IEnumerable<JToken> Ancestors()`

**用途 / Purpose:** 处理 `ancestors` 相关逻辑。

### AncestorsAndSelf
`public IEnumerable<JToken> AncestorsAndSelf()`

**用途 / Purpose:** 处理 `ancestors and self` 相关逻辑。

### AfterSelf
`public IEnumerable<JToken> AfterSelf()`

**用途 / Purpose:** 处理 `after self` 相关逻辑。

### BeforeSelf
`public IEnumerable<JToken> BeforeSelf()`

**用途 / Purpose:** 处理 `before self` 相关逻辑。

### Children
`public virtual JEnumerable<JToken> Children()`

**用途 / Purpose:** 处理 `children` 相关逻辑。

### Remove
`public void Remove()`

**用途 / Purpose:** 从当前集合/状态中移除 `remove`。

### Replace
`public void Replace(JToken value)`

**用途 / Purpose:** 处理 `replace` 相关逻辑。

### WriteTo
`public abstract void WriteTo(JsonWriter writer, params JsonConverter converters)`

**用途 / Purpose:** 处理 `write to` 相关逻辑。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### ToString
`public string ToString(Formatting formatting, params JsonConverter converters)`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### bool
`public static explicit operator bool(JToken value)`

**用途 / Purpose:** 处理 `bool` 相关逻辑。

### DateTimeOffset
`public static explicit operator DateTimeOffset(JToken value)`

**用途 / Purpose:** 处理 `date time offset` 相关逻辑。

### long
`public static explicit operator long(JToken value)`

**用途 / Purpose:** 处理 `long` 相关逻辑。

### int
`public static explicit operator int(JToken value)`

**用途 / Purpose:** 处理 `int` 相关逻辑。

### short
`public static explicit operator short(JToken value)`

**用途 / Purpose:** 处理 `short` 相关逻辑。

### ushort
`public static explicit operator ushort(JToken value)`

**用途 / Purpose:** 处理 `ushort` 相关逻辑。

### char
`public static explicit operator char(JToken value)`

**用途 / Purpose:** 处理 `char` 相关逻辑。

### byte
`public static explicit operator byte(JToken value)`

**用途 / Purpose:** 处理 `byte` 相关逻辑。

### sbyte
`public static explicit operator sbyte(JToken value)`

**用途 / Purpose:** 处理 `sbyte` 相关逻辑。

### DateTime
`public static explicit operator DateTime(JToken value)`

**用途 / Purpose:** 处理 `date time` 相关逻辑。

### decimal
`public static explicit operator decimal(JToken value)`

**用途 / Purpose:** 处理 `decimal` 相关逻辑。

### double
`public static explicit operator double(JToken value)`

**用途 / Purpose:** 处理 `double` 相关逻辑。

### float
`public static explicit operator float(JToken value)`

**用途 / Purpose:** 处理 `float` 相关逻辑。

### uint
`public static explicit operator uint(JToken value)`

**用途 / Purpose:** 处理 `uint` 相关逻辑。

### ulong
`public static explicit operator ulong(JToken value)`

**用途 / Purpose:** 处理 `ulong` 相关逻辑。

### Guid
`public static explicit operator Guid(JToken value)`

**用途 / Purpose:** 处理 `guid` 相关逻辑。

### TimeSpan
`public static explicit operator TimeSpan(JToken value)`

**用途 / Purpose:** 处理 `time span` 相关逻辑。

### JToken
`public static implicit operator JToken(bool value)`

**用途 / Purpose:** 处理 `j token` 相关逻辑。

### JToken
`public static implicit operator JToken(DateTimeOffset value)`

**用途 / Purpose:** 处理 `j token` 相关逻辑。

### JToken
`public static implicit operator JToken(byte value)`

**用途 / Purpose:** 处理 `j token` 相关逻辑。

### JToken
`public static implicit operator JToken(byte? value)`

**用途 / Purpose:** 处理 `j token` 相关逻辑。

### JToken
`public static implicit operator JToken(sbyte value)`

**用途 / Purpose:** 处理 `j token` 相关逻辑。

### JToken
`public static implicit operator JToken(sbyte? value)`

**用途 / Purpose:** 处理 `j token` 相关逻辑。

### JToken
`public static implicit operator JToken(bool? value)`

**用途 / Purpose:** 处理 `j token` 相关逻辑。

### JToken
`public static implicit operator JToken(long value)`

**用途 / Purpose:** 处理 `j token` 相关逻辑。

### JToken
`public static implicit operator JToken(DateTime? value)`

**用途 / Purpose:** 处理 `j token` 相关逻辑。

### JToken
`public static implicit operator JToken(DateTimeOffset? value)`

**用途 / Purpose:** 处理 `j token` 相关逻辑。

### JToken
`public static implicit operator JToken(decimal? value)`

**用途 / Purpose:** 处理 `j token` 相关逻辑。

### JToken
`public static implicit operator JToken(double? value)`

**用途 / Purpose:** 处理 `j token` 相关逻辑。

### JToken
`public static implicit operator JToken(short value)`

**用途 / Purpose:** 处理 `j token` 相关逻辑。

### JToken
`public static implicit operator JToken(ushort value)`

**用途 / Purpose:** 处理 `j token` 相关逻辑。

### JToken
`public static implicit operator JToken(int value)`

**用途 / Purpose:** 处理 `j token` 相关逻辑。

### JToken
`public static implicit operator JToken(int? value)`

**用途 / Purpose:** 处理 `j token` 相关逻辑。

### JToken
`public static implicit operator JToken(DateTime value)`

**用途 / Purpose:** 处理 `j token` 相关逻辑。

### JToken
`public static implicit operator JToken(long? value)`

**用途 / Purpose:** 处理 `j token` 相关逻辑。

### JToken
`public static implicit operator JToken(float? value)`

**用途 / Purpose:** 处理 `j token` 相关逻辑。

### JToken
`public static implicit operator JToken(decimal value)`

**用途 / Purpose:** 处理 `j token` 相关逻辑。

### JToken
`public static implicit operator JToken(short? value)`

**用途 / Purpose:** 处理 `j token` 相关逻辑。

### JToken
`public static implicit operator JToken(ushort? value)`

**用途 / Purpose:** 处理 `j token` 相关逻辑。

### JToken
`public static implicit operator JToken(uint? value)`

**用途 / Purpose:** 处理 `j token` 相关逻辑。

### JToken
`public static implicit operator JToken(ulong? value)`

**用途 / Purpose:** 处理 `j token` 相关逻辑。

### JToken
`public static implicit operator JToken(double value)`

**用途 / Purpose:** 处理 `j token` 相关逻辑。

### JToken
`public static implicit operator JToken(float value)`

**用途 / Purpose:** 处理 `j token` 相关逻辑。

### JToken
`public static implicit operator JToken(string? value)`

**用途 / Purpose:** 处理 `j token` 相关逻辑。

### JToken
`public static implicit operator JToken(uint value)`

**用途 / Purpose:** 处理 `j token` 相关逻辑。

### JToken
`public static implicit operator JToken(ulong value)`

**用途 / Purpose:** 处理 `j token` 相关逻辑。

### JToken
`public static implicit operator JToken(byte value)`

**用途 / Purpose:** 处理 `j token` 相关逻辑。

### JToken
`public static implicit operator JToken(Uri? value)`

**用途 / Purpose:** 处理 `j token` 相关逻辑。

### JToken
`public static implicit operator JToken(TimeSpan value)`

**用途 / Purpose:** 处理 `j token` 相关逻辑。

### JToken
`public static implicit operator JToken(TimeSpan? value)`

**用途 / Purpose:** 处理 `j token` 相关逻辑。

### JToken
`public static implicit operator JToken(Guid value)`

**用途 / Purpose:** 处理 `j token` 相关逻辑。

### JToken
`public static implicit operator JToken(Guid? value)`

**用途 / Purpose:** 处理 `j token` 相关逻辑。

### CreateReader
`public JsonReader CreateReader()`

**用途 / Purpose:** 创建一个 `reader` 实例或对象。

### FromObject
`public static JToken FromObject(object o)`

**用途 / Purpose:** 处理 `from object` 相关逻辑。

### FromObject
`public static JToken FromObject(object o, JsonSerializer jsonSerializer)`

**用途 / Purpose:** 处理 `from object` 相关逻辑。

### ToObject
`public object? ToObject(Type objectType)`

**用途 / Purpose:** 处理 `to object` 相关逻辑。

### ToObject
`public object? ToObject(Type objectType, JsonSerializer jsonSerializer)`

**用途 / Purpose:** 处理 `to object` 相关逻辑。

### ReadFrom
`public static JToken ReadFrom(JsonReader reader)`

**用途 / Purpose:** 处理 `read from` 相关逻辑。

### ReadFrom
`public static JToken ReadFrom(JsonReader reader, JsonLoadSettings? settings)`

**用途 / Purpose:** 处理 `read from` 相关逻辑。

### Parse
`public static JToken Parse(string json)`

**用途 / Purpose:** 处理 `parse` 相关逻辑。

### Parse
`public static JToken Parse(string json, JsonLoadSettings? settings)`

**用途 / Purpose:** 处理 `parse` 相关逻辑。

### Load
`public static JToken Load(JsonReader reader, JsonLoadSettings? settings)`

**用途 / Purpose:** 加载 `load` 数据。

### Load
`public static JToken Load(JsonReader reader)`

**用途 / Purpose:** 加载 `load` 数据。

### SelectToken
`public JToken? SelectToken(string path)`

**用途 / Purpose:** 处理 `select token` 相关逻辑。

### SelectToken
`public JToken? SelectToken(string path, bool errorWhenNoMatch)`

**用途 / Purpose:** 处理 `select token` 相关逻辑。

### SelectToken
`public JToken? SelectToken(string path, JsonSelectSettings? settings)`

**用途 / Purpose:** 处理 `select token` 相关逻辑。

### SelectTokens
`public IEnumerable<JToken> SelectTokens(string path)`

**用途 / Purpose:** 处理 `select tokens` 相关逻辑。

### SelectTokens
`public IEnumerable<JToken> SelectTokens(string path, bool errorWhenNoMatch)`

**用途 / Purpose:** 处理 `select tokens` 相关逻辑。

### SelectTokens
`public IEnumerable<JToken> SelectTokens(string path, JsonSelectSettings? settings)`

**用途 / Purpose:** 处理 `select tokens` 相关逻辑。

### DeepClone
`public JToken DeepClone()`

**用途 / Purpose:** 处理 `deep clone` 相关逻辑。

### AddAnnotation
`public void AddAnnotation(object annotation)`

**用途 / Purpose:** 向当前集合/状态中添加 `annotation`。

### Annotation
`public object? Annotation(Type type)`

**用途 / Purpose:** 处理 `annotation` 相关逻辑。

### Annotations
`public IEnumerable<object> Annotations(Type type)`

**用途 / Purpose:** 处理 `annotations` 相关逻辑。

### RemoveAnnotations
`public void RemoveAnnotations(Type type)`

**用途 / Purpose:** 从当前集合/状态中移除 `annotations`。

## 使用示例

```csharp
var implementation = new CustomJToken();
```

## 参见

- [完整类目录](../catalog)