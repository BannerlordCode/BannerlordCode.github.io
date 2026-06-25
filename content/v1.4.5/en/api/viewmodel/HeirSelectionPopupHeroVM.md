---
title: "HeirSelectionPopupHeroVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HeirSelectionPopupHeroVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HeirSelectionPopupHeroVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeirSelectionPopupHeroVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup/HeirSelectionPopupHeroVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

## Usage Example

```csharp
var value = new HeirSelectionPopupHeroVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)