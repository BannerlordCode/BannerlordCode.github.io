---
title: "SPScoreboardSideVM"
description: "SPScoreboardSideVM 的自动生成类参考。"
---
# SPScoreboardSideVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SPScoreboardSideVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard/SPScoreboardSideVM.cs`

## 概述

`SPScoreboardSideVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentPower` | `public float CurrentPower { get; }` |
| `InitialPower` | `public float InitialPower { get; }` |
| `BannerVisual` | `public BannerImageIdentifierVM BannerVisual { get; set; }` |
| `BannerVisualSmall` | `public BannerImageIdentifierVM BannerVisualSmall { get; set; }` |
| `Score` | `public SPScoreboardStatsVM Score { get; set; }` |
| `Parties` | `public MBBindingList<SPScoreboardPartyVM> Parties { get; set; }` |
| `Ships` | `public MBBindingList<SPScoreboardShipVM> Ships { get; set; }` |
| `SortController` | `public SPScoreboardSortControllerVM SortController { get; set; }` |
| `Morale` | `public float Morale { get; set; }` |
| `MoraleHint` | `public BasicTooltipViewModel MoraleHint { get; set; }` |
| `IsPlayerSide` | `public bool IsPlayerSide { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 SPScoreboardSideVM 实例
SPScoreboardSideVM sPScoreboardSideVM = ...;
sPScoreboardSideVM.RefreshValues();
```

### UpdateScores
`public void UpdateScores(IBattleCombatant battleCombatant, bool isPlayerParty, BasicCharacterObject character, int numberRemaining, int numberDead, int numberWounded, int numberRouted, int numberKilled, int numberReadyToUpgrade)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 scores 的最新表示。

```csharp
// 先通过子系统 API 拿到 SPScoreboardSideVM 实例
SPScoreboardSideVM sPScoreboardSideVM = ...;
sPScoreboardSideVM.UpdateScores(battleCombatant, false, character, 0, 0, 0, 0, 0, 0);
```

### UpdateHeroSkills
`public void UpdateHeroSkills(IBattleCombatant battleCombatant, bool isPlayerParty, BasicCharacterObject heroCharacter, SkillObject upgradedSkill)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 hero skills 的最新表示。

```csharp
// 先通过子系统 API 拿到 SPScoreboardSideVM 实例
SPScoreboardSideVM sPScoreboardSideVM = ...;
sPScoreboardSideVM.UpdateHeroSkills(battleCombatant, false, heroCharacter, upgradedSkill);
```

### GetPartyAddIfNotExists
`public SPScoreboardPartyVM GetPartyAddIfNotExists(IBattleCombatant battleCombatant, bool isPlayerParty)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 party add if not exists 的结果。

```csharp
// 先通过子系统 API 拿到 SPScoreboardSideVM 实例
SPScoreboardSideVM sPScoreboardSideVM = ...;
var result = sPScoreboardSideVM.GetPartyAddIfNotExists(battleCombatant, false);
```

### GetParty
`public SPScoreboardPartyVM GetParty(IBattleCombatant battleCombatant)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 party 的结果。

```csharp
// 先通过子系统 API 拿到 SPScoreboardSideVM 实例
SPScoreboardSideVM sPScoreboardSideVM = ...;
var result = sPScoreboardSideVM.GetParty(battleCombatant);
```

### RemoveTroop
`public SPScoreboardStatsVM RemoveTroop(IBattleCombatant battleCombatant, BasicCharacterObject troop)`

**用途 / Purpose:** **用途 / Purpose:** 从当前容器或状态中移除 troop。

```csharp
// 先通过子系统 API 拿到 SPScoreboardSideVM 实例
SPScoreboardSideVM sPScoreboardSideVM = ...;
var result = sPScoreboardSideVM.RemoveTroop(battleCombatant, troop);
```

### AddTroop
`public void AddTroop(IBattleCombatant battleCombatant, BasicCharacterObject currentTroop, SPScoreboardStatsVM scoreToBringOver)`

**用途 / Purpose:** **用途 / Purpose:** 将 troop 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 SPScoreboardSideVM 实例
SPScoreboardSideVM sPScoreboardSideVM = ...;
sPScoreboardSideVM.AddTroop(battleCombatant, currentTroop, scoreToBringOver);
```

### GetShipAddIfNotExists
`public SPScoreboardShipVM GetShipAddIfNotExists(IShipOrigin ship, string shipType, IBattleCombatant owner, TeamSideEnum teamSideEnum)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 ship add if not exists 的结果。

```csharp
// 先通过子系统 API 拿到 SPScoreboardSideVM 实例
SPScoreboardSideVM sPScoreboardSideVM = ...;
var result = sPScoreboardSideVM.GetShipAddIfNotExists(ship, "example", owner, teamSideEnum);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SPScoreboardSideVM sPScoreboardSideVM = ...;
sPScoreboardSideVM.RefreshValues();
```

## 参见

- [本区域目录](../)