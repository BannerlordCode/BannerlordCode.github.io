---
title: "DefaultEncounterModel"
description: "The v1.4.5 default EncounterModel implementation: encounter thresholds, leader and defender selection, battle-component routing, surrender, bribe, joining, retreat, and teleport rules."
---
# DefaultEncounterModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultEncounterModel : EncounterModel`  
**Base:** [`EncounterModel`](../EncounterModel)  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultEncounterModel.cs`

## Responsibility

`DefaultEncounterModel` is the source-backed v1.4.5 implementation of campaign encounter rules, including proximity thresholds, side leaders and defenders, battle-component routing, surrender/bribe probabilities, joining parties, retreat, and post-event teleport candidates.

## Mental model

This is a calculation model with one important bridge: `CreateMapEventComponentForEncounter` chooses a component factory or asks `Campaign.Current.MapEventManager` to create a manager-owned event. The model does not replace [`StartBattleAction`](../../campaign-ext/StartBattleAction), which decides when to start the encounter and dispatches `OnStartBattle` after the component/event exists.

The default implementation is installed as part of the campaign's model list and is read through `Campaign.Current.Models.EncounterModel`. A mod that subclasses it should change only an intentional rule and inherit the remaining implementation. A mod that implements [`EncounterModel`](../EncounterModel) directly must implement every abstract member and preserve the same lifecycle contract.

## Dependencies and flow

The model is consumed by [`GameModels`](../GameModels) and queried through `Campaign.Current.Models.EncounterModel`. [`StartBattleAction`](../../campaign-ext/StartBattleAction) passes it real `PartyBase` objects and a [`MapEvent.BattleTypes`](../BattleTypes) value; the selected component or [`MapEventManager`](../MapEventManager) path then creates and registers the live [`MapEvent`](../MapEvent). [`PlayerEncounter`](../PlayerEncounter) reads that event when it connects campaign encounter state to menus and Mission entry points.

## Default thresholds

The v1.4.5 source returns these values:

| Member | Default |
| --- | ---: |
| `NeededMaximumLandDistanceForEncounteringMobileParty` | `0.5f` |
| `NeededMaximumNavalDistanceForEncounteringMobileParty` | `0f` |
| `MaximumAllowedLandDistanceForEncounteringMobilePartyInArmy` | `1.5f` |
| `MaximumAllowedNavalDistanceForEncounteringMobilePartyInArmy` | `0f` |
| `NeededMaximumDistanceForEncounteringTown` | `0.05f` |
| `NeededMaximumDistanceForEncounteringBlockade` | `3f` |
| `NeededMaximumDistanceForEncounteringVillage` | `1f` |
| `GetEncounterJoiningRadius` | `3f` |
| `GetSettlementBeingNearFieldBattleRadius` | `3f` |
| `PlayerParleyDistance` | `MobileParty.MainParty.SeeingRange` |
| `MinimumNumberOfMenForAttackingVillageViaScene` | `1` |

The values are campaign map distances, not meters in a Mission scene. The naval defaults of zero are source facts; do not silently reuse land thresholds for naval behavior.

## Component routing

`CreateMapEventComponentForEncounter(attackerParty, defenderParty, battleType)` has this routing contract:

| `MapEvent.BattleTypes` | Default path |
| --- | --- |
| `FieldBattle` | `FieldBattleEventComponent.CreateFieldBattleEvent` and returns the component. |
| `Raid` | `RaidEventComponent.CreateRaidEvent` and returns the component. The factory also handles raid-specific settlement state and rewards. |
| `Hideout` | `HideoutEventComponent.CreateHideoutEvent(attackerParty, defenderParty, isSendTroops: false)` and returns the component. |
| `BlockadeBattle` | `BlockadeBattleMapEvent.CreateBlockadeBattleMapEvent(attackerParty, defenderParty, isSallyOut: false)` and returns the component. |
| `BlockadeSallyOutBattle` | The same blockade factory with `isSallyOut: true`, returning the component. |
| `Siege` | `Campaign.Current.MapEventManager.StartSiegeMapEvent`; the model does not return a component from this branch. |
| `SallyOut` | `Campaign.Current.MapEventManager.StartSallyOutMapEvent`; manager-owned creation. |
| `SiegeOutside` | `Campaign.Current.MapEventManager.StartSiegeOutsideMapEvent`; manager-owned creation. |

This distinction matters because the returned component branches and the manager branches have different registration and initialization paths. Use [`MapEventManager`](../MapEventManager), [`MapEvent`](../MapEvent), and [`MapEvent.BattleTypes`](../BattleTypes) to understand the event after creation.

## Rule behavior

### Hostility, parley, and leaders

`IsEncounterExemptFromHostileActions` returns true when either applicable mobile party is configured to avoid hostile actions, and also treats missing party inputs as exempt. `CanMainHeroDoParleyWithParty` requires a usable main party, no active player map event or settlement, a non-prisoner main Hero, a war relationship, and the relevant access/distance rules. Rebels are explicitly refused, mobile-party parley is refused by this implementation, and inspected fortifications use `MapDistanceModel` and `SettlementAccessModel` before allowing a meeting.

For a siege with one involved party, `GetLeaderOfSiegeEvent` returns that party's `LeaderHero`. With several parties it ranks candidates using faction alignment, kingdom/army leadership, clan tier, army membership, healthy troops, and army size. `GetLeaderOfMapEvent` applies the equivalent event-side ranking. `GetCharacterSergeantScore` combines clan tier/leadership, army leadership and party size after wounded troops are excluded.

`GetDefenderPartiesOfSettlement` and `GetNextDefenderPartyOfSettlement` delegate to the settlement's `Town`, `Village`, or `Hideout`. Other settlement shapes return no defender collection, so callers must not assume a non-null result for every `Settlement`.

### Surrender and bribe

Both calculations compare current defender and attacker strength. If defender strength is approximately zero, the default returns `1f`; if attacker strength is approximately zero, or defender strength is not lower, it returns `0f`.

For surrender, the default exponential parameters are:

| Defender | Threshold | Scaling |
| --- | ---: | ---: |
| Villager | `0.23f` | `-13f` |
| Caravan | `0.30f` | `-10f` |
| Bandit on land | `0.10f` | `-15f` |
| Deserter bandit | `0.005f` | `-15f` |
| Bandit at sea | `0.20f` | `-15f` |

The result is derived from the strength ratio and can be increased by the main Hero's `DefaultPerks.Roguery.Scarface` bonus, capped at `1f`.

For bribe, villagers use threshold `0.30f` and scaling `-10f`, caravans `0.52f` and `-10f`, and bandits `0.20f` and `-15f`. The returned `ExplainedNumber` is capped at `1f` and receives the same Roguery perk contribution through `PerkHelper`. These methods assume the defender category is one the default implementation knows; passing an unsupported party category reaches its failed-assert path instead of giving a meaningful custom result.

### Retreat, joining, command, and teleportation

`GetMapEventSideRunAwayChance` returns zero for sieges, sally-outs, siege-outside events, raids, and the player's own map-event side. Otherwise, after at least eight updates, low side morale and the last four rounds meet the source conditions, it starts at `0.2f` and is reduced by the leader's Valor trait.

`FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter` searches around the main party or current battle position. It excludes the main party, parties already in a map event, raft state, siege, settlement, or attachment. It then checks sea/land compatibility, party role, `CanPartyJoinBattle`, faction relations, and `ShouldBeIgnored`, and appends distinct results to the caller's player and enemy lists. Siege and blockade contexts can change the search center and radius.

`CanPlayerForceBanditsToJoin` is a direct Roguery `PartnersInCrime` perk check and fills `TextObject explanation` when the perk is absent. `IsPartyUnderPlayerCommand` recognizes the main party, main Hero ownership or faction leadership, an escort targeting the main party, the main party's army, and a settlement-owner path. The source assumes `party.MapEvent` is available before reading its settlement in the last path.

`GetPartiesToTeleportOnMapEventFinalize` chooses active, healthy mobile parties from the defeated/opposing side, excluding garrisons and certain attached army parties. The result is consumed by map-event finalization; it is not an instruction to teleport the list immediately.

## Real examples

Read the active implementation through the campaign facade:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;

EncounterModel model = Campaign.Current.Models.EncounterModel;
float surrenderChance = model.GetSurrenderChance(defenderParty, attackerParty);
```

