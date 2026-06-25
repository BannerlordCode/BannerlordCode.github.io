---
title: "JsonValidatingReader"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `JsonValidatingReader`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# JsonValidatingReader

**Namespace:** Newtonsoft.Json
**Module:** Newtonsoft.Json
**Type:** `class`
**Base:** 无
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json/JsonValidatingReader.cs`

## 概述

`JsonValidatingReader` 位于 `Newtonsoft.Json`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Newtonsoft.Json` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Schema` | `public JsonSchema Schema { get; set; }` |

## 主要方法

### Close
`public override void Close()`

**用途 / Purpose:** 处理 `close` 相关逻辑。

### ReadAsInt32
`public override int? ReadAsInt32()`

**用途 / Purpose:** 处理 `read as int32` 相关逻辑。

### ReadAsBytes
`public override byte ReadAsBytes()`

**用途 / Purpose:** 处理 `read as bytes` 相关逻辑。

### ReadAsDecimal
`public override decimal? ReadAsDecimal()`

**用途 / Purpose:** 处理 `read as decimal` 相关逻辑。

### ReadAsDouble
`public override double? ReadAsDouble()`

**用途 / Purpose:** 处理 `read as double` 相关逻辑。

### ReadAsBoolean
`public override bool? ReadAsBoolean()`

**用途 / Purpose:** 处理 `read as boolean` 相关逻辑。

### ReadAsString
`public override string ReadAsString()`

**用途 / Purpose:** 处理 `read as string` 相关逻辑。

### ReadAsDateTime
`public override DateTime? ReadAsDateTime()`

**用途 / Purpose:** 处理 `read as date time` 相关逻辑。

### ReadAsDateTimeOffset
`public override DateTimeOffset? ReadAsDateTimeOffset()`

**用途 / Purpose:** 处理 `read as date time offset` 相关逻辑。

### Read
`public override bool Read()`

**用途 / Purpose:** 处理 `read` 相关逻辑。

## 使用示例

```csharp
var value = new JsonValidatingReader();
value.Close();
```

## 参见

- [完整类目录](../catalog)