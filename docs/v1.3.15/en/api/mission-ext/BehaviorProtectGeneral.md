<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BehaviorProtectGeneral`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BehaviorProtectGeneral

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BehaviorProtectGeneral : BehaviorComponent`
**Base:** `BehaviorComponent`
**File:** `TaleWorlds.MountAndBlade/BehaviorProtectGeneral.cs`

## Overview

`BehaviorProtectGeneral` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NavmeshlessTargetPositionPenalty` | `public override float NavmeshlessTargetPositionPenalty { get; }` |

## Key Methods

### TickOccasionally
`public override void TickOccasionally()`

**Purpose:** Handles logic related to `tick occasionally`.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent agent)`

**Purpose:** Called when the `agent removed` event is raised.

## Usage Example

```csharp
var value = new BehaviorProtectGeneral();
value.TickOccasionally();
```

## See Also

- [Complete Class Catalog](../catalog)