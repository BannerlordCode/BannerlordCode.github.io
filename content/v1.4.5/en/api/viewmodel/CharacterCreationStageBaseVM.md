---
title: "CharacterCreationStageBaseVM"
description: "Auto-generated class reference for CharacterCreationStageBaseVM."
---
# CharacterCreationStageBaseVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CharacterCreationStageBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation/CharacterCreationStageBaseVM.cs`

## Overview

`CharacterCreationStageBaseVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public string Title { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `SelectionText` | `public string SelectionText { get; set; }` |
| `NextStageText` | `public string NextStageText { get; set; }` |
| `PreviousStageText` | `public string PreviousStageText { get; set; }` |
| `TotalStageCount` | `public int TotalStageCount { get; set; }` |
| `FurthestIndex` | `public int FurthestIndex { get; set; }` |
| `CurrentStageIndex` | `public int CurrentStageIndex { get; set; }` |
| `AnyItemSelected` | `public bool AnyItemSelected { get; set; }` |
| `CanAdvance` | `public bool CanAdvance { get; set; }` |

## Key Methods

### OnNextStage
`public abstract void OnNextStage()`

**Purpose:** Invoked when the `next stage` event is raised.

```csharp
// Obtain an instance of CharacterCreationStageBaseVM from the subsystem API first
CharacterCreationStageBaseVM characterCreationStageBaseVM = ...;
characterCreationStageBaseVM.OnNextStage();
```

### OnPreviousStage
`public abstract void OnPreviousStage()`

**Purpose:** Invoked when the `previous stage` event is raised.

```csharp
// Obtain an instance of CharacterCreationStageBaseVM from the subsystem API first
CharacterCreationStageBaseVM characterCreationStageBaseVM = ...;
characterCreationStageBaseVM.OnPreviousStage();
```

### CanAdvanceToNextStage
`public abstract bool CanAdvanceToNextStage()`

**Purpose:** Checks whether the current object meets the preconditions for `advance to next stage`.

```csharp
// Obtain an instance of CharacterCreationStageBaseVM from the subsystem API first
CharacterCreationStageBaseVM characterCreationStageBaseVM = ...;
var result = characterCreationStageBaseVM.CanAdvanceToNextStage();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
CharacterCreationStageBaseVM instance = ...;
```

## See Also

- [Area Index](../)