---
title: "KingdomClanFiefItemVM"
description: "Auto-generated class reference for KingdomClanFiefItemVM."
---
# KingdomClanFiefItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomClanFiefItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans/KingdomClanFiefItemVM.cs`

## Overview

`KingdomClanFiefItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `VisualPath` | `public string VisualPath { get; set; }` |
| `FiefName` | `public string FiefName { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of KingdomClanFiefItemVM from the subsystem API first
KingdomClanFiefItemVM kingdomClanFiefItemVM = ...;
kingdomClanFiefItemVM.RefreshValues();
```

### ExecuteLink
`public void ExecuteLink()`

**Purpose:** Runs the operation or workflow associated with `link`.

```csharp
// Obtain an instance of KingdomClanFiefItemVM from the subsystem API first
KingdomClanFiefItemVM kingdomClanFiefItemVM = ...;
kingdomClanFiefItemVM.ExecuteLink();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
KingdomClanFiefItemVM kingdomClanFiefItemVM = ...;
kingdomClanFiefItemVM.RefreshValues();
```

## See Also

- [Area Index](../)