---
title: "StackArray2Bool"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StackArray2Bool`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StackArray2Bool

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public struct StackArray2Bool`
**Base:** none
**File:** `TaleWorlds.Core/StackArray.cs`

## Overview

`StackArray2Bool` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `this` | `public bool this { get; set; }` |

## Usage Example

```csharp
var example = new StackArray2Bool();
```

## See Also

- [Complete Class Catalog](../catalog)