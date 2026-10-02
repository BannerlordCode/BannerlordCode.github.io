---
title: "GameNetworkMessage"
description: "GameNetworkMessage: a public class in TaleWorlds.MountAndBlade.Network.Messages; 60 exposed members (56 methods, 2 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/Network/Messages/GameNetworkMessage.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameNetworkMessage

**Namespace:** `TaleWorlds.MountAndBlade.Network.Messages`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class GameNetworkMessage`
**File:** `TaleWorlds.MountAndBlade/Network/Messages/GameNetworkMessage.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

GameNetworkMessage lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Network/Messages/GameNetworkMessage.cs. It is a public class (abstract); the inheritance chain is GameNetworkMessage. It exposes 60 public/protected members: 56 methods, 2 properties, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameNetworkMessage lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Network.Messages`, inheritance chain GameNetworkMessage. The surface is method-led (methods 56/60, properties 2/60), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Network/Messages/GameNetworkMessage.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MessageId` | `public int MessageId` | property |
| `OnWrite` | `protected abstract void OnWrite();` | method |
| `OnRead` | `protected abstract bool OnRead();` | method |
| `OnGetLogFilter` | `protected abstract MultiplayerMessageFilter OnGetLogFilter();` | method |
| `OnGetLogFormat` | `protected abstract string OnGetLogFormat();` | method |
| `IsClientMissionOver` | `public static bool IsClientMissionOver` | property |
| `ReadBoolFromPacket` | `public static bool ReadBoolFromPacket(ref bool bufferReadValid)` | method |
| `WriteBoolToPacket` | `public static void WriteBoolToPacket(bool value)` | method |
| `ReadIntFromPacket` | `public static int ReadIntFromPacket(CompressionInfo.Integer compressionInfo, ref bool bufferReadValid)` | method |
| `WriteIntToPacket` | `public static void WriteIntToPacket(int value, CompressionInfo.Integer compressionInfo)` | method |
| `ReadUintFromPacket` | `public static uint ReadUintFromPacket(CompressionInfo.UnsignedInteger compressionInfo, ref bool bufferReadValid)` | method |
| `WriteUintToPacket` | `public static void WriteUintToPacket(uint value, CompressionInfo.UnsignedInteger compressionInfo)` | method |
| `ReadLongFromPacket` | `public static long ReadLongFromPacket(CompressionInfo.LongInteger compressionInfo, ref bool bufferReadValid)` | method |
| `WriteLongToPacket` | `public static void WriteLongToPacket(long value, CompressionInfo.LongInteger compressionInfo)` | method |
| `ReadUlongFromPacket` | `public static ulong ReadUlongFromPacket(CompressionInfo.UnsignedLongInteger compressionInfo, ref bool bufferReadValid)` | method |
| `WriteUlongToPacket` | `public static void WriteUlongToPacket(ulong value, CompressionInfo.UnsignedLongInteger compressionInfo)` | method |
| `ReadFloatFromPacket` | `public static float ReadFloatFromPacket(CompressionInfo.Float compressionInfo, ref bool bufferReadValid)` | method |
| `WriteFloatToPacket` | `public static void WriteFloatToPacket(float value, CompressionInfo.Float compressionInfo)` | method |
| `ReadStringFromPacket` | `public static string ReadStringFromPacket(ref bool bufferReadValid)` | method |
| `WriteStringToPacket` | `public static void WriteStringToPacket(string value)` | method |
| `ReadByteArrayFromPacket` | `public static int ReadByteArrayFromPacket(byte[]buffer, int offset, int bufferCapacity, ref bool bufferReadValid)` | method |
| `WriteBannerCodeToPacket` | `public static void WriteBannerCodeToPacket(string bannerCode)` | method |
| `ReadBannerCodeFromPacket` | `public static string ReadBannerCodeFromPacket(ref bool bufferReadValid)` | method |
| `WriteByteArrayToPacket` | `public static void WriteByteArrayToPacket(byte[]value, int offset, int size)` | method |
| `ReadActionSetReferenceFromPacket` | `public static MBActionSet ReadActionSetReferenceFromPacket(CompressionInfo.Integer compressionInfo, ref bool bufferReadValid)` | method |
| `WriteActionSetReferenceToPacket` | `public static void WriteActionSetReferenceToPacket(MBActionSet actionSet, CompressionInfo.Integer compressionInfo)` | method |
| `ReadAgentIndexFromPacket` | `public static int ReadAgentIndexFromPacket(ref bool bufferReadValid)` | method |
| `WriteAgentIndexToPacket` | `public static void WriteAgentIndexToPacket(int agentIndex)` | method |
| `ReadObjectReferenceFromPacket` | `public static MBObjectBase ReadObjectReferenceFromPacket(MBObjectManager objectManager, CompressionInfo.UnsignedInteger compressionInfo, ref bool bufferReadValid)` | method |
| `WriteObjectReferenceToPacket` | `public static void WriteObjectReferenceToPacket(MBObjectBase value, CompressionInfo.UnsignedInteger compressionInfo)` | method |
| `ReadVirtualPlayerReferenceToPacket` | `public static VirtualPlayer ReadVirtualPlayerReferenceToPacket(ref bool bufferReadValid, bool canReturnNull = false)` | method |
| `ReadNetworkPeerReferenceFromPacket` | `public static NetworkCommunicator ReadNetworkPeerReferenceFromPacket(ref bool bufferReadValid, bool canReturnNull = false)` | method |
| `WriteVirtualPlayerReferenceToPacket` | `public static void WriteVirtualPlayerReferenceToPacket(VirtualPlayer virtualPlayer)` | method |
| `WriteNetworkPeerReferenceToPacket` | `public static void WriteNetworkPeerReferenceToPacket(NetworkCommunicator networkCommunicator)` | method |
| `ReadTeamIndexFromPacket` | `public static int ReadTeamIndexFromPacket(ref bool bufferReadValid)` | method |
| `WriteTeamIndexToPacket` | `public static void WriteTeamIndexToPacket(int teamIndex)` | method |
| `ReadMissionObjectIdFromPacket` | `public static MissionObjectId ReadMissionObjectIdFromPacket(ref bool bufferReadValid)` | method |
| `WriteMissionObjectIdToPacket` | `public static void WriteMissionObjectIdToPacket(MissionObjectId value)` | method |
| `ReadVec3FromPacket` | `public static Vec3 ReadVec3FromPacket(CompressionInfo.Float compressionInfo, ref bool bufferReadValid)` | method |
| `WriteVec3ToPacket` | `public static void WriteVec3ToPacket(Vec3 value, CompressionInfo.Float compressionInfo)` | method |
| `ReadVec2FromPacket` | `public static Vec2 ReadVec2FromPacket(CompressionInfo.Float compressionInfo, ref bool bufferReadValid)` | method |
| `WriteVec2ToPacket` | `public static void WriteVec2ToPacket(Vec2 value, CompressionInfo.Float compressionInfo)` | method |
| `ReadRotationMatrixFromPacket` | `public static Mat3 ReadRotationMatrixFromPacket(ref bool bufferReadValid)` | method |
| `WriteRotationMatrixToPacket` | `public static void WriteRotationMatrixToPacket(Mat3 value)` | method |
| `ReadMatrixFrameFromPacket` | `public static MatrixFrame ReadMatrixFrameFromPacket(ref bool bufferReadValid)` | method |
| `WriteMatrixFrameToPacket` | `public static void WriteMatrixFrameToPacket(MatrixFrame frame)` | method |
| `ReadNonUniformTransformFromPacket` | `public static MatrixFrame ReadNonUniformTransformFromPacket(CompressionInfo.Float positionCompressionInfo, CompressionInfo.Float quaternionCompressionInfo, ref bool bufferReadValid)` | method |
| `WriteNonUniformTransformToPacket` | `public static void WriteNonUniformTransformToPacket(MatrixFrame frame, CompressionInfo.Float positionCompressionInfo, CompressionInfo.Float quaternionCompressionInfo)` | method |
| `ReadTransformFromPacket` | `public static MatrixFrame ReadTransformFromPacket(CompressionInfo.Float positionCompressionInfo, CompressionInfo.Float quaternionCompressionInfo, ref bool bufferReadValid)` | method |
| `WriteTransformToPacket` | `public static void WriteTransformToPacket(MatrixFrame frame, CompressionInfo.Float positionCompressionInfo, CompressionInfo.Float quaternionCompressionInfo)` | method |
| `ReadUnitTransformFromPacket` | `public static MatrixFrame ReadUnitTransformFromPacket(CompressionInfo.Float positionCompressionInfo, CompressionInfo.Float quaternionCompressionInfo, ref bool bufferReadValid)` | method |
| `WriteUnitTransformToPacket` | `public static void WriteUnitTransformToPacket(MatrixFrame frame, CompressionInfo.Float positionCompressionInfo, CompressionInfo.Float quaternionCompressionInfo)` | method |
| `ReadQuaternionFromPacket` | `public static Quaternion ReadQuaternionFromPacket(CompressionInfo.Float compressionInfo, ref bool bufferReadValid)` | method |
| `WriteQuaternionToPacket` | `public static void WriteQuaternionToPacket(Quaternion q, CompressionInfo.Float compressionInfo)` | method |
| `WriteBodyPropertiesToPacket` | `public static void WriteBodyPropertiesToPacket(BodyProperties bodyProperties)` | method |
| `ReadBodyPropertiesFromPacket` | `public static BodyProperties ReadBodyPropertiesFromPacket(ref bool bufferReadValid)` | method |
| `ClientMessageHandlerDelegate` | `public delegate bool ClientMessageHandlerDelegate<T>(NetworkCommunicator peer, T message) where T : GameNetworkMessage;` | method |
| `ServerMessageHandlerDelegate` | `public delegate void ServerMessageHandlerDelegate<T>(T message) where T : GameNetworkMessage;` | method |
| `ClientMessageHandlerDelegate` | `public delegate bool ClientMessageHandlerDelegate<T>(NetworkCommunicator peer, T message) where T : GameNetworkMessage` | nested type |
| `ServerMessageHandlerDelegate` | `public delegate void ServerMessageHandlerDelegate<T>(T message) where T : GameNetworkMessage` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CreatePlayer](../CreatePlayer/)
- [same namespace DeletePlayer](../DeletePlayer/)
