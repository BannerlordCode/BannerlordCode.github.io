---
title: "KingdomClanVM"
description: "Auto-generated class reference for KingdomClanVM."
---
# KingdomClanVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomClanVM : KingdomCategoryVM`
**Base:** `KingdomCategoryVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Clans/KingdomClanVM.cs`

## Overview

`KingdomClanVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ClanSortController` | `public KingdomClanSortControllerVM ClanSortController { get; set; }` |
| `CurrentSelectedClan` | `public KingdomClanItemVM CurrentSelectedClan { get; set; }` |
| `ExpelActionExplanationText` | `public string ExpelActionExplanationText { get; set; }` |
| `SupportActionExplanationText` | `public string SupportActionExplanationText { get; set; }` |
| `BannerText` | `public string BannerText { get; set; }` |
| `TypeText` | `public string TypeText { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `InfluenceText` | `public string InfluenceText { get; set; }` |
| `FiefsText` | `public string FiefsText { get; set; }` |
| `MembersText` | `public string MembersText { get; set; }` |
| `Clans` | `public MBBindingList<KingdomClanItemVM> Clans { get; set; }` |
| `CanSupportCurrentClan` | `public bool CanSupportCurrentClan { get; set; }` |
| `CanExpelCurrentClan` | `public bool CanExpelCurrentClan { get; set; }` |
| `SupportText` | `public string SupportText { get; set; }` |
| `ExpelActionText` | `public string ExpelActionText { get; set; }` |
| `SupportCost` | `public int SupportCost { get; set; }` |
| `ExpelCost` | `public int ExpelCost { get; set; }` |
| `ExpelHint` | `public HintViewModel ExpelHint { get; set; }` |
| `SupportHint` | `public HintViewModel SupportHint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of KingdomClanVM from the subsystem API first
KingdomClanVM kingdomClanVM = ...;
kingdomClanVM.RefreshValues();
```

### RefreshClan
`public void RefreshClan()`

**Purpose:** Keeps the display or cache of clan in sync with the underlying state.

```csharp
// Obtain an instance of KingdomClanVM from the subsystem API first
KingdomClanVM kingdomClanVM = ...;
kingdomClanVM.RefreshClan();
```

### SelectClan
`public void SelectClan(Clan clan)`

**Purpose:** Executes the SelectClan logic.

```csharp
// Obtain an instance of KingdomClanVM from the subsystem API first
KingdomClanVM kingdomClanVM = ...;
kingdomClanVM.SelectClan(clan);
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of KingdomClanVM from the subsystem API first
KingdomClanVM kingdomClanVM = ...;
kingdomClanVM.OnFinalize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
KingdomClanVM kingdomClanVM = ...;
kingdomClanVM.RefreshValues();
```

## See Also

- [Area Index](../)