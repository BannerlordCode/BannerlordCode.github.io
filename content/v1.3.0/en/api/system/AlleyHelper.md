---
title: "AlleyHelper"
description: "Auto-generated class reference for AlleyHelper."
---
# AlleyHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class AlleyHelper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Helpers/AlleyHelper.cs`

## Overview

`AlleyHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `AlleyHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OpenScreenForManagingAlley
`public static void OpenScreenForManagingAlley(TroopRoster leftMemberRoster, PartyPresentationDoneButtonDelegate onDoneButtonClicked, TextObject leftText, PartyPresentationCancelButtonDelegate onCancelButtonClicked = null)`

**Purpose:** Opens the resource or UI associated with screen for managing alley.

```csharp
// Static call; no instance required
AlleyHelper.OpenScreenForManagingAlley(leftMemberRoster, onDoneButtonClicked, leftText, null);
```

### CreateMultiSelectionInquiryForSelectingClanMemberToAlley
`public static void CreateMultiSelectionInquiryForSelectingClanMemberToAlley(Alley alley, Action<List<InquiryElement>> affirmativeAction, Action<List<InquiryElement>> negativeAction)`

**Purpose:** Constructs a new multi selection inquiry for selecting clan member to alley entity and returns it to the caller.

```csharp
// Static call; no instance required
AlleyHelper.CreateMultiSelectionInquiryForSelectingClanMemberToAlley(alley, affirmativeAction, negativeAction);
```

## Usage Example

```csharp
AlleyHelper.Initialize();
```

## See Also

- [Area Index](../)