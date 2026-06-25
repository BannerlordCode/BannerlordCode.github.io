---
title: "JoustingAgentController"
description: "JoustingAgentController 的自动生成类参考。"
---
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

**用途 / Purpose:** 在 「initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 JoustingAgentController 实例
JoustingAgentController joustingAgentController = ...;
joustingAgentController.OnInitialize();
```

### UpdateState
`public void UpdateState()`

**用途 / Purpose:** 重新计算并更新 「state」 的最新表示。

```csharp
// 先通过子系统 API 拿到 JoustingAgentController 实例
JoustingAgentController joustingAgentController = ...;
joustingAgentController.UpdateState();
```

### PrepareAgentToSwordDuel
`public void PrepareAgentToSwordDuel()`

**用途 / Purpose:** 为即将执行的「agent to sword duel」操作完成前置准备工作。

```csharp
// 先通过子系统 API 拿到 JoustingAgentController 实例
JoustingAgentController joustingAgentController = ...;
joustingAgentController.PrepareAgentToSwordDuel();
```

### PrepareEquipmentsForSwordDuel
`public void PrepareEquipmentsForSwordDuel()`

**用途 / Purpose:** 为即将执行的「equipments for sword duel」操作完成前置准备工作。

```csharp
// 先通过子系统 API 拿到 JoustingAgentController 实例
JoustingAgentController joustingAgentController = ...;
joustingAgentController.PrepareEquipmentsForSwordDuel();
```

### IsRiding
`public bool IsRiding()`

**用途 / Purpose:** 判断当前对象是否处于 「riding」 状态或条件。

```csharp
// 先通过子系统 API 拿到 JoustingAgentController 实例
JoustingAgentController joustingAgentController = ...;
var result = joustingAgentController.IsRiding();
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<JoustingAgentController>();
```

## 参见

- [本区域目录](../)