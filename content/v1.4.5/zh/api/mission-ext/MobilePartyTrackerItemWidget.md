---
title: "MobilePartyTrackerItemWidget"
description: "MobilePartyTrackerItemWidget 的自动生成类参考。"
---
# MobilePartyTrackerItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MobilePartyTrackerItemWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map/MobilePartyTrackerItemWidget.cs`

## 概述

`MobilePartyTrackerItemWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MobilePartyTrackerItemWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `FrameVisualWidget` | `public Widget FrameVisualWidget { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `IsBehind` | `public bool IsBehind { get; set; }` |
| `IsTracked` | `public bool IsTracked { get; set; }` |
| `TrackerType` | `public string TrackerType { get; set; }` |
| `Position` | `public Vec2 Position { get; set; }` |
| `TrackerImageBrush` | `public Brush TrackerImageBrush { get; set; }` |

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
MobilePartyTrackerItemWidget widget = ...;
```

## 参见

- [本区域目录](../)