---
title: "MultiplayerPreloadHelper"
description: "Auto-generated class reference for MultiplayerPreloadHelper."
---
# MultiplayerPreloadHelper

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerPreloadHelper : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MultiplayerPreloadHelper.cs`

## Overview

`MultiplayerPreloadHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `MultiplayerPreloadHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetExtraEquipmentElementsForCharacter
`public override List<EquipmentElement> GetExtraEquipmentElementsForCharacter(BasicCharacterObject character, bool getAllEquipments = false)`

**Purpose:** Reads and returns the `extra equipment elements for character` value held by the current object.

```csharp
// Obtain an instance of MultiplayerPreloadHelper from the subsystem API first
MultiplayerPreloadHelper multiplayerPreloadHelper = ...;
var result = multiplayerPreloadHelper.GetExtraEquipmentElementsForCharacter(character, false);
```

## Usage Example

```csharp
MultiplayerPreloadHelper.Initialize();
```

## See Also

- [Area Index](../)