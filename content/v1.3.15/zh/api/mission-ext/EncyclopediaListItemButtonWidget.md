---
title: "EncyclopediaListItemButtonWidget"
description: "EncyclopediaListItemButtonWidget 的自动生成类参考。"
---
# EncyclopediaListItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EncyclopediaListItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Encyclopedia/EncyclopediaListItemButtonWidget.cs`

## 概述

`EncyclopediaListItemButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `EncyclopediaListItemButtonWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ListItemNameTextWidget` | `public TextWidget ListItemNameTextWidget { get; set; }` |
| `ListComparedValueTextWidget` | `public TextWidget ListComparedValueTextWidget { get; set; }` |
| `InfoAvailableItemNameBrush` | `public Brush InfoAvailableItemNameBrush { get; set; }` |
| `InfoUnvailableItemNameBrush` | `public Brush InfoUnvailableItemNameBrush { get; set; }` |
| `IsInfoAvailable` | `public bool IsInfoAvailable { get; set; }` |
| `ListItemId` | `public string ListItemId { get; set; }` |

## 主要方法

### OnThisLateUpdate
`public void OnThisLateUpdate(float dt)`

**用途 / Purpose:** 在 「this late update」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 EncyclopediaListItemButtonWidget 实例
EncyclopediaListItemButtonWidget encyclopediaListItemButtonWidget = ...;
encyclopediaListItemButtonWidget.OnThisLateUpdate(0);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
EncyclopediaListItemButtonWidget widget = ...;
```

## 参见

- [本区域目录](../)