---
title: "ChangeClanInfluence"
description: "The sanctioned two-line action for moving a Clan's influence: it writes clan.Influence and then raises OnClanInfluenceChanged, which is what every model and listener actually reacts to."
---

# ChangeClanInfluenceAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class ChangeClanInfluenceAction`
**Base:** none (static class)
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/ChangeClanInfluenceAction.cs`

## Overview

A clan's influence is the political currency the whole settlement/kingdom layer is priced in: it decides whether the player can talk their way into a fief, whether a lord joins the kingdom, and what the AI's own decisions cost. This action is the single write path the game uses for it. It does exactly two things in a fixed order — add the delta to `Clan.Influence`, then raise `CampaignEventDispatcher.Instance.OnClanInfluenceChanged(clan, amount)` — and nothing else. That tiny surface is the point: the value write and the notification are inseparable, so a mod that assigns `clan.Influence = 120f` directly gets the number right but silently desynchronizes every listener, every model, and the UI that binds to influence.

## Mental Model

Think of it as `ApplyInternal(clan, amount)` with the event hoisted out to the single public entry point `Apply`. There is no second overload, no "set" variant, and no clamping. Reading the four lines in order:

```
clan.Influence += amount;
CampaignEventDispatcher.Instance.OnClanInfluenceChanged(clan, amount);
```

Two consequences follow, and both bite. First, **listeners observe the post-write value**, not the delta they were handed — `clan.Influence` is already updated by the time `OnClanInfluenceChanged` fires, so a listener that wants the old number has to cache it beforehand. Second, **there is no validation at all**: `amount` may be negative, may exceed the game's own idea of a cap, and may be `0f`. `Apply(clan, 0f)` still raises the event. If you need "grant up to the cap", that clamp logic belongs in your model or behavior, not here — the action will faithfully write whatever you hand it.

The other trap is ordering against sibling actions. Influence is frequently spent as part of a larger operation (a fief vote, a gift, a persuasion check). Those flows generally raise their own campaign event, and any listener of *that* event which then reads influence will see whatever this action last wrote. Call `Apply` before you raise your own event if the listener chain is supposed to see the new influence.

Because the class is `static` with a private `ApplyInternal`, there is exactly one entry point and no state to carry between calls. Nothing here is serialized: `Clan.Influence` is saved by `Clan`'s own `SyncData`, and the action object itself never enters a savegame.

## Key Members

| Member | Signature | What it is for |
| --- | --- | --- |
| `Apply` | `public static void Apply(Clan clan, float amount)` | The only public entry point. Adds `amount` to the clan's current influence and then fires `OnClanInfluenceChanged` with that same signed delta so downstream systems can distinguish a gain from a loss. Use this whenever a mod wants to influence a clan's political standing; writing the property directly is what causes the "value changed but nothing reacted" bug. |

There is deliberately nothing else public. `ApplyInternal` is private, so there is no path that mutates influence without raising the event, and no path that raises the event without mutating.

## Real Example

Reward or penalize a clan after a quest outcome, and let listeners see the post-write value:

```csharp
Clan rewardClan = Hero.MainHero.Clan;
int previousInfluence = rewardClan.Influence;

ChangeClanInfluenceAction.Apply(rewardClan, 30f);

Debug.Print("influence " + previousInfluence + " -> " + rewardClan.Influence, 0);
Debug.Print("tier = " + rewardClan.Tier, 0);
```

Spend influence as part of a larger custom interaction, applying the delta before raising your own event so that listeners of *your* event already see the new number:

```csharp
Clan targetClan = settlement.OwnerClan;
if (targetClan.Influence >= 40)
{
    ChangeClanInfluenceAction.Apply(targetClan, -40);
    CampaignEventDispatcher.Instance.OnSettlementLeft(MobileParty.MainParty, settlement);
}
```

Read the value back inside a listener registered on the same event — it is already the post-write number:

```csharp
CampaignEvents.OnClanInfluenceChangedEvent.AddNonSerializedListener(
    this,
    (clan, amount) =>
    {
        if (clan == Hero.MainHero.Clan && amount > 0f)
        {
            Debug.Print("gained " + amount + ", now " + clan.Influence, 0);
        }
    });
```

## Risks and Boundaries

- **No clamping, no validation.** `Apply` will happily take a negative delta past zero or a positive one past whatever the tier system considers the maximum. Clamping is the caller's job.
- **Events fire on a zero delta.** `Apply(clan, 0f)` still raises `OnClanInfluenceChanged`. Guard with an `amount != 0f` check in the calling code if that matters.
- **Listeners see the new value.** The event is raised after the write; there is no "before" callback and no undo.
- **No save contract of its own.** `ApplyInternal` never touches an `IDataStore`. Influence persists only because `Clan` serializes the property — do not expect the action to be replayable from a save.
- **Static, therefore stateless.** Safe to call from any thread-safe campaign context, but there is no per-clan instance to hold pending changes; every call takes effect immediately.
- **Direct property assignment bypasses everything.** `clan.Influence = x` produces a correct number with zero notifications, and the game will not detect the inconsistency.

## Cross-version note

The v1.4.5 file is 15 lines and its entire public surface is the single `Apply` overload. The shape of the action — write, then dispatch — is what the rest of `TaleWorlds.CampaignSystem.Actions` is built on, and later versions keep the same one-method-per-mutation layout. No additional overloads exist in 1.4.5.

## Dependencies

- Host value: [Clan](../../campaign/Clan) holds `Influence` and the tier derived from it; this action is the only sanctioned writer.
- Notification path: [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) raises `OnClanInfluenceChanged`, which is what models and UI actually listen to.
- Event surface: [CampaignEvents](../../campaign/CampaignEvents) exposes `OnClanInfluenceChangedEvent` for `AddNonSerializedListener` registrations.
- Common callers: [ChangeClanLeaderAction](../ChangeClanLeaderAction) lives in the same Actions folder and shows the same write-then-notify discipline.
- Bucket index: [campaign-ext API section](../)
