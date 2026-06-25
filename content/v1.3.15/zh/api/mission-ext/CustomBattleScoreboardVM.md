---
title: "CustomBattleScoreboardVM"
description: "CustomBattleScoreboardVM 的自动生成类参考。"
---
# CustomBattleScoreboardVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleScoreboardVM : ScoreboardBaseVM, IBattleObserver`
**Base:** `ScoreboardBaseVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/CustomBattleScoreboardVM.cs`

## 概述

`CustomBattleScoreboardVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Initialize
`public override void Initialize(IMissionScreen missionScreen, Mission mission, Action releaseSimulationSources, Action<bool> onToggle)`

**用途 / Purpose:** **用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 CustomBattleScoreboardVM 实例
CustomBattleScoreboardVM customBattleScoreboardVM = ...;
customBattleScoreboardVM.Initialize(missionScreen, mission, releaseSimulationSources, onToggle);
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 CustomBattleScoreboardVM 实例
CustomBattleScoreboardVM customBattleScoreboardVM = ...;
customBattleScoreboardVM.RefreshValues();
```

### ExecuteFastForwardAction
`public override void ExecuteFastForwardAction()`

**用途 / Purpose:** **用途 / Purpose:** 执行 fast forward action 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 CustomBattleScoreboardVM 实例
CustomBattleScoreboardVM customBattleScoreboardVM = ...;
customBattleScoreboardVM.ExecuteFastForwardAction();
```

### ExecuteQuitAction
`public override void ExecuteQuitAction()`

**用途 / Purpose:** **用途 / Purpose:** 执行 quit action 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 CustomBattleScoreboardVM 实例
CustomBattleScoreboardVM customBattleScoreboardVM = ...;
customBattleScoreboardVM.ExecuteQuitAction();
```

### OnBattleOver
`public void OnBattleOver()`

**用途 / Purpose:** **用途 / Purpose:** 在 battle over 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CustomBattleScoreboardVM 实例
CustomBattleScoreboardVM customBattleScoreboardVM = ...;
customBattleScoreboardVM.OnBattleOver();
```

### OnExitBattle
`public void OnExitBattle()`

**用途 / Purpose:** **用途 / Purpose:** 在 exit battle 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CustomBattleScoreboardVM 实例
CustomBattleScoreboardVM customBattleScoreboardVM = ...;
customBattleScoreboardVM.OnExitBattle();
```

### TroopNumberChanged
`public void TroopNumberChanged(BattleSideEnum side, IBattleCombatant battleCombatant, BasicCharacterObject character, int number = 0, int numberDead = 0, int numberWounded = 0, int numberRouted = 0, int numberKilled = 0, int numberReadyToUpgrade = 0)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TroopNumberChanged 对应的操作。

```csharp
// 先通过子系统 API 拿到 CustomBattleScoreboardVM 实例
CustomBattleScoreboardVM customBattleScoreboardVM = ...;
customBattleScoreboardVM.TroopNumberChanged(side, battleCombatant, character, 0, 0, 0, 0, 0, 0);
```

### HeroSkillIncreased
`public void HeroSkillIncreased(BattleSideEnum side, IBattleCombatant battleCombatant, BasicCharacterObject heroCharacter, SkillObject upgradedSkill)`

**用途 / Purpose:** **用途 / Purpose:** 调用 HeroSkillIncreased 对应的操作。

```csharp
// 先通过子系统 API 拿到 CustomBattleScoreboardVM 实例
CustomBattleScoreboardVM customBattleScoreboardVM = ...;
customBattleScoreboardVM.HeroSkillIncreased(side, battleCombatant, heroCharacter, upgradedSkill);
```

### BattleResultsReady
`public void BattleResultsReady()`

**用途 / Purpose:** **用途 / Purpose:** 调用 BattleResultsReady 对应的操作。

```csharp
// 先通过子系统 API 拿到 CustomBattleScoreboardVM 实例
CustomBattleScoreboardVM customBattleScoreboardVM = ...;
customBattleScoreboardVM.BattleResultsReady();
```

### TroopSideChanged
`public void TroopSideChanged(BattleSideEnum prevSide, BattleSideEnum newSide, IBattleCombatant battleCombatant, BasicCharacterObject character)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TroopSideChanged 对应的操作。

```csharp
// 先通过子系统 API 拿到 CustomBattleScoreboardVM 实例
CustomBattleScoreboardVM customBattleScoreboardVM = ...;
customBattleScoreboardVM.TroopSideChanged(prevSide, newSide, battleCombatant, character);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CustomBattleScoreboardVM customBattleScoreboardVM = ...;
customBattleScoreboardVM.Initialize(missionScreen, mission, releaseSimulationSources, onToggle);
```

## 参见

- [本区域目录](../)