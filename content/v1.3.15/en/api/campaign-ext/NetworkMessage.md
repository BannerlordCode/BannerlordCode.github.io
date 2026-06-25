---
title: "NetworkMessage"
description: "Auto-generated class reference for NetworkMessage."
---
# NetworkMessage

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public class NetworkMessage : INetworkMessageWriter, INetworkMessageReader`
**Base:** `INetworkMessageWriter`
**File:** `TaleWorlds.Network/NetworkMessage.cs`

## Overview

`NetworkMessage` lives in `TaleWorlds.Network` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Network` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Write
`public void Write(string data)`

**Purpose:** **Purpose:** Writes the this instance's data to the target location.

```csharp
// Obtain an instance of NetworkMessage from the subsystem API first
NetworkMessage networkMessage = ...;
networkMessage.Write("example");
```

### Write
`public void Write(int data)`

**Purpose:** **Purpose:** Writes the this instance's data to the target location.

```csharp
// Obtain an instance of NetworkMessage from the subsystem API first
NetworkMessage networkMessage = ...;
networkMessage.Write(0);
```

### Write
`public void Write(short data)`

**Purpose:** **Purpose:** Writes the this instance's data to the target location.

```csharp
// Obtain an instance of NetworkMessage from the subsystem API first
NetworkMessage networkMessage = ...;
networkMessage.Write(0);
```

### Write
`public void Write(bool data)`

**Purpose:** **Purpose:** Writes the this instance's data to the target location.

```csharp
// Obtain an instance of NetworkMessage from the subsystem API first
NetworkMessage networkMessage = ...;
networkMessage.Write(false);
```

### Write
`public void Write(byte data)`

**Purpose:** **Purpose:** Writes the this instance's data to the target location.

```csharp
// Obtain an instance of NetworkMessage from the subsystem API first
NetworkMessage networkMessage = ...;
networkMessage.Write(0);
```

### Write
`public void Write(float data)`

**Purpose:** **Purpose:** Writes the this instance's data to the target location.

```csharp
// Obtain an instance of NetworkMessage from the subsystem API first
NetworkMessage networkMessage = ...;
networkMessage.Write(0);
```

### Write
`public void Write(long data)`

**Purpose:** **Purpose:** Writes the this instance's data to the target location.

```csharp
// Obtain an instance of NetworkMessage from the subsystem API first
NetworkMessage networkMessage = ...;
networkMessage.Write(0);
```

### Write
`public void Write(ulong data)`

**Purpose:** **Purpose:** Writes the this instance's data to the target location.

```csharp
// Obtain an instance of NetworkMessage from the subsystem API first
NetworkMessage networkMessage = ...;
networkMessage.Write(0);
```

### Write
`public void Write(Guid data)`

**Purpose:** **Purpose:** Writes the this instance's data to the target location.

```csharp
// Obtain an instance of NetworkMessage from the subsystem API first
NetworkMessage networkMessage = ...;
networkMessage.Write(data);
```

### Write
`public void Write(byte data)`

**Purpose:** **Purpose:** Writes the this instance's data to the target location.

```csharp
// Obtain an instance of NetworkMessage from the subsystem API first
NetworkMessage networkMessage = ...;
networkMessage.Write(0);
```

### ReadInt32
`public int ReadInt32()`

**Purpose:** **Purpose:** Reads the data or state of int32.

```csharp
// Obtain an instance of NetworkMessage from the subsystem API first
NetworkMessage networkMessage = ...;
var result = networkMessage.ReadInt32();
```

### ReadInt16
`public short ReadInt16()`

**Purpose:** **Purpose:** Reads the data or state of int16.

```csharp
// Obtain an instance of NetworkMessage from the subsystem API first
NetworkMessage networkMessage = ...;
var result = networkMessage.ReadInt16();
```

### ReadBoolean
`public bool ReadBoolean()`

**Purpose:** **Purpose:** Reads the data or state of boolean.

```csharp
// Obtain an instance of NetworkMessage from the subsystem API first
NetworkMessage networkMessage = ...;
var result = networkMessage.ReadBoolean();
```

### ReadByte
`public byte ReadByte()`

**Purpose:** **Purpose:** Reads the data or state of byte.

```csharp
// Obtain an instance of NetworkMessage from the subsystem API first
NetworkMessage networkMessage = ...;
var result = networkMessage.ReadByte();
```

### ReadString
`public string ReadString()`

**Purpose:** **Purpose:** Reads the data or state of string.

```csharp
// Obtain an instance of NetworkMessage from the subsystem API first
NetworkMessage networkMessage = ...;
var result = networkMessage.ReadString();
```

### ReadFloat
`public float ReadFloat()`

**Purpose:** **Purpose:** Reads the data or state of float.

```csharp
// Obtain an instance of NetworkMessage from the subsystem API first
NetworkMessage networkMessage = ...;
var result = networkMessage.ReadFloat();
```

### ReadInt64
`public long ReadInt64()`

**Purpose:** **Purpose:** Reads the data or state of int64.

```csharp
// Obtain an instance of NetworkMessage from the subsystem API first
NetworkMessage networkMessage = ...;
var result = networkMessage.ReadInt64();
```

### ReadUInt64
`public ulong ReadUInt64()`

**Purpose:** **Purpose:** Reads the data or state of u int64.

```csharp
// Obtain an instance of NetworkMessage from the subsystem API first
NetworkMessage networkMessage = ...;
var result = networkMessage.ReadUInt64();
```

### ReadGuid
`public Guid ReadGuid()`

**Purpose:** **Purpose:** Reads the data or state of guid.

```csharp
// Obtain an instance of NetworkMessage from the subsystem API first
NetworkMessage networkMessage = ...;
var result = networkMessage.ReadGuid();
```

### ReadByteArray
`public byte ReadByteArray()`

**Purpose:** **Purpose:** Reads the data or state of byte array.

```csharp
// Obtain an instance of NetworkMessage from the subsystem API first
NetworkMessage networkMessage = ...;
var result = networkMessage.ReadByteArray();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
NetworkMessage networkMessage = ...;
networkMessage.Write("example");
```

## See Also

- [Area Index](../)