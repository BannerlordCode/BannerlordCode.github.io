---
title: "GameNetworkMessage"
description: "Auto-generated class reference for GameNetworkMessage."
---
# GameNetworkMessage

**Namespace:** TaleWorlds.MountAndBlade.Network.Messages
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class GameNetworkMessage`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/Network/Messages/GameNetworkMessage.cs`

## Overview

`GameNetworkMessage` lives in `TaleWorlds.MountAndBlade.Network.Messages` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Network.Messages` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MessageId` | `public int MessageId { get; set; }` |
| `IsClientMissionOver` | `public static bool IsClientMissionOver { get; }` |

## Key Methods

### ReadBoolFromPacket
`public static bool ReadBoolFromPacket(ref bool bufferReadValid)`

**Purpose:** Reads the data or state of bool from packet.

```csharp
// Static call; no instance required
GameNetworkMessage.ReadBoolFromPacket(bufferReadValid);
```

### WriteBoolToPacket
`public static void WriteBoolToPacket(bool value)`

**Purpose:** Writes bool to packet to the target location.

```csharp
// Static call; no instance required
GameNetworkMessage.WriteBoolToPacket(false);
```

### ReadIntFromPacket
`public static int ReadIntFromPacket(CompressionInfo.Integer compressionInfo, ref bool bufferReadValid)`

**Purpose:** Reads the data or state of int from packet.

```csharp
// Static call; no instance required
GameNetworkMessage.ReadIntFromPacket(compressionInfo, bufferReadValid);
```

### WriteIntToPacket
`public static void WriteIntToPacket(int value, CompressionInfo.Integer compressionInfo)`

**Purpose:** Writes int to packet to the target location.

```csharp
// Static call; no instance required
GameNetworkMessage.WriteIntToPacket(0, compressionInfo);
```

### ReadUintFromPacket
`public static uint ReadUintFromPacket(CompressionInfo.UnsignedInteger compressionInfo, ref bool bufferReadValid)`

**Purpose:** Reads the data or state of uint from packet.

```csharp
// Static call; no instance required
GameNetworkMessage.ReadUintFromPacket(compressionInfo, bufferReadValid);
```

### WriteUintToPacket
`public static void WriteUintToPacket(uint value, CompressionInfo.UnsignedInteger compressionInfo)`

**Purpose:** Writes uint to packet to the target location.

```csharp
// Static call; no instance required
GameNetworkMessage.WriteUintToPacket(0, compressionInfo);
```

### ReadLongFromPacket
`public static long ReadLongFromPacket(CompressionInfo.LongInteger compressionInfo, ref bool bufferReadValid)`

**Purpose:** Reads the data or state of long from packet.

```csharp
// Static call; no instance required
GameNetworkMessage.ReadLongFromPacket(compressionInfo, bufferReadValid);
```

### WriteLongToPacket
`public static void WriteLongToPacket(long value, CompressionInfo.LongInteger compressionInfo)`

**Purpose:** Writes long to packet to the target location.

```csharp
// Static call; no instance required
GameNetworkMessage.WriteLongToPacket(0, compressionInfo);
```

### ReadUlongFromPacket
`public static ulong ReadUlongFromPacket(CompressionInfo.UnsignedLongInteger compressionInfo, ref bool bufferReadValid)`

**Purpose:** Reads the data or state of ulong from packet.

```csharp
// Static call; no instance required
GameNetworkMessage.ReadUlongFromPacket(compressionInfo, bufferReadValid);
```

### WriteUlongToPacket
`public static void WriteUlongToPacket(ulong value, CompressionInfo.UnsignedLongInteger compressionInfo)`

**Purpose:** Writes ulong to packet to the target location.

```csharp
// Static call; no instance required
GameNetworkMessage.WriteUlongToPacket(0, compressionInfo);
```

### ReadFloatFromPacket
`public static float ReadFloatFromPacket(CompressionInfo.Float compressionInfo, ref bool bufferReadValid)`

**Purpose:** Reads the data or state of float from packet.

```csharp
// Static call; no instance required
GameNetworkMessage.ReadFloatFromPacket(compressionInfo, bufferReadValid);
```

### WriteFloatToPacket
`public static void WriteFloatToPacket(float value, CompressionInfo.Float compressionInfo)`

**Purpose:** Writes float to packet to the target location.

```csharp
// Static call; no instance required
GameNetworkMessage.WriteFloatToPacket(0, compressionInfo);
```

