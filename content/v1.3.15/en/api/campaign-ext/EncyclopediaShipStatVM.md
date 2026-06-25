---
title: "EncyclopediaShipStatVM"
description: "Auto-generated class reference for EncyclopediaShipStatVM."
---
# EncyclopediaShipStatVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaShipStatVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaShipStatVM.cs`

## Overview

`EncyclopediaShipStatVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `StatId` | `public string StatId { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `ValueText` | `public string ValueText { get; set; }` |
| `Tooltip` | `public BasicTooltipViewModel Tooltip { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of EncyclopediaShipStatVM from the subsystem API first
EncyclopediaShipStatVM encyclopediaShipStatVM = ...;
encyclopediaShipStatVM.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EncyclopediaShipStatVM encyclopediaShipStatVM = ...;
encyclopediaShipStatVM.RefreshValues();
```

## See Also

- [Area Index](../)