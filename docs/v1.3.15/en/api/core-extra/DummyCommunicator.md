<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DummyCommunicator`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DummyCommunicator

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `DummyCommunicator` is a class in the `TaleWorlds.Core` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `VirtualPlayer` | `public VirtualPlayer VirtualPlayer { get; }` |
| `IsNetworkActive` | `public bool IsNetworkActive { get; }` |
| `IsConnectionActive` | `public bool IsConnectionActive { get; set; }` |
| `IsServerPeer` | `public bool IsServerPeer { get; set; }` |
| `IsSynchronized` | `public bool IsSynchronized { get; set; }` |


## Key Methods

### OnSynchronizeComponentTo

```csharp
public void OnSynchronizeComponentTo(VirtualPlayer peer, PeerComponent component)
```

### OnAddComponent

```csharp
public void OnAddComponent(PeerComponent component)
```

### OnRemoveComponent

```csharp
public void OnRemoveComponent(PeerComponent component)
```

### CreateAsServer

```csharp
public static DummyCommunicator CreateAsServer(int index, string name)
```

### CreateAsClient

```csharp
public static DummyCommunicator CreateAsClient(string name, int index)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)