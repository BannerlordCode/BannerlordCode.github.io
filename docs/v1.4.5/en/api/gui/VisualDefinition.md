<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VisualDefinition`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# VisualDefinition

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class VisualDefinition`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/VisualDefinition.cs`

## Overview

`VisualDefinition` lives in `TaleWorlds.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `TransitionDuration` | `public float TransitionDuration { get; }` |
| `DelayOnBegin` | `public float DelayOnBegin { get; }` |
| `EaseType` | `public AnimationInterpolation.Type EaseType { get; }` |
| `EaseFunction` | `public AnimationInterpolation.Function EaseFunction { get; }` |
| `VisualStates` | `public Dictionary<string, VisualState> VisualStates { get; }` |

## Key Methods

### AddVisualState
`public void AddVisualState(VisualState visualState)`

**Purpose:** Adds `visual state` to the current collection or state.

### GetVisualState
`public VisualState GetVisualState(string state)`

**Purpose:** Gets the current value of `visual state`.

## Usage Example

```csharp
var value = new VisualDefinition();
value.AddVisualState(visualState);
```

## See Also

- [Complete Class Catalog](../catalog)