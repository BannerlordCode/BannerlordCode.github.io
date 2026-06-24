<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerGameMode`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerGameMode

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MultiplayerGameMode`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MultiplayerGameMode.cs`

## Overview

`MultiplayerGameMode` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |

## Key Methods

### JoinCustomGame
`public abstract void JoinCustomGame(JoinGameData joinGameData)`

**Purpose:** Handles logic related to `join custom game`.

### StartMultiplayerGame
`public abstract void StartMultiplayerGame(string scene)`

**Purpose:** Handles logic related to `start multiplayer game`.

## Usage Example

```csharp
var implementation = new CustomMultiplayerGameMode();
```

## See Also

- [Complete Class Catalog](../catalog)