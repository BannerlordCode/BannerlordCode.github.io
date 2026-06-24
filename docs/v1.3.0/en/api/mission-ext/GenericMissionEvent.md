<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GenericMissionEvent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GenericMissionEvent

**Namespace:** TaleWorlds.MountAndBlade.Objects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GenericMissionEvent : EventBase`
**Base:** `EventBase`
**File:** `TaleWorlds.MountAndBlade/Objects/GenericMissionEvent.cs`

## Overview

`GenericMissionEvent` lives in `TaleWorlds.MountAndBlade.Objects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Objects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var example = new GenericMissionEvent();
```

## See Also

- [Complete Class Catalog](../catalog)