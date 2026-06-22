<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameNetworkMessage`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameNetworkMessage

**命名空间:** TaleWorlds.MountAndBlade.Network.Messages
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`GameNetworkMessage` 是 `TaleWorlds.MountAndBlade.Network.Messages` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `MessageId` | `public int MessageId { get; set; }` |
| `IsClientMissionOver` | `public static bool IsClientMissionOver { get; }` |


## 主要方法

### ReadBoolFromPacket

```csharp
public static bool ReadBoolFromPacket(ref bool bufferReadValid)
```

### WriteBoolToPacket

```csharp
public static void WriteBoolToPacket(bool value)
```

### ReadIntFromPacket

```csharp
public static int ReadIntFromPacket(CompressionInfo.Integer compressionInfo, ref bool bufferReadValid)
```

### WriteIntToPacket

```csharp
public static void WriteIntToPacket(int value, CompressionInfo.Integer compressionInfo)
```

### ReadUintFromPacket

```csharp
public static uint ReadUintFromPacket(CompressionInfo.UnsignedInteger compressionInfo, ref bool bufferReadValid)
```

### WriteUintToPacket

```csharp
public static void WriteUintToPacket(uint value, CompressionInfo.UnsignedInteger compressionInfo)
```

### ReadLongFromPacket

```csharp
public static long ReadLongFromPacket(CompressionInfo.LongInteger compressionInfo, ref bool bufferReadValid)
```

### WriteLongToPacket

```csharp
public static void WriteLongToPacket(long value, CompressionInfo.LongInteger compressionInfo)
```

### ReadUlongFromPacket

```csharp
public static ulong ReadUlongFromPacket(CompressionInfo.UnsignedLongInteger compressionInfo, ref bool bufferReadValid)
```

### WriteUlongToPacket

```csharp
public static void WriteUlongToPacket(ulong value, CompressionInfo.UnsignedLongInteger compressionInfo)
```

### ReadFloatFromPacket

```csharp
public static float ReadFloatFromPacket(CompressionInfo.Float compressionInfo, ref bool bufferReadValid)
```

### WriteFloatToPacket

```csharp
public static void WriteFloatToPacket(float value, CompressionInfo.Float compressionInfo)
```

### ReadStringFromPacket

```csharp
public static string ReadStringFromPacket(ref bool bufferReadValid)
```

### WriteStringToPacket

```csharp
public static void WriteStringToPacket(string value)
```

### ReadByteArrayFromPacket

```csharp
public static int ReadByteArrayFromPacket(byte buffer, int offset, int bufferCapacity, ref bool bufferReadValid)
```

### WriteBannerCodeToPacket

```csharp
public static void WriteBannerCodeToPacket(string bannerCode)
```

### ReadBannerCodeFromPacket

```csharp
public static string ReadBannerCodeFromPacket(ref bool bufferReadValid)
```

### WriteByteArrayToPacket

```csharp
public static void WriteByteArrayToPacket(byte value, int offset, int size)
```

### ReadActionSetReferenceFromPacket

```csharp
public static MBActionSet ReadActionSetReferenceFromPacket(CompressionInfo.Integer compressionInfo, ref bool bufferReadValid)
```

### WriteActionSetReferenceToPacket

```csharp
public static void WriteActionSetReferenceToPacket(MBActionSet actionSet, CompressionInfo.Integer compressionInfo)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)