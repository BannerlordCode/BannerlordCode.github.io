<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WindowsFramework`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WindowsFramework

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `WindowsFramework` is a class in the `TaleWorlds.TwoDimension.Standalone` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `ThreadConfig` | `public WindowsFrameworkThreadConfig ThreadConfig { get; set; }` |
| `ElapsedTicks` | `public long ElapsedTicks { get; }` |
| `TicksPerSecond` | `public long TicksPerSecond { get; }` |


## Key Methods

### Initialize

```csharp
public void Initialize(FrameworkDomain frameworkDomains)
```

### RegisterMessageCommunicator

```csharp
public void RegisterMessageCommunicator(IMessageCommunicator communicator)
```

### UnRegisterMessageCommunicator

```csharp
public void UnRegisterMessageCommunicator(IMessageCommunicator communicator)
```

### Stop

```csharp
public void Stop()
```

### OnFinalize

```csharp
public void OnFinalize()
```

### Start

```csharp
public void Start()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)