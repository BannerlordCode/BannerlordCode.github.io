<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyScreenHelper`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyScreenHelper

**命名空间:** Helpers
**模块:** Helpers
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`PartyScreenHelper` 是 `Helpers` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)