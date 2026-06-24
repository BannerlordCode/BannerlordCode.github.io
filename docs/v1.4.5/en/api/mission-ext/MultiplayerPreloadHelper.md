<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerPreloadHelper`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerPreloadHelper

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerPreloadHelper : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MultiplayerPreloadHelper.cs`

## Overview

`MultiplayerPreloadHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `MultiplayerPreloadHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetExtraEquipmentElementsForCharacter
`public override List<EquipmentElement> GetExtraEquipmentElementsForCharacter(BasicCharacterObject character, bool getAllEquipments = false)`

**Purpose:** Gets the current value of `extra equipment elements for character`.

## Usage Example

```csharp
MultiplayerPreloadHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)