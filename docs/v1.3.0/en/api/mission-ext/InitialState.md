<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InitialState`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# InitialState

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InitialState : GameState`
**Base:** `GameState`
**File:** `TaleWorlds.MountAndBlade/InitialState.cs`

## Overview

`InitialState` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsMusicMenuState` | `public override bool IsMusicMenuState { get; }` |

## Key Methods

### OnExecutedInitialStateOption
`public void OnExecutedInitialStateOption(InitialStateOption target)`

**Purpose:** Called when the `executed initial state option` event is raised.

### RefreshContentState
`public void RefreshContentState()`

**Purpose:** Refreshes the display or cache of `content state`.

## Usage Example

```csharp
var value = new InitialState();
value.OnExecutedInitialStateOption(target);
```

## See Also

- [Complete Class Catalog](../catalog)