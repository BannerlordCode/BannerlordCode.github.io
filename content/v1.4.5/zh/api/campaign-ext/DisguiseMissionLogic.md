---
title: "DisguiseMissionLogic"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DisguiseMissionLogic`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DisguiseMissionLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class DisguiseMissionLogic : MissionLogic, IPlayerInputEffector, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/DisguiseMissionLogic.cs`

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

**用途 / Purpose:** 设置 `can player camera see the agent` 的值或状态。

### OnCreated
`public override void OnCreated()`

**用途 / Purpose:** 当 `created` 事件触发时调用此方法。

### GetSpawnFrameOfPassage
`public MatrixFrame GetSpawnFrameOfPassage(Location location)`

**用途 / Purpose:** 获取 `spawn frame of passage` 的当前值。

### IsContactAgentTracked
`public bool IsContactAgentTracked(Agent agent)`

**用途 / Purpose:** 处理 `is contact agent tracked` 相关逻辑。

### CanCommonAreaFightBeTriggered
`public bool CanCommonAreaFightBeTriggered()`

**用途 / Purpose:** 判断当前对象是否可以执行 `common area fight be triggered`。

### ContactAlreadySetCommonCondition
`public bool ContactAlreadySetCommonCondition()`

**用途 / Purpose:** 处理 `contact already set common condition` 相关逻辑。

### IsOnLeftSide
`public bool IsOnLeftSide(Vec2 lineA, Vec2 lineB, Vec2 point)`

**用途 / Purpose:** 处理 `is on left side` 相关逻辑。

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**用途 / Purpose:** 当 `agent build` 事件触发时调用此方法。

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### SpawnDisguiseMissionAgentInternal
`public Agent SpawnDisguiseMissionAgentInternal(CharacterObject agentCharacter, Vec3 initialPosition, Vec2 initialDirection, string actionSetId, bool isEnemy = true)`

**用途 / Purpose:** 处理 `spawn disguise mission agent internal` 相关逻辑。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### GetAgentOffenseInfo
`public ShadowingAgentOffenseInfo GetAgentOffenseInfo(Agent agent)`

**用途 / Purpose:** 获取 `agent offense info` 的当前值。

### IsAgentInDetectionRadius
`public bool IsAgentInDetectionRadius(Agent offenderAgent, Agent detectorAgent)`

**用途 / Purpose:** 处理 `is agent in detection radius` 相关逻辑。

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)`

**用途 / Purpose:** 当 `end mission request` 事件触发时调用此方法。

### OnCollectPlayerEventControlFlags
`public EventControlFlag OnCollectPlayerEventControlFlags()`

**用途 / Purpose:** 当 `collect player event control flags` 事件触发时调用此方法。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new DisguiseMissionLogic());
```

## 参见

- [完整类目录](../catalog)