---
title: "BinaryReader"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BinaryReader`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `read serializable object`.

### Read3ByteInt
`public int Read3ByteInt()`

**Purpose:** Handles logic related to `read3 byte int`.

### ReadInt
`public int ReadInt()`

**Purpose:** Handles logic related to `read int`.

### ReadShort
`public short ReadShort()`

**Purpose:** Handles logic related to `read short`.

### ReadFloats
`public void ReadFloats(float output, int count)`

**Purpose:** Handles logic related to `read floats`.

### ReadShorts
`public void ReadShorts(short output, int count)`

**Purpose:** Handles logic related to `read shorts`.

### ReadString
`public string ReadString()`

**Purpose:** Handles logic related to `read string`.

### ReadColor
`public Color ReadColor()`

**Purpose:** Handles logic related to `read color`.

### ReadBool
`public bool ReadBool()`

**Purpose:** Handles logic related to `read bool`.

### ReadFloat
`public float ReadFloat()`

**Purpose:** Handles logic related to `read float`.

### ReadUInt
`public uint ReadUInt()`

**Purpose:** Handles logic related to `read u int`.

### ReadULong
`public ulong ReadULong()`

**Purpose:** Handles logic related to `read u long`.

### ReadLong
`public long ReadLong()`

**Purpose:** Handles logic related to `read long`.

### ReadByte
`public byte ReadByte()`

**Purpose:** Handles logic related to `read byte`.

### ReadBytes
`public byte ReadBytes(int length)`

**Purpose:** Handles logic related to `read bytes`.

### ReadVec2
`public Vec2 ReadVec2()`

**Purpose:** Handles logic related to `read vec2`.

### ReadVec3
`public Vec3 ReadVec3()`

**Purpose:** Handles logic related to `read vec3`.

### ReadVec3Int
`public Vec3i ReadVec3Int()`

**Purpose:** Handles logic related to `read vec3 int`.

### ReadSByte
`public sbyte ReadSByte()`

**Purpose:** Handles logic related to `read s byte`.

### ReadUShort
`public ushort ReadUShort()`

**Purpose:** Handles logic related to `read u short`.

### ReadDouble
`public double ReadDouble()`

**Purpose:** Handles logic related to `read double`.

## Usage Example

```csharp
var value = new BinaryReader();
value.ReadSerializableObject();
```

## See Also

- [Complete Class Catalog](../catalog)