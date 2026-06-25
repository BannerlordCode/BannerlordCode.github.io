---
title: "MessageContract"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MessageContract`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MessageContract

**命名空间:** TaleWorlds.Network
**模块:** TaleWorlds.Network
**类型:** `public abstract class MessageContract`
**领域:** campaign-ext

## 概述

`MessageContract` 位于 `TaleWorlds.Network`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Network` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MessageId` | `public byte MessageId { get; }` |

## 主要方法

### CreateMessageContract
`public static MessageContract CreateMessageContract(Type messageContractType)`

**用途 / Purpose:** 创建一个 `message contract` 实例或对象。

### SerializeToNetworkMessage
`public abstract void SerializeToNetworkMessage(INetworkMessageWriter networkMessage)`

**用途 / Purpose:** 处理 `serialize to network message` 相关逻辑。

### DeserializeFromNetworkMessage
`public abstract void DeserializeFromNetworkMessage(INetworkMessageReader networkMessage)`

**用途 / Purpose:** 处理 `deserialize from network message` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomMessageContract();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
