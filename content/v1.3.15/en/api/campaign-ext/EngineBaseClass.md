---
title: "EngineBaseClass"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EngineBaseClass`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EngineBaseClass

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public abstract class EngineBaseClass : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.DotNet/EngineBaseClass.cs`

## Overview

`EngineBaseClass` lives in `TaleWorlds.DotNet` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.DotNet` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `EngineType` | `public string EngineType { get; set; }` |

## Usage Example

```csharp
var implementation = new CustomEngineBaseClass();
```

## See Also

- [Complete Class Catalog](../catalog)