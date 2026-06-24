<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameOverState`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameOverState

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameOverState : GameState`
**Base:** `GameState`
**File:** `TaleWorlds.CampaignSystem/GameState/GameOverState.cs`

## Overview

`GameOverState` lives in `TaleWorlds.CampaignSystem.GameState` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.GameState` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsMenuState` | `public override bool IsMenuState { get; set; }` |
| `Handler` | `public IGameOverStateHandler Handler { get; }` |
| `Reason` | `public GameOverState.GameOverReason Reason { get; }` |

## Key Methods

### CreateForVictory
`public static GameOverState CreateForVictory()`

**Purpose:** Creates a new `for victory` instance or object.

### CreateForRetirement
`public static GameOverState CreateForRetirement()`

**Purpose:** Creates a new `for retirement` instance or object.

### CreateForClanDestroyed
`public static GameOverState CreateForClanDestroyed()`

**Purpose:** Creates a new `for clan destroyed` instance or object.

## Usage Example

```csharp
GameOverState.CreateForVictory();
```

## See Also

- [Complete Class Catalog](../catalog)