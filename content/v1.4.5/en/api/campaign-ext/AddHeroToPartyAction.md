---
title: "AddHeroToPartyAction"
description: "Moves a lifecycle-ready Hero into a live MobileParty while synchronizing rosters, settlement stay, governor duty, and the join event."
---
# AddHeroToPartyAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class AddHeroToPartyAction`  
**Base:** none (static class)  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/AddHeroToPartyAction.cs`  
**Version note:** this page describes the shipped v1.4.5 implementation.

## One-line responsibility

Moves a current `Hero` from its existing party hero roster into a destination `MobileParty`, clears its settlement stay, removes governor duty, and publishes `OnHeroJoinedParty` after the transfer.

## Mental model

This Action is the **end of a party-ownership transfer**, not a general recruitment, captivity release, resurrection, or party-creation API. The caller must obtain a current [Hero](../../campaign/Hero) and [MobileParty](../../campaign/MobileParty) from the active Campaign, then decide whether the hero is `Active`, no longer a prisoner, alive and enabled, no longer an incompatible party leader, and allowed to enter the destination.

v1.4.5 exposes exactly one public entry: `Apply(Hero, MobileParty, bool)`. There is no `AddHeroToPartyActionDetail` type and no public reason-specific overload. The final Boolean only controls the quick notification shown when a player companion joins `MobileParty.MainParty`; it is not a state-repair switch and does not change the roster transfer.

If the hero is a prisoner, first complete the release flow owned by [EndCaptivityAction](../EndCaptivityAction) and restore a valid `HeroState` in that flow. Only then should the hero be considered for a party transfer. A disabled or dead hero, or one still owned by another high-level flow, must not be forced into a roster through this Action.

## Dependencies and event cascade

```text
Current Campaign Hero + existing MobileParty
  -> AddHeroToPartyAction.Apply(hero, party, showNotification)
      -> remove hero from old party.MemberRoster
      -> clear Hero.StayingInSettlement
      -> ChangeGovernorAction.RemoveGovernorOf(hero), when needed
      -> add hero to destination party roster
      -> CampaignEventDispatcher.OnHeroJoinedParty
          -> CampaignEvents.OnHeroJoinedPartyEvent listeners
          -> quests, statistics, UI, and mod behaviors
```

- `Hero.PartyBelongedTo` is a readable ownership result; [TroopRoster](../../campaign/TroopRoster) and [PartyBase](../../campaign/PartyBase) own the roster callbacks that make the transfer coherent.
- The destination must be an initialized [MobileParty](../../campaign/MobileParty). This Action does not create a `MobileParty`, `PartyComponent`, or new `Hero`.
- `CampaignEventDispatcher` notifies [CampaignEvents](../../campaign/CampaignEvents) only after the hero has been added to the destination roster, so listeners can read the new ownership.
- If the hero was staying in a settlement, the Action clears `StayingInSettlement` first; it is not a replacement for the role or prisoner paths of [EnterSettlementAction](../EnterSettlementAction).

## Public entry and notification semantics

```csharp
public static void Apply(
    Hero hero,
    MobileParty party,
    bool showNotification = true)
