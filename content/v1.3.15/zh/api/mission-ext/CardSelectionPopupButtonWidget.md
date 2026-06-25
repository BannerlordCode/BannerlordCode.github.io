---
title: "CardSelectionPopupButtonWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CardSelectionPopupButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CardSelectionPopupButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CardSelectionPopupButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CardSelectionPopupButtonWidget.cs`

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

**用途 / Purpose:** 设置 `state` 的值或状态。

## 使用示例

```csharp
var widget = new CardSelectionPopupButtonWidget(context);
```

## 参见

- [完整类目录](../catalog)