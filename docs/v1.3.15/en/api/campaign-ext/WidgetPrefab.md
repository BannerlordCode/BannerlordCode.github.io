<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WidgetPrefab`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WidgetPrefab

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `WidgetPrefab` is a class in the `TaleWorlds.GauntletUI.PrefabSystem` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `VisualDefinitionTemplates` | `public Dictionary<string, VisualDefinitionTemplate> VisualDefinitionTemplates { get; set; }` |
| `Constants` | `public Dictionary<string, ConstantDefinition> Constants { get; set; }` |
| `Parameters` | `public Dictionary<string, string> Parameters { get; }` |
| `CustomElements` | `public Dictionary<string, XmlElement> CustomElements { get; }` |
| `RootTemplate` | `public WidgetTemplate RootTemplate { get; }` |


## Key Methods

### LoadFrom

```csharp
public static WidgetPrefab LoadFrom(PrefabExtensionContext prefabExtensionContext, WidgetAttributeContext widgetAttributeContext, string path)
```

### Save

```csharp
public XmlDocument Save(PrefabExtensionContext prefabExtensionContext)
```

### Instantiate

```csharp
public WidgetInstantiationResult Instantiate(WidgetCreationData widgetCreationData)
```

### Instantiate

```csharp
public WidgetInstantiationResult Instantiate(WidgetCreationData widgetCreationData, Dictionary<string, WidgetAttributeTemplate> parameters)
```

### OnRelease

```csharp
public void OnRelease()
```

### GetConstantValue

```csharp
public ConstantDefinition GetConstantValue(string name)
```

### GetParameterDefaultValue

```csharp
public string GetParameterDefaultValue(string name)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)