<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WidgetCodeGenerationInfoDatabindingExtension`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# WidgetCodeGenerationInfoDatabindingExtension

**Namespace:** TaleWorlds.GauntletUI.CodeGenerator
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetCodeGenerationInfoDatabindingExtension : WidgetCodeGenerationInfoExtension`
**Base:** `WidgetCodeGenerationInfoExtension`
**File:** `TaleWorlds.GauntletUI.CodeGenerator/WidgetCodeGenerationInfoDatabindingExtension.cs`

## Overview

`WidgetCodeGenerationInfoDatabindingExtension` lives in `TaleWorlds.GauntletUI.CodeGenerator` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.CodeGenerator` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `FullBindingPath` | `public BindingPath FullBindingPath { get; }` |
| `IsBindingList` | `public bool IsBindingList { get; }` |
| `WidgetCodeGenerationInfo` | `public WidgetCodeGenerationInfo WidgetCodeGenerationInfo { get; }` |
| `Parent` | `public WidgetCodeGenerationInfoDatabindingExtension Parent { get; }` |
| `FirstItemTemplateCodeGenerationInfo` | `public WidgetTemplateGenerateContext FirstItemTemplateCodeGenerationInfo { get; }` |
| `LastItemTemplateCodeGenerationInfo` | `public WidgetTemplateGenerateContext LastItemTemplateCodeGenerationInfo { get; }` |
| `ItemTemplateCodeGenerationInfo` | `public WidgetTemplateGenerateContext ItemTemplateCodeGenerationInfo { get; }` |
| `IsRoot` | `public bool IsRoot { get; }` |
| `BindDataInfos` | `public Dictionary<string, GeneratedBindDataInfo> BindDataInfos { get; }` |
| `BindCommandInfos` | `public Dictionary<string, GeneratedBindCommandInfo> BindCommandInfos { get; }` |

## Key Methods

### Initialize
`public override void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### TryGetVariantPropertiesForNewDependency
`public override bool TryGetVariantPropertiesForNewDependency(out UICodeGenerationVariantExtension variantExtension, out Dictionary<string, object> data)`

**Purpose:** Attempts to get `get variant properties for new dependency`, usually returning the result in an out parameter.

### CheckIfRequiresDataComponentForWidget
`public bool CheckIfRequiresDataComponentForWidget()`

**Purpose:** Handles logic related to `check if requires data component for widget`.

### OnFillCreateWidgetMethod
`public override void OnFillCreateWidgetMethod(MethodCode methodCode)`

**Purpose:** Called when the `fill create widget method` event is raised.

### OnFillSetAttributesMethod
`public override void OnFillSetAttributesMethod(MethodCode methodCode)`

**Purpose:** Called when the `fill set attributes method` event is raised.

### GetViewModelTypeAtPath
`public static Type GetViewModelTypeAtPath(Type type, BindingPath path)`

**Purpose:** Gets the current value of `view model type at path`.

## Usage Example

```csharp
var value = new WidgetCodeGenerationInfoDatabindingExtension();
value.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)