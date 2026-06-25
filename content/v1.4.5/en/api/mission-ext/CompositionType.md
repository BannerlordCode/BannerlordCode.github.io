---
title: "CompositionType"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CompositionType`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CompositionType

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum CompositionType`
**Area:** mission-ext

## Overview

`CompositionType` lives in `TaleWorlds.MountAndBlade.CustomBattle`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.CustomBattle` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `MeleeInfantry` |
| `RangedInfantry` |
| `MeleeCavalry` |

## Usage Example

```csharp
CompositionType example = CompositionType.MeleeInfantry;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
