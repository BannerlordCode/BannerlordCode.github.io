---
title: "JsonWriter"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `JsonWriter`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# JsonWriter

**Namespace:** Newtonsoft.Json
**Module:** Newtonsoft.Json
**Type:** `public abstract class JsonWriter : IDisposable`
**Base:** `IDisposable`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json/JsonWriter.cs`

## 概述

`JsonWriter` 位于 `Newtonsoft.Json`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Newtonsoft.Json` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CloseOutput` | `public bool CloseOutput { get; set; }` |
| `AutoCompleteOnClose` | `public bool AutoCompleteOnClose { get; set; }` |
| `WriteState` | `public WriteState WriteState { get; }` |
| `Path` | `public string Path { get; }` |
| `Formatting` | `public Formatting Formatting { get; set; }` |
| `DateFormatHandling` | `public DateFormatHandling DateFormatHandling { get; set; }` |
| `DateTimeZoneHandling` | `public DateTimeZoneHandling DateTimeZoneHandling { get; set; }` |
| `StringEscapeHandling` | `public StringEscapeHandling StringEscapeHandling { get; set; }` |
| `FloatFormatHandling` | `public FloatFormatHandling FloatFormatHandling { get; set; }` |
| `DateFormatString` | `public string? DateFormatString { get; set; }` |
| `Culture` | `public CultureInfo Culture { get; set; }` |

## 主要方法

### CloseAsync
`public virtual Task CloseAsync(CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `close async` 相关逻辑。

### FlushAsync
`public virtual Task FlushAsync(CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `flush async` 相关逻辑。

### WriteRawAsync
`public virtual Task WriteRawAsync(string? json, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write raw async` 相关逻辑。

### WriteEndAsync
`public virtual Task WriteEndAsync(CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write end async` 相关逻辑。

### WriteEndArrayAsync
`public virtual Task WriteEndArrayAsync(CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write end array async` 相关逻辑。

### WriteEndConstructorAsync
`public virtual Task WriteEndConstructorAsync(CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write end constructor async` 相关逻辑。

### WriteEndObjectAsync
`public virtual Task WriteEndObjectAsync(CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write end object async` 相关逻辑。

### WriteNullAsync
`public virtual Task WriteNullAsync(CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write null async` 相关逻辑。

### WritePropertyNameAsync
`public virtual Task WritePropertyNameAsync(string name, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write property name async` 相关逻辑。

### WritePropertyNameAsync
`public virtual Task WritePropertyNameAsync(string name, bool escape, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write property name async` 相关逻辑。

### WriteStartArrayAsync
`public virtual Task WriteStartArrayAsync(CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write start array async` 相关逻辑。

### WriteCommentAsync
`public virtual Task WriteCommentAsync(string? text, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write comment async` 相关逻辑。

### WriteRawValueAsync
`public virtual Task WriteRawValueAsync(string? json, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write raw value async` 相关逻辑。

### WriteStartConstructorAsync
`public virtual Task WriteStartConstructorAsync(string name, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write start constructor async` 相关逻辑。

### WriteStartObjectAsync
`public virtual Task WriteStartObjectAsync(CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write start object async` 相关逻辑。

### WriteTokenAsync
`public Task WriteTokenAsync(JsonReader reader, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write token async` 相关逻辑。

### WriteTokenAsync
`public Task WriteTokenAsync(JsonReader reader, bool writeChildren, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write token async` 相关逻辑。

### WriteTokenAsync
`public Task WriteTokenAsync(JsonToken token, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write token async` 相关逻辑。

### WriteTokenAsync
`public Task WriteTokenAsync(JsonToken token, object? value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write token async` 相关逻辑。

### WriteValueAsync
`public virtual Task WriteValueAsync(bool value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public virtual Task WriteValueAsync(bool? value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public virtual Task WriteValueAsync(byte value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public virtual Task WriteValueAsync(byte? value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public virtual Task WriteValueAsync(byte ? value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public virtual Task WriteValueAsync(char value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public virtual Task WriteValueAsync(char? value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public virtual Task WriteValueAsync(DateTime value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public virtual Task WriteValueAsync(DateTime? value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public virtual Task WriteValueAsync(DateTimeOffset value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public virtual Task WriteValueAsync(DateTimeOffset? value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public virtual Task WriteValueAsync(decimal value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public virtual Task WriteValueAsync(decimal? value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public virtual Task WriteValueAsync(double value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public virtual Task WriteValueAsync(double? value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public virtual Task WriteValueAsync(float value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public virtual Task WriteValueAsync(float? value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public virtual Task WriteValueAsync(Guid value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public virtual Task WriteValueAsync(Guid? value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public virtual Task WriteValueAsync(int value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public virtual Task WriteValueAsync(int? value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public virtual Task WriteValueAsync(long value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public virtual Task WriteValueAsync(long? value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public virtual Task WriteValueAsync(object? value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public virtual Task WriteValueAsync(sbyte value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public virtual Task WriteValueAsync(sbyte? value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public virtual Task WriteValueAsync(short value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public virtual Task WriteValueAsync(short? value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public virtual Task WriteValueAsync(string? value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public virtual Task WriteValueAsync(TimeSpan value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public virtual Task WriteValueAsync(TimeSpan? value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public virtual Task WriteValueAsync(uint value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public virtual Task WriteValueAsync(uint? value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public virtual Task WriteValueAsync(ulong value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public virtual Task WriteValueAsync(ulong? value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public virtual Task WriteValueAsync(Uri? value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public virtual Task WriteValueAsync(ushort value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public virtual Task WriteValueAsync(ushort? value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteUndefinedAsync
`public virtual Task WriteUndefinedAsync(CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write undefined async` 相关逻辑。

### WriteWhitespaceAsync
`public virtual Task WriteWhitespaceAsync(string ws, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write whitespace async` 相关逻辑。

### Flush
`public abstract void Flush()`

**用途 / Purpose:** 处理 `flush` 相关逻辑。

### Close
`public virtual void Close()`

**用途 / Purpose:** 处理 `close` 相关逻辑。

### WriteStartObject
`public virtual void WriteStartObject()`

**用途 / Purpose:** 处理 `write start object` 相关逻辑。

### WriteEndObject
`public virtual void WriteEndObject()`

**用途 / Purpose:** 处理 `write end object` 相关逻辑。

### WriteStartArray
`public virtual void WriteStartArray()`

**用途 / Purpose:** 处理 `write start array` 相关逻辑。

### WriteEndArray
`public virtual void WriteEndArray()`

**用途 / Purpose:** 处理 `write end array` 相关逻辑。

### WriteStartConstructor
`public virtual void WriteStartConstructor(string name)`

**用途 / Purpose:** 处理 `write start constructor` 相关逻辑。

### WriteEndConstructor
`public virtual void WriteEndConstructor()`

**用途 / Purpose:** 处理 `write end constructor` 相关逻辑。

### WritePropertyName
`public virtual void WritePropertyName(string name)`

**用途 / Purpose:** 处理 `write property name` 相关逻辑。

### WritePropertyName
`public virtual void WritePropertyName(string name, bool escape)`

**用途 / Purpose:** 处理 `write property name` 相关逻辑。

### WriteEnd
`public virtual void WriteEnd()`

**用途 / Purpose:** 处理 `write end` 相关逻辑。

### WriteToken
`public void WriteToken(JsonReader reader)`

**用途 / Purpose:** 处理 `write token` 相关逻辑。

### WriteToken
`public void WriteToken(JsonReader reader, bool writeChildren)`

**用途 / Purpose:** 处理 `write token` 相关逻辑。

### WriteToken
`public void WriteToken(JsonToken token, object? value)`

**用途 / Purpose:** 处理 `write token` 相关逻辑。

### WriteToken
`public void WriteToken(JsonToken token)`

**用途 / Purpose:** 处理 `write token` 相关逻辑。

### WriteNull
`public virtual void WriteNull()`

**用途 / Purpose:** 处理 `write null` 相关逻辑。

### WriteUndefined
`public virtual void WriteUndefined()`

**用途 / Purpose:** 处理 `write undefined` 相关逻辑。

### WriteRaw
`public virtual void WriteRaw(string? json)`

**用途 / Purpose:** 处理 `write raw` 相关逻辑。

### WriteRawValue
`public virtual void WriteRawValue(string? json)`

**用途 / Purpose:** 处理 `write raw value` 相关逻辑。

### WriteValue
`public virtual void WriteValue(string? value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public virtual void WriteValue(int value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public virtual void WriteValue(uint value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public virtual void WriteValue(long value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public virtual void WriteValue(ulong value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public virtual void WriteValue(float value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public virtual void WriteValue(double value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public virtual void WriteValue(bool value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public virtual void WriteValue(short value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public virtual void WriteValue(ushort value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public virtual void WriteValue(char value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public virtual void WriteValue(byte value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public virtual void WriteValue(sbyte value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public virtual void WriteValue(decimal value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public virtual void WriteValue(DateTime value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public virtual void WriteValue(DateTimeOffset value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public virtual void WriteValue(Guid value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public virtual void WriteValue(TimeSpan value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public virtual void WriteValue(int? value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public virtual void WriteValue(uint? value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public virtual void WriteValue(long? value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public virtual void WriteValue(ulong? value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public virtual void WriteValue(float? value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public virtual void WriteValue(double? value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public virtual void WriteValue(bool? value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public virtual void WriteValue(short? value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public virtual void WriteValue(ushort? value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public virtual void WriteValue(char? value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public virtual void WriteValue(byte? value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public virtual void WriteValue(sbyte? value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public virtual void WriteValue(decimal? value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public virtual void WriteValue(DateTime? value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public virtual void WriteValue(DateTimeOffset? value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public virtual void WriteValue(Guid? value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public virtual void WriteValue(TimeSpan? value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public virtual void WriteValue(byte ? value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public virtual void WriteValue(Uri? value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public virtual void WriteValue(object? value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteComment
`public virtual void WriteComment(string? text)`

**用途 / Purpose:** 处理 `write comment` 相关逻辑。

### WriteWhitespace
`public virtual void WriteWhitespace(string ws)`

**用途 / Purpose:** 处理 `write whitespace` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomJsonWriter();
```

## 参见

- [完整类目录](../catalog)