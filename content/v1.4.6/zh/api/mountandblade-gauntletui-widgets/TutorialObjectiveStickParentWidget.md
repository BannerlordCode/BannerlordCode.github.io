---
title: "TutorialObjectiveStickParentWidget"
description: "TutorialObjectiveStickParentWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 TextWidget；公开成员 7 个（方法 1、属性 3、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialObjectiveStickParentWidget.cs。"
---
# TutorialObjectiveStickParentWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class TutorialObjectiveStickParentWidget : TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialObjectiveStickParentWidget.cs`

## 概述

TutorialObjectiveStickParentWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialObjectiveStickParentWidget.cs。它是一个 public 类，实现/继承 TextWidget，继承链为 TutorialObjectiveStickParentWidget → TextWidget。public/protected 成员共 7 个：1 方法、3 属性、1 构造函数、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TutorialObjectiveStickParentWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial），继承链 TutorialObjectiveStickParentWidget → TextWidget。成员构成以属性为主（属性 3/7，方法 1/7），对外主要以状态读取接口暴露。继承链上的 TextWidget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialObjectiveStickParentWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `StickMiddle` | `public Widget StickMiddle` | 属性 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `TutorialObjectiveStickParentWidget` | `public TutorialObjectiveStickParentWidget(UIContext context) : base(context)` | 构造函数 |
| `MovementType` | `public int MovementType` | 属性 |
| `StickAnimStage` | `public class StickAnimStage` | 属性 |
| `StickAnimStage` | `public class StickAnimStage` | 嵌套类型 |
| `AnimTypes` | `public enum AnimTypes` | 嵌套类型 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ElementNotificationWidget](../ElementNotificationWidget)
- [同命名空间 TutorialArrowWidget](../TutorialArrowWidget)
- [同命名空间 TutorialDirectionArrowWidget](../TutorialDirectionArrowWidget)
- [同命名空间 TutorialHighlightItemBrushWidget](../TutorialHighlightItemBrushWidget)
