<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SandboxGeneralsAndCaptainsAssignmentLogic`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SandboxGeneralsAndCaptainsAssignmentLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class SandboxGeneralsAndCaptainsAssignmentLogic : GeneralsAndCaptainsAssignmentLogic`
**Base:** `GeneralsAndCaptainsAssignmentLogic`
**File:** `SandBox/Missions/MissionLogics/SandboxGeneralsAndCaptainsAssignmentLogic.cs`

## 概述

`SandboxGeneralsAndCaptainsAssignmentLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `SandboxGeneralsAndCaptainsAssignmentLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new SandboxGeneralsAndCaptainsAssignmentLogic());
```

## 参见

- [完整类目录](../catalog)