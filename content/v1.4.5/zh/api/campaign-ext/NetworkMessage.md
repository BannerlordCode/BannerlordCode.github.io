---
title: "NetworkMessage"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NetworkMessage`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# NetworkMessage

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public class NetworkMessage : INetworkMessageWriter, INetworkMessageReader`
**Base:** `INetworkMessageWriter`
**File:** `Bannerlord.Source/bin/TaleWorlds.Network/TaleWorlds.Network/NetworkMessage.cs`

## 概述

`NetworkMessage` 位于 `TaleWorlds.Network`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Network` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Write
`public void Write(string data)`

**用途 / Purpose:** 处理 `write` 相关逻辑。

### Write
`public void Write(int data)`

**用途 / Purpose:** 处理 `write` 相关逻辑。

### Write
`public void Write(short data)`

**用途 / Purpose:** 处理 `write` 相关逻辑。

### Write
`public void Write(bool data)`

**用途 / Purpose:** 处理 `write` 相关逻辑。

### Write
`public void Write(byte data)`

**用途 / Purpose:** 处理 `write` 相关逻辑。

### Write
`public void Write(float data)`

**用途 / Purpose:** 处理 `write` 相关逻辑。

### Write
`public void Write(long data)`

**用途 / Purpose:** 处理 `write` 相关逻辑。

### Write
`public void Write(ulong data)`

**用途 / Purpose:** 处理 `write` 相关逻辑。

### Write
`public void Write(Guid data)`

**用途 / Purpose:** 处理 `write` 相关逻辑。

### Write
`public void Write(byte data)`

**用途 / Purpose:** 处理 `write` 相关逻辑。

### ReadInt32
`public int ReadInt32()`

**用途 / Purpose:** 处理 `read int32` 相关逻辑。

### ReadInt16
`public short ReadInt16()`

**用途 / Purpose:** 处理 `read int16` 相关逻辑。

### ReadBoolean
`public bool ReadBoolean()`

**用途 / Purpose:** 处理 `read boolean` 相关逻辑。

### ReadByte
`public byte ReadByte()`

**用途 / Purpose:** 处理 `read byte` 相关逻辑。

### ReadString
`public string ReadString()`

**用途 / Purpose:** 处理 `read string` 相关逻辑。

### ReadFloat
`public float ReadFloat()`

**用途 / Purpose:** 处理 `read float` 相关逻辑。

### ReadInt64
`public long ReadInt64()`

**用途 / Purpose:** 处理 `read int64` 相关逻辑。

### ReadUInt64
`public ulong ReadUInt64()`

**用途 / Purpose:** 处理 `read u int64` 相关逻辑。

### ReadGuid
`public Guid ReadGuid()`

**用途 / Purpose:** 处理 `read guid` 相关逻辑。

### ReadByteArray
`public byte ReadByteArray()`

**用途 / Purpose:** 处理 `read byte array` 相关逻辑。

## 使用示例

```csharp
var value = new NetworkMessage();
value.Write("example");
```

## 参见

- [完整类目录](../catalog)