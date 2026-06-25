---
title: "MessageContractHandlerManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MessageContractHandlerManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 处理 `message` 事件或回调。

### HandleNetworkMessage
`public void HandleNetworkMessage(NetworkMessage networkMessage)`

**用途 / Purpose:** 处理 `network message` 事件或回调。

### ContainsMessageHandler
`public bool ContainsMessageHandler(byte id)`

**用途 / Purpose:** 处理 `contains message handler` 相关逻辑。

## 使用示例

```csharp
var manager = MessageContractHandlerManager.Current;
```

## 参见

- [完整类目录](../catalog)