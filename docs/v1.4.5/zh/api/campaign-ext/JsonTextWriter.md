<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `JsonTextWriter`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# JsonTextWriter

**Namespace:** Newtonsoft.Json
**Module:** Newtonsoft.Json
**Type:** `public class JsonTextWriter : JsonWriter`
**Base:** `JsonWriter`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json/JsonTextWriter.cs`

## 概述

`JsonTextWriter` 位于 `Newtonsoft.Json`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Newtonsoft.Json` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ArrayPool` | `public IArrayPool<char>? ArrayPool { get; set; }` |
| `Indentation` | `public int Indentation { get; set; }` |
| `QuoteChar` | `public char QuoteChar { get; set; }` |
| `IndentChar` | `public char IndentChar { get; set; }` |
| `QuoteName` | `public bool QuoteName { get; set; }` |

## 主要方法

### FlushAsync
`public override Task FlushAsync(CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `flush async` 相关逻辑。

### CloseAsync
`public override Task CloseAsync(CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `close async` 相关逻辑。

### WriteEndAsync
`public override Task WriteEndAsync(CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write end async` 相关逻辑。

### WriteRawAsync
`public override Task WriteRawAsync(string? json, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write raw async` 相关逻辑。

### WriteNullAsync
`public override Task WriteNullAsync(CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write null async` 相关逻辑。

### WritePropertyNameAsync
`public override Task WritePropertyNameAsync(string name, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write property name async` 相关逻辑。

### WritePropertyNameAsync
`public override Task WritePropertyNameAsync(string name, bool escape, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write property name async` 相关逻辑。

### WriteStartArrayAsync
`public override Task WriteStartArrayAsync(CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write start array async` 相关逻辑。

### WriteValueAsync
`public override Task WriteValueAsync(char value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public override Task WriteValueAsync(char? value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public override Task WriteValueAsync(DateTime value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public override Task WriteValueAsync(DateTime? value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public override Task WriteValueAsync(DateTimeOffset value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public override Task WriteValueAsync(DateTimeOffset? value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public override Task WriteValueAsync(decimal value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public override Task WriteValueAsync(decimal? value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public override Task WriteValueAsync(double value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public override Task WriteValueAsync(double? value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public override Task WriteValueAsync(float value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public override Task WriteValueAsync(float? value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public override Task WriteValueAsync(Guid value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public override Task WriteValueAsync(Guid? value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public override Task WriteValueAsync(int value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public override Task WriteValueAsync(int? value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public override Task WriteValueAsync(long value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public override Task WriteValueAsync(long? value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public override Task WriteValueAsync(object? value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public override Task WriteValueAsync(sbyte value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public override Task WriteValueAsync(sbyte? value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public override Task WriteValueAsync(short value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public override Task WriteValueAsync(short? value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public override Task WriteValueAsync(string? value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public override Task WriteValueAsync(TimeSpan value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public override Task WriteValueAsync(TimeSpan? value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public override Task WriteValueAsync(uint value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public override Task WriteValueAsync(uint? value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public override Task WriteValueAsync(ulong value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public override Task WriteValueAsync(ulong? value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public override Task WriteValueAsync(Uri? value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public override Task WriteValueAsync(ushort value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteValueAsync
`public override Task WriteValueAsync(ushort? value, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write value async` 相关逻辑。

### WriteCommentAsync
`public override Task WriteCommentAsync(string? text, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write comment async` 相关逻辑。

### WriteEndArrayAsync
`public override Task WriteEndArrayAsync(CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write end array async` 相关逻辑。

### WriteEndConstructorAsync
`public override Task WriteEndConstructorAsync(CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write end constructor async` 相关逻辑。

### WriteEndObjectAsync
`public override Task WriteEndObjectAsync(CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write end object async` 相关逻辑。

### WriteRawValueAsync
`public override Task WriteRawValueAsync(string? json, CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `write raw value async` 相关逻辑。

### Flush
`public override void Flush()`

**用途 / Purpose:** 处理 `flush` 相关逻辑。

### Close
`public override void Close()`

**用途 / Purpose:** 处理 `close` 相关逻辑。

### WriteStartObject
`public override void WriteStartObject()`

**用途 / Purpose:** 处理 `write start object` 相关逻辑。

### WriteStartArray
`public override void WriteStartArray()`

**用途 / Purpose:** 处理 `write start array` 相关逻辑。

### WritePropertyName
`public override void WritePropertyName(string name)`

**用途 / Purpose:** 处理 `write property name` 相关逻辑。

### WritePropertyName
`public override void WritePropertyName(string name, bool escape)`

**用途 / Purpose:** 处理 `write property name` 相关逻辑。

### WriteValue
`public override void WriteValue(object? value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteNull
`public override void WriteNull()`

**用途 / Purpose:** 处理 `write null` 相关逻辑。

### WriteUndefined
`public override void WriteUndefined()`

**用途 / Purpose:** 处理 `write undefined` 相关逻辑。

### WriteRaw
`public override void WriteRaw(string? json)`

**用途 / Purpose:** 处理 `write raw` 相关逻辑。

### WriteValue
`public override void WriteValue(string? value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public override void WriteValue(int value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public override void WriteValue(uint value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public override void WriteValue(long value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public override void WriteValue(ulong value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public override void WriteValue(float value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public override void WriteValue(float? value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public override void WriteValue(double value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public override void WriteValue(double? value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public override void WriteValue(bool value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public override void WriteValue(short value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public override void WriteValue(ushort value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public override void WriteValue(char value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public override void WriteValue(byte value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public override void WriteValue(sbyte value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public override void WriteValue(decimal value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public override void WriteValue(DateTime value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public override void WriteValue(byte ? value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public override void WriteValue(DateTimeOffset value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public override void WriteValue(Guid value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public override void WriteValue(TimeSpan value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public override void WriteValue(Uri? value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteComment
`public override void WriteComment(string? text)`

**用途 / Purpose:** 处理 `write comment` 相关逻辑。

### WriteWhitespace
`public override void WriteWhitespace(string ws)`

**用途 / Purpose:** 处理 `write whitespace` 相关逻辑。

## 使用示例

```csharp
var value = new JsonTextWriter();
value.FlushAsync(default(CancellationToken));
```

## 参见

- [完整类目录](../catalog)