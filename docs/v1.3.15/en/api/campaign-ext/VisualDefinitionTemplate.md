<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VisualDefinitionTemplate`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VisualDefinitionTemplate

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `VisualDefinitionTemplate` is a class in the `TaleWorlds.GauntletUI.PrefabSystem` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `TransitionDuration` | `public float TransitionDuration { get; set; }` |
| `DelayOnBegin` | `public float DelayOnBegin { get; set; }` |
| `EaseType` | `public AnimationInterpolation.Type EaseType { get; set; }` |
| `EaseFunction` | `public AnimationInterpolation.Function EaseFunction { get; }` |
| `VisualStates` | `public Dictionary<string, VisualStateTemplate> VisualStates { get; }` |


## Key Methods

### AddVisualState

```csharp
public void AddVisualState(VisualStateTemplate visualState)
```

### CreateVisualDefinition

```csharp
public VisualDefinition CreateVisualDefinition(BrushFactory brushFactory, SpriteData spriteData, Dictionary<string, VisualDefinitionTemplate> visualDefinitionTemplates, Dictionary<string, ConstantDefinition> constants, Dictionary<string, WidgetAttributeTemplate> parameters, Dictionary<string, string> defaultParameters)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)