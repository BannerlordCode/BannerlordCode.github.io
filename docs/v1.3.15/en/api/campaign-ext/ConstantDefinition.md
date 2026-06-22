<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConstantDefinition`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ConstantDefinition

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `ConstantDefinition` is a class in the `TaleWorlds.GauntletUI.PrefabSystem` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `Value` | `public string Value { get; set; }` |
| `SpriteName` | `public string SpriteName { get; set; }` |
| `BrushName` | `public string BrushName { get; set; }` |
| `LayerName` | `public string LayerName { get; set; }` |
| `Additive` | `public string Additive { get; set; }` |
| `Prefix` | `public string Prefix { get; set; }` |
| `Suffix` | `public string Suffix { get; set; }` |
| `MultiplyResult` | `public float MultiplyResult { get; set; }` |
| `OnTrueValue` | `public string OnTrueValue { get; set; }` |
| `OnFalseValue` | `public string OnFalseValue { get; set; }` |
| `Type` | `public ConstantDefinitionType Type { get; set; }` |


## Key Methods

### GetValue

```csharp
public string GetValue(BrushFactory brushFactory, SpriteData spriteData, Dictionary<string, ConstantDefinition> constants, Dictionary<string, WidgetAttributeTemplate> parameters, Dictionary<string, string> defaultParameters)
```

### GetActualValueOf

```csharp
public static string GetActualValueOf(string value, BrushFactory brushFactory, SpriteData spriteData, Dictionary<string, ConstantDefinition> constants, Dictionary<string, WidgetAttributeTemplate> parameters, Dictionary<string, string> defaultParameters)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)