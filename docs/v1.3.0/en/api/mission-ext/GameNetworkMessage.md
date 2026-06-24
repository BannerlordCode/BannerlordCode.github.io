<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameNetworkMessage`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `read bool from packet`.

### WriteBoolToPacket
`public static void WriteBoolToPacket(bool value)`

**Purpose:** Handles logic related to `write bool to packet`.

### ReadIntFromPacket
`public static int ReadIntFromPacket(CompressionInfo.Integer compressionInfo, ref bool bufferReadValid)`

**Purpose:** Handles logic related to `read int from packet`.

### WriteIntToPacket
`public static void WriteIntToPacket(int value, CompressionInfo.Integer compressionInfo)`

**Purpose:** Handles logic related to `write int to packet`.

### ReadUintFromPacket
`public static uint ReadUintFromPacket(CompressionInfo.UnsignedInteger compressionInfo, ref bool bufferReadValid)`

**Purpose:** Handles logic related to `read uint from packet`.

### WriteUintToPacket
`public static void WriteUintToPacket(uint value, CompressionInfo.UnsignedInteger compressionInfo)`

**Purpose:** Handles logic related to `write uint to packet`.

### ReadLongFromPacket
`public static long ReadLongFromPacket(CompressionInfo.LongInteger compressionInfo, ref bool bufferReadValid)`

**Purpose:** Handles logic related to `read long from packet`.

### WriteLongToPacket
`public static void WriteLongToPacket(long value, CompressionInfo.LongInteger compressionInfo)`

**Purpose:** Handles logic related to `write long to packet`.

### ReadUlongFromPacket
`public static ulong ReadUlongFromPacket(CompressionInfo.UnsignedLongInteger compressionInfo, ref bool bufferReadValid)`

**Purpose:** Handles logic related to `read ulong from packet`.

### WriteUlongToPacket
`public static void WriteUlongToPacket(ulong value, CompressionInfo.UnsignedLongInteger compressionInfo)`

**Purpose:** Handles logic related to `write ulong to packet`.

### ReadFloatFromPacket
`public static float ReadFloatFromPacket(CompressionInfo.Float compressionInfo, ref bool bufferReadValid)`

**Purpose:** Handles logic related to `read float from packet`.

### WriteFloatToPacket
`public static void WriteFloatToPacket(float value, CompressionInfo.Float compressionInfo)`

**Purpose:** Handles logic related to `write float to packet`.

### ReadStringFromPacket
`public static string ReadStringFromPacket(ref bool bufferReadValid)`

**Purpose:** Handles logic related to `read string from packet`.

### WriteStringToPacket
`public static void WriteStringToPacket(string value)`

**Purpose:** Handles logic related to `write string to packet`.

### ReadByteArrayFromPacket
`public static int ReadByteArrayFromPacket(byte buffer, int offset, int bufferCapacity, ref bool bufferReadValid)`

**Purpose:** Handles logic related to `read byte array from packet`.

### WriteBannerCodeToPacket
`public static void WriteBannerCodeToPacket(string bannerCode)`

**Purpose:** Handles logic related to `write banner code to packet`.

### ReadBannerCodeFromPacket
`public static string ReadBannerCodeFromPacket(ref bool bufferReadValid)`

**Purpose:** Handles logic related to `read banner code from packet`.

### WriteByteArrayToPacket
`public static void WriteByteArrayToPacket(byte value, int offset, int size)`

**Purpose:** Handles logic related to `write byte array to packet`.

### ReadActionSetReferenceFromPacket
`public static MBActionSet ReadActionSetReferenceFromPacket(CompressionInfo.Integer compressionInfo, ref bool bufferReadValid)`

**Purpose:** Handles logic related to `read action set reference from packet`.

### WriteActionSetReferenceToPacket
`public static void WriteActionSetReferenceToPacket(MBActionSet actionSet, CompressionInfo.Integer compressionInfo)`

**Purpose:** Handles logic related to `write action set reference to packet`.

### ReadAgentIndexFromPacket
`public static int ReadAgentIndexFromPacket(ref bool bufferReadValid)`

**Purpose:** Handles logic related to `read agent index from packet`.

### WriteAgentIndexToPacket
`public static void WriteAgentIndexToPacket(int agentIndex)`

**Purpose:** Handles logic related to `write agent index to packet`.

### ReadObjectReferenceFromPacket
`public static MBObjectBase ReadObjectReferenceFromPacket(MBObjectManager objectManager, CompressionInfo.UnsignedInteger compressionInfo, ref bool bufferReadValid)`

**Purpose:** Handles logic related to `read object reference from packet`.

### WriteObjectReferenceToPacket
`public static void WriteObjectReferenceToPacket(MBObjectBase value, CompressionInfo.UnsignedInteger compressionInfo)`

**Purpose:** Handles logic related to `write object reference to packet`.

### ReadVirtualPlayerReferenceToPacket
`public static VirtualPlayer ReadVirtualPlayerReferenceToPacket(ref bool bufferReadValid, bool canReturnNull = false)`

**Purpose:** Handles logic related to `read virtual player reference to packet`.

### ReadNetworkPeerReferenceFromPacket
`public static NetworkCommunicator ReadNetworkPeerReferenceFromPacket(ref bool bufferReadValid, bool canReturnNull = false)`

**Purpose:** Handles logic related to `read network peer reference from packet`.

### WriteVirtualPlayerReferenceToPacket
`public static void WriteVirtualPlayerReferenceToPacket(VirtualPlayer virtualPlayer)`

**Purpose:** Handles logic related to `write virtual player reference to packet`.

### WriteNetworkPeerReferenceToPacket
`public static void WriteNetworkPeerReferenceToPacket(NetworkCommunicator networkCommunicator)`

**Purpose:** Handles logic related to `write network peer reference to packet`.

### ReadTeamIndexFromPacket
`public static int ReadTeamIndexFromPacket(ref bool bufferReadValid)`

**Purpose:** Handles logic related to `read team index from packet`.

### WriteTeamIndexToPacket
`public static void WriteTeamIndexToPacket(int teamIndex)`

**Purpose:** Handles logic related to `write team index to packet`.

### ReadMissionObjectIdFromPacket
`public static MissionObjectId ReadMissionObjectIdFromPacket(ref bool bufferReadValid)`

**Purpose:** Handles logic related to `read mission object id from packet`.

### WriteMissionObjectIdToPacket
`public static void WriteMissionObjectIdToPacket(MissionObjectId value)`

**Purpose:** Handles logic related to `write mission object id to packet`.

### ReadVec3FromPacket
`public static Vec3 ReadVec3FromPacket(CompressionInfo.Float compressionInfo, ref bool bufferReadValid)`

**Purpose:** Handles logic related to `read vec3 from packet`.

### WriteVec3ToPacket
`public static void WriteVec3ToPacket(Vec3 value, CompressionInfo.Float compressionInfo)`

**Purpose:** Handles logic related to `write vec3 to packet`.

### ReadVec2FromPacket
`public static Vec2 ReadVec2FromPacket(CompressionInfo.Float compressionInfo, ref bool bufferReadValid)`

**Purpose:** Handles logic related to `read vec2 from packet`.

### WriteVec2ToPacket
`public static void WriteVec2ToPacket(Vec2 value, CompressionInfo.Float compressionInfo)`

**Purpose:** Handles logic related to `write vec2 to packet`.

### ReadRotationMatrixFromPacket
`public static Mat3 ReadRotationMatrixFromPacket(ref bool bufferReadValid)`

**Purpose:** Handles logic related to `read rotation matrix from packet`.

### WriteRotationMatrixToPacket
`public static void WriteRotationMatrixToPacket(Mat3 value)`

**Purpose:** Handles logic related to `write rotation matrix to packet`.

### ReadMatrixFrameFromPacket
`public static MatrixFrame ReadMatrixFrameFromPacket(ref bool bufferReadValid)`

**Purpose:** Handles logic related to `read matrix frame from packet`.

### WriteMatrixFrameToPacket
`public static void WriteMatrixFrameToPacket(MatrixFrame frame)`

**Purpose:** Handles logic related to `write matrix frame to packet`.

### ReadNonUniformTransformFromPacket
`public static MatrixFrame ReadNonUniformTransformFromPacket(CompressionInfo.Float positionCompressionInfo, CompressionInfo.Float quaternionCompressionInfo, ref bool bufferReadValid)`

**Purpose:** Handles logic related to `read non uniform transform from packet`.

### WriteNonUniformTransformToPacket
`public static void WriteNonUniformTransformToPacket(MatrixFrame frame, CompressionInfo.Float positionCompressionInfo, CompressionInfo.Float quaternionCompressionInfo)`

**Purpose:** Handles logic related to `write non uniform transform to packet`.

### ReadTransformFromPacket
`public static MatrixFrame ReadTransformFromPacket(CompressionInfo.Float positionCompressionInfo, CompressionInfo.Float quaternionCompressionInfo, ref bool bufferReadValid)`

**Purpose:** Handles logic related to `read transform from packet`.

### WriteTransformToPacket
`public static void WriteTransformToPacket(MatrixFrame frame, CompressionInfo.Float positionCompressionInfo, CompressionInfo.Float quaternionCompressionInfo)`

**Purpose:** Handles logic related to `write transform to packet`.

### ReadUnitTransformFromPacket
`public static MatrixFrame ReadUnitTransformFromPacket(CompressionInfo.Float positionCompressionInfo, CompressionInfo.Float quaternionCompressionInfo, ref bool bufferReadValid)`

**Purpose:** Handles logic related to `read unit transform from packet`.

### WriteUnitTransformToPacket
`public static void WriteUnitTransformToPacket(MatrixFrame frame, CompressionInfo.Float positionCompressionInfo, CompressionInfo.Float quaternionCompressionInfo)`

**Purpose:** Handles logic related to `write unit transform to packet`.

### ReadQuaternionFromPacket
`public static Quaternion ReadQuaternionFromPacket(CompressionInfo.Float compressionInfo, ref bool bufferReadValid)`

**Purpose:** Handles logic related to `read quaternion from packet`.

### WriteQuaternionToPacket
`public static void WriteQuaternionToPacket(Quaternion q, CompressionInfo.Float compressionInfo)`

**Purpose:** Handles logic related to `write quaternion to packet`.

### WriteBodyPropertiesToPacket
`public static void WriteBodyPropertiesToPacket(BodyProperties bodyProperties)`

**Purpose:** Handles logic related to `write body properties to packet`.

### ReadBodyPropertiesFromPacket
`public static BodyProperties ReadBodyPropertiesFromPacket(ref bool bufferReadValid)`

**Purpose:** Handles logic related to `read body properties from packet`.

## Usage Example

```csharp
var implementation = new CustomGameNetworkMessage();
```

## See Also

- [Complete Class Catalog](../catalog)