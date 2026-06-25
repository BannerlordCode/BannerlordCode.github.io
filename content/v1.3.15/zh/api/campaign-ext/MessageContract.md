---
title: "MessageContract"
description: "MessageContract 的自动生成类参考。"
---
# MessageContract

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public abstract class MessageContract`
**Base:** 无
**File:** `TaleWorlds.Network/MessageContract.cs`

## 概述

`MessageContract` 位于 `TaleWorlds.Network`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Network` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MessageId` | `public byte MessageId { get; }` |

## 主要方法

### CreateMessageContract
`public static MessageContract CreateMessageContract(Type messageContractType)`

**用途 / Purpose:** 构建一个新的 message contract 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MessageContract.CreateMessageContract(messageContractType);
```

### SerializeToNetworkMessage
`public abstract void SerializeToNetworkMessage(INetworkMessageWriter networkMessage)`

**用途 / Purpose:** 将to network message序列化为可存储或传输的格式。

```csharp
// 先通过子系统 API 拿到 MessageContract 实例
MessageContract messageContract = ...;
messageContract.SerializeToNetworkMessage(networkMessage);
```

### DeserializeFromNetworkMessage
`public abstract void DeserializeFromNetworkMessage(INetworkMessageReader networkMessage)`

**用途 / Purpose:** 从序列化数据还原出from network message。

```csharp
// 先通过子系统 API 拿到 MessageContract 实例
MessageContract messageContract = ...;
messageContract.DeserializeFromNetworkMessage(networkMessage);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MessageContract instance = ...;
```

## 参见

- [本区域目录](../)