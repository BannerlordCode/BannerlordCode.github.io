<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ServersideSessionManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ServersideSessionManager

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `ServersideSessionManager` is a class in the `TaleWorlds.Network` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `PeerAliveCoeff` | `public float PeerAliveCoeff { get; set; }` |


## Key Methods

### Activate

```csharp
public void Activate(ushort port, ServersideSessionManager.ThreadType threadType = ServersideSessionManager.ThreadType.Single, int readWriteThreadCount = 1)
```

### GetPeer

```csharp
public ServersideSession GetPeer(int peerIndex)
```

### Tick

```csharp
public virtual void Tick()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)