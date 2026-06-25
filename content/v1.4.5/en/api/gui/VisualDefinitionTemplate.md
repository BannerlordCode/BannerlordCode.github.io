---
title: "VisualDefinitionTemplate"
description: "Auto-generated class reference for VisualDefinitionTemplate."
---
# VisualDefinitionTemplate

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class VisualDefinitionTemplate`
**Base:** none
**File:** `bin/TaleWorlds.GauntletUI.PrefabSystem/TaleWorlds.GauntletUI.PrefabSystem/VisualDefinitionTemplate.cs`

## Overview

`VisualDefinitionTemplate` lives in `TaleWorlds.GauntletUI.PrefabSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.PrefabSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
`public void AddVisualState(VisualStateTemplate visualState)`

**Purpose:** Adds `visual state` to the current collection or state.

```csharp
// Obtain an instance of VisualDefinitionTemplate from the subsystem API first
VisualDefinitionTemplate visualDefinitionTemplate = ...;
visualDefinitionTemplate.AddVisualState(visualState);
```

### CreateVisualDefinition
`public VisualDefinition CreateVisualDefinition(BrushFactory brushFactory, SpriteData spriteData, Dictionary<string, VisualDefinitionTemplate> visualDefinitionTemplates, Dictionary<string, ConstantDefinition> constants, Dictionary<string, WidgetAttributeTemplate> parameters, Dictionary<string, string> defaultParameters)`

**Purpose:** Constructs a new `visual definition` entity and returns it to the caller.

```csharp
// Obtain an instance of VisualDefinitionTemplate from the subsystem API first
VisualDefinitionTemplate visualDefinitionTemplate = ...;
var result = visualDefinitionTemplate.CreateVisualDefinition(brushFactory, spriteData, dictionary<string, visualDefinitionTemplates, dictionary<string, constants, dictionary<string, parameters, dictionary<string, "example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
VisualDefinitionTemplate visualDefinitionTemplate = ...;
visualDefinitionTemplate.AddVisualState(visualState);
```

## See Also

- [Area Index](../)