---
title: "KillInfo"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KillInfo`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KillInfo

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum KillInfo : sbyte`
**Base:** `sbyte`
**Area:** mission-ext

## Overview

`KillInfo` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Invalid` |
| `1` |
| `Headshot` |
| `CouchedLance` |
| `Punch` |
| `MountHit` |
| `Bow` |
| `Crossbow` |
| `ThrowingAxe` |
| `ThrowingKnife` |
| `Javelin` |
| `Stone` |
| `Pistol` |
| `Musket` |
| `OneHandedSword` |
| `TwoHandedSword` |
| `OneHandedAxe` |
| `TwoHandedAxe` |
| `Mace` |
| `Spear` |
| `Morningstar` |
| `Maul` |
| `Backstabbed` |
| `Gravity` |
| `ShieldBash` |
| `WeaponBash` |
| `Kick` |

## Usage Example

```csharp
KillInfo example = KillInfo.Invalid;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
