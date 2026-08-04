---
title: "RemoveCompanionAction"
description: "Removes a companion through the correct dismissal, death, quest, or promotion workflow while updating party, captivity, governor, and event state."
---
# RemoveCompanionAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class RemoveCompanionAction`  
**Base:** `System.Object`  
**Source:** `TaleWorlds.CampaignSystem/Actions/RemoveCompanionAction.cs`

## Overview

`RemoveCompanionAction` ends a hero's companion relationship and applies the side effects required by the reason for removal. It is the campaign boundary for dismissal, death cleanup, post-quest cleanup, and promotion to lord.

## Mental Model

Each public wrapper selects a [`RemoveCompanionDetail`](../RemoveCompanionDetail) value and enters the same internal transaction. The implementation clears `CompanionOf`, removes the hero from a mobile-party roster when that branch applies, and may put the party on hold, destroy an empty party, or start disbanding a non-empty party whose leader was removed.

The `Fire` branch additionally releases a captive or makes a free hero fugitive, resets a wanderer's equipment, and then all branches remove governor duty when present. Only after these mutations does the action dispatch `CampaignEvents.CompanionRemoved`. The `Clan` parameter is part of the public contract, but the 1.4.5 implementation derives party state from the hero and does not read that parameter internally.

## When to Use

Use the wrapper matching the workflow that already decided why the relationship ends:

- `ApplyByFire` for player dismissal;
- `ApplyByDeath` after the death workflow has established the hero's death;
- `ApplyAfterQuest` for quest-owned cleanup;
- `ApplyByByTurningToLord` before the promotion-to-lord flow transfers the hero.

Do not call a wrapper merely to remove a hero from a roster. It can alter captivity, fugitive state, equipment, governor duty, and party lifetime, and the surrounding workflow remains responsible for its other state changes.

## Entry Points and Timing

| Entry point | Detail and timing |
| --- | --- |
| `ApplyByFire(Clan, Hero)` | Uses `Fire`; runs dismissal-specific captivity, fugitive, and wanderer-equipment handling before `CompanionRemoved`. |
| `ApplyByDeath(Clan, Hero)` | Uses `Death`; removes the relationship after the death workflow, but does not kill an otherwise living hero. |
| `ApplyAfterQuest(Clan, Hero)` | Uses `AfterQuest`; performs companion cleanup while the owning quest completes its own finalization. |
| `ApplyByByTurningToLord(Clan, Hero)` | Uses `ByTurningToLord`; detaches the companion before the surrounding promotion and party-transfer flow. |

The internal method is not mod-visible. The event receives the post-mutation `Hero` and reason synchronously.

## Dependencies and Event Consumers

- **Inputs:** [`Clan`](../../campaign/Clan) and [`Hero`](../../campaign/Hero); party state comes from `companion.PartyBelongedTo`.
- **Related actions:** [`DestroyPartyAction`](../DestroyPartyAction), [`DisbandPartyAction`](../DisbandPartyAction), [`EndCaptivityAction`](../EndCaptivityAction), [`MakeHeroFugitiveAction`](../MakeHeroFugitiveAction), and [`ChangeGovernorAction`](../ChangeGovernorAction) own parts of the cascade.
- **Event:** [`CampaignEvents`](../CampaignEvents) exposes `CompanionRemoved` as `IMbEvent<Hero, RemoveCompanionDetail>`.
- **Consumers:** [`CampaignBehaviorBase`](../CampaignBehaviorBase), `CompanionRolesCampaignBehavior`, party-role and player-tracking behaviors, quest cleanup, and hero spawning consume the post-action event.
- **Persistence:** Companion, party, governor, and captivity state is saved; the event itself is not replayed on load.

## Risks and Lifetime

- Calling `ApplyByDeath` or `ApplyByByTurningToLord` outside its surrounding death or promotion transaction can leave hero, clan, occupation, party, and event state inconsistent.
- If the companion is a mobile-party leader, the action can destroy or schedule disbanding of the party. Do not keep using a cached party reference after the callback.
- Re-entering `RemoveCompanionAction` from `CompanionRemoved` can subtract a roster twice or touch a party already destroyed or scheduled for disbanding.
- Directly setting `CompanionOf` or editing the roster skips the reason-specific cleanup and may leave a bad state that is serialized and fails during a later hourly tick or load.

**Save boundary:** Re-register non-serialized listeners from `CampaignBehaviorBase.RegisterEvents` and synchronize any mod-owned persistent data through `SyncData`. Do not invoke a removal Action from save synchronization.

## Real Usage Example

An observer can acquire the completed removal through the actual campaign event:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.Core;
using TaleWorlds.SaveSystem;

public sealed class CompanionRemovalObserver : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.CompanionRemoved.AddNonSerializedListener(this, OnCompanionRemoved);
    }

    private void OnCompanionRemoved(
        Hero companion,
        RemoveCompanionAction.RemoveCompanionDetail detail)
    {
        if (detail == RemoveCompanionAction.RemoveCompanionDetail.Fire)
        {
            InformationManager.DisplayMessage(
                new InformationMessage($"{companion.Name} left the clan."));
        }
    }

    public override void SyncData(IDataStore dataStore)
    {
    }
}
```

A mod that has a confirmed dismissal workflow should call `RemoveCompanionAction.ApplyByFire(Clan.PlayerClan, companion)` and let the Action publish the event; it should not publish `CompanionRemoved` directly.

## Version Note

The four public wrappers, nested detail values, party cascade, and `CompanionRemoved` signature match 1.3.15 and 1.4.5. The doubled `By` in `ApplyByByTurningToLord` is part of the real API name in both versions.

## Navigation

- **Parent:** [campaign-ext API](../)
- **Sibling:** [AddCompanionAction](../AddCompanionAction) · [RemoveCompanionDetail](../RemoveCompanionDetail)
- **Related:** [Hero](../../campaign/Hero) · [Clan](../../campaign/Clan) · [CampaignEvents](../CampaignEvents)
