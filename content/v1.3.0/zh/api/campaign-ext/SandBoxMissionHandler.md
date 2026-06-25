---
title: "SandBoxMissionHandler"
description: "SandBoxMissionHandler 的自动生成类参考。"
---
# SandBoxMissionHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class SandBoxMissionHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/SandBoxMissionHandler.cs`

## 概述

`SandBoxMissionHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `SandBoxMissionHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SandBoxMissionHandler 实例
SandBoxMissionHandler sandBoxMissionHandler = ...;
sandBoxMissionHandler.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<SandBoxMissionHandler>();
```

## 参见

- [本区域目录](../)