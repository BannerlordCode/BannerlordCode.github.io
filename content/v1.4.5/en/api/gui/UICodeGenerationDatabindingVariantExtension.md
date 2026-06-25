---
title: "UICodeGenerationDatabindingVariantExtension"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UICodeGenerationDatabindingVariantExtension`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# UICodeGenerationDatabindingVariantExtension

**Namespace:** TaleWorlds.GauntletUI.CodeGenerator
**Module:** TaleWorlds.GauntletUI
**Type:** `public class UICodeGenerationDatabindingVariantExtension : UICodeGenerationVariantExtension`
**Base:** `UICodeGenerationVariantExtension`
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI.CodeGenerator/TaleWorlds.GauntletUI.CodeGenerator/UICodeGenerationDatabindingVariantExtension.cs`

## Overview

`UICodeGenerationDatabindingVariantExtension` lives in `TaleWorlds.GauntletUI.CodeGenerator` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.CodeGenerator` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetPrefabExtension
`public override PrefabExtension GetPrefabExtension()`

**Purpose:** Gets the current value of `prefab extension`.

### AddExtensionVariables
`public override void AddExtensionVariables(ClassCode classCode)`

**Purpose:** Adds `extension variables` to the current collection or state.

### Initialize
`public override void Initialize(WidgetTemplateGenerateContext widgetTemplateGenerateContext)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### GetAttributeType
`public override Type GetAttributeType(WidgetAttributeTemplate widgetAttributeTemplate)`

**Purpose:** Gets the current value of `attribute type`.

### DoExtraCodeGeneration
`public override void DoExtraCodeGeneration(ClassCode classCode)`

**Purpose:** Handles logic related to `do extra code generation`.

### AddExtrasToCreatorMethod
`public override void AddExtrasToCreatorMethod(MethodCode methodCode)`

**Purpose:** Adds `extras to creator method` to the current collection or state.

### CreateWidgetCodeGenerationInfoExtension
`public override WidgetCodeGenerationInfoExtension CreateWidgetCodeGenerationInfoExtension(WidgetCodeGenerationInfo widgetCodeGenerationInfo)`

**Purpose:** Creates a new `widget code generation info extension` instance or object.

## Usage Example

```csharp
var value = new UICodeGenerationDatabindingVariantExtension();
value.GetPrefabExtension();
```

## See Also

- [Complete Class Catalog](../catalog)