---
title: "StringReader"
description: "Auto-generated class reference for StringReader."
---
# StringReader

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class StringReader : IReader`
**Base:** `IReader`
**File:** `TaleWorlds.Library/StringReader.cs`

## Overview

`StringReader` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Data` | `public string Data { get; }` |

## Key Methods

### ReadSerializableObject
`public ISerializableObject ReadSerializableObject()`

**Purpose:** **Purpose:** Reads the data or state of serializable object.

```csharp
// Obtain an instance of StringReader from the subsystem API first
StringReader stringReader = ...;
var result = stringReader.ReadSerializableObject();
```

### ReadInt
`public int ReadInt()`

**Purpose:** **Purpose:** Reads the data or state of int.

```csharp
// Obtain an instance of StringReader from the subsystem API first
StringReader stringReader = ...;
var result = stringReader.ReadInt();
```

### ReadShort
`public short ReadShort()`

**Purpose:** **Purpose:** Reads the data or state of short.

```csharp
// Obtain an instance of StringReader from the subsystem API first
StringReader stringReader = ...;
var result = stringReader.ReadShort();
```

### ReadString
`public string ReadString()`

**Purpose:** **Purpose:** Reads the data or state of string.

```csharp
// Obtain an instance of StringReader from the subsystem API first
StringReader stringReader = ...;
var result = stringReader.ReadString();
```

### ReadColor
`public Color ReadColor()`

**Purpose:** **Purpose:** Reads the data or state of color.

```csharp
// Obtain an instance of StringReader from the subsystem API first
StringReader stringReader = ...;
var result = stringReader.ReadColor();
```

### ReadBool
`public bool ReadBool()`

**Purpose:** **Purpose:** Reads the data or state of bool.

```csharp
// Obtain an instance of StringReader from the subsystem API first
StringReader stringReader = ...;
var result = stringReader.ReadBool();
```

### ReadFloat
`public float ReadFloat()`

**Purpose:** **Purpose:** Reads the data or state of float.

```csharp
// Obtain an instance of StringReader from the subsystem API first
StringReader stringReader = ...;
var result = stringReader.ReadFloat();
```

### ReadUInt
`public uint ReadUInt()`

**Purpose:** **Purpose:** Reads the data or state of u int.

```csharp
// Obtain an instance of StringReader from the subsystem API first
StringReader stringReader = ...;
var result = stringReader.ReadUInt();
```

### ReadULong
`public ulong ReadULong()`

**Purpose:** **Purpose:** Reads the data or state of u long.

```csharp
// Obtain an instance of StringReader from the subsystem API first
StringReader stringReader = ...;
var result = stringReader.ReadULong();
```

### ReadLong
`public long ReadLong()`

**Purpose:** **Purpose:** Reads the data or state of long.

```csharp
// Obtain an instance of StringReader from the subsystem API first
StringReader stringReader = ...;
var result = stringReader.ReadLong();
```

### ReadByte
`public byte ReadByte()`

**Purpose:** **Purpose:** Reads the data or state of byte.

```csharp
// Obtain an instance of StringReader from the subsystem API first
StringReader stringReader = ...;
var result = stringReader.ReadByte();
```

### ReadBytes
`public byte ReadBytes(int length)`

**Purpose:** **Purpose:** Reads the data or state of bytes.

```csharp
// Obtain an instance of StringReader from the subsystem API first
StringReader stringReader = ...;
var result = stringReader.ReadBytes(0);
```

### ReadVec2
`public Vec2 ReadVec2()`

**Purpose:** **Purpose:** Reads the data or state of vec2.

```csharp
// Obtain an instance of StringReader from the subsystem API first
StringReader stringReader = ...;
var result = stringReader.ReadVec2();
```

### ReadVec3
`public Vec3 ReadVec3()`

**Purpose:** **Purpose:** Reads the data or state of vec3.

```csharp
// Obtain an instance of StringReader from the subsystem API first
StringReader stringReader = ...;
var result = stringReader.ReadVec3();
```

### ReadVec3Int
`public Vec3i ReadVec3Int()`

**Purpose:** **Purpose:** Reads the data or state of vec3 int.

```csharp
// Obtain an instance of StringReader from the subsystem API first
StringReader stringReader = ...;
var result = stringReader.ReadVec3Int();
```

### ReadSByte
`public sbyte ReadSByte()`

**Purpose:** **Purpose:** Reads the data or state of s byte.

```csharp
// Obtain an instance of StringReader from the subsystem API first
StringReader stringReader = ...;
var result = stringReader.ReadSByte();
```

### ReadUShort
`public ushort ReadUShort()`

**Purpose:** **Purpose:** Reads the data or state of u short.

```csharp
// Obtain an instance of StringReader from the subsystem API first
StringReader stringReader = ...;
var result = stringReader.ReadUShort();
```

### ReadDouble
`public double ReadDouble()`

**Purpose:** **Purpose:** Reads the data or state of double.

```csharp
// Obtain an instance of StringReader from the subsystem API first
StringReader stringReader = ...;
var result = stringReader.ReadDouble();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
StringReader stringReader = ...;
stringReader.ReadSerializableObject();
```

## See Also

- [Area Index](../)