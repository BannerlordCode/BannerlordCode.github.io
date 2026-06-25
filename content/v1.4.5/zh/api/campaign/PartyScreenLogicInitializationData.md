---
title: "PartyScreenLogicInitializationData"
description: "PartyScreenLogicInitializationData 的自动生成类参考。"
---
# PartyScreenLogicInitializationData

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct PartyScreenLogicInitializationData`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party/PartyScreenLogicInitializationData.cs`

## 概述

`PartyScreenLogicInitializationData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `PartyScreenLogicInitializationData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CreateBasicInitDataWithMainParty
`public static PartyScreenLogicInitializationData CreateBasicInitDataWithMainParty(TroopRoster leftMemberRoster, TroopRoster leftPrisonerRoster, PartyScreenLogic.TransferState memberTransferState, PartyScreenLogic.TransferState prisonerTransferState, PartyScreenLogic.TransferState accompanyingTransferState, IsTroopTransferableDelegate troopTransferableDelegate, PartyScreenHelper.PartyScreenMode partyScreenMode, PartyBase leftOwnerParty = null, TextObject leftPartyName = null, TextObject header = null, Hero leftLeaderHero = null, int leftPartyMembersSizeLimit = 0, int leftPartyPrisonersSizeLimit = 0, PartyPresentationDoneButtonDelegate partyPresentationDoneButtonDelegate = null, PartyPresentationDoneButtonConditionDelegate partyPresentationDoneButtonConditionDelegate = null, PartyPresentationCancelButtonDelegate partyPresentationCancelButtonDelegate = null, PartyPresentationCancelButtonActivateDelegate partyPresentationCancelButtonActivateDelegate = null, PartyScreenClosedDelegate partyScreenClosedDelegate = null, bool isDismissMode = false, bool transferHealthiesGetWoundedsFirst = false, bool isTroopUpgradesDisabled = false, bool showProgressBar = false, int questModeWageDaysMultiplier = 0)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 basic init data with main party 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
PartyScreenLogicInitializationData.CreateBasicInitDataWithMainParty(leftMemberRoster, leftPrisonerRoster, memberTransferState, prisonerTransferState, accompanyingTransferState, troopTransferableDelegate, partyScreenMode, null, null, null, null, 0, 0, null, null, null, null, null, false, false, false, false, 0);
```

### CreateBasicInitDataWithMainPartyAndOther
`public static PartyScreenLogicInitializationData CreateBasicInitDataWithMainPartyAndOther(MobileParty party, PartyScreenLogic.TransferState memberTransferState, PartyScreenLogic.TransferState prisonerTransferState, PartyScreenLogic.TransferState accompanyingTransferState, IsTroopTransferableDelegate troopTransferableDelegate, PartyScreenHelper.PartyScreenMode partyScreenMode, TextObject header = null, PartyPresentationDoneButtonDelegate partyPresentationDoneButtonDelegate = null, PartyPresentationDoneButtonConditionDelegate partyPresentationDoneButtonConditionDelegate = null, PartyPresentationCancelButtonDelegate partyPresentationCancelButtonDelegate = null, PartyPresentationCancelButtonActivateDelegate partyPresentationCancelButtonActivateDelegate = null, PartyScreenClosedDelegate partyScreenClosedDelegate = null, bool isDismissMode = false, bool transferHealthiesGetWoundedsFirst = false, bool isTroopUpgradesDisabled = true, bool showProgressBar = false)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 basic init data with main party and other 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
PartyScreenLogicInitializationData.CreateBasicInitDataWithMainPartyAndOther(party, memberTransferState, prisonerTransferState, accompanyingTransferState, troopTransferableDelegate, partyScreenMode, null, null, null, null, null, null, false, false, false, false);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
PartyScreenLogicInitializationData entry = ...;
```

## 参见

- [本区域目录](../)