---
title: "MBAlphaBlendMode"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBAlphaBlendMode`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBAlphaBlendMode

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public enum MBAlphaBlendMode : byte`
**Base:** `byte`
**Area:** engine

## Overview

`MBAlphaBlendMode` lives in `TaleWorlds.Engine`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `NoAlphaBlend` |
| `Modulate` |
| `AddAlpha` |
| `Multiply` |
| `Add` |
| `Max` |
| `Factor` |
| `AddModulateCombined` |
| `NoAlphaBlendNoWrite` |
| `ModulateNoWrite` |
| `GbufferAlphaBlend` |
| `GbufferAlphaBlendWithVtResolve` |
| `NoAlphaBlendNoAlphaWrite` |

## Usage Example

```csharp
MBAlphaBlendMode example = MBAlphaBlendMode.NoAlphaBlend;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)
