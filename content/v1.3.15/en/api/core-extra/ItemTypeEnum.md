---
title: "ItemTypeEnum"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemTypeEnum`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemTypeEnum

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public enum ItemTypeEnum`
**Area:** core-extra

## Overview

`ItemTypeEnum` lives in `TaleWorlds.Core`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Invalid` |
| `Horse` |
| `OneHandedWeapon` |
| `TwoHandedWeapon` |
| `Polearm` |
| `Arrows` |
| `Bolts` |
| `SlingStones` |
| `Shield` |
| `Bow` |
| `Crossbow` |
| `Sling` |
| `Thrown` |
| `Goods` |
| `HeadArmor` |
| `BodyArmor` |
| `LegArmor` |
| `HandArmor` |
| `Pistol` |
| `Musket` |
| `Bullets` |
| `Animal` |
| `Book` |
| `ChestArmor` |
| `Cape` |
| `HorseHarness` |

## Usage Example

```csharp
ItemTypeEnum example = ItemTypeEnum.Invalid;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
