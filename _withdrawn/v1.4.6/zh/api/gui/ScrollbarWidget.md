---
title: "ScrollbarWidget"
description: "ScrollbarWidget：TaleWorlds.GauntletUI.BaseTypes 的 public 类，继承 ImageWidget；公开成员 16 个（方法 4、属性 11、字段 0）。canonical 桶 gui。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ScrollbarWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ScrollbarWidget

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class ScrollbarWidget : ImageWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ScrollbarWidget.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## 概述

ScrollbarWidget 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ScrollbarWidget.cs。它是一个 public 类，实现/继承 ImageWidget，继承链为 ScrollbarWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。public/protected 成员共 16 个：4 方法、11 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ScrollbarWidget 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.GauntletUI`），命名空间 `TaleWorlds.GauntletUI.BaseTypes`，继承链 ScrollbarWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 11/16，方法 4/16），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ScrollbarWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsDiscrete` | `public bool IsDiscrete` | 属性 |
| `Locked` | `public bool Locked` | 属性 |
| `AlignmentAxis` | `public AlignmentAxis AlignmentAxis` | 属性 |
| `ReverseDirection` | `public bool ReverseDirection` | 属性 |
| `ValueFloat` | `public float ValueFloat` | 属性 |
| `ValueInt` | `public int ValueInt` | 属性 |
| `MinValue` | `public float MinValue` | 属性 |
| `MaxValue` | `public float MaxValue` | 属性 |
| `DoNotUpdateHandleSize` | `public bool DoNotUpdateHandleSize` | 属性 |
| `Handle` | `public Widget Handle` | 属性 |
| `ScrollbarArea` | `public Widget ScrollbarArea` | 属性 |
| `ScrollbarWidget` | `public ScrollbarWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `OnMousePressed` | `protected internal override void OnMousePressed()` | 方法 |
| `OnMouseReleased` | `protected internal override void OnMouseReleased(bool isFromInput)` | 方法 |
| `SetValueForced` | `public void SetValueForced(float value)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ImageWidget](../ImageWidget/)
- [同命名空间 BasicContainer](../BasicContainer/)
- [同命名空间 BrushWidget](../BrushWidget/)
- [同命名空间 ButtonType](../ButtonType/)
- [同命名空间 ButtonWidget](../ButtonWidget/)
