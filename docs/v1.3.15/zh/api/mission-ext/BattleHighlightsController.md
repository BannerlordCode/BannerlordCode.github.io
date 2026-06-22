<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BattleHighlightsController`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleHighlightsController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleHighlightsController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/BattleHighlightsController.cs`

## 概述

`BattleHighlightsController` 是一个任务控制器，驱动某个任务子系统（部署、高光、援兵等）。经 Mission.Current 或作为任务行为访问。

## 主要方法

### AfterStart
```csharp
public override void AfterStart()
```

### OnAgentRemoved
```csharp
public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)
```

## 使用示例

```csharp
// BattleHighlightsController (Controller) 的典型用法
Mission.Current.GetMissionBehavior<BattleHighlightsController>();
```

## 参见

- [完整类目录](../catalog)