<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BinaryReader`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BinaryReader

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `BinaryReader` is a class in the `TaleWorlds.Library` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Data` | `public byte Data { get; }` |
| `UnreadByteCount` | `public int UnreadByteCount { get; }` |


## Key Methods

### ReadSerializableObject

```csharp
public ISerializableObject ReadSerializableObject()
```

### Read3ByteInt

```csharp
public int Read3ByteInt()
```

### ReadInt

```csharp
public int ReadInt()
```

### ReadShort

```csharp
public short ReadShort()
```

### ReadFloats

```csharp
public void ReadFloats(float output, int count)
```

### ReadShorts

```csharp
public void ReadShorts(short output, int count)
```

### ReadString

```csharp
public string ReadString()
```

### ReadColor

```csharp
public Color ReadColor()
```

### ReadBool

```csharp
public bool ReadBool()
```

### ReadFloat

```csharp
public float ReadFloat()
```

### ReadUInt

```csharp
public uint ReadUInt()
```

### ReadULong

```csharp
public ulong ReadULong()
```

### ReadLong

```csharp
public long ReadLong()
```

### ReadByte

```csharp
public byte ReadByte()
```

### ReadBytes

```csharp
public byte ReadBytes(int length)
```

### ReadVec2

```csharp
public Vec2 ReadVec2()
```

### ReadVec3

```csharp
public Vec3 ReadVec3()
```

### ReadVec3Int

```csharp
public Vec3i ReadVec3Int()
```

### ReadSByte

```csharp
public sbyte ReadSByte()
```

### ReadUShort

```csharp
public ushort ReadUShort()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)