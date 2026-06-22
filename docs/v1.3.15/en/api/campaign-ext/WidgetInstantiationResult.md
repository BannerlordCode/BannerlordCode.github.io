<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WidgetInstantiationResult`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WidgetInstantiationResult

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `WidgetInstantiationResult` is a class in the `TaleWorlds.GauntletUI.PrefabSystem` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Widget` | `public Widget Widget { get; }` |
| `Template` | `public WidgetTemplate Template { get; }` |
| `CustomWidgetInstantiationData` | `public WidgetInstantiationResult CustomWidgetInstantiationData { get; }` |
| `Children` | `public List<WidgetInstantiationResult> Children { get; }` |


## Key Methods

### AddExtensionData

```csharp
public void AddExtensionData(string name, object data, bool passToChildWidgetCreation = false)
```

### AddExtensionData

```csharp
public void AddExtensionData(object data, bool passToChildWidgetCreation = false)
```

### GetLogicalOrDefaultChildrenLocation

```csharp
public WidgetInstantiationResult GetLogicalOrDefaultChildrenLocation()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)