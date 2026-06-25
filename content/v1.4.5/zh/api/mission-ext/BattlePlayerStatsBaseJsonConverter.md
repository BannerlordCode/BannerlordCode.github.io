---
title: "BattlePlayerStatsBaseJsonConverter"
description: "BattlePlayerStatsBaseJsonConverter 的自动生成类参考。"
---
# BattlePlayerStatsBaseJsonConverter

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattlePlayerStatsBaseJsonConverter : JsonConverter`
**Base:** `JsonConverter`
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/BattlePlayerStatsBaseJsonConverter.cs`

## 概述

`BattlePlayerStatsBaseJsonConverter` 位于 `TaleWorlds.MountAndBlade.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CanConvert
`public override bool CanConvert(Type objectType)`

**用途 / Purpose:** 检查当前对象是否满足 「convert」 的前置条件。

```csharp
// 先通过子系统 API 拿到 BattlePlayerStatsBaseJsonConverter 实例
BattlePlayerStatsBaseJsonConverter battlePlayerStatsBaseJsonConverter = ...;
var result = battlePlayerStatsBaseJsonConverter.CanConvert(objectType);
```

### ReadJson
`public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)`

**用途 / Purpose:** 读取「json」的数据或状态。

```csharp
// 先通过子系统 API 拿到 BattlePlayerStatsBaseJsonConverter 实例
BattlePlayerStatsBaseJsonConverter battlePlayerStatsBaseJsonConverter = ...;
var result = battlePlayerStatsBaseJsonConverter.ReadJson(reader, objectType, existingValue, serializer);
```

### WriteJson
`public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)`

**用途 / Purpose:** 将「json」写入目标位置。

```csharp
// 先通过子系统 API 拿到 BattlePlayerStatsBaseJsonConverter 实例
BattlePlayerStatsBaseJsonConverter battlePlayerStatsBaseJsonConverter = ...;
battlePlayerStatsBaseJsonConverter.WriteJson(writer, value, serializer);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BattlePlayerStatsBaseJsonConverter battlePlayerStatsBaseJsonConverter = ...;
battlePlayerStatsBaseJsonConverter.CanConvert(objectType);
```

## 参见

- [本区域目录](../)