<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SetStonePileAmmo`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SetStonePileAmmo

**Namespace:** NetworkMessages.FromServer
**Module:** NetworkMessages.FromServer
**Type:** `public sealed class SetStonePileAmmo : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `TaleWorlds.MountAndBlade/NetworkMessages/FromServer/SetStonePileAmmo.cs`

## Overview

`SetStonePileAmmo` lives in `NetworkMessages.FromServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `NetworkMessages.FromServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `StonePileId` | `public MissionObjectId StonePileId { get; }` |
| `AmmoCount` | `public int AmmoCount { get; }` |

## Usage Example

```csharp
var example = new SetStonePileAmmo();
```

## See Also

- [Complete Class Catalog](../catalog)