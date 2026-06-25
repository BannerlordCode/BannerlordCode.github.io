---
title: "KingdomManagementVM"
description: "Auto-generated class reference for KingdomManagementVM."
---
# KingdomManagementVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomManagementVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement/KingdomManagementVM.cs`

## Overview

`KingdomManagementVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Kingdom` | `public Kingdom Kingdom { get; }` |
| `KingdomActionHint` | `public BasicTooltipViewModel KingdomActionHint { get; set; }` |
| `KingdomBanner` | `public BannerImageIdentifierVM KingdomBanner { get; set; }` |
| `Leader` | `public HeroVM Leader { get; set; }` |
| `Army` | `public KingdomArmyVM Army { get; set; }` |
| `Settlement` | `public KingdomSettlementVM Settlement { get; set; }` |
| `Clan` | `public KingdomClanVM Clan { get; set; }` |
| `Policy` | `public KingdomPoliciesVM Policy { get; set; }` |
| `Diplomacy` | `public KingdomDiplomacyVM Diplomacy { get; set; }` |
| `GiftFief` | `public KingdomGiftFiefPopupVM GiftFief { get; set; }` |
| `Decision` | `public KingdomDecisionsVM Decision { get; set; }` |
| `ChangeKingdomNameHint` | `public HintViewModel ChangeKingdomNameHint { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `CanSwitchTabs` | `public bool CanSwitchTabs { get; set; }` |
| `PlayerHasKingdom` | `public bool PlayerHasKingdom { get; set; }` |
| `IsKingdomActionEnabled` | `public bool IsKingdomActionEnabled { get; set; }` |
| `PlayerCanChangeKingdomName` | `public bool PlayerCanChangeKingdomName { get; set; }` |
| `LeaderText` | `public string LeaderText { get; set; }` |
| `KingdomActionText` | `public string KingdomActionText { get; set; }` |
| `ClansText` | `public string ClansText { get; set; }` |
| `DiplomacyText` | `public string DiplomacyText { get; set; }` |
| `DoneText` | `public string DoneText { get; set; }` |
| `FiefsText` | `public string FiefsText { get; set; }` |
| `PoliciesText` | `public string PoliciesText { get; set; }` |
| `ArmiesText` | `public string ArmiesText { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `PreviousTabInputKey` | `public InputKeyItemVM PreviousTabInputKey { get; set; }` |
| `NextTabInputKey` | `public InputKeyItemVM NextTabInputKey { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of KingdomManagementVM from the subsystem API first
KingdomManagementVM kingdomManagementVM = ...;
kingdomManagementVM.RefreshValues();
```

### OnRefresh
`public void OnRefresh()`

**Purpose:** **Purpose:** Invoked when the refresh event is raised.

```csharp
// Obtain an instance of KingdomManagementVM from the subsystem API first
KingdomManagementVM kingdomManagementVM = ...;
kingdomManagementVM.OnRefresh();
```

### OnFrameTick
`public void OnFrameTick()`

**Purpose:** **Purpose:** Invoked when the frame tick event is raised.

```csharp
// Obtain an instance of KingdomManagementVM from the subsystem API first
KingdomManagementVM kingdomManagementVM = ...;
kingdomManagementVM.OnFrameTick();
```

### ExecuteClose
`public void ExecuteClose()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with close.

```csharp
// Obtain an instance of KingdomManagementVM from the subsystem API first
KingdomManagementVM kingdomManagementVM = ...;
kingdomManagementVM.ExecuteClose();
```

### SelectArmy
`public void SelectArmy(Army army)`

**Purpose:** **Purpose:** Executes the SelectArmy logic.

```csharp
// Obtain an instance of KingdomManagementVM from the subsystem API first
KingdomManagementVM kingdomManagementVM = ...;
kingdomManagementVM.SelectArmy(army);
```

### SelectSettlement
`public void SelectSettlement(Settlement settlement)`

**Purpose:** **Purpose:** Executes the SelectSettlement logic.

```csharp
// Obtain an instance of KingdomManagementVM from the subsystem API first
KingdomManagementVM kingdomManagementVM = ...;
kingdomManagementVM.SelectSettlement(settlement);
```

### SelectClan
`public void SelectClan(Clan clan)`

**Purpose:** **Purpose:** Executes the SelectClan logic.

```csharp
// Obtain an instance of KingdomManagementVM from the subsystem API first
KingdomManagementVM kingdomManagementVM = ...;
kingdomManagementVM.SelectClan(clan);
```

### SelectPolicy
`public void SelectPolicy(PolicyObject policy)`

**Purpose:** **Purpose:** Executes the SelectPolicy logic.

```csharp
// Obtain an instance of KingdomManagementVM from the subsystem API first
KingdomManagementVM kingdomManagementVM = ...;
kingdomManagementVM.SelectPolicy(policy);
```

### SelectKingdom
`public void SelectKingdom(Kingdom kingdom)`

**Purpose:** **Purpose:** Executes the SelectKingdom logic.

```csharp
// Obtain an instance of KingdomManagementVM from the subsystem API first
KingdomManagementVM kingdomManagementVM = ...;
kingdomManagementVM.SelectKingdom(kingdom);
```

### SelectPreviousCategory
`public void SelectPreviousCategory()`

**Purpose:** **Purpose:** Executes the SelectPreviousCategory logic.

```csharp
// Obtain an instance of KingdomManagementVM from the subsystem API first
KingdomManagementVM kingdomManagementVM = ...;
kingdomManagementVM.SelectPreviousCategory();
```

### SelectNextCategory
`public void SelectNextCategory()`

**Purpose:** **Purpose:** Executes the SelectNextCategory logic.

```csharp
// Obtain an instance of KingdomManagementVM from the subsystem API first
KingdomManagementVM kingdomManagementVM = ...;
kingdomManagementVM.SelectNextCategory();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of KingdomManagementVM from the subsystem API first
KingdomManagementVM kingdomManagementVM = ...;
kingdomManagementVM.OnFinalize();
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**Purpose:** **Purpose:** Assigns a new value to done input key and updates the object's internal state.

```csharp
// Obtain an instance of KingdomManagementVM from the subsystem API first
KingdomManagementVM kingdomManagementVM = ...;
kingdomManagementVM.SetDoneInputKey(hotkey);
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotkey)`

**Purpose:** **Purpose:** Assigns a new value to cancel input key and updates the object's internal state.

```csharp
// Obtain an instance of KingdomManagementVM from the subsystem API first
KingdomManagementVM kingdomManagementVM = ...;
kingdomManagementVM.SetCancelInputKey(hotkey);
```

### SetPreviousTabInputKey
`public void SetPreviousTabInputKey(HotKey hotkey)`

**Purpose:** **Purpose:** Assigns a new value to previous tab input key and updates the object's internal state.

```csharp
// Obtain an instance of KingdomManagementVM from the subsystem API first
KingdomManagementVM kingdomManagementVM = ...;
kingdomManagementVM.SetPreviousTabInputKey(hotkey);
```

### SetNextTabInputKey
`public void SetNextTabInputKey(HotKey hotkey)`

**Purpose:** **Purpose:** Assigns a new value to next tab input key and updates the object's internal state.

```csharp
// Obtain an instance of KingdomManagementVM from the subsystem API first
KingdomManagementVM kingdomManagementVM = ...;
kingdomManagementVM.SetNextTabInputKey(hotkey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
KingdomManagementVM kingdomManagementVM = ...;
kingdomManagementVM.RefreshValues();
```

## See Also

- [Area Index](../)