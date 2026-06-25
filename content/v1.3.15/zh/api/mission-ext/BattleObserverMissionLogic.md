---
title: "BattleObserverMissionLogic"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BattleObserverMissionLogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleObserverMissionLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleObserverMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/BattleObserverMissionLogic.cs`

## 概述

`BattleObserverMissionLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `BattleObserverMissionLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `BattleObserver` | `public IBattleObserver BattleObserver { get; }` |

## 主要方法

### SetObserver
`public void SetObserver(IBattleObserver observer)`

**用途 / Purpose:** 设置 `observer` 的值或状态。

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** 处理 `early start` 相关逻辑。

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**用途 / Purpose:** 当 `agent build` 事件触发时调用此方法。

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### OnAgentTeamChanged
`public override void OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent)`

**用途 / Purpose:** 当 `agent team changed` 事件触发时调用此方法。

### OnMissionResultReady
`public override void OnMissionResultReady(MissionResult missionResult)`

**用途 / Purpose:** 当 `mission result ready` 事件触发时调用此方法。

### GetDeathToBuiltAgentRatioForSide
`public float GetDeathToBuiltAgentRatioForSide(BattleSideEnum side)`

**用途 / Purpose:** 获取 `death to built agent ratio for side` 的当前值。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new BattleObserverMissionLogic());
```

## 参见

- [完整类目录](../catalog)