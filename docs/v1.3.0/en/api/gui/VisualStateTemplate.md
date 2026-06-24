<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VisualStateTemplate`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Sets the value or state of `attribute`.

### GetAttributes
`public Dictionary<string, string> GetAttributes()`

**Purpose:** Gets the current value of `attributes`.

### ClearAttribute
`public void ClearAttribute(string name)`

**Purpose:** Handles logic related to `clear attribute`.

### CreateVisualState
`public VisualState CreateVisualState(BrushFactory brushFactory, SpriteData spriteData, Dictionary<string, VisualDefinitionTemplate> visualDefinitionTemplates, Dictionary<string, ConstantDefinition> constants, Dictionary<string, WidgetAttributeTemplate> parameters, Dictionary<string, string> defaultParameters)`

**Purpose:** Creates a new `visual state` instance or object.

## Usage Example

```csharp
var value = new VisualStateTemplate();
value.SetAttribute("example", "example");
```

## See Also

- [Complete Class Catalog](../catalog)