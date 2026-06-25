---
title: "BoundaryCrossingVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BoundaryCrossingVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BoundaryCrossingVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BoundaryCrossingVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/BoundaryCrossingVM.cs`

## Overview

`BoundaryCrossingVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Show` | `public bool Show { get; set; }` |
| `WarningText` | `public string WarningText { get; set; }` |
| `WarningProgress` | `public double WarningProgress { get; set; }` |
| `WarningIntProgress` | `public int WarningIntProgress { get; set; }` |
| `Countdown` | `public int Countdown { get; set; }` |

## Usage Example

```csharp
var value = new BoundaryCrossingVM();
```

## See Also

- [Complete Class Catalog](../catalog)