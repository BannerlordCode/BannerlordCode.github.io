---
title: "StringWriter"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StringWriter`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 处理 `write serializable object` 相关逻辑。

### WriteByte
`public void WriteByte(byte value)`

**用途 / Purpose:** 处理 `write byte` 相关逻辑。

### WriteBytes
`public void WriteBytes(byte bytes)`

**用途 / Purpose:** 处理 `write bytes` 相关逻辑。

### WriteInt
`public void WriteInt(int value)`

**用途 / Purpose:** 处理 `write int` 相关逻辑。

### WriteShort
`public void WriteShort(short value)`

**用途 / Purpose:** 处理 `write short` 相关逻辑。

### WriteString
`public void WriteString(string value)`

**用途 / Purpose:** 处理 `write string` 相关逻辑。

### WriteColor
`public void WriteColor(Color value)`

**用途 / Purpose:** 处理 `write color` 相关逻辑。

### WriteBool
`public void WriteBool(bool value)`

**用途 / Purpose:** 处理 `write bool` 相关逻辑。

### WriteFloat
`public void WriteFloat(float value)`

**用途 / Purpose:** 处理 `write float` 相关逻辑。

### WriteUInt
`public void WriteUInt(uint value)`

**用途 / Purpose:** 处理 `write u int` 相关逻辑。

### WriteULong
`public void WriteULong(ulong value)`

**用途 / Purpose:** 处理 `write u long` 相关逻辑。

### WriteLong
`public void WriteLong(long value)`

**用途 / Purpose:** 处理 `write long` 相关逻辑。

### WriteVec2
`public void WriteVec2(Vec2 vec2)`

**用途 / Purpose:** 处理 `write vec2` 相关逻辑。

### WriteVec3
`public void WriteVec3(Vec3 vec3)`

**用途 / Purpose:** 处理 `write vec3` 相关逻辑。

### WriteVec3Int
`public void WriteVec3Int(Vec3i vec3)`

**用途 / Purpose:** 处理 `write vec3 int` 相关逻辑。

### WriteSByte
`public void WriteSByte(sbyte value)`

**用途 / Purpose:** 处理 `write s byte` 相关逻辑。

### WriteUShort
`public void WriteUShort(ushort value)`

**用途 / Purpose:** 处理 `write u short` 相关逻辑。

### WriteDouble
`public void WriteDouble(double value)`

**用途 / Purpose:** 处理 `write double` 相关逻辑。

## 使用示例

```csharp
var value = new StringWriter();
value.WriteSerializableObject(serializableObject);
```

## 参见

- [完整类目录](../catalog)