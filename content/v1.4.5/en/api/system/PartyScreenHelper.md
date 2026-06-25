---
title: "PartyScreenHelper"
description: "Auto-generated class reference for PartyScreenHelper."
---
# PartyScreenHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class PartyScreenHelper`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/Helpers/PartyScreenHelper.cs`

## Overview

`PartyScreenHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `PartyScreenHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetActivePartyState
`public static PartyState GetActivePartyState()`

**Purpose:** Reads and returns the `active party state` value held by the current object.

```csharp
// Static call; no instance required
PartyScreenHelper.GetActivePartyState();
```

### CloseScreen
`public static void CloseScreen(bool isForced, bool fromCancel = false)`

**Purpose:** Closes the resource or UI associated with `screen`.

```csharp
// Static call; no instance required
PartyScreenHelper.CloseScreen(false, false);
```

### OpenScreenAsCheat
`public static void OpenScreenAsCheat()`

**Purpose:** Opens the resource or UI associated with `screen as cheat`.

```csharp
// Static call; no instance required
PartyScreenHelper.OpenScreenAsCheat();
```

### OpenScreenAsNormal
`public static void OpenScreenAsNormal()`

**Purpose:** Opens the resource or UI associated with `screen as normal`.

```csharp
// Static call; no instance required
PartyScreenHelper.OpenScreenAsNormal();
```

### OpenScreenAsRansom
`public static void OpenScreenAsRansom()`

**Purpose:** Opens the resource or UI associated with `screen as ransom`.

```csharp
// Static call; no instance required
PartyScreenHelper.OpenScreenAsRansom();
```

### OpenScreenAsLoot
`public static void OpenScreenAsLoot(TroopRoster leftMemberRoster, TroopRoster leftPrisonerRoster, TextObject leftPartyName, int leftPartySizeLimit, PartyScreenClosedDelegate partyScreenClosedDelegate = null)`

**Purpose:** Opens the resource or UI associated with `screen as loot`.

```csharp
// Static call; no instance required
PartyScreenHelper.OpenScreenAsLoot(leftMemberRoster, leftPrisonerRoster, leftPartyName, 0, null);
```

### OpenScreenAsManageTroopsAndPrisoners
`public static void OpenScreenAsManageTroopsAndPrisoners(MobileParty leftParty, PartyScreenClosedDelegate onPartyScreenClosed = null)`

**Purpose:** Opens the resource or UI associated with `screen as manage troops and prisoners`.

```csharp
// Static call; no instance required
PartyScreenHelper.OpenScreenAsManageTroopsAndPrisoners(leftParty, null);
```

### OpenScreenAsManagePlayerClanPartyClosed
`public static void OpenScreenAsManagePlayerClanPartyClosed(PartyBase leftOwnerParty, TroopRoster leftMemberRoster, TroopRoster leftPrisonRoster, PartyBase rightOwnerParty, TroopRoster rightMemberRoster, TroopRoster rightPrisonRoster, bool fromCancel)`

**Purpose:** Opens the resource or UI associated with `screen as manage player clan party closed`.

```csharp
// Static call; no instance required
PartyScreenHelper.OpenScreenAsManagePlayerClanPartyClosed(leftOwnerParty, leftMemberRoster, leftPrisonRoster, rightOwnerParty, rightMemberRoster, rightPrisonRoster, false);
```

### OpenScreenAsReceiveTroops
`public static void OpenScreenAsReceiveTroops(TroopRoster leftMemberParty, TextObject leftPartyName, PartyScreenClosedDelegate partyScreenClosedDelegate = null)`

**Purpose:** Opens the resource or UI associated with `screen as receive troops`.

```csharp
// Static call; no instance required
PartyScreenHelper.OpenScreenAsReceiveTroops(leftMemberParty, leftPartyName, null);
```

### OpenScreenAsManageTroops
`public static void OpenScreenAsManageTroops(MobileParty leftParty)`

**Purpose:** Opens the resource or UI associated with `screen as manage troops`.

```csharp
// Static call; no instance required
PartyScreenHelper.OpenScreenAsManageTroops(leftParty);
```

### OpenScreenAsDonateTroops
`public static void OpenScreenAsDonateTroops(MobileParty leftParty)`

