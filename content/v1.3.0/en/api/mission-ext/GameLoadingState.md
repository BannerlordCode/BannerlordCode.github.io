---
title: "GameLoadingState"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameLoadingState`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameLoadingState

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameLoadingState : GameState`
**Base:** `GameState`
**File:** `TaleWorlds.MountAndBlade/GameLoadingState.cs`

## Overview

`GameLoadingState` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsMusicMenuState` | `public override bool IsMusicMenuState { get; }` |

## Key Methods

### SetLoadingParameters
`public void SetLoadingParameters(MBGameManager gameLoader)`

**Purpose:** Sets the value or state of `loading parameters`.

## Usage Example

```csharp
var value = new GameLoadingState();
value.SetLoadingParameters(gameLoader);
```

## See Also

- [Complete Class Catalog](../catalog)