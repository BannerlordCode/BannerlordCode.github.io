---
title: "TextWidget"
description: "TextWidget：TaleWorlds.GauntletUI.BaseTypes 的 public 类，继承 ImageWidget；公开成员 9 个（方法 3、属性 5、字段 0）。canonical 桶 gui。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TextWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TextWidget

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class TextWidget : ImageWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TextWidget.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## 概述

TextWidget 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TextWidget.cs。它是一个 public 类，实现/继承 ImageWidget，继承链为 TextWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。public/protected 成员共 9 个：3 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TextWidget 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.GauntletUI`），命名空间 `TaleWorlds.GauntletUI.BaseTypes`，继承链 TextWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 5/9，方法 3/9），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TextWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AutoHideIfEmpty` | `public bool AutoHideIfEmpty` | 属性 |
| `Text` | `public string Text` | 属性 |
| `IntText` | `public int IntText` | 属性 |
| `FloatText` | `public float FloatText` | 属性 |
| `TextWidget` | `public TextWidget(UIContext context) : base(context)` | 构造函数 |
| `SetText` | `protected virtual void SetText(string value)` | 方法 |
| `RefreshTextParameters` | `protected void RefreshTextParameters()` | 方法 |
| `OnRender` | `protected override void OnRender(TwoDimensionContext twoDimensionContext, TwoDimensionDrawContext drawContext)` | 方法 |
| `CanBreakWords` | `public bool CanBreakWords` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ImageWidget](../ImageWidget/)
- [同命名空间 BasicContainer](../BasicContainer/)
- [同命名空间 BrushWidget](../BrushWidget/)
- [同命名空间 ButtonType](../ButtonType/)
- [同命名空间 ButtonWidget](../ButtonWidget/)
