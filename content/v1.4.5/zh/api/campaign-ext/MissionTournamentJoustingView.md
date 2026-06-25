---
title: "MissionTournamentJoustingView"
description: "MissionTournamentJoustingView 的自动生成类参考。"
---
# MissionTournamentJoustingView

**Namespace:** SandBox.View.Missions.Tournaments
**Module:** SandBox.View
**Type:** `public class MissionTournamentJoustingView : MissionView`
**Base:** `MissionView`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Missions.Tournaments/MissionTournamentJoustingView.cs`

## 概述

`MissionTournamentJoustingView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionTournamentJoustingView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** **用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionTournamentJoustingView 实例
MissionTournamentJoustingView missionTournamentJoustingView = ...;
missionTournamentJoustingView.AfterStart();
```

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**用途 / Purpose:** **用途 / Purpose:** 在 agent hit 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionTournamentJoustingView 实例
MissionTournamentJoustingView missionTournamentJoustingView = ...;
missionTournamentJoustingView.OnAgentHit(affectedAgent, affectorAgent, attackerWeapon, blow, attackCollisionData);
```

### ShowMessage
`public void ShowMessage(string str, float duration, bool hasPriority = true)`

**用途 / Purpose:** **用途 / Purpose:** 显示message对应的界面或元素。

```csharp
// 先通过子系统 API 拿到 MissionTournamentJoustingView 实例
MissionTournamentJoustingView missionTournamentJoustingView = ...;
missionTournamentJoustingView.ShowMessage("example", 0, false);
```

### ShowMessage
`public void ShowMessage(Agent agent, string str, float duration, bool hasPriority = true)`

**用途 / Purpose:** **用途 / Purpose:** 显示message对应的界面或元素。

```csharp
// 先通过子系统 API 拿到 MissionTournamentJoustingView 实例
MissionTournamentJoustingView missionTournamentJoustingView = ...;
missionTournamentJoustingView.ShowMessage(agent, "example", 0, false);
```

### DeleteMessage
`public void DeleteMessage(string str)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DeleteMessage 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionTournamentJoustingView 实例
MissionTournamentJoustingView missionTournamentJoustingView = ...;
missionTournamentJoustingView.DeleteMessage("example");
```

### DeleteMessage
`public void DeleteMessage(Agent agent, string str)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DeleteMessage 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionTournamentJoustingView 实例
MissionTournamentJoustingView missionTournamentJoustingView = ...;
missionTournamentJoustingView.DeleteMessage(agent, "example");
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
MissionTournamentJoustingView view = ...;
```

## 参见

- [本区域目录](../)