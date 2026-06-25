---
title: "PartyScreenLogicInitializationData"
description: "Auto-generated class reference for PartyScreenLogicInitializationData."
---
# PartyScreenLogicInitializationData

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct PartyScreenLogicInitializationData`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party/PartyScreenLogicInitializationData.cs`

## Overview

`PartyScreenLogicInitializationData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `PartyScreenLogicInitializationData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CreateBasicInitDataWithMainParty
`public static PartyScreenLogicInitializationData CreateBasicInitDataWithMainParty(TroopRoster leftMemberRoster, TroopRoster leftPrisonerRoster, PartyScreenLogic.TransferState memberTransferState, PartyScreenLogic.TransferState prisonerTransferState, PartyScreenLogic.TransferState accompanyingTransferState, IsTroopTransferableDelegate troopTransferableDelegate, PartyScreenHelper.PartyScreenMode partyScreenMode, PartyBase leftOwnerParty = null, TextObject leftPartyName = null, TextObject header = null, Hero leftLeaderHero = null, int leftPartyMembersSizeLimit = 0, int leftPartyPrisonersSizeLimit = 0, PartyPresentationDoneButtonDelegate partyPresentationDoneButtonDelegate = null, PartyPresentationDoneButtonConditionDelegate partyPresentationDoneButtonConditionDelegate = null, PartyPresentationCancelButtonDelegate partyPresentationCancelButtonDelegate = null, PartyPresentationCancelButtonActivateDelegate partyPresentationCancelButtonActivateDelegate = null, PartyScreenClosedDelegate partyScreenClosedDelegate = null, bool isDismissMode = false, bool transferHealthiesGetWoundedsFirst = false, bool isTroopUpgradesDisabled = false, bool showProgressBar = false, int questModeWageDaysMultiplier = 0)`

**Purpose:** Constructs a new basic init data with main party entity and returns it to the caller.

```csharp
// Static call; no instance required
PartyScreenLogicInitializationData.CreateBasicInitDataWithMainParty(leftMemberRoster, leftPrisonerRoster, memberTransferState, prisonerTransferState, accompanyingTransferState, troopTransferableDelegate, partyScreenMode, null, null, null, null, 0, 0, null, null, null, null, null, false, false, false, false, 0);
```

### CreateBasicInitDataWithMainPartyAndOther
`public static PartyScreenLogicInitializationData CreateBasicInitDataWithMainPartyAndOther(MobileParty party, PartyScreenLogic.TransferState memberTransferState, PartyScreenLogic.TransferState prisonerTransferState, PartyScreenLogic.TransferState accompanyingTransferState, IsTroopTransferableDelegate troopTransferableDelegate, PartyScreenHelper.PartyScreenMode partyScreenMode, TextObject header = null, PartyPresentationDoneButtonDelegate partyPresentationDoneButtonDelegate = null, PartyPresentationDoneButtonConditionDelegate partyPresentationDoneButtonConditionDelegate = null, PartyPresentationCancelButtonDelegate partyPresentationCancelButtonDelegate = null, PartyPresentationCancelButtonActivateDelegate partyPresentationCancelButtonActivateDelegate = null, PartyScreenClosedDelegate partyScreenClosedDelegate = null, bool isDismissMode = false, bool transferHealthiesGetWoundedsFirst = false, bool isTroopUpgradesDisabled = true, bool showProgressBar = false)`

**Purpose:** Constructs a new basic init data with main party and other entity and returns it to the caller.

```csharp
// Static call; no instance required
PartyScreenLogicInitializationData.CreateBasicInitDataWithMainPartyAndOther(party, memberTransferState, prisonerTransferState, accompanyingTransferState, troopTransferableDelegate, partyScreenMode, null, null, null, null, null, null, false, false, false, false);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
PartyScreenLogicInitializationData entry = ...;
```

## See Also

- [Area Index](../)