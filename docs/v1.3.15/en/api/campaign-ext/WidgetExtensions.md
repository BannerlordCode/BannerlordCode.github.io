<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WidgetExtensions`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WidgetExtensions

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public static class WidgetExtensions`
**Area:** campaign-ext

## Overview

`WidgetExtensions` lives in `TaleWorlds.GauntletUI.PrefabSystem`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.PrefabSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetWidgetAttributeFromString
`public static void SetWidgetAttributeFromString(object target, string name, string value, BrushFactory brushFactory, SpriteData spriteData, Dictionary<string, VisualDefinitionTemplate> visualDefinitionTemplates, Dictionary<string, ConstantDefinition> constants, Dictionary<string, WidgetAttributeTemplate> parameters, Dictionary<string, XmlElement> customElements, Dictionary<string, string> defaultParameters)`

**Purpose:** Sets the value or state of `widget attribute from string`.

### GetWidgetAttributeType
`public static Type GetWidgetAttributeType(object target, string name)`

**Purpose:** Gets the current value of `widget attribute type`.

### SetWidgetAttribute
`public static void SetWidgetAttribute(UIContext context, object target, string name, object value)`

**Purpose:** Sets the value or state of `widget attribute`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
WidgetExtensions.SetWidgetAttributeFromString(target, "example", "example", brushFactory, spriteData, dictionary<string, visualDefinitionTemplates, dictionary<string, constants, dictionary<string, parameters, dictionary<string, customElements, dictionary<string, "example");
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
