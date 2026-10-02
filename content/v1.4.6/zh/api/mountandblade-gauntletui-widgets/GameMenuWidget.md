---
title: "GameMenuWidget"
description: "GameMenuWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 Widget；公开成员 23 个（方法 3、属性 19、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenu/GameMenuWidget.cs。"
---
# GameMenuWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameMenu`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class GameMenuWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenu/GameMenuWidget.cs`

## 概述

GameMenuWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenu/GameMenuWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 GameMenuWidget → Widget。public/protected 成员共 23 个：3 方法、19 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameMenuWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameMenu），继承链 GameMenuWidget → Widget。成员构成以属性为主（属性 19/23，方法 3/23），对外主要以状态读取接口暴露。继承链上的 Widget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenu/GameMenuWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EncounterModeMenuWidth` | `public int EncounterModeMenuWidth` | 属性 |
| `EncounterModeMenuHeight` | `public int EncounterModeMenuHeight` | 属性 |
| `EncounterModeMenuMarginTop` | `public int EncounterModeMenuMarginTop` | 属性 |
| `NormalModeMenuWidth` | `public int NormalModeMenuWidth` | 属性 |
| `NormalModeMenuHeight` | `public int NormalModeMenuHeight` | 属性 |
| `NormalModeMenuMarginTop` | `public int NormalModeMenuMarginTop` | 属性 |
| `IsOverlayExtended` | `public bool IsOverlayExtended` | 属性 |
| `GameMenuWidget` | `public GameMenuWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `UpdateOverlayState` | `public void UpdateOverlayState()` | 方法 |
| `OnOptionStateChanged` | `public void OnOptionStateChanged()` | 方法 |
| `ScopeTargeter` | `public NavigationScopeTargeter ScopeTargeter` | 属性 |
| `TitleTextWidget` | `public TextWidget TitleTextWidget` | 属性 |
| `TitleContainerWidget` | `public Widget TitleContainerWidget` | 属性 |
| `IsNight` | `public bool IsNight` | 属性 |
| `IsEncounterMenu` | `public bool IsEncounterMenu` | 属性 |
| `Overlay` | `public Widget Overlay` | 属性 |
| `ExtendButtonWidget` | `public ButtonWidget ExtendButtonWidget` | 属性 |
| `ExtendButtonArrowWidget` | `public BrushWidget ExtendButtonArrowWidget` | 属性 |
| `OptionItemsList` | `public ListPanel OptionItemsList` | 属性 |
| `SpriteName` | `public string SpriteName` | 属性 |
| `MenuId` | `public string MenuId` | 属性 |
| `OverriddenSpriteMapBrush` | `public Brush OverriddenSpriteMapBrush` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 GameMenuTroopSelectionItemButtonWidget](../GameMenuTroopSelectionItemButtonWidget)
- [同命名空间 SettlementMenuPartyCharacterListsButtonWidget](../SettlementMenuPartyCharacterListsButtonWidget)
