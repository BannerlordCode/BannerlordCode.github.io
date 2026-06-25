---
title: "PartyScreenHelper"
description: "PartyScreenHelper 的自动生成类参考。"
---
# PartyScreenHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class PartyScreenHelper`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/Helpers/PartyScreenHelper.cs`

## 概述

`PartyScreenHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `PartyScreenHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetActivePartyState
`public static PartyState GetActivePartyState()`

**用途 / Purpose:** 读取并返回当前对象中 「active party state」 的结果。

```csharp
// 静态调用，不需要实例
PartyScreenHelper.GetActivePartyState();
```

### CloseScreen
`public static void CloseScreen(bool isForced, bool fromCancel = false)`

**用途 / Purpose:** 关闭「screen」对应的资源或界面。

```csharp
// 静态调用，不需要实例
PartyScreenHelper.CloseScreen(false, false);
```

### OpenScreenAsCheat
`public static void OpenScreenAsCheat()`

**用途 / Purpose:** 打开「screen as cheat」对应的资源或界面。

```csharp
// 静态调用，不需要实例
PartyScreenHelper.OpenScreenAsCheat();
```

### OpenScreenAsNormal
`public static void OpenScreenAsNormal()`

**用途 / Purpose:** 打开「screen as normal」对应的资源或界面。

```csharp
// 静态调用，不需要实例
PartyScreenHelper.OpenScreenAsNormal();
```

### OpenScreenAsRansom
`public static void OpenScreenAsRansom()`

**用途 / Purpose:** 打开「screen as ransom」对应的资源或界面。

```csharp
// 静态调用，不需要实例
PartyScreenHelper.OpenScreenAsRansom();
```

### OpenScreenAsLoot
`public static void OpenScreenAsLoot(TroopRoster leftMemberRoster, TroopRoster leftPrisonerRoster, TextObject leftPartyName, int leftPartySizeLimit, PartyScreenClosedDelegate partyScreenClosedDelegate = null)`

**用途 / Purpose:** 打开「screen as loot」对应的资源或界面。

```csharp
// 静态调用，不需要实例
PartyScreenHelper.OpenScreenAsLoot(leftMemberRoster, leftPrisonerRoster, leftPartyName, 0, null);
```

### OpenScreenAsManageTroopsAndPrisoners
`public static void OpenScreenAsManageTroopsAndPrisoners(MobileParty leftParty, PartyScreenClosedDelegate onPartyScreenClosed = null)`

**用途 / Purpose:** 打开「screen as manage troops and prisoners」对应的资源或界面。

```csharp
// 静态调用，不需要实例
PartyScreenHelper.OpenScreenAsManageTroopsAndPrisoners(leftParty, null);
```

### OpenScreenAsManagePlayerClanPartyClosed
`public static void OpenScreenAsManagePlayerClanPartyClosed(PartyBase leftOwnerParty, TroopRoster leftMemberRoster, TroopRoster leftPrisonRoster, PartyBase rightOwnerParty, TroopRoster rightMemberRoster, TroopRoster rightPrisonRoster, bool fromCancel)`

**用途 / Purpose:** 打开「screen as manage player clan party closed」对应的资源或界面。

```csharp
// 静态调用，不需要实例
PartyScreenHelper.OpenScreenAsManagePlayerClanPartyClosed(leftOwnerParty, leftMemberRoster, leftPrisonRoster, rightOwnerParty, rightMemberRoster, rightPrisonRoster, false);
```

### OpenScreenAsReceiveTroops
`public static void OpenScreenAsReceiveTroops(TroopRoster leftMemberParty, TextObject leftPartyName, PartyScreenClosedDelegate partyScreenClosedDelegate = null)`

**用途 / Purpose:** 打开「screen as receive troops」对应的资源或界面。

```csharp
// 静态调用，不需要实例
PartyScreenHelper.OpenScreenAsReceiveTroops(leftMemberParty, leftPartyName, null);
```

### OpenScreenAsManageTroops
`public static void OpenScreenAsManageTroops(MobileParty leftParty)`

**用途 / Purpose:** 打开「screen as manage troops」对应的资源或界面。

```csharp
// 静态调用，不需要实例
PartyScreenHelper.OpenScreenAsManageTroops(leftParty);
```

### OpenScreenAsDonateTroops
`public static void OpenScreenAsDonateTroops(MobileParty leftParty)`

**用途 / Purpose:** 打开「screen as donate troops」对应的资源或界面。

```csharp
// 静态调用，不需要实例
PartyScreenHelper.OpenScreenAsDonateTroops(leftParty);
```

