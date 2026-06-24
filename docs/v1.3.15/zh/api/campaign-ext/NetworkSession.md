<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NetworkSession`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NetworkSession

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public abstract class NetworkSession`
**Base:** 无
**File:** `TaleWorlds.Network/NetworkSession.cs`

## 概述

`NetworkSession` 位于 `TaleWorlds.Network`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Network` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; set; }` |
| `Address` | `public string Address { get; }` |
| `LastMessageSentTime` | `public int LastMessageSentTime { get; }` |
| `IsConnected` | `public bool IsConnected { get; }` |

## 主要方法

### SendDisconnectMessage
`public void SendDisconnectMessage()`

**用途 / Purpose:** 处理 `send disconnect message` 相关逻辑。

### Tick
`public virtual void Tick()`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### SendMessage
`public void SendMessage(MessageContract message)`

**用途 / Purpose:** 处理 `send message` 相关逻辑。

### ComponentMessageHandlerDelegate
`public delegate void ComponentMessageHandlerDelegate(NetworkMessage networkMessage)`

**用途 / Purpose:** 处理 `component message handler delegate` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomNetworkSession();
```

## 参见

- [完整类目录](../catalog)