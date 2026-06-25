---
title: "ClanManagementVM"
description: "Auto-generated class reference for ClanManagementVM."
---
# ClanManagementVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanManagementVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement/ClanManagementVM.cs`

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

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of ClanManagementVM from the subsystem API first
ClanManagementVM clanManagementVM = ...;
clanManagementVM.RefreshValues();
```

### SelectHero
`public void SelectHero(Hero hero)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ClanManagementVM from the subsystem API first
ClanManagementVM clanManagementVM = ...;
clanManagementVM.SelectHero(hero);
```

### SelectParty
`public void SelectParty(PartyBase party)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ClanManagementVM from the subsystem API first
ClanManagementVM clanManagementVM = ...;
clanManagementVM.SelectParty(party);
```

### SelectSettlement
`public void SelectSettlement(Settlement settlement)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ClanManagementVM from the subsystem API first
ClanManagementVM clanManagementVM = ...;
clanManagementVM.SelectSettlement(settlement);
```

### SelectWorkshop
`public void SelectWorkshop(Workshop workshop)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ClanManagementVM from the subsystem API first
ClanManagementVM clanManagementVM = ...;
clanManagementVM.SelectWorkshop(workshop);
```

### SelectAlley
`public void SelectAlley(Alley alley)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ClanManagementVM from the subsystem API first
ClanManagementVM clanManagementVM = ...;
clanManagementVM.SelectAlley(alley);
```

### SelectPreviousCategory
`public void SelectPreviousCategory()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ClanManagementVM from the subsystem API first
ClanManagementVM clanManagementVM = ...;
clanManagementVM.SelectPreviousCategory();
```

### SelectNextCategory
`public void SelectNextCategory()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ClanManagementVM from the subsystem API first
ClanManagementVM clanManagementVM = ...;
clanManagementVM.SelectNextCategory();
```

### ExecuteOpenBannerEditor
`public void ExecuteOpenBannerEditor()`

**Purpose:** Runs the operation or workflow associated with `open banner editor`.

```csharp
// Obtain an instance of ClanManagementVM from the subsystem API first
ClanManagementVM clanManagementVM = ...;
clanManagementVM.ExecuteOpenBannerEditor();
```

### UpdateBannerVisuals
`public void UpdateBannerVisuals()`

**Purpose:** Recalculates and stores the latest representation of `banner visuals`.

```csharp
// Obtain an instance of ClanManagementVM from the subsystem API first
ClanManagementVM clanManagementVM = ...;
clanManagementVM.UpdateBannerVisuals();
```

### SetSelectedCategory
`public void SetSelectedCategory(int index)`

**Purpose:** Assigns a new value to `selected category` and updates the object's internal state.

```csharp
// Obtain an instance of ClanManagementVM from the subsystem API first
ClanManagementVM clanManagementVM = ...;
clanManagementVM.SetSelectedCategory(0);
```

### RefreshDailyValues
`public void RefreshDailyValues()`

**Purpose:** Keeps the display or cache of `daily values` in sync with the underlying state.

```csharp
// Obtain an instance of ClanManagementVM from the subsystem API first
ClanManagementVM clanManagementVM = ...;
clanManagementVM.RefreshDailyValues();
```

### RefreshCategoryValues
`public void RefreshCategoryValues()`

**Purpose:** Keeps the display or cache of `category values` in sync with the underlying state.

```csharp
// Obtain an instance of ClanManagementVM from the subsystem API first
ClanManagementVM clanManagementVM = ...;
clanManagementVM.RefreshCategoryValues();
```

### ExecuteChangeClanName
`public void ExecuteChangeClanName()`

**Purpose:** Runs the operation or workflow associated with `change clan name`.

```csharp
// Obtain an instance of ClanManagementVM from the subsystem API first
ClanManagementVM clanManagementVM = ...;
clanManagementVM.ExecuteChangeClanName();
```

### ExecuteClose
`public void ExecuteClose()`

**Purpose:** Runs the operation or workflow associated with `close`.

```csharp
// Obtain an instance of ClanManagementVM from the subsystem API first
ClanManagementVM clanManagementVM = ...;
clanManagementVM.ExecuteClose();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of ClanManagementVM from the subsystem API first
ClanManagementVM clanManagementVM = ...;
clanManagementVM.OnFinalize();
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**Purpose:** Assigns a new value to `done input key` and updates the object's internal state.

```csharp
// Obtain an instance of ClanManagementVM from the subsystem API first
ClanManagementVM clanManagementVM = ...;
clanManagementVM.SetDoneInputKey(hotkey);
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotkey)`

**Purpose:** Assigns a new value to `cancel input key` and updates the object's internal state.

```csharp
// Obtain an instance of ClanManagementVM from the subsystem API first
ClanManagementVM clanManagementVM = ...;
clanManagementVM.SetCancelInputKey(hotkey);
```

### SetPreviousTabInputKey
`public void SetPreviousTabInputKey(HotKey hotkey)`

**Purpose:** Assigns a new value to `previous tab input key` and updates the object's internal state.

```csharp
// Obtain an instance of ClanManagementVM from the subsystem API first
ClanManagementVM clanManagementVM = ...;
clanManagementVM.SetPreviousTabInputKey(hotkey);
```

### SetNextTabInputKey
`public void SetNextTabInputKey(HotKey hotkey)`

**Purpose:** Assigns a new value to `next tab input key` and updates the object's internal state.

```csharp
// Obtain an instance of ClanManagementVM from the subsystem API first
ClanManagementVM clanManagementVM = ...;
clanManagementVM.SetNextTabInputKey(hotkey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ClanManagementVM clanManagementVM = ...;
clanManagementVM.RefreshValues();
```

## See Also

- [Area Index](../)