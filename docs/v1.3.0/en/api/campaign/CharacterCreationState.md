<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterCreationState`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `finalize character creation state`.

### Refresh
`public void Refresh()`

**Purpose:** Refreshes the display or cache of `refresh`.

### OnStageActivated
`public void OnStageActivated(CharacterCreationStageBase stage)`

**Purpose:** Called when the `stage activated` event is raised.

## Usage Example

```csharp
var value = new CharacterCreationState();
value.FinalizeCharacterCreationState();
```

## See Also

- [Complete Class Catalog](../catalog)