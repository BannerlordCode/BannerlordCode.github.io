<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NetworkSession`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NetworkSession

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `NetworkSession` is a class in the `TaleWorlds.Network` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; set; }` |
| `Address` | `public string Address { get; }` |
| `LastMessageSentTime` | `public int LastMessageSentTime { get; }` |
| `IsConnected` | `public bool IsConnected { get; }` |


## Key Methods

### SendDisconnectMessage

```csharp
public void SendDisconnectMessage()
```

### Tick

```csharp
public virtual void Tick()
```

### SendMessage

```csharp
public void SendMessage(MessageContract message)
```

### ComponentMessageHandlerDelegate

```csharp
public delegate void ComponentMessageHandlerDelegate(NetworkMessage networkMessage)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)