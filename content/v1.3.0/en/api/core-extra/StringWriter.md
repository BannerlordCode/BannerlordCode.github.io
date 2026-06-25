---
title: "StringWriter"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StringWriter`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `write serializable object`.

### WriteByte
`public void WriteByte(byte value)`

**Purpose:** Handles logic related to `write byte`.

### WriteBytes
`public void WriteBytes(byte bytes)`

**Purpose:** Handles logic related to `write bytes`.

### WriteInt
`public void WriteInt(int value)`

**Purpose:** Handles logic related to `write int`.

### WriteShort
`public void WriteShort(short value)`

**Purpose:** Handles logic related to `write short`.

### WriteString
`public void WriteString(string value)`

**Purpose:** Handles logic related to `write string`.

### WriteColor
`public void WriteColor(Color value)`

**Purpose:** Handles logic related to `write color`.

### WriteBool
`public void WriteBool(bool value)`

**Purpose:** Handles logic related to `write bool`.

### WriteFloat
`public void WriteFloat(float value)`

**Purpose:** Handles logic related to `write float`.

### WriteUInt
`public void WriteUInt(uint value)`

**Purpose:** Handles logic related to `write u int`.

### WriteULong
`public void WriteULong(ulong value)`

**Purpose:** Handles logic related to `write u long`.

### WriteLong
`public void WriteLong(long value)`

**Purpose:** Handles logic related to `write long`.

### WriteVec2
`public void WriteVec2(Vec2 vec2)`

**Purpose:** Handles logic related to `write vec2`.

### WriteVec3
`public void WriteVec3(Vec3 vec3)`

**Purpose:** Handles logic related to `write vec3`.

### WriteVec3Int
`public void WriteVec3Int(Vec3i vec3)`

**Purpose:** Handles logic related to `write vec3 int`.

### WriteSByte
`public void WriteSByte(sbyte value)`

**Purpose:** Handles logic related to `write s byte`.

### WriteUShort
`public void WriteUShort(ushort value)`

**Purpose:** Handles logic related to `write u short`.

### WriteDouble
`public void WriteDouble(double value)`

**Purpose:** Handles logic related to `write double`.

## Usage Example

```csharp
var value = new StringWriter();
value.WriteSerializableObject(serializableObject);
```

## See Also

- [Complete Class Catalog](../catalog)