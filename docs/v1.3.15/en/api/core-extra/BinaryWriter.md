<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BinaryWriter`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BinaryWriter

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `BinaryWriter` is a class in the `TaleWorlds.Library` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Data` | `public byte Data { get; }` |
| `Length` | `public int Length { get; }` |


## Key Methods

### Clear

```csharp
public void Clear()
```

### EnsureLength

```csharp
public void EnsureLength(int added)
```

### WriteSerializableObject

```csharp
public void WriteSerializableObject(ISerializableObject serializableObject)
```

### WriteByte

```csharp
public void WriteByte(byte value)
```

### WriteBytes

```csharp
public void WriteBytes(byte bytes)
```

### Write3ByteInt

```csharp
public void Write3ByteInt(int value)
```

### WriteInt

```csharp
public void WriteInt(int value)
```

### WriteShort

```csharp
public void WriteShort(short value)
```

### WriteString

```csharp
public void WriteString(string value)
```

### WriteFloats

```csharp
public void WriteFloats(float value, int count)
```

### WriteShorts

```csharp
public void WriteShorts(short value, int count)
```

### WriteColor

```csharp
public void WriteColor(Color value)
```

### WriteBool

```csharp
public void WriteBool(bool value)
```

### WriteFloat

```csharp
public void WriteFloat(float value)
```

### WriteUInt

```csharp
public void WriteUInt(uint value)
```

### WriteULong

```csharp
public void WriteULong(ulong value)
```

### WriteLong

```csharp
public void WriteLong(long value)
```

### WriteVec2

```csharp
public void WriteVec2(Vec2 vec2)
```

### WriteVec3

```csharp
public void WriteVec3(Vec3 vec3)
```

### WriteVec3Int

```csharp
public void WriteVec3Int(Vec3i vec3)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)