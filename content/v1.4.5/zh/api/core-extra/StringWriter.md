---
title: "StringWriter"
description: "StringWriter 的自动生成类参考。"
---
# StringWriter

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class StringWriter : IWriter`
**Base:** `IWriter`
**File:** `TaleWorlds.Library/StringWriter.cs`

## 概述

`StringWriter` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Data` | `public string Data { get; }` |

## 主要方法

### WriteSerializableObject
`public void WriteSerializableObject(ISerializableObject serializableObject)`

**用途 / Purpose:** 将serializable object写入目标位置。

```csharp
// 先通过子系统 API 拿到 StringWriter 实例
StringWriter stringWriter = ...;
stringWriter.WriteSerializableObject(serializableObject);
```

### WriteByte
`public void WriteByte(byte value)`

**用途 / Purpose:** 将byte写入目标位置。

```csharp
// 先通过子系统 API 拿到 StringWriter 实例
StringWriter stringWriter = ...;
stringWriter.WriteByte(0);
```

### WriteBytes
`public void WriteBytes(byte bytes)`

**用途 / Purpose:** 将bytes写入目标位置。

```csharp
// 先通过子系统 API 拿到 StringWriter 实例
StringWriter stringWriter = ...;
stringWriter.WriteBytes(0);
```

### WriteInt
`public void WriteInt(int value)`

**用途 / Purpose:** 将int写入目标位置。

```csharp
// 先通过子系统 API 拿到 StringWriter 实例
StringWriter stringWriter = ...;
stringWriter.WriteInt(0);
```

### WriteShort
`public void WriteShort(short value)`

**用途 / Purpose:** 将short写入目标位置。

```csharp
// 先通过子系统 API 拿到 StringWriter 实例
StringWriter stringWriter = ...;
stringWriter.WriteShort(0);
```

### WriteString
`public void WriteString(string value)`

**用途 / Purpose:** 将string写入目标位置。

```csharp
// 先通过子系统 API 拿到 StringWriter 实例
StringWriter stringWriter = ...;
stringWriter.WriteString("example");
```

### WriteColor
`public void WriteColor(Color value)`

**用途 / Purpose:** 将color写入目标位置。

```csharp
// 先通过子系统 API 拿到 StringWriter 实例
StringWriter stringWriter = ...;
stringWriter.WriteColor(value);
```

### WriteBool
`public void WriteBool(bool value)`

**用途 / Purpose:** 将bool写入目标位置。

```csharp
// 先通过子系统 API 拿到 StringWriter 实例
StringWriter stringWriter = ...;
stringWriter.WriteBool(false);
```

### WriteFloat
`public void WriteFloat(float value)`

**用途 / Purpose:** 将float写入目标位置。

```csharp
// 先通过子系统 API 拿到 StringWriter 实例
StringWriter stringWriter = ...;
stringWriter.WriteFloat(0);
```

### WriteUInt
`public void WriteUInt(uint value)`

**用途 / Purpose:** 将u int写入目标位置。

```csharp
// 先通过子系统 API 拿到 StringWriter 实例
StringWriter stringWriter = ...;
stringWriter.WriteUInt(0);
```

### WriteULong
`public void WriteULong(ulong value)`

**用途 / Purpose:** 将u long写入目标位置。

```csharp
// 先通过子系统 API 拿到 StringWriter 实例
StringWriter stringWriter = ...;
stringWriter.WriteULong(0);
```

### WriteLong
`public void WriteLong(long value)`

**用途 / Purpose:** 将long写入目标位置。

```csharp
// 先通过子系统 API 拿到 StringWriter 实例
StringWriter stringWriter = ...;
stringWriter.WriteLong(0);
```

### WriteVec2
`public void WriteVec2(Vec2 vec2)`

**用途 / Purpose:** 将vec2写入目标位置。

```csharp
// 先通过子系统 API 拿到 StringWriter 实例
StringWriter stringWriter = ...;
stringWriter.WriteVec2(vec2);
```

### WriteVec3
`public void WriteVec3(Vec3 vec3)`

**用途 / Purpose:** 将vec3写入目标位置。

```csharp
// 先通过子系统 API 拿到 StringWriter 实例
StringWriter stringWriter = ...;
stringWriter.WriteVec3(vec3);
```

### WriteVec3Int
`public void WriteVec3Int(Vec3i vec3)`

**用途 / Purpose:** 将vec3 int写入目标位置。

```csharp
// 先通过子系统 API 拿到 StringWriter 实例
StringWriter stringWriter = ...;
stringWriter.WriteVec3Int(vec3);
```

### WriteSByte
`public void WriteSByte(sbyte value)`

**用途 / Purpose:** 将s byte写入目标位置。

```csharp
// 先通过子系统 API 拿到 StringWriter 实例
StringWriter stringWriter = ...;
stringWriter.WriteSByte(0);
```

### WriteUShort
`public void WriteUShort(ushort value)`

**用途 / Purpose:** 将u short写入目标位置。

```csharp
// 先通过子系统 API 拿到 StringWriter 实例
StringWriter stringWriter = ...;
stringWriter.WriteUShort(0);
```

### WriteDouble
`public void WriteDouble(double value)`

**用途 / Purpose:** 将double写入目标位置。

```csharp
// 先通过子系统 API 拿到 StringWriter 实例
StringWriter stringWriter = ...;
stringWriter.WriteDouble(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
StringWriter stringWriter = ...;
stringWriter.WriteSerializableObject(serializableObject);
```

## 参见

- [本区域目录](../)