---
title: "SPScoreboardPartyVM"
description: "SPScoreboardPartyVM 的自动生成类参考。"
---
# SPScoreboardPartyVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SPScoreboardPartyVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardPartyVM.cs`

## 概述

`SPScoreboardPartyVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `BattleCombatant` | `public IBattleCombatant BattleCombatant { get; }` |
| `CurrentPower` | `public float CurrentPower { get; }` |
| `InitialPower` | `public float InitialPower { get; }` |
| `Score` | `public SPScoreboardStatsVM Score { get; set; }` |
| `Members` | `public MBBindingList<SPScoreboardUnitVM> Members { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 SPScoreboardPartyVM 实例
SPScoreboardPartyVM sPScoreboardPartyVM = ...;
sPScoreboardPartyVM.RefreshValues();
```

### UpdateScores
`public void UpdateScores(BasicCharacterObject character, int numberRemaining, int numberDead, int numberWounded, int numberRouted, int numberKilled, int numberReadyToUpgrade)`

**用途 / Purpose:** 重新计算并更新 scores 的最新表示。

```csharp
// 先通过子系统 API 拿到 SPScoreboardPartyVM 实例
SPScoreboardPartyVM sPScoreboardPartyVM = ...;
sPScoreboardPartyVM.UpdateScores(character, 0, 0, 0, 0, 0, 0);
```

### UpdateHeroSkills
`public void UpdateHeroSkills(BasicCharacterObject heroCharacter, SkillObject upgradedSkill)`

**用途 / Purpose:** 重新计算并更新 hero skills 的最新表示。

```csharp
// 先通过子系统 API 拿到 SPScoreboardPartyVM 实例
SPScoreboardPartyVM sPScoreboardPartyVM = ...;
sPScoreboardPartyVM.UpdateHeroSkills(heroCharacter, upgradedSkill);
```

### GetUnitAddIfNotExists
`public SPScoreboardUnitVM GetUnitAddIfNotExists(BasicCharacterObject character)`

**用途 / Purpose:** 读取并返回当前对象中 unit add if not exists 的结果。

```csharp
// 先通过子系统 API 拿到 SPScoreboardPartyVM 实例
SPScoreboardPartyVM sPScoreboardPartyVM = ...;
var result = sPScoreboardPartyVM.GetUnitAddIfNotExists(character);
```

### GetUnit
`public SPScoreboardUnitVM GetUnit(BasicCharacterObject character)`

**用途 / Purpose:** 读取并返回当前对象中 unit 的结果。

```csharp
// 先通过子系统 API 拿到 SPScoreboardPartyVM 实例
SPScoreboardPartyVM sPScoreboardPartyVM = ...;
var result = sPScoreboardPartyVM.GetUnit(character);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SPScoreboardPartyVM sPScoreboardPartyVM = ...;
sPScoreboardPartyVM.RefreshValues();
```

## 参见

- [本区域目录](../)