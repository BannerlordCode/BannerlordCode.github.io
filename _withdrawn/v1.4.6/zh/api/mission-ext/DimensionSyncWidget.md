---
title: "DimensionSyncWidget"
description: "DimensionSyncWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 Widget；公开成员 7 个（方法 1、属性 4、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.GauntletUI/TaleWorlds/MountAndBlade/GauntletUI/Widgets/DimensionSyncWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DimensionSyncWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class DimensionSyncWidget : Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/MountAndBlade/GauntletUI/Widgets/DimensionSyncWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

DimensionSyncWidget 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/MountAndBlade/GauntletUI/Widgets/DimensionSyncWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 DimensionSyncWidget → Widget → PropertyOwnerObject。public/protected 成员共 7 个：1 方法、4 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DimensionSyncWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets`，继承链 DimensionSyncWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 4/7，方法 1/7），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/MountAndBlade/GauntletUI/Widgets/DimensionSyncWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DimensionSyncWidget` | `public DimensionSyncWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLayoutUpdated` | `protected override void OnLayoutUpdated()` | 方法 |
| `WidgetToCopyHeightFrom` | `public Widget WidgetToCopyHeightFrom` | 属性 |
| `PaddingAmount` | `public int PaddingAmount` | 属性 |
| `DimensionToSync` | `public DimensionSyncWidget.Dimensions DimensionToSync` | 属性 |
| `Dimensions` | `public enum Dimensions` | 属性 |
| `Dimensions` | `public enum Dimensions` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AutoHideRichTextWidget](../AutoHideRichTextWidget/)
- [同命名空间 AutoHideTextWidget](../AutoHideTextWidget/)
- [同命名空间 AutoHideZeroTextWidget](../AutoHideZeroTextWidget/)
- [同命名空间 BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager/)
