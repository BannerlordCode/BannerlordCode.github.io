<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GamepadNavigationForcedScopeCollection`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GamepadNavigationForcedScopeCollection

**Namespace:** TaleWorlds.GauntletUI.GamepadNavigation
**Module:** TaleWorlds.GauntletUI
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `GamepadNavigationForcedScopeCollection` is a class in the `TaleWorlds.GauntletUI.GamepadNavigation` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `CollectionID` | `public string CollectionID { get; set; }` |
| `CollectionOrder` | `public int CollectionOrder { get; set; }` |
| `ParentWidget` | `public Widget ParentWidget { get; set; }` |
| `Scopes` | `public List<GamepadNavigationScope> Scopes { get; }` |
| `ActiveScope` | `public GamepadNavigationScope ActiveScope { get; set; }` |
| `PreviousScope` | `public GamepadNavigationScope PreviousScope { get; set; }` |


## Key Methods

### IsAvailable

```csharp
public bool IsAvailable()
```

### AddScope

```csharp
public void AddScope(GamepadNavigationScope scope)
```

### RemoveScope

```csharp
public void RemoveScope(GamepadNavigationScope scope)
```

### ClearScopes

```csharp
public void ClearScopes()
```

### ToString

```csharp
public override string ToString()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)