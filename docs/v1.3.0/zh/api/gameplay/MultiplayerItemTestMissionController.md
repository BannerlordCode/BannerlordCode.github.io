<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerItemTestMissionController`
- [← 本领域 / 返回 gameplay](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerItemTestMissionController

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class MultiplayerItemTestMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/SandBox/MultiplayerItemTestMissionController.cs`

## 概述

`MultiplayerItemTestMissionController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `MultiplayerItemTestMissionController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<MultiplayerItemTestMissionController>();
```

## 参见

- [完整类目录](../catalog)