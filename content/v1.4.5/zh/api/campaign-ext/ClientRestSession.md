---
title: "ClientRestSession"
description: "ClientRestSession 的自动生成类参考。"
---
# ClientRestSession

**Namespace:** TaleWorlds.Diamond.Rest
**Module:** TaleWorlds.Diamond
**Type:** `public class ClientRestSession : IClientSession`
**Base:** `IClientSession`
**File:** `bin/TaleWorlds.Diamond/TaleWorlds.Diamond.Rest/ClientRestSession.cs`

## 概述

`ClientRestSession` 位于 `TaleWorlds.Diamond.Rest`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Diamond.Rest` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsConnected` | `public bool IsConnected { get; }` |
| `Client` | `public IClient Client { get; }` |

## 主要方法

### Connect
`public void Connect()`

**用途 / Purpose:** 处理与 「connect」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 ClientRestSession 实例
ClientRestSession clientRestSession = ...;
clientRestSession.Connect();
```

### Disconnect
`public void Disconnect()`

**用途 / Purpose:** 处理与 「disconnect」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 ClientRestSession 实例
ClientRestSession clientRestSession = ...;
clientRestSession.Disconnect();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ClientRestSession clientRestSession = ...;
clientRestSession.Connect();
```

## 参见

- [本区域目录](../)