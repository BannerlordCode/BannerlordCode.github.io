---
title: "WorldPositionEnforcedCache"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WorldPositionEnforcedCache`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# WorldPositionEnforcedCache

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public enum WorldPositionEnforcedCache`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine/TaleWorlds.Engine/WorldPosition.cs`

## Overview

`WorldPositionEnforcedCache` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
WorldPositionEnforcedCache example = WorldPositionEnforcedCache.Value;
```

## See Also

- [Complete Class Catalog](../catalog)