---
title: "MarriageOfferPopupHeroVM"
description: "Auto-generated class reference for MarriageOfferPopupHeroVM."
---
# MarriageOfferPopupHeroVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MarriageOfferPopupHeroVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MarriageOfferPopup/MarriageOfferPopupHeroVM.cs`

## Overview

`MarriageOfferPopupHeroVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Hero` | `public Hero Hero { get; }` |
| `EncyclopediaLinkWithName` | `public string EncyclopediaLinkWithName { get; set; }` |
| `AgeString` | `public string AgeString { get; set; }` |
| `OccupationString` | `public string OccupationString { get; set; }` |
| `Relation` | `public int Relation { get; set; }` |
| `ClanName` | `public string ClanName { get; set; }` |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner { get; set; }` |
| `Model` | `public HeroViewModel Model { get; set; }` |
| `Traits` | `public MBBindingList<EncyclopediaTraitItemVM> Traits { get; set; }` |
| `Attributes` | `public MBBindingList<MarriageOfferPopupHeroAttributeVM> Attributes { get; set; }` |
| `OtherSkills` | `public MBBindingList<EncyclopediaSkillVM> OtherSkills { get; set; }` |
| `HasOtherSkills` | `public bool HasOtherSkills { get; set; }` |

## Key Methods

### Update
`public void Update()`

**Purpose:** Recalculates and stores the latest representation of the this instance.

```csharp
// Obtain an instance of MarriageOfferPopupHeroVM from the subsystem API first
MarriageOfferPopupHeroVM marriageOfferPopupHeroVM = ...;
marriageOfferPopupHeroVM.Update();
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MarriageOfferPopupHeroVM from the subsystem API first
MarriageOfferPopupHeroVM marriageOfferPopupHeroVM = ...;
marriageOfferPopupHeroVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MarriageOfferPopupHeroVM from the subsystem API first
MarriageOfferPopupHeroVM marriageOfferPopupHeroVM = ...;
marriageOfferPopupHeroVM.OnFinalize();
```

### ExecuteHeroLink
`public void ExecuteHeroLink()`

**Purpose:** Runs the operation or workflow associated with hero link.

```csharp
// Obtain an instance of MarriageOfferPopupHeroVM from the subsystem API first
MarriageOfferPopupHeroVM marriageOfferPopupHeroVM = ...;
marriageOfferPopupHeroVM.ExecuteHeroLink();
```

### ExecuteClanLink
`public void ExecuteClanLink()`

**Purpose:** Runs the operation or workflow associated with clan link.

```csharp
// Obtain an instance of MarriageOfferPopupHeroVM from the subsystem API first
MarriageOfferPopupHeroVM marriageOfferPopupHeroVM = ...;
marriageOfferPopupHeroVM.ExecuteClanLink();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MarriageOfferPopupHeroVM marriageOfferPopupHeroVM = ...;
marriageOfferPopupHeroVM.Update();
```

## See Also

- [Area Index](../)