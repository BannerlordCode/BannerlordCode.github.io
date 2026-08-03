---
title: "StartMercenaryServiceActionDetails"
description: "Carries the mercenary-service start reason to Behaviors and mod listeners after clan allegiance, award multiplier, and the player renewal deadline have been written."
---
# StartMercenaryServiceActionDetails

**Namespace:** `TaleWorlds.CampaignSystem.Actions`

**Module:** `TaleWorlds.CampaignSystem`

**Type:** `public enum StartMercenaryServiceActionDetails`

**Declaring type:** `StartMercenaryServiceAction`

**Base:** `System.Enum`

**Source:** `TaleWorlds.CampaignSystem/Actions/StartMercenaryServiceAction.cs`

## One-line job

Identifies which parent-Action path started mercenary service and attaches that reason to the event dispatched after state has changed.

## Overview

This public enum is nested in `StartMercenaryServiceAction` and currently contains only `ApplyByDefault`. Standard callers do not construct it. They call `ChangeKingdomAction.ApplyByJoinFactionAsMercenary`, which adjusts faction stances and minimum stay time, enters `StartMercenaryServiceAction`, then continues with war-party Hold state and `OnClanChangedKingdom`. Accepting a kingdom offer, lord conversations, diplomatic barters, and story scripts all use that higher-level path.

## Mental model

Starting service is a persistent clan-state transition, not a notification. The parent Action sets the award multiplier and `Clan.Kingdom`, marks `IsUnderMercenaryService` true, and gives the player clan a renewal deadline 30 days in the future. Only after those writes does it dispatch `OnMercenaryServiceStarted` synchronously with this enum.

An event listener can safely read the clan's new kingdom and multiplier when it receives `details`. If the call came through `ChangeKingdomAction`, however, the outer `OnClanChangedKingdom` event has not run yet. The reason says how service started; it does not mean that the complete diplomatic transaction has unwound from the call stack.

## Actual entry point and event cascade

The private `ApplyStart(Clan clan, Kingdom kingdom, int awardMultiplier, StartMercenaryServiceActionDetails details)` contract is:

```text
If clan is already serving: EndMercenaryServiceAction.EndByLeavingKingdom
  -> clan.MercenaryAwardMultiplier = awardMultiplier
  -> clan.Kingdom = kingdom (synchronizes kingdom clan lists, heroes, and banner colors)
  -> clan.StartMercenaryService() (IsUnderMercenaryService = true)
  -> Player clan: renewal deadline = current time + 30 days
  -> OnMercenaryServiceStarted(clan, ApplyByDefault)
```

The only public parent entry point, `StartMercenaryServiceAction.ApplyByDefault`, always supplies `ApplyByDefault` (implicit numeric value 0). If the clan was already serving, listeners first receive `OnMercenaryServiceEnded(...ApplyByLeavingKingdom)` and then the new Started event.

## Callers and timing

The `JoinAsMercenary` branch of `ChangeKingdomAction.ApplyInternal` invokes the parent Action. Real v1.4.5 upstream callers include:

| Upstream caller | Timing |
|---|---|
| `VassalAndMercenaryOfferCampaignBehavior` | After the player accepts a map mercenary offer and the Behavior calculates the multiplier through `MinorFactionsModel`. |
| `LordConversationsCampaignBehavior` | When the player accepts service or recruits mercenaries through lord dialogue. |
| `MercenaryJoinKingdomBarterable` / `JoinKingdomAsClanBarterable` | When a diplomatic barter applies its join result. |
| StoryMode and cheat entry points | For a forced story allegiance or explicit debug action; they still reuse the same high-level Action. |

Ordinary mods should also prefer `ChangeKingdomAction.ApplyByJoinFactionAsMercenary`. Calling `StartMercenaryServiceAction.ApplyByDefault` directly skips outer faction-stance adjustment, `DebtToKingdom` reset, `ShouldStayInKingdomUntil`, war-party Hold handling, map-visual checks, and `OnClanChangedKingdom`.

## Dependencies and upstream/downstream state

| Dependency | Relationship |
|---|---|
| [`StartMercenaryServiceAction`](../StartMercenaryServiceAction) | Writes the state and supplies this reason. The enum itself has no execution entry point. |
| [`ChangeKingdomAction`](../ChangeKingdomAction) | Recommended upstream transaction boundary for diplomacy and party consequences around joining a kingdom. |
| [`EndMercenaryServiceAction`](../EndMercenaryServiceAction) | Ends existing service first; its Ended event precedes the new Started event. |
| [`Clan`](../../campaign/Clan) / [`Kingdom`](../../campaign/Kingdom) | Persist kingdom allegiance, service state, multiplier, and kingdom clan membership. These values are already effective in a Started callback. |
| [`CampaignEvents`](../CampaignEvents) | Exposes `OnMercenaryServiceStartedEvent`; the high-level join path dispatches `OnClanChangedKingdom` later. |

## Do not edit fields directly

Do not assign `Clan.Kingdom` and `MercenaryAwardMultiplier` separately and then call `Clan.StartMercenaryService()`. That composition omits old-contract termination, the player renewal deadline, and the Started event, and it bypasses the faction stances, stay deadline, war parties, and ChangedKingdom event owned by `ChangeKingdomAction`. Saving afterward can leave a clan that appears to belong to a kingdom but has inconsistent diplomacy or contract lifecycle state.

