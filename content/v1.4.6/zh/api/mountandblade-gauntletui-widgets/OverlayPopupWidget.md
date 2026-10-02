---
title: "OverlayPopupWidget"
description: "OverlayPopupWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 Widget；公开成员 12 个（方法 3、属性 8、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/OverlayPopupWidget.cs。"
---
# OverlayPopupWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class OverlayPopupWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/OverlayPopupWidget.cs`

## 概述

OverlayPopupWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/OverlayPopupWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 OverlayPopupWidget → Widget。public/protected 成员共 12 个：3 方法、8 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：OverlayPopupWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay），继承链 OverlayPopupWidget → Widget。成员构成以属性为主（属性 8/12，方法 3/12），对外主要以状态读取接口暴露。继承链上的 Widget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/OverlayPopupWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OverlayPopupWidget` | `public OverlayPopupWidget(UIContext context) : base(context)` | 构造函数 |
| `SetCurrentCharacter` | `public void SetCurrentCharacter(GameMenuPartyItemButtonWidget item)` | 方法 |
| `OnCloseButtonClick` | `public void OnCloseButtonClick(Widget widget)` | 方法 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `CurrentCharacterImageWidget` | `public ImageIdentifierWidget CurrentCharacterImageWidget` | 属性 |
| `LocationTextWidget` | `public TextWidget LocationTextWidget` | 属性 |
| `NameTextWidget` | `public TextWidget NameTextWidget` | 属性 |
| `PowerTextWidget` | `public TextWidget PowerTextWidget` | 属性 |
| `DescriptionTextWidget` | `public TextWidget DescriptionTextWidget` | 属性 |
| `RelationBackgroundWidget` | `public Widget RelationBackgroundWidget` | 属性 |
| `ActionButtonsList` | `public ListPanel ActionButtonsList` | 属性 |
| `CloseButton` | `public ButtonWidget CloseButton` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ArmyOverlayWidget](../ArmyOverlayWidget)
- [同命名空间 GameMenuPartyItemButtonWidget](../GameMenuPartyItemButtonWidget)
- [同命名空间 OverlayBaseWidget](../OverlayBaseWidget)
- [同命名空间 PowerLevelComparerWidget](../PowerLevelComparerWidget)