```

The implementation has only this entry. Its fixed transfer order removes one hero entry from `hero.PartyBelongedTo`, clears the settlement stay, removes governor duty through [ChangeGovernorAction](../ChangeGovernorAction) when present, adds the hero to the destination party, and publishes `OnHeroJoinedParty`.

The notification appears only when all three conditions hold: `showNotification` is `true`, the destination is `MobileParty.MainParty`, and the hero is a player companion. Passing `false` suppresses only that UI quick information; it does not suppress the event or transfer side effects. There is no public `Detail` parameter, so callers must not invent a reason enum.

## Caller-owned preconditions

`Apply` returns `void` and performs no argument validation or failure reporting. The owner of a recruitment, rescue, teleport, or quest flow should establish all of these before calling it:

1. `Campaign.Current`, the hero, the destination party, and the event system are initialized; none is a stale object from a previous save or a teardown path.
2. `hero.IsActive` is true, while `hero.IsDead`, `hero.IsDisabled`, and `hero.IsPrisoner` have been handled by the owning flow. A prisoner must be released first; joining a normal roster is not captivity release.
3. The hero is not already in the destination. If `hero.PartyBelongedTo` is another active party, the caller explicitly owns the transfer; if the hero is that party's leader, handle the leader/AI/creation flow first.
4. The destination is a real current-Campaign party with valid ownership and a roster. Capacity, quest reservation, map-event participation, and save lifetime remain caller responsibilities.
5. Any dialog, battle, party-screen, or rescue intermediate state has completed its own transition. This Action does not close UI or end an encounter for the caller.

## State-transition order

The v1.4.5 `ApplyInternal` order determines what other systems observe:

1. If `hero.PartyBelongedTo` is not null, remove one `hero.CharacterObject` entry from the old party's `MemberRoster`.
2. Set `hero.StayingInSettlement` to `null`, so the hero is not both a settlement resident and a party member.
3. Read the side-effect-free `hero.IsNotable` getter; it only derives a result from the hero's notable traits and does not write state. If `hero.GovernorOf` is not null, clear the governor relationship through `ChangeGovernorAction.RemoveGovernorOf`.
4. Call `MobileParty.AddElementToMemberRoster(hero.CharacterObject, 1)` on the destination.
5. Call `CampaignEventDispatcher.Instance.OnHeroJoinedParty(hero, newParty)`.
6. Only when the notification conditions hold, add the companion quick information after the event.

Therefore a `CampaignEvents.OnHeroJoinedPartyEvent` listener can treat the destination roster as already containing the hero, but it cannot assume that release, resurrection, party creation, leadership, or AI repair happened automatically.

## Safe current-Campaign example

The example below shows a custom flow that has **already completed release and state checks**, then obtains real objects from the current Campaign. It does not write `PartyBelongedTo` or insert a raw roster entry; a real mod should keep its task, map-event, and ownership checks in the same owning flow.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public static void EnsureMainHeroInMainParty()
{
    if (Campaign.Current == null)
    {
        return;
    }

    Hero hero = Hero.MainHero;
    MobileParty destination = MobileParty.MainParty;
    if (hero == null || destination == null ||
        !hero.IsActive || hero.IsDead || hero.IsDisabled || hero.IsPrisoner ||
        hero.PartyBelongedTo == destination)
    {
        return;
    }

    AddHeroToPartyAction.Apply(hero, destination, showNotification: false);
}
```

Both `Hero.MainHero` and `MobileParty.MainParty` are real current-Campaign objects. StoryMode rescue flows follow the same boundary: check hero state and current party membership, end captivity or restore an active state when needed, then call `Apply`. For a hero being moved out of a prisoner roster, follow [TakePrisonerAction](../TakePrisonerAction) and `EndCaptivityAction` rather than copying this example to bypass them.

## What this Action does not solve

- It does not create or choose a `MobileParty`, create the hero's party component, or assign the hero to a clan.
- It does not decide recruitment permission or ownership rules for companions, governors, leaders, AI, or quests.
- It does not end captivity, change `HeroState.Prisoner` to `Active`, or remove a hero from a settlement dungeon's prisoner roster.
- It does not end a map event, dialog, party screen, or teleport flow; for example, [TeleportHeroAction](../TeleportHeroAction) owns its own position and party repair before delegation.

## Direct mutation and save risks

Do not assign `Hero.PartyBelongedTo`, and do not use `MemberRoster.SetElementNumber` or another bare setter to fake the transfer. `PartyBelongedTo` is not a write API for this Action; raw roster writes can skip `PartyBase`/`TroopRoster` hero callbacks, old-party cleanup, `StayingInSettlement` clearing, governor removal, and the `HeroJoinedParty` event. The resulting UI, AI, prisoner ownership, and save state can disagree after a save/load cycle.

Do not call this while the hero is dead, disabled, still captive, the old party is being destroyed, or the destination party is entering/leaving a map event. Event listeners run after the destination roster write; a listener that moves the same hero again needs an explicit re-entry guard or it can duplicate join events or reverse the completed transfer. For saves, do not retain hero or party references after they leave the Campaign; reacquire them and register behavior listeners in the new Campaign/load lifecycle.

## Navigation

- **↑ Parent:** [Campaign extension API index](../) · [Campaign system](../../campaign/)
- **↔ Siblings:** [EndCaptivityAction](../EndCaptivityAction) · [TakePrisonerAction](../TakePrisonerAction) · [TeleportHeroAction](../TeleportHeroAction) · [DisableHeroAction](../DisableHeroAction)
- **Related:** [Hero](../../campaign/Hero) · [MobileParty](../../campaign/MobileParty) · [PartyBase](../../campaign/PartyBase) · [TroopRoster](../../campaign/TroopRoster) · [CampaignEvents](../../campaign/CampaignEvents) · [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) · [ChangeGovernorAction](../ChangeGovernorAction)
