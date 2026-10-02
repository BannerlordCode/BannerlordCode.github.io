---
title: "KingdomManagementVM"
description: "KingdomManagementVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement, inheriting ViewModel; 46 exposed members (17 methods, 28 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/KingdomManagementVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# KingdomManagementVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomManagementVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/KingdomManagementVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

KingdomManagementVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/KingdomManagementVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is KingdomManagementVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 46 public/protected members: 17 methods, 28 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingdomManagementVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement`, inheritance chain KingdomManagementVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 28/46, methods 17/46), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/KingdomManagementVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Kingdom` | `public Kingdom Kingdom` | property |
| `KingdomManagementVM` | `public KingdomManagementVM(Action onClose, Action onManageArmy, Action<Army>onShowArmyOnMap)` | constructor |
| `CreateSettlementVM` | `protected virtual KingdomSettlementVM CreateSettlementVM(Action<KingdomDecision>forceDecision, Action<Settlement>onGrantFief)` | method |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnRefresh` | `public void OnRefresh()` | method |
| `OnFrameTick` | `public void OnFrameTick()` | method |
| `ExecuteClose` | `public void ExecuteClose()` | method |
| `SelectArmy` | `public void SelectArmy(Army army)` | method |
| `SelectSettlement` | `public void SelectSettlement(Settlement settlement)` | method |
| `SelectClan` | `public void SelectClan(Clan clan)` | method |
| `SelectPolicy` | `public void SelectPolicy(PolicyObject policy)` | method |
| `SelectKingdom` | `public void SelectKingdom(Kingdom kingdom)` | method |
| `SelectPreviousCategory` | `public void SelectPreviousCategory()` | method |
| `SelectNextCategory` | `public void SelectNextCategory()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `KingdomActionHint` | `public BasicTooltipViewModel KingdomActionHint` | property |
| `KingdomBanner` | `public BannerImageIdentifierVM KingdomBanner` | property |
| `Leader` | `public HeroVM Leader` | property |
| `Army` | `public KingdomArmyVM Army` | property |
| `Settlement` | `public KingdomSettlementVM Settlement` | property |
| `Clan` | `public KingdomClanVM Clan` | property |
| `Policy` | `public KingdomPoliciesVM Policy` | property |
| `Diplomacy` | `public KingdomDiplomacyVM Diplomacy` | property |
| `GiftFief` | `public KingdomGiftFiefPopupVM GiftFief` | property |
| `Decision` | `public KingdomDecisionsVM Decision` | property |
| `ChangeKingdomNameHint` | `public HintViewModel ChangeKingdomNameHint` | property |
| `Name` | `public string Name` | property |
| `CanSwitchTabs` | `public bool CanSwitchTabs` | property |
| `PlayerHasKingdom` | `public bool PlayerHasKingdom` | property |
| `IsKingdomActionEnabled` | `public bool IsKingdomActionEnabled` | property |
| `PlayerCanChangeKingdomName` | `public bool PlayerCanChangeKingdomName` | property |
| `LeaderText` | `public string LeaderText` | property |
| `KingdomActionText` | `public string KingdomActionText` | property |
| `ClansText` | `public string ClansText` | property |
| `DiplomacyText` | `public string DiplomacyText` | property |
| `DoneText` | `public string DoneText` | property |
| `FiefsText` | `public string FiefsText` | property |
| `PoliciesText` | `public string PoliciesText` | property |
| `ArmiesText` | `public string ArmiesText` | property |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotkey)` | method |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotkey)` | method |
| `SetPreviousTabInputKey` | `public void SetPreviousTabInputKey(HotKey hotkey)` | method |
| `SetNextTabInputKey` | `public void SetNextTabInputKey(HotKey hotkey)` | method |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | property |
| `PreviousTabInputKey` | `public InputKeyItemVM PreviousTabInputKey` | property |
| `NextTabInputKey` | `public InputKeyItemVM NextTabInputKey` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace KingdomCategoryVM](../KingdomCategoryVM/)
- [same namespace KingdomGiftFiefPopupVM](../KingdomGiftFiefPopupVM/)
- [same namespace KingdomItemVM](../KingdomItemVM/)
- [same namespace LeaveKingdomPermissionEvent](../LeaveKingdomPermissionEvent/)