### OpenScreenAsDonateGarrisonWithCurrentSettlement
`public static void OpenScreenAsDonateGarrisonWithCurrentSettlement()`

**用途 / Purpose:** 打开「screen as donate garrison with current settlement」对应的资源或界面。

```csharp
// 静态调用，不需要实例
PartyScreenHelper.OpenScreenAsDonateGarrisonWithCurrentSettlement();
```

### OpenScreenAsDonatePrisoners
`public static void OpenScreenAsDonatePrisoners()`

**用途 / Purpose:** 打开「screen as donate prisoners」对应的资源或界面。

```csharp
// 静态调用，不需要实例
PartyScreenHelper.OpenScreenAsDonatePrisoners();
```

### DonatePrisonerTransferableDelegate
`public static bool DonatePrisonerTransferableDelegate(CharacterObject character, PartyScreenLogic.TroopType type, PartyScreenLogic.PartyRosterSide side, PartyBase LeftOwnerParty)`

**用途 / Purpose:** 处理与 「donate prisoner transferable delegate」 相关的逻辑。

```csharp
// 静态调用，不需要实例
PartyScreenHelper.DonatePrisonerTransferableDelegate(character, type, side, leftOwnerParty);
```

### OpenScreenAsManagePrisoners
`public static void OpenScreenAsManagePrisoners()`

**用途 / Purpose:** 打开「screen as manage prisoners」对应的资源或界面。

```csharp
// 静态调用，不需要实例
PartyScreenHelper.OpenScreenAsManagePrisoners();
```

### TroopTransferableDelegate
`public static bool TroopTransferableDelegate(CharacterObject character, PartyScreenLogic.TroopType type, PartyScreenLogic.PartyRosterSide side, PartyBase leftOwnerParty)`

**用途 / Purpose:** 处理与 「troop transferable delegate」 相关的逻辑。

```csharp
// 静态调用，不需要实例
PartyScreenHelper.TroopTransferableDelegate(character, type, side, leftOwnerParty);
```

### ClanManageTroopAndPrisonerTransferableDelegate
`public static bool ClanManageTroopAndPrisonerTransferableDelegate(CharacterObject character, PartyScreenLogic.TroopType type, PartyScreenLogic.PartyRosterSide side, PartyBase LeftOwnerParty)`

**用途 / Purpose:** 处理与 「clan manage troop and prisoner transferable delegate」 相关的逻辑。

```csharp
// 静态调用，不需要实例
PartyScreenHelper.ClanManageTroopAndPrisonerTransferableDelegate(character, type, side, leftOwnerParty);
```

### ClanManageTroopTransferableDelegate
`public static bool ClanManageTroopTransferableDelegate(CharacterObject character, PartyScreenLogic.TroopType type, PartyScreenLogic.PartyRosterSide side, PartyBase LeftOwnerParty)`

**用途 / Purpose:** 处理与 「clan manage troop transferable delegate」 相关的逻辑。

```csharp
// 静态调用，不需要实例
PartyScreenHelper.ClanManageTroopTransferableDelegate(character, type, side, leftOwnerParty);
```

### DonateModeTroopTransferableDelegate
`public static bool DonateModeTroopTransferableDelegate(CharacterObject character, PartyScreenLogic.TroopType type, PartyScreenLogic.PartyRosterSide side, PartyBase LeftOwnerParty)`

**用途 / Purpose:** 处理与 「donate mode troop transferable delegate」 相关的逻辑。

```csharp
// 静态调用，不需要实例
PartyScreenHelper.DonateModeTroopTransferableDelegate(character, type, side, leftOwnerParty);
```

### OpenScreenWithCondition
`public static void OpenScreenWithCondition(IsTroopTransferableDelegate isTroopTransferable, PartyPresentationDoneButtonConditionDelegate doneButtonCondition, PartyPresentationDoneButtonDelegate onDoneClicked, PartyPresentationCancelButtonDelegate onCancelClicked, PartyScreenLogic.TransferState memberTransferState, PartyScreenLogic.TransferState prisonerTransferState, TextObject leftPartyName, int limit, bool showProgressBar, bool isDonating, PartyScreenMode screenMode = PartyScreenMode.Normal, TroopRoster memberRosterLeft = null, TroopRoster prisonerRosterLeft = null)`

**用途 / Purpose:** 打开「screen with condition」对应的资源或界面。

