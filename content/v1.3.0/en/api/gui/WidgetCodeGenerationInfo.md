---
title: "WidgetCodeGenerationInfo"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WidgetCodeGenerationInfo`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# WidgetCodeGenerationInfo

**Namespace:** TaleWorlds.GauntletUI.CodeGenerator
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetCodeGenerationInfo`
**Base:** none
**File:** `TaleWorlds.GauntletUI.CodeGenerator/WidgetCodeGenerationInfo.cs`

## Overview

`WidgetCodeGenerationInfo` lives in `TaleWorlds.GauntletUI.CodeGenerator` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.CodeGenerator` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `RootWidgetTemplateGenerateContext` | `public WidgetTemplateGenerateContext RootWidgetTemplateGenerateContext { get; }` |
| `WidgetTemplate` | `public WidgetTemplate WidgetTemplate { get; }` |
| `WidgetFactory` | `public WidgetFactory WidgetFactory { get; }` |
| `VariableName` | `public string VariableName { get; }` |
| `Parent` | `public WidgetCodeGenerationInfo Parent { get; }` |
| `Extension` | `public WidgetCodeGenerationInfoExtension Extension { get; }` |
| `ChildWidgetTemplateGenerateContext` | `public WidgetTemplateGenerateContext ChildWidgetTemplateGenerateContext { get; }` |
| `IsRoot` | `public bool IsRoot { get; }` |
| `Id` | `public string Id { get; }` |
| `Children` | `public List<WidgetCodeGenerationInfo> Children { get; }` |

## Key Methods

### FindChild
`public WidgetCodeGenerationInfoChildSearchResult FindChild(BindingPath path)`

**Purpose:** Handles logic related to `find child`.

### GetPassedParametersToChild
`public Dictionary<string, WidgetAttributeTemplate> GetPassedParametersToChild()`

**Purpose:** Gets the current value of `passed parameters to child`.

### CheckDependendType
`public void CheckDependendType()`

**Purpose:** Handles logic related to `check dependend type`.

### GetUseableTypeName
`public string GetUseableTypeName()`

**Purpose:** Gets the current value of `useable type name`.

### CreateVariableCode
`public VariableCode CreateVariableCode()`

**Purpose:** Creates a new `variable code` instance or object.

## Usage Example

```csharp
var value = new WidgetCodeGenerationInfo();
value.FindChild(path);
```

## See Also

- [Complete Class Catalog](../catalog)