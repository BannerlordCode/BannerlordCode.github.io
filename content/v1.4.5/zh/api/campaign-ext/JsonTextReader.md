---
title: "JsonTextReader"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `JsonTextReader`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# JsonTextReader

**Namespace:** Newtonsoft.Json
**Module:** Newtonsoft.Json
**Type:** `public class JsonTextReader : JsonReader, IJsonLineInfo`
**Base:** `JsonReader`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json/JsonTextReader.cs`

## 概述

`JsonTextReader` 位于 `Newtonsoft.Json`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Newtonsoft.Json` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PropertyNameTable` | `public JsonNameTable? PropertyNameTable { get; set; }` |
| `ArrayPool` | `public IArrayPool<char>? ArrayPool { get; set; }` |
| `LineNumber` | `public int LineNumber { get; }` |

## 主要方法

### ReadAsync
`public override Task<bool> ReadAsync(CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `read async` 相关逻辑。

### ReadAsBooleanAsync
`public override Task<bool?> ReadAsBooleanAsync(CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `read as boolean async` 相关逻辑。

### ReadAsBytesAsync
`public override Task<byte ?> ReadAsBytesAsync(CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `read as bytes async` 相关逻辑。

### ReadAsDateTimeAsync
`public override Task<DateTime?> ReadAsDateTimeAsync(CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `read as date time async` 相关逻辑。

### ReadAsDateTimeOffsetAsync
`public override Task<DateTimeOffset?> ReadAsDateTimeOffsetAsync(CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `read as date time offset async` 相关逻辑。

### ReadAsDecimalAsync
`public override Task<decimal?> ReadAsDecimalAsync(CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `read as decimal async` 相关逻辑。

### ReadAsDoubleAsync
`public override Task<double?> ReadAsDoubleAsync(CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `read as double async` 相关逻辑。

### ReadAsInt32Async
`public override Task<int?> ReadAsInt32Async(CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `read as int32 async` 相关逻辑。

### ReadAsStringAsync
`public override Task<string?> ReadAsStringAsync(CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `read as string async` 相关逻辑。

### Read
`public override bool Read()`

**用途 / Purpose:** 处理 `read` 相关逻辑。

### ReadAsInt32
`public override int? ReadAsInt32()`

**用途 / Purpose:** 处理 `read as int32` 相关逻辑。

### ReadAsDateTime
`public override DateTime? ReadAsDateTime()`

**用途 / Purpose:** 处理 `read as date time` 相关逻辑。

### ReadAsString
`public override string? ReadAsString()`

**用途 / Purpose:** 处理 `read as string` 相关逻辑。

### ReadAsBytes
`public override byte ? ReadAsBytes()`

**用途 / Purpose:** 处理 `read as bytes` 相关逻辑。

### ReadAsBoolean
`public override bool? ReadAsBoolean()`

**用途 / Purpose:** 处理 `read as boolean` 相关逻辑。

### ReadAsDateTimeOffset
`public override DateTimeOffset? ReadAsDateTimeOffset()`

**用途 / Purpose:** 处理 `read as date time offset` 相关逻辑。

### ReadAsDecimal
`public override decimal? ReadAsDecimal()`

**用途 / Purpose:** 处理 `read as decimal` 相关逻辑。

### ReadAsDouble
`public override double? ReadAsDouble()`

**用途 / Purpose:** 处理 `read as double` 相关逻辑。

### Close
`public override void Close()`

**用途 / Purpose:** 处理 `close` 相关逻辑。

### HasLineInfo
`public bool HasLineInfo()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `line info`。

## 使用示例

```csharp
var value = new JsonTextReader();
value.ReadAsync(default(CancellationToken));
```

## 参见

- [完整类目录](../catalog)