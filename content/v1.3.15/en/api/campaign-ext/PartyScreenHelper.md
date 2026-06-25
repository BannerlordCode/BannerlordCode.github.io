---
title: "PartyScreenHelper"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyScreenHelper`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyScreenHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class PartyScreenHelper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Helpers/PartyScreenHelper.cs`

## Overview

`PartyScreenHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `PartyScreenHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetActivePartyState
`public static PartyState GetActivePartyState()`

**Purpose:** Gets the current value of `active party state`.

### CloseScreen
`public static void CloseScreen(bool isForced, bool fromCancel = false)`

**Purpose:** Handles logic related to `close screen`.

### OpenScreenAsCheat
`public static void OpenScreenAsCheat()`

**Purpose:** Handles logic related to `open screen as cheat`.

### OpenScreenAsNormal
`public static void OpenScreenAsNormal()`

**Purpose:** Handles logic related to `open screen as normal`.

### OpenScreenAsRansom
`public static void OpenScreenAsRansom()`

**Purpose:** Handles logic related to `open screen as ransom`.

### OpenScreenAsLoot
`public static void OpenScreenAsLoot(TroopRoster leftMemberRoster, TroopRoster leftPrisonerRoster, TextObject leftPartyName, int leftPartySizeLimit, PartyScreenClosedDelegate partyScreenClosedDelegate = null)`

**Purpose:** Handles logic related to `open screen as loot`.

### OpenScreenAsManageTroopsAndPrisoners
`public static void OpenScreenAsManageTroopsAndPrisoners(MobileParty leftParty, PartyScreenClosedDelegate onPartyScreenClosed = null)`

**Purpose:** Handles logic related to `open screen as manage troops and prisoners`.

### OpenScreenAsReceiveTroops
`public static void OpenScreenAsReceiveTroops(TroopRoster leftMemberParty, TextObject leftPartyName, PartyScreenClosedDelegate partyScreenClosedDelegate = null)`

**Purpose:** Handles logic related to `open screen as receive troops`.

### OpenScreenAsManageTroops
`public static void OpenScreenAsManageTroops(MobileParty leftParty)`

**Purpose:** Handles logic related to `open screen as manage troops`.

### OpenScreenAsDonateTroops
`public static void OpenScreenAsDonateTroops(MobileParty leftParty)`

**Purpose:** Handles logic related to `open screen as donate troops`.

### OpenScreenAsDonateGarrisonWithCurrentSettlement
`public static void OpenScreenAsDonateGarrisonWithCurrentSettlement()`

**Purpose:** Handles logic related to `open screen as donate garrison with current settlement`.

### OpenScreenAsDonatePrisoners
`public static void OpenScreenAsDonatePrisoners()`

**Purpose:** Handles logic related to `open screen as donate prisoners`.

### DonatePrisonerTransferableDelegate
`public static bool DonatePrisonerTransferableDelegate(CharacterObject character, PartyScreenLogic.TroopType type, PartyScreenLogic.PartyRosterSide side, PartyBase LeftOwnerParty)`

**Purpose:** Handles logic related to `donate prisoner transferable delegate`.

### OpenScreenAsManagePrisoners
`public static void OpenScreenAsManagePrisoners()`

**Purpose:** Handles logic related to `open screen as manage prisoners`.

### TroopTransferableDelegate
`public static bool TroopTransferableDelegate(CharacterObject character, PartyScreenLogic.TroopType type, PartyScreenLogic.PartyRosterSide side, PartyBase leftOwnerParty)`

**Purpose:** Handles logic related to `troop transferable delegate`.

### ClanManageTroopAndPrisonerTransferableDelegate
`public static bool ClanManageTroopAndPrisonerTransferableDelegate(CharacterObject character, PartyScreenLogic.TroopType type, PartyScreenLogic.PartyRosterSide side, PartyBase LeftOwnerParty)`

**Purpose:** Handles logic related to `clan manage troop and prisoner transferable delegate`.

### ClanManageTroopTransferableDelegate
`public static bool ClanManageTroopTransferableDelegate(CharacterObject character, PartyScreenLogic.TroopType type, PartyScreenLogic.PartyRosterSide side, PartyBase LeftOwnerParty)`

