---
title: "DefaultEncounterModel"
description: "Auto-generated class reference for DefaultEncounterModel."
---
# DefaultEncounterModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultEncounterModel : EncounterModel`
**Base:** `EncounterModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultEncounterModel.cs`

## Overview

`DefaultEncounterModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultEncounterModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultEncounterModel` is the shipped answer, not the extension point. The abstract `EncounterModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `EncounterModel` is declared `MBGameModel<EncounterModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/EncounterModel.cs:13`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<EncounterModel>(new DefaultEncounterModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:250`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyEncounterModel : EncounterModel
{
    // DefaultEncounterModel is public and concrete, so hold one and call through to it
    // instead of reimplementing the other abstract members.
    private readonly DefaultEncounterModel _stock = new DefaultEncounterModel();

    public override bool IsEncounterExemptFromHostileActions(PartyBase side1, PartyBase side2)
    {
        return _stock.IsEncounterExemptFromHostileActions(side1, side2);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<EncounterModel>(new MyEncounterModel());
        }
    }
}
```

**Most common mistake:** putting the concrete class in the type argument — `gameStarterObject.AddModel<DefaultEncounterModel>(new DefaultEncounterModel())`. It does not compile: the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultEncounterModel` is an `MBGameModel<EncounterModel>`, not an `MBGameModel<DefaultEncounterModel>`. The type argument is not free-form in the other direction either — the engine reads the model back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:633`, `GetGameModel<EncounterModel>()`), so nothing would ever look up a type you invented.

## Key Properties

| Name | Signature |
|------|-----------|
| `NeededMaximumDistanceForEncounteringMobileParty` | `public override float NeededMaximumDistanceForEncounteringMobileParty { get; }` |
| `MaximumAllowedDistanceForEncounteringMobilePartyInArmy` | `public override float MaximumAllowedDistanceForEncounteringMobilePartyInArmy { get; }` |
| `NeededMaximumDistanceForEncounteringTown` | `public override float NeededMaximumDistanceForEncounteringTown { get; }` |
| `NeededMaximumDistanceForEncounteringBlockade` | `public override float NeededMaximumDistanceForEncounteringBlockade { get; }` |
| `NeededMaximumDistanceForEncounteringVillage` | `public override float NeededMaximumDistanceForEncounteringVillage { get; }` |
| `GetEncounterJoiningRadius` | `public override float GetEncounterJoiningRadius { get; }` |
| `PlayerParleyDistance` | `public override float PlayerParleyDistance { get; }` |
| `GetSettlementBeingNearFieldBattleRadius` | `public override float GetSettlementBeingNearFieldBattleRadius { get; }` |

## Key Methods

### IsEncounterExemptFromHostileActions
`public override bool IsEncounterExemptFromHostileActions(PartyBase side1, PartyBase side2)`

**Purpose:** Determines whether the this instance is in the encounter exempt from hostile actions state or condition.

```csharp
// Obtain an instance of DefaultEncounterModel from the subsystem API first
DefaultEncounterModel defaultEncounterModel = ...;
var result = defaultEncounterModel.IsEncounterExemptFromHostileActions(side1, side2);
```

### GetLeaderOfSiegeEvent
`public override Hero GetLeaderOfSiegeEvent(SiegeEvent siegeEvent, BattleSideEnum side)`

**Purpose:** Reads and returns the leader of siege event value held by the this instance.

```csharp
// Obtain an instance of DefaultEncounterModel from the subsystem API first
DefaultEncounterModel defaultEncounterModel = ...;
var result = defaultEncounterModel.GetLeaderOfSiegeEvent(siegeEvent, side);
```

### CanMainHeroDoParleyWithParty
`public override bool CanMainHeroDoParleyWithParty(PartyBase partyBase, out TextObject explanation)`

**Purpose:** Checks whether the this instance meets the preconditions for main hero do parley with party.

```csharp
// Obtain an instance of DefaultEncounterModel from the subsystem API first
DefaultEncounterModel defaultEncounterModel = ...;
var result = defaultEncounterModel.CanMainHeroDoParleyWithParty(partyBase, explanation);
```

### GetLeaderOfMapEvent
`public override Hero GetLeaderOfMapEvent(MapEvent mapEvent, BattleSideEnum side)`

**Purpose:** Reads and returns the leader of map event value held by the this instance.

```csharp
// Obtain an instance of DefaultEncounterModel from the subsystem API first
DefaultEncounterModel defaultEncounterModel = ...;
var result = defaultEncounterModel.GetLeaderOfMapEvent(mapEvent, side);
```

### GetCharacterSergeantScore
`public override int GetCharacterSergeantScore(Hero hero)`

**Purpose:** Reads and returns the character sergeant score value held by the this instance.

```csharp
// Obtain an instance of DefaultEncounterModel from the subsystem API first
DefaultEncounterModel defaultEncounterModel = ...;
var result = defaultEncounterModel.GetCharacterSergeantScore(hero);
```

### GetDefenderPartiesOfSettlement
`public override IEnumerable<PartyBase> GetDefenderPartiesOfSettlement(Settlement settlement, MapEvent.BattleTypes mapEventType)`

**Purpose:** Reads and returns the defender parties of settlement value held by the this instance.

```csharp
// Obtain an instance of DefaultEncounterModel from the subsystem API first
DefaultEncounterModel defaultEncounterModel = ...;
var result = defaultEncounterModel.GetDefenderPartiesOfSettlement(settlement, mapEventType);
```

### GetNextDefenderPartyOfSettlement
`public override PartyBase GetNextDefenderPartyOfSettlement(Settlement settlement, ref int partyIndex, MapEvent.BattleTypes mapEventType)`

**Purpose:** Reads and returns the next defender party of settlement value held by the this instance.

```csharp
// Obtain an instance of DefaultEncounterModel from the subsystem API first
DefaultEncounterModel defaultEncounterModel = ...;
var result = defaultEncounterModel.GetNextDefenderPartyOfSettlement(settlement, partyIndex, mapEventType);
```

### CreateMapEventComponentForEncounter
`public override MapEventComponent CreateMapEventComponentForEncounter(PartyBase attackerParty, PartyBase defenderParty, MapEvent.BattleTypes battleType)`

**Purpose:** Constructs a new map event component for encounter entity and returns it to the caller.

```csharp
// Obtain an instance of DefaultEncounterModel from the subsystem API first
DefaultEncounterModel defaultEncounterModel = ...;
var result = defaultEncounterModel.CreateMapEventComponentForEncounter(attackerParty, defenderParty, battleType);
```

### GetSurrenderChance
`public override float GetSurrenderChance(MobileParty defenderParty, MobileParty attackerParty)`

**Purpose:** Reads and returns the surrender chance value held by the this instance.

```csharp
// Obtain an instance of DefaultEncounterModel from the subsystem API first
DefaultEncounterModel defaultEncounterModel = ...;
var result = defaultEncounterModel.GetSurrenderChance(defenderParty, attackerParty);
```

### GetBribeChance
`public override ExplainedNumber GetBribeChance(MobileParty defenderParty, MobileParty attackerParty)`

**Purpose:** Reads and returns the bribe chance value held by the this instance.

```csharp
// Obtain an instance of DefaultEncounterModel from the subsystem API first
DefaultEncounterModel defaultEncounterModel = ...;
var result = defaultEncounterModel.GetBribeChance(defenderParty, attackerParty);
```

### GetMapEventSideRunAwayChance
`public override float GetMapEventSideRunAwayChance(MapEventSide mapEventSide)`

**Purpose:** Reads and returns the map event side run away chance value held by the this instance.

```csharp
// Obtain an instance of DefaultEncounterModel from the subsystem API first
DefaultEncounterModel defaultEncounterModel = ...;
var result = defaultEncounterModel.GetMapEventSideRunAwayChance(mapEventSide);
```

### FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter
`public override void FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter(List<MobileParty> partiesToJoinPlayerSide, List<MobileParty> partiesToJoinEnemySide)`

**Purpose:** Looks up the matching non attached npc parties who will join player encounter in the current collection or scope.

```csharp
// Obtain an instance of DefaultEncounterModel from the subsystem API first
DefaultEncounterModel defaultEncounterModel = ...;
defaultEncounterModel.FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter(partiesToJoinPlayerSide, partiesToJoinEnemySide);
```

### CanPlayerForceBanditsToJoin
`public override bool CanPlayerForceBanditsToJoin(out TextObject explanation)`

**Purpose:** Checks whether the this instance meets the preconditions for player force bandits to join.

```csharp
// Obtain an instance of DefaultEncounterModel from the subsystem API first
DefaultEncounterModel defaultEncounterModel = ...;
var result = defaultEncounterModel.CanPlayerForceBanditsToJoin(explanation);
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultEncounterModel` for it at `SandBoxManager.cs:250`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyEncounterModel : EncounterModel, so it is already an MBGameModel<EncounterModel>
        gameStarter.AddModel<EncounterModel>(new MyEncounterModel());
    }
}
```

## See Also

- [Area Index](../)