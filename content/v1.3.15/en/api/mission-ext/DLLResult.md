---
title: "DLLResult"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DLLResult`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DLLResult

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DLLResult`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/DLLResult.cs`

## Overview

`DLLResult` lives in `TaleWorlds.MountAndBlade.Launcher.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Launcher.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DLLName` | `public string DLLName { get; set; }` |
| `IsSafe` | `public bool IsSafe { get; set; }` |
| `Information` | `public string Information { get; set; }` |

## Usage Example

```csharp
var value = new DLLResult();
```

## See Also

- [Complete Class Catalog](../catalog)