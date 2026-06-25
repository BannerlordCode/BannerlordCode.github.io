---
title: "KingdomWarLogItemVM"
description: "Auto-generated class reference for KingdomWarLogItemVM."
---
# KingdomWarLogItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomWarLogItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomWarLogItemVM.cs`

## Overview

`KingdomWarLogItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `WarLogTimeText` | `public string WarLogTimeText { get; set; }` |
| `WarLogText` | `public string WarLogText { get; set; }` |
| `Banner` | `public BannerImageIdentifierVM Banner { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of KingdomWarLogItemVM from the subsystem API first
KingdomWarLogItemVM kingdomWarLogItemVM = ...;
kingdomWarLogItemVM.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
KingdomWarLogItemVM kingdomWarLogItemVM = ...;
kingdomWarLogItemVM.RefreshValues();
```

## See Also

- [Area Index](../)