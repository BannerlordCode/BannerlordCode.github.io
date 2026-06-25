---
title: "PeerIdJsonConverter"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PeerIdJsonConverter`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PeerIdJsonConverter

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public class PeerIdJsonConverter : JsonConverter`
**Base:** `JsonConverter`
**File:** `Bannerlord.Source/bin/TaleWorlds.Diamond/TaleWorlds.Diamond/PeerIdJsonConverter.cs`

## 概述

`PeerIdJsonConverter` 位于 `TaleWorlds.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CanConvert
`public override bool CanConvert(Type objectType)`

**用途 / Purpose:** 判断当前对象是否可以执行 `convert`。

### ReadJson
`public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)`

**用途 / Purpose:** 处理 `read json` 相关逻辑。

### WriteJson
`public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)`

**用途 / Purpose:** 处理 `write json` 相关逻辑。

## 使用示例

```csharp
var value = new PeerIdJsonConverter();
value.CanConvert(objectType);
```

## 参见

- [完整类目录](../catalog)