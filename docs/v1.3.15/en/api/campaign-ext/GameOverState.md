<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameOverState`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameOverState

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameOverState : GameState`
**Base:** `GameState`
**Area:** campaign-ext

## Overview

`GameOverState` lives in `TaleWorlds.CampaignSystem.GameState`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
// Prepare the required context, then call the static entry point directly
GameOverState.CreateForVictory();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
