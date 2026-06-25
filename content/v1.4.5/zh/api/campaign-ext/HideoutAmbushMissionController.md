---
title: "HideoutAmbushMissionController"
description: "HideoutAmbushMissionController 的自动生成类参考。"
---
# HideoutAmbushMissionController

**Namespace:** SandBox.Missions.MissionLogics.Hideout
**Module:** SandBox.Missions
**Type:** `public class HideoutAmbushMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics.Hideout/HideoutAmbushMissionController.cs`

## 概述

`HideoutAmbushMissionController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `HideoutAmbushMissionController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 「behavior initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HideoutAmbushMissionController 实例
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.OnBehaviorInitialize();
```

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

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 HideoutAmbushMissionController 实例
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.AfterStart();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 在 「remove behavior」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HideoutAmbushMissionController 实例
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.OnRemoveBehavior();
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

### OnAgentAlarmedStateChanged
`public override void OnAgentAlarmedStateChanged(Agent agent, AIStateFlag flag)`

**用途 / Purpose:** 在 「agent alarmed state changed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HideoutAmbushMissionController 实例
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.OnAgentAlarmedStateChanged(agent, flag);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 在 「agent removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HideoutAmbushMissionController 实例
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnMissionStateFinalized
`public override void OnMissionStateFinalized()`

**用途 / Purpose:** 在 「mission state finalized」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HideoutAmbushMissionController 实例
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.OnMissionStateFinalized();
```

### OnObjectUsed
`public override void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)`

**用途 / Purpose:** 在 「object used」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HideoutAmbushMissionController 实例
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.OnObjectUsed(userAgent, usedObject);
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

### SetOverriddenHideoutBossCharacterObject
`public void SetOverriddenHideoutBossCharacterObject(CharacterObject characterObject)`

**用途 / Purpose:** 为 「overridden hideout boss character object」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 HideoutAmbushMissionController 实例
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.SetOverriddenHideoutBossCharacterObject(characterObject);
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

**用途 / Purpose:** 执行此方法所描述的操作。

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