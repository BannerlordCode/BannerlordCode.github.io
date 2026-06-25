---
title: "MissionGamepadEffectsView"
description: "MissionGamepadEffectsView 的自动生成类参考。"
---
# MissionGamepadEffectsView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGamepadEffectsView : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionGamepadEffectsView.cs`

## 概述

`MissionGamepadEffectsView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionGamepadEffectsView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnMissionStateActivated
`public override void OnMissionStateActivated()`

**用途 / Purpose:** 在 mission state activated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGamepadEffectsView 实例
MissionGamepadEffectsView missionGamepadEffectsView = ...;
missionGamepadEffectsView.OnMissionStateActivated();
```

### OnMissionStateDeactivated
`public override void OnMissionStateDeactivated()`

**用途 / Purpose:** 在 mission state deactivated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGamepadEffectsView 实例
MissionGamepadEffectsView missionGamepadEffectsView = ...;
missionGamepadEffectsView.OnMissionStateDeactivated();
```

### OnPreMissionTick
`public override void OnPreMissionTick(float dt)`

**用途 / Purpose:** 在 pre mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGamepadEffectsView 实例
MissionGamepadEffectsView missionGamepadEffectsView = ...;
missionGamepadEffectsView.OnPreMissionTick(0);
```

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**用途 / Purpose:** 在 agent hit 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGamepadEffectsView 实例
MissionGamepadEffectsView missionGamepadEffectsView = ...;
missionGamepadEffectsView.OnAgentHit(affectedAgent, affectorAgent, affectorWeapon, blow, attackCollisionData);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGamepadEffectsView 实例
MissionGamepadEffectsView missionGamepadEffectsView = ...;
missionGamepadEffectsView.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
MissionGamepadEffectsView view = ...;
```

## 参见

- [本区域目录](../)