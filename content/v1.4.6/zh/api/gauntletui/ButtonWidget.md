---
title: "ButtonWidget"
description: "ButtonWidget：TaleWorlds.GauntletUI 的 public 类，继承 ImageWidget；公开成员 17 个（方法 8、属性 6、字段 2）。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ButtonWidget.cs。"
---
# ButtonWidget

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class ButtonWidget : ImageWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ButtonWidget.cs`

## 概述

ButtonWidget 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ButtonWidget.cs。它是一个 public 类，实现/继承 ImageWidget，继承链为 ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。public/protected 成员共 17 个：8 方法、6 属性、2 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ButtonWidget 是 TaleWorlds.GauntletUI 的顶层类型，命名空间与模块目录不同（TaleWorlds.GauntletUI.BaseTypes），继承链 ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。成员构成以方法为主（方法 8/17，属性 6/17），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ButtonWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ButtonType` | `public ButtonType ButtonType` | 属性 |
| `OnPreviewMousePressed` | `protected override bool OnPreviewMousePressed()` | 方法 |
| `RefreshState` | `protected override void RefreshState()` | 方法 |
| `ButtonWidget` | `public ButtonWidget(UIContext context) : base(context)` | 构造函数 |
| `OnMousePressed` | `protected internal override void OnMousePressed()` | 方法 |
| `OnMouseReleased` | `protected internal override void OnMouseReleased(bool isFromInput)` | 方法 |
| `OnMouseAlternatePressed` | `protected internal override void OnMouseAlternatePressed()` | 方法 |
| `OnMouseAlternateReleased` | `protected internal override void OnMouseAlternateReleased(bool isFromInput)` | 方法 |
| `HandleClick` | `protected virtual void HandleClick()` | 方法 |
| `HandleAlternateClick` | `protected virtual void HandleAlternateClick()` | 方法 |
| `IsToggle` | `public bool IsToggle` | 属性 |
| `IsRadio` | `public bool IsRadio` | 属性 |
| `ToggleIndicator` | `public Widget ToggleIndicator` | 属性 |
| `IsSelected` | `public bool IsSelected` | 属性 |
| `DominantSelectedState` | `public bool DominantSelectedState` | 属性 |
| `_maxDoubleClickDeltaTimeInSeconds` | `protected const float _maxDoubleClickDeltaTimeInSeconds` | 字段 |
| `List` | `public List<Action<Widget>>ClickEventHandlers` | 字段 |

## 参见

- [↑ gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 ImageWidget](../ImageWidget)
- [同命名空间 BasicContainer](../BasicContainer)
- [同命名空间 BrushWidget](../BrushWidget)
- [同命名空间 ButtonType](../ButtonType)
- [同命名空间 Container](../Container)
