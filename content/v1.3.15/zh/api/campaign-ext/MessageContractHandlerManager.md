---
title: "MessageContractHandlerManager"
description: "MessageContractHandlerManager 的自动生成类参考。"
---
# MessageContractHandlerManager

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public class MessageContractHandlerManager`
**Base:** 无
**File:** `TaleWorlds.Network/MessageContractHandlerManager.cs`

## 概述

`MessageContractHandlerManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `MessageContractHandlerManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### HandleMessage
`public void HandleMessage(MessageContract messageContract)`

**用途 / Purpose:** 执行与 「message」 相关的响应逻辑。

```csharp
// 先通过子系统 API 拿到 MessageContractHandlerManager 实例
MessageContractHandlerManager messageContractHandlerManager = ...;
messageContractHandlerManager.HandleMessage(messageContract);
```

### HandleNetworkMessage
`public void HandleNetworkMessage(NetworkMessage networkMessage)`

**用途 / Purpose:** 执行与 「network message」 相关的响应逻辑。

```csharp
// 先通过子系统 API 拿到 MessageContractHandlerManager 实例
MessageContractHandlerManager messageContractHandlerManager = ...;
messageContractHandlerManager.HandleNetworkMessage(networkMessage);
```

### ContainsMessageHandler
`public bool ContainsMessageHandler(byte id)`

**用途 / Purpose:** 判断当前对象是否包含「message handler」。

```csharp
// 先通过子系统 API 拿到 MessageContractHandlerManager 实例
MessageContractHandlerManager messageContractHandlerManager = ...;
var result = messageContractHandlerManager.ContainsMessageHandler(0);
```

## 使用示例

```csharp
var manager = MessageContractHandlerManager.Current;
```

## 参见

- [本区域目录](../)