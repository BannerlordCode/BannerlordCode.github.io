---
title: "FillBarWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FillBarWidget`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# FillBarWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class FillBarWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI.ExtraWidgets/TaleWorlds.GauntletUI.ExtraWidgets/FillBarWidget.cs`

## 概述

`FillBarWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `FillBarWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentAmount` | `public int CurrentAmount { get; set; }` |
| `MaxAmount` | `public int MaxAmount { get; set; }` |
| `InitialAmount` | `public int InitialAmount { get; set; }` |
| `MaxAmountAsFloat` | `public float MaxAmountAsFloat { get; set; }` |
| `CurrentAmountAsFloat` | `public float CurrentAmountAsFloat { get; set; }` |
| `InitialAmountAsFloat` | `public float InitialAmountAsFloat { get; set; }` |
| `CompletelyFillChange` | `public bool CompletelyFillChange { get; set; }` |
| `ShowNegativeChange` | `public bool ShowNegativeChange { get; set; }` |
| `CustomChangeColor` | `public bool CustomChangeColor { get; set; }` |
| `FillWidget` | `public Widget FillWidget { get; set; }` |
| `ChangeWidget` | `public Widget ChangeWidget { get; set; }` |
| `DividerWidget` | `public Widget DividerWidget { get; set; }` |

## 使用示例

```csharp
var widget = new FillBarWidget(context);
```

## 参见

- [完整类目录](../catalog)