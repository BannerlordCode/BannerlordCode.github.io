<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionCombatantsLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionCombatantsLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionCombatantsLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/MissionCombatantsLogic.cs`

## Overview

`MissionCombatantsLogic` is a MissionLogic (a MissionBehavior subclass) running per-tick/event logic in a mission. Add via `mission.AddMissionBehavior(new MissionCombatantsLogic())`; subclass it to customize.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerSide` | `public BattleSideEnum PlayerSide { get { if (this.PlayerBattleCombatant == null) { return BattleSideEnum.None; }` |

## Key Methods

### GetBannerForSide
```csharp
public Banner GetBannerForSide(BattleSideEnum side)
```

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### EarlyStart
```csharp
public override void EarlyStart()
```

### AfterStart
```csharp
public override void AfterStart()
```

### GetAllCombatants
```csharp
public IEnumerable<IBattleCombatant> GetAllCombatants()
```

### SupportsAllyTeamOnPlayerSide
```csharp
public static bool SupportsAllyTeamOnPlayerSide(IEnumerable<IBattleCombatant> playerSideBattleCombatants, IBattleCombatant playerBattleCombatant, bool isPlayerSergeant, out IBattleCombatant allyCombatant)
```

## Usage Example

```csharp
// Typical usage of MissionCombatantsLogic (Logic)
Mission.Current.AddMissionBehavior(new MissionCombatantsLogic());
```

## See Also

- [Complete Class Catalog](../catalog)