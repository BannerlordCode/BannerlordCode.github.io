---
title: "BinaryWriter"
description: "BinaryWriter 的自动生成类参考。"
---
# BinaryWriter

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class BinaryWriter : IWriter`
**Base:** `IWriter`
**File:** `TaleWorlds.Library/BinaryWriter.cs`

## 概述

`BinaryWriter` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Data` | `public byte Data { get; }` |
| `Length` | `public int Length { get; }` |

## 主要方法

### Clear
`public void Clear()`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 BinaryWriter 实例
BinaryWriter binaryWriter = ...;
binaryWriter.Clear();
```

### EnsureLength
`public void EnsureLength(int added)`

**用途 / Purpose:** **用途 / Purpose:** 确保length处于预期状态，必要时进行初始化或修正。

```csharp
// 先通过子系统 API 拿到 BinaryWriter 实例
BinaryWriter binaryWriter = ...;
binaryWriter.EnsureLength(0);
```

### WriteSerializableObject
`public void WriteSerializableObject(ISerializableObject serializableObject)`

**用途 / Purpose:** **用途 / Purpose:** 将serializable object写入目标位置。

```csharp
// 先通过子系统 API 拿到 BinaryWriter 实例
BinaryWriter binaryWriter = ...;
binaryWriter.WriteSerializableObject(serializableObject);
```

### WriteByte
`public void WriteByte(byte value)`

**用途 / Purpose:** **用途 / Purpose:** 将byte写入目标位置。

```csharp
// 先通过子系统 API 拿到 BinaryWriter 实例
BinaryWriter binaryWriter = ...;
binaryWriter.WriteByte(0);
```

### WriteBytes
`public void WriteBytes(byte bytes)`

**用途 / Purpose:** **用途 / Purpose:** 将bytes写入目标位置。

```csharp
// 先通过子系统 API 拿到 BinaryWriter 实例
BinaryWriter binaryWriter = ...;
binaryWriter.WriteBytes(0);
```

### Write3ByteInt
`public void Write3ByteInt(int value)`

**用途 / Purpose:** **用途 / Purpose:** 将3 byte int写入目标位置。

```csharp
// 先通过子系统 API 拿到 BinaryWriter 实例
BinaryWriter binaryWriter = ...;
binaryWriter.Write3ByteInt(0);
```

### WriteInt
`public void WriteInt(int value)`

**用途 / Purpose:** **用途 / Purpose:** 将int写入目标位置。

```csharp
// 先通过子系统 API 拿到 BinaryWriter 实例
BinaryWriter binaryWriter = ...;
binaryWriter.WriteInt(0);
```

### WriteShort
`public void WriteShort(short value)`

**用途 / Purpose:** **用途 / Purpose:** 将short写入目标位置。

```csharp
// 先通过子系统 API 拿到 BinaryWriter 实例
BinaryWriter binaryWriter = ...;
binaryWriter.WriteShort(0);
```

### WriteString
`public void WriteString(string value)`

**用途 / Purpose:** **用途 / Purpose:** 将string写入目标位置。

```csharp
// 先通过子系统 API 拿到 BinaryWriter 实例
BinaryWriter binaryWriter = ...;
binaryWriter.WriteString("example");
```

### WriteFloats
`public void WriteFloats(float value, int count)`

**用途 / Purpose:** **用途 / Purpose:** 将floats写入目标位置。

```csharp
// 先通过子系统 API 拿到 BinaryWriter 实例
BinaryWriter binaryWriter = ...;
binaryWriter.WriteFloats(0, 0);
```

### WriteShorts
`public void WriteShorts(short value, int count)`

**用途 / Purpose:** **用途 / Purpose:** 将shorts写入目标位置。

```csharp
// 先通过子系统 API 拿到 BinaryWriter 实例
BinaryWriter binaryWriter = ...;
binaryWriter.WriteShorts(0, 0);
```

### WriteColor
`public void WriteColor(Color value)`

**用途 / Purpose:** **用途 / Purpose:** 将color写入目标位置。

```csharp
// 先通过子系统 API 拿到 BinaryWriter 实例
BinaryWriter binaryWriter = ...;
binaryWriter.WriteColor(value);
```

### WriteBool
`public void WriteBool(bool value)`

**用途 / Purpose:** **用途 / Purpose:** 将bool写入目标位置。

```csharp
// 先通过子系统 API 拿到 BinaryWriter 实例
BinaryWriter binaryWriter = ...;
binaryWriter.WriteBool(false);
```

### WriteFloat
`public void WriteFloat(float value)`

**用途 / Purpose:** **用途 / Purpose:** 将float写入目标位置。

```csharp
// 先通过子系统 API 拿到 BinaryWriter 实例
BinaryWriter binaryWriter = ...;
binaryWriter.WriteFloat(0);
```

### WriteUInt
`public void WriteUInt(uint value)`

**用途 / Purpose:** **用途 / Purpose:** 将u int写入目标位置。

```csharp
// 先通过子系统 API 拿到 BinaryWriter 实例
BinaryWriter binaryWriter = ...;
binaryWriter.WriteUInt(0);
```

### WriteULong
`public void WriteULong(ulong value)`

**用途 / Purpose:** **用途 / Purpose:** 将u long写入目标位置。

```csharp
// 先通过子系统 API 拿到 BinaryWriter 实例
BinaryWriter binaryWriter = ...;
binaryWriter.WriteULong(0);
```

### WriteLong
`public void WriteLong(long value)`

**用途 / Purpose:** **用途 / Purpose:** 将long写入目标位置。

```csharp
// 先通过子系统 API 拿到 BinaryWriter 实例
BinaryWriter binaryWriter = ...;
binaryWriter.WriteLong(0);
```

### WriteVec2
`public void WriteVec2(Vec2 vec2)`

**用途 / Purpose:** **用途 / Purpose:** 将vec2写入目标位置。

```csharp
// 先通过子系统 API 拿到 BinaryWriter 实例
BinaryWriter binaryWriter = ...;
binaryWriter.WriteVec2(vec2);
```

### WriteVec3
`public void WriteVec3(Vec3 vec3)`

**用途 / Purpose:** **用途 / Purpose:** 将vec3写入目标位置。

```csharp
// 先通过子系统 API 拿到 BinaryWriter 实例
BinaryWriter binaryWriter = ...;
binaryWriter.WriteVec3(vec3);
```

### WriteVec3Int
`public void WriteVec3Int(Vec3i vec3)`

**用途 / Purpose:** **用途 / Purpose:** 将vec3 int写入目标位置。

```csharp
// 先通过子系统 API 拿到 BinaryWriter 实例
BinaryWriter binaryWriter = ...;
binaryWriter.WriteVec3Int(vec3);
```

### WriteSByte
`public void WriteSByte(sbyte value)`

**用途 / Purpose:** **用途 / Purpose:** 将s byte写入目标位置。

```csharp
// 先通过子系统 API 拿到 BinaryWriter 实例
BinaryWriter binaryWriter = ...;
binaryWriter.WriteSByte(0);
```

### WriteUShort
`public void WriteUShort(ushort value)`

**用途 / Purpose:** **用途 / Purpose:** 将u short写入目标位置。

```csharp
// 先通过子系统 API 拿到 BinaryWriter 实例
BinaryWriter binaryWriter = ...;
binaryWriter.WriteUShort(0);
```

### WriteDouble
`public void WriteDouble(double value)`

**用途 / Purpose:** **用途 / Purpose:** 将double写入目标位置。

```csharp
// 先通过子系统 API 拿到 BinaryWriter 实例
BinaryWriter binaryWriter = ...;
binaryWriter.WriteDouble(0);
```

### AppendData
`public void AppendData(BinaryWriter writer)`

**用途 / Purpose:** **用途 / Purpose:** 将data追加到当前集合或序列末尾。

```csharp
// 先通过子系统 API 拿到 BinaryWriter 实例
BinaryWriter binaryWriter = ...;
binaryWriter.AppendData(writer);
```

### GetFinalData
`public byte GetFinalData()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 final data 的结果。

```csharp
// 先通过子系统 API 拿到 BinaryWriter 实例
BinaryWriter binaryWriter = ...;
var result = binaryWriter.GetFinalData();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BinaryWriter binaryWriter = ...;
binaryWriter.Clear();
```

## 参见

- [本区域目录](../)