---
title: "CasualtyHandler"
description: "CasualtyHandler 的自动生成类参考。"
---
# CasualtyHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CasualtyHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/CasualtyHandler.cs`

## 概述

`CasualtyHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `CasualtyHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** **用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CasualtyHandler 实例
CasualtyHandler casualtyHandler = ...;
casualtyHandler.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnAgentFleeing
`public override void OnAgentFleeing(Agent affectedAgent)`

**用途 / Purpose:** **用途 / Purpose:** 在 agent fleeing 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CasualtyHandler 实例
CasualtyHandler casualtyHandler = ...;
casualtyHandler.OnAgentFleeing(affectedAgent);
```

### GetCasualtyCountOfFormation
`public int GetCasualtyCountOfFormation(Formation formation)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 casualty count of formation 的结果。

```csharp
// 先通过子系统 API 拿到 CasualtyHandler 实例
CasualtyHandler casualtyHandler = ...;
var result = casualtyHandler.GetCasualtyCountOfFormation(formation);
```

### GetCasualtyPowerLossOfFormation
`public float GetCasualtyPowerLossOfFormation(Formation formation)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 casualty power loss of formation 的结果。

```csharp
// 先通过子系统 API 拿到 CasualtyHandler 实例
CasualtyHandler casualtyHandler = ...;
var result = casualtyHandler.GetCasualtyPowerLossOfFormation(formation);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<CasualtyHandler>();
```

## 参见

- [本区域目录](../)