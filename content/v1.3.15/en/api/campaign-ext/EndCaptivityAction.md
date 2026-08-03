---
title: "EndCaptivityAction"
description: "Source-backed release, death cleanup, roster, event, and notification semantics for campaign hero captivity."
---

# EndCaptivityAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class EndCaptivityAction`  
**Source:** `TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/EndCaptivityAction.cs`

## Overview

`EndCaptivityAction` is the campaign transition boundary for a hero leaving captivity. Its public methods choose an `EndCaptivityDetail`; the shared implementation then captures the current prison party and faction, applies the Main Hero or ordinary-hero branch, and dispatches the matching release notification when that branch reaches it. The action is synchronous: the roster/state/event work described here happens during the call.

This is a release transition, not a ransom calculator, barter engine, battle resolver, or general-purpose roster editor. The caller decides that a ransom, peace, escape, battle release, player choice, or compensation has happened, then calls the matching public entry point.

## Mental Model

Think of the action as a two-branch state machine:

1. It snapshots `prisoner.PartyBelongedToAsPrisoner` and that party's `MapFaction` before changing anything. Those values are supplied to the later `OnHeroPrisonerReleased` event.
2. If the target is `Hero.MainHero`, it ends `PlayerCaptivity`, repairs the main party's settlement/sea placement, optionally shows the facilitator ransom message, dispatches the hero release event, and returns. It does not remove Main Hero from an ordinary `PrisonRoster` or run the ordinary hero state branch.
3. For another hero, it removes the hero's `CharacterObject` from the captured party's `PrisonRoster` when present, changes the hero to `Released` for every non-death release detail, makes a non-ransom player companion fugitive, adds the released hero to the current settlement without a party when applicable, and dispatches the hero release event.

`ApplyInternal` is the private coordinator for those steps. It is useful for reading the source, but it is not a mod entry point. Mods should call one of the public `ApplyBy...` methods below or the higher-level action that owns the scenario.

## Public entries and timing

The v1.4.5 source exposes exactly eight public methods: seven distinct entry names plus the two overloads of `ApplyByReleasedByChoice`.

| Public entry | Detail and timing | Important behavior |
|---|---|---|
| `ApplyByReleasedAfterBattle(Hero character)` | `ReleasedAfterBattle`; call after the map-battle flow has decided that the hero is no longer captive. | Uses the normal release branch. The action does not resolve the battle itself. |
| `ApplyByRansom(Hero character, Hero facilitator)` | `Ransom`; call after a ransom/barter or sale decision has succeeded. | Releases the hero. For Main Hero, a non-null facilitator produces the quick ransom message. The method does not transfer gold. |
| `ApplyByPeace(Hero character, Hero facilitator = null)` | `ReleasedAfterPeace`; call after the peace path has selected this prisoner for release. | Releases the hero. A facilitator is only used by the Main Hero notification path. |
| `ApplyByEscape(Hero character, Hero facilitator = null, bool showNotification = true)` | `ReleasedAfterEscape`; call when the escape decision is complete. | Releases the hero. `showNotification` is passed to the ordinary hero event; the Main Hero branch dispatches its event with `true` in this source. |
| `ApplyByDeath(Hero character)` | `Death`; call from the death workflow after the hero has been made dead. | Clears `StayingInSettlement`, removes the prisoner roster entry if present, and returns without `Released` state, settlement re-addition, or `OnHeroPrisonerReleased` from this action. |
| `ApplyByReleasedByChoice(FlattenedTroopRoster troopRoster)` | `ReleasedByChoice`; call after a party-screen release roster has been finalized. | Applies the ordinary hero path to each hero element, then dispatches `OnPrisonerReleased(troopRoster)` once for the complete flattened roster. |
| `ApplyByReleasedByChoice(Hero character, Hero facilitator = null)` | `ReleasedByChoice`; call when a single hero is released by a choice/barter workflow. | Applies the single-hero release branch; the facilitator is only relevant to the Main Hero quick message. |
| `ApplyByReleasedByCompensation(Hero character)` | `ReleasedByCompensation`; call after the higher-level compensation/sale workflow has decided to release the hero. | Releases the hero but performs no compensation payment itself. |

`EndCaptivityDetail` is an enum with `Ransom`, `ReleasedAfterPeace`, `ReleasedAfterBattle`, `ReleasedAfterEscape`, `ReleasedByChoice`, `Death`, and `ReleasedByCompensation`. The enum is not a second public trigger API; use the corresponding `ApplyBy...` method.

## Side effects and ordering

### Main Hero branch

When `character == Hero.MainHero`, the action:

1. calls `PlayerCaptivity.EndCaptivity()`;
2. if the captor is a settlement, calls `MobileParty.MainParty.DisembarkToPosition(captorSettlement.GatePosition)`;
3. otherwise, if the captor is a mobile party, copies its `IsCurrentlyAtSea` value to `MobileParty.MainParty.IsCurrentlyAtSea`;
4. if `facilitator` is non-null and the detail is not `Death`, sets the `FACILITATOR` localization property and adds the quick message that the facilitator paid a ransom and freed the player;
5. dispatches `OnHeroPrisonerReleased` with the original prisoner party, capturer faction, and detail, then returns.

