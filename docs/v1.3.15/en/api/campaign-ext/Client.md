<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Client`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Client

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `Client` is a class in the `TaleWorlds.Diamond` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsInCriticalState` | `public bool IsInCriticalState { get; set; }` |
| `AliveCheckTimeInMiliSeconds` | `public virtual long AliveCheckTimeInMiliSeconds { get; }` |
| `AccessProvider` | `public ILoginAccessProvider AccessProvider { get; set; }` |


## Key Methods

### Update

```csharp
public void Update()
```

### HandleMessage

```csharp
public void HandleMessage(Message message)
```

### OnConnected

```csharp
public virtual void OnConnected()
```

### OnCantConnect

```csharp
public virtual void OnCantConnect()
```

### OnDisconnected

```csharp
public virtual void OnDisconnected()
```

### CheckConnection

```csharp
public Task<bool> CheckConnection()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)