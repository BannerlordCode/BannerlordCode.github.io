---
title: "ClanManagementVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanManagementVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ClanManagementVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanManagementVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanManagementVM.cs`

## Overview

`ClanManagementVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Leader` | `public HeroVM Leader { get; set; }` |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner { get; set; }` |
| `CardSelectionPopup` | `public ClanCardSelectionPopupVM CardSelectionPopup { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `LeaderText` | `public string LeaderText { get; set; }` |
| `ClanMembers` | `public ClanMembersVM ClanMembers { get; set; }` |
| `ClanParties` | `public ClanPartiesVM ClanParties { get; set; }` |
| `ClanFiefs` | `public ClanFiefsVM ClanFiefs { get; set; }` |
| `ClanIncome` | `public ClanIncomeVM ClanIncome { get; set; }` |
| `IsMembersSelected` | `public bool IsMembersSelected { get; set; }` |
| `IsPartiesSelected` | `public bool IsPartiesSelected { get; set; }` |
| `CanSwitchTabs` | `public bool CanSwitchTabs { get; set; }` |
| `IsFiefsSelected` | `public bool IsFiefsSelected { get; set; }` |
| `IsIncomeSelected` | `public bool IsIncomeSelected { get; set; }` |
| `ClanIsInAKingdom` | `public bool ClanIsInAKingdom { get; set; }` |
| `IsKingdomActionEnabled` | `public bool IsKingdomActionEnabled { get; set; }` |
| `PlayerCanChangeClanName` | `public bool PlayerCanChangeClanName { get; set; }` |
| `CanChooseBanner` | `public bool CanChooseBanner { get; set; }` |
| `IsRenownProgressComplete` | `public bool IsRenownProgressComplete { get; set; }` |
| `DoneLbl` | `public string DoneLbl { get; set; }` |
| `CurrentRenownText` | `public string CurrentRenownText { get; set; }` |
| `KingdomActionText` | `public string KingdomActionText { get; set; }` |
| `NextTierRenown` | `public int NextTierRenown { get; set; }` |
| `CurrentTier` | `public int CurrentTier { get; set; }` |
| `MinRenownForCurrentTier` | `public int MinRenownForCurrentTier { get; set; }` |
| `NextTier` | `public int NextTier { get; set; }` |
| `CurrentRenown` | `public int CurrentRenown { get; set; }` |
| `CurrentTierRenownRange` | `public int CurrentTierRenownRange { get; set; }` |
| `CurrentRenownOverPreviousTier` | `public int CurrentRenownOverPreviousTier { get; set; }` |
| `MembersText` | `public string MembersText { get; set; }` |
| `PartiesText` | `public string PartiesText { get; set; }` |
| `FiefsText` | `public string FiefsText { get; set; }` |
| `IncomeText` | `public string IncomeText { get; set; }` |
| `RenownHint` | `public BasicTooltipViewModel RenownHint { get; set; }` |
| `ClanBannerHint` | `public HintViewModel ClanBannerHint { get; set; }` |
| `ChangeClanNameHint` | `public HintViewModel ChangeClanNameHint { get; set; }` |
| `KingdomActionDisabledReasonHint` | `public BasicTooltipViewModel KingdomActionDisabledReasonHint { get; set; }` |
| `GoldChangeTooltip` | `public TooltipTriggerVM GoldChangeTooltip { get; set; }` |
| `CurrentGoldText` | `public string CurrentGoldText { get; set; }` |
| `CurrentGold` | `public int CurrentGold { get; set; }` |
| `ExpenseText` | `public string ExpenseText { get; set; }` |
| `TotalIncomeText` | `public string TotalIncomeText { get; set; }` |
| `FinanceText` | `public string FinanceText { get; set; }` |
| `TotalIncome` | `public int TotalIncome { get; set; }` |
| `TotalExpensesText` | `public string TotalExpensesText { get; set; }` |
| `TotalExpenses` | `public int TotalExpenses { get; set; }` |
| `DailyChangeText` | `public string DailyChangeText { get; set; }` |
| `DailyChange` | `public int DailyChange { get; set; }` |
| `ExpectedGoldText` | `public string ExpectedGoldText { get; set; }` |
| `ExpectedGold` | `public int ExpectedGold { get; set; }` |
| `DailyChangeValueText` | `public string DailyChangeValueText { get; set; }` |
| `TotalExpensesValueText` | `public string TotalExpensesValueText { get; set; }` |
| `TotalIncomeValueText` | `public string TotalIncomeValueText { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `PreviousTabInputKey` | `public InputKeyItemVM PreviousTabInputKey { get; set; }` |
| `NextTabInputKey` | `public InputKeyItemVM NextTabInputKey { get; set; }` |
| `TutorialNotification` | `public ElementNotificationVM TutorialNotification { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### SelectHero
`public void SelectHero(Hero hero)`

**Purpose:** Handles logic related to `select hero`.

### SelectParty
`public void SelectParty(PartyBase party)`

**Purpose:** Handles logic related to `select party`.

### SelectSettlement
`public void SelectSettlement(Settlement settlement)`

**Purpose:** Handles logic related to `select settlement`.

### SelectWorkshop
`public void SelectWorkshop(Workshop workshop)`

**Purpose:** Handles logic related to `select workshop`.

### SelectAlley
`public void SelectAlley(Alley alley)`

**Purpose:** Handles logic related to `select alley`.

### SelectPreviousCategory
`public void SelectPreviousCategory()`

**Purpose:** Handles logic related to `select previous category`.

### SelectNextCategory
`public void SelectNextCategory()`

**Purpose:** Handles logic related to `select next category`.

### ExecuteOpenBannerEditor
`public void ExecuteOpenBannerEditor()`

**Purpose:** Executes the `open banner editor` operation or workflow.

### UpdateBannerVisuals
`public void UpdateBannerVisuals()`

**Purpose:** Updates the state or data of `banner visuals`.

### SetSelectedCategory
`public void SetSelectedCategory(int index)`

**Purpose:** Sets the value or state of `selected category`.

### RefreshDailyValues
`public void RefreshDailyValues()`

**Purpose:** Refreshes the display or cache of `daily values`.

### RefreshCategoryValues
`public void RefreshCategoryValues()`

**Purpose:** Refreshes the display or cache of `category values`.

### ExecuteChangeClanName
`public void ExecuteChangeClanName()`

**Purpose:** Executes the `change clan name` operation or workflow.

### ExecuteClose
`public void ExecuteClose()`

**Purpose:** Executes the `close` operation or workflow.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `done input key`.

### SetPreviousTabInputKey
`public void SetPreviousTabInputKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `previous tab input key`.

### SetNextTabInputKey
`public void SetNextTabInputKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `next tab input key`.

## Usage Example

```csharp
var value = new ClanManagementVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)