---
title: "VisualStateTemplate"
description: "Auto-generated class reference for VisualStateTemplate."
---
# VisualStateTemplate

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class VisualStateTemplate`
**Base:** none
**File:** `TaleWorlds.GauntletUI.PrefabSystem/VisualStateTemplate.cs`

## Overview

`VisualStateTemplate` lives in `TaleWorlds.GauntletUI.PrefabSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.PrefabSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `State` | `public string State { get; set; }` |

## Key Methods

### SetAttribute
`public void SetAttribute(string name, string value)`

**Purpose:** Assigns a new value to attribute and updates the object's internal state.

```csharp
// Obtain an instance of VisualStateTemplate from the subsystem API first
VisualStateTemplate visualStateTemplate = ...;
visualStateTemplate.SetAttribute("example", "example");
```

### GetAttributes
`public Dictionary<string, string> GetAttributes()`

**Purpose:** Reads and returns the attributes value held by the this instance.

```csharp
// Obtain an instance of VisualStateTemplate from the subsystem API first
VisualStateTemplate visualStateTemplate = ...;
var result = visualStateTemplate.GetAttributes();
```

### ClearAttribute
`public void ClearAttribute(string name)`

**Purpose:** Removes all attribute from the this instance.

```csharp
// Obtain an instance of VisualStateTemplate from the subsystem API first
VisualStateTemplate visualStateTemplate = ...;
visualStateTemplate.ClearAttribute("example");
```

### CreateVisualState
`public VisualState CreateVisualState(BrushFactory brushFactory, SpriteData spriteData, Dictionary<string, VisualDefinitionTemplate> visualDefinitionTemplates, Dictionary<string, ConstantDefinition> constants, Dictionary<string, WidgetAttributeTemplate> parameters, Dictionary<string, string> defaultParameters)`

**Purpose:** Constructs a new visual state entity and returns it to the caller.

```csharp
// Obtain an instance of VisualStateTemplate from the subsystem API first
VisualStateTemplate visualStateTemplate = ...;
var result = visualStateTemplate.CreateVisualState(brushFactory, spriteData, dictionary<string, visualDefinitionTemplates, dictionary<string, constants, dictionary<string, parameters, dictionary<string, "example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
VisualStateTemplate visualStateTemplate = ...;
visualStateTemplate.SetAttribute("example", "example");
```

## See Also

- [Area Index](../)