---
title: "BarterItemVisualBrushWidget"
description: "BarterItemVisualBrushWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 BrushWidget；公开成员 9 个（方法 1、属性 7、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Barter/BarterItemVisualBrushWidget.cs。"
---
# BarterItemVisualBrushWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class BarterItemVisualBrushWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Barter/BarterItemVisualBrushWidget.cs`

## 概述

BarterItemVisualBrushWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Barter/BarterItemVisualBrushWidget.cs。它是一个 public 类，实现/继承 BrushWidget，继承链为 BarterItemVisualBrushWidget → BrushWidget。public/protected 成员共 9 个：1 方法、7 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BarterItemVisualBrushWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter），继承链 BarterItemVisualBrushWidget → BrushWidget。成员构成以属性为主（属性 7/9，方法 1/9），对外主要以状态读取接口暴露。继承链上的 BrushWidget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Barter/BarterItemVisualBrushWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BarterItemVisualBrushWidget` | `public BarterItemVisualBrushWidget(UIContext context) : base(context)` | 构造函数 |
| `OnParallelUpdate` | `protected override void OnParallelUpdate(float dt)` | 方法 |
| `SpriteWidget` | `public BrushWidget SpriteWidget` | 属性 |
| `SpriteClipWidget` | `public Widget SpriteClipWidget` | 属性 |
| `ImageIdentifierWidget` | `public ImageIdentifierWidget ImageIdentifierWidget` | 属性 |
| `MaskedTextureWidget` | `public MaskedTextureWidget MaskedTextureWidget` | 属性 |
| `HasVisualIdentifier` | `public bool HasVisualIdentifier` | 属性 |
| `Type` | `public string Type` | 属性 |
| `FiefImagePath` | `public string FiefImagePath` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BarterItemCountControlButtonWidget](../BarterItemCountControlButtonWidget)
- [同命名空间 BarterItemCountTextWidget](../BarterItemCountTextWidget)
- [同命名空间 BarterTupleItemButtonWidget](../BarterTupleItemButtonWidget)