**Purpose:** Opens the resource or UI associated with `screen as donate troops`.

```csharp
// Static call; no instance required
PartyScreenHelper.OpenScreenAsDonateTroops(leftParty);
```

### OpenScreenAsDonateGarrisonWithCurrentSettlement
`public static void OpenScreenAsDonateGarrisonWithCurrentSettlement()`

**Purpose:** Opens the resource or UI associated with `screen as donate garrison with current settlement`.

```csharp
// Static call; no instance required
PartyScreenHelper.OpenScreenAsDonateGarrisonWithCurrentSettlement();
```

### OpenScreenAsDonatePrisoners
`public static void OpenScreenAsDonatePrisoners()`

**Purpose:** Opens the resource or UI associated with `screen as donate prisoners`.

```csharp
// Static call; no instance required
PartyScreenHelper.OpenScreenAsDonatePrisoners();
```

### DonatePrisonerTransferableDelegate
`public static bool DonatePrisonerTransferableDelegate(CharacterObject character, PartyScreenLogic.TroopType type, PartyScreenLogic.PartyRosterSide side, PartyBase LeftOwnerParty)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
PartyScreenHelper.DonatePrisonerTransferableDelegate(character, type, side, leftOwnerParty);
```

### OpenScreenAsManagePrisoners
`public static void OpenScreenAsManagePrisoners()`

**Purpose:** Opens the resource or UI associated with `screen as manage prisoners`.

```csharp
// Static call; no instance required
PartyScreenHelper.OpenScreenAsManagePrisoners();
```

### TroopTransferableDelegate
`public static bool TroopTransferableDelegate(CharacterObject character, PartyScreenLogic.TroopType type, PartyScreenLogic.PartyRosterSide side, PartyBase leftOwnerParty)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
PartyScreenHelper.TroopTransferableDelegate(character, type, side, leftOwnerParty);
```

### ClanManageTroopAndPrisonerTransferableDelegate
`public static bool ClanManageTroopAndPrisonerTransferableDelegate(CharacterObject character, PartyScreenLogic.TroopType type, PartyScreenLogic.PartyRosterSide side, PartyBase LeftOwnerParty)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
PartyScreenHelper.ClanManageTroopAndPrisonerTransferableDelegate(character, type, side, leftOwnerParty);
```

### ClanManageTroopTransferableDelegate
`public static bool ClanManageTroopTransferableDelegate(CharacterObject character, PartyScreenLogic.TroopType type, PartyScreenLogic.PartyRosterSide side, PartyBase LeftOwnerParty)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
PartyScreenHelper.ClanManageTroopTransferableDelegate(character, type, side, leftOwnerParty);
```

### DonateModeTroopTransferableDelegate
`public static bool DonateModeTroopTransferableDelegate(CharacterObject character, PartyScreenLogic.TroopType type, PartyScreenLogic.PartyRosterSide side, PartyBase LeftOwnerParty)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
PartyScreenHelper.DonateModeTroopTransferableDelegate(character, type, side, leftOwnerParty);
```

### OpenScreenWithCondition
`public static void OpenScreenWithCondition(IsTroopTransferableDelegate isTroopTransferable, PartyPresentationDoneButtonConditionDelegate doneButtonCondition, PartyPresentationDoneButtonDelegate onDoneClicked, PartyPresentationCancelButtonDelegate onCancelClicked, PartyScreenLogic.TransferState memberTransferState, PartyScreenLogic.TransferState prisonerTransferState, TextObject leftPartyName, int limit, bool showProgressBar, bool isDonating, PartyScreenMode screenMode = PartyScreenMode.Normal, TroopRoster memberRosterLeft = null, TroopRoster prisonerRosterLeft = null)`

**Purpose:** Opens the resource or UI associated with `screen with condition`.

```csharp
// Static call; no instance required
PartyScreenHelper.OpenScreenWithCondition(isTroopTransferable, doneButtonCondition, onDoneClicked, onCancelClicked, memberTransferState, prisonerTransferState, leftPartyName, 0, false, false, partyScreenMode.Normal, null, null);
```

