---
title: "GameNetworkMessage"
description: "GameNetworkMessage 的自动生成类参考。"
---
# GameNetworkMessage

**Namespace:** TaleWorlds.MountAndBlade.Network.Messages
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class GameNetworkMessage`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Network.Messages/GameNetworkMessage.cs`

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

**用途 / Purpose:** 读取「bool from packet」的数据或状态。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.ReadBoolFromPacket(bufferReadValid);
```

### WriteBoolToPacket
`public static void WriteBoolToPacket(bool value)`

**用途 / Purpose:** 将「bool to packet」写入目标位置。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.WriteBoolToPacket(false);
```

### ReadIntFromPacket
`public static int ReadIntFromPacket(CompressionInfo.Integer compressionInfo, ref bool bufferReadValid)`

**用途 / Purpose:** 读取「int from packet」的数据或状态。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.ReadIntFromPacket(compressionInfo, bufferReadValid);
```

### WriteIntToPacket
`public static void WriteIntToPacket(int value, CompressionInfo.Integer compressionInfo)`

**用途 / Purpose:** 将「int to packet」写入目标位置。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.WriteIntToPacket(0, compressionInfo);
```

### ReadUintFromPacket
`public static uint ReadUintFromPacket(CompressionInfo.UnsignedInteger compressionInfo, ref bool bufferReadValid)`

**用途 / Purpose:** 读取「uint from packet」的数据或状态。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.ReadUintFromPacket(compressionInfo, bufferReadValid);
```

### WriteUintToPacket
`public static void WriteUintToPacket(uint value, CompressionInfo.UnsignedInteger compressionInfo)`

**用途 / Purpose:** 将「uint to packet」写入目标位置。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.WriteUintToPacket(0, compressionInfo);
```

### ReadLongFromPacket
`public static long ReadLongFromPacket(CompressionInfo.LongInteger compressionInfo, ref bool bufferReadValid)`

**用途 / Purpose:** 读取「long from packet」的数据或状态。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.ReadLongFromPacket(compressionInfo, bufferReadValid);
```

### WriteLongToPacket
`public static void WriteLongToPacket(long value, CompressionInfo.LongInteger compressionInfo)`

**用途 / Purpose:** 将「long to packet」写入目标位置。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.WriteLongToPacket(0, compressionInfo);
```

### ReadUlongFromPacket
`public static ulong ReadUlongFromPacket(CompressionInfo.UnsignedLongInteger compressionInfo, ref bool bufferReadValid)`

**用途 / Purpose:** 读取「ulong from packet」的数据或状态。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.ReadUlongFromPacket(compressionInfo, bufferReadValid);
```

### WriteUlongToPacket
`public static void WriteUlongToPacket(ulong value, CompressionInfo.UnsignedLongInteger compressionInfo)`

**用途 / Purpose:** 将「ulong to packet」写入目标位置。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.WriteUlongToPacket(0, compressionInfo);
```

### ReadFloatFromPacket
`public static float ReadFloatFromPacket(CompressionInfo.Float compressionInfo, ref bool bufferReadValid)`

**用途 / Purpose:** 读取「float from packet」的数据或状态。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.ReadFloatFromPacket(compressionInfo, bufferReadValid);
```

### WriteFloatToPacket
`public static void WriteFloatToPacket(float value, CompressionInfo.Float compressionInfo)`

**用途 / Purpose:** 将「float to packet」写入目标位置。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.WriteFloatToPacket(0, compressionInfo);
```

### ReadStringFromPacket
`public static string ReadStringFromPacket(ref bool bufferReadValid)`

**用途 / Purpose:** 读取「string from packet」的数据或状态。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.ReadStringFromPacket(bufferReadValid);
```

### WriteStringToPacket
`public static void WriteStringToPacket(string value)`

**用途 / Purpose:** 将「string to packet」写入目标位置。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.WriteStringToPacket("example");
```

### ReadByteArrayFromPacket
`public static int ReadByteArrayFromPacket(byte buffer, int offset, int bufferCapacity, ref bool bufferReadValid)`

**用途 / Purpose:** 读取「byte array from packet」的数据或状态。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.ReadByteArrayFromPacket(0, 0, 0, bufferReadValid);
```

### WriteBannerCodeToPacket
`public static void WriteBannerCodeToPacket(string bannerCode)`

**用途 / Purpose:** 将「banner code to packet」写入目标位置。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.WriteBannerCodeToPacket("example");
```

### ReadBannerCodeFromPacket
`public static string ReadBannerCodeFromPacket(ref bool bufferReadValid)`

**用途 / Purpose:** 读取「banner code from packet」的数据或状态。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.ReadBannerCodeFromPacket(bufferReadValid);
```

### WriteByteArrayToPacket
`public static void WriteByteArrayToPacket(byte value, int offset, int size)`

**用途 / Purpose:** 将「byte array to packet」写入目标位置。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.WriteByteArrayToPacket(0, 0, 0);
```

### ReadActionSetReferenceFromPacket
`public static MBActionSet ReadActionSetReferenceFromPacket(CompressionInfo.Integer compressionInfo, ref bool bufferReadValid)`