### ReadStringFromPacket
`public static string ReadStringFromPacket(ref bool bufferReadValid)`

**Purpose:** Reads the data or state of string from packet.

```csharp
// Static call; no instance required
GameNetworkMessage.ReadStringFromPacket(bufferReadValid);
```

### WriteStringToPacket
`public static void WriteStringToPacket(string value)`

**Purpose:** Writes string to packet to the target location.

```csharp
// Static call; no instance required
GameNetworkMessage.WriteStringToPacket("example");
```

### ReadByteArrayFromPacket
`public static int ReadByteArrayFromPacket(byte buffer, int offset, int bufferCapacity, ref bool bufferReadValid)`

**Purpose:** Reads the data or state of byte array from packet.

```csharp
// Static call; no instance required
GameNetworkMessage.ReadByteArrayFromPacket(0, 0, 0, bufferReadValid);
```

### WriteBannerCodeToPacket
`public static void WriteBannerCodeToPacket(string bannerCode)`

**Purpose:** Writes banner code to packet to the target location.

```csharp
// Static call; no instance required
GameNetworkMessage.WriteBannerCodeToPacket("example");
```

### ReadBannerCodeFromPacket
`public static string ReadBannerCodeFromPacket(ref bool bufferReadValid)`

**Purpose:** Reads the data or state of banner code from packet.

```csharp
// Static call; no instance required
GameNetworkMessage.ReadBannerCodeFromPacket(bufferReadValid);
```

### WriteByteArrayToPacket
`public static void WriteByteArrayToPacket(byte value, int offset, int size)`

**Purpose:** Writes byte array to packet to the target location.

```csharp
// Static call; no instance required
GameNetworkMessage.WriteByteArrayToPacket(0, 0, 0);
```

### ReadActionSetReferenceFromPacket
`public static MBActionSet ReadActionSetReferenceFromPacket(CompressionInfo.Integer compressionInfo, ref bool bufferReadValid)`

**Purpose:** Reads the data or state of action set reference from packet.

```csharp
// Static call; no instance required
GameNetworkMessage.ReadActionSetReferenceFromPacket(compressionInfo, bufferReadValid);
```

### WriteActionSetReferenceToPacket
`public static void WriteActionSetReferenceToPacket(MBActionSet actionSet, CompressionInfo.Integer compressionInfo)`

**Purpose:** Writes action set reference to packet to the target location.

```csharp
// Static call; no instance required
GameNetworkMessage.WriteActionSetReferenceToPacket(actionSet, compressionInfo);
```

### ReadAgentIndexFromPacket
`public static int ReadAgentIndexFromPacket(ref bool bufferReadValid)`

**Purpose:** Reads the data or state of agent index from packet.

```csharp
// Static call; no instance required
GameNetworkMessage.ReadAgentIndexFromPacket(bufferReadValid);
```

### WriteAgentIndexToPacket
`public static void WriteAgentIndexToPacket(int agentIndex)`

**Purpose:** Writes agent index to packet to the target location.

```csharp
// Static call; no instance required
GameNetworkMessage.WriteAgentIndexToPacket(0);
```

### ReadObjectReferenceFromPacket
`public static MBObjectBase ReadObjectReferenceFromPacket(MBObjectManager objectManager, CompressionInfo.UnsignedInteger compressionInfo, ref bool bufferReadValid)`

**Purpose:** Reads the data or state of object reference from packet.

```csharp
// Static call; no instance required
GameNetworkMessage.ReadObjectReferenceFromPacket(objectManager, compressionInfo, bufferReadValid);
```

### WriteObjectReferenceToPacket
`public static void WriteObjectReferenceToPacket(MBObjectBase value, CompressionInfo.UnsignedInteger compressionInfo)`

**Purpose:** Writes object reference to packet to the target location.

```csharp
// Static call; no instance required
GameNetworkMessage.WriteObjectReferenceToPacket(value, compressionInfo);
```

### ReadVirtualPlayerReferenceToPacket
`public static VirtualPlayer ReadVirtualPlayerReferenceToPacket(ref bool bufferReadValid, bool canReturnNull = false)`

**Purpose:** Reads the data or state of virtual player reference to packet.

```csharp
// Static call; no instance required
GameNetworkMessage.ReadVirtualPlayerReferenceToPacket(bufferReadValid, false);
```

### ReadNetworkPeerReferenceFromPacket
`public static NetworkCommunicator ReadNetworkPeerReferenceFromPacket(ref bool bufferReadValid, bool canReturnNull = false)`

