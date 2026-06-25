---
title: "CustomBattleScoreContext"
description: "CustomBattleScoreContext 的自动生成类参考。"
---
# CustomBattleScoreContext

**Namespace:** TaleWorlds.MountAndBlade.Missions.BattleScore
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleScoreContext : BattleScoreContext`
**Base:** `BattleScoreContext`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Missions.BattleScore/CustomBattleScoreContext.cs`

## 概述

`CustomBattleScoreContext` 位于 `TaleWorlds.MountAndBlade.Missions.BattleScore`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Missions.BattleScore` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetAttackerBanner
`public override Banner GetAttackerBanner()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 attacker banner 的结果。

```csharp
// 先通过子系统 API 拿到 CustomBattleScoreContext 实例
CustomBattleScoreContext customBattleScoreContext = ...;
var result = customBattleScoreContext.GetAttackerBanner();
```

### GetDefenderBanner
`public override Banner GetDefenderBanner()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 defender banner 的结果。

```csharp
// 先通过子系统 API 拿到 CustomBattleScoreContext 实例
CustomBattleScoreContext customBattleScoreContext = ...;
var result = customBattleScoreContext.GetDefenderBanner();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CustomBattleScoreContext customBattleScoreContext = ...;
customBattleScoreContext.GetAttackerBanner();
```

## 参见

- [本区域目录](../)