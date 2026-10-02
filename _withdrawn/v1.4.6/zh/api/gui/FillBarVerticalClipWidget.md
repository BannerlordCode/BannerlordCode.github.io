---
title: "FillBarVerticalClipWidget"
description: "FillBarVerticalClipWidget：TaleWorlds.GauntletUI.ExtraWidgets 的 public 类，继承 Widget；公开成员 15 个（方法 2、属性 12、字段 0）。canonical 桶 gui。源文件 TaleWorlds.GauntletUI.ExtraWidgets/FillBarVerticalClipWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# FillBarVerticalClipWidget

**Namespace:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Module:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Type:** `public class FillBarVerticalClipWidget : Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/FillBarVerticalClipWidget.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## 概述

FillBarVerticalClipWidget 位于 TaleWorlds.GauntletUI.ExtraWidgets 模块，源文件 TaleWorlds.GauntletUI.ExtraWidgets/FillBarVerticalClipWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 FillBarVerticalClipWidget → Widget → PropertyOwnerObject。public/protected 成员共 15 个：2 方法、12 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：FillBarVerticalClipWidget 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.GauntletUI`），命名空间 `TaleWorlds.GauntletUI.ExtraWidgets`，继承链 FillBarVerticalClipWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 12/15，方法 2/15），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI.ExtraWidgets/FillBarVerticalClipWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FillBarVerticalClipWidget` | `public FillBarVerticalClipWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `OnRender` | `protected override void OnRender(TwoDimensionContext twoDimensionContext, TwoDimensionDrawContext drawContext)` | 方法 |
| `IsDirectionUpward` | `public bool IsDirectionUpward` | 属性 |
| `CurrentAmount` | `public int CurrentAmount` | 属性 |
| `MaxAmount` | `public int MaxAmount` | 属性 |
| `InitialAmount` | `public int InitialAmount` | 属性 |
| `MaxAmountAsFloat` | `public float MaxAmountAsFloat` | 属性 |
| `CurrentAmountAsFloat` | `public float CurrentAmountAsFloat` | 属性 |
| `InitialAmountAsFloat` | `public float InitialAmountAsFloat` | 属性 |
| `FillWidget` | `public Widget FillWidget` | 属性 |
| `ChangeWidget` | `public Widget ChangeWidget` | 属性 |
| `DividerWidget` | `public Widget DividerWidget` | 属性 |
| `ContainerWidget` | `public Widget ContainerWidget` | 属性 |
| `ClipWidget` | `public Widget ClipWidget` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AnimatedNumberTextWidget](../AnimatedNumberTextWidget/)
- [同命名空间 CustomWidgetManager](../CustomWidgetManager/)
- [同命名空间 DelayedStateChanger](../DelayedStateChanger/)
- [同命名空间 DialogButtonsParentWidget](../DialogButtonsParentWidget/)
