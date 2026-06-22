<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DiamondClientApplication`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DiamondClientApplication

**Namespace:** TaleWorlds.Diamond.ClientApplication
**Module:** TaleWorlds.Diamond
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `DiamondClientApplication` is a class in the `TaleWorlds.Diamond.ClientApplication` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `ApplicationVersion` | `public ApplicationVersion ApplicationVersion { get; }` |
| `Parameters` | `public ParameterContainer Parameters { get; }` |
| `ProxyAddressMap` | `public IReadOnlyDictionary<string, string> ProxyAddressMap { get; }` |


## Key Methods

### GetObject

```csharp
public object GetObject(string name)
```

### AddObject

```csharp
public void AddObject(string name, DiamondClientApplicationObject applicationObject)
```

### Initialize

```csharp
public void Initialize(ClientApplicationConfiguration applicationConfiguration)
```

### CreateClientSessionProvider

```csharp
public object CreateClientSessionProvider(string clientName, Type clientType, SessionProviderType sessionProviderType, ParameterContainer parameters)
```

### Update

```csharp
public void Update()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)