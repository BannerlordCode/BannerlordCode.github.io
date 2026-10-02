---
title: "GameMenuPartyItemVM"
description: "GameMenuPartyItemVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 40 个（方法 11、属性 25、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/GameMenuPartyItemVM.cs。"
---
# GameMenuPartyItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class GameMenuPartyItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/GameMenuPartyItemVM.cs`

## 概述

GameMenuPartyItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/GameMenuPartyItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 GameMenuPartyItemVM → ViewModel。public/protected 成员共 40 个：11 方法、25 属性、4 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameMenuPartyItemVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay），继承链 GameMenuPartyItemVM → ViewModel。成员构成以属性为主（属性 25/40，方法 11/40），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/GameMenuPartyItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GameMenuPartyItemVM` | `public GameMenuPartyItemVM()` | 构造函数 |
| `GameMenuPartyItemVM` | `public GameMenuPartyItemVM(Action<GameMenuPartyItemVM>onSetAsContextMenuActiveItem, Settlement settlement)` | 构造函数 |
| `GameMenuPartyItemVM` | `public GameMenuPartyItemVM(Action<GameMenuPartyItemVM>onSetAsContextMenuActiveItem, PartyBase item, bool canShowQuest)` | 构造函数 |
| `GameMenuPartyItemVM` | `public GameMenuPartyItemVM(Action<GameMenuPartyItemVM>onSetAsContextMenuActiveItem, CharacterObject character, bool useCivilianEquipment)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteSetAsContextMenuItem` | `public void ExecuteSetAsContextMenuItem()` | 方法 |
| `ExecuteOpenEncyclopedia` | `public void ExecuteOpenEncyclopedia()` | 方法 |
| `ExecuteCloseTooltip` | `public void ExecuteCloseTooltip()` | 方法 |
| `ExecuteOpenTooltip` | `public void ExecuteOpenTooltip()` | 方法 |
| `RefreshProperties` | `public void RefreshProperties()` | 方法 |
| `RefreshQuestStatus` | `public void RefreshQuestStatus()` | 方法 |
| `RefreshVisual` | `public void RefreshVisual()` | 方法 |
| `RefreshCounts` | `public void RefreshCounts()` | 方法 |
| `GetPartyDescriptionTextFromValues` | `public string GetPartyDescriptionTextFromValues()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `Relation` | `public int Relation` | 属性 |
| `MBBindingList` | `public MBBindingList<QuestMarkerVM>Quests` | 属性 |
| `IsHighlightEnabled` | `public bool IsHighlightEnabled` | 属性 |
| `IsCharacterInPrison` | `public bool IsCharacterInPrison` | 属性 |
| `HasShips` | `public bool HasShips` | 属性 |
| `IsIdle` | `public bool IsIdle` | 属性 |
| `IsPlayer` | `public bool IsPlayer` | 属性 |
| `IsEnemy` | `public bool IsEnemy` | 属性 |
| `IsAlly` | `public bool IsAlly` | 属性 |
| `IsNeutral` | `public bool IsNeutral` | 属性 |
| `IsMergedWithArmy` | `public bool IsMergedWithArmy` | 属性 |
| `NameText` | `public string NameText` | 属性 |
| `SettlementPath` | `public string SettlementPath` | 属性 |
| `LocationText` | `public string LocationText` | 属性 |
| `PowerText` | `public string PowerText` | 属性 |
| `DescriptionText` | `public string DescriptionText` | 属性 |
| `ProfessionText` | `public string ProfessionText` | 属性 |
| `EncyclopediaCursorEffect` | `public string EncyclopediaCursorEffect` | 属性 |
| `Visual` | `public CharacterImageIdentifierVM Visual` | 属性 |
| `Banner_9` | `public BannerImageIdentifierVM Banner_9` | 属性 |
| `PartySize` | `public int PartySize` | 属性 |
| `PartyWoundedSize` | `public int PartyWoundedSize` | 属性 |
| `ShipCount` | `public int ShipCount` | 属性 |
| `PartySizeLbl` | `public string PartySizeLbl` | 属性 |
| `IsLeader` | `public bool IsLeader` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ArmyMenuOverlayVM](../ArmyMenuOverlayVM)
- [同命名空间 EncounterMenuOverlayVM](../EncounterMenuOverlayVM)
- [同命名空间 GameMenuOverlay](../GameMenuOverlay)
- [同命名空间 GameMenuOverlayActionVM](../GameMenuOverlayActionVM)
