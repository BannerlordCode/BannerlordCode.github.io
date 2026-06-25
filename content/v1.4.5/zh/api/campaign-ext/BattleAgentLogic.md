---
title: "BattleAgentLogic"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BattleAgentLogic`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BattleAgentLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class BattleAgentLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/BattleAgentLogic.cs`

## 概述

`BattleAgentLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `BattleAgentLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**用途 / Purpose:** 当 `agent build` 事件触发时调用此方法。

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**用途 / Purpose:** 当 `agent hit` 事件触发时调用此方法。

### OnAgentTeamChanged
`public override void OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent)`

**用途 / Purpose:** 当 `agent team changed` 事件触发时调用此方法。

### OnScoreHit
`public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)`

**用途 / Purpose:** 当 `score hit` 事件触发时调用此方法。

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### OnAgentFleeing
`public override void OnAgentFleeing(Agent affectedAgent)`

**用途 / Purpose:** 当 `agent fleeing` 事件触发时调用此方法。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new BattleAgentLogic());
```

## 参见

- [完整类目录](../catalog)