---
title: "GameNetworkMessage"
description: "GameNetworkMessage：TaleWorlds.MountAndBlade 的 public 类；公开成员 60 个（方法 56、属性 2、字段 0）。源文件 TaleWorlds.MountAndBlade/Network/Messages/GameNetworkMessage.cs。"
---
# GameNetworkMessage

**Namespace:** `TaleWorlds.MountAndBlade.Network.Messages`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class GameNetworkMessage`
**File:** `TaleWorlds.MountAndBlade/Network/Messages/GameNetworkMessage.cs`

## 概述

GameNetworkMessage 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/Network/Messages/GameNetworkMessage.cs。它是一个 public 类（abstract），继承链为 GameNetworkMessage。public/protected 成员共 60 个：56 方法、2 属性、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameNetworkMessage 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.Network.Messages），继承链 GameNetworkMessage。成员构成以方法为主（方法 56/60，属性 2/60），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/Network/Messages/GameNetworkMessage.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MessageId` | `public int MessageId` | 属性 |
| `OnWrite` | `protected abstract void OnWrite();` | 方法 |
| `OnRead` | `protected abstract bool OnRead();` | 方法 |
| `OnGetLogFilter` | `protected abstract MultiplayerMessageFilter OnGetLogFilter();` | 方法 |
| `OnGetLogFormat` | `protected abstract string OnGetLogFormat();` | 方法 |
| `IsClientMissionOver` | `public static bool IsClientMissionOver` | 属性 |
| `ReadBoolFromPacket` | `public static bool ReadBoolFromPacket(ref bool bufferReadValid)` | 方法 |
| `WriteBoolToPacket` | `public static void WriteBoolToPacket(bool value)` | 方法 |
| `ReadIntFromPacket` | `public static int ReadIntFromPacket(CompressionInfo.Integer compressionInfo, ref bool bufferReadValid)` | 方法 |
| `WriteIntToPacket` | `public static void WriteIntToPacket(int value, CompressionInfo.Integer compressionInfo)` | 方法 |
| `ReadUintFromPacket` | `public static uint ReadUintFromPacket(CompressionInfo.UnsignedInteger compressionInfo, ref bool bufferReadValid)` | 方法 |
| `WriteUintToPacket` | `public static void WriteUintToPacket(uint value, CompressionInfo.UnsignedInteger compressionInfo)` | 方法 |
| `ReadLongFromPacket` | `public static long ReadLongFromPacket(CompressionInfo.LongInteger compressionInfo, ref bool bufferReadValid)` | 方法 |
| `WriteLongToPacket` | `public static void WriteLongToPacket(long value, CompressionInfo.LongInteger compressionInfo)` | 方法 |
| `ReadUlongFromPacket` | `public static ulong ReadUlongFromPacket(CompressionInfo.UnsignedLongInteger compressionInfo, ref bool bufferReadValid)` | 方法 |
| `WriteUlongToPacket` | `public static void WriteUlongToPacket(ulong value, CompressionInfo.UnsignedLongInteger compressionInfo)` | 方法 |
| `ReadFloatFromPacket` | `public static float ReadFloatFromPacket(CompressionInfo.Float compressionInfo, ref bool bufferReadValid)` | 方法 |
| `WriteFloatToPacket` | `public static void WriteFloatToPacket(float value, CompressionInfo.Float compressionInfo)` | 方法 |
| `ReadStringFromPacket` | `public static string ReadStringFromPacket(ref bool bufferReadValid)` | 方法 |
| `WriteStringToPacket` | `public static void WriteStringToPacket(string value)` | 方法 |
| `ReadByteArrayFromPacket` | `public static int ReadByteArrayFromPacket(byte[]buffer, int offset, int bufferCapacity, ref bool bufferReadValid)` | 方法 |
| `WriteBannerCodeToPacket` | `public static void WriteBannerCodeToPacket(string bannerCode)` | 方法 |
| `ReadBannerCodeFromPacket` | `public static string ReadBannerCodeFromPacket(ref bool bufferReadValid)` | 方法 |
| `WriteByteArrayToPacket` | `public static void WriteByteArrayToPacket(byte[]value, int offset, int size)` | 方法 |
| `ReadActionSetReferenceFromPacket` | `public static MBActionSet ReadActionSetReferenceFromPacket(CompressionInfo.Integer compressionInfo, ref bool bufferReadValid)` | 方法 |
| `WriteActionSetReferenceToPacket` | `public static void WriteActionSetReferenceToPacket(MBActionSet actionSet, CompressionInfo.Integer compressionInfo)` | 方法 |
| `ReadAgentIndexFromPacket` | `public static int ReadAgentIndexFromPacket(ref bool bufferReadValid)` | 方法 |
| `WriteAgentIndexToPacket` | `public static void WriteAgentIndexToPacket(int agentIndex)` | 方法 |
| `ReadObjectReferenceFromPacket` | `public static MBObjectBase ReadObjectReferenceFromPacket(MBObjectManager objectManager, CompressionInfo.UnsignedInteger compressionInfo, ref bool bufferReadValid)` | 方法 |
| `WriteObjectReferenceToPacket` | `public static void WriteObjectReferenceToPacket(MBObjectBase value, CompressionInfo.UnsignedInteger compressionInfo)` | 方法 |
| `ReadVirtualPlayerReferenceToPacket` | `public static VirtualPlayer ReadVirtualPlayerReferenceToPacket(ref bool bufferReadValid, bool canReturnNull = false)` | 方法 |
| `ReadNetworkPeerReferenceFromPacket` | `public static NetworkCommunicator ReadNetworkPeerReferenceFromPacket(ref bool bufferReadValid, bool canReturnNull = false)` | 方法 |
| `WriteVirtualPlayerReferenceToPacket` | `public static void WriteVirtualPlayerReferenceToPacket(VirtualPlayer virtualPlayer)` | 方法 |
| `WriteNetworkPeerReferenceToPacket` | `public static void WriteNetworkPeerReferenceToPacket(NetworkCommunicator networkCommunicator)` | 方法 |
| `ReadTeamIndexFromPacket` | `public static int ReadTeamIndexFromPacket(ref bool bufferReadValid)` | 方法 |
| `WriteTeamIndexToPacket` | `public static void WriteTeamIndexToPacket(int teamIndex)` | 方法 |
| `ReadMissionObjectIdFromPacket` | `public static MissionObjectId ReadMissionObjectIdFromPacket(ref bool bufferReadValid)` | 方法 |
| `WriteMissionObjectIdToPacket` | `public static void WriteMissionObjectIdToPacket(MissionObjectId value)` | 方法 |
| `ReadVec3FromPacket` | `public static Vec3 ReadVec3FromPacket(CompressionInfo.Float compressionInfo, ref bool bufferReadValid)` | 方法 |
| `WriteVec3ToPacket` | `public static void WriteVec3ToPacket(Vec3 value, CompressionInfo.Float compressionInfo)` | 方法 |
| `ReadVec2FromPacket` | `public static Vec2 ReadVec2FromPacket(CompressionInfo.Float compressionInfo, ref bool bufferReadValid)` | 方法 |
| `WriteVec2ToPacket` | `public static void WriteVec2ToPacket(Vec2 value, CompressionInfo.Float compressionInfo)` | 方法 |
| `ReadRotationMatrixFromPacket` | `public static Mat3 ReadRotationMatrixFromPacket(ref bool bufferReadValid)` | 方法 |
| `WriteRotationMatrixToPacket` | `public static void WriteRotationMatrixToPacket(Mat3 value)` | 方法 |
| `ReadMatrixFrameFromPacket` | `public static MatrixFrame ReadMatrixFrameFromPacket(ref bool bufferReadValid)` | 方法 |
| `WriteMatrixFrameToPacket` | `public static void WriteMatrixFrameToPacket(MatrixFrame frame)` | 方法 |
| `ReadNonUniformTransformFromPacket` | `public static MatrixFrame ReadNonUniformTransformFromPacket(CompressionInfo.Float positionCompressionInfo, CompressionInfo.Float quaternionCompressionInfo, ref bool bufferReadValid)` | 方法 |
| `WriteNonUniformTransformToPacket` | `public static void WriteNonUniformTransformToPacket(MatrixFrame frame, CompressionInfo.Float positionCompressionInfo, CompressionInfo.Float quaternionCompressionInfo)` | 方法 |
| `ReadTransformFromPacket` | `public static MatrixFrame ReadTransformFromPacket(CompressionInfo.Float positionCompressionInfo, CompressionInfo.Float quaternionCompressionInfo, ref bool bufferReadValid)` | 方法 |
| `WriteTransformToPacket` | `public static void WriteTransformToPacket(MatrixFrame frame, CompressionInfo.Float positionCompressionInfo, CompressionInfo.Float quaternionCompressionInfo)` | 方法 |
| `ReadUnitTransformFromPacket` | `public static MatrixFrame ReadUnitTransformFromPacket(CompressionInfo.Float positionCompressionInfo, CompressionInfo.Float quaternionCompressionInfo, ref bool bufferReadValid)` | 方法 |
| `WriteUnitTransformToPacket` | `public static void WriteUnitTransformToPacket(MatrixFrame frame, CompressionInfo.Float positionCompressionInfo, CompressionInfo.Float quaternionCompressionInfo)` | 方法 |
| `ReadQuaternionFromPacket` | `public static Quaternion ReadQuaternionFromPacket(CompressionInfo.Float compressionInfo, ref bool bufferReadValid)` | 方法 |
| `WriteQuaternionToPacket` | `public static void WriteQuaternionToPacket(Quaternion q, CompressionInfo.Float compressionInfo)` | 方法 |
| `WriteBodyPropertiesToPacket` | `public static void WriteBodyPropertiesToPacket(BodyProperties bodyProperties)` | 方法 |
| `ReadBodyPropertiesFromPacket` | `public static BodyProperties ReadBodyPropertiesFromPacket(ref bool bufferReadValid)` | 方法 |
| `ClientMessageHandlerDelegate` | `public delegate bool ClientMessageHandlerDelegate<T>(NetworkCommunicator peer, T message) where T : GameNetworkMessage;` | 方法 |
| `ServerMessageHandlerDelegate` | `public delegate void ServerMessageHandlerDelegate<T>(T message) where T : GameNetworkMessage;` | 方法 |
| `ClientMessageHandlerDelegate` | `public delegate bool ClientMessageHandlerDelegate<T>(NetworkCommunicator peer, T message) where T : GameNetworkMessage` | 嵌套类型 |
| `ServerMessageHandlerDelegate` | `public delegate void ServerMessageHandlerDelegate<T>(T message) where T : GameNetworkMessage` | 嵌套类型 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CreatePlayer](../CreatePlayer)
- [同命名空间 DeletePlayer](../DeletePlayer)
