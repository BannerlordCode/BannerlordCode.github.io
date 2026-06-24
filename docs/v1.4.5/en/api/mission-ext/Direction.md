<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Direction`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Direction

**Namespace:** TaleWorlds.MountAndBlade.Source.Objects.Siege
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum Direction`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Source.Objects.Siege/AgentPathNavMeshChecker.cs`

## Overview

`Direction` lives in `TaleWorlds.MountAndBlade.Source.Objects.Siege` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Source.Objects.Siege` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
Direction example = Direction.Value;
```

## See Also

- [Complete Class Catalog](../catalog)