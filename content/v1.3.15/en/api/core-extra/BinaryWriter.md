---
title: "BinaryWriter"
description: "Auto-generated class reference for BinaryWriter."
---
# BinaryWriter

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class BinaryWriter : IWriter`
**Base:** `IWriter`
**File:** `TaleWorlds.Library/BinaryWriter.cs`

## Overview

`BinaryWriter` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Data` | `public byte Data { get; }` |
| `Length` | `public int Length { get; }` |

## Key Methods

### Clear
`public void Clear()`

**Purpose:** **Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of BinaryWriter from the subsystem API first
BinaryWriter binaryWriter = ...;
binaryWriter.Clear();
```

### EnsureLength
`public void EnsureLength(int added)`

**Purpose:** **Purpose:** Ensures length is in the expected state, initializing or correcting it if necessary.

```csharp
// Obtain an instance of BinaryWriter from the subsystem API first
BinaryWriter binaryWriter = ...;
binaryWriter.EnsureLength(0);
```

### WriteSerializableObject
`public void WriteSerializableObject(ISerializableObject serializableObject)`

**Purpose:** **Purpose:** Writes serializable object to the target location.

```csharp
// Obtain an instance of BinaryWriter from the subsystem API first
BinaryWriter binaryWriter = ...;
binaryWriter.WriteSerializableObject(serializableObject);
```

### WriteByte
`public void WriteByte(byte value)`

**Purpose:** **Purpose:** Writes byte to the target location.

```csharp
// Obtain an instance of BinaryWriter from the subsystem API first
BinaryWriter binaryWriter = ...;
binaryWriter.WriteByte(0);
```

### WriteBytes
`public void WriteBytes(byte bytes)`

**Purpose:** **Purpose:** Writes bytes to the target location.

```csharp
// Obtain an instance of BinaryWriter from the subsystem API first
BinaryWriter binaryWriter = ...;
binaryWriter.WriteBytes(0);
```

### Write3ByteInt
`public void Write3ByteInt(int value)`

**Purpose:** **Purpose:** Writes 3 byte int to the target location.

```csharp
// Obtain an instance of BinaryWriter from the subsystem API first
BinaryWriter binaryWriter = ...;
binaryWriter.Write3ByteInt(0);
```

### WriteInt
`public void WriteInt(int value)`

**Purpose:** **Purpose:** Writes int to the target location.

```csharp
// Obtain an instance of BinaryWriter from the subsystem API first
BinaryWriter binaryWriter = ...;
binaryWriter.WriteInt(0);
```

### WriteShort
`public void WriteShort(short value)`

**Purpose:** **Purpose:** Writes short to the target location.

```csharp
// Obtain an instance of BinaryWriter from the subsystem API first
BinaryWriter binaryWriter = ...;
binaryWriter.WriteShort(0);
```

### WriteString
`public void WriteString(string value)`

**Purpose:** **Purpose:** Writes string to the target location.

```csharp
// Obtain an instance of BinaryWriter from the subsystem API first
BinaryWriter binaryWriter = ...;
binaryWriter.WriteString("example");
```

### WriteFloats
`public void WriteFloats(float value, int count)`

**Purpose:** **Purpose:** Writes floats to the target location.

```csharp
// Obtain an instance of BinaryWriter from the subsystem API first
BinaryWriter binaryWriter = ...;
binaryWriter.WriteFloats(0, 0);
```

### WriteShorts
`public void WriteShorts(short value, int count)`

**Purpose:** **Purpose:** Writes shorts to the target location.

```csharp
// Obtain an instance of BinaryWriter from the subsystem API first
BinaryWriter binaryWriter = ...;
binaryWriter.WriteShorts(0, 0);
```

### WriteColor
`public void WriteColor(Color value)`

**Purpose:** **Purpose:** Writes color to the target location.

```csharp
// Obtain an instance of BinaryWriter from the subsystem API first
BinaryWriter binaryWriter = ...;
binaryWriter.WriteColor(value);
```

### WriteBool
`public void WriteBool(bool value)`

**Purpose:** **Purpose:** Writes bool to the target location.

```csharp
// Obtain an instance of BinaryWriter from the subsystem API first
BinaryWriter binaryWriter = ...;
binaryWriter.WriteBool(false);
```

### WriteFloat
`public void WriteFloat(float value)`

**Purpose:** **Purpose:** Writes float to the target location.

```csharp
// Obtain an instance of BinaryWriter from the subsystem API first
BinaryWriter binaryWriter = ...;
binaryWriter.WriteFloat(0);
```

### WriteUInt
`public void WriteUInt(uint value)`

**Purpose:** **Purpose:** Writes u int to the target location.

```csharp
// Obtain an instance of BinaryWriter from the subsystem API first
BinaryWriter binaryWriter = ...;
binaryWriter.WriteUInt(0);
```

### WriteULong
`public void WriteULong(ulong value)`

**Purpose:** **Purpose:** Writes u long to the target location.

```csharp
// Obtain an instance of BinaryWriter from the subsystem API first
BinaryWriter binaryWriter = ...;
binaryWriter.WriteULong(0);
```

### WriteLong
`public void WriteLong(long value)`

**Purpose:** **Purpose:** Writes long to the target location.

```csharp
// Obtain an instance of BinaryWriter from the subsystem API first
BinaryWriter binaryWriter = ...;
binaryWriter.WriteLong(0);
```

### WriteVec2
`public void WriteVec2(Vec2 vec2)`

**Purpose:** **Purpose:** Writes vec2 to the target location.

```csharp
// Obtain an instance of BinaryWriter from the subsystem API first
BinaryWriter binaryWriter = ...;
binaryWriter.WriteVec2(vec2);
```

### WriteVec3
`public void WriteVec3(Vec3 vec3)`

**Purpose:** **Purpose:** Writes vec3 to the target location.

```csharp
// Obtain an instance of BinaryWriter from the subsystem API first
BinaryWriter binaryWriter = ...;
binaryWriter.WriteVec3(vec3);
```

### WriteVec3Int
`public void WriteVec3Int(Vec3i vec3)`

**Purpose:** **Purpose:** Writes vec3 int to the target location.

```csharp
// Obtain an instance of BinaryWriter from the subsystem API first
BinaryWriter binaryWriter = ...;
binaryWriter.WriteVec3Int(vec3);
```

### WriteSByte
`public void WriteSByte(sbyte value)`

**Purpose:** **Purpose:** Writes s byte to the target location.

```csharp
// Obtain an instance of BinaryWriter from the subsystem API first
BinaryWriter binaryWriter = ...;
binaryWriter.WriteSByte(0);
```

### WriteUShort
`public void WriteUShort(ushort value)`

**Purpose:** **Purpose:** Writes u short to the target location.

```csharp
// Obtain an instance of BinaryWriter from the subsystem API first
BinaryWriter binaryWriter = ...;
binaryWriter.WriteUShort(0);
```

### WriteDouble
`public void WriteDouble(double value)`

**Purpose:** **Purpose:** Writes double to the target location.

```csharp
// Obtain an instance of BinaryWriter from the subsystem API first
BinaryWriter binaryWriter = ...;
binaryWriter.WriteDouble(0);
```

### AppendData
`public void AppendData(BinaryWriter writer)`

**Purpose:** **Purpose:** Appends data to the end of the current collection or sequence.

```csharp
// Obtain an instance of BinaryWriter from the subsystem API first
BinaryWriter binaryWriter = ...;
binaryWriter.AppendData(writer);
```

### GetFinalData
`public byte GetFinalData()`

**Purpose:** **Purpose:** Reads and returns the final data value held by the this instance.

```csharp
// Obtain an instance of BinaryWriter from the subsystem API first
BinaryWriter binaryWriter = ...;
var result = binaryWriter.GetFinalData();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BinaryWriter binaryWriter = ...;
binaryWriter.Clear();
```

## See Also

- [Area Index](../)