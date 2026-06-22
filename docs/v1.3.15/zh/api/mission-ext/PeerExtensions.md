<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PeerExtensions`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PeerExtensions

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`PeerExtensions` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

### SendExistingObjects

```csharp
public static void SendExistingObjects(this NetworkCommunicator peer, Mission mission)
```

### GetPeer

```csharp
public static VirtualPlayer GetPeer(this PeerComponent peerComponent)
```

### GetNetworkPeer

```csharp
public static NetworkCommunicator GetNetworkPeer(this PeerComponent peerComponent)
```

### RemoveComponent

```csharp
public static void RemoveComponent(this NetworkCommunicator networkPeer, PeerComponent component)
```

### GetComponent

```csharp
public static PeerComponent GetComponent(this NetworkCommunicator networkPeer, uint componentId)
```

### AddComponent

```csharp
public static void AddComponent(this NetworkCommunicator networkPeer, Type peerComponentType)
```

### AddComponent

```csharp
public static void AddComponent(this NetworkCommunicator networkPeer, uint componentId)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)