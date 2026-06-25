---
title: "PartyManageTroopPopupWidget"
description: "PartyManageTroopPopupWidget 的自动生成类参考。"
---
# PartyManageTroopPopupWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyManageTroopPopupWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyManageTroopPopupWidget.cs`

## 概述

`PartyManageTroopPopupWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `PartyManageTroopPopupWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `PrimaryInputKeyVisualParent` | `public Widget PrimaryInputKeyVisualParent { get; set; }` |
| `SecondaryInputKeyVisualParent` | `public Widget SecondaryInputKeyVisualParent { get; set; }` |
| `TertiaryInputKeyVisualParent` | `public Widget TertiaryInputKeyVisualParent { get; set; }` |
| `IsPrimaryActionAvailable` | `public bool IsPrimaryActionAvailable { get; set; }` |
| `IsSecondaryActionAvailable` | `public bool IsSecondaryActionAvailable { get; set; }` |
| `IsTertiaryActionAvailable` | `public bool IsTertiaryActionAvailable { get; set; }` |

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
PartyManageTroopPopupWidget widget = ...;
```

## 参见

- [本区域目录](../)