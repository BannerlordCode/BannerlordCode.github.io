---
title: "MusicStealthMissionView"
description: "MusicStealthMissionView 的自动生成类参考。"
---
# MusicStealthMissionView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Sound
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MusicStealthMissionView : MissionView, IMusicHandler`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Sound/MusicStealthMissionView.cs`

## 概述

`MusicStealthMissionView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MusicStealthMissionView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 behavior initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MusicStealthMissionView 实例
MusicStealthMissionView musicStealthMissionView = ...;
musicStealthMissionView.OnBehaviorInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** 在 mission screen finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MusicStealthMissionView 实例
MusicStealthMissionView musicStealthMissionView = ...;
musicStealthMissionView.OnMissionScreenFinalize();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 MusicStealthMissionView 实例
MusicStealthMissionView musicStealthMissionView = ...;
musicStealthMissionView.AfterStart();
```

### OnAgentAlarmedStateChanged
`public override void OnAgentAlarmedStateChanged(Agent agent, Agent.AIStateFlag flag)`

**用途 / Purpose:** 在 agent alarmed state changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MusicStealthMissionView 实例
MusicStealthMissionView musicStealthMissionView = ...;
musicStealthMissionView.OnAgentAlarmedStateChanged(agent, flag);
```

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**用途 / Purpose:** 在 agent hit 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MusicStealthMissionView 实例
MusicStealthMissionView musicStealthMissionView = ...;
musicStealthMissionView.OnAgentHit(affectedAgent, affectorAgent, affectorWeapon, blow, attackCollisionData);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MusicStealthMissionView 实例
MusicStealthMissionView musicStealthMissionView = ...;
musicStealthMissionView.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
MusicStealthMissionView view = ...;
```

## 参见

- [本区域目录](../)