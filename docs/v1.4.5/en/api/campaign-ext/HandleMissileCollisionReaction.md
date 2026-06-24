<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HandleMissileCollisionReaction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HandleMissileCollisionReaction

**Namespace:** NetworkMessages.FromServer
**Module:** NetworkMessages.FromServer
**Type:** `public sealed class HandleMissileCollisionReaction : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/NetworkMessages.FromServer/HandleMissileCollisionReaction.cs`

## Overview

`HandleMissileCollisionReaction` lives in `NetworkMessages.FromServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `NetworkMessages.FromServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MissileIndex` | `public int MissileIndex { get; }` |
| `CollisionReaction` | `public Mission.MissileCollisionReaction CollisionReaction { get; }` |
| `AttachLocalFrame` | `public MatrixFrame AttachLocalFrame { get; }` |
| `IsAttachedFrameLocal` | `public bool IsAttachedFrameLocal { get; }` |
| `AttackerAgentIndex` | `public int AttackerAgentIndex { get; }` |
| `AttachedAgentIndex` | `public int AttachedAgentIndex { get; }` |
| `AttachedToShield` | `public bool AttachedToShield { get; }` |
| `AttachedBoneIndex` | `public sbyte AttachedBoneIndex { get; }` |
| `AttachedMissionObjectId` | `public MissionObjectId AttachedMissionObjectId { get; }` |
| `BounceBackVelocity` | `public Vec3 BounceBackVelocity { get; }` |
| `BounceBackAngularVelocity` | `public Vec3 BounceBackAngularVelocity { get; }` |
| `ForcedSpawnIndex` | `public int ForcedSpawnIndex { get; }` |

## Usage Example

```csharp
var example = new HandleMissileCollisionReaction();
```

## See Also

- [Complete Class Catalog](../catalog)