---
title: "KingdomSettlementVillageItemVM"
description: "Auto-generated class reference for KingdomSettlementVillageItemVM."
---
# KingdomSettlementVillageItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomSettlementVillageItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomSettlementVillageItemVM.cs`

## Overview

`KingdomSettlementVillageItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Visual` | `public ImageIdentifierVM Visual { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `VisualPath` | `public string VisualPath { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of KingdomSettlementVillageItemVM from the subsystem API first
KingdomSettlementVillageItemVM kingdomSettlementVillageItemVM = ...;
kingdomSettlementVillageItemVM.RefreshValues();
```

### ExecuteLink
`public void ExecuteLink()`

**Purpose:** Runs the operation or workflow associated with link.

```csharp
// Obtain an instance of KingdomSettlementVillageItemVM from the subsystem API first
KingdomSettlementVillageItemVM kingdomSettlementVillageItemVM = ...;
kingdomSettlementVillageItemVM.ExecuteLink();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
KingdomSettlementVillageItemVM kingdomSettlementVillageItemVM = ...;
kingdomSettlementVillageItemVM.RefreshValues();
```

## See Also

- [Area Index](../)