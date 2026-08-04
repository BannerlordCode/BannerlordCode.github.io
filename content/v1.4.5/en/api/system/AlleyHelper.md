---
title: "AlleyHelper"
description: "Campaign UI helpers for managing an alley roster and choosing a clan member to lead it."
---
# AlleyHelper

**Namespace:** `Helpers`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class AlleyHelper`  
**Base:** `System.Object`  
**Source:** `bin/TaleWorlds.CampaignSystem/Helpers/AlleyHelper.cs`

## One-sentence responsibility

`AlleyHelper` opens the party-screen flow for an alley roster and builds the clan-member inquiry used to choose an alley leader; it delegates ownership and persistence to the calling Campaign behavior.

## Mental Model

`AlleyHelper` is a thin UI boundary, not an alley repository. `OpenScreenForManagingAlley` forwards the roster and callbacks to `PartyScreenHelper.OpenScreenForManagingAlley`, adding two private rules: regular troops may be transferred but heroes and prisoners may not, and the regular-troop count must stay between the active [AlleyModel](../../campaign/AlleyModel) minimum and maximum.

`CreateMultiSelectionInquiryForSelectingClanMemberToAlley` asks `Campaign.Current.Models.AlleyModel` for every clan member and its availability detail. It turns each result into an `InquiryElement` with a character image, display name, enabled state, and disabled-reason text, then pauses the game while `MBInformationManager` shows the inquiry. The caller decides what to do with the selected `CharacterObject` and must persist any changed roster or leader.

## Dependencies

- UI transfer: `PartyScreenHelper`, `PartyPresentationDoneButtonDelegate`, `PartyPresentationCancelButtonDelegate`, `PartyScreenLogic`, and `TroopRoster`.
- Campaign owner: [Campaign](../../campaign/Campaign) and [GameModels](../../campaign/GameModels), especially the active [AlleyModel](../../campaign/AlleyModel).
- Alley identity: [Alley](../../campaign/Alley), [Hero](../../campaign/Hero), and [Settlement](../../campaign/Settlement).
- Inquiry output: `InquiryElement`, `CharacterCode`, `CharacterImageIdentifier`, `MultiSelectionInquiryData`, and `MBInformationManager`.
- Real consumers: `AlleyCampaignBehavior` for town management and `MissionAlleyHandler` for the takeover flow. Their behaviors own the saveable player-alley data and mission consequences.

## Public members

### OpenScreenForManagingAlley

`OpenScreenForManagingAlley(bool isNewAlley, TroopRoster leftMemberRoster, PartyPresentationDoneButtonDelegate onDoneButtonClicked, TextObject leftText, PartyPresentationCancelButtonDelegate onCancelButtonClicked = null)` opens the party screen with the supplied left-side roster.

The helper's transfer predicate rejects every Hero and every prisoner. Its done-button predicate checks `leftMemberRoster.TotalRegulars` against `AlleyModel.MinimumTroopCountInPlayerOwnedAlley` and `MaximumTroopCountInPlayerOwnedAlley`, and creates localized error text with `LOWER_LIMIT` or `UPPER_LIMIT` variables when the bounds are violated. The done callback receives the resulting rosters; the caller, such as `AlleyCampaignBehavior`, writes the accepted `leftMemberRoster` back to its own saveable data.

`isNewAlley` is forwarded to the party-screen flow. It does not create or save an `Alley` by itself.

```csharp
TroopRoster initialRoster = TroopRoster.CreateDummyTroopRoster();
initialRoster.AddToCounts(leader, 1, false, 0, 0, true, -1);
AlleyHelper.OpenScreenForManagingAlley(
    true,
    initialRoster,
    OnPartyScreenDone,
    new TextObject("{=s8dsW6m0}New Alley"),
    OnPartyScreenCancel);
