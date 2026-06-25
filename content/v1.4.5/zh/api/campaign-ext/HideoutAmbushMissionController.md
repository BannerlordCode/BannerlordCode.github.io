---
title: "HideoutAmbushMissionController"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HideoutAmbushMissionController`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# HideoutAmbushMissionController

**Namespace:** SandBox.Missions.MissionLogics.Hideout
**Module:** SandBox.Missions
**Type:** `public class HideoutAmbushMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionLogics.Hideout/HideoutAmbushMissionController.cs`

## 概述

`HideoutAmbushMissionController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `HideoutAmbushMissionController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### OnCreated
`public override void OnCreated()`

**用途 / Purpose:** 当 `created` 事件触发时调用此方法。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 当 `remove behavior` 事件触发时调用此方法。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**用途 / Purpose:** 当 `agent build` 事件触发时调用此方法。

### OnAgentAlarmedStateChanged
`public override void OnAgentAlarmedStateChanged(Agent agent, AIStateFlag flag)`

**用途 / Purpose:** 当 `agent alarmed state changed` 事件触发时调用此方法。

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### OnMissionStateFinalized
`public override void OnMissionStateFinalized()`

**用途 / Purpose:** 当 `mission state finalized` 事件触发时调用此方法。

### OnObjectUsed
`public override void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)`

**用途 / Purpose:** 当 `object used` 事件触发时调用此方法。

### OnStealthMissionCounterFailed
`public void OnStealthMissionCounterFailed(OnStealthMissionCounterFailedEvent obj)`

**用途 / Purpose:** 当 `stealth mission counter failed` 事件触发时调用此方法。

### IsSideDepleted
`public bool IsSideDepleted(BattleSideEnum side)`

**用途 / Purpose:** 处理 `is side depleted` 相关逻辑。

### SetOverriddenHideoutBossCharacterObject
`public void SetOverriddenHideoutBossCharacterObject(CharacterObject characterObject)`

**用途 / Purpose:** 设置 `overridden hideout boss character object` 的值或状态。

### OnAgentsShouldBeEnabled
`public void OnAgentsShouldBeEnabled()`

**用途 / Purpose:** 当 `agents should be enabled` 事件触发时调用此方法。

### StartBossFightDuelMode
`public static void StartBossFightDuelMode()`

**用途 / Purpose:** 处理 `start boss fight duel mode` 相关逻辑。

### StartBossFightBattleMode
`public static void StartBossFightBattleMode()`

**用途 / Purpose:** 处理 `start boss fight battle mode` 相关逻辑。

### KillAllSentries
`public static string KillAllSentries(List<string> strings)`

**用途 / Purpose:** 处理 `kill all sentries` 相关逻辑。

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<HideoutAmbushMissionController>();
```

## 参见

- [完整类目录](../catalog)