**Purpose:** Handles logic related to `clan manage troop transferable delegate`.

### DonateModeTroopTransferableDelegate
`public static bool DonateModeTroopTransferableDelegate(CharacterObject character, PartyScreenLogic.TroopType type, PartyScreenLogic.PartyRosterSide side, PartyBase LeftOwnerParty)`

**Purpose:** Handles logic related to `donate mode troop transferable delegate`.

### OpenScreenWithCondition
`public static void OpenScreenWithCondition(IsTroopTransferableDelegate isTroopTransferable, PartyPresentationDoneButtonConditionDelegate doneButtonCondition, PartyPresentationDoneButtonDelegate onDoneClicked, PartyPresentationCancelButtonDelegate onCancelClicked, PartyScreenLogic.TransferState memberTransferState, PartyScreenLogic.TransferState prisonerTransferState, TextObject leftPartyName, int limit, bool showProgressBar, bool isDonating, PartyScreenHelper.PartyScreenMode screenMode = PartyScreenHelper.PartyScreenMode.Normal, TroopRoster memberRosterLeft = null, TroopRoster prisonerRosterLeft = null)`

**Purpose:** Handles logic related to `open screen with condition`.

### OpenScreenForManagingAlley
`public static void OpenScreenForManagingAlley(bool isNewAlley, TroopRoster memberRosterLeft, IsTroopTransferableDelegate isTroopTransferable, PartyPresentationDoneButtonConditionDelegate doneButtonCondition, PartyPresentationDoneButtonDelegate onDoneClicked, TextObject leftPartyName, PartyPresentationCancelButtonDelegate onCancelButtonClicked)`

**Purpose:** Handles logic related to `open screen for managing alley`.

### OpenScreenAsQuest
`public static void OpenScreenAsQuest(TroopRoster leftMemberRoster, TextObject leftPartyName, int leftPartySizeLimit, int questDaysMultiplier, PartyPresentationDoneButtonConditionDelegate doneButtonCondition, PartyScreenClosedDelegate onPartyScreenClosed, IsTroopTransferableDelegate isTroopTransferable, PartyPresentationCancelButtonActivateDelegate partyPresentationCancelButtonActivateDelegate = null)`

**Purpose:** Handles logic related to `open screen as quest`.

### OpenScreenWithDummyRoster
`public static void OpenScreenWithDummyRoster(TroopRoster leftMemberRoster, TroopRoster leftPrisonerRoster, TroopRoster rightMemberRoster, TroopRoster rightPrisonerRoster, TextObject leftPartyName, TextObject rightPartyName, int leftPartySizeLimit, int rightPartySizeLimit, PartyPresentationDoneButtonConditionDelegate doneButtonCondition, PartyScreenClosedDelegate onPartyScreenClosed, IsTroopTransferableDelegate isTroopTransferable, CanTalkToHeroDelegate canTalkToTroopDelegate = null, PartyPresentationCancelButtonActivateDelegate partyPresentationCancelButtonActivateDelegate = null)`

**Purpose:** Handles logic related to `open screen with dummy roster`.

### OpenScreenWithDummyRosterWithMainParty
`public static void OpenScreenWithDummyRosterWithMainParty(TroopRoster leftMemberRoster, TroopRoster leftPrisonerRoster, TextObject leftPartyName, int leftPartySizeLimit, PartyPresentationDoneButtonConditionDelegate doneButtonCondition, PartyScreenClosedDelegate onPartyScreenClosed, IsTroopTransferableDelegate isTroopTransferable, PartyPresentationCancelButtonActivateDelegate partyPresentationCancelButtonActivateDelegate = null)`

**Purpose:** Handles logic related to `open screen with dummy roster with main party`.

### OpenScreenAsCreateClanPartyForHero
`public static void OpenScreenAsCreateClanPartyForHero(Hero hero, PartyScreenClosedDelegate onScreenClosed = null, IsTroopTransferableDelegate isTroopTransferable = null)`

**Purpose:** Handles logic related to `open screen as create clan party for hero`.

## Usage Example

```csharp
PartyScreenHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)