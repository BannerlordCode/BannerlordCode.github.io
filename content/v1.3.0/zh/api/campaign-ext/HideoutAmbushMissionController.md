---
title: "HideoutAmbushMissionController"
description: "HideoutAmbushMissionController 的自动生成类参考。"
---
# HideoutAmbushMissionController

**Namespace:** SandBox.Missions.MissionLogics.Hideout
**Module:** SandBox.Missions
**Type:** `public class HideoutAmbushMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/Hideout/HideoutAmbushMissionController.cs`

## 概述

`HideoutAmbushMissionController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `HideoutAmbushMissionController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsReadyForCallTroopsCinematic` | `public bool IsReadyForCallTroopsCinematic { get; }` |

## 主要方法

### OnCreated
`public override void OnCreated()`

**用途 / Purpose:** 在 「created」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HideoutAmbushMissionController 实例
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.OnCreated();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 在 「start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HideoutAmbushMissionController 实例
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.AfterStart();
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 「behavior initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HideoutAmbushMissionController 实例
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.OnBehaviorInitialize();
```

### OnObjectUsed
`public override void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)`

**用途 / Purpose:** 在 「object used」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HideoutAmbushMissionController 实例
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.OnObjectUsed(userAgent, usedObject);
```

### SetOverriddenHideoutBossCharacterObject
`public void SetOverriddenHideoutBossCharacterObject(CharacterObject characterObject)`

**用途 / Purpose:** 为 「overridden hideout boss character object」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 HideoutAmbushMissionController 实例
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.SetOverriddenHideoutBossCharacterObject(characterObject);
```

### SpawnRemainingTroopsForBossFight
`public void SpawnRemainingTroopsForBossFight(List<MatrixFrame> spawnFrames)`

**用途 / Purpose:** 处理与 「spawn remaining troops for boss fight」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 HideoutAmbushMissionController 实例
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.SpawnRemainingTroopsForBossFight(spawnFrames);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 「mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HideoutAmbushMissionController 实例
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.OnMissionTick(0);
```

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**用途 / Purpose:** 在 「agent build」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HideoutAmbushMissionController 实例
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.OnAgentBuild(agent, banner);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 在 「agent removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HideoutAmbushMissionController 实例
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnStealthMissionCounterFailed
`public void OnStealthMissionCounterFailed(OnStealthMissionCounterFailedEvent obj)`

**用途 / Purpose:** 在 「stealth mission counter failed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HideoutAmbushMissionController 实例
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.OnStealthMissionCounterFailed(obj);
```

### IsSideDepleted
`public bool IsSideDepleted(BattleSideEnum side)`

**用途 / Purpose:** 判断当前对象是否处于 「side depleted」 状态或条件。

```csharp
// 先通过子系统 API 拿到 HideoutAmbushMissionController 实例
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
var result = hideoutAmbushMissionController.IsSideDepleted(side);
```

### OnAgentsShouldBeEnabled
`public void OnAgentsShouldBeEnabled()`

**用途 / Purpose:** 在 「agents should be enabled」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HideoutAmbushMissionController 实例
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.OnAgentsShouldBeEnabled();
```

### StartBossFightDuelMode
`public static void StartBossFightDuelMode()`

**用途 / Purpose:** 启动「boss fight duel mode」流程或状态机。

```csharp
// 静态调用，不需要实例
HideoutAmbushMissionController.StartBossFightDuelMode();
```

### StartBossFightBattleMode
`public static void StartBossFightBattleMode()`

**用途 / Purpose:** 启动「boss fight battle mode」流程或状态机。

```csharp
// 静态调用，不需要实例
HideoutAmbushMissionController.StartBossFightBattleMode();
```

### KillAllSentries
`public static string KillAllSentries(List<string> strings)`

**用途 / Purpose:** 处理与 「kill all sentries」 相关的逻辑。

```csharp
// 静态调用，不需要实例
HideoutAmbushMissionController.KillAllSentries(strings);
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<HideoutAmbushMissionController>();
```

## 参见

- [本区域目录](../)