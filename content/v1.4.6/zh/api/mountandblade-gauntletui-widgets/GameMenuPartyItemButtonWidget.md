---
title: "GameMenuPartyItemButtonWidget"
description: "GameMenuPartyItemButtonWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 ButtonWidget；公开成员 16 个（方法 2、属性 13、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/GameMenuPartyItemButtonWidget.cs。"
---
# GameMenuPartyItemButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class GameMenuPartyItemButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/GameMenuPartyItemButtonWidget.cs`

## 概述

GameMenuPartyItemButtonWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/GameMenuPartyItemButtonWidget.cs。它是一个 public 类，实现/继承 ButtonWidget，继承链为 GameMenuPartyItemButtonWidget → ButtonWidget。public/protected 成员共 16 个：2 方法、13 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameMenuPartyItemButtonWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay），继承链 GameMenuPartyItemButtonWidget → ButtonWidget。成员构成以属性为主（属性 13/16，方法 2/16），对外主要以状态读取接口暴露。继承链上的 ButtonWidget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/GameMenuPartyItemButtonWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PartyBackgroundBrush` | `public Brush PartyBackgroundBrush` | 属性 |
| `CharacterBackgroundBrush` | `public Brush CharacterBackgroundBrush` | 属性 |
| `BackgroundImageWidget` | `public ImageWidget BackgroundImageWidget` | 属性 |
| `GameMenuPartyItemButtonWidget` | `public GameMenuPartyItemButtonWidget(UIContext context) : base(context)` | 构造函数 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `HandleClick` | `protected override void HandleClick()` | 方法 |
| `Relation` | `public int Relation` | 属性 |
| `Location` | `public string Location` | 属性 |
| `Power` | `public string Power` | 属性 |
| `Description` | `public string Description` | 属性 |
| `Profession` | `public string Profession` | 属性 |
| `Name` | `public string Name` | 属性 |
| `IsMergedWithArmy` | `public bool IsMergedWithArmy` | 属性 |
| `IsPartyItem` | `public bool IsPartyItem` | 属性 |
| `ContextMenu` | `public Widget ContextMenu` | 属性 |
| `CurrentCharacterImageWidget` | `public ImageIdentifierWidget CurrentCharacterImageWidget` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ArmyOverlayWidget](../ArmyOverlayWidget)
- [同命名空间 OverlayBaseWidget](../OverlayBaseWidget)
- [同命名空间 OverlayPopupWidget](../OverlayPopupWidget)
- [同命名空间 PowerLevelComparerWidget](../PowerLevelComparerWidget)
