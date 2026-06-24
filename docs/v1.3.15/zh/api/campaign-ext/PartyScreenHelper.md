<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyScreenHelper`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyScreenHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class PartyScreenHelper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Helpers/PartyScreenHelper.cs`

## 概述

`PartyScreenHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `PartyScreenHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetActivePartyState
`public static PartyState GetActivePartyState()`

**用途 / Purpose:** 获取 `active party state` 的当前值。

### CloseScreen
`public static void CloseScreen(bool isForced, bool fromCancel = false)`

**用途 / Purpose:** 处理 `close screen` 相关逻辑。

### OpenScreenAsCheat
`public static void OpenScreenAsCheat()`

**用途 / Purpose:** 处理 `open screen as cheat` 相关逻辑。

### OpenScreenAsNormal
`public static void OpenScreenAsNormal()`

**用途 / Purpose:** 处理 `open screen as normal` 相关逻辑。

### OpenScreenAsRansom
`public static void OpenScreenAsRansom()`

**用途 / Purpose:** 处理 `open screen as ransom` 相关逻辑。

### OpenScreenAsLoot
`public static void OpenScreenAsLoot(TroopRoster leftMemberRoster, TroopRoster leftPrisonerRoster, TextObject leftPartyName, int leftPartySizeLimit, PartyScreenClosedDelegate partyScreenClosedDelegate = null)`

**用途 / Purpose:** 处理 `open screen as loot` 相关逻辑。

### OpenScreenAsManageTroopsAndPrisoners
`public static void OpenScreenAsManageTroopsAndPrisoners(MobileParty leftParty, PartyScreenClosedDelegate onPartyScreenClosed = null)`

**用途 / Purpose:** 处理 `open screen as manage troops and prisoners` 相关逻辑。

### OpenScreenAsReceiveTroops
`public static void OpenScreenAsReceiveTroops(TroopRoster leftMemberParty, TextObject leftPartyName, PartyScreenClosedDelegate partyScreenClosedDelegate = null)`

**用途 / Purpose:** 处理 `open screen as receive troops` 相关逻辑。

### OpenScreenAsManageTroops
`public static void OpenScreenAsManageTroops(MobileParty leftParty)`

**用途 / Purpose:** 处理 `open screen as manage troops` 相关逻辑。

### OpenScreenAsDonateTroops
`public static void OpenScreenAsDonateTroops(MobileParty leftParty)`

**用途 / Purpose:** 处理 `open screen as donate troops` 相关逻辑。

### OpenScreenAsDonateGarrisonWithCurrentSettlement
`public static void OpenScreenAsDonateGarrisonWithCurrentSettlement()`

**用途 / Purpose:** 处理 `open screen as donate garrison with current settlement` 相关逻辑。

### OpenScreenAsDonatePrisoners
`public static void OpenScreenAsDonatePrisoners()`

**用途 / Purpose:** 处理 `open screen as donate prisoners` 相关逻辑。

### DonatePrisonerTransferableDelegate
`public static bool DonatePrisonerTransferableDelegate(CharacterObject character, PartyScreenLogic.TroopType type, PartyScreenLogic.PartyRosterSide side, PartyBase LeftOwnerParty)`

**用途 / Purpose:** 处理 `donate prisoner transferable delegate` 相关逻辑。

### OpenScreenAsManagePrisoners
`public static void OpenScreenAsManagePrisoners()`

**用途 / Purpose:** 处理 `open screen as manage prisoners` 相关逻辑。

### TroopTransferableDelegate
`public static bool TroopTransferableDelegate(CharacterObject character, PartyScreenLogic.TroopType type, PartyScreenLogic.PartyRosterSide side, PartyBase leftOwnerParty)`

**用途 / Purpose:** 处理 `troop transferable delegate` 相关逻辑。

### ClanManageTroopAndPrisonerTransferableDelegate
`public static bool ClanManageTroopAndPrisonerTransferableDelegate(CharacterObject character, PartyScreenLogic.TroopType type, PartyScreenLogic.PartyRosterSide side, PartyBase LeftOwnerParty)`

**用途 / Purpose:** 处理 `clan manage troop and prisoner transferable delegate` 相关逻辑。

### ClanManageTroopTransferableDelegate
`public static bool ClanManageTroopTransferableDelegate(CharacterObject character, PartyScreenLogic.TroopType type, PartyScreenLogic.PartyRosterSide side, PartyBase LeftOwnerParty)`