The Main Hero branch does not call `ChangeState(Hero.CharacterStates.Released)`, does not remove the hero from a normal prison roster, does not call `MakeHeroFugitiveAction`, and does not call `CurrentSettlement.AddHeroWithoutParty`. `PlayerCaptivity.EndCaptivity()` is the player-specific transition.

### Ordinary hero branch

For a non-main hero, the order is observable:

1. Death clears `StayingInSettlement` before roster cleanup.
2. If the captured party's `PrisonRoster` contains the hero `CharacterObject`, it removes that troop.
3. Ransom, peace, battle, escape, choice, and compensation change the hero state to `Hero.CharacterStates.Released`.
4. A `IsPlayerCompanion` released for anything other than ransom is sent through `MakeHeroFugitiveAction.Apply`. Ransom is the one release detail excluded from this companion-fugitive rule.
5. For a non-death release, `CurrentSettlement?.AddHeroWithoutParty(prisoner)` runs.
6. The action dispatches `OnHeroPrisonerReleased(prisoner, originalParty, originalCapturerFaction, detail, showNotification)`.

Death is an intentional terminal exception: the switch returns before settlement re-addition and event dispatch. In the real death path, [`KillCharacterAction`](../KillCharacterAction/) changes the hero to `Dead` and sets the death day before calling `ApplyByDeath`; `ApplyByDeath` is captivity cleanup, not the operation that kills a hero.

## Events, roster, and notifications

The single-hero path dispatches the [`CampaignEventDispatcher`](../CampaignEventDispatcher/) callback `OnHeroPrisonerReleased`, which reaches the [`CampaignEvents`](../CampaignEvents/) `HeroPrisonerReleased` event. For ordinary heroes it fires after roster removal, state change, possible fugitive conversion, and settlement re-addition. The event arguments retain the captured party and faction captured at the beginning of the action, even though the prison roster may already have changed.

The Main Hero event is dispatched after `PlayerCaptivity.EndCaptivity()` and placement repair. In this source the Main Hero call does not pass the `showNotification` argument, so `ApplyByEscape(..., showNotification: false)` suppresses the ordinary hero event's notification flag but does not pass `false` through the Main Hero branch.

The roster overload has two layers of notification:

- each hero in `troopRoster` receives the ordinary `OnHeroPrisonerReleased` event with the default `showNotification: true`;
- after the loop, the action dispatches `OnPrisonerReleased(troopRoster)` once for the complete flattened roster, including non-hero entries that the loop did not release individually.

The action itself does not calculate ransom value, pay gold, report a prisoner sale, or transfer ordinary prisoners. Those responsibilities remain with [`SellPrisonersAction`](../SellPrisonersAction/), [`TransferPrisonerAction`](../TransferPrisonerAction/), and the owning behavior/UI workflow.

## Real call paths

The source callsites show which layer owns each precondition and side effect:

### Barter release

[`SetPrisonerFreeBarterable`](../SetPrisonerFreeBarterable/) stores the prisoner and ransom payer as saveable fields. Its `Apply()` first checks `_prisonerCharacter.IsPrisoner`, then calls:

```csharp
EndCaptivityAction.ApplyByRansom(_prisonerCharacter, _ransompayer);
```

The barterable calculates its unit value; `EndCaptivityAction` only performs the release transition and, for Main Hero, displays the facilitator message. Do not call the release action before the barter has actually been accepted.

### Party screen choice

[`PartyScreenHelper`](../PartyScreenHelper/) calls the roster overload from its default done handler after the released and taken prisoner rosters have been computed:

```csharp
if (!releasedPrisonerRoster.IsEmpty())
{
    EndCaptivityAction.ApplyByReleasedByChoice(releasedPrisonerRoster);
}
if (!takenPrisonerRoster.IsEmpty())
{
    TakePrisonerAction.ApplyByTakenFromPartyScreen(takenPrisonerRoster);
}
```

The order matters. The release batch is applied before the separate `TakePrisonerAction` batch, and `EndCaptivityAction` receives the flattened result produced by the screen rather than rebuilding a roster from mutable fields.

### Sale, ransom, compensation, and transfer

[`SellPrisonersAction`](../SellPrisonersAction/) handles the higher-level sale. For a non-main hero, a buyer at peace with the hero's faction routes a player-clan hero to `ApplyByReleasedByCompensation` and another hero to `ApplyByRansom(..., null)`. Without a buyer it also uses the ransom entry with a null facilitator. In the at-war case it calls `TransferPrisonerAction` instead, so selling and transferring are not interchangeable.

The sale action separately removes ordinary prisoners, calculates ransom value, pays the seller, raises settlement/sale events, and handles donations. A direct `EndCaptivityAction` call does none of those economic or ordinary-prisoner operations.

### Death and battle release

