---
title: "MissionAgentLabelView"
description: "MissionAgentLabelView 的自动生成类参考。"
---
# MissionAgentLabelView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentLabelView : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionAgentLabelView.cs`

## 概述

`MissionAgentLabelView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionAgentLabelView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 behavior initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentLabelView 实例
MissionAgentLabelView missionAgentLabelView = ...;
missionAgentLabelView.OnBehaviorInitialize();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionAgentLabelView 实例
MissionAgentLabelView missionAgentLabelView = ...;
missionAgentLabelView.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentLabelView 实例
MissionAgentLabelView missionAgentLabelView = ...;
missionAgentLabelView.OnMissionTick(0);
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 在 remove behavior 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentLabelView 实例
MissionAgentLabelView missionAgentLabelView = ...;
missionAgentLabelView.OnRemoveBehavior();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** 在 mission screen finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentLabelView 实例
MissionAgentLabelView missionAgentLabelView = ...;
missionAgentLabelView.OnMissionScreenFinalize();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentLabelView 实例
MissionAgentLabelView missionAgentLabelView = ...;
missionAgentLabelView.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**用途 / Purpose:** 在 agent build 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentLabelView 实例
MissionAgentLabelView missionAgentLabelView = ...;
missionAgentLabelView.OnAgentBuild(agent, banner);
```

### OnAssignPlayerAsSergeantOfFormation
`public override void OnAssignPlayerAsSergeantOfFormation(Agent agent)`

**用途 / Purpose:** 在 assign player as sergeant of formation 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentLabelView 实例
MissionAgentLabelView missionAgentLabelView = ...;
missionAgentLabelView.OnAssignPlayerAsSergeantOfFormation(agent);
```

### OnClearScene
`public override void OnClearScene()`

**用途 / Purpose:** 在 clear scene 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentLabelView 实例
MissionAgentLabelView missionAgentLabelView = ...;
missionAgentLabelView.OnClearScene();
```

### OnAgentTeamChanged
`public override void OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent)`

**用途 / Purpose:** 在 agent team changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentLabelView 实例
MissionAgentLabelView missionAgentLabelView = ...;
missionAgentLabelView.OnAgentTeamChanged(prevTeam, newTeam, agent);
```

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**用途 / Purpose:** 在 photo mode activated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentLabelView 实例
MissionAgentLabelView missionAgentLabelView = ...;
missionAgentLabelView.OnPhotoModeActivated();
```

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**用途 / Purpose:** 在 photo mode deactivated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentLabelView 实例
MissionAgentLabelView missionAgentLabelView = ...;
missionAgentLabelView.OnPhotoModeDeactivated();
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
MissionAgentLabelView view = ...;
```

## 参见

- [本区域目录](../)