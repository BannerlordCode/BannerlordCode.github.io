---
title: "GameNetworkMessage"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameNetworkMessage`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameNetworkMessage

**命名空间:** TaleWorlds.MountAndBlade.Network.Messages
**模块:** TaleWorlds.MountAndBlade
**类型:** `public abstract class GameNetworkMessage`
**领域:** mission-ext

## 概述

`GameNetworkMessage` 位于 `TaleWorlds.MountAndBlade.Network.Messages`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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

## 使用示例

```csharp
var implementation = new CustomGameNetworkMessage();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
