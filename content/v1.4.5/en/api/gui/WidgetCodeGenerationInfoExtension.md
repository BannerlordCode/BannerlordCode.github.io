---
title: "WidgetCodeGenerationInfoExtension"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WidgetCodeGenerationInfoExtension`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# WidgetCodeGenerationInfoExtension

**Namespace:** TaleWorlds.GauntletUI.CodeGenerator
**Module:** TaleWorlds.GauntletUI
**Type:** `public abstract class WidgetCodeGenerationInfoExtension`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI.CodeGenerator/TaleWorlds.GauntletUI.CodeGenerator/WidgetCodeGenerationInfoExtension.cs`

## Overview

`WidgetCodeGenerationInfoExtension` lives in `TaleWorlds.GauntletUI.CodeGenerator` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.CodeGenerator` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public abstract void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### OnFillSetAttributesMethod
`public abstract void OnFillSetAttributesMethod(MethodCode methodCode)`

**Purpose:** Called when the `fill set attributes method` event is raised.

### TryGetVariantPropertiesForNewDependency
`public abstract bool TryGetVariantPropertiesForNewDependency(out UICodeGenerationVariantExtension variantExtension, out Dictionary<string, object> data)`

**Purpose:** Attempts to get `get variant properties for new dependency`, usually returning the result in an out parameter.

### OnFillCreateWidgetMethod
`public abstract void OnFillCreateWidgetMethod(MethodCode methodCode)`

**Purpose:** Called when the `fill create widget method` event is raised.

## Usage Example

```csharp
var implementation = new CustomWidgetCodeGenerationInfoExtension();
```

## See Also

- [Complete Class Catalog](../catalog)