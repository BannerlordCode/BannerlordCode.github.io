---
title: "MountAgentLogic"
description: "MountAgentLogic 的自动生成类参考。"
---
# MountAgentLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class MountAgentLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/MountAgentLogic.cs`

## 概述

`MountAgentLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `MountAgentLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**用途 / Purpose:** **用途 / Purpose:** 在 agent build 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MountAgentLogic 实例
MountAgentLogic mountAgentLogic = ...;
mountAgentLogic.OnAgentBuild(agent, banner);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** **用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MountAgentLogic 实例
MountAgentLogic mountAgentLogic = ...;
mountAgentLogic.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<MountAgentLogic>();
```

## 参见

- [本区域目录](../)