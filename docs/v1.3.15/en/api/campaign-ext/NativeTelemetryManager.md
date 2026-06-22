<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NativeTelemetryManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NativeTelemetryManager

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `NativeTelemetryManager` is a class in the `TaleWorlds.DotNet` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `TelemetryLevelMask` | `public static TelemetryLevelMask TelemetryLevelMask { get; }` |


## Key Methods

### GetTelemetryLevelMask

```csharp
public TelemetryLevelMask GetTelemetryLevelMask()
```

### StartTelemetryConnection

```csharp
public void StartTelemetryConnection(bool showErrors)
```

### StopTelemetryConnection

```csharp
public void StopTelemetryConnection()
```

### BeginTelemetryScopeInternal

```csharp
public void BeginTelemetryScopeInternal(TelemetryLevelMask levelMask, string scopeName)
```

### EndTelemetryScopeInternal

```csharp
public void EndTelemetryScopeInternal()
```

### BeginTelemetryScopeBaseLevelInternal

```csharp
public void BeginTelemetryScopeBaseLevelInternal(TelemetryLevelMask levelMask, string scopeName)
```

### EndTelemetryScopeBaseLevelInternal

```csharp
public void EndTelemetryScopeBaseLevelInternal()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)