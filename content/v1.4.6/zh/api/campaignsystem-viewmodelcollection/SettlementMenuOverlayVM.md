---
title: "SettlementMenuOverlayVM"
description: "SettlementMenuOverlayVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 GameMenuOverlay；公开成员 51 个（方法 7、属性 43、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/SettlementMenuOverlayVM.cs。"
---
# SettlementMenuOverlayVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class SettlementMenuOverlayVM : GameMenuOverlay`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/SettlementMenuOverlayVM.cs`

## 概述

SettlementMenuOverlayVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/SettlementMenuOverlayVM.cs。它是一个 public 类，实现/继承 GameMenuOverlay，继承链为 SettlementMenuOverlayVM → GameMenuOverlay → ViewModel。public/protected 成员共 51 个：7 方法、43 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SettlementMenuOverlayVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay），继承链 SettlementMenuOverlayVM → GameMenuOverlay → ViewModel。成员构成以属性为主（属性 43/51，方法 7/51），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/SettlementMenuOverlayVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SettlementMenuOverlayVM` | `public SettlementMenuOverlayVM(GameMenu.MenuOverlayType type)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteOnSetAsActiveContextMenuItem` | `protected override void ExecuteOnSetAsActiveContextMenuItem(GameMenuPartyItemVM troop)` | 方法 |
| `ExecuteOnOverlayClosed` | `public override void ExecuteOnOverlayClosed()` | 方法 |
| `UpdateOverlayType` | `public override void UpdateOverlayType(GameMenu.MenuOverlayType newType)` | 方法 |
| `Refresh` | `public override void Refresh()` | 方法 |
| `ExecuteAddCompanion` | `public void ExecuteAddCompanion()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `CardSelectionPopup` | `public ClanCardSelectionPopupVM CardSelectionPopup` | 属性 |
| `RemainingFoodText` | `public string RemainingFoodText` | 属性 |
| `ProsperityChangeAmount` | `public int ProsperityChangeAmount` | 属性 |
| `MilitiaChangeAmount` | `public int MilitiaChangeAmount` | 属性 |
| `GarrisonChangeAmount` | `public int GarrisonChangeAmount` | 属性 |
| `GarrisonAmount` | `public int GarrisonAmount` | 属性 |
| `CrimeChangeAmount` | `public int CrimeChangeAmount` | 属性 |
| `LoyaltyChangeAmount` | `public int LoyaltyChangeAmount` | 属性 |
| `SecurityChangeAmount` | `public int SecurityChangeAmount` | 属性 |
| `FoodChangeAmount` | `public int FoodChangeAmount` | 属性 |
| `RemainingFoodHint` | `public BasicTooltipViewModel RemainingFoodHint` | 属性 |
| `SecurityHint` | `public BasicTooltipViewModel SecurityHint` | 属性 |
| `PartyFilterHint` | `public HintViewModel PartyFilterHint` | 属性 |
| `CharacterFilterHint` | `public HintViewModel CharacterFilterHint` | 属性 |
| `MilitasHint` | `public BasicTooltipViewModel MilitasHint` | 属性 |
| `GarrisonHint` | `public BasicTooltipViewModel GarrisonHint` | 属性 |
| `ProsperityHint` | `public BasicTooltipViewModel ProsperityHint` | 属性 |
| `LoyaltyHint` | `public BasicTooltipViewModel LoyaltyHint` | 属性 |
| `WallsHint` | `public BasicTooltipViewModel WallsHint` | 属性 |
| `CrimeHint` | `public BasicTooltipViewModel CrimeHint` | 属性 |
| `AssignMembersHint` | `public HintViewModel AssignMembersHint` | 属性 |
| `SettlementOwnerBanner` | `public BannerImageIdentifierVM SettlementOwnerBanner` | 属性 |
| `MBBindingList` | `public MBBindingList<GameMenuPartyItemVM>CharacterList` | 属性 |
| `MBBindingList` | `public MBBindingList<GameMenuPartyItemVM>PartyList` | 属性 |
| `MBBindingList` | `public MBBindingList<StringItemWithHintVM>IssueList` | 属性 |
| `MilitasLbl` | `public string MilitasLbl` | 属性 |
| `GarrisonLbl` | `public string GarrisonLbl` | 属性 |
| `CrimeLbl` | `public string CrimeLbl` | 属性 |
| `CanAssignMembers` | `public bool CanAssignMembers` | 属性 |
| `ProsperityLbl` | `public string ProsperityLbl` | 属性 |
| `LoyaltyLbl` | `public string LoyaltyLbl` | 属性 |
| `SecurityLbl` | `public string SecurityLbl` | 属性 |
| `WallsLbl` | `public string WallsLbl` | 属性 |
| `WallsLevel` | `public int WallsLevel` | 属性 |
| `SettlementNameLbl` | `public string SettlementNameLbl` | 属性 |
| `IsFortification` | `public bool IsFortification` | 属性 |
| `IsCrimeEnabled` | `public bool IsCrimeEnabled` | 属性 |
| `IsNoGarrisonWarning` | `public bool IsNoGarrisonWarning` | 属性 |
| `IsCrimeLabelHighlightEnabled` | `public bool IsCrimeLabelHighlightEnabled` | 属性 |
| `IsLoyaltyRebellionWarning` | `public bool IsLoyaltyRebellionWarning` | 属性 |
| `IsShipyardEnabled` | `public bool IsShipyardEnabled` | 属性 |
| `ShipyardLbl` | `public string ShipyardLbl` | 属性 |
| `ShipyardHint` | `public BasicTooltipViewModel ShipyardHint` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 GameMenuOverlay](../GameMenuOverlay)
- [同命名空间 ArmyMenuOverlayVM](../ArmyMenuOverlayVM)
- [同命名空间 EncounterMenuOverlayVM](../EncounterMenuOverlayVM)
- [同命名空间 GameMenuOverlay](../GameMenuOverlay)
- [同命名空间 GameMenuOverlayActionVM](../GameMenuOverlayActionVM)
