<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleInitializationModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BattleInitializationModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BattleInitializationModel : MBGameModel<BattleInitializationModel>`
**Base:** `MBGameModel<BattleInitializationModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.ComponentInterfaces/BattleInitializationModel.cs`

## Overview

`BattleInitializationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `BattleInitializationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `BypassPlayerDeployment` | `public static bool BypassPlayerDeployment { get; }` |

## Key Methods

### GetAllAvailableTroopTypes
`public abstract List<FormationClass> GetAllAvailableTroopTypes()`

**Purpose:** Gets the current value of `all available troop types`.

### CanPlayerSideDeployWithOrderOfBattle
`public bool CanPlayerSideDeployWithOrderOfBattle()`

**Purpose:** Checks whether the current object can `player side deploy with order of battle`.

### InitializeModel
`public void InitializeModel()`

**Purpose:** Initializes the state, resources, or bindings for `model`.

### FinalizeModel
`public void FinalizeModel()`

**Purpose:** Handles logic related to `finalize model`.

### SetBypassPlayerDeployment
`public static void SetBypassPlayerDeployment(bool value)`

**Purpose:** Sets the value or state of `bypass player deployment`.

## Usage Example

```csharp
var implementation = new CustomBattleInitializationModel();
```

## See Also

- [Complete Class Catalog](../catalog)