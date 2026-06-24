<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StringReader`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# StringReader

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class StringReader : IReader`
**Base:** `IReader`
**File:** `TaleWorlds.Library/StringReader.cs`

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

**用途 / Purpose:** 处理 `read serializable object` 相关逻辑。

### ReadInt
`public int ReadInt()`

**用途 / Purpose:** 处理 `read int` 相关逻辑。

### ReadShort
`public short ReadShort()`

**用途 / Purpose:** 处理 `read short` 相关逻辑。

### ReadString
`public string ReadString()`

**用途 / Purpose:** 处理 `read string` 相关逻辑。

### ReadColor
`public Color ReadColor()`

**用途 / Purpose:** 处理 `read color` 相关逻辑。

### ReadBool
`public bool ReadBool()`

**用途 / Purpose:** 处理 `read bool` 相关逻辑。

### ReadFloat
`public float ReadFloat()`

**用途 / Purpose:** 处理 `read float` 相关逻辑。

### ReadUInt
`public uint ReadUInt()`

**用途 / Purpose:** 处理 `read u int` 相关逻辑。

### ReadULong
`public ulong ReadULong()`

**用途 / Purpose:** 处理 `read u long` 相关逻辑。

### ReadLong
`public long ReadLong()`

**用途 / Purpose:** 处理 `read long` 相关逻辑。

### ReadByte
`public byte ReadByte()`

**用途 / Purpose:** 处理 `read byte` 相关逻辑。

### ReadBytes
`public byte ReadBytes(int length)`

**用途 / Purpose:** 处理 `read bytes` 相关逻辑。

### ReadVec2
`public Vec2 ReadVec2()`

**用途 / Purpose:** 处理 `read vec2` 相关逻辑。

### ReadVec3
`public Vec3 ReadVec3()`

**用途 / Purpose:** 处理 `read vec3` 相关逻辑。

### ReadVec3Int
`public Vec3i ReadVec3Int()`

**用途 / Purpose:** 处理 `read vec3 int` 相关逻辑。

### ReadSByte
`public sbyte ReadSByte()`

**用途 / Purpose:** 处理 `read s byte` 相关逻辑。

### ReadUShort
`public ushort ReadUShort()`

**用途 / Purpose:** 处理 `read u short` 相关逻辑。

### ReadDouble
`public double ReadDouble()`

**用途 / Purpose:** 处理 `read double` 相关逻辑。

## 使用示例

```csharp
var value = new StringReader();
value.ReadSerializableObject();
```

## 参见

- [完整类目录](../catalog)