---
title: "SPScoreboardVM"
description: "SPScoreboardVM 的自动生成类参考。"
---
# SPScoreboardVM

**Namespace:** SandBox.ViewModelCollection
**Module:** SandBox.ViewModelCollection
**Type:** `public class SPScoreboardVM : ScoreboardBaseVM, IBattleObserver`
**Base:** `ScoreboardBaseVM`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection/SPScoreboardVM.cs`

## 概述

`SPScoreboardVM` 位于 `SandBox.ViewModelCollection`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `BattleResults` | `public override MBBindingList<BattleResultVM> BattleResults { get; set; }` |

## 主要方法

### CreateSimulation
`public static SPScoreboardVM CreateSimulation(BattleSimulation simulation)`

**用途 / Purpose:** 构建一个新的 「simulation」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
SPScoreboardVM.CreateSimulation(simulation);
```

### CreateMission
`public static SPScoreboardVM CreateMission(Mission mission)`

**用途 / Purpose:** 构建一个新的 「mission」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
SPScoreboardVM.CreateMission(mission);
```

### CreateCustom
`public static SPScoreboardVM CreateCustom(BattleScoreContext battleScoreContext, BattleSimulation simulation = null)`

**用途 / Purpose:** 构建一个新的 「custom」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
SPScoreboardVM.CreateCustom(battleScoreContext, null);
```

### Initialize
`public override void Initialize(IMissionScreen missionScreen, Mission mission, Action releaseSimulationSources, Action<bool> onToggle)`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 SPScoreboardVM 实例
SPScoreboardVM sPScoreboardVM = ...;
sPScoreboardVM.Initialize(missionScreen, mission, releaseSimulationSources, onToggle);
```

### ExecutePlayAction
`public override void ExecutePlayAction()`

**用途 / Purpose:** 执行 「play action」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPScoreboardVM 实例
SPScoreboardVM sPScoreboardVM = ...;
sPScoreboardVM.ExecutePlayAction();
```

### ExecuteFastForwardAction
`public override void ExecuteFastForwardAction()`

**用途 / Purpose:** 执行 「fast forward action」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPScoreboardVM 实例
SPScoreboardVM sPScoreboardVM = ...;
sPScoreboardVM.ExecuteFastForwardAction();
```

### ExecutePauseSimulationAction
`public override void ExecutePauseSimulationAction()`

**用途 / Purpose:** 执行 「pause simulation action」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPScoreboardVM 实例
SPScoreboardVM sPScoreboardVM = ...;
sPScoreboardVM.ExecutePauseSimulationAction();
```

### ExecuteEndSimulationAction
`public override void ExecuteEndSimulationAction()`

**用途 / Purpose:** 执行 「end simulation action」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPScoreboardVM 实例
SPScoreboardVM sPScoreboardVM = ...;
sPScoreboardVM.ExecuteEndSimulationAction();
```

### ExecuteQuitAction
`public override void ExecuteQuitAction()`

**用途 / Purpose:** 执行 「quit action」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPScoreboardVM 实例
SPScoreboardVM sPScoreboardVM = ...;
sPScoreboardVM.ExecuteQuitAction();
```

### OnBattleOver
`public void OnBattleOver()`

**用途 / Purpose:** 在 「battle over」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SPScoreboardVM 实例
SPScoreboardVM sPScoreboardVM = ...;
sPScoreboardVM.OnBattleOver();
```

### OnExitBattle
`public void OnExitBattle()`

**用途 / Purpose:** 在 「exit battle」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SPScoreboardVM 实例
SPScoreboardVM sPScoreboardVM = ...;
sPScoreboardVM.OnExitBattle();
```

### TroopNumberChanged
`public void TroopNumberChanged(BattleSideEnum side, IBattleCombatant battleCombatant, BasicCharacterObject character, int number = 0, int numberDead = 0, int numberWounded = 0, int numberRouted = 0, int numberKilled = 0, int numberReadyToUpgrade = 0)`

**用途 / Purpose:** 响应 「troop number changed」 事件并执行相关处理。

```csharp
// 先通过子系统 API 拿到 SPScoreboardVM 实例
SPScoreboardVM sPScoreboardVM = ...;
sPScoreboardVM.TroopNumberChanged(side, battleCombatant, character, 0, 0, 0, 0, 0, 0);
```

### HeroSkillIncreased
`public void HeroSkillIncreased(BattleSideEnum side, IBattleCombatant battleCombatant, BasicCharacterObject heroCharacter, SkillObject upgradedSkill)`

**用途 / Purpose:** 处理与 「hero skill increased」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 SPScoreboardVM 实例
SPScoreboardVM sPScoreboardVM = ...;
sPScoreboardVM.HeroSkillIncreased(side, battleCombatant, heroCharacter, upgradedSkill);
```

### BattleResultsReady
`public void BattleResultsReady()`

**用途 / Purpose:** 处理与 「battle results ready」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 SPScoreboardVM 实例
SPScoreboardVM sPScoreboardVM = ...;
sPScoreboardVM.BattleResultsReady();
```

### TroopSideChanged
`public void TroopSideChanged(BattleSideEnum prevSide, BattleSideEnum newSide, IBattleCombatant battleCombatant, BasicCharacterObject character)`

**用途 / Purpose:** 响应 「troop side changed」 事件并执行相关处理。

```csharp
// 先通过子系统 API 拿到 SPScoreboardVM 实例
SPScoreboardVM sPScoreboardVM = ...;
sPScoreboardVM.TroopSideChanged(prevSide, newSide, battleCombatant, character);
```

## 使用示例

```csharp
SPScoreboardVM.CreateSimulation(simulation);
```

## 参见

- [本区域目录](../)