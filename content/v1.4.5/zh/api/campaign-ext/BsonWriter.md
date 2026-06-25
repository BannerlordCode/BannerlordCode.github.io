---
title: "BsonWriter"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BsonWriter`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BsonWriter

**Namespace:** Newtonsoft.Json.Bson
**Module:** Newtonsoft.Json
**Type:** `class`
**Base:** 无
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Bson/BsonWriter.cs`

## 概述

`BsonWriter` 位于 `Newtonsoft.Json.Bson`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Newtonsoft.Json.Bson` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

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
`public override void WriteValue(double value)`

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
`public override void WriteValue(DateTimeOffset value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public override void WriteValue(byte value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public override void WriteValue(Guid value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public override void WriteValue(TimeSpan value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteValue
`public override void WriteValue(Uri value)`

**用途 / Purpose:** 处理 `write value` 相关逻辑。

### WriteObjectId
`public void WriteObjectId(byte value)`

**用途 / Purpose:** 处理 `write object id` 相关逻辑。

### WriteRegex
`public void WriteRegex(string pattern, string options)`

**用途 / Purpose:** 处理 `write regex` 相关逻辑。

## 使用示例

```csharp
var value = new BsonWriter();
value.WriteValue(0);
```

## 参见

- [完整类目录](../catalog)