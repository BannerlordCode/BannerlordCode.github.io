---
title: "WidgetPrefab"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WidgetPrefab`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WidgetPrefab

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetPrefab`
**Area:** campaign-ext

## Overview

`WidgetPrefab` lives in `TaleWorlds.GauntletUI.PrefabSystem`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
// Prepare the required context, then call the static entry point directly
WidgetPrefab.LoadFrom(prefabExtensionContext, widgetAttributeContext, "example");
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