```csharp
// 静态调用，不需要实例
PartyScreenHelper.OpenScreenWithCondition(isTroopTransferable, doneButtonCondition, onDoneClicked, onCancelClicked, memberTransferState, prisonerTransferState, leftPartyName, 0, false, false, partyScreenMode.Normal, null, null);
```

### OpenScreenForManagingAlley
`public static void OpenScreenForManagingAlley(bool isNewAlley, TroopRoster memberRosterLeft, IsTroopTransferableDelegate isTroopTransferable, PartyPresentationDoneButtonConditionDelegate doneButtonCondition, PartyPresentationDoneButtonDelegate onDoneClicked, TextObject leftPartyName, PartyPresentationCancelButtonDelegate onCancelButtonClicked)`

**用途 / Purpose:** 打开「screen for managing alley」对应的资源或界面。

```csharp
// 静态调用，不需要实例
PartyScreenHelper.OpenScreenForManagingAlley(false, memberRosterLeft, isTroopTransferable, doneButtonCondition, onDoneClicked, leftPartyName, onCancelButtonClicked);
```

### OpenScreenAsQuest
`public static void OpenScreenAsQuest(TroopRoster leftMemberRoster, TextObject leftPartyName, int leftPartySizeLimit, int questDaysMultiplier, PartyPresentationDoneButtonConditionDelegate doneButtonCondition, PartyScreenClosedDelegate onPartyScreenClosed, IsTroopTransferableDelegate isTroopTransferable, PartyPresentationCancelButtonActivateDelegate partyPresentationCancelButtonActivateDelegate = null)`

**用途 / Purpose:** 打开「screen as quest」对应的资源或界面。

```csharp
// 静态调用，不需要实例
PartyScreenHelper.OpenScreenAsQuest(leftMemberRoster, leftPartyName, 0, 0, doneButtonCondition, onPartyScreenClosed, isTroopTransferable, null);
```

### OpenScreenWithDummyRoster
`public static void OpenScreenWithDummyRoster(TroopRoster leftMemberRoster, TroopRoster leftPrisonerRoster, TroopRoster rightMemberRoster, TroopRoster rightPrisonerRoster, TextObject leftPartyName, TextObject rightPartyName, int leftPartySizeLimit, int rightPartySizeLimit, PartyPresentationDoneButtonConditionDelegate doneButtonCondition, PartyScreenClosedDelegate onPartyScreenClosed, IsTroopTransferableDelegate isTroopTransferable, CanTalkToHeroDelegate canTalkToTroopDelegate = null, PartyPresentationCancelButtonActivateDelegate partyPresentationCancelButtonActivateDelegate = null)`

**用途 / Purpose:** 打开「screen with dummy roster」对应的资源或界面。

```csharp
// 静态调用，不需要实例
PartyScreenHelper.OpenScreenWithDummyRoster(leftMemberRoster, leftPrisonerRoster, rightMemberRoster, rightPrisonerRoster, leftPartyName, rightPartyName, 0, 0, doneButtonCondition, onPartyScreenClosed, isTroopTransferable, null, null);
```

### OpenScreenWithDummyRosterWithMainParty
`public static void OpenScreenWithDummyRosterWithMainParty(TroopRoster leftMemberRoster, TroopRoster leftPrisonerRoster, TextObject leftPartyName, int leftPartySizeLimit, PartyPresentationDoneButtonConditionDelegate doneButtonCondition, PartyScreenClosedDelegate onPartyScreenClosed, IsTroopTransferableDelegate isTroopTransferable, PartyPresentationCancelButtonActivateDelegate partyPresentationCancelButtonActivateDelegate = null)`

**用途 / Purpose:** 打开「screen with dummy roster with main party」对应的资源或界面。

```csharp
// 静态调用，不需要实例
PartyScreenHelper.OpenScreenWithDummyRosterWithMainParty(leftMemberRoster, leftPrisonerRoster, leftPartyName, 0, doneButtonCondition, onPartyScreenClosed, isTroopTransferable, null);
```

### OpenScreenAsCreateClanPartyForHero
`public static void OpenScreenAsCreateClanPartyForHero(Hero hero, PartyScreenClosedDelegate onScreenClosed = null, IsTroopTransferableDelegate isTroopTransferable = null)`

**用途 / Purpose:** 打开「screen as create clan party for hero」对应的资源或界面。

```csharp
// 静态调用，不需要实例
PartyScreenHelper.OpenScreenAsCreateClanPartyForHero(hero, null, null);
```

## 使用示例

```csharp
PartyScreenHelper.Initialize();
```

## 参见

- [本区域目录](../)