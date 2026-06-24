<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EngineExtensions`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EngineExtensions

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class EngineExtensions`
**Area:** engine

## Overview

`EngineExtensions` lives in `TaleWorlds.Engine`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ToWorldPosition
`public static WorldPosition ToWorldPosition(this Vec3 vec3, Scene scene)`

**Purpose:** Handles logic related to `to world position`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
EngineExtensions.ToWorldPosition(vec3, scene);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)
