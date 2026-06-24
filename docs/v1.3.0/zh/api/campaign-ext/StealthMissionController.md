<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StealthMissionController`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# StealthMissionController

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class StealthMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/StealthMissionController.cs`

## 概述

`StealthMissionController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `StealthMissionController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<StealthMissionController>();
```

## 参见

- [完整类目录](../catalog)