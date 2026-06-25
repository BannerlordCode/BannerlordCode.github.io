---
title: "EncyclopediaFamilyMemberVM"
description: "Auto-generated class reference for EncyclopediaFamilyMemberVM."
---
# EncyclopediaFamilyMemberVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaFamilyMemberVM : HeroVM`
**Base:** `HeroVM`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items/EncyclopediaFamilyMemberVM.cs`

## Overview

`EncyclopediaFamilyMemberVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Role` | `public string Role { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of EncyclopediaFamilyMemberVM from the subsystem API first
EncyclopediaFamilyMemberVM encyclopediaFamilyMemberVM = ...;
encyclopediaFamilyMemberVM.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EncyclopediaFamilyMemberVM encyclopediaFamilyMemberVM = ...;
encyclopediaFamilyMemberVM.RefreshValues();
```

## See Also

- [Area Index](../)