---
title: "SocketMessage"
description: "SocketMessage 的自动生成类参考。"
---
# SocketMessage

**Namespace:** TaleWorlds.Diamond.Socket
**Module:** TaleWorlds.Diamond
**Type:** `public class SocketMessage : MessageContract`
**Base:** `MessageContract`
**File:** `TaleWorlds.Diamond/Socket/SocketMessage.cs`

## 概述

`SocketMessage` 位于 `TaleWorlds.Diamond.Socket`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Diamond.Socket` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Message` | `public Message Message { get; }` |

## 主要方法

### SerializeToNetworkMessage
`public override void SerializeToNetworkMessage(INetworkMessageWriter networkMessage)`

**用途 / Purpose:** **用途 / Purpose:** 将to network message序列化为可存储或传输的格式。

```csharp
// 先通过子系统 API 拿到 SocketMessage 实例
SocketMessage socketMessage = ...;
socketMessage.SerializeToNetworkMessage(networkMessage);
```

### DeserializeFromNetworkMessage
`public override void DeserializeFromNetworkMessage(INetworkMessageReader networkMessage)`

**用途 / Purpose:** **用途 / Purpose:** 从序列化数据还原出from network message。

```csharp
// 先通过子系统 API 拿到 SocketMessage 实例
SocketMessage socketMessage = ...;
socketMessage.DeserializeFromNetworkMessage(networkMessage);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SocketMessage socketMessage = ...;
socketMessage.SerializeToNetworkMessage(networkMessage);
```

## 参见

- [本区域目录](../)