[`KillCharacterAction`](../KillCharacterAction/) calls `ApplyByDeath` from `MakeDead` after `ChangeState(Dead)` and `SetDeathDay`. Conversely, map-event code calls `ApplyByReleasedAfterBattle` after a battle release decision. Both callers own the preceding battle/death rules; this action records the captivity consequence and publishes the release event only for the battle-release path.

## Safe acquisition and use

This is a static action, so there is no instance to construct or resolve from a service container. Acquire a live `Hero` from the current campaign object graph, then call the public entry matching the already-resolved reason:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

Hero prisoner = Hero.MainHero; // or a live HeroObject from a campaign roster element
if (prisoner != null && prisoner.IsPrisoner)
{
    EndCaptivityAction.ApplyByEscape(prisoner, showNotification: true);
}
```

For a party-screen or behavior-owned roster, obtain the real `FlattenedTroopRoster` from that workflow and call the roster overload only after its decision is final. For barter, use the existing [`SetPrisonerFreeBarterable`](../SetPrisonerFreeBarterable/) or another higher-level owner so its payment and eligibility rules run first. Do not fabricate a `Hero`, pass a stale roster snapshot, or use `ApplyInternal` from a mod.

## Dependencies

- Upstream campaign state: [`Hero`](../../campaign/Hero/), [`PlayerCaptivity`](../PlayerCaptivity/), [`MobileParty`](../../campaign/MobileParty/), and the captor's `PartyBase` provide the live prisoner, captivity, placement, and faction context.
- Roster and batch input: [`FlattenedTroopRoster`](../FlattenedTroopRoster/) supplies the party-screen release batch; its hero entries are resolved through `CharacterObject.HeroObject`.
- Event output: [`CampaignEventDispatcher`](../CampaignEventDispatcher/) forwards `OnHeroPrisonerReleased` and `OnPrisonerReleased`; [`CampaignEvents`](../CampaignEvents/) is the mod-facing subscription hub.
- State transition collaborators: [`MakeHeroFugitiveAction`](../MakeHeroFugitiveAction/) handles the non-ransom player-companion fugitive consequence; [`KillCharacterAction`](../KillCharacterAction/) owns the preceding death transition.
- Higher-level owners: [`SetPrisonerFreeBarterable`](../SetPrisonerFreeBarterable/), [`SellPrisonersAction`](../SellPrisonersAction/), [`TransferPrisonerAction`](../TransferPrisonerAction/), and [`TakePrisonerAction`](../TakePrisonerAction/) decide barter, sale, transfer, and party-screen capture semantics.

## Save and lifecycle risks

1. The action has no pending-job or save payload. It mutates the live campaign graph immediately; do not call it during campaign construction, object restoration, `SyncData`, save callbacks, mission/map-event teardown, or while iterating the same roster that the action will remove from.
2. Resolve the hero, prison party, and roster from the current campaign after loading. Do not persist object references or assume a cached `PartyBelongedToAsPrisoner` remains valid across a save/load boundary.
3. Event listeners run as part of the dispatch chain. Subscribe through a long-lived [`CampaignBehaviorBase`](../CampaignBehaviorBase/) and persist only your own stable IDs/flags through [`IDataStore`](../IDataStore/); do not store a transient listener owner or expect the event delegate itself to be saved.
4. Re-read `IsPrisoner`, `HeroState`, `PartyBelongedToAsPrisoner`, and settlement/party membership after the call. The action removes roster membership before notifying ordinary-hero listeners, so cached roster elements and counts are stale.
5. `ApplyByDeath` assumes the caller owns the death decision. Calling it on a living hero does not set `Hero.CharacterStates.Dead`; calling a release entry twice can duplicate events or apply a second state transition to an already changed object.
6. Never simulate this action by assigning `Hero` state, `StayingInSettlement`, player captivity, or roster fields directly. Those fields and the event payload must remain coordinated by the public action and its owning workflow.

## Version note

This v1.3.15 page uses `bannerlord-1.4.5/Bannerlord.Source` `EndCaptivityAction.cs` as its semantic authority and cross-checks `SetPrisonerFreeBarterable`, `PartyScreenHelper`, `SellPrisonersAction`, and `KillCharacterAction`, plus the map-event battle-release calls. The public signatures and core branches documented here are the 1.4.5 source shape; before shipping against another game build, re-check `EndCaptivityDetail`, event argument order, Main Hero placement behavior, and the caller's preconditions.

## Navigation

- Parent: [campaign-ext index](../)
- Siblings: [TakePrisonerAction](../TakePrisonerAction/) · [SellPrisonersAction](../SellPrisonersAction/) · [TransferPrisonerAction](../TransferPrisonerAction/) · [MakeHeroFugitiveAction](../MakeHeroFugitiveAction/)
- Related: [Hero](../../campaign/Hero/) · [MobileParty](../../campaign/MobileParty/) · [FlattenedTroopRoster](../FlattenedTroopRoster/) · [CampaignEvents](../CampaignEvents/) · [SetPrisonerFreeBarterable](../SetPrisonerFreeBarterable/) · [KillCharacterAction](../KillCharacterAction/)
