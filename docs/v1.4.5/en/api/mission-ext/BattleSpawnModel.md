<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleSpawnModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BattleSpawnModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BattleSpawnModel : MBGameModel<BattleSpawnModel>`
**Base:** `MBGameModel<BattleSpawnModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.ComponentInterfaces/BattleSpawnModel.cs`

## Overview

`BattleSpawnModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `BattleSpawnModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionStart
`public virtual void OnMissionStart()`

**Purpose:** Called when the `mission start` event is raised.

### OnMissionEnd
`public virtual void OnMissionEnd()`

**Purpose:** Called when the `mission end` event is raised.

## Usage Example

```csharp
var implementation = new CustomBattleSpawnModel();
```

## See Also

- [Complete Class Catalog](../catalog)