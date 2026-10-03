---
title: "ChangeClanLeaderAction"
description: "Hands a clan over to a new leader: transfers the treasury, ungoverns the heir, fixes party leadership, rebases every personal relation, and only then calls clan.SetLeader — the gift-economy transfer is a real side effect, not a formality."
---

# ChangeClanLeaderAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class ChangeClanLeaderAction`
**Base:** none (static class)
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/ChangeClanLeaderAction.cs`

## Overview

When a clan's leadership moves — an election won, the old leader executed, a campaign script handing a clan to a puppet — several independent pieces of campaign state have to move together, and each one left behind produces a different class of bug: a new leader sitting on the old treasury, a leader who is still governor of a town he no longer owns, a party commanded by someone who is not the clan leader, and a web of personal relations that still points at the dead predecessor. This action is the game's bundled fix for all four. `ApplyInternal` is a single ordered block that transfers gold, strips governorship, repairs party leadership, rewrites personal relations against the diplomacy model's "leader is dead" delta, and finally calls `clan.SetLeader(newLeader)` before announcing `OnClanLeaderChanged(oldLeader, newLeader)`.

The order is the design. `SetLeader` happens *last*, after every dependent fixup has already read the old leader's state, so the final `SetLeader` call sees a world where nothing else still references the predecessor as leader.

## Mental Model

Read it as five ordered stages, and resist the temptation to inline any of them.

1. **Pick the successor if none was supplied.** With `newLeader == null`, the action reads `clan.GetHeirApparents()`, takes the highest-point heir, and if several tie it picks one at random. **If the heir list is empty it returns immediately** — no gold moved, no event raised, and `clan.Leader` unchanged. A caller that assumes "the call always did something" will be wrong on exactly the clans most likely to be extinct or leaderless.
2. **Move the whole treasury.** `GiveGoldAction.ApplyBetweenCharacters(leader, newLeader, leader.Gold, disableNotification: true)` transfers *all* of the old leader's gold, with notifications suppressed. This is the single most surprising part: leadership transfer is also a wealth transfer. If you were planning a script where the old leader keeps a fortune, this action will take it.
3. **Release the governorship.** If the new leader governs something, `ChangeGovernorAction.RemoveGovernorOf(newLeader)` strips it. The new leader cannot be both governing a town and heading a clan.
4. **Repair party leadership, but only for a free hero.** Guarded on `!newLeader.IsPrisoner && !newLeader.IsFugitive && !newLeader.IsReleased && !newLeader.IsTraveling`. Inside that guard: if the hero has no party, `MobilePartyHelper.CreateNewClanMobileParty` makes one; if the party's leader is somebody else, `mobileParty.ChangePartyLeader(newLeader)`. A prisoner, a fugitive, or a released hero legitimately keeps whatever party arrangement they had.
5. **Rebase relations, then set the leader, then announce.** For every living hero other than the new leader, it adds `Campaign.Current.Models.DiplomacyModel.GetRelationChangeAfterClanLeaderIsDead(oldLeader, other)` to the relation between the new leader and that hero, using `CharacterRelationManager.GetHeroRelation` to read and `SetPersonalRelation` to write. Only after that loop does `clan.SetLeader(newLeader)` run, followed by `CampaignEventDispatcher.Instance.OnClanLeaderChanged(leader, newLeader)`.

Two more things to internalize. `ApplyWithSelectedNewLeader` and `ApplyWithoutSelectedNewLeader` are both one-line forwards to `ApplyInternal` — they exist so call sites read as intent, not as an optional argument. And the relation rebasing reads `leader` (the *old* leader) into a local at the top of the method; because `SetLeader` runs last, that local is still the outgoing leader throughout the loop, which is exactly what the diplomacy model's "leader is dead" penalty expects.

## Key Members

| Member | Signature | What it is for |
| --- | --- | --- |
| `ApplyWithSelectedNewLeader` | `public static void ApplyWithSelectedNewLeader(Clan clan, Hero newLeader)` | Transfers the clan to a leader you have already chosen — an election result, a scripted succession, a mod decision. Runs the whole cascade with that hero pinned as the successor, so no heir scoring and no random tie-break happen. This is the overload you normally want, because heir selection is only correct when it is the game's own succession rule rather than yours. |
| `ApplyWithoutSelectedNewLeader` | `public static void ApplyWithoutSelectedNewLeader(Clan clan)` | Lets the game choose: queries `clan.GetHeirApparents()`, takes the highest point total, breaks ties randomly. Use it when you want a death or disappearance to fall through to normal inheritance. **It is a no-op when there are no heir apparents** — no leader change, no gold transfer, no `OnClanLeaderChanged` — so never assume it changed anything. |

`ApplyInternal(clan, newLeader = null)` is private and is the entire implementation described above.

## Real Example

Hand a clan to a specific hero after a scripted election, then read back what actually changed:

```csharp
Clan targetClan = settlement.OwnerClan;
Hero victor = Hero.AllAliveHeroes.FirstOrDefault((Hero h) => h.Clan == targetClan && h != targetClan.Leader);

