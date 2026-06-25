---
title: "DisguiseMissionLogic"
description: "DisguiseMissionLogic 的自动生成类参考。"
---
# DisguiseMissionLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class DisguiseMissionLogic : MissionLogic, IPlayerInputEffector, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/DisguiseMissionLogic.cs`

## 概述

`DisguiseMissionLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `DisguiseMissionLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Agent` | `public Agent Agent { get; }` |
| `CanPlayerCameraSeeTheAgent` | `public bool CanPlayerCameraSeeTheAgent { get; }` |
| `OffenseType` | `public StealthOffenseTypes OffenseType { get; }` |
| `ThreatAgentInfos` | `public ReadOnlyDictionary<Agent, ShadowingAgentOffenseInfo> ThreatAgentInfos { get; }` |

## 主要方法

### SetCanPlayerCameraSeeTheAgent
`public void SetCanPlayerCameraSeeTheAgent(bool value)`

**用途 / Purpose:** 为 「can player camera see the agent」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 DisguiseMissionLogic 实例
DisguiseMissionLogic disguiseMissionLogic = ...;
disguiseMissionLogic.SetCanPlayerCameraSeeTheAgent(false);
```

### OnCreated
`public override void OnCreated()`

**用途 / Purpose:** 在 「created」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DisguiseMissionLogic 实例
DisguiseMissionLogic disguiseMissionLogic = ...;
disguiseMissionLogic.OnCreated();
```

### GetSpawnFrameOfPassage
`public MatrixFrame GetSpawnFrameOfPassage(Location location)`

**用途 / Purpose:** 读取并返回当前对象中 「spawn frame of passage」 的结果。

```csharp
// 先通过子系统 API 拿到 DisguiseMissionLogic 实例
DisguiseMissionLogic disguiseMissionLogic = ...;
var result = disguiseMissionLogic.GetSpawnFrameOfPassage(location);
```

### IsContactAgentTracked
`public bool IsContactAgentTracked(Agent agent)`

**用途 / Purpose:** 判断当前对象是否处于 「contact agent tracked」 状态或条件。

```csharp
// 先通过子系统 API 拿到 DisguiseMissionLogic 实例
DisguiseMissionLogic disguiseMissionLogic = ...;
var result = disguiseMissionLogic.IsContactAgentTracked(agent);
```

### CanCommonAreaFightBeTriggered
`public bool CanCommonAreaFightBeTriggered()`

**用途 / Purpose:** 检查当前对象是否满足 「common area fight be triggered」 的前置条件。

```csharp
// 先通过子系统 API 拿到 DisguiseMissionLogic 实例
DisguiseMissionLogic disguiseMissionLogic = ...;
var result = disguiseMissionLogic.CanCommonAreaFightBeTriggered();
```

### ContactAlreadySetCommonCondition
`public bool ContactAlreadySetCommonCondition()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 DisguiseMissionLogic 实例
DisguiseMissionLogic disguiseMissionLogic = ...;
var result = disguiseMissionLogic.ContactAlreadySetCommonCondition();
```

### IsOnLeftSide
`public bool IsOnLeftSide(Vec2 lineA, Vec2 lineB, Vec2 point)`

**用途 / Purpose:** 判断当前对象是否处于 「on left side」 状态或条件。

```csharp
// 先通过子系统 API 拿到 DisguiseMissionLogic 实例
DisguiseMissionLogic disguiseMissionLogic = ...;
var result = disguiseMissionLogic.IsOnLeftSide(lineA, lineB, point);
```

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**用途 / Purpose:** 在 「agent build」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DisguiseMissionLogic 实例
DisguiseMissionLogic disguiseMissionLogic = ...;
disguiseMissionLogic.OnAgentBuild(agent, banner);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 在 「agent removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DisguiseMissionLogic 实例
DisguiseMissionLogic disguiseMissionLogic = ...;
disguiseMissionLogic.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### SpawnDisguiseMissionAgentInternal
`public Agent SpawnDisguiseMissionAgentInternal(CharacterObject agentCharacter, Vec3 initialPosition, Vec2 initialDirection, string actionSetId, bool isEnemy = true)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 DisguiseMissionLogic 实例
DisguiseMissionLogic disguiseMissionLogic = ...;
var result = disguiseMissionLogic.SpawnDisguiseMissionAgentInternal(agentCharacter, initialPosition, initialDirection, "example", false);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 「mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DisguiseMissionLogic 实例
DisguiseMissionLogic disguiseMissionLogic = ...;
disguiseMissionLogic.OnMissionTick(0);
```

### GetAgentOffenseInfo
`public ShadowingAgentOffenseInfo GetAgentOffenseInfo(Agent agent)`

**用途 / Purpose:** 读取并返回当前对象中 「agent offense info」 的结果。

```csharp
// 先通过子系统 API 拿到 DisguiseMissionLogic 实例
DisguiseMissionLogic disguiseMissionLogic = ...;
var result = disguiseMissionLogic.GetAgentOffenseInfo(agent);
```

### IsAgentInDetectionRadius
`public bool IsAgentInDetectionRadius(Agent offenderAgent, Agent detectorAgent)`

**用途 / Purpose:** 判断当前对象是否处于 「agent in detection radius」 状态或条件。

```csharp
// 先通过子系统 API 拿到 DisguiseMissionLogic 实例
DisguiseMissionLogic disguiseMissionLogic = ...;
var result = disguiseMissionLogic.IsAgentInDetectionRadius(offenderAgent, detectorAgent);
```

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)`

**用途 / Purpose:** 在 「end mission request」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DisguiseMissionLogic 实例
DisguiseMissionLogic disguiseMissionLogic = ...;
var result = disguiseMissionLogic.OnEndMissionRequest(canPlayerLeave);
```

### OnCollectPlayerEventControlFlags
`public EventControlFlag OnCollectPlayerEventControlFlags()`

**用途 / Purpose:** 在 「collect player event control flags」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DisguiseMissionLogic 实例
DisguiseMissionLogic disguiseMissionLogic = ...;
var result = disguiseMissionLogic.OnCollectPlayerEventControlFlags();
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<DisguiseMissionLogic>();
```

## 参见

- [本区域目录](../)