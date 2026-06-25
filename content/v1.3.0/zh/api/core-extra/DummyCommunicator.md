---
title: "DummyCommunicator"
description: "DummyCommunicator 的自动生成类参考。"
---
# DummyCommunicator

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class DummyCommunicator : ICommunicator`
**Base:** `ICommunicator`
**File:** `TaleWorlds.Core/DummyCommunicator.cs`

## 概述

`DummyCommunicator` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `VirtualPlayer` | `public VirtualPlayer VirtualPlayer { get; }` |
| `IsNetworkActive` | `public bool IsNetworkActive { get; }` |
| `IsConnectionActive` | `public bool IsConnectionActive { get; set; }` |
| `IsServerPeer` | `public bool IsServerPeer { get; set; }` |
| `IsSynchronized` | `public bool IsSynchronized { get; set; }` |

## 主要方法

### OnSynchronizeComponentTo
`public void OnSynchronizeComponentTo(VirtualPlayer peer, PeerComponent component)`

**用途 / Purpose:** **用途 / Purpose:** 在 synchronize component to 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DummyCommunicator 实例
DummyCommunicator dummyCommunicator = ...;
dummyCommunicator.OnSynchronizeComponentTo(peer, component);
```

### OnAddComponent
`public void OnAddComponent(PeerComponent component)`

**用途 / Purpose:** **用途 / Purpose:** 在 add component 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DummyCommunicator 实例
DummyCommunicator dummyCommunicator = ...;
dummyCommunicator.OnAddComponent(component);
```

### OnRemoveComponent
`public void OnRemoveComponent(PeerComponent component)`

**用途 / Purpose:** **用途 / Purpose:** 在 remove component 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DummyCommunicator 实例
DummyCommunicator dummyCommunicator = ...;
dummyCommunicator.OnRemoveComponent(component);
```

### CreateAsServer
`public static DummyCommunicator CreateAsServer(int index, string name)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 as server 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
DummyCommunicator.CreateAsServer(0, "example");
```

### CreateAsClient
`public static DummyCommunicator CreateAsClient(string name, int index)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 as client 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
DummyCommunicator.CreateAsClient("example", 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
DummyCommunicator dummyCommunicator = ...;
dummyCommunicator.OnSynchronizeComponentTo(peer, component);
```

## 参见

- [本区域目录](../)