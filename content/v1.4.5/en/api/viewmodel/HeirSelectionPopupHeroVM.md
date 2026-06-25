---
title: "HeirSelectionPopupHeroVM"
description: "Auto-generated class reference for HeirSelectionPopupHeroVM."
---
# HeirSelectionPopupHeroVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeirSelectionPopupHeroVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup/HeirSelectionPopupHeroVM.cs`

## Overview

`HeirSelectionPopupHeroVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Hero` | `public Hero Hero { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `Age` | `public int Age { get; set; }` |
| `Culture` | `public string Culture { get; set; }` |
| `Occupation` | `public string Occupation { get; set; }` |
| `RelationToMainHero` | `public string RelationToMainHero { get; set; }` |
| `Model` | `public HeroViewModel Model { get; set; }` |
| `ImageIdentifier` | `public CharacterImageIdentifierVM ImageIdentifier { get; set; }` |
| `Traits` | `public MBBindingList<EncyclopediaTraitItemVM> Traits { get; set; }` |
| `Attributes` | `public MBBindingList<MarriageOfferPopupHeroAttributeVM> Attributes { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `OtherSkills` | `public MBBindingList<EncyclopediaSkillVM> OtherSkills { get; set; }` |
| `HasOtherSkills` | `public bool HasOtherSkills { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of HeirSelectionPopupHeroVM from the subsystem API first
HeirSelectionPopupHeroVM heirSelectionPopupHeroVM = ...;
heirSelectionPopupHeroVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of HeirSelectionPopupHeroVM from the subsystem API first
HeirSelectionPopupHeroVM heirSelectionPopupHeroVM = ...;
heirSelectionPopupHeroVM.OnFinalize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
HeirSelectionPopupHeroVM heirSelectionPopupHeroVM = ...;
heirSelectionPopupHeroVM.RefreshValues();
```

## See Also

- [Area Index](../)