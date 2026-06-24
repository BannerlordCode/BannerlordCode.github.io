<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PeerExtensions`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PeerExtensions

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public static class PeerExtensions`
**领域:** mission-ext

## 概述

`PeerExtensions` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SendExistingObjects
`public static void SendExistingObjects(this NetworkCommunicator peer, Mission mission)`

**用途 / Purpose:** 处理 `send existing objects` 相关逻辑。

### GetPeer
`public static VirtualPlayer GetPeer(this PeerComponent peerComponent)`

**用途 / Purpose:** 获取 `peer` 的当前值。

### GetNetworkPeer
`public static NetworkCommunicator GetNetworkPeer(this PeerComponent peerComponent)`

**用途 / Purpose:** 获取 `network peer` 的当前值。

### RemoveComponent
`public static void RemoveComponent(this NetworkCommunicator networkPeer, PeerComponent component)`

**用途 / Purpose:** 从当前集合/状态中移除 `component`。

### GetComponent
`public static PeerComponent GetComponent(this NetworkCommunicator networkPeer, uint componentId)`

**用途 / Purpose:** 获取 `component` 的当前值。

### AddComponent
`public static void AddComponent(this NetworkCommunicator networkPeer, Type peerComponentType)`

**用途 / Purpose:** 向当前集合/状态中添加 `component`。

### AddComponent
`public static void AddComponent(this NetworkCommunicator networkPeer, uint componentId)`

**用途 / Purpose:** 向当前集合/状态中添加 `component`。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
PeerExtensions.SendExistingObjects(peer, mission);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
