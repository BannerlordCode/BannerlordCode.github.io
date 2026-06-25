---
title: "WidgetExtensions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WidgetExtensions`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# WidgetExtensions

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public static class WidgetExtensions`
**Base:** none
**File:** `TaleWorlds.GauntletUI.PrefabSystem/WidgetExtensions.cs`

## Overview

`WidgetExtensions` lives in `TaleWorlds.GauntletUI.PrefabSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
WidgetExtensions.SetWidgetAttributeFromString(target, "example", "example", brushFactory, spriteData, dictionary<string, visualDefinitionTemplates, dictionary<string, constants, dictionary<string, parameters, dictionary<string, customElements, dictionary<string, "example");
```

## See Also

- [Complete Class Catalog](../catalog)