<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PeerExtensions`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PeerExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `PeerExtensions` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)