---
title: "StealthFailCounterMissionLogic"
description: "StealthFailCounterMissionLogic 的自动生成类参考。"
---
# StealthFailCounterMissionLogic

**Namespace:** SandBox.Missions
**Module:** SandBox.Missions
**Type:** `public class StealthFailCounterMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/StealthFailCounterMissionLogic.cs`

## 概述

`StealthFailCounterMissionLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `StealthFailCounterMissionLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnAgentAlarmedStateChanged
`public override void OnAgentAlarmedStateChanged(Agent agent, Agent.AIStateFlag flag)`

**用途 / Purpose:** **用途 / Purpose:** 在 agent alarmed state changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 StealthFailCounterMissionLogic 实例
StealthFailCounterMissionLogic stealthFailCounterMissionLogic = ...;
stealthFailCounterMissionLogic.OnAgentAlarmedStateChanged(agent, flag);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** **用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 StealthFailCounterMissionLogic 实例
StealthFailCounterMissionLogic stealthFailCounterMissionLogic = ...;
stealthFailCounterMissionLogic.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在 mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 StealthFailCounterMissionLogic 实例
StealthFailCounterMissionLogic stealthFailCounterMissionLogic = ...;
stealthFailCounterMissionLogic.OnMissionTick(0);
```

### SetFailTexts
`public void SetFailTexts(TextObject title, TextObject description)`

**用途 / Purpose:** **用途 / Purpose:** 为 fail texts 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 StealthFailCounterMissionLogic 实例
StealthFailCounterMissionLogic stealthFailCounterMissionLogic = ...;
stealthFailCounterMissionLogic.SetFailTexts(title, description);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<StealthFailCounterMissionLogic>();
```

## 参见

- [本区域目录](../)