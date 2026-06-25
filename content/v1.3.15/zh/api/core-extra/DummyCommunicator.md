---
title: "DummyCommunicator"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DummyCommunicator`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 当 `synchronize component to` 事件触发时调用此方法。

### OnAddComponent
`public void OnAddComponent(PeerComponent component)`

**用途 / Purpose:** 当 `add component` 事件触发时调用此方法。

### OnRemoveComponent
`public void OnRemoveComponent(PeerComponent component)`

**用途 / Purpose:** 当 `remove component` 事件触发时调用此方法。

### CreateAsServer
`public static DummyCommunicator CreateAsServer(int index, string name)`

**用途 / Purpose:** 创建一个 `as server` 实例或对象。

### CreateAsClient
`public static DummyCommunicator CreateAsClient(string name, int index)`

**用途 / Purpose:** 创建一个 `as client` 实例或对象。

## 使用示例

```csharp
var value = new DummyCommunicator();
value.OnSynchronizeComponentTo(peer, component);
```

## 参见

- [完整类目录](../catalog)