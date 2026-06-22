<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InputRestrictions`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InputRestrictions

**Namespace:** TaleWorlds.ScreenSystem
**Module:** TaleWorlds.ScreenSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `InputRestrictions` is a class in the `TaleWorlds.ScreenSystem` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Order` | `public int Order { get; }` |
| `Id` | `public Guid Id { get; }` |
| `MouseVisibility` | `public bool MouseVisibility { get; }` |
| `InputUsageMask` | `public InputUsageMask InputUsageMask { get; }` |


## Key Methods

### SetMouseVisibility

```csharp
public void SetMouseVisibility(bool isVisible)
```

### SetInputRestrictions

```csharp
public void SetInputRestrictions(bool isMouseVisible = true, InputUsageMask mask = InputUsageMask.All)
```

### ResetInputRestrictions

```csharp
public void ResetInputRestrictions()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)