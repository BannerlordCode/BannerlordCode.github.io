---
title: "PartyScreenWidget"
description: "PartyScreenWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 Widget；公开成员 26 个（方法 4、属性 21、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyScreenWidget.cs。"
---
# PartyScreenWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class PartyScreenWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyScreenWidget.cs`

## 概述

PartyScreenWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyScreenWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 PartyScreenWidget → Widget。public/protected 成员共 26 个：4 方法、21 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PartyScreenWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party），继承链 PartyScreenWidget → Widget。成员构成以属性为主（属性 21/26，方法 4/26），对外主要以状态读取接口暴露。继承链上的 Widget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyScreenWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MainScrollPanel` | `public ScrollablePanel MainScrollPanel` | 属性 |
| `OtherScrollPanel` | `public ScrollablePanel OtherScrollPanel` | 属性 |
| `TransferInputKeyVisual` | `public InputKeyVisualWidget TransferInputKeyVisual` | 属性 |
| `PartyScreenWidget` | `public PartyScreenWidget(UIContext context) : base(context)` | 构造函数 |
| `OnConnectedToRoot` | `protected override void OnConnectedToRoot()` | 方法 |
| `OnDisconnectedFromRoot` | `protected override void OnDisconnectedFromRoot()` | 方法 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `UpgradePopupParent` | `public Widget UpgradePopupParent` | 属性 |
| `RecruitPopupParent` | `public Widget RecruitPopupParent` | 属性 |
| `TakeAllPrisonersInputKeyVisualParent` | `public Widget TakeAllPrisonersInputKeyVisualParent` | 属性 |
| `DismissAllPrisonersInputKeyVisualParent` | `public Widget DismissAllPrisonersInputKeyVisualParent` | 属性 |
| `MainPartyTroopSize` | `public int MainPartyTroopSize` | 属性 |
| `IsPrisonerWarningEnabled` | `public bool IsPrisonerWarningEnabled` | 属性 |
| `IsOtherTroopWarningEnabled` | `public bool IsOtherTroopWarningEnabled` | 属性 |
| `IsTroopWarningEnabled` | `public bool IsTroopWarningEnabled` | 属性 |
| `TroopLabel` | `public TextWidget TroopLabel` | 属性 |
| `PrisonerLabel` | `public TextWidget PrisonerLabel` | 属性 |
| `OtherTroopLabel` | `public TextWidget OtherTroopLabel` | 属性 |
| `OtherMemberList` | `public ListPanel OtherMemberList` | 属性 |
| `OtherPrisonerList` | `public ListPanel OtherPrisonerList` | 属性 |
| `MainMemberList` | `public ListPanel MainMemberList` | 属性 |
| `MainPrisonerList` | `public ListPanel MainPrisonerList` | 属性 |
| `ScrollToCharacter` | `public bool ScrollToCharacter` | 属性 |
| `ScrollCharacterId` | `public string ScrollCharacterId` | 属性 |
| `IsScrollTargetPrisoner` | `public bool IsScrollTargetPrisoner` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 PartyFormationDropdownWidget](../PartyFormationDropdownWidget)
- [同命名空间 PartyHeaderToggleWidget](../PartyHeaderToggleWidget)
- [同命名空间 PartyHealthFillBarWidget](../PartyHealthFillBarWidget)
- [同命名空间 PartyListPanel](../PartyListPanel)
