---
title: "OnlineImageTextureWidget"
description: "OnlineImageTextureWidget：TaleWorlds.GauntletUI 的 public 类，继承 TextureWidget；公开成员 6 个（方法 1、属性 3、字段 0）。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/OnlineImageTextureWidget.cs。"
---
# OnlineImageTextureWidget

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class OnlineImageTextureWidget : TextureWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/OnlineImageTextureWidget.cs`

## 概述

OnlineImageTextureWidget 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/OnlineImageTextureWidget.cs。它是一个 public 类，实现/继承 TextureWidget，继承链为 OnlineImageTextureWidget → TextureWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。public/protected 成员共 6 个：1 方法、3 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：OnlineImageTextureWidget 是 TaleWorlds.GauntletUI 的顶层类型，命名空间与模块目录不同（TaleWorlds.GauntletUI.BaseTypes），继承链 OnlineImageTextureWidget → TextureWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 3/6，方法 1/6），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/OnlineImageTextureWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ImageSizePolicy` | `public OnlineImageTextureWidget.ImageSizePolicies ImageSizePolicy` | 属性 |
| `OnlineImageTextureWidget` | `public OnlineImageTextureWidget(UIContext context) : base(context)` | 构造函数 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `OnlineImageSourceUrl` | `public string OnlineImageSourceUrl` | 属性 |
| `ImageSizePolicies` | `public enum ImageSizePolicies` | 属性 |
| `ImageSizePolicies` | `public enum ImageSizePolicies` | 嵌套类型 |

## 参见

- [↑ gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 TextureWidget](../TextureWidget)
- [同命名空间 BasicContainer](../BasicContainer)
- [同命名空间 BrushWidget](../BrushWidget)
- [同命名空间 ButtonType](../ButtonType)
- [同命名空间 ButtonWidget](../ButtonWidget)
