---
title: "ClanManagementVM"
description: "ClanManagementVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement, inheriting ViewModel; 79 exposed members (21 methods, 57 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanManagementVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanManagementVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanManagementVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanManagementVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

ClanManagementVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanManagementVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ClanManagementVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 79 public/protected members: 21 methods, 57 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanManagementVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`, inheritance chain ClanManagementVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 57/79, methods 21/79), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanManagementVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ClanManagementVM` | `public ClanManagementVM(Action onClose, Action<Hero>showHeroOnMap, Action<Hero>openPartyAsManage, Action openBannerEditor)` | constructor |
| `CreateFiefsDataSource` | `protected virtual ClanFiefsVM CreateFiefsDataSource(Action onRefresh, Action<ClanCardSelectionInfo>openCardSelectionPopup)` | method |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `SelectHero` | `public void SelectHero(Hero hero)` | method |
| `SelectParty` | `public void SelectParty(PartyBase party)` | method |
| `SelectSettlement` | `public void SelectSettlement(Settlement settlement)` | method |
| `SelectWorkshop` | `public void SelectWorkshop(Workshop workshop)` | method |
| `SelectAlley` | `public void SelectAlley(Alley alley)` | method |
| `SelectPreviousCategory` | `public void SelectPreviousCategory()` | method |
| `SelectNextCategory` | `public void SelectNextCategory()` | method |
| `ExecuteOpenBannerEditor` | `public void ExecuteOpenBannerEditor()` | method |
| `UpdateBannerVisuals` | `public void UpdateBannerVisuals()` | method |
| `SetSelectedCategory` | `public void SetSelectedCategory(int index)` | method |
| `RefreshDailyValues` | `public void RefreshDailyValues()` | method |
| `RefreshCategoryValues` | `public void RefreshCategoryValues()` | method |
| `ExecuteChangeClanName` | `public void ExecuteChangeClanName()` | method |
| `ExecuteClose` | `public void ExecuteClose()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `Leader` | `public HeroVM Leader` | property |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner` | property |
| `CardSelectionPopup` | `public ClanCardSelectionPopupVM CardSelectionPopup` | property |
| `Name` | `public string Name` | property |
| `LeaderText` | `public string LeaderText` | property |
| `ClanMembers` | `public ClanMembersVM ClanMembers` | property |
| `ClanParties` | `public ClanPartiesVM ClanParties` | property |
| `ClanFiefs` | `public ClanFiefsVM ClanFiefs` | property |
| `ClanIncome` | `public ClanIncomeVM ClanIncome` | property |
| `IsMembersSelected` | `public bool IsMembersSelected` | property |
| `IsPartiesSelected` | `public bool IsPartiesSelected` | property |
| `CanSwitchTabs` | `public bool CanSwitchTabs` | property |
| `IsFiefsSelected` | `public bool IsFiefsSelected` | property |
| `IsIncomeSelected` | `public bool IsIncomeSelected` | property |
| `ClanIsInAKingdom` | `public bool ClanIsInAKingdom` | property |
| `IsKingdomActionEnabled` | `public bool IsKingdomActionEnabled` | property |
| `PlayerCanChangeClanName` | `public bool PlayerCanChangeClanName` | property |
| `CanChooseBanner` | `public bool CanChooseBanner` | property |
| `IsRenownProgressComplete` | `public bool IsRenownProgressComplete` | property |
| `DoneLbl` | `public string DoneLbl` | property |
| `CurrentRenownText` | `public string CurrentRenownText` | property |
| `KingdomActionText` | `public string KingdomActionText` | property |
| `NextTierRenown` | `public int NextTierRenown` | property |
| `CurrentTier` | `public int CurrentTier` | property |
| `MinRenownForCurrentTier` | `public int MinRenownForCurrentTier` | property |
| `NextTier` | `public int NextTier` | property |
| `CurrentRenown` | `public int CurrentRenown` | property |
| `CurrentTierRenownRange` | `public int CurrentTierRenownRange` | property |
| `CurrentRenownOverPreviousTier` | `public int CurrentRenownOverPreviousTier` | property |
| `MembersText` | `public string MembersText` | property |
| `PartiesText` | `public string PartiesText` | property |
| `FiefsText` | `public string FiefsText` | property |
| `IncomeText` | `public string IncomeText` | property |
| `RenownHint` | `public BasicTooltipViewModel RenownHint` | property |
| `ClanBannerHint` | `public HintViewModel ClanBannerHint` | property |
| `ChangeClanNameHint` | `public HintViewModel ChangeClanNameHint` | property |
| `KingdomActionDisabledReasonHint` | `public BasicTooltipViewModel KingdomActionDisabledReasonHint` | property |
| `GoldChangeTooltip` | `public TooltipTriggerVM GoldChangeTooltip` | property |
| `CurrentGoldText` | `public string CurrentGoldText` | property |
| `CurrentGold` | `public int CurrentGold` | property |
| `ExpenseText` | `public string ExpenseText` | property |
| `TotalIncomeText` | `public string TotalIncomeText` | property |
| `FinanceText` | `public string FinanceText` | property |
| `TotalIncome` | `public int TotalIncome` | property |
| `TotalExpensesText` | `public string TotalExpensesText` | property |
| `TotalExpenses` | `public int TotalExpenses` | property |
| `DailyChangeText` | `public string DailyChangeText` | property |
| `DailyChange` | `public int DailyChange` | property |
| `ExpectedGoldText` | `public string ExpectedGoldText` | property |
| `ExpectedGold` | `public int ExpectedGold` | property |
| `DailyChangeValueText` | `public string DailyChangeValueText` | property |
| `TotalExpensesValueText` | `public string TotalExpensesValueText` | property |
| `TotalIncomeValueText` | `public string TotalIncomeValueText` | property |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotkey)` | method |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotkey)` | method |
| `SetPreviousTabInputKey` | `public void SetPreviousTabInputKey(HotKey hotkey)` | method |
| `SetNextTabInputKey` | `public void SetNextTabInputKey(HotKey hotkey)` | method |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | property |
| `PreviousTabInputKey` | `public InputKeyItemVM PreviousTabInputKey` | property |
| `NextTabInputKey` | `public InputKeyItemVM NextTabInputKey` | property |
| `TutorialNotification` | `public ElementNotificationVM TutorialNotification` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CardSelectionItemSpriteType](../CardSelectionItemSpriteType/)
- [same namespace ClanCardSelectionInfo](../ClanCardSelectionInfo/)
- [same namespace ClanCardSelectionItemInfo](../ClanCardSelectionItemInfo/)
- [same namespace ClanCardSelectionItemPropertyInfo](../ClanCardSelectionItemPropertyInfo/)
