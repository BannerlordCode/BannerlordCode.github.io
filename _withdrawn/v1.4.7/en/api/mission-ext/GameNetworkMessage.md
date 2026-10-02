---
title: "GameNetworkMessage"
description: "GameNetworkMessage — class in TaleWorlds.MountAndBlade.Network.Messages. 56 public members (51 static)."
---

<!-- v147-skeleton -->
# GameNetworkMessage

**Namespace:** `TaleWorlds.MountAndBlade.Network.Messages`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public abstract class GameNetworkMessage`  
**Source:** `TaleWorlds.MountAndBlade/Network/Messages/GameNetworkMessage.cs`

## Overview

`GameNetworkMessage` is a named type in the TaleWorlds.MountAndBlade.Network.Messages namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Static entry points** (51): `IsClientMissionOver`, `ReadBoolFromPacket`, `WriteBoolToPacket`, `ReadIntFromPacket`, `WriteIntToPacket`, `ReadUintFromPacket`, ….
- **Instance members** (5): `MessageId`, `OnWrite`, `OnRead`, `OnGetLogFilter`, `OnGetLogFormat`.
- **Extension points** (4): `OnWrite`, `OnRead`, `OnGetLogFilter`, `OnGetLogFormat`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `IsClientMissionOver` | property (static) | Static entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `ReadActionSetReferenceFromPacket` | method (static) | Static entry point. Takes 2 arguments: `CompressionInfo.Integer compressionInfo`, `ref bool bufferReadValid`. Returns `MBActionSet`. |
| `ReadAgentIndexFromPacket` | method (static) | Static entry point. Takes 1 argument: `ref bool bufferReadValid`. Returns `int`. |
| `ReadBannerCodeFromPacket` | method (static) | Static entry point. Takes 1 argument: `ref bool bufferReadValid`. Returns `string`. |
| `ReadBodyPropertiesFromPacket` | method (static) | Static entry point. Takes 1 argument: `ref bool bufferReadValid`. Returns `BodyProperties`. |
| `ReadBoolFromPacket` | method (static) | Static entry point. Takes 1 argument: `ref bool bufferReadValid`. Returns `bool`. |
| `ReadByteArrayFromPacket` | method (static) | Static entry point. Takes 4 arguments: `byte[] buffer`, `int offset`, `int bufferCapacity`, `ref bool bufferReadValid`. Returns `int`. |
| `ReadFloatFromPacket` | method (static) | Static entry point. Takes 2 arguments: `CompressionInfo.Float compressionInfo`, `ref bool bufferReadValid`. Returns `float`. |
| `ReadIntFromPacket` | method (static) | Static entry point. Takes 2 arguments: `CompressionInfo.Integer compressionInfo`, `ref bool bufferReadValid`. Returns `int`. |
| `ReadLongFromPacket` | method (static) | Static entry point. Takes 2 arguments: `CompressionInfo.LongInteger compressionInfo`, `ref bool bufferReadValid`. Returns `long`. |
| `ReadMatrixFrameFromPacket` | method (static) | Static entry point. Takes 1 argument: `ref bool bufferReadValid`. Returns `MatrixFrame`. |
| `ReadMissionObjectIdFromPacket` | method (static) | Static entry point. Takes 1 argument: `ref bool bufferReadValid`. Returns `MissionObjectId`. |
| `ReadNetworkPeerReferenceFromPacket` | method (static) | Static entry point. Takes 2 arguments: `ref bool bufferReadValid`, `bool canReturnNull`. Returns `NetworkCommunicator`. |
| `ReadNonUniformTransformFromPacket` | method (static) | Static entry point. Takes 3 arguments: `CompressionInfo.Float positionCompressionInfo`, `CompressionInfo.Float quaternionCompressionInfo`, `ref bool bufferReadValid`. Returns `MatrixFrame`. |
| `ReadObjectReferenceFromPacket` | method (static) | Static entry point. Takes 3 arguments: `MBObjectManager objectManager`, `CompressionInfo.UnsignedInteger compressionInfo`, `ref bool bufferReadValid`. Returns `MBObjectBase`. |
| `ReadQuaternionFromPacket` | method (static) | Static entry point. Takes 2 arguments: `CompressionInfo.Float compressionInfo`, `ref bool bufferReadValid`. Returns `Quaternion`. |
| `ReadRotationMatrixFromPacket` | method (static) | Static entry point. Takes 1 argument: `ref bool bufferReadValid`. Returns `Mat3`. |
| `ReadStringFromPacket` | method (static) | Static entry point. Takes 1 argument: `ref bool bufferReadValid`. Returns `string`. |
| `ReadTeamIndexFromPacket` | method (static) | Static entry point. Takes 1 argument: `ref bool bufferReadValid`. Returns `int`. |
| `ReadTransformFromPacket` | method (static) | Static entry point. Takes 3 arguments: `CompressionInfo.Float positionCompressionInfo`, `CompressionInfo.Float quaternionCompressionInfo`, `ref bool bufferReadValid`. Returns `MatrixFrame`. |
| `ReadUintFromPacket` | method (static) | Static entry point. Takes 2 arguments: `CompressionInfo.UnsignedInteger compressionInfo`, `ref bool bufferReadValid`. Returns `uint`. |
| `ReadUlongFromPacket` | method (static) | Static entry point. Takes 2 arguments: `CompressionInfo.UnsignedLongInteger compressionInfo`, `ref bool bufferReadValid`. Returns `ulong`. |
| `ReadUnitTransformFromPacket` | method (static) | Static entry point. Takes 3 arguments: `CompressionInfo.Float positionCompressionInfo`, `CompressionInfo.Float quaternionCompressionInfo`, `ref bool bufferReadValid`. Returns `MatrixFrame`. |
| `ReadVec2FromPacket` | method (static) | Static entry point. Takes 2 arguments: `CompressionInfo.Float compressionInfo`, `ref bool bufferReadValid`. Returns `Vec2`. |

32 further public members follow the same patterns.
## Usage Example

```csharp
// Static entry points on GameNetworkMessage:
GameNetworkMessage.ReadBoolFromPacket(theTarget);
GameNetworkMessage.WriteBoolToPacket(value);
GameNetworkMessage.ReadIntFromPacket(compressionInfo, theTarget);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade/Network/Messages/GameNetworkMessage.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [DebugNetworkEventStatistics](../DebugNetworkEventStatistics/) — `TaleWorlds.MountAndBlade.Network`.
- [GameNetwork](../GameNetwork/) — `TaleWorlds.MountAndBlade`.
- [Min](../../core-extra/Min/) — `TaleWorlds.LinQuick`.
- [MBGUID](../../campaign-ext/MBGUID/) — `TaleWorlds.ObjectSystem`.

Section: [api/mission-ext/](../) — the other types in this bucket.
