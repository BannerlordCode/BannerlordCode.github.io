<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WidgetFactory`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WidgetFactory

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `WidgetFactory` is a class in the `TaleWorlds.GauntletUI.PrefabSystem` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `PrefabExtensionContext` | `public PrefabExtensionContext PrefabExtensionContext { get; }` |
| `WidgetAttributeContext` | `public WidgetAttributeContext WidgetAttributeContext { get; }` |
| `GeneratedPrefabContext` | `public GeneratedPrefabContext GeneratedPrefabContext { get; }` |


## Key Methods

### Initialize

```csharp
public void Initialize(List<string> assemblyOrder = null)
```

### AddCustomType

```csharp
public void AddCustomType(string name, string path)
```

### GetPrefabNames

```csharp
public IEnumerable<string> GetPrefabNames()
```

### GetWidgetTypes

```csharp
public IEnumerable<string> GetWidgetTypes()
```

### IsBuiltinType

```csharp
public bool IsBuiltinType(string name)
```

### GetBuiltinType

```csharp
public Type GetBuiltinType(string name)
```

### IsCustomType

```csharp
public bool IsCustomType(string typeName)
```

### GetCustomTypePath

```csharp
public string GetCustomTypePath(string name)
```

### CreateBuiltinWidget

```csharp
public Widget CreateBuiltinWidget(UIContext context, string typeName)
```

### GetCustomType

```csharp
public WidgetPrefab GetCustomType(string typeName)
```

### OnUnload

```csharp
public void OnUnload(string typeName)
```

### CheckForUpdates

```csharp
public void CheckForUpdates()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)