<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WidgetTemplate`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WidgetTemplate

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `WidgetTemplate` is a class in the `TaleWorlds.GauntletUI.PrefabSystem` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `LogicalChildrenLocation` | `public bool LogicalChildrenLocation { get; }` |
| `Id` | `public string Id { get; }` |
| `Type` | `public string Type { get; }` |
| `ChildCount` | `public int ChildCount { get; }` |
| `GivenParameters` | `public Dictionary<string, WidgetAttributeTemplate> GivenParameters { get; }` |
| `Prefab` | `public WidgetPrefab Prefab { get; }` |
| `RootTemplate` | `public WidgetTemplate RootTemplate { get; }` |
| `Attributes` | `public Dictionary<Type, Dictionary<string, WidgetAttributeTemplate>> Attributes { get; set; }` |
| `Tag` | `public object Tag { get; set; }` |
| `AllAttributes` | `public IEnumerable<WidgetAttributeTemplate> AllAttributes { get; }` |


## Key Methods

### AddExtensionData

```csharp
public void AddExtensionData(string name, object data)
```

### RemoveExtensionData

```csharp
public void RemoveExtensionData(string name)
```

### AddExtensionData

```csharp
public void AddExtensionData(object data)
```

### SetAttribute

```csharp
public void SetAttribute(WidgetAttributeTemplate attribute)
```

### GetChildAt

```csharp
public WidgetTemplate GetChildAt(int i)
```

### AddChild

```csharp
public void AddChild(WidgetTemplate child)
```

### RemoveChild

```csharp
public void RemoveChild(WidgetTemplate child)
```

### SwapChildren

```csharp
public void SwapChildren(WidgetTemplate child1, WidgetTemplate child2)
```

### Instantiate

```csharp
public WidgetInstantiationResult Instantiate(WidgetCreationData widgetCreationData, Dictionary<string, WidgetAttributeTemplate> parameters)
```

### OnRelease

```csharp
public void OnRelease()
```

### LoadFrom

```csharp
public static WidgetTemplate LoadFrom(PrefabExtensionContext prefabExtensionContext, WidgetAttributeContext widgetAttributeContext, XmlNode node)
```

### SetRootTemplate

```csharp
public void SetRootTemplate(WidgetPrefab prefab)
```

### AddAttributeTo

```csharp
public void AddAttributeTo(WidgetAttributeContext widgetAttributeContext, string name, string value)
```

### RemoveAttributeFrom

```csharp
public void RemoveAttributeFrom(WidgetAttributeContext widgetAttributeContext, string fullName)
```

### RemoveAttributeFrom

```csharp
public void RemoveAttributeFrom(WidgetAttributeKeyType keyType, string name)
```

### Save

```csharp
public void Save(PrefabExtensionContext prefabExtensionContext, XmlNode parentNode)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)