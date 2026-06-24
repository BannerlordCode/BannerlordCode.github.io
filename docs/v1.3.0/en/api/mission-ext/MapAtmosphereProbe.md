<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapAtmosphereProbe`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapAtmosphereProbe

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapAtmosphereProbe : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/MapAtmosphereProbe.cs`

## Overview

`MapAtmosphereProbe` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetInfluenceAmount
`public float GetInfluenceAmount(Vec3 worldPosition)`

**Purpose:** Gets the current value of `influence amount`.

## Usage Example

```csharp
var value = new MapAtmosphereProbe();
value.GetInfluenceAmount(worldPosition);
```

## See Also

- [Complete Class Catalog](../catalog)