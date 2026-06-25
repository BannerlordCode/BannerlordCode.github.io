---
title: "MessageServiceConnection"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MessageServiceConnection`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MessageServiceConnection

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public abstract class MessageServiceConnection`
**Base:** 无
**File:** `TaleWorlds.Network/MessageServiceConnection.cs`

## 概述

`MessageServiceConnection` 位于 `TaleWorlds.Network`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Network` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Address` | `public string Address { get; set; }` |

## 主要方法

### SendAsync
`public abstract Task SendAsync(string text)`

**用途 / Purpose:** 处理 `send async` 相关逻辑。

### Init
`public abstract void Init(string address, string token)`

**用途 / Purpose:** 初始化 `init` 的状态、资源或绑定。

### RegisterProxyClient
`public abstract void RegisterProxyClient(string name, IMessageProxyClient playerClient)`

**用途 / Purpose:** 处理 `register proxy client` 相关逻辑。

### StartAsync
`public abstract Task StartAsync()`

**用途 / Purpose:** 处理 `start async` 相关逻辑。

### StopAsync
`public abstract Task StopAsync()`

**用途 / Purpose:** 处理 `stop async` 相关逻辑。

### ClosedDelegate
`public delegate Task ClosedDelegate()`

**用途 / Purpose:** 处理 `closed delegate` 相关逻辑。

### StateChangedDelegate
`public delegate void StateChangedDelegate(ConnectionState oldState, ConnectionState newState)`

**用途 / Purpose:** 处理 `state changed delegate` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomMessageServiceConnection();
```

## 参见

- [完整类目录](../catalog)