<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerBattleSpawnModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerBattleSpawnModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerBattleSpawnModel : BattleSpawnModel`
**Base:** `BattleSpawnModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MultiplayerBattleSpawnModel.cs`

## Overview

`MultiplayerBattleSpawnModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `MultiplayerBattleSpawnModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
Game.Current.ReplaceModel<MultiplayerBattleSpawnModel>(new MyMultiplayerBattleSpawnModel());
```

## See Also

- [Complete Class Catalog](../catalog)