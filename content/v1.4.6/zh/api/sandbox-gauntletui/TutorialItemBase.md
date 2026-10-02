---
title: "TutorialItemBase"
description: "TutorialItemBase：SandBox.GauntletUI 的 public 类；公开成员 46 个（方法 43、属性 3、字段 0）。源文件 SandBox.GauntletUI/Tutorial/TutorialItemBase.cs。"
---
# TutorialItemBase

**Namespace:** `SandBox.GauntletUI.Tutorial`
**Module:** `SandBox.GauntletUI`
**Type:** `public abstract class TutorialItemBase`
**File:** `SandBox.GauntletUI/Tutorial/TutorialItemBase.cs`

## 概述

TutorialItemBase 位于 SandBox.GauntletUI 模块，源文件 SandBox.GauntletUI/Tutorial/TutorialItemBase.cs。它是一个 public 类（abstract），继承链为 TutorialItemBase。public/protected 成员共 46 个：43 方法、3 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TutorialItemBase 是 SandBox.GauntletUI 的顶层类型，命名空间与模块目录不同（SandBox.GauntletUI.Tutorial），继承链 TutorialItemBase。成员构成以方法为主（方法 43/46，属性 3/46），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.GauntletUI/Tutorial/TutorialItemBase.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsConditionsMetForCompletion` | `public abstract bool IsConditionsMetForCompletion();` | 方法 |
| `IsConditionsMetForActivation` | `public abstract bool IsConditionsMetForActivation();` | 方法 |
| `GetTutorialsRelevantContext` | `public abstract TutorialContexts GetTutorialsRelevantContext();` | 方法 |
| `Placement` | `public TutorialItemVM.ItemPlacements Placement` | 属性 |
| `MouseRequired` | `public bool MouseRequired` | 属性 |
| `HighlightedVisualElementID` | `public string HighlightedVisualElementID` | 属性 |
| `GetCustomTutorialElementHighlightID` | `protected virtual string GetCustomTutorialElementHighlightID()` | 方法 |
| `OnDeactivate` | `public virtual void OnDeactivate()` | 方法 |
| `IsConditionsMetForVisibility` | `public virtual bool IsConditionsMetForVisibility()` | 方法 |
| `OnInventoryTransferItem` | `public virtual void OnInventoryTransferItem(InventoryTransferItemEvent obj)` | 方法 |
| `OnTutorialContextChanged` | `public virtual void OnTutorialContextChanged(TutorialContextChangedEvent obj)` | 方法 |
| `OnInventoryFilterChanged` | `public virtual void OnInventoryFilterChanged(InventoryFilterChangedEvent obj)` | 方法 |
| `OnPerkSelectedByPlayer` | `public virtual void OnPerkSelectedByPlayer(PerkSelectedByPlayerEvent obj)` | 方法 |
| `OnFocusAddedByPlayer` | `public virtual void OnFocusAddedByPlayer(FocusAddedByPlayerEvent obj)` | 方法 |
| `OnGameMenuOpened` | `public virtual void OnGameMenuOpened(MenuCallbackArgs obj)` | 方法 |
| `OnMainMapCameraMove` | `public virtual void OnMainMapCameraMove(MapScreen.MainMapCameraMoveEvent obj)` | 方法 |
| `OnCharacterPortraitPopUpOpened` | `public virtual void OnCharacterPortraitPopUpOpened(CharacterObject obj)` | 方法 |
| `OnPlayerStartTalkFromMenuOverlay` | `public virtual void OnPlayerStartTalkFromMenuOverlay(Hero obj)` | 方法 |
| `OnGameMenuOptionSelected` | `public virtual void OnGameMenuOptionSelected(GameMenuOption obj)` | 方法 |
| `OnPlayerStartRecruitment` | `public virtual void OnPlayerStartRecruitment(CharacterObject obj)` | 方法 |
| `OnNewCompanionAdded` | `public virtual void OnNewCompanionAdded(Hero obj)` | 方法 |
| `OnPlayerRecruitedUnit` | `public virtual void OnPlayerRecruitedUnit(CharacterObject obj, int count)` | 方法 |
| `OnPlayerInventoryExchange` | `public virtual void OnPlayerInventoryExchange(List<ValueTuple<ItemRosterElement, int>>purchasedItems, List<ValueTuple<ItemRosterElement, int>>soldItems, bool isTrading)` | 方法 |
| `OnMissionNameMarkerToggled` | `public virtual void OnMissionNameMarkerToggled(MissionNameMarkerToggleEvent obj)` | 方法 |
| `OnPlayerToggleTrackSettlementFromEncyclopedia` | `public virtual void OnPlayerToggleTrackSettlementFromEncyclopedia(PlayerToggleTrackSettlementFromEncyclopediaEvent obj)` | 方法 |
| `OnInventoryEquipmentTypeChange` | `public virtual void OnInventoryEquipmentTypeChange(InventoryEquipmentTypeChangedEvent obj)` | 方法 |
| `OnArmyCohesionByPlayerBoosted` | `public virtual void OnArmyCohesionByPlayerBoosted(ArmyCohesionBoostedByPlayerEvent obj)` | 方法 |
| `OnPartyAddedToArmyByPlayer` | `public virtual void OnPartyAddedToArmyByPlayer(PartyAddedToArmyByPlayerEvent obj)` | 方法 |
| `OnPlayerStartEngineConstruction` | `public virtual void OnPlayerStartEngineConstruction(PlayerStartEngineConstructionEvent obj)` | 方法 |
| `OnPlayerUpgradeTroop` | `public virtual void OnPlayerUpgradeTroop(CharacterObject arg1, CharacterObject arg2, int arg3)` | 方法 |
| `OnPlayerMoveTroop` | `public virtual void OnPlayerMoveTroop(PlayerMoveTroopEvent obj)` | 方法 |
| `OnPerkSelectionToggle` | `public virtual void OnPerkSelectionToggle(PerkSelectionToggleEvent obj)` | 方法 |
| `OnPlayerInspectedPartySpeed` | `public virtual void OnPlayerInspectedPartySpeed(PlayerInspectedPartySpeedEvent obj)` | 方法 |
| `OnPlayerMovementFlagChanged` | `public virtual void OnPlayerMovementFlagChanged(MissionPlayerMovementFlagsChangeEvent obj)` | 方法 |
| `OnPlayerToggledUpgradePopup` | `public virtual void OnPlayerToggledUpgradePopup(PlayerToggledUpgradePopupEvent obj)` | 方法 |
| `OnOrderOfBattleHeroAssignedToFormation` | `public virtual void OnOrderOfBattleHeroAssignedToFormation(OrderOfBattleHeroAssignedToFormationEvent obj)` | 方法 |
| `OnOrderOfBattleFormationClassChanged` | `public virtual void OnOrderOfBattleFormationClassChanged(OrderOfBattleFormationClassChangedEvent obj)` | 方法 |
| `OnOrderOfBattleFormationWeightChanged` | `public virtual void OnOrderOfBattleFormationWeightChanged(OrderOfBattleFormationWeightChangedEvent obj)` | 方法 |
| `OnCraftingWeaponClassSelectionOpened` | `public virtual void OnCraftingWeaponClassSelectionOpened(CraftingWeaponClassSelectionOpenedEvent obj)` | 方法 |
| `OnCraftingOnWeaponResultPopupOpened` | `public virtual void OnCraftingOnWeaponResultPopupOpened(CraftingWeaponResultPopupToggledEvent obj)` | 方法 |
| `OnCraftingOrderTabOpened` | `public virtual void OnCraftingOrderTabOpened(CraftingOrderTabOpenedEvent obj)` | 方法 |
| `OnCraftingOrderSelectionOpened` | `public virtual void OnCraftingOrderSelectionOpened(CraftingOrderSelectionOpenedEvent obj)` | 方法 |
| `OnInventoryItemInspected` | `public virtual void OnInventoryItemInspected(InventoryItemInspectedEvent obj)` | 方法 |
| `OnCrimeValueInspectedInSettlementOverlay` | `public virtual void OnCrimeValueInspectedInSettlementOverlay(CrimeValueInspectedInSettlementOverlayEvent obj)` | 方法 |
| `OnClanRoleAssignedThroughClanScreen` | `public virtual void OnClanRoleAssignedThroughClanScreen(ClanRoleAssignedThroughClanScreenEvent obj)` | 方法 |
| `OnPlayerSelectedAKingdomDecisionOption` | `public virtual void OnPlayerSelectedAKingdomDecisionOption(PlayerSelectedAKingdomDecisionOptionEvent obj)` | 方法 |

## 参见

- [↑ sandbox-gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 GauntletTutorialSystem](../GauntletTutorialSystem)
- [同命名空间 TutorialAttribute](../TutorialAttribute)
- [同命名空间 TutorialHelper](../TutorialHelper)
