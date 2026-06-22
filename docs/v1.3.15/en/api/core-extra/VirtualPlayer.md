<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VirtualPlayer`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VirtualPlayer

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `VirtualPlayer` is a class in the `TaleWorlds.Core` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `PeerComponents` | `public static Dictionary<Type, object> PeerComponents { get; }` |
| `BannerCode` | `public string BannerCode { get; set; }` |
| `BodyProperties` | `public BodyProperties BodyProperties { get; }` |
| `Race` | `public int Race { get; }` |
| `IsFemale` | `public bool IsFemale { get; }` |
| `Id` | `public PlayerId Id { get; }` |
| `Index` | `public int Index { get; }` |
| `IsMine` | `public bool IsMine { get; }` |
| `UserName` | `public string UserName { get; }` |
| `ChosenBadgeIndex` | `public int ChosenBadgeIndex { get; set; }` |


## Key Methods

### Reset

```csharp
public static void Reset()
```

### AddComponent

```csharp
public PeerComponent AddComponent(Type peerComponentType)
```

### AddComponent

```csharp
public PeerComponent AddComponent(uint componentId)
```

### GetComponent

```csharp
public PeerComponent GetComponent(uint componentId)
```

### GetComponent

```csharp
public PeerComponent GetComponent(Type peerComponentType)
```

### RemoveComponent

```csharp
public void RemoveComponent(PeerComponent component)
```

### OnDisconnect

```csharp
public void OnDisconnect()
```

### SynchronizeComponentsTo

```csharp
public void SynchronizeComponentsTo(VirtualPlayer peer)
```

### UpdateIndexForReconnectingPlayer

```csharp
public void UpdateIndexForReconnectingPlayer(int playerIndex)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)