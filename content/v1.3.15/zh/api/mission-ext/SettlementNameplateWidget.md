---
title: "SettlementNameplateWidget"
description: "SettlementNameplateWidget 的自动生成类参考。"
---
# SettlementNameplateWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SettlementNameplateWidget : Widget, IComparable<SettlementNameplateWidget>`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/SettlementNameplateWidget.cs`

## 概述

`SettlementNameplateWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `SettlementNameplateWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Position` | `public Vec2 Position { get; set; }` |
| `IsVisibleOnMap` | `public bool IsVisibleOnMap { get; set; }` |
| `IsTracked` | `public bool IsTracked { get; set; }` |
| `IsTargetedByTutorial` | `public bool IsTargetedByTutorial { get; set; }` |
| `IsInsideWindow` | `public bool IsInsideWindow { get; set; }` |
| `IsInRange` | `public bool IsInRange { get; set; }` |
| `CanParley` | `public bool CanParley { get; set; }` |
| `HasPort` | `public bool HasPort { get; set; }` |
| `RelationType` | `public int RelationType { get; set; }` |
| `WSign` | `public int WSign { get; set; }` |
| `WPos` | `public float WPos { get; set; }` |
| `DistanceToCamera` | `public float DistanceToCamera { get; set; }` |
| `NameplateItem` | `public SettlementNameplateItemWidget NameplateItem { get; set; }` |
| `NotificationListPanel` | `public ListPanel NotificationListPanel { get; set; }` |
| `EventsListPanel` | `public ListPanel EventsListPanel { get; set; }` |

## 主要方法

### CompareTo
`public int CompareTo(SettlementNameplateWidget other)`

**用途 / Purpose:** 将当前对象与传入实例比较大小或顺序。

```csharp
// 先通过子系统 API 拿到 SettlementNameplateWidget 实例
SettlementNameplateWidget settlementNameplateWidget = ...;
var result = settlementNameplateWidget.CompareTo(other);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
SettlementNameplateWidget widget = ...;
```

## 参见

- [本区域目录](../)