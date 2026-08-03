---
title: "KillCharacterActionDetail"
description: "Explains the reason passed through hero death and removal, including DeathMark deferral, inheritance and party cleanup, campaign events, and save boundaries."
---
# KillCharacterActionDetail

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public enum KillCharacterActionDetail` nested in `KillCharacterAction`  
**Base:** `System.Enum`  
**Source:** `TaleWorlds.CampaignSystem/Actions/KillCharacterAction.cs`

## Overview

**One-line responsibility:** Identify why a hero is being killed, wounded, executed, or removed so the death transaction, delayed `DeathMark`, obituary, tasks, and downstream behaviors can apply the correct semantics.

This enum is both a reason argument for `KillCharacterAction.ApplyBy*` and, when a death is deferred, the value stored in `Hero.DeathMark`. It does not kill a hero by itself. The action may return after recording a mark, or may continue through inheritance, party and prisoner cleanup, death state changes, and `HeroKilled` notification depending on the map-event and protection conditions.

## Mental Model

The enum crosses two related lifetimes. During an action call it labels an irreversible campaign decision. During a battle, siege, or post-map-event execution it can become a saveable pending-death marker on the hero. `ApplyByDeathMark` later reads `victim.DeathMarkKillerHero` and `victim.DeathMark` and re-enters the same internal transaction; it does not choose a new reason.

`KillCharacterAction.ApplyInternal` first checks `victim.CanDie(actionDetail)` unless the call is forced. It rejects an already dead hero, warns when a quest notable is targeted, and, while a hero is still attached to a map or siege event, may only call `AddDeathMark` and return. For a completed death it raises `OnBeforeHeroKilled`, writes the obituary and death mark, handles clan and kingdom succession, disbands or changes party leadership, removes the hero from captivity, sets the dead state and death day, removes governors, destroys empty clans when required, and raises `OnHeroKilled`. Spouse, companion, settlement-location, and `Hero.OnDeath` cleanup continues after that event.

Therefore, calling a death wrapper does not guarantee that `victim.IsAlive` is false on the next line. Check `IsAlive` and `DeathMark`, and respect the map-event lifecycle. Never replace the action with a raw hero state write or a roster removal: those shortcuts skip the ordered political, party, captivity, task, and event cascade.

## Death Transaction and Deferred Mark Flow

```text
ApplyBy*(victim, killer, reason)
  -> CanDie(reason), already-dead, and quest-notable checks
  -> map event/siege or post-map-event execution with no DeathMark
       -> Hero.AddDeathMark(killer, reason) -> return
  -> non-forced main character
       -> OnBeforeMainCharacterDied -> return to succession flow
  -> OnBeforeHeroKilled
  -> save DeathMark and obituary
  -> clan/kingdom succession, gold, army and party cleanup
  -> Hero = Dead, death day, captivity and governor cleanup
  -> OnHeroKilled
  -> spouse, companion, settlement location, and Hero.OnDeath cleanup
