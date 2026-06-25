---
title: "SearchBodyMissionHandler"
description: "SearchBodyMissionHandler 的自动生成类参考。"
---
# SearchBodyMissionHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class SearchBodyMissionHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/SearchBodyMissionHandler.cs`

## 概述

`SearchBodyMissionHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `SearchBodyMissionHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnAgentInteraction
`public override void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)`

**用途 / Purpose:** 在 agent interaction 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SearchBodyMissionHandler 实例
SearchBodyMissionHandler searchBodyMissionHandler = ...;
searchBodyMissionHandler.OnAgentInteraction(userAgent, agent, 0);
```

### IsThereAgentAction
`public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)`

**用途 / Purpose:** 判断当前对象是否处于 there agent action 状态或条件。

```csharp
// 先通过子系统 API 拿到 SearchBodyMissionHandler 实例
SearchBodyMissionHandler searchBodyMissionHandler = ...;
var result = searchBodyMissionHandler.IsThereAgentAction(userAgent, otherAgent);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<SearchBodyMissionHandler>();
```

## 参见

- [本区域目录](../)