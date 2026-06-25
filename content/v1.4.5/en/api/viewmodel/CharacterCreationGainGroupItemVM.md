---
title: "CharacterCreationGainGroupItemVM"
description: "Auto-generated class reference for CharacterCreationGainGroupItemVM."
---
# CharacterCreationGainGroupItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterCreationGainGroupItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation/CharacterCreationGainGroupItemVM.cs`

## Overview

`CharacterCreationGainGroupItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AttributeObj` | `public CharacterAttribute AttributeObj { get; }` |
| `Skills` | `public MBBindingList<CharacterCreationGainedSkillItemVM> Skills { get; set; }` |
| `Attribute` | `public CharacterCreationGainedAttributeItemVM Attribute { get; set; }` |

## Key Methods

### ResetValues
`public void ResetValues()`

**Purpose:** Returns values to its default or initial condition.

```csharp
// Obtain an instance of CharacterCreationGainGroupItemVM from the subsystem API first
CharacterCreationGainGroupItemVM characterCreationGainGroupItemVM = ...;
characterCreationGainGroupItemVM.ResetValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CharacterCreationGainGroupItemVM characterCreationGainGroupItemVM = ...;
characterCreationGainGroupItemVM.ResetValues();
```

## See Also

- [Area Index](../)