---
title: "NetworkMessage"
description: "NetworkMessage 的自动生成类参考。"
---
# NetworkMessage

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public class NetworkMessage : INetworkMessageWriter, INetworkMessageReader`
**Base:** `INetworkMessageWriter`
**File:** `bin/TaleWorlds.Network/TaleWorlds.Network/NetworkMessage.cs`

## 概述

`NetworkMessage` 位于 `TaleWorlds.Network`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Network` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Write
`public void Write(string data)`

**用途 / Purpose:** 将当前对象的数据写入目标位置。

```csharp
// 先通过子系统 API 拿到 NetworkMessage 实例
NetworkMessage networkMessage = ...;
networkMessage.Write("example");
```

### Write
`public void Write(int data)`

**用途 / Purpose:** 将当前对象的数据写入目标位置。

```csharp
// 先通过子系统 API 拿到 NetworkMessage 实例
NetworkMessage networkMessage = ...;
networkMessage.Write(0);
```

### Write
`public void Write(short data)`

**用途 / Purpose:** 将当前对象的数据写入目标位置。

```csharp
// 先通过子系统 API 拿到 NetworkMessage 实例
NetworkMessage networkMessage = ...;
networkMessage.Write(0);
```

### Write
`public void Write(bool data)`

**用途 / Purpose:** 将当前对象的数据写入目标位置。

```csharp
// 先通过子系统 API 拿到 NetworkMessage 实例
NetworkMessage networkMessage = ...;
networkMessage.Write(false);
```

### Write
`public void Write(byte data)`

**用途 / Purpose:** 将当前对象的数据写入目标位置。

```csharp
// 先通过子系统 API 拿到 NetworkMessage 实例
NetworkMessage networkMessage = ...;
networkMessage.Write(0);
```

### Write
`public void Write(float data)`

**用途 / Purpose:** 将当前对象的数据写入目标位置。

```csharp
// 先通过子系统 API 拿到 NetworkMessage 实例
NetworkMessage networkMessage = ...;
networkMessage.Write(0);
```

### Write
`public void Write(long data)`

**用途 / Purpose:** 将当前对象的数据写入目标位置。

```csharp
// 先通过子系统 API 拿到 NetworkMessage 实例
NetworkMessage networkMessage = ...;
networkMessage.Write(0);
```

### Write
`public void Write(ulong data)`

**用途 / Purpose:** 将当前对象的数据写入目标位置。

```csharp
// 先通过子系统 API 拿到 NetworkMessage 实例
NetworkMessage networkMessage = ...;
networkMessage.Write(0);
```

### Write
`public void Write(Guid data)`

**用途 / Purpose:** 将当前对象的数据写入目标位置。

```csharp
// 先通过子系统 API 拿到 NetworkMessage 实例
NetworkMessage networkMessage = ...;
networkMessage.Write(data);
```

### Write
`public void Write(byte data)`

**用途 / Purpose:** 将当前对象的数据写入目标位置。

```csharp
// 先通过子系统 API 拿到 NetworkMessage 实例
NetworkMessage networkMessage = ...;
networkMessage.Write(0);
```

### ReadInt32
`public int ReadInt32()`

**用途 / Purpose:** 从当前实例读取int32相关数据。

```csharp
// 先通过子系统 API 拿到 NetworkMessage 实例
NetworkMessage networkMessage = ...;
var result = networkMessage.ReadInt32();
```

### ReadInt16
`public short ReadInt16()`

**用途 / Purpose:** 从当前实例读取int16相关数据。

```csharp
// 先通过子系统 API 拿到 NetworkMessage 实例
NetworkMessage networkMessage = ...;
var result = networkMessage.ReadInt16();
```

### ReadBoolean
`public bool ReadBoolean()`

**用途 / Purpose:** 从当前实例读取boolean相关数据。

```csharp
// 先通过子系统 API 拿到 NetworkMessage 实例
NetworkMessage networkMessage = ...;
var result = networkMessage.ReadBoolean();
```

### ReadByte
`public byte ReadByte()`

**用途 / Purpose:** 从当前实例读取byte相关数据。

```csharp
// 先通过子系统 API 拿到 NetworkMessage 实例
NetworkMessage networkMessage = ...;
var result = networkMessage.ReadByte();
```

### ReadString
`public string ReadString()`

**用途 / Purpose:** 从当前实例读取string相关数据。

```csharp
// 先通过子系统 API 拿到 NetworkMessage 实例
NetworkMessage networkMessage = ...;
var result = networkMessage.ReadString();
```

### ReadFloat
`public float ReadFloat()`

**用途 / Purpose:** 从当前实例读取float相关数据。

```csharp
// 先通过子系统 API 拿到 NetworkMessage 实例
NetworkMessage networkMessage = ...;
var result = networkMessage.ReadFloat();
```

### ReadInt64
`public long ReadInt64()`

**用途 / Purpose:** 从当前实例读取int64相关数据。

```csharp
// 先通过子系统 API 拿到 NetworkMessage 实例
NetworkMessage networkMessage = ...;
var result = networkMessage.ReadInt64();
```

### ReadUInt64
`public ulong ReadUInt64()`

**用途 / Purpose:** 从当前实例读取u int64相关数据。

```csharp
// 先通过子系统 API 拿到 NetworkMessage 实例
NetworkMessage networkMessage = ...;
var result = networkMessage.ReadUInt64();
```

### ReadGuid
`public Guid ReadGuid()`

**用途 / Purpose:** 从当前实例读取guid相关数据。

```csharp
// 先通过子系统 API 拿到 NetworkMessage 实例
NetworkMessage networkMessage = ...;
var result = networkMessage.ReadGuid();
```

### ReadByteArray
`public byte ReadByteArray()`

**用途 / Purpose:** 从当前实例读取byte array相关数据。

```csharp
// 先通过子系统 API 拿到 NetworkMessage 实例
NetworkMessage networkMessage = ...;
var result = networkMessage.ReadByteArray();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
NetworkMessage networkMessage = ...;
networkMessage.Write("example");
```

## 参见

- [本区域目录](../)