if (victor != null)
{
    int goldBefore = targetClan.Leader.Gold;
    ChangeClanLeaderAction.ApplyWithSelectedNewLeader(targetClan, victor);
    Debug.Print("leader gold " + goldBefore + " -> " + targetClan.Leader.Gold, 0);
    Debug.Print("new leader " + targetClan.Leader.Name, 0);
}
```

Fall back to normal inheritance when the old leader simply disappears — and always re-read `clan.Leader`, because the heirless case silently does nothing:

```csharp
Hero oldLeader = settlement.OwnerClan.Leader;
ChangeClanLeaderAction.ApplyWithoutSelectedNewLeader(settlement.OwnerClan);

if (settlement.OwnerClan.Leader == oldLeader)
{
    Debug.Print("no heir apparents, leadership unchanged", 0);
}
else
{
    Debug.Print("inherited by " + settlement.OwnerClan.Leader.Name, 0);
}
```

React to the change; the event carries both the outgoing and the incoming leader:

```csharp
CampaignEvents.OnClanLeaderChangedEvent.AddNonSerializedListener(
    this,
    (oldLeader, newLeader) =>
    {
        if (newLeader.Clan == Hero.MainHero.Clan)
        {
            Debug.Print("we now follow " + newLeader.Name + " (was " + oldLeader.Name + ")", 0);
        }
    });
```

## Risks and Boundaries

- **The entire treasury moves with the leadership.** `ApplyBetweenCharacters` transfers `leader.Gold` in full with notifications disabled. Plan for it or wrap the call.
- **`ApplyWithoutSelectedNewLeader` can be a complete no-op.** No heir apparents means an early `return` before any mutation and before the event. Always verify the leader actually moved.
- **Heir ties are broken randomly.** Equal point totals are resolved by `GetRandomElementInefficiently`, so the same clan can pick a different heir on each call. Do not build determinism on it.
- **The relation rebasing is not symmetric and is not undoable.** It adds the diplomacy model's death-of-leader delta to every other living hero's relation with the new leader, then commits. There is no inverse operation.
- **Governorship is silently removed from the new leader.** If your script assumed the hero keeps a governorship across a clan leadership transfer, it will not.
- **Party repair is skipped for prisoners, fugitives, released heroes, and travelling heroes.** Those heroes keep their existing party/leader arrangement, which may or may not be what you want.
- **Settlement ownership is untouched.** This action moves the *clan leader*, not the clan's towns. Use [ChangeOwnerOfSettlementAction](ChangeOwnerOfSettlementDetail) for that.
- **No `IDataStore` participation.** Leadership and gold are saved by `Clan`/`Hero`; the action itself is not serializable and is never replayed from a save.

## Cross-version note

The v1.4.5 file is 63 lines with exactly two public methods. There is no overload that takes a reason string or a notification flag — the notification suppression is hard-coded on the internal gold transfer, and both public entry points behave identically apart from whether `newLeader` is supplied.

## Dependencies

- Host objects: [Clan](../campaign/Clan) owns the leader pointer and heir list; [Hero](../campaign/Hero) supplies the leader, the governorship, the party, and the relations being rebased.
- Collaborating actions: [GiveGoldAction](GiveGoldAction) moves the treasury; [ChangeGovernorAction](ChangeGovernorAction) strips the governorship; [DestroyPartyAction](DestroyPartyAction) is the counter-example of what this action deliberately does not do.
- Supporting types: [MobilePartyHelper](../system/MobilePartyHelper) creates the replacement clan party; [CharacterRelationManager](../campaign/CharacterRelationManager) reads the old relation value.
- Policy hook: [DiplomacyModel](../campaign/DiplomacyModel) supplies `GetRelationChangeAfterClanLeaderIsDead`, which is the only moddable part of the relation rebasing.
- Notification path: [CampaignEventDispatcher](../campaign/CampaignEventDispatcher) raises `OnClanLeaderChanged` last.
- Bucket index: [campaign-ext API section](../)
