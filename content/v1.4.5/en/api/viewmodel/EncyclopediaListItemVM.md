---
title: "EncyclopediaListItemVM"
description: "Auto-generated class reference for EncyclopediaListItemVM."
---
# EncyclopediaListItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaListItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List/EncyclopediaListItemVM.cs`

## Overview

`EncyclopediaListItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Object` | `public object Object { get; }` |
| `ListItem` | `public EncyclopediaListItem ListItem { get; set; }` |
| `IsFiltered` | `public bool IsFiltered { get; set; }` |
| `PlayerCanSeeValues` | `public bool PlayerCanSeeValues { get; set; }` |
| `Id` | `public string Id { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `ComparedValue` | `public string ComparedValue { get; set; }` |
| `IsBookmarked` | `public bool IsBookmarked { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of EncyclopediaListItemVM from the subsystem API first
EncyclopediaListItemVM encyclopediaListItemVM = ...;
encyclopediaListItemVM.RefreshValues();
```

### Execute
`public void Execute()`

**Purpose:** Runs the operation or workflow represented by the current object.

```csharp
// Obtain an instance of EncyclopediaListItemVM from the subsystem API first
EncyclopediaListItemVM encyclopediaListItemVM = ...;
encyclopediaListItemVM.Execute();
```

### SetComparedValue
`public void SetComparedValue(EncyclopediaListItemComparerBase comparer)`

**Purpose:** Assigns a new value to `compared value` and updates the object's internal state.

```csharp
// Obtain an instance of EncyclopediaListItemVM from the subsystem API first
EncyclopediaListItemVM encyclopediaListItemVM = ...;
encyclopediaListItemVM.SetComparedValue(comparer);
```

### ExecuteBeginTooltip
`public void ExecuteBeginTooltip()`

**Purpose:** Runs the operation or workflow associated with `begin tooltip`.

```csharp
// Obtain an instance of EncyclopediaListItemVM from the subsystem API first
EncyclopediaListItemVM encyclopediaListItemVM = ...;
encyclopediaListItemVM.ExecuteBeginTooltip();
```

### ExecuteEndTooltip
`public void ExecuteEndTooltip()`

**Purpose:** Runs the operation or workflow associated with `end tooltip`.

```csharp
// Obtain an instance of EncyclopediaListItemVM from the subsystem API first
EncyclopediaListItemVM encyclopediaListItemVM = ...;
encyclopediaListItemVM.ExecuteEndTooltip();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EncyclopediaListItemVM encyclopediaListItemVM = ...;
encyclopediaListItemVM.RefreshValues();
```

## See Also

- [Area Index](../)