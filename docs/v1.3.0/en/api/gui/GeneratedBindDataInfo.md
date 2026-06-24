<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GeneratedBindDataInfo`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GeneratedBindDataInfo

**Namespace:** TaleWorlds.GauntletUI.CodeGenerator
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GeneratedBindDataInfo`
**Base:** none
**File:** `TaleWorlds.GauntletUI.CodeGenerator/GeneratedBindDataInfo.cs`

## Overview

`GeneratedBindDataInfo` lives in `TaleWorlds.GauntletUI.CodeGenerator` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.CodeGenerator` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Property` | `public string Property { get; }` |
| `Path` | `public string Path { get; }` |
| `WidgetPropertyType` | `public Type WidgetPropertyType { get; set; }` |
| `ViewModelPropertType` | `public Type ViewModelPropertType { get; set; }` |
| `RequiresConversion` | `public bool RequiresConversion { get; set; }` |

## Usage Example

```csharp
var example = new GeneratedBindDataInfo();
```

## See Also

- [Complete Class Catalog](../catalog)