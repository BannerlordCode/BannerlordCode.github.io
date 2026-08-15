---
title: "AdoptHeroAction"
description: "Applies the narrow player-adoption state mutation for a hero, with explicit limits because the action has no campaign event or built-in workflow caller."
---
# AdoptHeroAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class AdoptHeroAction`  
**Base:** `System.Object`  
**Source:** `TaleWorlds.CampaignSystem/Actions/AdoptHeroAction.cs`

## Overview

`AdoptHeroAction.Apply(Hero)` performs a very narrow adoption mutation: it assigns the main hero as the adopted hero's mother or father according to the main hero's sex, then sets the adopted hero's clan to `Clan.PlayerClan`. It does not implement a general family, companion, party, or event workflow.

## Mental Model

This Action is unusual among campaign Actions because the 1.4.5 source has no public `CampaignEvents` notification and no built-in call site beyond the Action declaration. The method directly writes the parent field and clan field, so there is no downstream listener that can repair related state for a mod.

Treat it as a low-level compatibility hook for a controlled adoption feature, not as proof that the hero is fully integrated into the player's clan. A caller must own validation, availability, family rules, party placement, role changes, UI refresh, and any mod-owned event or save migration around the call.

## When to Use

Use it only when a campaign is active, `Hero.MainHero` is valid, and the mod has already selected an eligible target hero and defined the surrounding adoption rules. The example below uses the real conversation-hero slot as a source for a deliberately narrow feature.

Do not use it to recruit a companion, transfer a hero between clans, or replace a succession or marriage system. Do not call it from `SyncData`, a load callback, or a listener expecting an adoption event; no such event is emitted.

## Entry Point and Timing

| Entry point | Behavior |
| --- | --- |
| `Apply(Hero adoptedHero)` | If `Hero.MainHero.IsFemale` is true, assigns `Hero.MainHero` to `adoptedHero.Mother`; otherwise assigns it to `adoptedHero.Father`; then sets `adoptedHero.Clan = Clan.PlayerClan`. |

The private `ApplyInternal` method performs no validation, no null guard, no party migration, and no event dispatch. The caller must complete all checks before invoking `Apply`.

## Dependencies

- **Parent:** [`Hero.MainHero`](../../campaign/Hero) supplies the parent and must belong to the active campaign.
- **Target:** [`Hero`](../../campaign/Hero) is mutated directly; the target is not added to a party or companion roster by this Action.
- **Clan state:** [`Clan.PlayerClan`](../../campaign/Clan) becomes the target's clan.
- **Absent event:** Unlike most state-changing campaign Actions, this method does not call [`CampaignEvents`](../CampaignEvents) or `CampaignEventDispatcher`.
- **Save boundary:** Parent and clan fields are campaign state, while any adoption UI/cache owned by a mod must be persisted and rebuilt separately.

## Risks and Lifetime

- Passing a null target would fail before any useful adoption state exists; the Action does not validate it.
- The parent assignment chooses only one parent based on the main hero's sex and does not normalize the other parent, spouse, children, age, culture, occupation, or clan relationships.
- Setting `Clan.PlayerClan` directly through this Action can conflict with companion, lord, party, workshop, kingdom, or quest state. Do not assume clan membership makes the hero a valid companion or vassal.
- Because no event is emitted, other behaviors and UI can retain stale caches. Dispatch a mod-owned event only after the state has been validated and write that event's contract explicitly.
- Calling this during save loading or another lifecycle-sensitive callback can create a persisted relation that the native campaign systems never expected.

## Real Usage Example

This example obtains a target from the real conversation-hero slot and performs the narrow mutation only after checking the active parent and target are different. The absence of an event is intentional:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public static class ControlledAdoption
{
    public static void TryAdoptConversationHero()
    {
        Hero parent = Hero.MainHero;
        Hero adoptedHero = Hero.OneToOneConversationHero;
        if (parent != null && adoptedHero != null && adoptedHero != parent)
        {
            AdoptHeroAction.Apply(adoptedHero);
            RefreshAdoptionUi(adoptedHero);
        }
    }
}
```

`Hero.OneToOneConversationHero` is only an acquisition path for this example; a production feature still needs its own eligibility checks and save/version policy. There is no `CampaignEvents` subscription that can substitute for `RefreshAdoptionUi`.

## Version Note

The 1.3.15 and 1.4.5 declarations expose the same single `Apply(Hero)` entry point and the same direct parent/clan writes. The absence of a built-in event or 1.4.5 caller is part of the documented contract, not an omitted example.

## Navigation

- **Parent:** [campaign-ext API](../)
- **Sibling:** [AddCompanionAction](../AddCompanionAction) · [ChangeOwnerOfWorkshopAction](../ChangeOwnerOfWorkshopAction)
- **Related:** [Hero](../../campaign/Hero) · [Clan](../../campaign/Clan) · [CampaignEvents](../CampaignEvents)
