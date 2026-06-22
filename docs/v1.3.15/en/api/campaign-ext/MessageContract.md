<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MessageContract`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MessageContract

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `MessageContract` is a class in the `TaleWorlds.Network` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `MessageId` | `public byte MessageId { get; }` |


## Key Methods

### CreateMessageContract

```csharp
public static MessageContract CreateMessageContract(Type messageContractType)
```

### SerializeToNetworkMessage

```csharp
public abstract void SerializeToNetworkMessage(INetworkMessageWriter networkMessage)
```

### DeserializeFromNetworkMessage

```csharp
public abstract void DeserializeFromNetworkMessage(INetworkMessageReader networkMessage)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)