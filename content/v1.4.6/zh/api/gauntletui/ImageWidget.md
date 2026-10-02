---
title: "ImageWidget"
description: "ImageWidget：TaleWorlds.GauntletUI 的 public 类，继承 BrushWidget；公开成员 4 个（方法 1、属性 2、字段 0）。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ImageWidget.cs。"
---
# ImageWidget

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class ImageWidget : BrushWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ImageWidget.cs`

## 概述

ImageWidget 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ImageWidget.cs。它是一个 public 类，实现/继承 BrushWidget，继承链为 ImageWidget → BrushWidget → Widget → PropertyOwnerObject。public/protected 成员共 4 个：1 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ImageWidget 是 TaleWorlds.GauntletUI 的顶层类型，命名空间与模块目录不同（TaleWorlds.GauntletUI.BaseTypes），继承链 ImageWidget → BrushWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 2/4，方法 1/4），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ImageWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OverrideDefaultStateSwitchingEnabled` | `public bool OverrideDefaultStateSwitchingEnabled` | 属性 |
| `OverrideDefaultStateSwitchingDisabled` | `public bool OverrideDefaultStateSwitchingDisabled` | 属性 |
| `ImageWidget` | `public ImageWidget(UIContext context) : base(context)` | 构造函数 |
| `RefreshState` | `protected override void RefreshState()` | 方法 |

## 参见

- [↑ gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 BrushWidget](../BrushWidget)
- [同命名空间 BasicContainer](../BasicContainer)
- [同命名空间 BrushWidget](../BrushWidget)
- [同命名空间 ButtonType](../ButtonType)
- [同命名空间 ButtonWidget](../ButtonWidget)
