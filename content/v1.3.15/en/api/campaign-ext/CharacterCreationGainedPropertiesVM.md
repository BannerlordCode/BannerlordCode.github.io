---
title: "CharacterCreationGainedPropertiesVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterCreationGainedPropertiesVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterCreationGainedPropertiesVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterCreationGainedPropertiesVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationGainedPropertiesVM.cs`

## Overview

`CharacterCreationGainedPropertiesVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GainGroups` | `public MBBindingList<CharacterCreationGainGroupItemVM> GainGroups { get; set; }` |
| `GainedTraits` | `public MBBindingList<EncyclopediaTraitItemVM> GainedTraits { get; set; }` |
| `OtherSkills` | `public MBBindingList<CharacterCreationGainedSkillItemVM> OtherSkills { get; set; }` |

## Key Methods

### UpdateValues
`public void UpdateValues()`

**Purpose:** Updates the state or data of `values`.

## Usage Example

```csharp
var value = new CharacterCreationGainedPropertiesVM();
value.UpdateValues();
```

## See Also

- [Complete Class Catalog](../catalog)