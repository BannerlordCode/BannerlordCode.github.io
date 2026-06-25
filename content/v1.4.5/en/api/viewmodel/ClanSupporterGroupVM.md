---
title: "ClanSupporterGroupVM"
description: "Auto-generated class reference for ClanSupporterGroupVM."
---
# ClanSupporterGroupVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Supporters
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanSupporterGroupVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Supporters/ClanSupporterGroupVM.cs`

## Overview

`ClanSupporterGroupVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Supporters` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Supporters` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TitleText` | `public string TitleText { get; set; }` |
| `TotalInfluenceBonus` | `public float TotalInfluenceBonus { get; }` |
| `InfluenceBonusDescription` | `public string InfluenceBonusDescription { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `TotalInfluence` | `public string TotalInfluence { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `Supporters` | `public MBBindingList<ClanSupporterItemVM> Supporters { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of ClanSupporterGroupVM from the subsystem API first
ClanSupporterGroupVM clanSupporterGroupVM = ...;
clanSupporterGroupVM.RefreshValues();
```

### AddSupporter
`public void AddSupporter(Hero hero)`

**Purpose:** Adds `supporter` to the current collection or state.

```csharp
// Obtain an instance of ClanSupporterGroupVM from the subsystem API first
ClanSupporterGroupVM clanSupporterGroupVM = ...;
clanSupporterGroupVM.AddSupporter(hero);
```

### Refresh
`public void Refresh()`

**Purpose:** Refreshes the current object's display or cache to match the underlying state.

```csharp
// Obtain an instance of ClanSupporterGroupVM from the subsystem API first
ClanSupporterGroupVM clanSupporterGroupVM = ...;
clanSupporterGroupVM.Refresh();
```

### ExecuteSelect
`public void ExecuteSelect()`

**Purpose:** Runs the operation or workflow associated with `select`.

```csharp
// Obtain an instance of ClanSupporterGroupVM from the subsystem API first
ClanSupporterGroupVM clanSupporterGroupVM = ...;
clanSupporterGroupVM.ExecuteSelect();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ClanSupporterGroupVM clanSupporterGroupVM = ...;
clanSupporterGroupVM.RefreshValues();
```

## See Also

- [Area Index](../)