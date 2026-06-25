---
title: "SPScoreboardUnitVM"
description: "SPScoreboardUnitVM 的自动生成类参考。"
---
# SPScoreboardUnitVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SPScoreboardUnitVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardUnitVM.cs`

## 概述

`SPScoreboardUnitVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsGainedAnySkills` | `public bool IsGainedAnySkills { get; set; }` |
| `GainedSkills` | `public MBBindingList<SPScoreboardSkillItemVM> GainedSkills { get; set; }` |
| `IsHero` | `public bool IsHero { get; set; }` |
| `Score` | `public SPScoreboardStatsVM Score { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 SPScoreboardUnitVM 实例
SPScoreboardUnitVM sPScoreboardUnitVM = ...;
sPScoreboardUnitVM.RefreshValues();
```

### UpdateScores
`public void UpdateScores(int numberRemaining, int numberDead, int numberWounded, int numberRouted, int numberKilled, int numberReadyToUpgrade)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 scores 的最新表示。

```csharp
// 先通过子系统 API 拿到 SPScoreboardUnitVM 实例
SPScoreboardUnitVM sPScoreboardUnitVM = ...;
sPScoreboardUnitVM.UpdateScores(0, 0, 0, 0, 0, 0);
```

### UpdateHeroSkills
`public void UpdateHeroSkills(SkillObject gainedSkill, int currentSkill)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 hero skills 的最新表示。

```csharp
// 先通过子系统 API 拿到 SPScoreboardUnitVM 实例
SPScoreboardUnitVM sPScoreboardUnitVM = ...;
sPScoreboardUnitVM.UpdateHeroSkills(gainedSkill, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SPScoreboardUnitVM sPScoreboardUnitVM = ...;
sPScoreboardUnitVM.RefreshValues();
```

## 参见

- [本区域目录](../)