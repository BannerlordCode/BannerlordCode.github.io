---
title: "BattleAgentLogic"
description: "BattleAgentLogic 的自动生成类参考。"
---
# BattleAgentLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class BattleAgentLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/BattleAgentLogic.cs`

## 概述

`BattleAgentLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `BattleAgentLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** **用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 BattleAgentLogic 实例
BattleAgentLogic battleAgentLogic = ...;
battleAgentLogic.AfterStart();
```

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**用途 / Purpose:** **用途 / Purpose:** 在 agent build 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BattleAgentLogic 实例
BattleAgentLogic battleAgentLogic = ...;
battleAgentLogic.OnAgentBuild(agent, banner);
```

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**用途 / Purpose:** **用途 / Purpose:** 在 agent hit 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BattleAgentLogic 实例
BattleAgentLogic battleAgentLogic = ...;
battleAgentLogic.OnAgentHit(affectedAgent, affectorAgent, attackerWeapon, blow, attackCollisionData);
```

### OnAgentTeamChanged
`public override void OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 在 agent team changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BattleAgentLogic 实例
BattleAgentLogic battleAgentLogic = ...;
battleAgentLogic.OnAgentTeamChanged(prevTeam, newTeam, agent);
```

### OnScoreHit
`public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)`

**用途 / Purpose:** **用途 / Purpose:** 在 score hit 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BattleAgentLogic 实例
BattleAgentLogic battleAgentLogic = ...;
battleAgentLogic.OnScoreHit(affectedAgent, affectorAgent, attackerWeapon, false, false, blow, collisionData, 0, 0, 0);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** **用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BattleAgentLogic 实例
BattleAgentLogic battleAgentLogic = ...;
battleAgentLogic.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnAgentFleeing
`public override void OnAgentFleeing(Agent affectedAgent)`

**用途 / Purpose:** **用途 / Purpose:** 在 agent fleeing 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BattleAgentLogic 实例
BattleAgentLogic battleAgentLogic = ...;
battleAgentLogic.OnAgentFleeing(affectedAgent);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在 mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BattleAgentLogic 实例
BattleAgentLogic battleAgentLogic = ...;
battleAgentLogic.OnMissionTick(0);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<BattleAgentLogic>();
```

## 参见

- [本区域目录](../)