---
title: "EncyclopediaClanPageVM"
description: "Auto-generated class reference for EncyclopediaClanPageVM."
---
# EncyclopediaClanPageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaClanPageVM : EncyclopediaContentPageVM`
**Base:** `EncyclopediaContentPageVM`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages/EncyclopediaClanPageVM.cs`

## Overview

`EncyclopediaClanPageVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ClanInfo` | `public MBBindingList<StringPairItemVM> ClanInfo { get; set; }` |
| `Members` | `public MBBindingList<HeroVM> Members { get; set; }` |
| `Enemies` | `public MBBindingList<EncyclopediaFactionVM> Enemies { get; set; }` |
| `Settlements` | `public MBBindingList<EncyclopediaSettlementVM> Settlements { get; set; }` |
| `History` | `public MBBindingList<EncyclopediaHistoryEventVM> History { get; set; }` |
| `ParentKingdom` | `public EncyclopediaFactionVM ParentKingdom { get; set; }` |
| `HasParentKingdom` | `public bool HasParentKingdom { get; set; }` |
| `IsClanDestroyed` | `public bool IsClanDestroyed { get; set; }` |
| `DestroyedText` | `public string DestroyedText { get; set; }` |
| `PartOfText` | `public string PartOfText { get; set; }` |
| `TierText` | `public string TierText { get; set; }` |
| `InfoText` | `public string InfoText { get; set; }` |
| `Leader` | `public HeroVM Leader { get; set; }` |
| `Banner` | `public BannerImageIdentifierVM Banner { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `MembersText` | `public string MembersText { get; set; }` |
| `EnemiesText` | `public string EnemiesText { get; set; }` |
| `AlliesText` | `public string AlliesText { get; set; }` |
| `SettlementsText` | `public string SettlementsText { get; set; }` |
| `VillagesText` | `public string VillagesText { get; set; }` |
| `InformationText` | `public string InformationText { get; set; }` |
| `LeaderText` | `public string LeaderText { get; set; }` |
| `DescriptorText` | `public string DescriptorText { get; set; }` |
| `ProsperityText` | `public string ProsperityText { get; set; }` |
| `StrengthText` | `public string StrengthText { get; set; }` |
| `ProsperityHint` | `public HintViewModel ProsperityHint { get; set; }` |
| `StrengthHint` | `public HintViewModel StrengthHint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of EncyclopediaClanPageVM from the subsystem API first
EncyclopediaClanPageVM encyclopediaClanPageVM = ...;
encyclopediaClanPageVM.RefreshValues();
```

### Refresh
`public override void Refresh()`

**Purpose:** Refreshes the current object's display or cache to match the underlying state.

```csharp
// Obtain an instance of EncyclopediaClanPageVM from the subsystem API first
EncyclopediaClanPageVM encyclopediaClanPageVM = ...;
encyclopediaClanPageVM.Refresh();
```

### GetName
`public override string GetName()`

**Purpose:** Reads and returns the `name` value held by the current object.

```csharp
// Obtain an instance of EncyclopediaClanPageVM from the subsystem API first
EncyclopediaClanPageVM encyclopediaClanPageVM = ...;
var result = encyclopediaClanPageVM.GetName();
```

### GetNavigationBarURL
`public override string GetNavigationBarURL()`

**Purpose:** Reads and returns the `navigation bar u r l` value held by the current object.

```csharp
// Obtain an instance of EncyclopediaClanPageVM from the subsystem API first
EncyclopediaClanPageVM encyclopediaClanPageVM = ...;
var result = encyclopediaClanPageVM.GetNavigationBarURL();
```

### ExecuteSwitchBookmarkedState
`public override void ExecuteSwitchBookmarkedState()`

**Purpose:** Runs the operation or workflow associated with `switch bookmarked state`.

```csharp
// Obtain an instance of EncyclopediaClanPageVM from the subsystem API first
EncyclopediaClanPageVM encyclopediaClanPageVM = ...;
encyclopediaClanPageVM.ExecuteSwitchBookmarkedState();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EncyclopediaClanPageVM encyclopediaClanPageVM = ...;
encyclopediaClanPageVM.RefreshValues();
```

## See Also

- [Area Index](../)