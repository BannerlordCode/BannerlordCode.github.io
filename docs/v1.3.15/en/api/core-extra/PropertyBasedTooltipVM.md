<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PropertyBasedTooltipVM`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PropertyBasedTooltipVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information
**Module:** TaleWorlds.Core
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `PropertyBasedTooltipVM` is a class in the `TaleWorlds.Core.ViewModelCollection.Information` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `TooltipPropertyList` | `public MBBindingList<TooltipProperty> TooltipPropertyList { get; set; }` |
| `Mode` | `public int Mode { get; set; }` |


## Key Methods

### AddKeyType

```csharp
public static void AddKeyType(string keyID, Func<string> getKeyText)
```

### GetKeyText

```csharp
public string GetKeyText(string keyID)
```

### RefreshGenericPropertyBasedTooltip

```csharp
public static void RefreshGenericPropertyBasedTooltip(PropertyBasedTooltipVM propertyBasedTooltip, object args)
```

### AddProperty

```csharp
public void AddProperty(string definition, string value, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)
```

### AddModifierProperty

```csharp
public void AddModifierProperty(string definition, int modifierValue, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)
```

### AddProperty

```csharp
public void AddProperty(string definition, Func<string> value, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)
```

### AddProperty

```csharp
public void AddProperty(Func<string> definition, Func<string> value, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)
```

### AddColoredProperty

```csharp
public void AddColoredProperty(string definition, string value, Color color, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)
```

### AddColoredProperty

```csharp
public void AddColoredProperty(string definition, Func<string> value, Color color, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)
```

### AddColoredProperty

```csharp
public void AddColoredProperty(Func<string> definition, Func<string> value, Color color, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)