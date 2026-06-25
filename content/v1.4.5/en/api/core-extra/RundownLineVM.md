---
title: "RundownLineVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RundownLineVM`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RundownLineVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information.RundownTooltip
**Module:** TaleWorlds.Core
**Type:** `public class RundownLineVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection.Information.RundownTooltip/RundownLineVM.cs`

## Overview

`RundownLineVM` lives in `TaleWorlds.Core.ViewModelCollection.Information.RundownTooltip` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core.ViewModelCollection.Information.RundownTooltip` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `ValueAsString` | `public string ValueAsString { get; set; }` |
| `Value` | `public float Value { get; set; }` |

## Usage Example

```csharp
var example = new RundownLineVM();
```

## See Also

- [Complete Class Catalog](../catalog)