---
title: "SandboxBattleInitializationModel"
description: "Auto-generated class reference for SandboxBattleInitializationModel."
---
# SandboxBattleInitializationModel

**Namespace:** SandBox.GameComponents
**Module:** SandBox.GameComponents
**Type:** `public class SandboxBattleInitializationModel : BattleInitializationModel`
**Base:** `BattleInitializationModel`
**File:** `SandBox/GameComponents/SandboxBattleInitializationModel.cs`

## Overview

`SandboxBattleInitializationModel` answers two questions before the battle screen appears: which formation classes the player may assign troops to, and whether the order-of-battle screen is usable at all. `GetAllAvailableTroopTypes` (`SandBox/GameComponents/SandboxBattleInitializationModel.cs:18`) walks the player side of the live `PlayerEncounter.Battle` and offers the four `FormationClass` values only once it finds a non-hero with wounded troops remaining (`:34`) — it inspects the real roster rather than a rule table, so a fully-wiped formation type simply never appears. `CanPlayerSideDeployWithOrderOfBattleAux` is the other half and it is a hard gate: false during a sally-out (`:66`), then true only if the player leads the engagement, owns the settlement being fought over, or is a sergeant (`:76`), and only with at least 20 controllable troops.

## Mental Model

See it as a pre-deployment capability probe whose answers are consumed by the UI layer, not by the simulation. `SPOrderOfBattleVM.cs:158` calls `CanPlayerSideDeployWithOrderOfBattle` to decide whether the order-of-battle view exists, and `AssignPlayerRoleInTeamMissionController.cs:76` reads the same answer a second time when deciding who commands the formation. Because the troop-type list is derived from `PlayerEncounter.Battle` rather than from anything static, calling it outside an encounter throws rather than returning an empty list — an override must reproduce that precondition or add a guard the stock code does not have. The `>= 20` troop threshold is the number most likely to be wrong for a mod that scales battles down: lowering it in the model is enough, because both consumers re-ask each time rather than reading a cached flag.

## Key Methods

### GetAllAvailableTroopTypes
`public override List<FormationClass> GetAllAvailableTroopTypes()`

**Purpose:** Reads and returns the all available troop types value held by this instance.

```csharp
SandboxBattleInitializationModel sandboxBattleInitializationModel = ...;
var result = sandboxBattleInitializationModel.GetAllAvailableTroopTypes();
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<BattleInitializationModel>(new SandboxBattleInitializationModel());
}
```

`BattleInitializationModel` is declared as `MBGameModel<BattleInitializationModel>` (`BattleInitializationModel.cs:8`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `SandBoxSubModule.cs:42`.

## See Also

- [Area Index](../)