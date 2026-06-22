<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameNetworkMessage`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameNetworkMessage

**Namespace:** TaleWorlds.MountAndBlade.Network.Messages
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `GameNetworkMessage` is a class in the `TaleWorlds.MountAndBlade.Network.Messages` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `MessageId` | `public int MessageId { get; set; }` |
| `IsClientMissionOver` | `public static bool IsClientMissionOver { get; }` |


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)