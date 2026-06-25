---
title: "TownManagementVM"
description: "Auto-generated class reference for TownManagementVM."
---
# TownManagementVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TownManagementVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/TownManagementVM.cs`

## Overview

`TownManagementVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CompletionText` | `public string CompletionText { get; set; }` |
| `GovernorText` | `public string GovernorText { get; set; }` |
| `ManageText` | `public string ManageText { get; set; }` |
| `DoneText` | `public string DoneText { get; set; }` |
| `WallsText` | `public string WallsText { get; set; }` |
| `CurrentProjectText` | `public string CurrentProjectText { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `HasGovernor` | `public bool HasGovernor { get; set; }` |
| `IsGovernorSelectionEnabled` | `public bool IsGovernorSelectionEnabled { get; set; }` |
| `IsTown` | `public bool IsTown { get; set; }` |
| `Show` | `public bool Show { get; set; }` |
| `IsThereCurrentProject` | `public bool IsThereCurrentProject { get; set; }` |
| `IsSelectingGovernor` | `public bool IsSelectingGovernor { get; set; }` |
| `MiddleFirstTextList` | `public MBBindingList<TownManagementDescriptionItemVM> MiddleFirstTextList { get; set; }` |
| `MiddleSecondTextList` | `public MBBindingList<TownManagementDescriptionItemVM> MiddleSecondTextList { get; set; }` |
| `Shops` | `public MBBindingList<TownManagementShopItemVM> Shops { get; set; }` |
| `Villages` | `public MBBindingList<TownManagementVillageItemVM> Villages { get; set; }` |
| `GovernorSelectionDisabledHint` | `public HintViewModel GovernorSelectionDisabledHint { get; set; }` |
| `VillagesText` | `public string VillagesText { get; set; }` |
| `ShopsInSettlementText` | `public string ShopsInSettlementText { get; set; }` |
| `IsCurrentProjectDaily` | `public bool IsCurrentProjectDaily { get; set; }` |
| `CurrentProjectProgress` | `public int CurrentProjectProgress { get; set; }` |
| `ProjectSelection` | `public SettlementProjectSelectionVM ProjectSelection { get; set; }` |
| `GovernorSelection` | `public SettlementGovernorSelectionVM GovernorSelection { get; set; }` |
| `ReserveControl` | `public TownManagementReserveControlVM ReserveControl { get; set; }` |
| `CurrentGovernor` | `public HeroVM CurrentGovernor { get; set; }` |
| `ConsumptionTooltip` | `public BasicTooltipViewModel ConsumptionTooltip { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of TownManagementVM from the subsystem API first
TownManagementVM townManagementVM = ...;
townManagementVM.RefreshValues();
```

### ExecuteDone
`public void ExecuteDone()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with done.

```csharp
// Obtain an instance of TownManagementVM from the subsystem API first
TownManagementVM townManagementVM = ...;
townManagementVM.ExecuteDone();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of TownManagementVM from the subsystem API first
TownManagementVM townManagementVM = ...;
townManagementVM.OnFinalize();
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to done input key and updates the object's internal state.

```csharp
// Obtain an instance of TownManagementVM from the subsystem API first
TownManagementVM townManagementVM = ...;
townManagementVM.SetDoneInputKey(hotKey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TownManagementVM townManagementVM = ...;
townManagementVM.RefreshValues();
```

## See Also

- [Area Index](../)