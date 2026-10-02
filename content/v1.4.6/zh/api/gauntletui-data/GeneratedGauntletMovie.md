---
title: "GeneratedGauntletMovie"
description: "GeneratedGauntletMovie：TaleWorlds.GauntletUI.Data 的 public 类，继承 IGauntletMovie；公开成员 10 个（方法 4、属性 5、字段 0）。源文件 TaleWorlds.GauntletUI.Data/GeneratedGauntletMovie.cs。"
---
# GeneratedGauntletMovie

**Namespace:** `TaleWorlds.GauntletUI.Data`
**Module:** `TaleWorlds.GauntletUI.Data`
**Type:** `public class GeneratedGauntletMovie : IGauntletMovie`
**File:** `TaleWorlds.GauntletUI.Data/GeneratedGauntletMovie.cs`

## 概述

GeneratedGauntletMovie 位于 TaleWorlds.GauntletUI.Data 模块，源文件 TaleWorlds.GauntletUI.Data/GeneratedGauntletMovie.cs。它是一个 public 类，实现/继承 IGauntletMovie，继承链为 GeneratedGauntletMovie → IGauntletMovie。public/protected 成员共 10 个：4 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GeneratedGauntletMovie 是 TaleWorlds.GauntletUI.Data 的顶层类型，命名空间与模块目录一致，继承链 GeneratedGauntletMovie → IGauntletMovie。成员构成以属性为主（属性 5/10，方法 4/10），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI.Data/GeneratedGauntletMovie.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Context` | `public UIContext Context` | 属性 |
| `RootWidget` | `public Widget RootWidget` | 属性 |
| `MovieName` | `public string MovieName` | 属性 |
| `IsLoaded` | `public bool IsLoaded` | 属性 |
| `IsReleased` | `public bool IsReleased` | 属性 |
| `GeneratedGauntletMovie` | `public GeneratedGauntletMovie(string movieName, Widget rootWidget)` | 构造函数 |
| `Update` | `public void Update()` | 方法 |
| `Release` | `public void Release()` | 方法 |
| `RefreshBindingWithChildren` | `public void RefreshBindingWithChildren()` | 方法 |
| `OnResourcesRefreshed` | `public void OnResourcesRefreshed(SpriteData spriteData, WidgetFactory widgetFactory, BrushFactory brushFactory, FontFactory fontFactory)` | 方法 |

## 参见

- [↑ gauntletui-data 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 IGauntletMovie](../IGauntletMovie)
- [同命名空间 GauntletMovie](../GauntletMovie)
- [同命名空间 GauntletView](../GauntletView)
- [同命名空间 GeneratedWidgetData](../GeneratedWidgetData)
- [同命名空间 IGauntletMovie](../IGauntletMovie)
