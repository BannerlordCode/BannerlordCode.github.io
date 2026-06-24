<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NetworkMessage`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# NetworkMessage

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public class NetworkMessage : INetworkMessageWriter, INetworkMessageReader`
**Base:** `INetworkMessageWriter`
**File:** `Bannerlord.Source/bin/TaleWorlds.Network/TaleWorlds.Network/NetworkMessage.cs`

## Overview

`NetworkMessage` lives in `TaleWorlds.Network` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Network` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Write
`public void Write(string data)`

**Purpose:** Handles logic related to `write`.

### Write
`public void Write(int data)`

**Purpose:** Handles logic related to `write`.

### Write
`public void Write(short data)`

**Purpose:** Handles logic related to `write`.

### Write
`public void Write(bool data)`

**Purpose:** Handles logic related to `write`.

### Write
`public void Write(byte data)`

**Purpose:** Handles logic related to `write`.

### Write
`public void Write(float data)`

**Purpose:** Handles logic related to `write`.

### Write
`public void Write(long data)`

**Purpose:** Handles logic related to `write`.

### Write
`public void Write(ulong data)`

**Purpose:** Handles logic related to `write`.

### Write
`public void Write(Guid data)`

**Purpose:** Handles logic related to `write`.

### Write
`public void Write(byte data)`

**Purpose:** Handles logic related to `write`.

### ReadInt32
`public int ReadInt32()`

**Purpose:** Handles logic related to `read int32`.

### ReadInt16
`public short ReadInt16()`

**Purpose:** Handles logic related to `read int16`.

### ReadBoolean
`public bool ReadBoolean()`

**Purpose:** Handles logic related to `read boolean`.

### ReadByte
`public byte ReadByte()`

**Purpose:** Handles logic related to `read byte`.

### ReadString
`public string ReadString()`

**Purpose:** Handles logic related to `read string`.

### ReadFloat
`public float ReadFloat()`

**Purpose:** Handles logic related to `read float`.

### ReadInt64
`public long ReadInt64()`

**Purpose:** Handles logic related to `read int64`.

### ReadUInt64
`public ulong ReadUInt64()`

**Purpose:** Handles logic related to `read u int64`.

### ReadGuid
`public Guid ReadGuid()`

**Purpose:** Handles logic related to `read guid`.

### ReadByteArray
`public byte ReadByteArray()`

**Purpose:** Handles logic related to `read byte array`.

## Usage Example

```csharp
var value = new NetworkMessage();
value.Write("example");
```

## See Also

- [Complete Class Catalog](../catalog)