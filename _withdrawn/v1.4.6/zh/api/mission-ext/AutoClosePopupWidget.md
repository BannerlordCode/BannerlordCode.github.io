---
title: "AutoClosePopupWidget"
description: "AutoClosePopupWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement 的 public 类，继承 Widget；公开成员 5 个（方法 3、属性 1、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/AutoClosePopupWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AutoClosePopupWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class AutoClosePopupWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/AutoClosePopupWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

AutoClosePopupWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/AutoClosePopupWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 AutoClosePopupWidget → Widget → PropertyOwnerObject。public/protected 成员共 5 个：3 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AutoClosePopupWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement`，继承链 AutoClosePopupWidget → Widget → PropertyOwnerObject。成员构成以方法为主（方法 3/5，属性 1/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/AutoClosePopupWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AutoClosePopupWidget` | `public AutoClosePopupWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `OnChildAdded` | `protected override void OnChildAdded(Widget child)` | 方法 |
| `CheckClosingWidgetsAndUpdateVisibility` | `protected void CheckClosingWidgetsAndUpdateVisibility()` | 方法 |
| `PopupParentWidget` | `public Widget PopupParentWidget` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AutoClosePopupClosingWidget](../AutoClosePopupClosingWidget/)
- [同命名空间 DescriptionItemVisualBrushWidget](../DescriptionItemVisualBrushWidget/)
- [同命名空间 DevelopmentItemButtonWidget](../DevelopmentItemButtonWidget/)
- [同命名空间 DevelopmentItemVisualButtonWidget](../DevelopmentItemVisualButtonWidget/)
