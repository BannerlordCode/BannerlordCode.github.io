<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameNetworkMessage`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameNetworkMessage

**Namespace:** TaleWorlds.MountAndBlade.Network.Messages
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class GameNetworkMessage`
**Area:** mission-ext

## Overview

`GameNetworkMessage` lives in `TaleWorlds.MountAndBlade.Network.Messages`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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

## Usage Example

```csharp
var implementation = new CustomGameNetworkMessage();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
