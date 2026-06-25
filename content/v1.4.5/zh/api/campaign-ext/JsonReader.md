---
title: "JsonReader"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `JsonReader`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# JsonReader

**Namespace:** Newtonsoft.Json
**Module:** Newtonsoft.Json
**Type:** `public abstract class JsonReader : IDisposable`
**Base:** `IDisposable`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json/JsonReader.cs`

## 概述

`JsonReader` 位于 `Newtonsoft.Json`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Newtonsoft.Json` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CloseInput` | `public bool CloseInput { get; set; }` |
| `SupportMultipleContent` | `public bool SupportMultipleContent { get; set; }` |
| `QuoteChar` | `public virtual char QuoteChar { get; set; }` |
| `DateTimeZoneHandling` | `public DateTimeZoneHandling DateTimeZoneHandling { get; set; }` |
| `DateParseHandling` | `public DateParseHandling DateParseHandling { get; set; }` |
| `FloatParseHandling` | `public FloatParseHandling FloatParseHandling { get; set; }` |
| `DateFormatString` | `public string? DateFormatString { get; set; }` |
| `MaxDepth` | `public int? MaxDepth { get; set; }` |
| `Depth` | `public virtual int Depth { get; }` |
| `Path` | `public virtual string Path { get; }` |
| `Culture` | `public CultureInfo Culture { get; set; }` |

## 主要方法

### ReadAsync
`public virtual Task<bool> ReadAsync(CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `read async` 相关逻辑。

### SkipAsync
`public async Task SkipAsync(CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `skip async` 相关逻辑。

### ReadAsBooleanAsync
`public virtual Task<bool?> ReadAsBooleanAsync(CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `read as boolean async` 相关逻辑。

### ReadAsBytesAsync
`public virtual Task<byte ?> ReadAsBytesAsync(CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `read as bytes async` 相关逻辑。

### ReadAsDateTimeAsync
`public virtual Task<DateTime?> ReadAsDateTimeAsync(CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `read as date time async` 相关逻辑。

### ReadAsDateTimeOffsetAsync
`public virtual Task<DateTimeOffset?> ReadAsDateTimeOffsetAsync(CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `read as date time offset async` 相关逻辑。

### ReadAsDecimalAsync
`public virtual Task<decimal?> ReadAsDecimalAsync(CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `read as decimal async` 相关逻辑。

### ReadAsDoubleAsync
`public virtual Task<double?> ReadAsDoubleAsync(CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `read as double async` 相关逻辑。

### ReadAsInt32Async
`public virtual Task<int?> ReadAsInt32Async(CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `read as int32 async` 相关逻辑。

### ReadAsStringAsync
`public virtual Task<string?> ReadAsStringAsync(CancellationToken cancellationToken = default(CancellationToken))`

**用途 / Purpose:** 处理 `read as string async` 相关逻辑。

### Read
`public abstract bool Read()`

**用途 / Purpose:** 处理 `read` 相关逻辑。

### ReadAsInt32
`public virtual int? ReadAsInt32()`

**用途 / Purpose:** 处理 `read as int32` 相关逻辑。

### ReadAsString
`public virtual string? ReadAsString()`

**用途 / Purpose:** 处理 `read as string` 相关逻辑。

### ReadAsBytes
`public virtual byte ? ReadAsBytes()`

**用途 / Purpose:** 处理 `read as bytes` 相关逻辑。

### ReadAsDouble
`public virtual double? ReadAsDouble()`

**用途 / Purpose:** 处理 `read as double` 相关逻辑。

### ReadAsBoolean
`public virtual bool? ReadAsBoolean()`

**用途 / Purpose:** 处理 `read as boolean` 相关逻辑。

### ReadAsDecimal
`public virtual decimal? ReadAsDecimal()`

**用途 / Purpose:** 处理 `read as decimal` 相关逻辑。

### ReadAsDateTime
`public virtual DateTime? ReadAsDateTime()`

**用途 / Purpose:** 处理 `read as date time` 相关逻辑。

### ReadAsDateTimeOffset
`public virtual DateTimeOffset? ReadAsDateTimeOffset()`

**用途 / Purpose:** 处理 `read as date time offset` 相关逻辑。

### Skip
`public void Skip()`

**用途 / Purpose:** 处理 `skip` 相关逻辑。

### Close
`public virtual void Close()`

**用途 / Purpose:** 处理 `close` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomJsonReader();
```

## 参见

- [完整类目录](../catalog)