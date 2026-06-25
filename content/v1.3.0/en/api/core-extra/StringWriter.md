---
title: "StringWriter"
description: "Auto-generated class reference for StringWriter."
---
# StringWriter

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class StringWriter : IWriter`
**Base:** `IWriter`
**File:** `TaleWorlds.Library/StringWriter.cs`

## Overview

`StringWriter` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Data` | `public string Data { get; }` |

## Key Methods

### WriteSerializableObject
`public void WriteSerializableObject(ISerializableObject serializableObject)`

**Purpose:** Writes serializable object to the target location.

```csharp
// Obtain an instance of StringWriter from the subsystem API first
StringWriter stringWriter = ...;
stringWriter.WriteSerializableObject(serializableObject);
```

### WriteByte
`public void WriteByte(byte value)`

**Purpose:** Writes byte to the target location.

```csharp
// Obtain an instance of StringWriter from the subsystem API first
StringWriter stringWriter = ...;
stringWriter.WriteByte(0);
```

### WriteBytes
`public void WriteBytes(byte bytes)`

**Purpose:** Writes bytes to the target location.

```csharp
// Obtain an instance of StringWriter from the subsystem API first
StringWriter stringWriter = ...;
stringWriter.WriteBytes(0);
```

### WriteInt
`public void WriteInt(int value)`

**Purpose:** Writes int to the target location.

```csharp
// Obtain an instance of StringWriter from the subsystem API first
StringWriter stringWriter = ...;
stringWriter.WriteInt(0);
```

### WriteShort
`public void WriteShort(short value)`

**Purpose:** Writes short to the target location.

```csharp
// Obtain an instance of StringWriter from the subsystem API first
StringWriter stringWriter = ...;
stringWriter.WriteShort(0);
```

### WriteString
`public void WriteString(string value)`

**Purpose:** Writes string to the target location.

```csharp
// Obtain an instance of StringWriter from the subsystem API first
StringWriter stringWriter = ...;
stringWriter.WriteString("example");
```

### WriteColor
`public void WriteColor(Color value)`

**Purpose:** Writes color to the target location.

```csharp
// Obtain an instance of StringWriter from the subsystem API first
StringWriter stringWriter = ...;
stringWriter.WriteColor(value);
```

### WriteBool
`public void WriteBool(bool value)`

**Purpose:** Writes bool to the target location.

```csharp
// Obtain an instance of StringWriter from the subsystem API first
StringWriter stringWriter = ...;
stringWriter.WriteBool(false);
```

### WriteFloat
`public void WriteFloat(float value)`

**Purpose:** Writes float to the target location.

```csharp
// Obtain an instance of StringWriter from the subsystem API first
StringWriter stringWriter = ...;
stringWriter.WriteFloat(0);
```

### WriteUInt
`public void WriteUInt(uint value)`

**Purpose:** Writes u int to the target location.

```csharp
// Obtain an instance of StringWriter from the subsystem API first
StringWriter stringWriter = ...;
stringWriter.WriteUInt(0);
```

### WriteULong
`public void WriteULong(ulong value)`

**Purpose:** Writes u long to the target location.

```csharp
// Obtain an instance of StringWriter from the subsystem API first
StringWriter stringWriter = ...;
stringWriter.WriteULong(0);
```

### WriteLong
`public void WriteLong(long value)`

**Purpose:** Writes long to the target location.

```csharp
// Obtain an instance of StringWriter from the subsystem API first
StringWriter stringWriter = ...;
stringWriter.WriteLong(0);
```

### WriteVec2
`public void WriteVec2(Vec2 vec2)`

**Purpose:** Writes vec2 to the target location.

```csharp
// Obtain an instance of StringWriter from the subsystem API first
StringWriter stringWriter = ...;
stringWriter.WriteVec2(vec2);
```

### WriteVec3
`public void WriteVec3(Vec3 vec3)`

**Purpose:** Writes vec3 to the target location.

```csharp
// Obtain an instance of StringWriter from the subsystem API first
StringWriter stringWriter = ...;
stringWriter.WriteVec3(vec3);
```

### WriteVec3Int
`public void WriteVec3Int(Vec3i vec3)`

**Purpose:** Writes vec3 int to the target location.

```csharp
// Obtain an instance of StringWriter from the subsystem API first
StringWriter stringWriter = ...;
stringWriter.WriteVec3Int(vec3);
```

### WriteSByte
`public void WriteSByte(sbyte value)`

**Purpose:** Writes s byte to the target location.

```csharp
// Obtain an instance of StringWriter from the subsystem API first
StringWriter stringWriter = ...;
stringWriter.WriteSByte(0);
```

### WriteUShort
`public void WriteUShort(ushort value)`

**Purpose:** Writes u short to the target location.

```csharp
// Obtain an instance of StringWriter from the subsystem API first
StringWriter stringWriter = ...;
stringWriter.WriteUShort(0);
```

### WriteDouble
`public void WriteDouble(double value)`

**Purpose:** Writes double to the target location.

```csharp
// Obtain an instance of StringWriter from the subsystem API first
StringWriter stringWriter = ...;
stringWriter.WriteDouble(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
StringWriter stringWriter = ...;
stringWriter.WriteSerializableObject(serializableObject);
```

## See Also

- [Area Index](../)