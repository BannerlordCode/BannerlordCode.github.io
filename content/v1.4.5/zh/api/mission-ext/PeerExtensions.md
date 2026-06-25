---
title: "PeerExtensions"
description: "PeerExtensions 的自动生成类参考。"
---
# PeerExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class PeerExtensions`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/PeerExtensions.cs`

## 概述

`PeerExtensions` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SendExistingObjects
`public static void SendExistingObjects(this NetworkCommunicator peer, Mission mission)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
PeerExtensions.SendExistingObjects(peer, mission);
```

### GetPeer
`public static VirtualPlayer GetPeer(this PeerComponent peerComponent)`

**用途 / Purpose:** 读取并返回当前对象中 「peer」 的结果。

```csharp
// 静态调用，不需要实例
PeerExtensions.GetPeer(peerComponent);
```

### GetNetworkPeer
`public static NetworkCommunicator GetNetworkPeer(this PeerComponent peerComponent)`

**用途 / Purpose:** 读取并返回当前对象中 「network peer」 的结果。

```csharp
// 静态调用，不需要实例
PeerExtensions.GetNetworkPeer(peerComponent);
```

### RemoveComponent
`public static void RemoveComponent(this NetworkCommunicator networkPeer, PeerComponent component)`

**用途 / Purpose:** 从当前容器或状态中移除 「component」。

```csharp
// 静态调用，不需要实例
PeerExtensions.RemoveComponent(networkPeer, component);
```

### GetComponent
`public static PeerComponent GetComponent(this NetworkCommunicator networkPeer, uint componentId)`

**用途 / Purpose:** 读取并返回当前对象中 「component」 的结果。

```csharp
// 静态调用，不需要实例
PeerExtensions.GetComponent(networkPeer, 0);
```

### AddComponent
`public static void AddComponent(this NetworkCommunicator networkPeer, Type peerComponentType)`

**用途 / Purpose:** 将 「component」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
PeerExtensions.AddComponent(networkPeer, peerComponentType);
```

### AddComponent
`public static void AddComponent(this NetworkCommunicator networkPeer, uint componentId)`

**用途 / Purpose:** 将 「component」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
PeerExtensions.AddComponent(networkPeer, 0);
```

## 使用示例

```csharp
PeerExtensions.SendExistingObjects(peer, mission);
```

## 参见

- [本区域目录](../)