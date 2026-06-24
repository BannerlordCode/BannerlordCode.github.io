<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PathFinder`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PathFinder

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public abstract class PathFinder`
**Base:** none
**File:** `TaleWorlds.Library/PathFinder.cs`

## Overview

`PathFinder` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Destroy
`public virtual void Destroy()`

**Purpose:** Handles logic related to `destroy`.

### Initialize
`public abstract void Initialize(Vec3 bbSize)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### FindPath
`public abstract bool FindPath(Vec3 wSource, Vec3 wDestination, List<Vec3> path, float craftWidth = 5f)`

**Purpose:** Handles logic related to `find path`.

## Usage Example

```csharp
var implementation = new CustomPathFinder();
```

## See Also

- [Complete Class Catalog](../catalog)