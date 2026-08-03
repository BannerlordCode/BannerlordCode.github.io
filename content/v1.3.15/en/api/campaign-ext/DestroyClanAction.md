---
title: "DestroyClanAction"
description: "Irreversibly retires a campaign clan through the engine's full party, hero, fief, war, and event cascade."
---
# DestroyClanAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class DestroyClanAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/DestroyClanAction.cs`

## One-line job

Retire a clan as a campaign faction and let the official action dismantle its parties, living members, holdings, diplomacy, and kingdom membership in the order the campaign expects.

## Mental model

This is an **elimination transaction**, not a convenient way to remove one lord. `Apply*` first marks the clan eliminated, then works from snapshots of its war parties, living heroes, and settlements because each downstream action mutates those collections. Its result is deliberately irreversible in normal play: a surviving reference to the `Clan` object is not a usable political actor.

Use it only when the entire clan has reached a terminal campaign outcome, such as the built-in faction-discontinuation behavior deciding that an independent clan is finished. Do not use it to dismiss a party, exile one hero, remove a fief, or move a clan between kingdoms. Those operations have narrower actions and preserve the remaining graph.

## Cascade and dependencies

```text
Clan
  -> DestroyPartyAction for every WarPartyComponent
  -> KillCharacterAction for living clan heroes
  -> ChangeOwnerOfSettlementAction for towns and castles
  -> remove the clan from campaign wars
  -> ChangeKingdomAction when it belongs to a Kingdom
  -> OnClanDestroyed for campaign behaviors and UI
```

| Direction | Types and effect |
|---|---|
| Upstream | [`Clan`](../../campaign/Clan) is the target; a `WarPartyComponent` supplies each map party; a battle `MapEvent` may provide the opposing `PartyBase` to `DestroyPartyAction`. |
| Downstream | [`DestroyPartyAction`](../DestroyPartyAction) removes war parties; [`KillCharacterAction`](../KillCharacterAction) removes living heroes; [`ChangeOwnerOfSettlementAction`](../ChangeOwnerOfSettlementAction) transfers each town/castle to an heir clan's adult lord. |
| Political cleanup | [`ChangeKingdomAction`](../ChangeKingdomAction) performs the clan-leaves-kingdom path, while `FactionManager` removes campaign-war entries. |
| Observers and save | `CampaignEventDispatcher.OnClanDestroyed` is the synchronization point for campaign behaviors. In 1.3.15 it follows the cleanup; the 1.4.5 implementation dispatches it before deactivation, so observers must not assume a cross-version event order. |

Rebel clans have one additional 1.3.15 branch: the campaign object manager removes the eliminated rebel after cleanup. Normal eliminated clans can still be present in campaign collections, so consumers must test `IsEliminated` instead of interpreting object presence as liveness.

## Reason-specific entry points

| Entry point | Use when | Member timing |
|---|---|---|
| `Apply` | Default terminal discontinuation. The 1.4.5 `FactionDiscontinuationCampaignBehavior` uses this after an independent clan no longer qualifies to continue. | Every living member, including the leader, is sent through the remove-character path. |
| `ApplyByFailedRebellion` | A rebel clan's rebellion has conclusively failed. It currently shares the default removal mechanics, but preserves the semantic reason at the call site. | Same as default; use the specific name so a future reason-dependent implementation or your own instrumentation remains correct. |
| `ApplyByClanLeaderDeath` | A caller has already handled the leader's death and needs to collapse the clan without removing that leader a second time. `DestroyKingdomAction.ApplyByKingdomLeaderDeath` delegates to this path. | Other living heroes are removed; the destroyed clan's leader is deliberately skipped. |

## Risk boundaries

- Do not call this while iterating `Clan.All`, `destroyedClan.Heroes`, `Settlements`, or a kingdom's live clan list. The engine snapshots its own collections; take `ToList()` in mod code before starting another destructive loop.
- Do not cache the clan's leader, parties, or fiefs as if they remain valid after the call. Party and hero removal, settlement ownership transfer, war removal, and kingdom leave all invalidate assumptions made earlier in the tick.
- Do not imitate the process by setting `IsEliminated`, `Hero.Clan`, `Settlement.OwnerClan`, or `Clan.Kingdom` separately. That loses action side effects and can leave stale save references, war stances, or behavior caches.
- A clan owning towns or castles needs a viable heir clan and adult heir lord. This is campaign-wide political surgery; do it in an established campaign lifecycle callback, not during save loading or a battle-side iteration.

## Real acquisition-path example

The engine's 1.4.5 `FactionDiscontinuationCampaignBehavior` calls the default path for an independent clan. A custom behavior can use the same real lookup path after it has established an equivalent terminal rule:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public void RemoveDefeatedRebelClan()
{
    Clan rebel = Clan.FindFirst(clan =>
        clan.IsRebelClan && !clan.IsEliminated && clan.Settlements.Count == 0);

    if (rebel != null)
    {
        DestroyClanAction.ApplyByFailedRebellion(rebel);
    }
}
```

The predicate supplies a real `Clan` from the campaign object list. It is intentionally restrictive: losing a single settlement is not, by itself, a general-purpose justification to erase a clan.

## When a narrower action is correct

| Goal | Use instead |
|---|---|
| Remove one map party | [`DestroyPartyAction`](../DestroyPartyAction) |
| Kill, retire, or change one hero | [`KillCharacterAction`](../KillCharacterAction) or the corresponding succession action |
| Transfer a particular fief | [`ChangeOwnerOfSettlementAction`](../ChangeOwnerOfSettlementAction) |
| Leave or join a kingdom while the clan survives | [`ChangeKingdomAction`](../ChangeKingdomAction) |
| Remove the whole political alliance | [`DestroyKingdomAction`](../DestroyKingdomAction) |

## Navigation

- ↑ [Campaign actions](./) · [API](../)
- ↔ [Clan](../../campaign/Clan) · [Kingdom](../../campaign/Kingdom) · [Army](../Army)
- Related: [DestroyKingdomAction](../DestroyKingdomAction) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [Crash boundaries](../../../architecture/crash-boundaries)
