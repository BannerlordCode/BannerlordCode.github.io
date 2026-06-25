---
title: "EncyclopediaListFilterVM"
description: "Auto-generated class reference for EncyclopediaListFilterVM."
---
# EncyclopediaListFilterVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaListFilterVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List/EncyclopediaListFilterVM.cs`

## Overview

`EncyclopediaListFilterVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `Name` | `public string Name { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of EncyclopediaListFilterVM from the subsystem API first
EncyclopediaListFilterVM encyclopediaListFilterVM = ...;
encyclopediaListFilterVM.RefreshValues();
```

### CopyFilterFrom
`public void CopyFilterFrom(Dictionary<EncyclopediaFilterItem, bool> filters)`

**Purpose:** Copies the filter from state of the this instance to a target.

```csharp
// Obtain an instance of EncyclopediaListFilterVM from the subsystem API first
EncyclopediaListFilterVM encyclopediaListFilterVM = ...;
encyclopediaListFilterVM.CopyFilterFrom(dictionary<EncyclopediaFilterItem, false);
```

### ExecuteOnFilterActivated
`public void ExecuteOnFilterActivated()`

**Purpose:** Runs the operation or workflow associated with on filter activated.

```csharp
// Obtain an instance of EncyclopediaListFilterVM from the subsystem API first
EncyclopediaListFilterVM encyclopediaListFilterVM = ...;
encyclopediaListFilterVM.ExecuteOnFilterActivated();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EncyclopediaListFilterVM encyclopediaListFilterVM = ...;
encyclopediaListFilterVM.RefreshValues();
```

## See Also

- [Area Index](../)