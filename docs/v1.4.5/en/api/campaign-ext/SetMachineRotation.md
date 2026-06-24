<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SetMachineRotation`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SetMachineRotation

**Namespace:** NetworkMessages.FromClient
**Module:** NetworkMessages.FromClient
**Type:** `public sealed class SetMachineRotation : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/NetworkMessages.FromClient/SetMachineRotation.cs`

## Overview

`SetMachineRotation` lives in `NetworkMessages.FromClient` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `NetworkMessages.FromClient` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `UsableMachineId` | `public MissionObjectId UsableMachineId { get; }` |
| `HorizontalRotation` | `public float HorizontalRotation { get; }` |
| `VerticalRotation` | `public float VerticalRotation { get; }` |

## Usage Example

```csharp
var example = new SetMachineRotation();
```

## See Also

- [Complete Class Catalog](../catalog)