**用途 / Purpose:** 读取「action set reference from packet」的数据或状态。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.ReadActionSetReferenceFromPacket(compressionInfo, bufferReadValid);
```

### WriteActionSetReferenceToPacket
`public static void WriteActionSetReferenceToPacket(MBActionSet actionSet, CompressionInfo.Integer compressionInfo)`

**用途 / Purpose:** 将「action set reference to packet」写入目标位置。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.WriteActionSetReferenceToPacket(actionSet, compressionInfo);
```

### ReadAgentIndexFromPacket
`public static int ReadAgentIndexFromPacket(ref bool bufferReadValid)`

**用途 / Purpose:** 读取「agent index from packet」的数据或状态。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.ReadAgentIndexFromPacket(bufferReadValid);
```

### WriteAgentIndexToPacket
`public static void WriteAgentIndexToPacket(int agentIndex)`

**用途 / Purpose:** 将「agent index to packet」写入目标位置。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.WriteAgentIndexToPacket(0);
```

### ReadObjectReferenceFromPacket
`public static MBObjectBase ReadObjectReferenceFromPacket(MBObjectManager objectManager, CompressionInfo.UnsignedInteger compressionInfo, ref bool bufferReadValid)`

**用途 / Purpose:** 读取「object reference from packet」的数据或状态。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.ReadObjectReferenceFromPacket(objectManager, compressionInfo, bufferReadValid);
```

### WriteObjectReferenceToPacket
`public static void WriteObjectReferenceToPacket(MBObjectBase value, CompressionInfo.UnsignedInteger compressionInfo)`

**用途 / Purpose:** 将「object reference to packet」写入目标位置。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.WriteObjectReferenceToPacket(value, compressionInfo);
```

### ReadVirtualPlayerReferenceToPacket
`public static VirtualPlayer ReadVirtualPlayerReferenceToPacket(ref bool bufferReadValid, bool canReturnNull = false)`

**用途 / Purpose:** 读取「virtual player reference to packet」的数据或状态。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.ReadVirtualPlayerReferenceToPacket(bufferReadValid, false);
```

### ReadNetworkPeerReferenceFromPacket
`public static NetworkCommunicator ReadNetworkPeerReferenceFromPacket(ref bool bufferReadValid, bool canReturnNull = false)`

**用途 / Purpose:** 读取「network peer reference from packet」的数据或状态。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.ReadNetworkPeerReferenceFromPacket(bufferReadValid, false);
```

### WriteVirtualPlayerReferenceToPacket
`public static void WriteVirtualPlayerReferenceToPacket(VirtualPlayer virtualPlayer)`

**用途 / Purpose:** 将「virtual player reference to packet」写入目标位置。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.WriteVirtualPlayerReferenceToPacket(virtualPlayer);
```

### WriteNetworkPeerReferenceToPacket
`public static void WriteNetworkPeerReferenceToPacket(NetworkCommunicator networkCommunicator)`

**用途 / Purpose:** 将「network peer reference to packet」写入目标位置。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.WriteNetworkPeerReferenceToPacket(networkCommunicator);
```

### ReadTeamIndexFromPacket
`public static int ReadTeamIndexFromPacket(ref bool bufferReadValid)`

**用途 / Purpose:** 读取「team index from packet」的数据或状态。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.ReadTeamIndexFromPacket(bufferReadValid);
```

### WriteTeamIndexToPacket
`public static void WriteTeamIndexToPacket(int teamIndex)`

**用途 / Purpose:** 将「team index to packet」写入目标位置。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.WriteTeamIndexToPacket(0);
```

### ReadMissionObjectIdFromPacket
`public static MissionObjectId ReadMissionObjectIdFromPacket(ref bool bufferReadValid)`

**用途 / Purpose:** 读取「mission object id from packet」的数据或状态。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.ReadMissionObjectIdFromPacket(bufferReadValid);
```

### WriteMissionObjectIdToPacket
`public static void WriteMissionObjectIdToPacket(MissionObjectId value)`

**用途 / Purpose:** 将「mission object id to packet」写入目标位置。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.WriteMissionObjectIdToPacket(value);
```

### ReadVec3FromPacket
`public static Vec3 ReadVec3FromPacket(CompressionInfo.Float compressionInfo, ref bool bufferReadValid)`

**用途 / Purpose:** 读取「vec3 from packet」的数据或状态。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.ReadVec3FromPacket(compressionInfo, bufferReadValid);
```

### WriteVec3ToPacket
`public static void WriteVec3ToPacket(Vec3 value, CompressionInfo.Float compressionInfo)`

**用途 / Purpose:** 将「vec3 to packet」写入目标位置。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.WriteVec3ToPacket(value, compressionInfo);
```

### ReadVec2FromPacket
`public static Vec2 ReadVec2FromPacket(CompressionInfo.Float compressionInfo, ref bool bufferReadValid)`

**用途 / Purpose:** 读取「vec2 from packet」的数据或状态。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.ReadVec2FromPacket(compressionInfo, bufferReadValid);
```

### WriteVec2ToPacket
`public static void WriteVec2ToPacket(Vec2 value, CompressionInfo.Float compressionInfo)`

**用途 / Purpose:** 将「vec2 to packet」写入目标位置。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.WriteVec2ToPacket(value, compressionInfo);
```

