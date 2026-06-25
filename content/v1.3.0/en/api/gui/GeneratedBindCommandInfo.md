---
title: "GeneratedBindCommandInfo"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GeneratedBindCommandInfo`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GeneratedBindCommandInfo

**Namespace:** TaleWorlds.GauntletUI.CodeGenerator
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GeneratedBindCommandInfo`
**Base:** none
**File:** `TaleWorlds.GauntletUI.CodeGenerator/GeneratedBindCommandInfo.cs`

## Overview

`GeneratedBindCommandInfo` lives in `TaleWorlds.GauntletUI.CodeGenerator` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.CodeGenerator` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Command` | `public string Command { get; }` |
| `Path` | `public string Path { get; }` |
| `Method` | `public MethodInfo Method { get; }` |
| `ParameterCount` | `public int ParameterCount { get; }` |
| `MethodParameters` | `public List<GeneratedBindCommandParameterInfo> MethodParameters { get; }` |
| `GotParameter` | `public bool GotParameter { get; set; }` |
| `Parameter` | `public string Parameter { get; set; }` |

## Usage Example

```csharp
var example = new GeneratedBindCommandInfo();
```

## See Also

- [Complete Class Catalog](../catalog)