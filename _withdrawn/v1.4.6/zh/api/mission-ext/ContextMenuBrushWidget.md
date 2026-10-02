---
title: "ContextMenuBrushWidget"
description: "ContextMenuBrushWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 BrushWidget；公开成员 7 个（方法 1、属性 5、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/ContextMenuBrushWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ContextMenuBrushWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ContextMenuBrushWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ContextMenuBrushWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

ContextMenuBrushWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/ContextMenuBrushWidget.cs。它是一个 public 类，实现/继承 BrushWidget，继承链为 ContextMenuBrushWidget → BrushWidget → Widget → PropertyOwnerObject。public/protected 成员共 7 个：1 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ContextMenuBrushWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets`，继承链 ContextMenuBrushWidget → BrushWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 5/7，方法 1/7），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/ContextMenuBrushWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `HorizontalPadding` | `public float HorizontalPadding` | 属性 |
| `VerticalPadding` | `public float VerticalPadding` | 属性 |
| `ContextMenuBrushWidget` | `public ContextMenuBrushWidget(UIContext context) : base(context)` | 构造函数 |
| `OnDisconnectedFromRoot` | `protected override void OnDisconnectedFromRoot()` | 方法 |
| `IsActivated` | `public bool IsActivated` | 属性 |
| `ActionListPanel` | `public ListPanel ActionListPanel` | 属性 |
| `ScrollPanelToWatch` | `public ScrollablePanel ScrollPanelToWatch` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 BrushWidget](../../gui/BrushWidget/)
- [同命名空间 AutoHideRichTextWidget](../AutoHideRichTextWidget/)
- [同命名空间 AutoHideTextWidget](../AutoHideTextWidget/)
- [同命名空间 AutoHideZeroTextWidget](../AutoHideZeroTextWidget/)
- [同命名空间 BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager/)
