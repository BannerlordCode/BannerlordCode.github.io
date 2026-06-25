---
title: "EncyclopediaHomeVM"
description: "Auto-generated class reference for EncyclopediaHomeVM."
---
# EncyclopediaHomeVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaHomeVM : EncyclopediaPageVM`
**Base:** `EncyclopediaPageVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaHomeVM.cs`

## Overview

`EncyclopediaHomeVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsListActive` | `public bool IsListActive { get; set; }` |
| `HomeTitleText` | `public string HomeTitleText { get; set; }` |
| `Lists` | `public MBBindingList<ListTypeVM> Lists { get; set; }` |

## Key Methods

### Refresh
`public override void Refresh()`

**Purpose:** Refreshes the current object's display or cache to match the underlying state.

```csharp
// Obtain an instance of EncyclopediaHomeVM from the subsystem API first
EncyclopediaHomeVM encyclopediaHomeVM = ...;
encyclopediaHomeVM.Refresh();
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of EncyclopediaHomeVM from the subsystem API first
EncyclopediaHomeVM encyclopediaHomeVM = ...;
encyclopediaHomeVM.RefreshValues();
```

### GetNavigationBarURL
`public override string GetNavigationBarURL()`

**Purpose:** Reads and returns the `navigation bar u r l` value held by the current object.

```csharp
// Obtain an instance of EncyclopediaHomeVM from the subsystem API first
EncyclopediaHomeVM encyclopediaHomeVM = ...;
var result = encyclopediaHomeVM.GetNavigationBarURL();
```

### GetName
`public override string GetName()`

**Purpose:** Reads and returns the `name` value held by the current object.

```csharp
// Obtain an instance of EncyclopediaHomeVM from the subsystem API first
EncyclopediaHomeVM encyclopediaHomeVM = ...;
var result = encyclopediaHomeVM.GetName();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EncyclopediaHomeVM encyclopediaHomeVM = ...;
encyclopediaHomeVM.Refresh();
```

## See Also

- [Area Index](../)