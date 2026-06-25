---
title: "UICodeGenerationVariantExtension"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UICodeGenerationVariantExtension`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# UICodeGenerationVariantExtension

**Namespace:** TaleWorlds.GauntletUI.CodeGenerator
**Module:** TaleWorlds.GauntletUI
**Type:** `public abstract class UICodeGenerationVariantExtension`
**Base:** none
**File:** `TaleWorlds.GauntletUI.CodeGenerator/UICodeGenerationVariantExtension.cs`

## Overview

`UICodeGenerationVariantExtension` lives in `TaleWorlds.GauntletUI.CodeGenerator` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.CodeGenerator` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetPrefabExtension
`public abstract PrefabExtension GetPrefabExtension()`

**Purpose:** Gets the current value of `prefab extension`.

### GetAttributeType
`public abstract Type GetAttributeType(WidgetAttributeTemplate widgetAttributeTemplate)`

**Purpose:** Gets the current value of `attribute type`.

### AddExtensionVariables
`public abstract void AddExtensionVariables(ClassCode classCode)`

**Purpose:** Adds `extension variables` to the current collection or state.

### Initialize
`public abstract void Initialize(WidgetTemplateGenerateContext widgetTemplateGenerateContext)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### AddExtrasToCreatorMethod
`public abstract void AddExtrasToCreatorMethod(MethodCode methodCode)`

**Purpose:** Adds `extras to creator method` to the current collection or state.

### CreateWidgetCodeGenerationInfoExtension
`public abstract WidgetCodeGenerationInfoExtension CreateWidgetCodeGenerationInfoExtension(WidgetCodeGenerationInfo widgetCodeGenerationInfo)`

**Purpose:** Creates a new `widget code generation info extension` instance or object.

### DoExtraCodeGeneration
`public abstract void DoExtraCodeGeneration(ClassCode classCode)`

**Purpose:** Handles logic related to `do extra code generation`.

## Usage Example

```csharp
var implementation = new CustomUICodeGenerationVariantExtension();
```

## See Also

- [Complete Class Catalog](../catalog)