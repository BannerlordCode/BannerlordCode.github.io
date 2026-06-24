<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPArmoryTauntCosmeticCategoryVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPArmoryTauntCosmeticCategoryVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticCategory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPArmoryTauntCosmeticCategoryVM : MPArmoryCosmeticCategoryBaseVM`
**Base:** `MPArmoryCosmeticCategoryBaseVM`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticCategory/MPArmoryTauntCosmeticCategoryVM.cs`

## Overview

`MPArmoryTauntCosmeticCategoryVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticCategory` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticCategory` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

## Usage Example

```csharp
var value = new MPArmoryTauntCosmeticCategoryVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)