---
title: "StealthAreaData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StealthAreaData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# StealthAreaData

**命名空间:** SandBox.Missions.MissionLogics
**模块:** SandBox.Missions
**类型:** `public class StealthAreaData`
**领域:** campaign-ext

## 概述

`StealthAreaData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `StealthAreaData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `AllReinforcementsCalled` | `public bool AllReinforcementsCalled { get; }` |

## 主要方法

### SpawnReinforcementAllyTroopsDelegate
`public delegate MBList<Agent> SpawnReinforcementAllyTroopsDelegate(StealthAreaData triggeredStealthAreaData, StealthAreaMarker stealthAreaMarker)`

**用途 / Purpose:** 处理 `spawn reinforcement ally troops delegate` 相关逻辑。

### IsSentry
`public bool IsSentry(Agent agent)`

**用途 / Purpose:** 处理 `is sentry` 相关逻辑。

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**用途 / Purpose:** 当 `agent build` 事件触发时调用此方法。

### OnAgentTeamChanged
`public override void OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent)`

**用途 / Purpose:** 当 `agent team changed` 事件触发时调用此方法。

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### OnObjectUsed
`public override void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)`

**用途 / Purpose:** 当 `object used` 事件触发时调用此方法。

### CheckIfAllStealthAreasAreTriggered
`public bool CheckIfAllStealthAreasAreTriggered()`

**用途 / Purpose:** 处理 `check if all stealth areas are triggered` 相关逻辑。

### CheckIfAllStealthAreasReinforcementsAreCalled
`public bool CheckIfAllStealthAreasReinforcementsAreCalled()`

**用途 / Purpose:** 处理 `check if all stealth areas reinforcements are called` 相关逻辑。

## 使用示例

```csharp
var value = new StealthAreaData();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
