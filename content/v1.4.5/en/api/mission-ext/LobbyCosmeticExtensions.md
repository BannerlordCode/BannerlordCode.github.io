---
title: "LobbyCosmeticExtensions"
description: "Auto-generated class reference for LobbyCosmeticExtensions."
---
# LobbyCosmeticExtensions

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class LobbyCosmeticExtensions`
**Base:** none
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory/LobbyCosmeticExtensions.cs`

## Overview

`LobbyCosmeticExtensions` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ToItemTypeEnum
`public static ItemTypeEnum ToItemTypeEnum(this MPArmoryCosmeticsVM.ClothingCategory cosmeticCategory)`

**Purpose:** Executes the ToItemTypeEnum logic.

```csharp
// Static call; no instance required
LobbyCosmeticExtensions.ToItemTypeEnum(cosmeticCategory);
```

### GetCosmeticEquipmentIndex
`public static EquipmentIndex GetCosmeticEquipmentIndex(this ItemObject itemObject)`

**Purpose:** Reads and returns the cosmetic equipment index value held by the this instance.

```csharp
// Static call; no instance required
LobbyCosmeticExtensions.GetCosmeticEquipmentIndex(itemObject);
```

## Usage Example

```csharp
LobbyCosmeticExtensions.ToItemTypeEnum(cosmeticCategory);
```

## See Also

- [Area Index](../)