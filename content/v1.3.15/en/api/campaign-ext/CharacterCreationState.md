---
title: "CharacterCreationState"
description: "Auto-generated class reference for CharacterCreationState."
---
# CharacterCreationState

**Namespace:** TaleWorlds.CampaignSystem.CharacterCreationContent
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterCreationState : PlayerGameState`
**Base:** `PlayerGameState`
**File:** `TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationState.cs`

## Overview

`CharacterCreationState` lives in `TaleWorlds.CampaignSystem.CharacterCreationContent` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CharacterCreationContent` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CharacterCreationManager` | `public CharacterCreationManager CharacterCreationManager { get; }` |
| `Handler` | `public ICharacterCreationStateHandler Handler { get; set; }` |

## Key Methods

### FinalizeCharacterCreationState
`public void FinalizeCharacterCreationState()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CharacterCreationState from the subsystem API first
CharacterCreationState characterCreationState = ...;
characterCreationState.FinalizeCharacterCreationState();
```

### Refresh
`public void Refresh()`

**Purpose:** Refreshes the current object's display or cache to match the underlying state.

```csharp
// Obtain an instance of CharacterCreationState from the subsystem API first
CharacterCreationState characterCreationState = ...;
characterCreationState.Refresh();
```

### OnStageActivated
`public void OnStageActivated(CharacterCreationStageBase stage)`

**Purpose:** Invoked when the `stage activated` event is raised.

```csharp
// Obtain an instance of CharacterCreationState from the subsystem API first
CharacterCreationState characterCreationState = ...;
characterCreationState.OnStageActivated(stage);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CharacterCreationState characterCreationState = ...;
characterCreationState.FinalizeCharacterCreationState();
```

## See Also

- [Area Index](../)