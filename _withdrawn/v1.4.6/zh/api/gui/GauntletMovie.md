---
title: "GauntletMovie"
description: "GauntletMovie：TaleWorlds.GauntletUI.Data 的 public 类，继承 IGauntletMovie；公开成员 15 个（方法 6、属性 9、字段 0）。canonical 桶 gui。源文件 TaleWorlds.GauntletUI.Data/GauntletMovie.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletMovie

**Namespace:** `TaleWorlds.GauntletUI.Data`
**Module:** `TaleWorlds.GauntletUI.Data`
**Type:** `public class GauntletMovie : IGauntletMovie`
**File:** `TaleWorlds.GauntletUI.Data/GauntletMovie.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## 概述

GauntletMovie 位于 TaleWorlds.GauntletUI.Data 模块，源文件 TaleWorlds.GauntletUI.Data/GauntletMovie.cs。它是一个 public 类，实现/继承 IGauntletMovie，继承链为 GauntletMovie → IGauntletMovie。public/protected 成员共 15 个：6 方法、9 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GauntletMovie 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.GauntletUI`），命名空间 `TaleWorlds.GauntletUI.Data`，继承链 GauntletMovie → IGauntletMovie。成员构成以属性为主（属性 9/15，方法 6/15），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI.Data/GauntletMovie.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `WidgetFactory` | `public WidgetFactory WidgetFactory` | 属性 |
| `BrushFactory` | `public BrushFactory BrushFactory` | 属性 |
| `Context` | `public UIContext Context` | 属性 |
| `ViewModel` | `public IViewModel ViewModel` | 属性 |
| `MovieName` | `public string MovieName` | 属性 |
| `RootView` | `public GauntletView RootView` | 属性 |
| `RootWidget` | `public Widget RootWidget` | 属性 |
| `IsLoaded` | `public bool IsLoaded` | 属性 |
| `IsReleased` | `public bool IsReleased` | 属性 |
| `RefreshDataSource` | `public void RefreshDataSource(IViewModel dataSourve)` | 方法 |
| `Release` | `public void Release()` | 方法 |
| `Update` | `public void Update()` | 方法 |
| `Load` | `public static IGauntletMovie Load(UIContext context, WidgetFactory widgetFactory, string movieName, IViewModel datasource, bool doNotUseGeneratedPrefabs, bool hotReloadEnabled)` | 方法 |
| `RefreshBindingWithChildren` | `public void RefreshBindingWithChildren()` | 方法 |
| `FindViewOf` | `public GauntletView FindViewOf(Widget widget)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 IGauntletMovie](../IGauntletMovie/)
- [同命名空间 GauntletView](../GauntletView/)
- [同命名空间 GeneratedGauntletMovie](../GeneratedGauntletMovie/)
- [同命名空间 GeneratedWidgetData](../GeneratedWidgetData/)
- [同命名空间 IGauntletMovie](../IGauntletMovie/)
