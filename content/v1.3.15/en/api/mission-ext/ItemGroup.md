---
title: "ItemGroup"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemGroup`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemGroup

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum ItemGroup`
**Area:** mission-ext

## Overview

`ItemGroup` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `None` |
| `Spear` |
| `Javelin` |
| `Bow` |
| `Crossbow` |
| `Sword` |
| `Axe` |
| `Mace` |
| `ThrowingAxe` |
| `ThrowingKnife` |
| `Ammo` |
| `Shield` |
| `Mount` |
| `Banner` |

## Usage Example

```csharp
ItemGroup example = ItemGroup.None;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
