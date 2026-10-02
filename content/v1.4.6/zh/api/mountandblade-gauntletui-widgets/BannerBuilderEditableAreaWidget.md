---
title: "BannerBuilderEditableAreaWidget"
description: "BannerBuilderEditableAreaWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 Widget；公开成员 17 个（方法 2、属性 14、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/BannerBuilder/BannerBuilderEditableAreaWidget.cs。"
---
# BannerBuilderEditableAreaWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.BannerBuilder`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class BannerBuilderEditableAreaWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/BannerBuilder/BannerBuilderEditableAreaWidget.cs`

## 概述

BannerBuilderEditableAreaWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/BannerBuilder/BannerBuilderEditableAreaWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 BannerBuilderEditableAreaWidget → Widget。public/protected 成员共 17 个：2 方法、14 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BannerBuilderEditableAreaWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.BannerBuilder），继承链 BannerBuilderEditableAreaWidget → Widget。成员构成以属性为主（属性 14/17，方法 2/17），对外主要以状态读取接口暴露。继承链上的 Widget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/BannerBuilder/BannerBuilderEditableAreaWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DragWidgetTopRight` | `public ButtonWidget DragWidgetTopRight` | 属性 |
| `DragWidgetRight` | `public ButtonWidget DragWidgetRight` | 属性 |
| `DragWidgetTop` | `public ButtonWidget DragWidgetTop` | 属性 |
| `RotateWidget` | `public ButtonWidget RotateWidget` | 属性 |
| `BannerTableauWidget` | `public BannerTableauWidget BannerTableauWidget` | 属性 |
| `EditableAreaVisualWidget` | `public Widget EditableAreaVisualWidget` | 属性 |
| `LayerIndex` | `public int LayerIndex` | 属性 |
| `IsMirrorActive` | `public bool IsMirrorActive` | 属性 |
| `BannerBuilderEditableAreaWidget` | `public BannerBuilderEditableAreaWidget(UIContext context) : base(context)` | 构造函数 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `IsLayerPattern` | `public bool IsLayerPattern` | 属性 |
| `PositionValue` | `public Vec2 PositionValue` | 属性 |
| `SizeValue` | `public Vec2 SizeValue` | 属性 |
| `RotationValue` | `public float RotationValue` | 属性 |
| `EditableAreaSize` | `public int EditableAreaSize` | 属性 |
| `TotalAreaSize` | `public int TotalAreaSize` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