Use `ChangeKingdomAction.ApplyByJoinToKingdom` when the intent is vassalage. To end a contract, choose a reason-specific `EndMercenaryServiceAction` entry point or `ChangeKingdomAction.ApplyByLeaveKingdomAsMercenary`; never try to reverse the start Action manually.

## Lifecycle, save, and corruption risks

- `clan`, `kingdom`, and `Campaign.Current` have no null protection. The player branch also dereferences `Campaign.Current.KingdomManager`. Invoke only after a Campaign has fully started, never from `OnSubModuleLoad` or `SyncData`.
- `MercenaryAwardMultiplier`, `IsUnderMercenaryService`, `ShouldStayInKingdomUntil`, clan kingdom allegiance, and the player renewal deadline all enter save data. An exception midway through a hand-built transition, followed by a save, makes partial state permanent.
- The Started event is synchronous and state is already updated. A listener must not start service again and must not assume `OnClanChangedKingdom` has fired; listen to the latter when complete allegiance change is the required boundary.
- `awardMultiplier` is not an arbitrary gold amount from UI text. Native flows calculate it with `Campaign.Current.Models.MinorFactionsModel.GetMercenaryAwardFactorToJoinKingdom`. Negative or extreme values contaminate later clan finance calculations.
- Applying to a clan already in service ends the old contract and starts a new one, generating both event sequences. Do not use re-Apply as a setter merely to update pay; let the native monthly renewal logic run or design an explicit migration.
- Do not persist the enum as a bare integer. Its single current value does not guarantee that later versions will not add reasons; tolerate unknown values when reading mod data.

## Key member and consumption timing

| Member | Purpose and side effect | When to read it |
|---|---|---|
| `ApplyByDefault` | Identifies the parent Action's standard start path. The value itself changes no state; `ApplyStart` performs the transition. | Interpret it only in `OnMercenaryServiceStartedEvent`, logs, or mod transaction records. Assigning the enum does not start service. |

## Real acquisition path

This example uses the real kingdom acquisition path from lord conversation and, like the native Behavior, asks `MinorFactionsModel` for the multiplier before invoking the complete `ChangeKingdomAction`. The event listener receives this enum after state has been written.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.SaveSystem;

public sealed class MercenaryContractBehavior : CampaignBehaviorBase
{
    private string _lastMercenaryKingdomId;

    public override void RegisterEvents()
    {
        CampaignEvents.OnMercenaryServiceStartedEvent.AddNonSerializedListener(
            this,
            OnMercenaryServiceStarted);
    }

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData("my_mod_last_mercenary_kingdom", ref _lastMercenaryKingdomId);
    }

    private void OnMercenaryServiceStarted(
        Clan clan,
        StartMercenaryServiceAction.StartMercenaryServiceActionDetails details)
    {
        if (clan == Clan.PlayerClan &&
            details == StartMercenaryServiceAction.StartMercenaryServiceActionDetails.ApplyByDefault)
        {
            _lastMercenaryKingdomId = clan.Kingdom?.StringId;
        }
    }

    public static void JoinConversationKingdomAsMercenary()
    {
        Kingdom kingdom = Hero.OneToOneConversationHero?.Clan?.Kingdom;
        if (kingdom == null || Clan.PlayerClan.Kingdom != null ||
            Clan.PlayerClan.IsUnderMercenaryService)
        {
            return;
        }

        int awardMultiplier = Campaign.Current.Models.MinorFactionsModel
            .GetMercenaryAwardFactorToJoinKingdom(Clan.PlayerClan, kingdom, true);

        ChangeKingdomAction.ApplyByJoinFactionAsMercenary(
            Clan.PlayerClan,
            kingdom,
            CampaignTime.Zero,
            awardMultiplier,
            showNotification: true);
    }
}
```

When `_lastMercenaryKingdomId` is Behavior-owned save state, synchronize it in that Behavior's `SyncData`. Keep the listener registration non-serialized so the delegate itself never enters the save.

## Version notes

Both v1.3.15 and the inspected v1.4.5 core assembly contain only `ApplyByDefault` and preserve the state order in `ApplyStart` plus the `OnMercenaryServiceStarted` arguments. The declaration remains in `TaleWorlds.CampaignSystem.Actions` in v1.4.5. SandBox and StoryMode contain some callers but do not own this type.

## Navigation

- Save boundary: [`SaveableTypeDefiner`](../../save-system/SaveableTypeDefiner/) registers clan mercenary state; the start event is not replayed after loading, so mod-owned contract caches belong in Behavior `SyncData`.
- Parent: [StartMercenaryServiceAction](../StartMercenaryServiceAction) · [Campaign extension API](../)
- Sibling: [ChangeKingdomAction](../ChangeKingdomAction) · [EndMercenaryServiceAction](../EndMercenaryServiceAction)
- Children: no separate child page; the enum is owned by [StartMercenaryServiceAction](../StartMercenaryServiceAction)
- Related: [Clan](../../campaign/Clan) · [Kingdom](../../campaign/Kingdom) · [CampaignEvents](../CampaignEvents)
