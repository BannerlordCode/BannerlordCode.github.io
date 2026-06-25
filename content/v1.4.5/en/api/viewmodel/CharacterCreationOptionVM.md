---
title: "CharacterCreationOptionVM"
description: "Auto-generated class reference for CharacterCreationOptionVM."
---
# CharacterCreationOptionVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterCreationOptionVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation/CharacterCreationOptionVM.cs`

## Overview

`CharacterCreationOptionVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `ActionText` | `public string ActionText { get; set; }` |
| `PositiveEffectText` | `public string PositiveEffectText { get; set; }` |
| `NegativeEffectText` | `public string NegativeEffectText { get; set; }` |
| `DescriptionText` | `public string DescriptionText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of CharacterCreationOptionVM from the subsystem API first
CharacterCreationOptionVM characterCreationOptionVM = ...;
characterCreationOptionVM.RefreshValues();
```

### ExecuteSelect
`public void ExecuteSelect()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with select.

```csharp
// Obtain an instance of CharacterCreationOptionVM from the subsystem API first
CharacterCreationOptionVM characterCreationOptionVM = ...;
characterCreationOptionVM.ExecuteSelect();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CharacterCreationOptionVM characterCreationOptionVM = ...;
characterCreationOptionVM.RefreshValues();
```

## See Also

- [Area Index](../)