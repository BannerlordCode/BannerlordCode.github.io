---
title: "GameNetworkMessage"
description: "GameNetworkMessage 的自动生成类参考。"
---
# GameNetworkMessage

**Namespace:** TaleWorlds.MountAndBlade.Network.Messages
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class GameNetworkMessage `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/Network/Messages/GameNetworkMessage.cs

## 概述

`GameNetworkMessage` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/Network/Messages/GameNetworkMessage.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### OnWrite
`protected abstract void OnWrite()`

### OnRead
`protected abstract bool OnRead()`

### OnGetLogFilter
`protected abstract MultiplayerMessageFilter OnGetLogFilter()`

### OnGetLogFormat
`protected abstract string OnGetLogFormat()`

### ReadBoolFromPacket
`public static bool ReadBoolFromPacket(ref bool bufferReadValid) `

### WriteBoolToPacket
`public static void WriteBoolToPacket(bool value) `

### ReadIntFromPacket
`public static int ReadIntFromPacket(CompressionInfo.Integer compressionInfo,ref bool bufferReadValid) `

### WriteIntToPacket
`public static void WriteIntToPacket(int value,CompressionInfo.Integer compressionInfo) `

### ReadUintFromPacket
`public static uint ReadUintFromPacket(CompressionInfo.UnsignedInteger compressionInfo,ref bool bufferReadValid) `

### WriteUintToPacket
`public static void WriteUintToPacket(uint value,CompressionInfo.UnsignedInteger compressionInfo) `

### ReadLongFromPacket
`public static long ReadLongFromPacket(CompressionInfo.LongInteger compressionInfo,ref bool bufferReadValid) `

### WriteLongToPacket
`public static void WriteLongToPacket(long value,CompressionInfo.LongInteger compressionInfo) `

### ReadUlongFromPacket
`public static ulong ReadUlongFromPacket(CompressionInfo.UnsignedLongInteger compressionInfo,ref bool bufferReadValid) `

### WriteUlongToPacket
`public static void WriteUlongToPacket(ulong value,CompressionInfo.UnsignedLongInteger compressionInfo) `

### ReadFloatFromPacket
`public static float ReadFloatFromPacket(CompressionInfo.Float compressionInfo,ref bool bufferReadValid) `

### WriteFloatToPacket
`public static void WriteFloatToPacket(float value,CompressionInfo.Float compressionInfo) `

### ReadStringFromPacket
`public static string ReadStringFromPacket(ref bool bufferReadValid) `

### WriteStringToPacket
`public static void WriteStringToPacket(string value) `

### ReadByteArrayFromPacket
`public static int ReadByteArrayFromPacket(byte[] buffer,int offset,int bufferCapacity,ref bool bufferReadValid) `

### WriteBannerCodeToPacket
`public static void WriteBannerCodeToPacket(string bannerCode) `

### ReadBannerCodeFromPacket
`public static string ReadBannerCodeFromPacket(ref bool bufferReadValid) `

### WriteByteArrayToPacket
`public static void WriteByteArrayToPacket(byte[] value,int offset,int size) `

### ReadActionSetReferenceFromPacket
`public static MBActionSet ReadActionSetReferenceFromPacket(CompressionInfo.Integer compressionInfo,ref bool bufferReadValid) `

### WriteActionSetReferenceToPacket
`public static void WriteActionSetReferenceToPacket(MBActionSet actionSet,CompressionInfo.Integer compressionInfo) `

### ReadAgentIndexFromPacket
`public static int ReadAgentIndexFromPacket(ref bool bufferReadValid) `

### WriteAgentIndexToPacket
`public static void WriteAgentIndexToPacket(int agentIndex) `

### ReadObjectReferenceFromPacket
`public static MBObjectBase ReadObjectReferenceFromPacket(MBObjectManager objectManager,CompressionInfo.UnsignedInteger compressionInfo,ref bool bufferReadValid) `

### WriteObjectReferenceToPacket
`public static void WriteObjectReferenceToPacket(MBObjectBase value,CompressionInfo.UnsignedInteger compressionInfo) `

### ReadVirtualPlayerReferenceToPacket
`public static VirtualPlayer ReadVirtualPlayerReferenceToPacket(ref bool bufferReadValid,bool canReturnNull = false) `

### ReadNetworkPeerReferenceFromPacket
`public static NetworkCommunicator ReadNetworkPeerReferenceFromPacket(ref bool bufferReadValid,bool canReturnNull = false) `

### WriteVirtualPlayerReferenceToPacket
`public static void WriteVirtualPlayerReferenceToPacket(VirtualPlayer virtualPlayer) `

### WriteNetworkPeerReferenceToPacket
`public static void WriteNetworkPeerReferenceToPacket(NetworkCommunicator networkCommunicator) `

### ReadTeamIndexFromPacket
`public static int ReadTeamIndexFromPacket(ref bool bufferReadValid) `

### WriteTeamIndexToPacket
`public static void WriteTeamIndexToPacket(int teamIndex) `

### ReadMissionObjectIdFromPacket
`public static MissionObjectId ReadMissionObjectIdFromPacket(ref bool bufferReadValid) `

### WriteMissionObjectIdToPacket
`public static void WriteMissionObjectIdToPacket(MissionObjectId value) `

### ReadVec3FromPacket
`public static Vec3 ReadVec3FromPacket(CompressionInfo.Float compressionInfo,ref bool bufferReadValid) `

### WriteVec3ToPacket
`public static void WriteVec3ToPacket(Vec3 value,CompressionInfo.Float compressionInfo) `

### ReadVec2FromPacket
`public static Vec2 ReadVec2FromPacket(CompressionInfo.Float compressionInfo,ref bool bufferReadValid) `

### WriteVec2ToPacket
`public static void WriteVec2ToPacket(Vec2 value,CompressionInfo.Float compressionInfo) `

### ReadRotationMatrixFromPacket
`public static Mat3 ReadRotationMatrixFromPacket(ref bool bufferReadValid) `

### WriteRotationMatrixToPacket
`public static void WriteRotationMatrixToPacket(Mat3 value) `

### ReadMatrixFrameFromPacket
`public static MatrixFrame ReadMatrixFrameFromPacket(ref bool bufferReadValid) `

### WriteMatrixFrameToPacket
`public static void WriteMatrixFrameToPacket(MatrixFrame frame) `

### ReadNonUniformTransformFromPacket
`public static MatrixFrame ReadNonUniformTransformFromPacket(CompressionInfo.Float positionCompressionInfo,CompressionInfo.Float quaternionCompressionInfo,ref bool bufferReadValid) `

### WriteNonUniformTransformToPacket
`public static void WriteNonUniformTransformToPacket(MatrixFrame frame,CompressionInfo.Float positionCompressionInfo,CompressionInfo.Float quaternionCompressionInfo) `

### ReadTransformFromPacket
`public static MatrixFrame ReadTransformFromPacket(CompressionInfo.Float positionCompressionInfo,CompressionInfo.Float quaternionCompressionInfo,ref bool bufferReadValid) `

### WriteTransformToPacket
`public static void WriteTransformToPacket(MatrixFrame frame,CompressionInfo.Float positionCompressionInfo,CompressionInfo.Float quaternionCompressionInfo) `

### ReadUnitTransformFromPacket
`public static MatrixFrame ReadUnitTransformFromPacket(CompressionInfo.Float positionCompressionInfo,CompressionInfo.Float quaternionCompressionInfo,ref bool bufferReadValid) `

### WriteUnitTransformToPacket
`public static void WriteUnitTransformToPacket(MatrixFrame frame,CompressionInfo.Float positionCompressionInfo,CompressionInfo.Float quaternionCompressionInfo) `

### ReadQuaternionFromPacket
`public static Quaternion ReadQuaternionFromPacket(CompressionInfo.Float compressionInfo,ref bool bufferReadValid) `

### WriteQuaternionToPacket
`public static void WriteQuaternionToPacket(Quaternion q,CompressionInfo.Float compressionInfo) `

### WriteBodyPropertiesToPacket
`public static void WriteBodyPropertiesToPacket(BodyProperties bodyProperties) `

### ReadBodyPropertiesFromPacket
`public static BodyProperties ReadBodyPropertiesFromPacket(ref bool bufferReadValid) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
