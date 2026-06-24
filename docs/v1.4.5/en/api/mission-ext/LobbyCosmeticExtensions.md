<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LobbyCosmeticExtensions`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LobbyCosmeticExtensions

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class LobbyCosmeticExtensions`
**Area:** mission-ext

## Overview

`LobbyCosmeticExtensions` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ToItemTypeEnum
`public static ItemTypeEnum ToItemTypeEnum(this MPArmoryCosmeticsVM.ClothingCategory cosmeticCategory)`

**Purpose:** Handles logic related to `to item type enum`.

### GetCosmeticEquipmentIndex
`public static EquipmentIndex GetCosmeticEquipmentIndex(this ItemObject itemObject)`

**Purpose:** Gets the current value of `cosmetic equipment index`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
LobbyCosmeticExtensions.ToItemTypeEnum(cosmeticCategory);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
