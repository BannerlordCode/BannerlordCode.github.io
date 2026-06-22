<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MessageServiceConnection`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MessageServiceConnection

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `MessageServiceConnection` is a class in the `TaleWorlds.Network` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Address` | `public string Address { get; set; }` |


## Key Methods

### SendAsync

```csharp
public abstract Task SendAsync(string text)
```

### Init

```csharp
public abstract void Init(string address, string token)
```

### RegisterProxyClient

```csharp
public abstract void RegisterProxyClient(string name, IMessageProxyClient playerClient)
```

### StartAsync

```csharp
public abstract Task StartAsync()
```

### StopAsync

```csharp
public abstract Task StopAsync()
```

### ClosedDelegate

```csharp
public delegate Task ClosedDelegate()
```

### StateChangedDelegate

```csharp
public delegate void StateChangedDelegate(ConnectionState oldState, ConnectionState newState)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)