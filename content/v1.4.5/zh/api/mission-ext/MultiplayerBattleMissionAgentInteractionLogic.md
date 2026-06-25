---
title: "MultiplayerBattleMissionAgentInteractionLogic"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerBattleMissionAgentInteractionLogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerBattleMissionAgentInteractionLogic

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerBattleMissionAgentInteractionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.Missions/MultiplayerBattleMissionAgentInteractionLogic.cs`

## 概述

`MultiplayerBattleMissionAgentInteractionLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `MultiplayerBattleMissionAgentInteractionLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### IsThereAgentAction
`public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)`

**用途 / Purpose:** 处理 `is there agent action` 相关逻辑。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new MultiplayerBattleMissionAgentInteractionLogic());
```

## 参见

- [完整类目录](../catalog)