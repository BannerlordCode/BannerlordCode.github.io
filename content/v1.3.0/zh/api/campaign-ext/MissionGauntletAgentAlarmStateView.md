---
title: "MissionGauntletAgentAlarmStateView"
description: "MissionGauntletAgentAlarmStateView 的自动生成类参考。"
---
# MissionGauntletAgentAlarmStateView

**Namespace:** SandBox.GauntletUI.Missions
**Module:** SandBox.GauntletUI
**Type:** `public class MissionGauntletAgentAlarmStateView : MissionAgentAlarmStateView`
**Base:** `MissionAgentAlarmStateView`
**File:** `SandBox.GauntletUI/Missions/MissionGauntletAgentAlarmStateView.cs`

## 概述

`MissionGauntletAgentAlarmStateView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionGauntletAgentAlarmStateView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**用途 / Purpose:** 在 「mission screen initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletAgentAlarmStateView 实例
MissionGauntletAgentAlarmStateView missionGauntletAgentAlarmStateView = ...;
missionGauntletAgentAlarmStateView.OnMissionScreenInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** 在 「mission screen finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletAgentAlarmStateView 实例
MissionGauntletAgentAlarmStateView missionGauntletAgentAlarmStateView = ...;
missionGauntletAgentAlarmStateView.OnMissionScreenFinalize();
```

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**用途 / Purpose:** 在 「agent build」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletAgentAlarmStateView 实例
MissionGauntletAgentAlarmStateView missionGauntletAgentAlarmStateView = ...;
missionGauntletAgentAlarmStateView.OnAgentBuild(agent, banner);
```

### OnAgentTeamChanged
`public override void OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent)`

**用途 / Purpose:** 在 「agent team changed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletAgentAlarmStateView 实例
MissionGauntletAgentAlarmStateView missionGauntletAgentAlarmStateView = ...;
missionGauntletAgentAlarmStateView.OnAgentTeamChanged(prevTeam, newTeam, agent);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 在 「agent removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletAgentAlarmStateView 实例
MissionGauntletAgentAlarmStateView missionGauntletAgentAlarmStateView = ...;
missionGauntletAgentAlarmStateView.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 在 「mission screen tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletAgentAlarmStateView 实例
MissionGauntletAgentAlarmStateView missionGauntletAgentAlarmStateView = ...;
missionGauntletAgentAlarmStateView.OnMissionScreenTick(0);
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
MissionGauntletAgentAlarmStateView view = ...;
```

## 参见

- [本区域目录](../)