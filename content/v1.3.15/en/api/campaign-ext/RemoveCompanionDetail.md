---
title: "RemoveCompanionDetail"
description: "The nested reason enum carried by RemoveCompanionAction and CompanionRemoved, distinguishing dismissal, death, quest cleanup, and promotion to lord."
---
# RemoveCompanionDetail

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public enum RemoveCompanionAction.RemoveCompanionDetail`  
**Base:** `System.Enum`  
**Source:** `TaleWorlds.CampaignSystem/Actions/RemoveCompanionAction.cs`

## Responsibility

Labels the reason for a companion-removal transaction so campaign behaviors can distinguish dismissal, death, post-quest cleanup, and promotion to lord. It is a nested enum, not an action that can remove a companion by itself.

## Mental Model

Read this enum as the reason attached to an already-running `RemoveCompanionAction` transaction, not as the companion's target state. The four public `RemoveCompanionAction` methods choose a value and enter private `ApplyInternal`; that method clears `CompanionOf`, updates a mobile-party roster when appropriate, may destroy or disband a party, handles captivity or fugitive state for `Fire`, removes governor duty, and only then dispatches `CampaignEvents.CompanionRemoved`.

Listeners receive the companion after those mutations. They should inspect the reason and reconcile their own caches, not clear `CompanionOf`, edit a roster, or call `RemoveCompanionAction` again. Callers likewise must use the matching Action entry point rather than dispatching `CompanionRemoved` as a simulation.

## Values and Action Entries

### Fire

`RemoveCompanionAction.ApplyByFire` marks player dismissal. If the companion is captive, the action calls `EndCaptivityAction.ApplyByEscape`; otherwise it calls `MakeHeroFugitiveAction.Apply`. A wanderer's equipment is reset. Mobile-party roster and party-leader handling happen before this reason-specific branch.

### Death

`RemoveCompanionAction.ApplyByDeath` marks cleanup after the hero-death workflow has established death. The entry removes the companion relationship but does not kill the hero itself. `KillCharacterAction` is the core caller after its death event and spouse cleanup.

### AfterQuest

`RemoveCompanionAction.ApplyAfterQuest` marks quest cleanup that removes a temporary companion from the player's clan and party relationships. The quest behavior remains responsible for the rest of its quest-finalization workflow.

### ByTurningToLord

`RemoveCompanionAction.ApplyByByTurningToLord` marks the promotion-to-lord workflow. The doubled `By` is part of the real public method name. This branch detaches the companion relationship but leaves party-roster handling to the surrounding clan, lord, and party-transfer flow.

The private `ApplyInternal(Clan, Hero, RemoveCompanionDetail)` is not mod-visible. In the v1.4.5 implementation it derives the party from `companion` before clearing `CompanionOf`; it does not use the `clan` parameter to find the party. Callers should still pass the real owning clan, as the official workflows do, rather than treating the current implementation detail as a stable nullability contract.

## Call Sites and Downstream Behavior

- `KillCharacterAction` calls `ApplyByDeath` after dispatching the hero-killed event and clearing the spouse relationship, when the victim still has `CompanionOf`.
- `CompanionRolesCampaignBehavior` calls `ApplyByByTurningToLord` before setting the lord occupation, creating the new clan, and transferring or creating the party. Its dismissal conversation calls `ApplyByFire` and then removes the companion hero through `KillCharacterAction.ApplyByRemove`.
- `FamilyFeudIssueBehavior` and `LordsNeedsTutorIssueBehavior` call `ApplyAfterQuest` during issue or quest finalization.
- Core and SandBox behaviors subscribe with `CampaignEvents.CompanionRemoved.AddNonSerializedListener`. `HeroSpawnCampaignBehavior`, `PartyRolesCampaignBehavior`, `PlayerTrackCompanionBehavior`, and `CompanionRolesCampaignBehavior` consume the post-action hero to update spawning, party roles, tracking, locations, and encounters.

## State Changes and Event Cascade

All four reasons first clear `companion.CompanionOf`. If the companion was in a mobile party and the reason is not `ByTurningToLord`, the action removes the hero from the member roster. If that hero was the party leader, it puts the party on hold, requests an hourly AI rethink, then destroys an empty party or starts disbanding a party that still has members.

For `Fire`, the action then escapes a captive companion or makes a free companion fugitive, and resets equipment for a wanderer. If the companion is a governor for any reason, `ChangeGovernorAction.RemoveGovernorOf` removes that assignment. Finally, `CampaignEventDispatcher.Instance.OnCompanionRemoved` synchronously sends the post-mutation hero and this enum value to `CampaignEvents.CompanionRemoved`.

## Member Side Effects and Timing

The enum values themselves have no methods or direct side effects. Their meaning is carried by the Action entry that selects them:

| Value | The entry owns | The value does not own |
| --- | --- | --- |
| `Fire` | Dismissal-specific fugitive, captivity, and wanderer-equipment handling | A general-purpose way to remove any hero from any clan |
| `Death` | Companion cleanup after death has already been established | Killing an alive hero |
| `AfterQuest` | Companion cleanup at the end of the owning quest flow | Completing the entire quest |
| `ByTurningToLord` | Detaching the relationship before promotion | Creating the lord clan or completing party transfer |

The event dispatch is synchronous. A listener must not remove the same companion again: doing so can repeat roster subtraction, re-enter the event chain, or operate on a party that has already been destroyed or scheduled for disbanding.

## Real Example: Observe the Completed Removal

The event subscription is the stable mod acquisition path for this enum. It follows the `CampaignBehaviorBase.RegisterEvents` pattern used by core behaviors and reads the reason after the Action has completed its mutations.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.Core;
using TaleWorlds.Library;
using TaleWorlds.SaveSystem;

public sealed class CompanionRemovalObserver : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.CompanionRemoved.AddNonSerializedListener(
            this,
            OnCompanionRemoved);
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

The observer consumes a real event parameter and does not perform the removal again. A mod that needs to cause dismissal should call `RemoveCompanionAction.ApplyByFire` from its confirmed campaign workflow with the real `Clan` and `Hero` objects.

## Risks and Save Boundary

- `ApplyByDeath` and `ApplyByByTurningToLord` are workflow fragments. Calling either outside its surrounding death or promotion sequence can leave hero, clan, profession, party, and event state inconsistent.
- The callback receives the post-mutation `Hero`. Re-check `IsDead`, `CompanionOf`, `PartyBelongedTo`, and `GovernorOf` before using any cached pre-event references.
- `CompanionRemoved` is synchronous. Re-entering `RemoveCompanionAction` from a listener can duplicate roster changes or touch a destroyed or disbanding party.
- Direct writes to `CompanionOf` or a party roster skip fugitive, captivity, governor, party destruction/disbanding, and event consumers. The inconsistent hero and party state can be saved and fail later during an hourly tick or load.

**Save boundary:** `CompanionRemoved` is a runtime notification and is not replayed when a save is loaded. Register non-serialized listeners again from `CampaignBehaviorBase.RegisterEvents`, and rebuild persistent caches from saved campaign state. If a behavior owns persistent companion data, synchronize that data in `SyncData` through the [SaveManager](../../save-system/SaveManager) save system; do not serialize this transient enum as an in-progress removal flag or invoke a removal Action from save synchronization.

## Version Note

The four values, four public entries, and core cascade match between v1.3.15 and v1.4.5. The v1.4.5 source is decompiled and presents the nested enum before the private implementation, with some downstream optional arguments omitted at call sites; this does not change the complete type name. `ApplyByByTurningToLord` keeps its doubled `By` spelling in both versions and must be called by that exact name.

## Dependencies

- **Upstream:** [RemoveCompanionAction](../RemoveCompanionAction) selects the reason and owns the transaction; [KillCharacterAction](../KillCharacterAction) and [CompanionRolesCampaignBehavior](../CompanionRolesCampaignBehavior) establish two of the surrounding workflows.
- **Quest callers:** `FamilyFeudIssueBehavior` and [LordsNeedsTutorIssueBehavior](../LordsNeedsTutorIssueBehavior) use `AfterQuest` during finalization. The v1.3.15 page set does not contain a separate Family Feud behavior page.
- **Downstream:** [CampaignEvents](../CampaignEvents) delivers the reason to listeners; [EndCaptivityAction](../EndCaptivityAction), [ChangeGovernorAction](../ChangeGovernorAction), [DestroyPartyAction](../DestroyPartyAction), and [DisbandPartyAction](../DisbandPartyAction) perform parts of the state cascade.
- **Save boundary:** [SaveManager](../../save-system/SaveManager) persists campaign state, while this enum is only a synchronous runtime reason and must be reacquired from the next event rather than restored as an active transaction.

## Navigation

- **Parent:** [campaign-ext API](../)
- **Sibling:** [RemoveCompanionAction](../RemoveCompanionAction) · [ChangeGovernorAction](../ChangeGovernorAction)
- **Children:** [Fire](#fire) · [Death](#death) · [AfterQuest](#afterquest) · [ByTurningToLord](#byturningtolord)
- **Related:** [Hero](../../campaign/Hero) · [Clan](../../campaign/Clan) · [CampaignEvents](../CampaignEvents)
