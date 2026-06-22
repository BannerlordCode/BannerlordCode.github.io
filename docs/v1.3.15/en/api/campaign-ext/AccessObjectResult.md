<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AccessObjectResult`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AccessObjectResult

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `AccessObjectResult` is a class in the `TaleWorlds.Diamond` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `AccessObject` | `public AccessObject AccessObject { get; set; }` |
| `Success` | `public bool Success { get; set; }` |
| `FailReason` | `public TextObject FailReason { get; set; }` |


## Key Methods

### CreateSuccess

```csharp
public static AccessObjectResult CreateSuccess(AccessObject accessObject)
```

### CreateFailed

```csharp
public static AccessObjectResult CreateFailed(TextObject failReason)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)