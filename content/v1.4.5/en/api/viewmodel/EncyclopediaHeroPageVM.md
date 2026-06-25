---
title: "EncyclopediaHeroPageVM"
description: "Auto-generated class reference for EncyclopediaHeroPageVM."
---
# EncyclopediaHeroPageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaHeroPageVM : EncyclopediaContentPageVM`
**Base:** `EncyclopediaContentPageVM`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages/EncyclopediaHeroPageVM.cs`

## Overview

`EncyclopediaHeroPageVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Faction` | `public EncyclopediaFactionVM Faction { get; set; }` |
| `IsCompanion` | `public bool IsCompanion { get; set; }` |
| `IsPregnant` | `public bool IsPregnant { get; set; }` |
| `Master` | `public HeroVM Master { get; set; }` |
| `ClanText` | `public string ClanText { get; set; }` |
| `InfoText` | `public string InfoText { get; set; }` |
| `TraitsText` | `public string TraitsText { get; set; }` |
| `MasterText` | `public string MasterText { get; set; }` |
| `KingdomRankText` | `public string KingdomRankText { get; set; }` |
| `SkillsText` | `public string SkillsText { get; set; }` |
| `HeroCharacter` | `public HeroViewModel HeroCharacter { get; set; }` |
| `LastSeenText` | `public string LastSeenText { get; set; }` |
| `DeceasedText` | `public string DeceasedText { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `SettlementsText` | `public string SettlementsText { get; set; }` |
| `DwellingsText` | `public string DwellingsText { get; set; }` |
| `CompanionsText` | `public string CompanionsText { get; set; }` |
| `AlliesText` | `public string AlliesText { get; set; }` |
| `EnemiesText` | `public string EnemiesText { get; set; }` |
| `FamilyText` | `public string FamilyText { get; set; }` |
| `Stats` | `public MBBindingList<StringPairItemVM> Stats { get; set; }` |
| `Traits` | `public MBBindingList<EncyclopediaTraitItemVM> Traits { get; set; }` |
| `Skills` | `public MBBindingList<EncyclopediaSkillVM> Skills { get; set; }` |
| `Dwellings` | `public MBBindingList<EncyclopediaDwellingVM> Dwellings { get; set; }` |
| `Settlements` | `public MBBindingList<EncyclopediaSettlementVM> Settlements { get; set; }` |
| `Family` | `public MBBindingList<EncyclopediaFamilyMemberVM> Family { get; set; }` |
| `Companions` | `public MBBindingList<HeroVM> Companions { get; set; }` |
| `Enemies` | `public MBBindingList<HeroVM> Enemies { get; set; }` |
| `Allies` | `public MBBindingList<HeroVM> Allies { get; set; }` |
| `History` | `public MBBindingList<EncyclopediaHistoryEventVM> History { get; set; }` |
| `HasNeutralClan` | `public bool HasNeutralClan { get; set; }` |
| `IsDead` | `public bool IsDead { get; set; }` |
| `IsInformationHidden` | `public bool IsInformationHidden { get; set; }` |
| `InformationText` | `public string InformationText { get; set; }` |
| `PregnantHint` | `public HintViewModel PregnantHint { get; set; }` |
| `HasAnySkills` | `public bool HasAnySkills { get; set; }` |
| `AdditionalEnemies` | `public MBBindingList<HeroVM> AdditionalEnemies { get; set; }` |
| `AdditionalAllies` | `public MBBindingList<HeroVM> AdditionalAllies { get; set; }` |
| `AnyAdditionalAllies` | `public bool AnyAdditionalAllies { get; set; }` |
| `AnyAdditionalEnemies` | `public bool AnyAdditionalEnemies { get; set; }` |
| `AdditionalAlliesString` | `public string AdditionalAlliesString { get; set; }` |
| `AdditionalEnemiesString` | `public string AdditionalEnemiesString { get; set; }` |
| `AdditionalAlliesHint` | `public BasicTooltipViewModel AdditionalAlliesHint { get; set; }` |
| `AdditionalEnemiesHint` | `public BasicTooltipViewModel AdditionalEnemiesHint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of EncyclopediaHeroPageVM from the subsystem API first
EncyclopediaHeroPageVM encyclopediaHeroPageVM = ...;
encyclopediaHeroPageVM.RefreshValues();
```

### Refresh
`public override void Refresh()`

**Purpose:** Refreshes the this instance's display or cache to match the underlying state.

```csharp
// Obtain an instance of EncyclopediaHeroPageVM from the subsystem API first
EncyclopediaHeroPageVM encyclopediaHeroPageVM = ...;
encyclopediaHeroPageVM.Refresh();
```

### GetName
`public override string GetName()`

**Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of EncyclopediaHeroPageVM from the subsystem API first
EncyclopediaHeroPageVM encyclopediaHeroPageVM = ...;
var result = encyclopediaHeroPageVM.GetName();
```

### GetNavigationBarURL
`public override string GetNavigationBarURL()`

**Purpose:** Reads and returns the navigation bar u r l value held by the this instance.

```csharp
// Obtain an instance of EncyclopediaHeroPageVM from the subsystem API first
EncyclopediaHeroPageVM encyclopediaHeroPageVM = ...;
var result = encyclopediaHeroPageVM.GetNavigationBarURL();
```

### ExecuteLink
`public void ExecuteLink(string link)`

**Purpose:** Runs the operation or workflow associated with link.

```csharp
// Obtain an instance of EncyclopediaHeroPageVM from the subsystem API first
EncyclopediaHeroPageVM encyclopediaHeroPageVM = ...;
encyclopediaHeroPageVM.ExecuteLink("example");
```

### ExecuteSwitchBookmarkedState
`public override void ExecuteSwitchBookmarkedState()`

**Purpose:** Runs the operation or workflow associated with switch bookmarked state.

```csharp
// Obtain an instance of EncyclopediaHeroPageVM from the subsystem API first
EncyclopediaHeroPageVM encyclopediaHeroPageVM = ...;
encyclopediaHeroPageVM.ExecuteSwitchBookmarkedState();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of EncyclopediaHeroPageVM from the subsystem API first
EncyclopediaHeroPageVM encyclopediaHeroPageVM = ...;
encyclopediaHeroPageVM.OnFinalize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EncyclopediaHeroPageVM encyclopediaHeroPageVM = ...;
encyclopediaHeroPageVM.RefreshValues();
```

## See Also

- [Area Index](../)