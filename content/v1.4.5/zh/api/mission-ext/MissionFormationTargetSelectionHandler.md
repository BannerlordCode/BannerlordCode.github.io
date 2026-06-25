---
title: "MissionFormationTargetSelectionHandler"
description: "MissionFormationTargetSelectionHandler 的自动生成类参考。"
---
# MissionFormationTargetSelectionHandler

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionFormationTargetSelectionHandler : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews/MissionFormationTargetSelectionHandler.cs`

## 概述

`MissionFormationTargetSelectionHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MissionFormationTargetSelectionHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnPreDisplayMissionTick
`public override void OnPreDisplayMissionTick(float dt)`

**用途 / Purpose:** 在 「pre display mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionFormationTargetSelectionHandler 实例
MissionFormationTargetSelectionHandler missionFormationTargetSelectionHandler = ...;
missionFormationTargetSelectionHandler.OnPreDisplayMissionTick(0);
```

### SetIsFormationTargetingDisabled
`public void SetIsFormationTargetingDisabled(bool isDisabled)`

**用途 / Purpose:** 为 「is formation targeting disabled」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionFormationTargetSelectionHandler 实例
MissionFormationTargetSelectionHandler missionFormationTargetSelectionHandler = ...;
missionFormationTargetSelectionHandler.SetIsFormationTargetingDisabled(false);
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 在 「remove behavior」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionFormationTargetSelectionHandler 实例
MissionFormationTargetSelectionHandler missionFormationTargetSelectionHandler = ...;
missionFormationTargetSelectionHandler.OnRemoveBehavior();
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionFormationTargetSelectionHandler>();
```

## 参见

- [本区域目录](../)