---
title: "SettlementMenuOverlayVM"
description: "SettlementMenuOverlayVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting GameMenuOverlay; 51 exposed members (7 methods, 43 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/SettlementMenuOverlayVM.cs."
---
# SettlementMenuOverlayVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class SettlementMenuOverlayVM : GameMenuOverlay`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/SettlementMenuOverlayVM.cs`

## Overview

SettlementMenuOverlayVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/SettlementMenuOverlayVM.cs. It is a public class, implementing/inheriting GameMenuOverlay; the inheritance chain is SettlementMenuOverlayVM → GameMenuOverlay → ViewModel. It exposes 51 public/protected members: 7 methods, 43 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SettlementMenuOverlayVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay) the module directory; inheritance chain SettlementMenuOverlayVM → GameMenuOverlay → ViewModel. The surface is property-led (properties 43/51, methods 7/51), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/SettlementMenuOverlayVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SettlementMenuOverlayVM` | `public SettlementMenuOverlayVM(GameMenu.MenuOverlayType type)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteOnSetAsActiveContextMenuItem` | `protected override void ExecuteOnSetAsActiveContextMenuItem(GameMenuPartyItemVM troop)` | method |
| `ExecuteOnOverlayClosed` | `public override void ExecuteOnOverlayClosed()` | method |
| `UpdateOverlayType` | `public override void UpdateOverlayType(GameMenu.MenuOverlayType newType)` | method |
| `Refresh` | `public override void Refresh()` | method |
| `ExecuteAddCompanion` | `public void ExecuteAddCompanion()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `CardSelectionPopup` | `public ClanCardSelectionPopupVM CardSelectionPopup` | property |
| `RemainingFoodText` | `public string RemainingFoodText` | property |
| `ProsperityChangeAmount` | `public int ProsperityChangeAmount` | property |
| `MilitiaChangeAmount` | `public int MilitiaChangeAmount` | property |
| `GarrisonChangeAmount` | `public int GarrisonChangeAmount` | property |
| `GarrisonAmount` | `public int GarrisonAmount` | property |
| `CrimeChangeAmount` | `public int CrimeChangeAmount` | property |
| `LoyaltyChangeAmount` | `public int LoyaltyChangeAmount` | property |
| `SecurityChangeAmount` | `public int SecurityChangeAmount` | property |
| `FoodChangeAmount` | `public int FoodChangeAmount` | property |
| `RemainingFoodHint` | `public BasicTooltipViewModel RemainingFoodHint` | property |
| `SecurityHint` | `public BasicTooltipViewModel SecurityHint` | property |
| `PartyFilterHint` | `public HintViewModel PartyFilterHint` | property |
| `CharacterFilterHint` | `public HintViewModel CharacterFilterHint` | property |
| `MilitasHint` | `public BasicTooltipViewModel MilitasHint` | property |
| `GarrisonHint` | `public BasicTooltipViewModel GarrisonHint` | property |
| `ProsperityHint` | `public BasicTooltipViewModel ProsperityHint` | property |
| `LoyaltyHint` | `public BasicTooltipViewModel LoyaltyHint` | property |
| `WallsHint` | `public BasicTooltipViewModel WallsHint` | property |
| `CrimeHint` | `public BasicTooltipViewModel CrimeHint` | property |
| `AssignMembersHint` | `public HintViewModel AssignMembersHint` | property |
| `SettlementOwnerBanner` | `public BannerImageIdentifierVM SettlementOwnerBanner` | property |
| `MBBindingList` | `public MBBindingList<GameMenuPartyItemVM>CharacterList` | property |
| `MBBindingList` | `public MBBindingList<GameMenuPartyItemVM>PartyList` | property |
| `MBBindingList` | `public MBBindingList<StringItemWithHintVM>IssueList` | property |
| `MilitasLbl` | `public string MilitasLbl` | property |
| `GarrisonLbl` | `public string GarrisonLbl` | property |
| `CrimeLbl` | `public string CrimeLbl` | property |
| `CanAssignMembers` | `public bool CanAssignMembers` | property |
| `ProsperityLbl` | `public string ProsperityLbl` | property |
| `LoyaltyLbl` | `public string LoyaltyLbl` | property |
| `SecurityLbl` | `public string SecurityLbl` | property |
| `WallsLbl` | `public string WallsLbl` | property |
| `WallsLevel` | `public int WallsLevel` | property |
| `SettlementNameLbl` | `public string SettlementNameLbl` | property |
| `IsFortification` | `public bool IsFortification` | property |
| `IsCrimeEnabled` | `public bool IsCrimeEnabled` | property |
| `IsNoGarrisonWarning` | `public bool IsNoGarrisonWarning` | property |
| `IsCrimeLabelHighlightEnabled` | `public bool IsCrimeLabelHighlightEnabled` | property |
| `IsLoyaltyRebellionWarning` | `public bool IsLoyaltyRebellionWarning` | property |
| `IsShipyardEnabled` | `public bool IsShipyardEnabled` | property |
| `ShipyardLbl` | `public string ShipyardLbl` | property |
| `ShipyardHint` | `public BasicTooltipViewModel ShipyardHint` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface GameMenuOverlay](../GameMenuOverlay)
- [same namespace ArmyMenuOverlayVM](../ArmyMenuOverlayVM)
- [same namespace EncounterMenuOverlayVM](../EncounterMenuOverlayVM)
- [same namespace GameMenuOverlay](../GameMenuOverlay)
- [same namespace GameMenuOverlayActionVM](../GameMenuOverlayActionVM)
