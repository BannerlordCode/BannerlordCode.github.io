<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WidgetPrefab`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# WidgetPrefab

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetPrefab`
**Base:** none
**File:** `TaleWorlds.GauntletUI.PrefabSystem/WidgetPrefab.cs`

## Overview

`WidgetPrefab` lives in `TaleWorlds.GauntletUI.PrefabSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.PrefabSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `VisualDefinitionTemplates` | `public Dictionary<string, VisualDefinitionTemplate> VisualDefinitionTemplates { get; set; }` |
| `Constants` | `public Dictionary<string, ConstantDefinition> Constants { get; set; }` |
| `Parameters` | `public Dictionary<string, string> Parameters { get; }` |
| `CustomElements` | `public Dictionary<string, XmlElement> CustomElements { get; }` |
| `RootTemplate` | `public WidgetTemplate RootTemplate { get; }` |

## Key Methods

### LoadFrom
`public static WidgetPrefab LoadFrom(PrefabExtensionContext prefabExtensionContext, WidgetAttributeContext widgetAttributeContext, string path)`

**Purpose:** Loads `from` data.

### Save
`public XmlDocument Save(PrefabExtensionContext prefabExtensionContext)`

**Purpose:** Saves `save` data.

### Instantiate
`public WidgetInstantiationResult Instantiate(WidgetCreationData widgetCreationData)`

**Purpose:** Handles logic related to `instantiate`.

### Instantiate
`public WidgetInstantiationResult Instantiate(WidgetCreationData widgetCreationData, Dictionary<string, WidgetAttributeTemplate> parameters)`

**Purpose:** Handles logic related to `instantiate`.

### OnRelease
`public void OnRelease()`

**Purpose:** Called when the `release` event is raised.

### GetConstantValue
`public ConstantDefinition GetConstantValue(string name)`

**Purpose:** Gets the current value of `constant value`.

### GetParameterDefaultValue
`public string GetParameterDefaultValue(string name)`

**Purpose:** Gets the current value of `parameter default value`.

## Usage Example

```csharp
WidgetPrefab.LoadFrom(prefabExtensionContext, widgetAttributeContext, "example");
```

## See Also

- [Complete Class Catalog](../catalog)