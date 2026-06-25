---
title: "PerkVM"
description: "Auto-generated class reference for PerkVM."
---
# PerkVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PerkVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper/PerkVM.cs`

## Overview

`PerkVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentState` | `public PerkStates CurrentState { get; }` |
| `IsTutorialHighlightEnabled` | `public bool IsTutorialHighlightEnabled { get; set; }` |
| `Hint` | `public BasicTooltipViewModel Hint { get; set; }` |
| `Level` | `public int Level { get; set; }` |
| `PerkState` | `public int PerkState { get; set; }` |
| `AlternativeType` | `public int AlternativeType { get; set; }` |
| `LevelText` | `public string LevelText { get; set; }` |
| `BackgroundImage` | `public string BackgroundImage { get; set; }` |
| `PerkId` | `public string PerkId { get; set; }` |

## Key Methods

### RefreshState
`public void RefreshState()`

**Purpose:** **Purpose:** Keeps the display or cache of state in sync with the underlying state.

```csharp
// Obtain an instance of PerkVM from the subsystem API first
PerkVM perkVM = ...;
perkVM.RefreshState();
```

### ExecuteShowPerkConcept
`public void ExecuteShowPerkConcept()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with show perk concept.

```csharp
// Obtain an instance of PerkVM from the subsystem API first
PerkVM perkVM = ...;
perkVM.ExecuteShowPerkConcept();
```

### ExecuteStartSelection
`public void ExecuteStartSelection()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with start selection.

```csharp
// Obtain an instance of PerkVM from the subsystem API first
PerkVM perkVM = ...;
perkVM.ExecuteStartSelection();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PerkVM perkVM = ...;
perkVM.RefreshState();
```

## See Also

- [Area Index](../)