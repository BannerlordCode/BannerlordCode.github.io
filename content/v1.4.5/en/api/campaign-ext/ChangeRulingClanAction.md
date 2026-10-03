---
title: "ChangeRulingClanAction"
description: "Swaps a Kingdom's ruling clan in one assignment and announces it; every kingdom tier, clan-vote, and AI decision downstream reads that property, so this is the only safe place to move it."
---

# ChangeRulingClanAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class ChangeRulingClanAction`
**Base:** none (standalone action class)
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/ChangeRulingClanAction.cs`

## Overview

A kingdom's ruling clan is the single most load-bearing political pointer in the campaign layer: it decides which clan owns the kingdom's fiefs, which lord is treated as the sovereign for relation purposes, and which clan's vote weight matters when the kingdom makes a decision. This action is the game's write path for that pointer. It is declared as a non-static class but exposes one `public static void Apply` that forwards to a private `ApplyInternal`, and `ApplyInternal` does two steps in order: capture the current `kingdom.RulingClan` into a local, assign the new one, then raise `CampaignEventDispatcher.Instance.OnRulingClanChanged(kingdom, oldRuler)`.

Note that the event carries the **previous** ruling clan, not the new one. A listener therefore has to read `kingdom.RulingClan` itself to learn who won. That is the opposite convention from [ChangeClanInfluenceAction](ChangeClanInfluenceAction), which hands the listener the delta, and it is worth internalizing before you write a listener.

## Mental Model

Treat it as an assignment with an announcement, not as a negotiation. There is no check that the new clan belongs to the kingdom, no veto, no inheritance logic, and no relation recalculation — `ApplyInternal` is four meaningful lines. Any policy you want around "who is allowed to become ruler" has to live upstream of the call.

Three consequences follow from the implementation shape. First, **it is not defensive**: passing a clan that is not a member of the kingdom, a `null`, or even the same clan that already rules will all be accepted silently. The kingdom will be left in whatever state you asked for. Second, **the event is post-write and carries the old value**, so anything that reacts to a rule change — kingdom decisions, clan tier checks, the AI's vote weighting — has to re-read `kingdom.RulingClan` instead of trusting the argument. Third, **`Apply` is static**, so the fact that the class is declared `public class` gives you nothing: you cannot hold an instance, cannot subclass it into a per-kingdom policy, and should not try to `new` it.

The sequencing rule that matters most in practice: call this *before* any follow-up logic that depends on the new ruling clan, because listeners run synchronously inside `Apply` and will observe the new value. If your own event should be seen after the kingdom has settled on the new ruler, raise it after `Apply` returns, not before.

## Key Members

| Member | Signature | What it is for |
| --- | --- | --- |
| `Apply` | `public static void Apply(Kingdom kingdom, Clan clan)` | The single public entry point. Reads the kingdom's current ruling clan into a local, assigns `clan` to `kingdom.RulingClan`, and dispatches `OnRulingClanChanged(kingdom, previousRulerClan)`. Use it for every rule change — election results, succession after the ruler's death, a mod-driven usurpation — because it is the only place that both moves the pointer and tells the rest of the campaign. |

`ApplyInternal` is private and takes `(Kingdom kingdom, Clan newRulerClan)`. The class exposes no other public member, which means there is exactly one sanctioned way to change the ruler and no way to change it silently.

## Real Example

Move a kingdom to a new ruling clan and confirm the pointer actually moved:

```csharp
Kingdom kingdom = Hero.MainHero.Clan.Kingdom;
Clan newRuler = Hero.MainHero.Clan;

Clan previousRuler = kingdom.RulingClan;
ChangeRulingClanAction.Apply(kingdom, newRuler);

Debug.Print("ruler " + previousRuler.Name + " -> " + kingdom.RulingClan.Name, 0);
```

React to the change, remembering that the event hands you the **old** clan:

```csharp
CampaignEvents.RulingClanChanged.AddNonSerializedListener(
    this,
    (changedKingdom, oldRulerClan) =>
    {
        if (changedKingdom.RulingClan != oldRulerClan)
        {
            Debug.Print(changedKingdom.Name + " now ruled by " + changedKingdom.RulingClan.Name, 0);
        }
    });
```

A rule-change flow driven from your own behavior — the eligibility decision stays in your code, the pointer move goes through the action:

```csharp
Clan candidate = null;
foreach (Clan member in kingdom.Clans)
{
    if (member.Fiefs.Count > 0 && !member.IsMinorFaction)
    {
        candidate = member;
        break;
    }
}

if (candidate != null)
{
    ChangeRulingClanAction.Apply(kingdom, candidate);
    CampaignEventDispatcher.Instance.OnKingdomCreated(kingdom);
}
```

## Risks and Boundaries

- **Zero validation.** Any `Clan` is accepted, including a non-member of the kingdom or `null`. The kingdom ends up in that state and no assert fires.
- **The event argument is the previous clan.** `OnRulingClanChanged(kingdom, oldRulerClan)` — read `kingdom.RulingClan` if you need the new one. Getting this backwards silently produces "nothing changed" logic.
- **No policy layer.** No membership check, no relation requirements, no inheritance fallback. An heirless kingdom, a rebel-uprising takeover, and a scripted election all go through the identical two-line path.
- **Listeners run synchronously inside `Apply`.** Anything they read — the kingdom's fiefs, the new clan leader — already reflects the new ruling clan.
- **Not a static class, but effectively static.** You cannot instantiate it usefully and cannot inject behaviour by subclassing, since `ApplyInternal` is private and `Apply` is the only entry.
- **No save contract.** The kingdom's ruling clan is serialized by `Kingdom` itself; this action contributes nothing to `IDataStore`.

## Cross-version note

The v1.4.5 file is 16 lines: one private `ApplyInternal`, one public `Apply`. There are no extra overloads such as "apply with a reason" — if you need to distinguish why a ruler changed, carry that in your own state or your own event.

## Dependencies

- Host object: [Kingdom](../campaign/Kingdom) owns `RulingClan`; everything about fief votes and kingdom decisions reads it.
- Notification path: [CampaignEventDispatcher](../campaign/CampaignEventDispatcher) raises `OnRulingClanChanged` synchronously after the assignment.
- Event surface: [CampaignEvents](../campaign/CampaignEvents) exposes `RulingClanChanged` as `IMbEvent<Kingdom, Clan>` for non-serialized listeners.
- Related political pointer: [ChangeClanLeaderAction](ChangeClanLeaderAction) moves the leader *inside* a clan — the two write paths are adjacent but independent.
- Bucket index: [campaign-ext API section](../)
