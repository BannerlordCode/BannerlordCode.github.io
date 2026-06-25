---
title: "WidgetExtensions"
description: "Auto-generated class reference for WidgetExtensions."
---
# WidgetExtensions

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public static class WidgetExtensions`
**Base:** none
**File:** `bin/TaleWorlds.GauntletUI.PrefabSystem/TaleWorlds.GauntletUI.PrefabSystem/WidgetExtensions.cs`

## Overview

`WidgetExtensions` lives in `TaleWorlds.GauntletUI.PrefabSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.PrefabSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetWidgetAttributeFromString
`public static void SetWidgetAttributeFromString(object target, string name, string value, BrushFactory brushFactory, SpriteData spriteData, Dictionary<string, VisualDefinitionTemplate> visualDefinitionTemplates, Dictionary<string, ConstantDefinition> constants, Dictionary<string, WidgetAttributeTemplate> parameters, Dictionary<string, XmlElement> customElements, Dictionary<string, string> defaultParameters)`

**Purpose:** Assigns a new value to widget attribute from string and updates the object's internal state.

```csharp
// Static call; no instance required
WidgetExtensions.SetWidgetAttributeFromString(target, "example", "example", brushFactory, spriteData, dictionary<string, visualDefinitionTemplates, dictionary<string, constants, dictionary<string, parameters, dictionary<string, customElements, dictionary<string, "example");
```

### GetWidgetAttributeType
`public static Type GetWidgetAttributeType(object target, string name)`

**Purpose:** Reads and returns the widget attribute type value held by the this instance.

```csharp
// Static call; no instance required
WidgetExtensions.GetWidgetAttributeType(target, "example");
```

### SetWidgetAttribute
`public static void SetWidgetAttribute(UIContext context, object target, string name, object value)`

**Purpose:** Assigns a new value to widget attribute and updates the object's internal state.

```csharp
// Static call; no instance required
WidgetExtensions.SetWidgetAttribute(context, target, "example", value);
```

## Usage Example

```csharp
WidgetExtensions.SetWidgetAttributeFromString(target, "example", "example", brushFactory, spriteData, dictionary<string, visualDefinitionTemplates, dictionary<string, constants, dictionary<string, parameters, dictionary<string, customElements, dictionary<string, "example");
```

## See Also

- [Area Index](../)