---
title: "ChangeClanLeaderAction"
description: "The campaign transaction for installing a clan leader while preserving inheritance, party, governor, relation, gold, and event invariants."
---
# ChangeClanLeaderAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class ChangeClanLeaderAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/ChangeClanLeaderAction.cs`

## Responsibility

Replace a [Clan](../../campaign/Clan)'s leader through the same inheritance transaction used by death, player heir selection, and kingdom succession, rather than merely changing the leader field.

## Mental model

Leader replacement crosses several ownership boundaries. The action moves all gold from the old leader to the incoming leader, removes the incoming leader from a governorship, ensures an eligible incoming leader has a clan party and leads it, applies the diplomacy model's relation change against every other living hero, sets the clan leader, and finally publishes `OnClanLeaderChanged`.

`ApplyWithSelectedNewLeader` is for a workflow that has already chosen an eligible successor. Vanilla uses it for the player-heir action and for a king-selection outcome. `ApplyWithoutSelectedNewLeader` asks `Clan.GetHeirApparents()` for scores, selects randomly among the highest score, and returns without changing anything when there are no candidates. Vanilla uses that branch after a leader dies or is found outside their clan. It is not a general-purpose "pick the next leader" helper when your feature needs custom eligibility, UI choice, or a non-vanilla succession rule.

## Dependencies and execution order

| Role | Connection | Side effect |
|---|---|---|
| Old and new owner | [Clan](../../campaign/Clan) and [Hero](../../campaign/Hero) | `Clan.SetLeader` happens near the end, after preparatory state changes. |
| Wealth transfer | [GiveGoldAction](.././GiveGoldAction) | The old leader's current gold is transferred with notifications disabled. |
| Governor cleanup | [ChangeGovernorAction](.././ChangeGovernorAction) | A chosen leader who is currently a governor is removed before they receive the clan role. |
| Party continuity | [MobileParty](../../campaign/MobileParty) | An available leader receives a party if needed, or becomes that party's leader. |
| Event consumers | [CampaignEventReceiver](.././CampaignEventReceiver) | `OnClanLeaderChanged(oldLeader, newLeader)` fires only after `SetLeader`. |

The relation loop runs before `SetLeader`; the notification runs after it. Event receivers can rely on `clan.Leader` being the new hero, but they should not assume an absent party was impossible: prisoners, fugitives, released heroes, and traveling heroes intentionally skip party creation.

## Member timing

Call `ApplyWithSelectedNewLeader` only after the source workflow has resolved the replacement and the clan still has the expected old leader. Call `ApplyWithoutSelectedNewLeader` in the death/removal lifecycle when vanilla's heir scoring is the intended policy. Both methods expect non-null, coherent campaign objects; neither is a repair tool for a partly destroyed clan.

## Risk boundary

Do not assign `clan.Leader` or call `Clan.SetLeader` directly for a live campaign transition. That skips gold transfer, governor removal, party leadership repair, relation changes, and the event that behaviors use to react. Do not manually clear only `Hero.GovernorOf` before promotion either: it can leave the town pointing at a stale governor; use [ChangeGovernorAction](.././ChangeGovernorAction).

The action reads `Campaign.Current.Models.DiplomacyModel` and iterates `Hero.AllAliveHeroes`, so it belongs after campaign initialization and before teardown. Calling it after the old leader has been partially invalidated, or reapplying it after an event callback already succeeded, can produce duplicated relation changes and a leader/party mismatch that persists into saves.

## Real acquisition-path example

Vanilla's player succession action passes the selected heir and the real player clan to the explicit variant. A mod that owns the same completed selection can use the same acquisition path.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

Hero selectedHeir = Hero.MainHero;
if (Campaign.Current != null && Clan.PlayerClan.Leader != selectedHeir)
{
    ChangeClanLeaderAction.ApplyWithSelectedNewLeader(
        Clan.PlayerClan,
        selectedHeir);
}
```

## Navigation

- ↑ [Campaign extension API](../)
- ↔ [ChangeClanInfluenceAction](.././ChangeClanInfluenceAction) · [ChangeGovernorAction](.././ChangeGovernorAction)
- Related: [Clan](../../campaign/Clan) · [Hero](../../campaign/Hero) · [GiveGoldAction](.././GiveGoldAction) · [KillCharacterAction](.././KillCharacterAction)
