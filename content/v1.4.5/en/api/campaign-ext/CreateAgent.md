---
title: "CreateAgent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CreateAgent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CreateAgent

**Namespace:** NetworkMessages.FromServer
**Module:** NetworkMessages.FromServer
**Type:** `public sealed class CreateAgent : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/NetworkMessages.FromServer/CreateAgent.cs`

## Overview

`CreateAgent` lives in `NetworkMessages.FromServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `NetworkMessages.FromServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AgentIndex` | `public int AgentIndex { get; }` |
| `MountAgentIndex` | `public int MountAgentIndex { get; }` |
| `Peer` | `public NetworkCommunicator Peer { get; }` |
| `Character` | `public BasicCharacterObject Character { get; }` |
| `Monster` | `public Monster Monster { get; }` |
| `MissionEquipment` | `public MissionEquipment MissionEquipment { get; }` |
| `SpawnEquipment` | `public Equipment SpawnEquipment { get; }` |
| `BodyPropertiesValue` | `public BodyProperties BodyPropertiesValue { get; }` |
| `BodyPropertiesSeed` | `public int BodyPropertiesSeed { get; }` |
| `IsFemale` | `public bool IsFemale { get; }` |
| `TeamIndex` | `public int TeamIndex { get; }` |
| `Position` | `public Vec3 Position { get; }` |
| `Direction` | `public Vec2 Direction { get; }` |
| `FormationIndex` | `public int FormationIndex { get; }` |
| `IsPlayerAgent` | `public bool IsPlayerAgent { get; }` |
| `ClothingColor1` | `public uint ClothingColor1 { get; }` |
| `ClothingColor2` | `public uint ClothingColor2 { get; }` |

## Usage Example

```csharp
var example = new CreateAgent();
```

## See Also

- [Complete Class Catalog](../catalog)