```

### CreateMultiSelectionInquiryForSelectingClanMemberToAlley

`CreateMultiSelectionInquiryForSelectingClanMemberToAlley(Alley alley, Action<List<InquiryElement>> affirmativeAction, Action<List<InquiryElement>> negativeAction)` queries the active `AlleyModel` for clan members and their availability for the supplied [Alley](../../campaign/Alley). Available and available-with-delay members are enabled; other members remain visible with a disabled-reason string.

The affirmative callback receives the selected inquiry elements, not a `Hero` directly. The SandBox consumer reads the first element's `Identifier` as a `CharacterObject`, obtains its `HeroObject`, and then applies the leader change. The helper itself changes no owner, clan membership, save field, or mission state.

```csharp
Alley alley = CampaignMission.Current?.LastVisitedAlley;
if (alley != null)
{
    AlleyHelper.CreateMultiSelectionInquiryForSelectingClanMemberToAlley(
        alley,
        OnCompanionSelectedForNewAlley,
        OnCompanionSelectionCancel);
}
```

## Real example

This mirrors the v1.4.5 alley takeover path. `CampaignMission.Current.LastVisitedAlley` is the real mission-owned alley, and the selected `CharacterObject` is the real identifier produced by the inquiry.

```csharp
using System.Collections.Generic;
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;
using TaleWorlds.Localization;

public sealed class AlleyTakeoverFlow
{
    public void ChooseLeaderForVisitedAlley()
    {
        Alley alley = CampaignMission.Current?.LastVisitedAlley;
        if (alley == null)
        {
            return;
        }

        AlleyHelper.CreateMultiSelectionInquiryForSelectingClanMemberToAlley(
            alley,
            selected => OpenNewAlleyScreen(selected),
            _ => LeaveTheAlleyEmpty());
    }

    private void OpenNewAlleyScreen(List<InquiryElement> selected)
    {
        CharacterObject leader = selected.First().Identifier as CharacterObject;
        if (leader == null)
        {
            return;
        }

        TroopRoster initialRoster = TroopRoster.CreateDummyTroopRoster();
        initialRoster.AddToCounts(leader, 1, false, 0, 0, true, -1);
        AlleyHelper.OpenScreenForManagingAlley(
            true,
            initialRoster,
            OnPartyScreenDone,
            new TextObject("New Alley"),
            OnPartyScreenCancel);
    }

    private void OnPartyScreenDone(TroopRoster leftMemberRoster, TroopRoster leftPrisonRoster,
        TroopRoster rightMemberRoster, TroopRoster rightPrisonRoster,
        FlattenedTroopRoster takenPrisonerRoster, FlattenedTroopRoster releasedPrisonerRoster,
        bool isForced, PartyBase leftParty, PartyBase rightParty)
    {
        // The owning Campaign behavior persists leftMemberRoster and applies the leader change.
    }

    private void OnPartyScreenCancel()
    {
        LeaveTheAlleyEmpty();
    }

    private void LeaveTheAlleyEmpty()
    {
    }
}
```

The callbacks above show the data boundary; a real Campaign behavior must supply its own persistence and consequence logic. Creating a dummy roster is valid here because the SandBox takeover source uses the same API for the initial leader row.

## Risks and save boundaries

- **Campaign/Model phase:** both methods read `Campaign.Current.Models.AlleyModel`; calling them in the main menu or before Campaign model initialization can fail.
- **UI ownership:** the helper pauses the game for the inquiry and hands control to callbacks. Do not call it from a background thread or assume the callback runs synchronously.
- **Roster rules:** `TotalRegulars` is what the done-button condition bounds. Heroes and prisoners are separate from that count, and the helper's transfer predicate still rejects them.
- **Persistence:** accepting the party screen does not save the roster or set an alley owner. The behavior that owns the alley's saveable record must persist `leftMemberRoster` and dispatch any event/action consequences.
- **Selection validity:** an enabled-with-delay member is intentionally visible but not immediately available according to `AlleyModel`; do not bypass that state by treating every inquiry element as selectable.
- **Lifecycle:** an `Alley` and its settlement belong to the Campaign object graph. Do not cache an old alley or `InquiryElement` across Campaign unload/load boundaries.

## Version note

This page follows v1.4.5 `Helpers/AlleyHelper.cs`. Its public surface is only the party-screen bridge and the clan-member inquiry; minimum/maximum troop rules and availability text come from the active `AlleyModel`, not constants in the helper.

## Navigation

- [↑ API system index](../)
- [↔ Alley](../../campaign/Alley)
- [Related: AlleyModel](../../campaign/AlleyModel)
- [Related: Campaign](../../campaign/Campaign)
- [Related: Hero](../../campaign/Hero)
- [Related: TroopRoster](../../campaign/TroopRoster)
