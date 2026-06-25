---
title: "MissionTournamentJoustingView"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionTournamentJoustingView`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionTournamentJoustingView

**Namespace:** SandBox.View.Missions.Tournaments
**Module:** SandBox.View
**Type:** `public class MissionTournamentJoustingView : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Missions.Tournaments/MissionTournamentJoustingView.cs`

## 概述

`MissionTournamentJoustingView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionTournamentJoustingView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**用途 / Purpose:** 当 `agent hit` 事件触发时调用此方法。

### ShowMessage
`public void ShowMessage(string str, float duration, bool hasPriority = true)`

**用途 / Purpose:** 处理 `show message` 相关逻辑。

### ShowMessage
`public void ShowMessage(Agent agent, string str, float duration, bool hasPriority = true)`

**用途 / Purpose:** 处理 `show message` 相关逻辑。

### DeleteMessage
`public void DeleteMessage(string str)`

**用途 / Purpose:** 处理 `delete message` 相关逻辑。

### DeleteMessage
`public void DeleteMessage(Agent agent, string str)`

**用途 / Purpose:** 处理 `delete message` 相关逻辑。

## 使用示例

```csharp
var view = new MissionTournamentJoustingView();
```

## 参见

- [完整类目录](../catalog)