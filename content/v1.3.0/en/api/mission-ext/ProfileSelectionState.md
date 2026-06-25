---
title: "ProfileSelectionState"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ProfileSelectionState`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ProfileSelectionState

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ProfileSelectionState : GameState`
**Base:** `GameState`
**File:** `TaleWorlds.MountAndBlade/ProfileSelectionState.cs`

## Overview

`ProfileSelectionState` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsDirectPlayPossible` | `public bool IsDirectPlayPossible { get; }` |

## Key Methods

### OnProfileSelected
`public void OnProfileSelected()`

**Purpose:** Called when the `profile selected` event is raised.

### StartGame
`public void StartGame()`

**Purpose:** Handles logic related to `start game`.

### OnProfileSelectionEvent
`public delegate void OnProfileSelectionEvent()`

**Purpose:** Called when the `profile selection event` event is raised.

## Usage Example

```csharp
var value = new ProfileSelectionState();
value.OnProfileSelected();
```

## See Also

- [Complete Class Catalog](../catalog)