### OpenScreenForManagingAlley
`public static void OpenScreenForManagingAlley(bool isNewAlley, TroopRoster memberRosterLeft, IsTroopTransferableDelegate isTroopTransferable, PartyPresentationDoneButtonConditionDelegate doneButtonCondition, PartyPresentationDoneButtonDelegate onDoneClicked, TextObject leftPartyName, PartyPresentationCancelButtonDelegate onCancelButtonClicked)`

**Purpose:** Opens the resource or UI associated with `screen for managing alley`.

```csharp
// Static call; no instance required
PartyScreenHelper.OpenScreenForManagingAlley(false, memberRosterLeft, isTroopTransferable, doneButtonCondition, onDoneClicked, leftPartyName, onCancelButtonClicked);
```

### OpenScreenAsQuest
`public static void OpenScreenAsQuest(TroopRoster leftMemberRoster, TextObject leftPartyName, int leftPartySizeLimit, int questDaysMultiplier, PartyPresentationDoneButtonConditionDelegate doneButtonCondition, PartyScreenClosedDelegate onPartyScreenClosed, IsTroopTransferableDelegate isTroopTransferable, PartyPresentationCancelButtonActivateDelegate partyPresentationCancelButtonActivateDelegate = null)`

**Purpose:** Opens the resource or UI associated with `screen as quest`.

```csharp
// Static call; no instance required
PartyScreenHelper.OpenScreenAsQuest(leftMemberRoster, leftPartyName, 0, 0, doneButtonCondition, onPartyScreenClosed, isTroopTransferable, null);
```

### OpenScreenWithDummyRoster
`public static void OpenScreenWithDummyRoster(TroopRoster leftMemberRoster, TroopRoster leftPrisonerRoster, TroopRoster rightMemberRoster, TroopRoster rightPrisonerRoster, TextObject leftPartyName, TextObject rightPartyName, int leftPartySizeLimit, int rightPartySizeLimit, PartyPresentationDoneButtonConditionDelegate doneButtonCondition, PartyScreenClosedDelegate onPartyScreenClosed, IsTroopTransferableDelegate isTroopTransferable, CanTalkToHeroDelegate canTalkToTroopDelegate = null, PartyPresentationCancelButtonActivateDelegate partyPresentationCancelButtonActivateDelegate = null)`

**Purpose:** Opens the resource or UI associated with `screen with dummy roster`.

```csharp
// Static call; no instance required
PartyScreenHelper.OpenScreenWithDummyRoster(leftMemberRoster, leftPrisonerRoster, rightMemberRoster, rightPrisonerRoster, leftPartyName, rightPartyName, 0, 0, doneButtonCondition, onPartyScreenClosed, isTroopTransferable, null, null);
```

### OpenScreenWithDummyRosterWithMainParty
`public static void OpenScreenWithDummyRosterWithMainParty(TroopRoster leftMemberRoster, TroopRoster leftPrisonerRoster, TextObject leftPartyName, int leftPartySizeLimit, PartyPresentationDoneButtonConditionDelegate doneButtonCondition, PartyScreenClosedDelegate onPartyScreenClosed, IsTroopTransferableDelegate isTroopTransferable, PartyPresentationCancelButtonActivateDelegate partyPresentationCancelButtonActivateDelegate = null)`

**Purpose:** Opens the resource or UI associated with `screen with dummy roster with main party`.

```csharp
// Static call; no instance required
PartyScreenHelper.OpenScreenWithDummyRosterWithMainParty(leftMemberRoster, leftPrisonerRoster, leftPartyName, 0, doneButtonCondition, onPartyScreenClosed, isTroopTransferable, null);
```

### OpenScreenAsCreateClanPartyForHero
`public static void OpenScreenAsCreateClanPartyForHero(Hero hero, PartyScreenClosedDelegate onScreenClosed = null, IsTroopTransferableDelegate isTroopTransferable = null)`

**Purpose:** Opens the resource or UI associated with `screen as create clan party for hero`.

```csharp
// Static call; no instance required
PartyScreenHelper.OpenScreenAsCreateClanPartyForHero(hero, null, null);
```

## Usage Example

```csharp
PartyScreenHelper.Initialize();
```

## See Also

- [Area Index](../)