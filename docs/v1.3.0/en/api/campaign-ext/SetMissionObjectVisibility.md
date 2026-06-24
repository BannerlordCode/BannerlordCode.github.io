<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SetMissionObjectVisibility`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SetMissionObjectVisibility

**Namespace:** NetworkMessages.FromServer
**Module:** NetworkMessages.FromServer
**Type:** `public sealed class SetMissionObjectVisibility : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `TaleWorlds.MountAndBlade/NetworkMessages/FromServer/SetMissionObjectVisibility.cs`

## Overview

`SetMissionObjectVisibility` lives in `NetworkMessages.FromServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `NetworkMessages.FromServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MissionObjectId` | `public MissionObjectId MissionObjectId { get; }` |
| `Visible` | `public bool Visible { get; }` |

## Usage Example

```csharp
var example = new SetMissionObjectVisibility();
```

## See Also

- [Complete Class Catalog](../catalog)