**Purpose:** Reads the data or state of network peer reference from packet.

```csharp
// Static call; no instance required
GameNetworkMessage.ReadNetworkPeerReferenceFromPacket(bufferReadValid, false);
```

### WriteVirtualPlayerReferenceToPacket
`public static void WriteVirtualPlayerReferenceToPacket(VirtualPlayer virtualPlayer)`

**Purpose:** Writes virtual player reference to packet to the target location.

```csharp
// Static call; no instance required
GameNetworkMessage.WriteVirtualPlayerReferenceToPacket(virtualPlayer);
```

### WriteNetworkPeerReferenceToPacket
`public static void WriteNetworkPeerReferenceToPacket(NetworkCommunicator networkCommunicator)`

**Purpose:** Writes network peer reference to packet to the target location.

```csharp
// Static call; no instance required
GameNetworkMessage.WriteNetworkPeerReferenceToPacket(networkCommunicator);
```

### ReadTeamIndexFromPacket
`public static int ReadTeamIndexFromPacket(ref bool bufferReadValid)`

**Purpose:** Reads the data or state of team index from packet.

```csharp
// Static call; no instance required
GameNetworkMessage.ReadTeamIndexFromPacket(bufferReadValid);
```

### WriteTeamIndexToPacket
`public static void WriteTeamIndexToPacket(int teamIndex)`

**Purpose:** Writes team index to packet to the target location.

```csharp
// Static call; no instance required
GameNetworkMessage.WriteTeamIndexToPacket(0);
```

### ReadMissionObjectIdFromPacket
`public static MissionObjectId ReadMissionObjectIdFromPacket(ref bool bufferReadValid)`

**Purpose:** Reads the data or state of mission object id from packet.

```csharp
// Static call; no instance required
GameNetworkMessage.ReadMissionObjectIdFromPacket(bufferReadValid);
```

### WriteMissionObjectIdToPacket
`public static void WriteMissionObjectIdToPacket(MissionObjectId value)`

**Purpose:** Writes mission object id to packet to the target location.

```csharp
// Static call; no instance required
GameNetworkMessage.WriteMissionObjectIdToPacket(value);
```

### ReadVec3FromPacket
`public static Vec3 ReadVec3FromPacket(CompressionInfo.Float compressionInfo, ref bool bufferReadValid)`

**Purpose:** Reads the data or state of vec3 from packet.

```csharp
// Static call; no instance required
GameNetworkMessage.ReadVec3FromPacket(compressionInfo, bufferReadValid);
```

### WriteVec3ToPacket
`public static void WriteVec3ToPacket(Vec3 value, CompressionInfo.Float compressionInfo)`

**Purpose:** Writes vec3 to packet to the target location.

```csharp
// Static call; no instance required
GameNetworkMessage.WriteVec3ToPacket(value, compressionInfo);
```

### ReadVec2FromPacket
`public static Vec2 ReadVec2FromPacket(CompressionInfo.Float compressionInfo, ref bool bufferReadValid)`

**Purpose:** Reads the data or state of vec2 from packet.

```csharp
// Static call; no instance required
GameNetworkMessage.ReadVec2FromPacket(compressionInfo, bufferReadValid);
```

### WriteVec2ToPacket
`public static void WriteVec2ToPacket(Vec2 value, CompressionInfo.Float compressionInfo)`

**Purpose:** Writes vec2 to packet to the target location.

```csharp
// Static call; no instance required
GameNetworkMessage.WriteVec2ToPacket(value, compressionInfo);
```

### ReadRotationMatrixFromPacket
`public static Mat3 ReadRotationMatrixFromPacket(ref bool bufferReadValid)`

**Purpose:** Reads the data or state of rotation matrix from packet.

```csharp
// Static call; no instance required
GameNetworkMessage.ReadRotationMatrixFromPacket(bufferReadValid);
```

### WriteRotationMatrixToPacket
`public static void WriteRotationMatrixToPacket(Mat3 value)`

**Purpose:** Writes rotation matrix to packet to the target location.

```csharp
// Static call; no instance required
GameNetworkMessage.WriteRotationMatrixToPacket(value);
```

### ReadMatrixFrameFromPacket
`public static MatrixFrame ReadMatrixFrameFromPacket(ref bool bufferReadValid)`

**Purpose:** Reads the data or state of matrix frame from packet.

```csharp
// Static call; no instance required
GameNetworkMessage.ReadMatrixFrameFromPacket(bufferReadValid);
```

