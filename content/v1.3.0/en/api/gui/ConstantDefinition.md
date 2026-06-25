---
title: "ConstantDefinition"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConstantDefinition`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ConstantDefinition

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class ConstantDefinition`
**Base:** none
**File:** `TaleWorlds.GauntletUI.PrefabSystem/ConstantDefinition.cs`

## Overview

`ConstantDefinition` lives in `TaleWorlds.GauntletUI.PrefabSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.PrefabSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
`public string GetValue(BrushFactory brushFactory, SpriteData spriteData, Dictionary<string, ConstantDefinition> constants, Dictionary<string, WidgetAttributeTemplate> parameters, Dictionary<string, string> defaultParameters)`

**Purpose:** Gets the current value of `value`.

### GetActualValueOf
`public static string GetActualValueOf(string value, BrushFactory brushFactory, SpriteData spriteData, Dictionary<string, ConstantDefinition> constants, Dictionary<string, WidgetAttributeTemplate> parameters, Dictionary<string, string> defaultParameters)`

**Purpose:** Gets the current value of `actual value of`.

## Usage Example

```csharp
var value = new ConstantDefinition();
value.GetValue(brushFactory, spriteData, dictionary<string, constants, dictionary<string, parameters, dictionary<string, "example");
```

## See Also

- [Complete Class Catalog](../catalog)