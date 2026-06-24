<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BehaviorSparseSkirmish`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BehaviorSparseSkirmish

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BehaviorSparseSkirmish : BehaviorComponent`
**Base:** `BehaviorComponent`
**File:** `TaleWorlds.MountAndBlade/BehaviorSparseSkirmish.cs`

## Overview

`BehaviorSparseSkirmish` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ArcherPosition` | `public GameEntity ArcherPosition { get; set; }` |
| `NavmeshlessTargetPositionPenalty` | `public override float NavmeshlessTargetPositionPenalty { get; }` |

## Key Methods

### TickOccasionally
`public override void TickOccasionally()`

**Purpose:** Handles logic related to `tick occasionally`.

## Usage Example

```csharp
var value = new BehaviorSparseSkirmish();
value.TickOccasionally();
```

## See Also

- [Complete Class Catalog](../catalog)