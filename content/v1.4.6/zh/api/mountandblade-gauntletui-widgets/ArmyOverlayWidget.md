---
title: "ArmyOverlayWidget"
description: "ArmyOverlayWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 OverlayBaseWidget；公开成员 7 个（方法 1、属性 5、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/ArmyOverlayWidget.cs。"
---
# ArmyOverlayWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ArmyOverlayWidget : OverlayBaseWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/ArmyOverlayWidget.cs`

## 概述

ArmyOverlayWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/ArmyOverlayWidget.cs。它是一个 public 类，实现/继承 OverlayBaseWidget，继承链为 ArmyOverlayWidget → OverlayBaseWidget → Widget。public/protected 成员共 7 个：1 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ArmyOverlayWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay），继承链 ArmyOverlayWidget → OverlayBaseWidget → Widget。成员构成以属性为主（属性 5/7，方法 1/7），对外主要以状态读取接口暴露。继承链上的 Widget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/ArmyOverlayWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ArmyOverlayWidget` | `public ArmyOverlayWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `Overlay` | `public Widget Overlay` | 属性 |
| `ArmyListGridWidget` | `public GridWidget ArmyListGridWidget` | 属性 |
| `ExtendButton` | `public ButtonWidget ExtendButton` | 属性 |
| `IsInfoBarExtended` | `public bool IsInfoBarExtended` | 属性 |
| `PageControlWidget` | `public ContainerPageControlWidget PageControlWidget` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 OverlayBaseWidget](../OverlayBaseWidget)
- [同命名空间 GameMenuPartyItemButtonWidget](../GameMenuPartyItemButtonWidget)
- [同命名空间 OverlayBaseWidget](../OverlayBaseWidget)
- [同命名空间 OverlayPopupWidget](../OverlayPopupWidget)
- [同命名空间 PowerLevelComparerWidget](../PowerLevelComparerWidget)
