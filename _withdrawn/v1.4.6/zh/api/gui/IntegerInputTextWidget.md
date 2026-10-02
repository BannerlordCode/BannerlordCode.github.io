---
title: "IntegerInputTextWidget"
description: "IntegerInputTextWidget：TaleWorlds.GauntletUI.BaseTypes 的 public 类，继承 EditableTextWidget；公开成员 9 个（方法 3、属性 5、字段 0）。canonical 桶 gui。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/IntegerInputTextWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IntegerInputTextWidget

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class IntegerInputTextWidget : EditableTextWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/IntegerInputTextWidget.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## 概述

IntegerInputTextWidget 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/IntegerInputTextWidget.cs。它是一个 public 类，实现/继承 EditableTextWidget，继承链为 IntegerInputTextWidget → EditableTextWidget → BrushWidget → Widget → PropertyOwnerObject。public/protected 成员共 9 个：3 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IntegerInputTextWidget 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.GauntletUI`），命名空间 `TaleWorlds.GauntletUI.BaseTypes`，继承链 IntegerInputTextWidget → EditableTextWidget → BrushWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 5/9，方法 3/9），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/IntegerInputTextWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EnableClamp` | `public bool EnableClamp` | 属性 |
| `UpdateValueOnDone` | `public bool UpdateValueOnDone` | 属性 |
| `IntegerInputTextWidget` | `public IntegerInputTextWidget(UIContext context) : base(context)` | 构造函数 |
| `HandleInput` | `public override void HandleInput(IReadOnlyList<int>lastKeysPressed)` | 方法 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `SetAllText` | `public override void SetAllText(string text)` | 方法 |
| `IntText` | `public int IntText` | 属性 |
| `MaxInt` | `public int MaxInt` | 属性 |
| `MinInt` | `public int MinInt` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 EditableTextWidget](../EditableTextWidget/)
- [同命名空间 BasicContainer](../BasicContainer/)
- [同命名空间 BrushWidget](../BrushWidget/)
- [同命名空间 ButtonType](../ButtonType/)
- [同命名空间 ButtonWidget](../ButtonWidget/)
