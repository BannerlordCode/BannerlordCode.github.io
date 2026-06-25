---
title: "GameNetworkMessage"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameNetworkMessage`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GameNetworkMessage

**Namespace:** TaleWorlds.MountAndBlade.Network.Messages
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class GameNetworkMessage`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/Network/Messages/GameNetworkMessage.cs`

## 概述

`GameNetworkMessage` 位于 `TaleWorlds.MountAndBlade.Network.Messages`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Network.Messages` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MessageId` | `public int MessageId { get; set; }` |
| `IsClientMissionOver` | `public static bool IsClientMissionOver { get; }` |

## 主要方法

### ReadBoolFromPacket
`public static bool ReadBoolFromPacket(ref bool bufferReadValid)`

**用途 / Purpose:** 处理 `read bool from packet` 相关逻辑。

### WriteBoolToPacket
`public static void WriteBoolToPacket(bool value)`

**用途 / Purpose:** 处理 `write bool to packet` 相关逻辑。

### ReadIntFromPacket
`public static int ReadIntFromPacket(CompressionInfo.Integer compressionInfo, ref bool bufferReadValid)`

**用途 / Purpose:** 处理 `read int from packet` 相关逻辑。

### WriteIntToPacket
`public static void WriteIntToPacket(int value, CompressionInfo.Integer compressionInfo)`

**用途 / Purpose:** 处理 `write int to packet` 相关逻辑。

### ReadUintFromPacket
`public static uint ReadUintFromPacket(CompressionInfo.UnsignedInteger compressionInfo, ref bool bufferReadValid)`

**用途 / Purpose:** 处理 `read uint from packet` 相关逻辑。

### WriteUintToPacket
`public static void WriteUintToPacket(uint value, CompressionInfo.UnsignedInteger compressionInfo)`

**用途 / Purpose:** 处理 `write uint to packet` 相关逻辑。

### ReadLongFromPacket
`public static long ReadLongFromPacket(CompressionInfo.LongInteger compressionInfo, ref bool bufferReadValid)`

**用途 / Purpose:** 处理 `read long from packet` 相关逻辑。

### WriteLongToPacket
`public static void WriteLongToPacket(long value, CompressionInfo.LongInteger compressionInfo)`

**用途 / Purpose:** 处理 `write long to packet` 相关逻辑。

### ReadUlongFromPacket
`public static ulong ReadUlongFromPacket(CompressionInfo.UnsignedLongInteger compressionInfo, ref bool bufferReadValid)`

**用途 / Purpose:** 处理 `read ulong from packet` 相关逻辑。

### WriteUlongToPacket
`public static void WriteUlongToPacket(ulong value, CompressionInfo.UnsignedLongInteger compressionInfo)`

**用途 / Purpose:** 处理 `write ulong to packet` 相关逻辑。

### ReadFloatFromPacket
`public static float ReadFloatFromPacket(CompressionInfo.Float compressionInfo, ref bool bufferReadValid)`

**用途 / Purpose:** 处理 `read float from packet` 相关逻辑。

### WriteFloatToPacket
`public static void WriteFloatToPacket(float value, CompressionInfo.Float compressionInfo)`

**用途 / Purpose:** 处理 `write float to packet` 相关逻辑。

### ReadStringFromPacket
`public static string ReadStringFromPacket(ref bool bufferReadValid)`

**用途 / Purpose:** 处理 `read string from packet` 相关逻辑。

### WriteStringToPacket
`public static void WriteStringToPacket(string value)`

**用途 / Purpose:** 处理 `write string to packet` 相关逻辑。

### ReadByteArrayFromPacket
`public static int ReadByteArrayFromPacket(byte buffer, int offset, int bufferCapacity, ref bool bufferReadValid)`

**用途 / Purpose:** 处理 `read byte array from packet` 相关逻辑。

### WriteBannerCodeToPacket
`public static void WriteBannerCodeToPacket(string bannerCode)`

**用途 / Purpose:** 处理 `write banner code to packet` 相关逻辑。

### ReadBannerCodeFromPacket
`public static string ReadBannerCodeFromPacket(ref bool bufferReadValid)`

**用途 / Purpose:** 处理 `read banner code from packet` 相关逻辑。

### WriteByteArrayToPacket
`public static void WriteByteArrayToPacket(byte value, int offset, int size)`

**用途 / Purpose:** 处理 `write byte array to packet` 相关逻辑。

### ReadActionSetReferenceFromPacket
`public static MBActionSet ReadActionSetReferenceFromPacket(CompressionInfo.Integer compressionInfo, ref bool bufferReadValid)`

**用途 / Purpose:** 处理 `read action set reference from packet` 相关逻辑。

### WriteActionSetReferenceToPacket
`public static void WriteActionSetReferenceToPacket(MBActionSet actionSet, CompressionInfo.Integer compressionInfo)`

**用途 / Purpose:** 处理 `write action set reference to packet` 相关逻辑。

### ReadAgentIndexFromPacket
`public static int ReadAgentIndexFromPacket(ref bool bufferReadValid)`

**用途 / Purpose:** 处理 `read agent index from packet` 相关逻辑。

### WriteAgentIndexToPacket
`public static void WriteAgentIndexToPacket(int agentIndex)`

**用途 / Purpose:** 处理 `write agent index to packet` 相关逻辑。

### ReadObjectReferenceFromPacket
`public static MBObjectBase ReadObjectReferenceFromPacket(MBObjectManager objectManager, CompressionInfo.UnsignedInteger compressionInfo, ref bool bufferReadValid)`

**用途 / Purpose:** 处理 `read object reference from packet` 相关逻辑。

### WriteObjectReferenceToPacket
`public static void WriteObjectReferenceToPacket(MBObjectBase value, CompressionInfo.UnsignedInteger compressionInfo)`

**用途 / Purpose:** 处理 `write object reference to packet` 相关逻辑。

### ReadVirtualPlayerReferenceToPacket
`public static VirtualPlayer ReadVirtualPlayerReferenceToPacket(ref bool bufferReadValid, bool canReturnNull = false)`

**用途 / Purpose:** 处理 `read virtual player reference to packet` 相关逻辑。

### ReadNetworkPeerReferenceFromPacket
`public static NetworkCommunicator ReadNetworkPeerReferenceFromPacket(ref bool bufferReadValid, bool canReturnNull = false)`

**用途 / Purpose:** 处理 `read network peer reference from packet` 相关逻辑。

### WriteVirtualPlayerReferenceToPacket
`public static void WriteVirtualPlayerReferenceToPacket(VirtualPlayer virtualPlayer)`

**用途 / Purpose:** 处理 `write virtual player reference to packet` 相关逻辑。

### WriteNetworkPeerReferenceToPacket
`public static void WriteNetworkPeerReferenceToPacket(NetworkCommunicator networkCommunicator)`

**用途 / Purpose:** 处理 `write network peer reference to packet` 相关逻辑。

### ReadTeamIndexFromPacket
`public static int ReadTeamIndexFromPacket(ref bool bufferReadValid)`

**用途 / Purpose:** 处理 `read team index from packet` 相关逻辑。

### WriteTeamIndexToPacket
`public static void WriteTeamIndexToPacket(int teamIndex)`

**用途 / Purpose:** 处理 `write team index to packet` 相关逻辑。

### ReadMissionObjectIdFromPacket
`public static MissionObjectId ReadMissionObjectIdFromPacket(ref bool bufferReadValid)`

**用途 / Purpose:** 处理 `read mission object id from packet` 相关逻辑。

### WriteMissionObjectIdToPacket
`public static void WriteMissionObjectIdToPacket(MissionObjectId value)`

**用途 / Purpose:** 处理 `write mission object id to packet` 相关逻辑。

### ReadVec3FromPacket
`public static Vec3 ReadVec3FromPacket(CompressionInfo.Float compressionInfo, ref bool bufferReadValid)`

**用途 / Purpose:** 处理 `read vec3 from packet` 相关逻辑。

### WriteVec3ToPacket
`public static void WriteVec3ToPacket(Vec3 value, CompressionInfo.Float compressionInfo)`

**用途 / Purpose:** 处理 `write vec3 to packet` 相关逻辑。

### ReadVec2FromPacket
`public static Vec2 ReadVec2FromPacket(CompressionInfo.Float compressionInfo, ref bool bufferReadValid)`

**用途 / Purpose:** 处理 `read vec2 from packet` 相关逻辑。

### WriteVec2ToPacket
`public static void WriteVec2ToPacket(Vec2 value, CompressionInfo.Float compressionInfo)`

**用途 / Purpose:** 处理 `write vec2 to packet` 相关逻辑。

### ReadRotationMatrixFromPacket
`public static Mat3 ReadRotationMatrixFromPacket(ref bool bufferReadValid)`

**用途 / Purpose:** 处理 `read rotation matrix from packet` 相关逻辑。

### WriteRotationMatrixToPacket
`public static void WriteRotationMatrixToPacket(Mat3 value)`

**用途 / Purpose:** 处理 `write rotation matrix to packet` 相关逻辑。

### ReadMatrixFrameFromPacket
`public static MatrixFrame ReadMatrixFrameFromPacket(ref bool bufferReadValid)`

**用途 / Purpose:** 处理 `read matrix frame from packet` 相关逻辑。

### WriteMatrixFrameToPacket
`public static void WriteMatrixFrameToPacket(MatrixFrame frame)`

**用途 / Purpose:** 处理 `write matrix frame to packet` 相关逻辑。

### ReadNonUniformTransformFromPacket
`public static MatrixFrame ReadNonUniformTransformFromPacket(CompressionInfo.Float positionCompressionInfo, CompressionInfo.Float quaternionCompressionInfo, ref bool bufferReadValid)`

**用途 / Purpose:** 处理 `read non uniform transform from packet` 相关逻辑。

### WriteNonUniformTransformToPacket
`public static void WriteNonUniformTransformToPacket(MatrixFrame frame, CompressionInfo.Float positionCompressionInfo, CompressionInfo.Float quaternionCompressionInfo)`

**用途 / Purpose:** 处理 `write non uniform transform to packet` 相关逻辑。

### ReadTransformFromPacket
`public static MatrixFrame ReadTransformFromPacket(CompressionInfo.Float positionCompressionInfo, CompressionInfo.Float quaternionCompressionInfo, ref bool bufferReadValid)`

**用途 / Purpose:** 处理 `read transform from packet` 相关逻辑。

### WriteTransformToPacket
`public static void WriteTransformToPacket(MatrixFrame frame, CompressionInfo.Float positionCompressionInfo, CompressionInfo.Float quaternionCompressionInfo)`

**用途 / Purpose:** 处理 `write transform to packet` 相关逻辑。

### ReadUnitTransformFromPacket
`public static MatrixFrame ReadUnitTransformFromPacket(CompressionInfo.Float positionCompressionInfo, CompressionInfo.Float quaternionCompressionInfo, ref bool bufferReadValid)`

**用途 / Purpose:** 处理 `read unit transform from packet` 相关逻辑。

### WriteUnitTransformToPacket
`public static void WriteUnitTransformToPacket(MatrixFrame frame, CompressionInfo.Float positionCompressionInfo, CompressionInfo.Float quaternionCompressionInfo)`

**用途 / Purpose:** 处理 `write unit transform to packet` 相关逻辑。

### ReadQuaternionFromPacket
`public static Quaternion ReadQuaternionFromPacket(CompressionInfo.Float compressionInfo, ref bool bufferReadValid)`

**用途 / Purpose:** 处理 `read quaternion from packet` 相关逻辑。

### WriteQuaternionToPacket
`public static void WriteQuaternionToPacket(Quaternion q, CompressionInfo.Float compressionInfo)`

**用途 / Purpose:** 处理 `write quaternion to packet` 相关逻辑。

### WriteBodyPropertiesToPacket
`public static void WriteBodyPropertiesToPacket(BodyProperties bodyProperties)`

**用途 / Purpose:** 处理 `write body properties to packet` 相关逻辑。

### ReadBodyPropertiesFromPacket
`public static BodyProperties ReadBodyPropertiesFromPacket(ref bool bufferReadValid)`

**用途 / Purpose:** 处理 `read body properties from packet` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomGameNetworkMessage();
```

## 参见

- [完整类目录](../catalog)