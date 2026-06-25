---
title: "CraftingStatTypes"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingStatTypes`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingStatTypes

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public enum CraftingStatTypes`
**Area:** core-extra

## Overview

`CraftingStatTypes` lives in `TaleWorlds.Core`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Weight` |
| `WeaponReach` |
| `ThrustSpeed` |
| `SwingSpeed` |
| `ThrustDamage` |
| `SwingDamage` |
| `Handling` |
| `MissileDamage` |
| `MissileSpeed` |
| `Accuracy` |
| `StackAmount` |

## Usage Example

```csharp
CraftingStatTypes example = CraftingStatTypes.Weight;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
