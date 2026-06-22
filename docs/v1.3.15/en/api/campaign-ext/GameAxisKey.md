<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameAxisKey`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameAxisKey

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `GameAxisKey` is a class in the `TaleWorlds.InputSystem` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; }` |
| `AxisKey` | `public Key AxisKey { get; }` |
| `DefaultAxisKey` | `public Key DefaultAxisKey { get; }` |
| `PositiveKey` | `public GameKey PositiveKey { get; }` |
| `NegativeKey` | `public GameKey NegativeKey { get; }` |
| `Type` | `public GameAxisKey.AxisType Type { get; }` |


## Key Methods

### GetAxisState

```csharp
public float GetAxisState(bool isKeysAllowed, bool isMouseButtonAllowed, bool isMouseWheelAllowed, bool isControllerAllowed)
```

### ToString

```csharp
public override string ToString()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)