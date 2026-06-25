---
title: "CardSelectionPopupButtonWidget"
description: "CardSelectionPopupButtonWidget 的自动生成类参考。"
---
# CardSelectionPopupButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CardSelectionPopupButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting/CardSelectionPopupButtonWidget.cs`

## 概述

`CardSelectionPopupButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `CardSelectionPopupButtonWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `PropertiesContainer` | `public CircularAutoScrollablePanelWidget PropertiesContainer { get; set; }` |

## 主要方法

### SetState
`public override void SetState(string stateName)`

**用途 / Purpose:** 为 「state」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CardSelectionPopupButtonWidget 实例
CardSelectionPopupButtonWidget cardSelectionPopupButtonWidget = ...;
cardSelectionPopupButtonWidget.SetState("example");
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
CardSelectionPopupButtonWidget widget = ...;
```

## 参见

- [本区域目录](../)