---
title: "ObjectiveMarkersParentWidget"
description: "ObjectiveMarkersParentWidget 的自动生成类参考。"
---
# ObjectiveMarkersParentWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ObjectiveMarkersParentWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker/ObjectiveMarkersParentWidget.cs`

## 概述

`ObjectiveMarkersParentWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `ObjectiveMarkersParentWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MinDistanceToFocus` | `public float MinDistanceToFocus { get; set; }` |
| `IsMarkersEnabled` | `public bool IsMarkersEnabled { get; set; }` |
| `TargetAlphaValue` | `public float TargetAlphaValue { get; set; }` |
| `MaxDistanceToCombineMarkers` | `public float MaxDistanceToCombineMarkers { get; set; }` |
| `MarkersContainer` | `public Widget MarkersContainer { get; set; }` |

## 主要方法

### Compare
`public int Compare(ObjectiveMarkerWidget x, ObjectiveMarkerWidget y)`

**用途 / Purpose:** **用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 ObjectiveMarkersParentWidget 实例
ObjectiveMarkersParentWidget objectiveMarkersParentWidget = ...;
var result = objectiveMarkersParentWidget.Compare(x, y);
```

### Compare
`public int Compare(Widget x, Widget y)`

**用途 / Purpose:** **用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 ObjectiveMarkersParentWidget 实例
ObjectiveMarkersParentWidget objectiveMarkersParentWidget = ...;
var result = objectiveMarkersParentWidget.Compare(x, y);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
ObjectiveMarkersParentWidget widget = ...;
```

## 参见

- [本区域目录](../)