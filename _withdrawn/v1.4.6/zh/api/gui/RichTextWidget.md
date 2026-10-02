---
title: "RichTextWidget"
description: "RichTextWidget：TaleWorlds.GauntletUI.BaseTypes 的 public 类，继承 BrushWidget；公开成员 14 个（方法 9、属性 4、字段 0）。canonical 桶 gui。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/RichTextWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# RichTextWidget

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class RichTextWidget : BrushWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/RichTextWidget.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## 概述

RichTextWidget 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/RichTextWidget.cs。它是一个 public 类，实现/继承 BrushWidget，继承链为 RichTextWidget → BrushWidget → Widget → PropertyOwnerObject。public/protected 成员共 14 个：9 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：RichTextWidget 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.GauntletUI`），命名空间 `TaleWorlds.GauntletUI.BaseTypes`，继承链 RichTextWidget → BrushWidget → Widget → PropertyOwnerObject。成员构成以方法为主（方法 9/14，属性 4/14），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/RichTextWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AutoHideIfEmpty` | `public bool AutoHideIfEmpty` | 属性 |
| `LinkHoverCursorState` | `public string LinkHoverCursorState` | 属性 |
| `Text` | `public string Text` | 属性 |
| `RichTextWidget` | `public RichTextWidget(UIContext context) : base(context)` | 构造函数 |
| `OnBrushChanged` | `public override void OnBrushChanged()` | 方法 |
| `SetText` | `protected virtual void SetText(string value)` | 方法 |
| `RefreshState` | `protected override void RefreshState()` | 方法 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `OnRender` | `protected override void OnRender(TwoDimensionContext twoDimensionContext, TwoDimensionDrawContext drawContext)` | 方法 |
| `OnMousePressed` | `protected internal override void OnMousePressed()` | 方法 |
| `OnMouseReleased` | `protected internal override void OnMouseReleased(bool isFromInput)` | 方法 |
| `OnMouseAlternatePressed` | `protected internal override void OnMouseAlternatePressed()` | 方法 |
| `OnMouseAlternateReleased` | `protected internal override void OnMouseAlternateReleased(bool isFromInput)` | 方法 |
| `CanBreakWords` | `public bool CanBreakWords` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 BrushWidget](../BrushWidget/)
- [同命名空间 BasicContainer](../BasicContainer/)
- [同命名空间 BrushWidget](../BrushWidget/)
- [同命名空间 ButtonType](../ButtonType/)
- [同命名空间 ButtonWidget](../ButtonWidget/)
