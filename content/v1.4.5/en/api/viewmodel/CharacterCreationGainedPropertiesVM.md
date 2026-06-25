---
title: "CharacterCreationGainedPropertiesVM"
description: "Auto-generated class reference for CharacterCreationGainedPropertiesVM."
---
# CharacterCreationGainedPropertiesVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterCreationGainedPropertiesVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation/CharacterCreationGainedPropertiesVM.cs`

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

**Purpose:** Recalculates and stores the latest representation of values.

```csharp
// Obtain an instance of CharacterCreationGainedPropertiesVM from the subsystem API first
CharacterCreationGainedPropertiesVM characterCreationGainedPropertiesVM = ...;
characterCreationGainedPropertiesVM.UpdateValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CharacterCreationGainedPropertiesVM characterCreationGainedPropertiesVM = ...;
characterCreationGainedPropertiesVM.UpdateValues();
```

## See Also

- [Area Index](../)