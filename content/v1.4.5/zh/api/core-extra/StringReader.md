---
title: "StringReader"
description: "StringReader 的自动生成类参考。"
---
# StringReader

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class StringReader : IReader`
**Base:** `IReader`
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/StringReader.cs`

## 概述

`StringReader` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Data` | `public string Data { get; }` |

## 主要方法

### ReadSerializableObject
`public ISerializableObject ReadSerializableObject()`

**用途 / Purpose:** **用途 / Purpose:** 读取serializable object的数据或状态。

```csharp
// 先通过子系统 API 拿到 StringReader 实例
StringReader stringReader = ...;
var result = stringReader.ReadSerializableObject();
```

### ReadInt
`public int ReadInt()`

**用途 / Purpose:** **用途 / Purpose:** 读取int的数据或状态。

```csharp
// 先通过子系统 API 拿到 StringReader 实例
StringReader stringReader = ...;
var result = stringReader.ReadInt();
```

### ReadShort
`public short ReadShort()`

**用途 / Purpose:** **用途 / Purpose:** 读取short的数据或状态。

```csharp
// 先通过子系统 API 拿到 StringReader 实例
StringReader stringReader = ...;
var result = stringReader.ReadShort();
```

### ReadString
`public string ReadString()`

**用途 / Purpose:** **用途 / Purpose:** 读取string的数据或状态。

```csharp
// 先通过子系统 API 拿到 StringReader 实例
StringReader stringReader = ...;
var result = stringReader.ReadString();
```

### ReadColor
`public Color ReadColor()`

**用途 / Purpose:** **用途 / Purpose:** 读取color的数据或状态。

```csharp
// 先通过子系统 API 拿到 StringReader 实例
StringReader stringReader = ...;
var result = stringReader.ReadColor();
```

### ReadBool
`public bool ReadBool()`

**用途 / Purpose:** **用途 / Purpose:** 读取bool的数据或状态。

```csharp
// 先通过子系统 API 拿到 StringReader 实例
StringReader stringReader = ...;
var result = stringReader.ReadBool();
```

### ReadFloat
`public float ReadFloat()`

**用途 / Purpose:** **用途 / Purpose:** 读取float的数据或状态。

```csharp
// 先通过子系统 API 拿到 StringReader 实例
StringReader stringReader = ...;
var result = stringReader.ReadFloat();
```

### ReadUInt
`public uint ReadUInt()`

**用途 / Purpose:** **用途 / Purpose:** 读取u int的数据或状态。

```csharp
// 先通过子系统 API 拿到 StringReader 实例
StringReader stringReader = ...;
var result = stringReader.ReadUInt();
```

### ReadULong
`public ulong ReadULong()`

**用途 / Purpose:** **用途 / Purpose:** 读取u long的数据或状态。

```csharp
// 先通过子系统 API 拿到 StringReader 实例
StringReader stringReader = ...;
var result = stringReader.ReadULong();
```

### ReadLong
`public long ReadLong()`

**用途 / Purpose:** **用途 / Purpose:** 读取long的数据或状态。

```csharp
// 先通过子系统 API 拿到 StringReader 实例
StringReader stringReader = ...;
var result = stringReader.ReadLong();
```

### ReadByte
`public byte ReadByte()`

**用途 / Purpose:** **用途 / Purpose:** 读取byte的数据或状态。

```csharp
// 先通过子系统 API 拿到 StringReader 实例
StringReader stringReader = ...;
var result = stringReader.ReadByte();
```

### ReadBytes
`public byte ReadBytes(int length)`

**用途 / Purpose:** **用途 / Purpose:** 读取bytes的数据或状态。

```csharp
// 先通过子系统 API 拿到 StringReader 实例
StringReader stringReader = ...;
var result = stringReader.ReadBytes(0);
```

### ReadVec2
`public Vec2 ReadVec2()`

**用途 / Purpose:** **用途 / Purpose:** 读取vec2的数据或状态。

```csharp
// 先通过子系统 API 拿到 StringReader 实例
StringReader stringReader = ...;
var result = stringReader.ReadVec2();
```

### ReadVec3
`public Vec3 ReadVec3()`

**用途 / Purpose:** **用途 / Purpose:** 读取vec3的数据或状态。

```csharp
// 先通过子系统 API 拿到 StringReader 实例
StringReader stringReader = ...;
var result = stringReader.ReadVec3();
```

### ReadVec3Int
`public Vec3i ReadVec3Int()`

**用途 / Purpose:** **用途 / Purpose:** 读取vec3 int的数据或状态。

```csharp
// 先通过子系统 API 拿到 StringReader 实例
StringReader stringReader = ...;
var result = stringReader.ReadVec3Int();
```

### ReadSByte
`public sbyte ReadSByte()`

**用途 / Purpose:** **用途 / Purpose:** 读取s byte的数据或状态。

```csharp
// 先通过子系统 API 拿到 StringReader 实例
StringReader stringReader = ...;
var result = stringReader.ReadSByte();
```

### ReadUShort
`public ushort ReadUShort()`

**用途 / Purpose:** **用途 / Purpose:** 读取u short的数据或状态。

```csharp
// 先通过子系统 API 拿到 StringReader 实例
StringReader stringReader = ...;
var result = stringReader.ReadUShort();
```

### ReadDouble
`public double ReadDouble()`

**用途 / Purpose:** **用途 / Purpose:** 读取double的数据或状态。

```csharp
// 先通过子系统 API 拿到 StringReader 实例
StringReader stringReader = ...;
var result = stringReader.ReadDouble();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
StringReader stringReader = ...;
stringReader.ReadSerializableObject();
```

## 参见

- [本区域目录](../)