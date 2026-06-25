---
title: "ParameterGenerationContext"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ParameterGenerationContext`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ParameterGenerationContext

**Namespace:** TaleWorlds.GauntletUI.CodeGenerator
**Module:** TaleWorlds.GauntletUI
**Type:** `public class ParameterGenerationContext`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI.CodeGenerator/TaleWorlds.GauntletUI.CodeGenerator/ParameterGenerationContext.cs`

## Overview

`ParameterGenerationContext` lives in `TaleWorlds.GauntletUI.CodeGenerator` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.CodeGenerator` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `Value` | `public string Value { get; }` |

## Usage Example

```csharp
var example = new ParameterGenerationContext();
```

## See Also

- [Complete Class Catalog](../catalog)