---
title: "SPScoreboardVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SPScoreboardVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SPScoreboardVM

**命名空间:** SandBox.ViewModelCollection
**模块:** SandBox.ViewModelCollection
**类型:** `public class SPScoreboardVM : ScoreboardBaseVM, IBattleObserver`
**Base:** `ScoreboardBaseVM`
**领域:** campaign-ext

## 概述

`SPScoreboardVM` 位于 `SandBox.ViewModelCollection`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `BattleResults` | `public override MBBindingList<BattleResultVM> BattleResults { get; set; }` |

## 主要方法

### CreateSimulation
`public static SPScoreboardVM CreateSimulation(BattleSimulation simulation)`

**用途 / Purpose:** 创建一个 `simulation` 实例或对象。

### CreateMission
`public static SPScoreboardVM CreateMission(Mission mission)`

**用途 / Purpose:** 创建一个 `mission` 实例或对象。

### CreateCustom
`public static SPScoreboardVM CreateCustom(BattleScoreContext battleScoreContext, BattleSimulation simulation = null)`

**用途 / Purpose:** 创建一个 `custom` 实例或对象。

### Initialize
`public override void Initialize(IMissionScreen missionScreen, Mission mission, Action releaseSimulationSources, Action<bool> onToggle)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### ExecutePlayAction
`public override void ExecutePlayAction()`

**用途 / Purpose:** 执行 `play action` 操作或流程。

### ExecuteFastForwardAction
`public override void ExecuteFastForwardAction()`

**用途 / Purpose:** 执行 `fast forward action` 操作或流程。

### ExecutePauseSimulationAction
`public override void ExecutePauseSimulationAction()`

**用途 / Purpose:** 执行 `pause simulation action` 操作或流程。

### ExecuteEndSimulationAction
`public override void ExecuteEndSimulationAction()`

**用途 / Purpose:** 执行 `end simulation action` 操作或流程。

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
// 先准备该类型需要的上下文，然后直接调用静态入口
SPScoreboardVM.CreateSimulation(simulation);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
