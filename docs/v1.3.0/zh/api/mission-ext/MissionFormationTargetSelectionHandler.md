<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionFormationTargetSelectionHandler`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionFormationTargetSelectionHandler

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionFormationTargetSelectionHandler : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionFormationTargetSelectionHandler.cs`

## 概述

`MissionFormationTargetSelectionHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MissionFormationTargetSelectionHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnPreDisplayMissionTick
`public override void OnPreDisplayMissionTick(float dt)`

**用途 / Purpose:** 当 `pre display mission tick` 事件触发时调用此方法。

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 当 `remove behavior` 事件触发时调用此方法。

### TickDebug
`public void TickDebug()`

**用途 / Purpose:** 处理 `tick debug` 相关逻辑。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new MissionFormationTargetSelectionHandler());
```

## 参见

- [完整类目录](../catalog)