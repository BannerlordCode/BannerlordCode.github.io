---
title: "JoustingAgentController"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `JoustingAgentController`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# JoustingAgentController

**Namespace:** SandBox.Tournaments.AgentControllers
**Module:** SandBox.Tournaments
**Type:** `public class JoustingAgentController : AgentController`
**Base:** `AgentController`
**File:** `SandBox/Tournaments/AgentControllers/JoustingAgentController.cs`

## 概述

`JoustingAgentController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `JoustingAgentController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `State` | `public JoustingAgentController.JoustingAgentState State { get; set; }` |
| `JoustingMissionController` | `public TournamentJoustingMissionController JoustingMissionController { get; }` |
| `Opponent` | `public Agent Opponent { get; }` |
| `PrepareEquipmentsAfterDismount` | `public bool PrepareEquipmentsAfterDismount { get; }` |

## 主要方法

### OnInitialize
`public override void OnInitialize()`

**用途 / Purpose:** 当 `initialize` 事件触发时调用此方法。

### UpdateState
`public void UpdateState()`

**用途 / Purpose:** 更新 `state` 的状态或数据。

### PrepareAgentToSwordDuel
`public void PrepareAgentToSwordDuel()`

**用途 / Purpose:** 处理 `prepare agent to sword duel` 相关逻辑。

### PrepareEquipmentsForSwordDuel
`public void PrepareEquipmentsForSwordDuel()`

**用途 / Purpose:** 处理 `prepare equipments for sword duel` 相关逻辑。

### IsRiding
`public bool IsRiding()`

**用途 / Purpose:** 处理 `is riding` 相关逻辑。

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<JoustingAgentController>();
```

## 参见

- [完整类目录](../catalog)