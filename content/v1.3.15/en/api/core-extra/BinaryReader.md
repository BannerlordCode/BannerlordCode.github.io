---
title: "BinaryReader"
description: "Auto-generated class reference for BinaryReader."
---
# BinaryReader

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class BinaryReader : IReader`
**Base:** `IReader`
**File:** `TaleWorlds.Library/BinaryReader.cs`

## Overview

`BinaryReader` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Data` | `public byte Data { get; }` |
| `UnreadByteCount` | `public int UnreadByteCount { get; }` |

## Key Methods

### ReadSerializableObject
`public ISerializableObject ReadSerializableObject()`

**Purpose:** Reads the data or state of `serializable object`.

```csharp
// Obtain an instance of BinaryReader from the subsystem API first
BinaryReader binaryReader = ...;
var result = binaryReader.ReadSerializableObject();
```

### Read3ByteInt
`public int Read3ByteInt()`

**Purpose:** Reads the data or state of `3 byte int`.

```csharp
// Obtain an instance of BinaryReader from the subsystem API first
BinaryReader binaryReader = ...;
var result = binaryReader.Read3ByteInt();
```

### ReadInt
`public int ReadInt()`

**Purpose:** Reads the data or state of `int`.

```csharp
// Obtain an instance of BinaryReader from the subsystem API first
BinaryReader binaryReader = ...;
var result = binaryReader.ReadInt();
```

### ReadShort
`public short ReadShort()`

**Purpose:** Reads the data or state of `short`.

```csharp
// Obtain an instance of BinaryReader from the subsystem API first
BinaryReader binaryReader = ...;
var result = binaryReader.ReadShort();
```

### ReadFloats
`public void ReadFloats(float output, int count)`

**Purpose:** Reads the data or state of `floats`.

```csharp
// Obtain an instance of BinaryReader from the subsystem API first
BinaryReader binaryReader = ...;
binaryReader.ReadFloats(0, 0);
```

### ReadShorts
`public void ReadShorts(short output, int count)`

**Purpose:** Reads the data or state of `shorts`.

```csharp
// Obtain an instance of BinaryReader from the subsystem API first
BinaryReader binaryReader = ...;
binaryReader.ReadShorts(0, 0);
```

### ReadString
`public string ReadString()`

**Purpose:** Reads the data or state of `string`.

```csharp
// Obtain an instance of BinaryReader from the subsystem API first
BinaryReader binaryReader = ...;
var result = binaryReader.ReadString();
```

### ReadColor
`public Color ReadColor()`

**Purpose:** Reads the data or state of `color`.

```csharp
// Obtain an instance of BinaryReader from the subsystem API first
BinaryReader binaryReader = ...;
var result = binaryReader.ReadColor();
```

### ReadBool
`public bool ReadBool()`

**Purpose:** Reads the data or state of `bool`.

```csharp
// Obtain an instance of BinaryReader from the subsystem API first
BinaryReader binaryReader = ...;
var result = binaryReader.ReadBool();
```

### ReadFloat
`public float ReadFloat()`

**Purpose:** Reads the data or state of `float`.

```csharp
// Obtain an instance of BinaryReader from the subsystem API first
BinaryReader binaryReader = ...;
var result = binaryReader.ReadFloat();
```

### ReadUInt
`public uint ReadUInt()`

**Purpose:** Reads the data or state of `u int`.

```csharp
// Obtain an instance of BinaryReader from the subsystem API first
BinaryReader binaryReader = ...;
var result = binaryReader.ReadUInt();
```

### ReadULong
`public ulong ReadULong()`

**Purpose:** Reads the data or state of `u long`.

```csharp
// Obtain an instance of BinaryReader from the subsystem API first
BinaryReader binaryReader = ...;
var result = binaryReader.ReadULong();
```

### ReadLong
`public long ReadLong()`

**Purpose:** Reads the data or state of `long`.

```csharp
// Obtain an instance of BinaryReader from the subsystem API first
BinaryReader binaryReader = ...;
var result = binaryReader.ReadLong();
```

### ReadByte
`public byte ReadByte()`

**Purpose:** Reads the data or state of `byte`.

```csharp
// Obtain an instance of BinaryReader from the subsystem API first
BinaryReader binaryReader = ...;
var result = binaryReader.ReadByte();
```

### ReadBytes
`public byte ReadBytes(int length)`

**Purpose:** Reads the data or state of `bytes`.

```csharp
// Obtain an instance of BinaryReader from the subsystem API first
BinaryReader binaryReader = ...;
var result = binaryReader.ReadBytes(0);
```

### ReadVec2
`public Vec2 ReadVec2()`

**Purpose:** Reads the data or state of `vec2`.

```csharp
// Obtain an instance of BinaryReader from the subsystem API first
BinaryReader binaryReader = ...;
var result = binaryReader.ReadVec2();
```

### ReadVec3
`public Vec3 ReadVec3()`

**Purpose:** Reads the data or state of `vec3`.

```csharp
// Obtain an instance of BinaryReader from the subsystem API first
BinaryReader binaryReader = ...;
var result = binaryReader.ReadVec3();
```

### ReadVec3Int
`public Vec3i ReadVec3Int()`

**Purpose:** Reads the data or state of `vec3 int`.

```csharp
// Obtain an instance of BinaryReader from the subsystem API first
BinaryReader binaryReader = ...;
var result = binaryReader.ReadVec3Int();
```

### ReadSByte
`public sbyte ReadSByte()`

**Purpose:** Reads the data or state of `s byte`.

```csharp
// Obtain an instance of BinaryReader from the subsystem API first
BinaryReader binaryReader = ...;
var result = binaryReader.ReadSByte();
```

### ReadUShort
`public ushort ReadUShort()`

**Purpose:** Reads the data or state of `u short`.

```csharp
// Obtain an instance of BinaryReader from the subsystem API first
BinaryReader binaryReader = ...;
var result = binaryReader.ReadUShort();
```

### ReadDouble
`public double ReadDouble()`

**Purpose:** Reads the data or state of `double`.

```csharp
// Obtain an instance of BinaryReader from the subsystem API first
BinaryReader binaryReader = ...;
var result = binaryReader.ReadDouble();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BinaryReader binaryReader = ...;
binaryReader.ReadSerializableObject();
```

## See Also

- [Area Index](../)