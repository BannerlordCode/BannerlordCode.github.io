---
title: "TutorialItemBase"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TutorialItemBase`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TutorialItemBase

**Namespace:** SandBox.GauntletUI.Tutorial
**Module:** SandBox.GauntletUI
**Type:** `public abstract class TutorialItemBase`
**Base:** 无
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Tutorial/TutorialItemBase.cs`

## 概述

`TutorialItemBase` 位于 `SandBox.GauntletUI.Tutorial`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.GauntletUI.Tutorial` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Placement` | `public TutorialItemVM.ItemPlacements Placement { get; set; }` |
| `MouseRequired` | `public bool MouseRequired { get; set; }` |
| `HighlightedVisualElementID` | `public string HighlightedVisualElementID { get; set; }` |

## 主要方法

### IsConditionsMetForCompletion
`public abstract bool IsConditionsMetForCompletion()`

**用途 / Purpose:** 处理 `is conditions met for completion` 相关逻辑。

### IsConditionsMetForActivation
`public abstract bool IsConditionsMetForActivation()`

**用途 / Purpose:** 处理 `is conditions met for activation` 相关逻辑。

### GetTutorialsRelevantContext
`public abstract TutorialContexts GetTutorialsRelevantContext()`

**用途 / Purpose:** 获取 `tutorials relevant context` 的当前值。

### OnDeactivate
`public virtual void OnDeactivate()`

**用途 / Purpose:** 当 `deactivate` 事件触发时调用此方法。

### IsConditionsMetForVisibility
`public virtual bool IsConditionsMetForVisibility()`

**用途 / Purpose:** 处理 `is conditions met for visibility` 相关逻辑。

### OnInventoryTransferItem
`public virtual void OnInventoryTransferItem(InventoryTransferItemEvent obj)`

**用途 / Purpose:** 当 `inventory transfer item` 事件触发时调用此方法。

### OnTutorialContextChanged
`public virtual void OnTutorialContextChanged(TutorialContextChangedEvent obj)`

**用途 / Purpose:** 当 `tutorial context changed` 事件触发时调用此方法。

### OnInventoryFilterChanged
`public virtual void OnInventoryFilterChanged(InventoryFilterChangedEvent obj)`

**用途 / Purpose:** 当 `inventory filter changed` 事件触发时调用此方法。

### OnPerkSelectedByPlayer
`public virtual void OnPerkSelectedByPlayer(PerkSelectedByPlayerEvent obj)`

**用途 / Purpose:** 当 `perk selected by player` 事件触发时调用此方法。

### OnFocusAddedByPlayer
`public virtual void OnFocusAddedByPlayer(FocusAddedByPlayerEvent obj)`

**用途 / Purpose:** 当 `focus added by player` 事件触发时调用此方法。

### OnGameMenuOpened
`public virtual void OnGameMenuOpened(MenuCallbackArgs obj)`

**用途 / Purpose:** 当 `game menu opened` 事件触发时调用此方法。

### OnMainMapCameraMove
`public virtual void OnMainMapCameraMove(MapScreen.MainMapCameraMoveEvent obj)`

**用途 / Purpose:** 当 `main map camera move` 事件触发时调用此方法。

### OnCharacterPortraitPopUpOpened
`public virtual void OnCharacterPortraitPopUpOpened(CharacterObject obj)`

**用途 / Purpose:** 当 `character portrait pop up opened` 事件触发时调用此方法。

### OnPlayerStartTalkFromMenuOverlay
`public virtual void OnPlayerStartTalkFromMenuOverlay(Hero obj)`

**用途 / Purpose:** 当 `player start talk from menu overlay` 事件触发时调用此方法。

### OnGameMenuOptionSelected
`public virtual void OnGameMenuOptionSelected(GameMenuOption obj)`

**用途 / Purpose:** 当 `game menu option selected` 事件触发时调用此方法。

### OnPlayerStartRecruitment
`public virtual void OnPlayerStartRecruitment(CharacterObject obj)`

**用途 / Purpose:** 当 `player start recruitment` 事件触发时调用此方法。

### OnNewCompanionAdded
`public virtual void OnNewCompanionAdded(Hero obj)`

**用途 / Purpose:** 当 `new companion added` 事件触发时调用此方法。

### OnPlayerRecruitedUnit
`public virtual void OnPlayerRecruitedUnit(CharacterObject obj, int count)`

**用途 / Purpose:** 当 `player recruited unit` 事件触发时调用此方法。

### OnPlayerInventoryExchange
`public virtual void OnPlayerInventoryExchange(List<(ItemRosterElement, int)> purchasedItems, List<(ItemRosterElement, int)> soldItems, bool isTrading)`

**用途 / Purpose:** 当 `player inventory exchange` 事件触发时调用此方法。

### OnMissionNameMarkerToggled
`public virtual void OnMissionNameMarkerToggled(MissionNameMarkerToggleEvent obj)`

**用途 / Purpose:** 当 `mission name marker toggled` 事件触发时调用此方法。

### OnPlayerToggleTrackSettlementFromEncyclopedia
`public virtual void OnPlayerToggleTrackSettlementFromEncyclopedia(PlayerToggleTrackSettlementFromEncyclopediaEvent obj)`

**用途 / Purpose:** 当 `player toggle track settlement from encyclopedia` 事件触发时调用此方法。

### OnInventoryEquipmentTypeChange
`public virtual void OnInventoryEquipmentTypeChange(InventoryEquipmentTypeChangedEvent obj)`

