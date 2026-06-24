<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BindingPathTargetDetails`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BindingPathTargetDetails

**Namespace:** TaleWorlds.GauntletUI.CodeGenerator
**Module:** TaleWorlds.GauntletUI
**Type:** `public class BindingPathTargetDetails`
**Base:** none
**File:** `TaleWorlds.GauntletUI.CodeGenerator/BindingPathTargetDetails.cs`

## Overview

`BindingPathTargetDetails` lives in `TaleWorlds.GauntletUI.CodeGenerator` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.CodeGenerator` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `BindingPath` | `public BindingPath BindingPath { get; }` |
| `IsRoot` | `public bool IsRoot { get; }` |
| `Parent` | `public BindingPathTargetDetails Parent { get; }` |
| `Children` | `public List<BindingPathTargetDetails> Children { get; }` |
| `WidgetDatabindingInformations` | `public List<WidgetCodeGenerationInfoDatabindingExtension> WidgetDatabindingInformations { get; }` |

## Key Methods

### SetParent
`public void SetParent(BindingPathTargetDetails parent)`

**Purpose:** Sets the value or state of `parent`.

## Usage Example

```csharp
var value = new BindingPathTargetDetails();
value.SetParent(parent);
```

## See Also

- [Complete Class Catalog](../catalog)