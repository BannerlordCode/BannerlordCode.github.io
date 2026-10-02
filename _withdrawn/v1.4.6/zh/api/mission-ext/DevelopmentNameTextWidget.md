---
title: "DevelopmentNameTextWidget"
description: "DevelopmentNameTextWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement 的 public 类，继承 TextWidget；公开成员 9 个（方法 2、属性 5、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/DevelopmentNameTextWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DevelopmentNameTextWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class DevelopmentNameTextWidget : TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/DevelopmentNameTextWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

DevelopmentNameTextWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/DevelopmentNameTextWidget.cs。它是一个 public 类，实现/继承 TextWidget，继承链为 DevelopmentNameTextWidget → TextWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。public/protected 成员共 9 个：2 方法、5 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DevelopmentNameTextWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement`，继承链 DevelopmentNameTextWidget → TextWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 5/9，方法 2/9），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/DevelopmentNameTextWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DevelopmentNameTextWidget` | `public DevelopmentNameTextWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `StartMaxTextAnimation` | `public void StartMaxTextAnimation()` | 方法 |
| `MaxText` | `public string MaxText` | 属性 |
| `MaxTextStayTime` | `public float MaxTextStayTime` | 属性 |
| `NameText` | `public string NameText` | 属性 |
| `IsInQueue` | `public bool IsInQueue` | 属性 |
| `AnimState` | `public enum AnimState` | 属性 |
| `AnimState` | `public enum AnimState` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 TextWidget](../../gui/TextWidget/)
- [同命名空间 AutoClosePopupClosingWidget](../AutoClosePopupClosingWidget/)
- [同命名空间 AutoClosePopupWidget](../AutoClosePopupWidget/)
- [同命名空间 DescriptionItemVisualBrushWidget](../DescriptionItemVisualBrushWidget/)
- [同命名空间 DevelopmentItemButtonWidget](../DevelopmentItemButtonWidget/)
