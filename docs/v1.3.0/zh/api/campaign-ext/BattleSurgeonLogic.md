<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BattleSurgeonLogic`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BattleSurgeonLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class BattleSurgeonLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/BattleSurgeonLogic.cs`

## 概述

`BattleSurgeonLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `BattleSurgeonLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnAgentCreated
`public override void OnAgentCreated(Agent agent)`

**用途 / Purpose:** 当 `agent created` 事件触发时调用此方法。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new BattleSurgeonLogic());
```

## 参见

- [完整类目录](../catalog)