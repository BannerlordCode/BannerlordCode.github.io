<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyScreenHelper`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyScreenHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `PartyScreenHelper` is a class in the `Helpers` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### GetActivePartyState

```csharp
public static PartyState GetActivePartyState()
```

### CloseScreen

```csharp
public static void CloseScreen(bool isForced, bool fromCancel = false)
```

### OpenScreenAsCheat

```csharp
public static void OpenScreenAsCheat()
```

### OpenScreenAsNormal

```csharp
public static void OpenScreenAsNormal()
```

### OpenScreenAsRansom

```csharp
public static void OpenScreenAsRansom()
```

### OpenScreenAsLoot

```csharp
public static void OpenScreenAsLoot(TroopRoster leftMemberRoster, TroopRoster leftPrisonerRoster, TextObject leftPartyName, int leftPartySizeLimit, PartyScreenClosedDelegate partyScreenClosedDelegate = null)
```

### OpenScreenAsManageTroopsAndPrisoners

```csharp
public static void OpenScreenAsManageTroopsAndPrisoners(MobileParty leftParty, PartyScreenClosedDelegate onPartyScreenClosed = null)
```

### OpenScreenAsReceiveTroops

```csharp
public static void OpenScreenAsReceiveTroops(TroopRoster leftMemberParty, TextObject leftPartyName, PartyScreenClosedDelegate partyScreenClosedDelegate = null)
```

### OpenScreenAsManageTroops

```csharp
public static void OpenScreenAsManageTroops(MobileParty leftParty)
```

### OpenScreenAsDonateTroops

```csharp
public static void OpenScreenAsDonateTroops(MobileParty leftParty)
```

### OpenScreenAsDonateGarrisonWithCurrentSettlement

```csharp
public static void OpenScreenAsDonateGarrisonWithCurrentSettlement()
```

### OpenScreenAsDonatePrisoners

```csharp
public static void OpenScreenAsDonatePrisoners()
```

### DonatePrisonerTransferableDelegate

```csharp
public static bool DonatePrisonerTransferableDelegate(CharacterObject character, PartyScreenLogic.TroopType type, PartyScreenLogic.PartyRosterSide side, PartyBase LeftOwnerParty)
```

### OpenScreenAsManagePrisoners

```csharp
public static void OpenScreenAsManagePrisoners()
```

### TroopTransferableDelegate

```csharp
public static bool TroopTransferableDelegate(CharacterObject character, PartyScreenLogic.TroopType type, PartyScreenLogic.PartyRosterSide side, PartyBase leftOwnerParty)
```

### ClanManageTroopAndPrisonerTransferableDelegate

```csharp
public static bool ClanManageTroopAndPrisonerTransferableDelegate(CharacterObject character, PartyScreenLogic.TroopType type, PartyScreenLogic.PartyRosterSide side, PartyBase LeftOwnerParty)
```

### ClanManageTroopTransferableDelegate

```csharp
public static bool ClanManageTroopTransferableDelegate(CharacterObject character, PartyScreenLogic.TroopType type, PartyScreenLogic.PartyRosterSide side, PartyBase LeftOwnerParty)
```

### DonateModeTroopTransferableDelegate

```csharp
public static bool DonateModeTroopTransferableDelegate(CharacterObject character, PartyScreenLogic.TroopType type, PartyScreenLogic.PartyRosterSide side, PartyBase LeftOwnerParty)
```

### OpenScreenWithCondition

```csharp
public static void OpenScreenWithCondition(IsTroopTransferableDelegate isTroopTransferable, PartyPresentationDoneButtonConditionDelegate doneButtonCondition, PartyPresentationDoneButtonDelegate onDoneClicked, PartyPresentationCancelButtonDelegate onCancelClicked, PartyScreenLogic.TransferState memberTransferState, PartyScreenLogic.TransferState prisonerTransferState, TextObject leftPartyName, int limit, bool showProgressBar, bool isDonating, PartyScreenHelper.PartyScreenMode screenMode = PartyScreenHelper.PartyScreenMode.Normal, TroopRoster memberRosterLeft = null, TroopRoster prisonerRosterLeft = null)
```

### OpenScreenForManagingAlley

```csharp
public static void OpenScreenForManagingAlley(bool isNewAlley, TroopRoster memberRosterLeft, IsTroopTransferableDelegate isTroopTransferable, PartyPresentationDoneButtonConditionDelegate doneButtonCondition, PartyPresentationDoneButtonDelegate onDoneClicked, TextObject leftPartyName, PartyPresentationCancelButtonDelegate onCancelButtonClicked)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)