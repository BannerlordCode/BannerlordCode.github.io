---
title: "SandboxHighlightsController"
description: "SandboxHighlightsController 的自动生成类参考。"
---
# SandboxHighlightsController

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class SandboxHighlightsController : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/SandboxHighlightsController.cs`

## 概述

`SandboxHighlightsController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `SandboxHighlightsController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 SandboxHighlightsController 实例
SandboxHighlightsController sandboxHighlightsController = ...;
sandboxHighlightsController.AfterStart();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** 在 「agent removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SandboxHighlightsController 实例
SandboxHighlightsController sandboxHighlightsController = ...;
sandboxHighlightsController.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<SandboxHighlightsController>();
```

## 参见

- [本区域目录](../)