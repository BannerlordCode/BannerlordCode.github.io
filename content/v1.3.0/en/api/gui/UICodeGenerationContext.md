---
title: "UICodeGenerationContext"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UICodeGenerationContext`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# UICodeGenerationContext

**Namespace:** TaleWorlds.GauntletUI.CodeGenerator
**Module:** TaleWorlds.GauntletUI
**Type:** `public class UICodeGenerationContext`
**Base:** none
**File:** `TaleWorlds.GauntletUI.CodeGenerator/UICodeGenerationContext.cs`

## Overview

`UICodeGenerationContext` lives in `TaleWorlds.GauntletUI.CodeGenerator` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.CodeGenerator` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ResourceDepot` | `public ResourceDepot ResourceDepot { get; }` |
| `WidgetFactory` | `public WidgetFactory WidgetFactory { get; }` |
| `FontFactory` | `public FontFactory FontFactory { get; }` |
| `BrushFactory` | `public BrushFactory BrushFactory { get; }` |
| `SpriteData` | `public SpriteData SpriteData { get; }` |

## Key Methods

### Prepare
`public void Prepare(IEnumerable<string> resourceLocations, IEnumerable<PrefabExtension> prefabExtensions)`

**Purpose:** Handles logic related to `prepare`.

### AddPrefabVariant
`public void AddPrefabVariant(string prefabName, string variantName, UICodeGenerationVariantExtension variantExtension, Dictionary<string, object> data)`

**Purpose:** Adds `prefab variant` to the current collection or state.

### Generate
`public void Generate()`

**Purpose:** Handles logic related to `generate`.

## Usage Example

```csharp
var value = new UICodeGenerationContext();
value.Prepare(resourceLocations, prefabExtensions);
```

## See Also

- [Complete Class Catalog](../catalog)