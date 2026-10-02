---
title: "CounterTextBrushWidget"
description: "CounterTextBrushWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 BrushWidget；公开成员 12 个（方法 3、属性 8、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/CounterTextBrushWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CounterTextBrushWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class CounterTextBrushWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CounterTextBrushWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

CounterTextBrushWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/CounterTextBrushWidget.cs。它是一个 public 类，实现/继承 BrushWidget，继承链为 CounterTextBrushWidget → BrushWidget → Widget → PropertyOwnerObject。public/protected 成员共 12 个：3 方法、8 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CounterTextBrushWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets`，继承链 CounterTextBrushWidget → BrushWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 8/12，方法 3/12），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/CounterTextBrushWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CounterTime` | `public float CounterTime` | 属性 |
| `CounterTextBrushWidget` | `public CounterTextBrushWidget(UIContext context) : base(context)` | 构造函数 |
| `OnRender` | `protected override void OnRender(TwoDimensionContext twoDimensionContext, TwoDimensionDrawContext drawContext)` | 方法 |
| `SetInitialValue` | `public void SetInitialValue(float value)` | 方法 |
| `ForceSetValue` | `public void ForceSetValue(float value)` | 方法 |
| `IntTarget` | `public int IntTarget` | 属性 |
| `FloatTarget` | `public float FloatTarget` | 属性 |
| `MinValue` | `public float MinValue` | 属性 |
| `MaxValue` | `public float MaxValue` | 属性 |
| `ShowSign` | `public bool ShowSign` | 属性 |
| `Clamped` | `public bool Clamped` | 属性 |
| `ShowFloatingPoint` | `public bool ShowFloatingPoint` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 BrushWidget](../../gui/BrushWidget/)
- [同命名空间 AutoHideRichTextWidget](../AutoHideRichTextWidget/)
- [同命名空间 AutoHideTextWidget](../AutoHideTextWidget/)
- [同命名空间 AutoHideZeroTextWidget](../AutoHideZeroTextWidget/)
- [同命名空间 BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager/)
