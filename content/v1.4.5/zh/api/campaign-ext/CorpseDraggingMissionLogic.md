---
title: "CorpseDraggingMissionLogic"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CorpseDraggingMissionLogic`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CorpseDraggingMissionLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class CorpseDraggingMissionLogic : MissionLogic, IPlayerInputEffector, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/CorpseDraggingMissionLogic.cs`

## 概述

`CorpseDraggingMissionLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `CorpseDraggingMissionLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnFixedMissionTick
`public override void OnFixedMissionTick(float fixedDt)`

**用途 / Purpose:** 当 `fixed mission tick` 事件触发时调用此方法。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### IsThereAgentAction
`public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)`

**用途 / Purpose:** 处理 `is there agent action` 相关逻辑。

### OnAgentInteraction
`public override void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)`

**用途 / Purpose:** 当 `agent interaction` 事件触发时调用此方法。

### OnCollectPlayerEventControlFlags
`public EventControlFlag OnCollectPlayerEventControlFlags()`

**用途 / Purpose:** 当 `collect player event control flags` 事件触发时调用此方法。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new CorpseDraggingMissionLogic());
```

## 参见

- [完整类目录](../catalog)