Install a narrow derived rule during campaign startup:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;

public sealed class LargerEncounterJoinRadius : TaleWorlds.CampaignSystem.GameComponents.DefaultEncounterModel
{
    public override float GetEncounterJoiningRadius => 4f;
}

public void OnGameStart(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter campaignStarter)
    {
        campaignStarter.AddModel(new LargerEncounterJoinRadius());
    }
}
```

To perform a real battle transition, let `StartBattleAction` select the context and call this model's component route:

```csharp
using TaleWorlds.CampaignSystem.Actions;

StartBattleAction.Apply(attackerParty, defenderParty);
```

Do not call `CreateMapEventComponentForEncounter` as a replacement for the Action in ordinary mod code. The Action also attaches a party to an existing event when appropriate and dispatches `OnStartBattle`.

## Risks and lifecycle boundaries

- **Manager branch has no returned component:** `Siege`, `SallyOut`, and `SiegeOutside` start through `Campaign.Current.MapEventManager`. Code that assumes a non-null return value for every battle type is wrong.
- **Wrong owner for mutation:** the model calculates and routes; `StartBattleAction`, map-event components, and `MapEventManager` own registration, event dispatch, and state mutation. Bypassing them can strand parties or skip campaign events.
- **Null settlement defenders:** `GetDefenderPartiesOfSettlement` returns null for unsupported settlement forms. Check the result before enumeration.
- **Strength and party category:** surrender/bribe reads live rosters and party classification. A destroyed, empty, or unsupported party can produce a misleading result or assert; call during the encounter flow with live `MobileParty` instances.
- **Map-event timing:** run-away and teleport queries require a live `MapEvent`, populated sides, update count, and a valid defeated/player side. Do not cache the result across finalization.
- **Joining search side effects:** the method appends to caller lists and can clear candidate lists when an ignored party is present. Treat those lists as owned encounter state.
- **Player command null path:** the default `IsPartyUnderPlayerCommand` reads `party.MapEvent.MapEventSettlement` in one branch. Only call it with a party in the expected active map-event context, or provide a defensive override.
- **Startup order:** add the model through `CampaignGameStarter` before `GameModels` is built. Replacing it after the facade has been assembled does not retroactively update `Campaign.Current.Models.EncounterModel`.
- **Save boundary:** model instances are startup services, while map events and player encounters are save-owned runtime state. Never serialize a transient component or keep its parties after `MapEventManager` finalizes and removes the event.

## Version note

The thresholds, party filters, perk constants, event routing, and manager method names here are from the v1.4.5 source tree. Recheck them against the target release before shipping a cross-version model.

## Navigation

- **Parent:** [Campaign API](./)
- **Sibling:** [EncounterModel](../EncounterModel) · [GameModels](../GameModels) · [MapEventManager](../MapEventManager)
- **Related:** [MapEvent](../MapEvent) · [MapEvent.BattleTypes](../BattleTypes) · [PlayerEncounter](../PlayerEncounter) · [CampaignGameStarter](../CampaignGameStarter) · [StartBattleAction](../../campaign-ext/StartBattleAction)
- **Component pages:** [FieldBattleEventComponent](../FieldBattleEventComponent) · [RaidEventComponent](../RaidEventComponent)
- **Language mirror:** [中文页面](../../../../zh/api/campaign/DefaultEncounterModel)