**用途 / Purpose:** 处理 `clan manage troop transferable delegate` 相关逻辑。

### DonateModeTroopTransferableDelegate
`public static bool DonateModeTroopTransferableDelegate(CharacterObject character, PartyScreenLogic.TroopType type, PartyScreenLogic.PartyRosterSide side, PartyBase LeftOwnerParty)`

**用途 / Purpose:** 处理 `donate mode troop transferable delegate` 相关逻辑。

### OpenScreenWithCondition
`public static void OpenScreenWithCondition(IsTroopTransferableDelegate isTroopTransferable, PartyPresentationDoneButtonConditionDelegate doneButtonCondition, PartyPresentationDoneButtonDelegate onDoneClicked, PartyPresentationCancelButtonDelegate onCancelClicked, PartyScreenLogic.TransferState memberTransferState, PartyScreenLogic.TransferState prisonerTransferState, TextObject leftPartyName, int limit, bool showProgressBar, bool isDonating, PartyScreenHelper.PartyScreenMode screenMode = PartyScreenHelper.PartyScreenMode.Normal, TroopRoster memberRosterLeft = null, TroopRoster prisonerRosterLeft = null)`

**用途 / Purpose:** 处理 `open screen with condition` 相关逻辑。

### OpenScreenForManagingAlley
`public static void OpenScreenForManagingAlley(bool isNewAlley, TroopRoster memberRosterLeft, IsTroopTransferableDelegate isTroopTransferable, PartyPresentationDoneButtonConditionDelegate doneButtonCondition, PartyPresentationDoneButtonDelegate onDoneClicked, TextObject leftPartyName, PartyPresentationCancelButtonDelegate onCancelButtonClicked)`

**用途 / Purpose:** 处理 `open screen for managing alley` 相关逻辑。

### OpenScreenAsQuest
`public static void OpenScreenAsQuest(TroopRoster leftMemberRoster, TextObject leftPartyName, int leftPartySizeLimit, int questDaysMultiplier, PartyPresentationDoneButtonConditionDelegate doneButtonCondition, PartyScreenClosedDelegate onPartyScreenClosed, IsTroopTransferableDelegate isTroopTransferable, PartyPresentationCancelButtonActivateDelegate partyPresentationCancelButtonActivateDelegate = null)`

**用途 / Purpose:** 处理 `open screen as quest` 相关逻辑。

### OpenScreenWithDummyRoster
`public static void OpenScreenWithDummyRoster(TroopRoster leftMemberRoster, TroopRoster leftPrisonerRoster, TroopRoster rightMemberRoster, TroopRoster rightPrisonerRoster, TextObject leftPartyName, TextObject rightPartyName, int leftPartySizeLimit, int rightPartySizeLimit, PartyPresentationDoneButtonConditionDelegate doneButtonCondition, PartyScreenClosedDelegate onPartyScreenClosed, IsTroopTransferableDelegate isTroopTransferable, CanTalkToHeroDelegate canTalkToTroopDelegate = null, PartyPresentationCancelButtonActivateDelegate partyPresentationCancelButtonActivateDelegate = null)`

**用途 / Purpose:** 处理 `open screen with dummy roster` 相关逻辑。

### OpenScreenWithDummyRosterWithMainParty
`public static void OpenScreenWithDummyRosterWithMainParty(TroopRoster leftMemberRoster, TroopRoster leftPrisonerRoster, TextObject leftPartyName, int leftPartySizeLimit, PartyPresentationDoneButtonConditionDelegate doneButtonCondition, PartyScreenClosedDelegate onPartyScreenClosed, IsTroopTransferableDelegate isTroopTransferable, PartyPresentationCancelButtonActivateDelegate partyPresentationCancelButtonActivateDelegate = null)`

**用途 / Purpose:** 处理 `open screen with dummy roster with main party` 相关逻辑。

### OpenScreenAsCreateClanPartyForHero
`public static void OpenScreenAsCreateClanPartyForHero(Hero hero, PartyScreenClosedDelegate onScreenClosed = null, IsTroopTransferableDelegate isTroopTransferable = null)`

**用途 / Purpose:** 处理 `open screen as create clan party for hero` 相关逻辑。

## 使用示例

```csharp
PartyScreenHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)