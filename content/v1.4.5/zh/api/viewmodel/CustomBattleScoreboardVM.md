---
title: "CustomBattleScoreboardVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CustomBattleScoreboardVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CustomBattleScoreboardVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleScoreboardVM`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard/CustomBattleScoreboardVM.cs`

## 概述

`CustomBattleScoreboardVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CustomBattleScoreboardVM
`public class CustomBattleScoreboardVM(BattleScoreContext scoreboardContext)`

**用途 / Purpose:** 处理 `custom battle scoreboard v m` 相关逻辑。

### Initialize
`public override void Initialize(IMissionScreen missionScreen, Mission mission, Action releaseSimulationSources, Action<bool> onToggle)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### ExecuteFastForwardAction
`public override void ExecuteFastForwardAction()`

**用途 / Purpose:** 执行 `fast forward action` 操作或流程。

### ExecuteQuitAction
`public override void ExecuteQuitAction()`

**用途 / Purpose:** 执行 `quit action` 操作或流程。

### OnBattleOver
`public void OnBattleOver()`

**用途 / Purpose:** 当 `battle over` 事件触发时调用此方法。

### OnExitBattle
`public void OnExitBattle()`

**用途 / Purpose:** 当 `exit battle` 事件触发时调用此方法。

### TroopNumberChanged
`public void TroopNumberChanged(BattleSideEnum side, IBattleCombatant battleCombatant, BasicCharacterObject character, int number = 0, int numberDead = 0, int numberWounded = 0, int numberRouted = 0, int numberKilled = 0, int numberReadyToUpgrade = 0)`

**用途 / Purpose:** 处理 `troop number changed` 相关逻辑。

### HeroSkillIncreased
`public void HeroSkillIncreased(BattleSideEnum side, IBattleCombatant battleCombatant, BasicCharacterObject heroCharacter, SkillObject upgradedSkill)`

**用途 / Purpose:** 处理 `hero skill increased` 相关逻辑。

### BattleResultsReady
`public void BattleResultsReady()`

**用途 / Purpose:** 处理 `battle results ready` 相关逻辑。

### TroopSideChanged
`public void TroopSideChanged(BattleSideEnum prevSide, BattleSideEnum newSide, IBattleCombatant battleCombatant, BasicCharacterObject character)`

**用途 / Purpose:** 处理 `troop side changed` 相关逻辑。

## 使用示例

```csharp
var value = new CustomBattleScoreboardVM();
value.CustomBattleScoreboardVM(scoreboardContext);
```

## 参见

- [完整类目录](../catalog)