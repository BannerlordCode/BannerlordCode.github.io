---
title: "KingdomClanItemVM"
description: "Auto-generated class reference for KingdomClanItemVM."
---
# KingdomClanItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomClanItemVM : KingdomItemVM`
**Base:** `KingdomItemVM`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans/KingdomClanItemVM.cs`

## Overview

`KingdomClanItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `ClanType` | `public int ClanType { get; set; }` |
| `NumOfMembers` | `public int NumOfMembers { get; set; }` |
| `NumOfFiefs` | `public int NumOfFiefs { get; set; }` |
| `TierText` | `public string TierText { get; set; }` |
| `Banner` | `public BannerImageIdentifierVM Banner { get; set; }` |
| `Banner_9` | `public BannerImageIdentifierVM Banner_9 { get; set; }` |
| `Members` | `public MBBindingList<HeroVM> Members { get; set; }` |
| `Fiefs` | `public MBBindingList<KingdomClanFiefItemVM> Fiefs { get; set; }` |
| `Influence` | `public int Influence { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of KingdomClanItemVM from the subsystem API first
KingdomClanItemVM kingdomClanItemVM = ...;
kingdomClanItemVM.RefreshValues();
```

### Refresh
`public void Refresh()`

**Purpose:** Refreshes the this instance's display or cache to match the underlying state.

```csharp
// Obtain an instance of KingdomClanItemVM from the subsystem API first
KingdomClanItemVM kingdomClanItemVM = ...;
kingdomClanItemVM.Refresh();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
KingdomClanItemVM kingdomClanItemVM = ...;
kingdomClanItemVM.RefreshValues();
```

## See Also

- [Area Index](../)