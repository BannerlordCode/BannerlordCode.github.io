---
title: "MusicBattleMissionView"
description: "MusicBattleMissionView 的自动生成类参考。"
---
# MusicBattleMissionView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Sound
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MusicBattleMissionView : MissionView, IMusicHandler`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.Sound/MusicBattleMissionView.cs`

## 概述

`MusicBattleMissionView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MusicBattleMissionView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 「behavior initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MusicBattleMissionView 实例
MusicBattleMissionView musicBattleMissionView = ...;
musicBattleMissionView.OnBehaviorInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** 在 「mission screen finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MusicBattleMissionView 实例
MusicBattleMissionView musicBattleMissionView = ...;
musicBattleMissionView.OnMissionScreenFinalize();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MusicBattleMissionView 实例
MusicBattleMissionView musicBattleMissionView = ...;
musicBattleMissionView.AfterStart();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 在 「agent removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MusicBattleMissionView 实例
MusicBattleMissionView musicBattleMissionView = ...;
musicBattleMissionView.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
MusicBattleMissionView view = ...;
```

## 参见

- [本区域目录](../)