**用途 / Purpose:** 当 `inventory equipment type change` 事件触发时调用此方法。

### OnArmyCohesionByPlayerBoosted
`public virtual void OnArmyCohesionByPlayerBoosted(ArmyCohesionBoostedByPlayerEvent obj)`

**用途 / Purpose:** 当 `army cohesion by player boosted` 事件触发时调用此方法。

### OnPartyAddedToArmyByPlayer
`public virtual void OnPartyAddedToArmyByPlayer(PartyAddedToArmyByPlayerEvent obj)`

**用途 / Purpose:** 当 `party added to army by player` 事件触发时调用此方法。

### OnPlayerStartEngineConstruction
`public virtual void OnPlayerStartEngineConstruction(PlayerStartEngineConstructionEvent obj)`

**用途 / Purpose:** 当 `player start engine construction` 事件触发时调用此方法。

### OnPlayerUpgradeTroop
`public virtual void OnPlayerUpgradeTroop(CharacterObject arg1, CharacterObject arg2, int arg3)`

**用途 / Purpose:** 当 `player upgrade troop` 事件触发时调用此方法。

### OnPlayerMoveTroop
`public virtual void OnPlayerMoveTroop(PlayerMoveTroopEvent obj)`

**用途 / Purpose:** 当 `player move troop` 事件触发时调用此方法。

### OnPerkSelectionToggle
`public virtual void OnPerkSelectionToggle(PerkSelectionToggleEvent obj)`

**用途 / Purpose:** 当 `perk selection toggle` 事件触发时调用此方法。

### OnPlayerInspectedPartySpeed
`public virtual void OnPlayerInspectedPartySpeed(PlayerInspectedPartySpeedEvent obj)`

**用途 / Purpose:** 当 `player inspected party speed` 事件触发时调用此方法。

### OnPlayerMovementFlagChanged
`public virtual void OnPlayerMovementFlagChanged(MissionPlayerMovementFlagsChangeEvent obj)`

**用途 / Purpose:** 当 `player movement flag changed` 事件触发时调用此方法。

### OnPlayerToggledUpgradePopup
`public virtual void OnPlayerToggledUpgradePopup(PlayerToggledUpgradePopupEvent obj)`

**用途 / Purpose:** 当 `player toggled upgrade popup` 事件触发时调用此方法。

### OnOrderOfBattleHeroAssignedToFormation
`public virtual void OnOrderOfBattleHeroAssignedToFormation(OrderOfBattleHeroAssignedToFormationEvent obj)`

**用途 / Purpose:** 当 `order of battle hero assigned to formation` 事件触发时调用此方法。

### OnOrderOfBattleFormationClassChanged
`public virtual void OnOrderOfBattleFormationClassChanged(OrderOfBattleFormationClassChangedEvent obj)`

**用途 / Purpose:** 当 `order of battle formation class changed` 事件触发时调用此方法。

### OnOrderOfBattleFormationWeightChanged
`public virtual void OnOrderOfBattleFormationWeightChanged(OrderOfBattleFormationWeightChangedEvent obj)`

**用途 / Purpose:** 当 `order of battle formation weight changed` 事件触发时调用此方法。

### OnCraftingWeaponClassSelectionOpened
`public virtual void OnCraftingWeaponClassSelectionOpened(CraftingWeaponClassSelectionOpenedEvent obj)`

**用途 / Purpose:** 当 `crafting weapon class selection opened` 事件触发时调用此方法。

### OnCraftingOnWeaponResultPopupOpened
`public virtual void OnCraftingOnWeaponResultPopupOpened(CraftingWeaponResultPopupToggledEvent obj)`

**用途 / Purpose:** 当 `crafting on weapon result popup opened` 事件触发时调用此方法。

### OnCraftingOrderTabOpened
`public virtual void OnCraftingOrderTabOpened(CraftingOrderTabOpenedEvent obj)`

**用途 / Purpose:** 当 `crafting order tab opened` 事件触发时调用此方法。

### OnCraftingOrderSelectionOpened
`public virtual void OnCraftingOrderSelectionOpened(CraftingOrderSelectionOpenedEvent obj)`

**用途 / Purpose:** 当 `crafting order selection opened` 事件触发时调用此方法。

### OnInventoryItemInspected
`public virtual void OnInventoryItemInspected(InventoryItemInspectedEvent obj)`

**用途 / Purpose:** 当 `inventory item inspected` 事件触发时调用此方法。

### OnCrimeValueInspectedInSettlementOverlay
`public virtual void OnCrimeValueInspectedInSettlementOverlay(CrimeValueInspectedInSettlementOverlayEvent obj)`

**用途 / Purpose:** 当 `crime value inspected in settlement overlay` 事件触发时调用此方法。

### OnClanRoleAssignedThroughClanScreen
`public virtual void OnClanRoleAssignedThroughClanScreen(ClanRoleAssignedThroughClanScreenEvent obj)`

**用途 / Purpose:** 当 `clan role assigned through clan screen` 事件触发时调用此方法。

### OnPlayerSelectedAKingdomDecisionOption
`public virtual void OnPlayerSelectedAKingdomDecisionOption(PlayerSelectedAKingdomDecisionOptionEvent obj)`

**用途 / Purpose:** 当 `player selected a kingdom decision option` 事件触发时调用此方法。

## 使用示例

```csharp
var implementation = new CustomTutorialItemBase();
```

## 参见

- [完整类目录](../catalog)