---
title: "NetworkSession"
description: "NetworkSession 的自动生成类参考。"
---
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

**用途 / Purpose:** **用途 / Purpose:** 调用 SendDisconnectMessage 对应的操作。

```csharp
// 先通过子系统 API 拿到 NetworkSession 实例
NetworkSession networkSession = ...;
networkSession.SendDisconnectMessage();
```

### Tick
`public virtual void Tick()`

**用途 / Purpose:** **用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 NetworkSession 实例
NetworkSession networkSession = ...;
networkSession.Tick();
```

### SendMessage
`public void SendMessage(MessageContract message)`

**用途 / Purpose:** **用途 / Purpose:** 调用 SendMessage 对应的操作。

```csharp
// 先通过子系统 API 拿到 NetworkSession 实例
NetworkSession networkSession = ...;
networkSession.SendMessage(message);
```

### ComponentMessageHandlerDelegate
`public delegate void ComponentMessageHandlerDelegate(NetworkMessage networkMessage)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ComponentMessageHandlerDelegate 对应的操作。

```csharp
// 先通过子系统 API 拿到 NetworkSession 实例
NetworkSession networkSession = ...;
networkSession.ComponentMessageHandlerDelegate(networkMessage);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
NetworkSession instance = ...;
```

## 参见

- [本区域目录](../)