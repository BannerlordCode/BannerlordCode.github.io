---
title: "StackArray40Int"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StackArray40Int`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StackArray40Int

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public struct StackArray40Int`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.DotNet/TaleWorlds.DotNet/EngineStackArray.cs`

## Overview

`StackArray40Int` lives in `TaleWorlds.DotNet` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.DotNet` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `this` | `public int this { get; }` |

## Usage Example

```csharp
var example = new StackArray40Int();
```

## See Also

- [Complete Class Catalog](../catalog)