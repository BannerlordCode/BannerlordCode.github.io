<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HideoutPhasedMissionController`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# HideoutPhasedMissionController

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HideoutPhasedMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Source.Missions/HideoutPhasedMissionController.cs`

## 概述

`HideoutPhasedMissionController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `HideoutPhasedMissionController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<HideoutPhasedMissionController>();
```

## 参见

- [完整类目录](../catalog)