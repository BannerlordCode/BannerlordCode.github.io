<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GeneratedBindCommandParameterInfo`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GeneratedBindCommandParameterInfo

**Namespace:** TaleWorlds.GauntletUI.CodeGenerator
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GeneratedBindCommandParameterInfo`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI.CodeGenerator/TaleWorlds.GauntletUI.CodeGenerator/GeneratedBindCommandParameterInfo.cs`

## Overview

`GeneratedBindCommandParameterInfo` lives in `TaleWorlds.GauntletUI.CodeGenerator` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.CodeGenerator` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsViewModel` | `public bool IsViewModel { get; set; }` |
| `Type` | `public Type Type { get; set; }` |

## Usage Example

```csharp
var example = new GeneratedBindCommandParameterInfo();
```

## See Also

- [Complete Class Catalog](../catalog)