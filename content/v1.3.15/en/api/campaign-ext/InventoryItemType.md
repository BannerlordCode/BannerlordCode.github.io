---
title: "InventoryItemType"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InventoryItemType`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InventoryItemType

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public enum InventoryItemType`
**Area:** campaign-ext

## Overview

`InventoryItemType` lives in `Helpers`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `Helpers` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `None` |
| `0` |
| `Weapon` |
| `1` |
| `Shield` |
| `2` |
| `HeadArmor` |
| `4` |
| `BodyArmor` |
| `8` |
| `LegArmor` |
| `16` |
| `HandArmor` |
| `32` |
| `Horse` |
| `64` |
| `HorseHarness` |
| `128` |
| `Goods` |
| `256` |
| `Book` |
| `512` |
| `Animal` |
| `1024` |
| `Cape` |
| `2048` |
| `Banner` |
| `4096` |
| `HorseCategory` |
| `192` |

## Usage Example

```csharp
InventoryItemType example = InventoryItemType.None;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
