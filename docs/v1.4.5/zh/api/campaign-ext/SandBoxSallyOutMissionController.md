<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SandBoxSallyOutMissionController`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SandBoxSallyOutMissionController

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class SandBoxSallyOutMissionController : SallyOutMissionController`
**Base:** `SallyOutMissionController`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/SandBoxSallyOutMissionController.cs`

## 概述

`SandBoxSallyOutMissionController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `SandBoxSallyOutMissionController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<SandBoxSallyOutMissionController>();
```

## 参见

- [完整类目录](../catalog)