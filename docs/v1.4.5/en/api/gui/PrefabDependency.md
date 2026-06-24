<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PrefabDependency`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PrefabDependency

**Namespace:** TaleWorlds.GauntletUI.CodeGenerator
**Module:** TaleWorlds.GauntletUI
**Type:** `public class PrefabDependency`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI.CodeGenerator/TaleWorlds.GauntletUI.CodeGenerator/PrefabDependency.cs`

## Overview

`PrefabDependency` lives in `TaleWorlds.GauntletUI.CodeGenerator` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.CodeGenerator` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Type` | `public string Type { get; }` |
| `VariantName` | `public string VariantName { get; }` |
| `IsRoot` | `public bool IsRoot { get; }` |
| `WidgetTemplateGenerateContext` | `public WidgetTemplateGenerateContext WidgetTemplateGenerateContext { get; }` |

## Usage Example

```csharp
var example = new PrefabDependency();
```

## See Also

- [Complete Class Catalog](../catalog)