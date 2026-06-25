---
title: "FightAreaMarker"
description: "FightAreaMarker 的自动生成类参考。"
---
# FightAreaMarker

**Namespace:** TaleWorlds.MountAndBlade.Objects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FightAreaMarker : AreaMarker`
**Base:** `AreaMarker`
**File:** `TaleWorlds.MountAndBlade/Objects/FightAreaMarker.cs`

## 概述

`FightAreaMarker` 位于 `TaleWorlds.MountAndBlade.Objects`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Objects` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetAgentsInRange
`public IEnumerable<Agent> GetAgentsInRange(Team team, bool humanOnly = true)`

**用途 / Purpose:** 读取并返回当前对象中 「agents in range」 的结果。

```csharp
// 先通过子系统 API 拿到 FightAreaMarker 实例
FightAreaMarker fightAreaMarker = ...;
var result = fightAreaMarker.GetAgentsInRange(team, false);
```

### GetAgentsInRange
`public IEnumerable<Agent> GetAgentsInRange(BattleSideEnum side, bool humanOnly = true)`

**用途 / Purpose:** 读取并返回当前对象中 「agents in range」 的结果。

```csharp
// 先通过子系统 API 拿到 FightAreaMarker 实例
FightAreaMarker fightAreaMarker = ...;
var result = fightAreaMarker.GetAgentsInRange(side, false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
FightAreaMarker fightAreaMarker = ...;
fightAreaMarker.GetAgentsInRange(team, false);
```

## 参见

- [本区域目录](../)