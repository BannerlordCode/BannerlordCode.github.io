---
title: "RestDataJsonConverter"
description: "RestDataJsonConverter 的自动生成类参考。"
---
# RestDataJsonConverter

**Namespace:** TaleWorlds.Diamond.Rest
**Module:** TaleWorlds.Diamond
**Type:** `public class RestDataJsonConverter : JsonConverter<RestData>`
**Base:** `JsonConverter<RestData>`
**File:** `bin/TaleWorlds.Diamond/TaleWorlds.Diamond.Rest/RestDataJsonConverter.cs`

## 概述

`RestDataJsonConverter` 位于 `TaleWorlds.Diamond.Rest`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Diamond.Rest` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### ReadJson
`public override RestData ReadJson(JsonReader reader, Type objectType, RestData existingValue, bool hasExistingValue, JsonSerializer serializer)`

**用途 / Purpose:** **用途 / Purpose:** 读取json的数据或状态。

```csharp
// 先通过子系统 API 拿到 RestDataJsonConverter 实例
RestDataJsonConverter restDataJsonConverter = ...;
var result = restDataJsonConverter.ReadJson(reader, objectType, existingValue, false, serializer);
```

### WriteJson
`public override void WriteJson(JsonWriter writer, RestData value, JsonSerializer serializer)`

**用途 / Purpose:** **用途 / Purpose:** 将json写入目标位置。

```csharp
// 先通过子系统 API 拿到 RestDataJsonConverter 实例
RestDataJsonConverter restDataJsonConverter = ...;
restDataJsonConverter.WriteJson(writer, value, serializer);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
RestDataJsonConverter restDataJsonConverter = ...;
restDataJsonConverter.ReadJson(reader, objectType, existingValue, false, serializer);
```

## 参见

- [本区域目录](../)