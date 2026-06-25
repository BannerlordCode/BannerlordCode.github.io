---
title: "ObjectiveMarkerWidget"
description: "ObjectiveMarkerWidget 的自动生成类参考。"
---
# ObjectiveMarkerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ObjectiveMarkerWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker/ObjectiveMarkerWidget.cs`

## 概述

`ObjectiveMarkerWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `ObjectiveMarkerWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `FarAlphaTarget` | `public float FarAlphaTarget { get; }` |
| `FarDistanceCutoff` | `public float FarDistanceCutoff { get; }` |
| `CloseDistanceCutoff` | `public float CloseDistanceCutoff { get; }` |
| `Rect` | `public MarkerRect Rect { get; }` |
| `IsInScreenBoundaries` | `public bool IsInScreenBoundaries { get; }` |
| `NameTextWidget` | `public TextWidget NameTextWidget { get; set; }` |
| `CombinationCountWidget` | `public TextWidget CombinationCountWidget { get; set; }` |
| `QuestIconWidget` | `public Widget QuestIconWidget { get; set; }` |
| `MainContainer` | `public Widget MainContainer { get; set; }` |
| `DistanceContainerWidget` | `public Widget DistanceContainerWidget { get; set; }` |
| `DistanceIconWidget` | `public Widget DistanceIconWidget { get; set; }` |
| `DistanceTextWidget` | `public Widget DistanceTextWidget { get; set; }` |
| `Position` | `public Vec2 Position { get; set; }` |
| `CombinedAveragePosition` | `public Vec2 CombinedAveragePosition { get; set; }` |
| `Distance` | `public int Distance { get; set; }` |
| `CombinedSiblingsCount` | `public int CombinedSiblingsCount { get; set; }` |
| `IsMainCombinationMarker` | `public bool IsMainCombinationMarker { get; set; }` |
| `IsDistanceRelevant` | `public bool IsDistanceRelevant { get; set; }` |
| `IsMarkerEnabled` | `public bool IsMarkerEnabled { get; set; }` |
| `IsMarkerActive` | `public bool IsMarkerActive { get; set; }` |
| `IsFocused` | `public new bool IsFocused { get; set; }` |

## 主要方法

### Update
`public void Update(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 ObjectiveMarkerWidget 实例
ObjectiveMarkerWidget objectiveMarkerWidget = ...;
objectiveMarkerWidget.Update(0);
```

### UpdateRectangle
`public void UpdateRectangle()`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 rectangle 的最新表示。

```csharp
// 先通过子系统 API 拿到 ObjectiveMarkerWidget 实例
ObjectiveMarkerWidget objectiveMarkerWidget = ...;
objectiveMarkerWidget.UpdateRectangle();
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
ObjectiveMarkerWidget widget = ...;
```

## 参见

- [本区域目录](../)