```

`OnHeroKilled` means the hero has reached the dead state and the main political/party cleanup has run, but it does not mean every tail reference has already been removed. Event listeners should avoid retaining or mutating stale party, governor, spouse, or settlement-location references.

## Enum Values, Wrappers, and Typical Timing

| Value | Common public entry | Meaning and typical timing |
|---|---|---|
| `None` | No direct death entry | Empty `Hero.DeathMark` sentinel. It means no pending death reason; never pass it as a meaningful pending death to `ApplyByDeathMark`. |
| `Murdered` | `ApplyByMurder(victim, killer)` | Murder or assassination semantics. Crime and hostile-character flows use this reason for obituary and downstream distinction. |
| `DiedInLabor` | `ApplyInLabor(lostMother)` | Death during childbirth. `PregnancyCampaignBehavior` calls it after the labor outcome is determined. |
| `DiedOfOldAge` | `ApplyByOldAge(victim)` or `ApplyByPlayerIllness()` | Natural old age and the forced player-illness path share this reason in the source. Aging checks and the player illness flow use it. |
| `DiedInBattle` | `ApplyByBattle(victim, killer)` | Death caused by a map battle. `MapEventSide` selects it for battle casualties; while the event is active it commonly becomes a deferred `DeathMark` first. |
| `WoundedInBattle` | `ApplyByWounds(victim)` | Applies the battle-wounds death/removal path used by the campaign's wounded/death processing. The enum name alone does not prove that the hero is already dead; inspect `IsAlive` and `DeathMark`. |
| `Executed` | `ApplyByExecution(victim, executer, showNotification, isForced)` | Ordinary execution. A forced call bypasses `CanDie`; prisoner, rebellion, party-screen, and player-execution flows use this wrapper with their own lifecycle decisions. |
| `ExecutionAfterMapEvent` | `ApplyByExecutionAfterMapEvent(victim, executer, showNotification, isForced)` | Execution staged after a map event. The first call can record a mark; `HeroExecutionSceneNotificationData` later uses the forced path to finish the execution after the scene boundary. |
| `Lost` | `ApplyByRemove(victim, showNotification, isForced)` | Removes a hero from the campaign as lost or disappeared rather than presenting an ordinary death cause. Notables and rebellion cleanup use it; the public wrapper defaults to forced execution of this path. |

`ApplyByDeathMark(victim)` and `ApplyByDeathMarkForced(victim)` reuse the stored reason and killer. The forced variant bypasses `CanDie` and should only be used by the upstream flow that already made the irreversible decision.

## Dependencies and Downstream Effects

| Direction | Type or subsystem | Contract |
|---|---|---|
| Upstream object | [`Hero`](../../campaign/Hero) | Provides `CanDie`, `IsAlive`, `DeathMark`, `DeathMarkKillerHero`, clan, party, prisoner, governor, and settlement references. |
| Owning action | [`KillCharacterAction`](../KillCharacterAction) | Selects the reason-specific wrapper and owns the ordered death transaction. |
| Political cascade | [`ChangeClanLeaderAction`](../ChangeClanLeaderAction), [`ChangeRulingClanAction`](../ChangeRulingClanAction), and [`DestroyClanAction`](../DestroyClanAction) | Replace leaders, select rulers, or clean up an eliminated clan. |
| Party/captivity cascade | [`DisbandArmyAction`](../DisbandArmyAction), [`DisbandPartyAction`](../DisbandPartyAction), [`DestroyPartyAction`](../DestroyPartyAction), and [`EndCaptivityAction`](../EndCaptivityAction) | Reconcile armies, mobile parties, rosters, and prisoner state around the death. |
| Events | [`CampaignEvents`](../CampaignEvents) | Sends before/after death events with this detail; quest, relation, governor, workshop, and UI behaviors consume the reason. |
| Logs | [`CharacterKilledLogEntry`](../CharacterKilledLogEntry) | Converts the reason into obituary and notification text. |
| Save boundary | [`SaveableTypeDefiner`](../../save-system/SaveableTypeDefiner/) | In 1.4.5 the enum is registered by `SaveableCampaignTypeDefiner` with ID `2058`; `Hero.DeathMark` and its killer are saveable pending-death state. |

## Risks, Save State, and Lifetime

- Do not call `Hero.ChangeState(Dead)`, change `DeathMark`, or remove a hero from a roster as a substitute for the action. That bypasses succession, army/party leadership, captivity, governor, spouse, companion, quest, and event cleanup and can leave a save with references to a dead hero.
- `isForced: true` bypasses `Hero.CanDie`. Use it only when the upstream story or execution scene has already handled player protection, succession, and timing. `ApplyByRemove` defaults to the forced path and is especially easy to misuse.
- A notable with an active issue quest triggers a failed assertion in the source. Let the owning issue or quest finish/cancel itself before removing the hero.
- During a `MapEvent` or `SiegeEvent`, the action may only persist `DeathMark` and return. Do not immediately destroy the party, assume the hero is dead, or overwrite the mark with another reason on the next tick.
- `DeathMark` crosses a save boundary. After loading, aging or map-event cleanup can call `ApplyByDeathMark`; an incomplete or incorrect mark turns a temporary battle result into a later real death.
- Death events synchronously modify many collections. Snapshot `Clan.Heroes`, rosters, settlement notable lists, and task collections before a batch, then discard cached leader, governor, party, and location references after the action.

## Real Usage Example

This example obtains a real notable from the current settlement and uses the public non-forced murder wrapper only when the hero is alive, has no active issue quest, is outside a map or siege event, and the source `CanDie` check accepts the reason:

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Settlements;

Hero victim = Settlement.CurrentSettlement?.Notables
    .FirstOrDefault(hero =>
        hero.IsAlive &&
        hero.Issue?.IssueQuest == null &&
        hero.PartyBelongedTo?.MapEvent == null &&
        hero.PartyBelongedTo?.SiegeEvent == null &&
        hero.CanDie(KillCharacterAction.KillCharacterActionDetail.Murdered));

if (victim != null)
{
    KillCharacterAction.ApplyByMurder(victim, Hero.MainHero, showNotification: true);
}
```

Check `victim.IsAlive` and `victim.DeathMark` after the call. A future caller can still encounter a protection or lifecycle condition, and the general rule is that death completion is observed through the hero state and events, not assumed from the wrapper call.

## Version Note

The v1.3.15 and v1.4.5 routes expose the same nine values, named wrappers, `DeathMark` deferral, and major event ordering. In 1.4.5, the main-character illness path in `AgingCampaignBehavior` actually calls `ApplyByOldAge`; do not treat `ApplyByPlayerIllness` as a general illness entry point. The source confirms enum registration ID `2058` and the current delayed-death behavior. Do not serialize a bare enum integer in mod data: a later version can add or reorder values while preserving the named contract.

## Navigation

- ↑ Parent: [Campaign-Ext API](../)
- ↔ Siblings: [KillCharacterAction](../KillCharacterAction) · [EndCaptivityAction](../EndCaptivityAction) · [DestroyClanAction](../DestroyClanAction)
- ↓ Children: no separate child page; the enum is owned by [KillCharacterAction](../KillCharacterAction)
- Related: [Hero](../../campaign/Hero) · [CampaignEvents](../CampaignEvents) · [CharacterKilledLogEntry](../CharacterKilledLogEntry) · [SaveableTypeDefiner](../../save-system/SaveableTypeDefiner/)
