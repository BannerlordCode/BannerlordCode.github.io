---
title: "MessageContract"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MessageContract`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MessageContract

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public abstract class MessageContract`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Network/TaleWorlds.Network/MessageContract.cs`

## 概述

`MessageContract` 位于 `TaleWorlds.Network`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Network` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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