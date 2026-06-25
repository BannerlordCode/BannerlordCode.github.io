---
title: "EncyclopediaContentPageVM"
description: "Auto-generated class reference for EncyclopediaContentPageVM."
---
# EncyclopediaContentPageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaContentPageVM`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages/EncyclopediaContentPageVM.cs`

## Overview

`EncyclopediaContentPageVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsPreviousButtonEnabled` | `public bool IsPreviousButtonEnabled { get; set; }` |
| `IsNextButtonEnabled` | `public bool IsNextButtonEnabled { get; set; }` |
| `PreviousButtonLabel` | `public string PreviousButtonLabel { get; set; }` |
| `NextButtonLabel` | `public string NextButtonLabel { get; set; }` |
| `PreviousButtonHint` | `public HintViewModel PreviousButtonHint { get; set; }` |
| `NextButtonHint` | `public HintViewModel NextButtonHint { get; set; }` |

## Key Methods

### EncyclopediaContentPageVM
`public class EncyclopediaContentPageVM(EncyclopediaPageArgs args)`

**Purpose:** Executes the EncyclopediaContentPageVM logic.

```csharp
// Obtain an instance of EncyclopediaContentPageVM from the subsystem API first
EncyclopediaContentPageVM encyclopediaContentPageVM = ...;
var result = encyclopediaContentPageVM.EncyclopediaContentPageVM(args);
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of EncyclopediaContentPageVM from the subsystem API first
EncyclopediaContentPageVM encyclopediaContentPageVM = ...;
encyclopediaContentPageVM.RefreshValues();
```

### InitializeQuickNavigation
`public void InitializeQuickNavigation(EncyclopediaListVM list)`

**Purpose:** Prepares the resources, state, or bindings required by quick navigation.

```csharp
// Obtain an instance of EncyclopediaContentPageVM from the subsystem API first
EncyclopediaContentPageVM encyclopediaContentPageVM = ...;
encyclopediaContentPageVM.InitializeQuickNavigation(list);
```

### ExecuteGoToNextItem
`public void ExecuteGoToNextItem()`

**Purpose:** Runs the operation or workflow associated with go to next item.

```csharp
// Obtain an instance of EncyclopediaContentPageVM from the subsystem API first
EncyclopediaContentPageVM encyclopediaContentPageVM = ...;
encyclopediaContentPageVM.ExecuteGoToNextItem();
```

### ExecuteGoToPreviousItem
`public void ExecuteGoToPreviousItem()`

**Purpose:** Runs the operation or workflow associated with go to previous item.

```csharp
// Obtain an instance of EncyclopediaContentPageVM from the subsystem API first
EncyclopediaContentPageVM encyclopediaContentPageVM = ...;
encyclopediaContentPageVM.ExecuteGoToPreviousItem();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EncyclopediaContentPageVM encyclopediaContentPageVM = ...;
encyclopediaContentPageVM.EncyclopediaContentPageVM(args);
```

## See Also

- [Area Index](../)