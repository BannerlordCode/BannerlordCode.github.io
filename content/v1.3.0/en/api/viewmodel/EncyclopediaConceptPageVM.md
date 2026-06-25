---
title: "EncyclopediaConceptPageVM"
description: "Auto-generated class reference for EncyclopediaConceptPageVM."
---
# EncyclopediaConceptPageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaConceptPageVM : EncyclopediaContentPageVM`
**Base:** `EncyclopediaContentPageVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaConceptPageVM.cs`

## Overview

`EncyclopediaConceptPageVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TitleText` | `public string TitleText { get; set; }` |
| `DescriptionText` | `public string DescriptionText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of EncyclopediaConceptPageVM from the subsystem API first
EncyclopediaConceptPageVM encyclopediaConceptPageVM = ...;
encyclopediaConceptPageVM.RefreshValues();
```

### Refresh
`public override void Refresh()`

**Purpose:** Refreshes the this instance's display or cache to match the underlying state.

```csharp
// Obtain an instance of EncyclopediaConceptPageVM from the subsystem API first
EncyclopediaConceptPageVM encyclopediaConceptPageVM = ...;
encyclopediaConceptPageVM.Refresh();
```

### GetName
`public override string GetName()`

**Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of EncyclopediaConceptPageVM from the subsystem API first
EncyclopediaConceptPageVM encyclopediaConceptPageVM = ...;
var result = encyclopediaConceptPageVM.GetName();
```

### ExecuteLink
`public void ExecuteLink(string link)`

**Purpose:** Runs the operation or workflow associated with link.

```csharp
// Obtain an instance of EncyclopediaConceptPageVM from the subsystem API first
EncyclopediaConceptPageVM encyclopediaConceptPageVM = ...;
encyclopediaConceptPageVM.ExecuteLink("example");
```

### GetNavigationBarURL
`public override string GetNavigationBarURL()`

**Purpose:** Reads and returns the navigation bar u r l value held by the this instance.

```csharp
// Obtain an instance of EncyclopediaConceptPageVM from the subsystem API first
EncyclopediaConceptPageVM encyclopediaConceptPageVM = ...;
var result = encyclopediaConceptPageVM.GetNavigationBarURL();
```

### ExecuteSwitchBookmarkedState
`public override void ExecuteSwitchBookmarkedState()`

**Purpose:** Runs the operation or workflow associated with switch bookmarked state.

```csharp
// Obtain an instance of EncyclopediaConceptPageVM from the subsystem API first
EncyclopediaConceptPageVM encyclopediaConceptPageVM = ...;
encyclopediaConceptPageVM.ExecuteSwitchBookmarkedState();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EncyclopediaConceptPageVM encyclopediaConceptPageVM = ...;
encyclopediaConceptPageVM.RefreshValues();
```

## See Also

- [Area Index](../)