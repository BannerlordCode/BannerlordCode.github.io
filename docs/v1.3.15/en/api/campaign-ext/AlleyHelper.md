<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AlleyHelper`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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
`public static void OpenScreenForManagingAlley(bool isNewAlley, TroopRoster leftMemberRoster, PartyPresentationDoneButtonDelegate onDoneButtonClicked, TextObject leftText, PartyPresentationCancelButtonDelegate onCancelButtonClicked = null)`

**Purpose:** Handles logic related to `open screen for managing alley`.

### CreateMultiSelectionInquiryForSelectingClanMemberToAlley
`public static void CreateMultiSelectionInquiryForSelectingClanMemberToAlley(Alley alley, Action<List<InquiryElement>> affirmativeAction, Action<List<InquiryElement>> negativeAction)`

**Purpose:** Creates a new `multi selection inquiry for selecting clan member to alley` instance or object.

## Usage Example

```csharp
AlleyHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)