---
title: "MissionGauntletBoundaryCrossingView"
description: "MissionGauntletBoundaryCrossingView 的自动生成类参考。"
---
# MissionGauntletBoundaryCrossingView

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletBoundaryCrossingView : MissionBattleUIBaseView`
**Base:** `MissionBattleUIBaseView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.Mission/MissionGauntletBoundaryCrossingView.cs`

## 概述

`MissionGauntletBoundaryCrossingView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionGauntletBoundaryCrossingView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**用途 / Purpose:** 在 photo mode activated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletBoundaryCrossingView 实例
MissionGauntletBoundaryCrossingView missionGauntletBoundaryCrossingView = ...;
missionGauntletBoundaryCrossingView.OnPhotoModeActivated();
```

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**用途 / Purpose:** 在 photo mode deactivated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletBoundaryCrossingView 实例
MissionGauntletBoundaryCrossingView missionGauntletBoundaryCrossingView = ...;
missionGauntletBoundaryCrossingView.OnPhotoModeDeactivated();
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
MissionGauntletBoundaryCrossingView view = ...;
```

## 参见

- [本区域目录](../)