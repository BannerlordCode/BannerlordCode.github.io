---
title: "EncyclopediaShipSlotVM"
description: "Auto-generated class reference for EncyclopediaShipSlotVM."
---
# EncyclopediaShipSlotVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaShipSlotVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items/EncyclopediaShipSlotVM.cs`

## Overview

`EncyclopediaShipSlotVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SlotTypeId` | `public string SlotTypeId { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `IsAvailable` | `public bool IsAvailable { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of EncyclopediaShipSlotVM from the subsystem API first
EncyclopediaShipSlotVM encyclopediaShipSlotVM = ...;
encyclopediaShipSlotVM.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EncyclopediaShipSlotVM encyclopediaShipSlotVM = ...;
encyclopediaShipSlotVM.RefreshValues();
```

## See Also

- [Area Index](../)