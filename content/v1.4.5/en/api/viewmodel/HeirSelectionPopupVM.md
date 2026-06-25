---
title: "HeirSelectionPopupVM"
description: "Auto-generated class reference for HeirSelectionPopupVM."
---
# HeirSelectionPopupVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeirSelectionPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup/HeirSelectionPopupVM.cs`

## Overview

`HeirSelectionPopupVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TitleText` | `public string TitleText { get; set; }` |
| `ButtonOkLabel` | `public string ButtonOkLabel { get; set; }` |
| `NameLabel` | `public string NameLabel { get; set; }` |
| `AgeLabel` | `public string AgeLabel { get; set; }` |
| `CultureLabel` | `public string CultureLabel { get; set; }` |
| `OccupationLabel` | `public string OccupationLabel { get; set; }` |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner { get; set; }` |
| `HeirApparents` | `public MBBindingList<HeirSelectionPopupHeroVM> HeirApparents { get; set; }` |
| `CurrentSelectedHero` | `public HeirSelectionPopupHeroVM CurrentSelectedHero { get; set; }` |
| `AreHotkeysVisible` | `public bool AreHotkeysVisible { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |

## Key Methods

### Update
`public void Update()`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of the this instance.

```csharp
// Obtain an instance of HeirSelectionPopupVM from the subsystem API first
HeirSelectionPopupVM heirSelectionPopupVM = ...;
heirSelectionPopupVM.Update();
```

### ExecuteSelectHeir
`public void ExecuteSelectHeir()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with select heir.

```csharp
// Obtain an instance of HeirSelectionPopupVM from the subsystem API first
HeirSelectionPopupVM heirSelectionPopupVM = ...;
heirSelectionPopupVM.ExecuteSelectHeir();
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of HeirSelectionPopupVM from the subsystem API first
HeirSelectionPopupVM heirSelectionPopupVM = ...;
heirSelectionPopupVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of HeirSelectionPopupVM from the subsystem API first
HeirSelectionPopupVM heirSelectionPopupVM = ...;
heirSelectionPopupVM.OnFinalize();
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to done input key and updates the object's internal state.

```csharp
// Obtain an instance of HeirSelectionPopupVM from the subsystem API first
HeirSelectionPopupVM heirSelectionPopupVM = ...;
heirSelectionPopupVM.SetDoneInputKey(hotKey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
HeirSelectionPopupVM heirSelectionPopupVM = ...;
heirSelectionPopupVM.Update();
```

## See Also

- [Area Index](../)