### ReadRotationMatrixFromPacket
`public static Mat3 ReadRotationMatrixFromPacket(ref bool bufferReadValid)`

**用途 / Purpose:** 读取「rotation matrix from packet」的数据或状态。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.ReadRotationMatrixFromPacket(bufferReadValid);
```

### WriteRotationMatrixToPacket
`public static void WriteRotationMatrixToPacket(Mat3 value)`

**用途 / Purpose:** 将「rotation matrix to packet」写入目标位置。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.WriteRotationMatrixToPacket(value);
```

### ReadMatrixFrameFromPacket
`public static MatrixFrame ReadMatrixFrameFromPacket(ref bool bufferReadValid)`

**用途 / Purpose:** 读取「matrix frame from packet」的数据或状态。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.ReadMatrixFrameFromPacket(bufferReadValid);
```

### WriteMatrixFrameToPacket
`public static void WriteMatrixFrameToPacket(MatrixFrame frame)`

**用途 / Purpose:** 将「matrix frame to packet」写入目标位置。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.WriteMatrixFrameToPacket(frame);
```

### ReadNonUniformTransformFromPacket
`public static MatrixFrame ReadNonUniformTransformFromPacket(CompressionInfo.Float positionCompressionInfo, CompressionInfo.Float quaternionCompressionInfo, ref bool bufferReadValid)`

**用途 / Purpose:** 读取「non uniform transform from packet」的数据或状态。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.ReadNonUniformTransformFromPacket(positionCompressionInfo, quaternionCompressionInfo, bufferReadValid);
```

### WriteNonUniformTransformToPacket
`public static void WriteNonUniformTransformToPacket(MatrixFrame frame, CompressionInfo.Float positionCompressionInfo, CompressionInfo.Float quaternionCompressionInfo)`

**用途 / Purpose:** 将「non uniform transform to packet」写入目标位置。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.WriteNonUniformTransformToPacket(frame, positionCompressionInfo, quaternionCompressionInfo);
```

### ReadTransformFromPacket
`public static MatrixFrame ReadTransformFromPacket(CompressionInfo.Float positionCompressionInfo, CompressionInfo.Float quaternionCompressionInfo, ref bool bufferReadValid)`

**用途 / Purpose:** 读取「transform from packet」的数据或状态。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.ReadTransformFromPacket(positionCompressionInfo, quaternionCompressionInfo, bufferReadValid);
```

### WriteTransformToPacket
`public static void WriteTransformToPacket(MatrixFrame frame, CompressionInfo.Float positionCompressionInfo, CompressionInfo.Float quaternionCompressionInfo)`

**用途 / Purpose:** 将「transform to packet」写入目标位置。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.WriteTransformToPacket(frame, positionCompressionInfo, quaternionCompressionInfo);
```

### ReadUnitTransformFromPacket
`public static MatrixFrame ReadUnitTransformFromPacket(CompressionInfo.Float positionCompressionInfo, CompressionInfo.Float quaternionCompressionInfo, ref bool bufferReadValid)`

**用途 / Purpose:** 读取「unit transform from packet」的数据或状态。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.ReadUnitTransformFromPacket(positionCompressionInfo, quaternionCompressionInfo, bufferReadValid);
```

### WriteUnitTransformToPacket
`public static void WriteUnitTransformToPacket(MatrixFrame frame, CompressionInfo.Float positionCompressionInfo, CompressionInfo.Float quaternionCompressionInfo)`

**用途 / Purpose:** 将「unit transform to packet」写入目标位置。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.WriteUnitTransformToPacket(frame, positionCompressionInfo, quaternionCompressionInfo);
```

### ReadQuaternionFromPacket
`public static Quaternion ReadQuaternionFromPacket(CompressionInfo.Float compressionInfo, ref bool bufferReadValid)`

**用途 / Purpose:** 读取「quaternion from packet」的数据或状态。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.ReadQuaternionFromPacket(compressionInfo, bufferReadValid);
```

### WriteQuaternionToPacket
`public static void WriteQuaternionToPacket(Quaternion q, CompressionInfo.Float compressionInfo)`

**用途 / Purpose:** 将「quaternion to packet」写入目标位置。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.WriteQuaternionToPacket(q, compressionInfo);
```

### WriteBodyPropertiesToPacket
`public static void WriteBodyPropertiesToPacket(BodyProperties bodyProperties)`

**用途 / Purpose:** 将「body properties to packet」写入目标位置。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.WriteBodyPropertiesToPacket(bodyProperties);
```

### ReadBodyPropertiesFromPacket
`public static BodyProperties ReadBodyPropertiesFromPacket(ref bool bufferReadValid)`

**用途 / Purpose:** 读取「body properties from packet」的数据或状态。

```csharp
// 静态调用，不需要实例
GameNetworkMessage.ReadBodyPropertiesFromPacket(bufferReadValid);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
GameNetworkMessage instance = ...;
```

## 参见

- [本区域目录](../)