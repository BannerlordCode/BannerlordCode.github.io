---
title: "RemoveCompanionDetail"
description: "The reason enum carried by RemoveCompanionAction and CompanionRemoved, distinguishing dismissal, death, quest cleanup, and promotion to lord."
---
# RemoveCompanionDetail

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public enum RemoveCompanionAction.RemoveCompanionDetail`  
**Base:** `System.Enum`  
**Source:** `TaleWorlds.CampaignSystem/Actions/RemoveCompanionAction.cs`

## Responsibility

Labels the reason for a companion-removal transaction so campaign behaviors can react differently to dismissal, death, post-quest cleanup, and promotion to lord. It is a nested enum, not an action that can remove a companion by itself.

## Mental model

Read this enum as the reason attached to an already-running `RemoveCompanionAction` transaction, not as the companion's target state. The four public `RemoveCompanionAction` methods choose the value and enter private `ApplyInternal`; that method clears `CompanionOf`, updates a mobile party roster, may destroy or disband a party, handles captivity or fugitive state for `Fire`, removes governor duty, and only then dispatches `CampaignEvents.CompanionRemoved`.

Listeners receive the companion after those mutations. They should inspect the reason and reconcile their own caches, not clear `CompanionOf`, edit a roster, or call `RemoveCompanionAction` again. Callers likewise must use the matching Action entry point rather than dispatching `CompanionRemoved` as a simulation.

## Values and action entries

| Value | Public entry | Meaning and timing |
| --- | --- | --- |
| `Fire` | `RemoveCompanionAction.ApplyByFire` | Player dismissal; a captive companion escapes, a free companion becomes fugitive, and a wanderer's equipment is reset. |
| `Death` | `RemoveCompanionAction.ApplyByDeath` | The hero-death workflow has already established death; this entry removes the companion relationship but does not kill the hero itself. |
| `AfterQuest` | `RemoveCompanionAction.ApplyAfterQuest` | A quest cleanup removes a temporary companion from the player's clan and party relationships. |
| `ByTurningToLord` | `RemoveCompanionAction.ApplyByByTurningToLord` | A promotion-to-lord workflow detaches the companion relationship while leaving party-roster handling to the surrounding lord, clan, and party transfer flow. |

The spelling `ApplyByByTurningToLord` is the actual 1.4.5 public method name. The private `ApplyInternal(Clan, Hero, RemoveCompanionDetail)` is not mod-visible, and the current implementation derives the party from `companion` rather than using the `clan` parameter to find it.

## Call sites and downstream behavior

The core source calls `ApplyByDeath` from `KillCharacterAction`, `ApplyByByTurningToLord` and `ApplyByFire` from `CompanionRolesCampaignBehavior`, and `ApplyAfterQuest` from quest behavior. Core and SandBox behaviors subscribe with `CampaignEvents.CompanionRemoved.AddNonSerializedListener`, including `HeroSpawnCampaignBehavior`, `PartyRolesCampaignBehavior`, and `PlayerTrackCompanionBehavior`.

For every value, `companion.CompanionOf` is cleared first. Except for `ByTurningToLord`, a companion in a mobile party is removed from the member roster; if the companion was leader, the party is put on hold and either destroyed when empty or scheduled for disbanding. `Fire` also calls `EndCaptivityAction.ApplyByEscape` for a captive or `MakeHeroFugitiveAction.Apply` otherwise. Any governor assignment is removed through `ChangeGovernorAction` before `OnCompanionRemoved` is dispatched.

## When to use / when not to

- Use the corresponding `RemoveCompanionAction.Apply*` method only from the owning dismissal, death, quest, or lord-promotion workflow.
- Use `CampaignEvents.CompanionRemoved` to observe the completed transition and branch on this enum.
- Do not use `Death` to kill an alive hero; `ApplyByDeath` is a cleanup entry called after the death workflow has decided what happened.
- Do not use `ByTurningToLord` as a standalone clan-conversion API; it does not create a lord clan or complete party transfer.
- Do not assign `Hero.CompanionOf` or edit a party roster directly when the Action contract applies.

## Risks and save boundaries

- The event is synchronous. A listener that removes the same companion again can repeat roster subtraction, re-enter the event chain, or operate on a party already destroyed or disbanding.
- `ApplyByDeath` and `ApplyByByTurningToLord` are workflow fragments. Calling either outside its surrounding death or promotion sequence leaves hero, clan, profession, party, and event state inconsistent.
- The callback receives the post-mutation `Hero`; re-check `IsDead`, `CompanionOf`, `PartyBelongedTo`, and `GovernorOf` before using any cached pre-event references.
- `CompanionRemoved` is a runtime notification and is not replayed by loading a save. Register non-serialized listeners again from `CampaignBehaviorBase.RegisterEvents`, and rebuild persistent caches from saved campaign state rather than saving this transient reason as an in-progress flag.
- Direct field or roster edits skip fugitive, captivity, governor, party destruction/disbanding, and event consumers. The resulting hero and party state can be written to a save and fail later during an hourly tick or load.

## Real example: observe the completed removal

The event subscription is the stable mod acquisition path for this enum. It follows the same `CampaignBehaviorBase.RegisterEvents` pattern used by core behaviors.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.CampaignBehaviors;
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

The observer reads a real event parameter and does not attempt to perform the removal again. A mod that needs to cause dismissal should call `RemoveCompanionAction.ApplyByFire` from its confirmed campaign workflow with the real `Clan` and `Hero` objects.

## Version note

The four values, four public entries, and core cascade are the same in v1.3.15 and v1.4.5. The 1.4.5 decompiled source presents the nested enum before the private implementation and retains the unusual `ApplyByByTurningToLord` spelling. Use the complete nested type name and compile against the target version.

## Navigation

- Parent: [campaign-ext API](./)
- Siblings: [RemoveCompanionAction](./RemoveCompanionAction) · [RaftStateChangeAction](./RaftStateChangeAction) · [RepairShipAction](./RepairShipAction)
- Children: [Fire](#fire) · [Death](#death) · [AfterQuest](#afterquest) · [ByTurningToLord](#byturningtolord)
- Related: [Hero](../campaign/Hero) · [Clan](../campaign/Clan) · [CampaignEvents](./CampaignEvents) · [CompanionRolesCampaignBehavior](./CompanionRolesCampaignBehavior) · [EndCaptivityAction](./EndCaptivityAction)

