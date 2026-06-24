<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AreaMarker`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AreaMarker

**Namespace:** TaleWorlds.MountAndBlade.Objects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AreaMarker : MissionObject, ITrackableBase`
**Base:** `MissionObject`
**File:** `TaleWorlds.MountAndBlade/Objects/AreaMarker.cs`

## Overview

`AreaMarker` lives in `TaleWorlds.MountAndBlade.Objects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Objects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Tag` | `public virtual string Tag { get; }` |

## Key Methods

### IsPositionInRange
`public bool IsPositionInRange(Vec3 position)`

**Purpose:** Handles logic related to `is position in range`.

### GetUsableMachinesInRange
`public virtual List<UsableMachine> GetUsableMachinesInRange(string excludeTag = null)`

**Purpose:** Gets the current value of `usable machines in range`.

### GetUsableMachinesWithTagInRange
`public virtual List<UsableMachine> GetUsableMachinesWithTagInRange(string tag)`

**Purpose:** Gets the current value of `usable machines with tag in range`.

### GetGameEntitiesWithTagInRange
`public virtual List<GameEntity> GetGameEntitiesWithTagInRange(string tag)`

**Purpose:** Gets the current value of `game entities with tag in range`.

### GetName
`public virtual TextObject GetName()`

**Purpose:** Gets the current value of `name`.

### GetPosition
`public virtual Vec3 GetPosition()`

**Purpose:** Gets the current value of `position`.

## Usage Example

```csharp
var value = new AreaMarker();
value.IsPositionInRange(position);
```

## See Also

- [Complete Class Catalog](../catalog)