<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ArcheryTournamentAgentController`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ArcheryTournamentAgentController

**Namespace:** SandBox.Tournaments.AgentControllers
**Module:** SandBox.Tournaments
**Type:** `public class ArcheryTournamentAgentController : AgentController`
**Base:** `AgentController`
**File:** `SandBox/Tournaments/AgentControllers/ArcheryTournamentAgentController.cs`

## 概述

`ArcheryTournamentAgentController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `ArcheryTournamentAgentController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnInitialize
`public override void OnInitialize()`

**用途 / Purpose:** 当 `initialize` 事件触发时调用此方法。

### OnTick
`public void OnTick()`

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

### SetTargets
`public void SetTargets(List<DestructableComponent> targetList)`

**用途 / Purpose:** 设置 `targets` 的值或状态。

### OnTargetHit
`public void OnTargetHit(Agent agent, DestructableComponent target)`

**用途 / Purpose:** 当 `target hit` 事件触发时调用此方法。

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<ArcheryTournamentAgentController>();
```

## 参见

- [完整类目录](../catalog)