### WriteMatrixFrameToPacket
`public static void WriteMatrixFrameToPacket(MatrixFrame frame)`

**Purpose:** Writes matrix frame to packet to the target location.

```csharp
// Static call; no instance required
GameNetworkMessage.WriteMatrixFrameToPacket(frame);
```

### ReadNonUniformTransformFromPacket
`public static MatrixFrame ReadNonUniformTransformFromPacket(CompressionInfo.Float positionCompressionInfo, CompressionInfo.Float quaternionCompressionInfo, ref bool bufferReadValid)`

**Purpose:** Reads the data or state of non uniform transform from packet.

```csharp
// Static call; no instance required
GameNetworkMessage.ReadNonUniformTransformFromPacket(positionCompressionInfo, quaternionCompressionInfo, bufferReadValid);
```

### WriteNonUniformTransformToPacket
`public static void WriteNonUniformTransformToPacket(MatrixFrame frame, CompressionInfo.Float positionCompressionInfo, CompressionInfo.Float quaternionCompressionInfo)`

**Purpose:** Writes non uniform transform to packet to the target location.

```csharp
// Static call; no instance required
GameNetworkMessage.WriteNonUniformTransformToPacket(frame, positionCompressionInfo, quaternionCompressionInfo);
```

### ReadTransformFromPacket
`public static MatrixFrame ReadTransformFromPacket(CompressionInfo.Float positionCompressionInfo, CompressionInfo.Float quaternionCompressionInfo, ref bool bufferReadValid)`

**Purpose:** Reads the data or state of transform from packet.

```csharp
// Static call; no instance required
GameNetworkMessage.ReadTransformFromPacket(positionCompressionInfo, quaternionCompressionInfo, bufferReadValid);
```

### WriteTransformToPacket
`public static void WriteTransformToPacket(MatrixFrame frame, CompressionInfo.Float positionCompressionInfo, CompressionInfo.Float quaternionCompressionInfo)`

**Purpose:** Writes transform to packet to the target location.

```csharp
// Static call; no instance required
GameNetworkMessage.WriteTransformToPacket(frame, positionCompressionInfo, quaternionCompressionInfo);
```

### ReadUnitTransformFromPacket
`public static MatrixFrame ReadUnitTransformFromPacket(CompressionInfo.Float positionCompressionInfo, CompressionInfo.Float quaternionCompressionInfo, ref bool bufferReadValid)`

**Purpose:** Reads the data or state of unit transform from packet.

```csharp
// Static call; no instance required
GameNetworkMessage.ReadUnitTransformFromPacket(positionCompressionInfo, quaternionCompressionInfo, bufferReadValid);
```

### WriteUnitTransformToPacket
`public static void WriteUnitTransformToPacket(MatrixFrame frame, CompressionInfo.Float positionCompressionInfo, CompressionInfo.Float quaternionCompressionInfo)`

**Purpose:** Writes unit transform to packet to the target location.

```csharp
// Static call; no instance required
GameNetworkMessage.WriteUnitTransformToPacket(frame, positionCompressionInfo, quaternionCompressionInfo);
```

### ReadQuaternionFromPacket
`public static Quaternion ReadQuaternionFromPacket(CompressionInfo.Float compressionInfo, ref bool bufferReadValid)`

**Purpose:** Reads the data or state of quaternion from packet.

```csharp
// Static call; no instance required
GameNetworkMessage.ReadQuaternionFromPacket(compressionInfo, bufferReadValid);
```

### WriteQuaternionToPacket
`public static void WriteQuaternionToPacket(Quaternion q, CompressionInfo.Float compressionInfo)`

**Purpose:** Writes quaternion to packet to the target location.

```csharp
// Static call; no instance required
GameNetworkMessage.WriteQuaternionToPacket(q, compressionInfo);
```

### WriteBodyPropertiesToPacket
`public static void WriteBodyPropertiesToPacket(BodyProperties bodyProperties)`

**Purpose:** Writes body properties to packet to the target location.

```csharp
// Static call; no instance required
GameNetworkMessage.WriteBodyPropertiesToPacket(bodyProperties);
```

### ReadBodyPropertiesFromPacket
`public static BodyProperties ReadBodyPropertiesFromPacket(ref bool bufferReadValid)`

**Purpose:** Reads the data or state of body properties from packet.

```csharp
// Static call; no instance required
GameNetworkMessage.ReadBodyPropertiesFromPacket(bufferReadValid);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
GameNetworkMessage instance = ...;
```

## See Also

- [Area Index](../)