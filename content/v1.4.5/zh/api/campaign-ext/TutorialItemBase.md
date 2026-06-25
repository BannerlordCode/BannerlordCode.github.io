---
title: "TutorialItemBase"
description: "TutorialItemBase 的自动生成类参考。"
---
# TutorialItemBase

**Namespace:** SandBox.GauntletUI.Tutorial
**Module:** SandBox.GauntletUI
**Type:** `public abstract class TutorialItemBase`
**Base:** 无
**File:** `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Tutorial/TutorialItemBase.cs`

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

**用途 / Purpose:** 判断当前对象是否处于 conditions met for completion 状态或条件。

```csharp
// 先通过子系统 API 拿到 TutorialItemBase 实例
TutorialItemBase tutorialItemBase = ...;
var result = tutorialItemBase.IsConditionsMetForCompletion();
```

### IsConditionsMetForActivation
`public abstract bool IsConditionsMetForActivation()`

**用途 / Purpose:** 判断当前对象是否处于 conditions met for activation 状态或条件。

```csharp
// 先通过子系统 API 拿到 TutorialItemBase 实例
TutorialItemBase tutorialItemBase = ...;
var result = tutorialItemBase.IsConditionsMetForActivation();
```

### GetTutorialsRelevantContext
`public abstract TutorialContexts GetTutorialsRelevantContext()`

**用途 / Purpose:** 读取并返回当前对象中 tutorials relevant context 的结果。

```csharp
// 先通过子系统 API 拿到 TutorialItemBase 实例
TutorialItemBase tutorialItemBase = ...;
var result = tutorialItemBase.GetTutorialsRelevantContext();
```

### OnDeactivate
`public virtual void OnDeactivate()`

**用途 / Purpose:** 在 deactivate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TutorialItemBase 实例
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnDeactivate();
```

### IsConditionsMetForVisibility
`public virtual bool IsConditionsMetForVisibility()`

**用途 / Purpose:** 判断当前对象是否处于 conditions met for visibility 状态或条件。

```csharp
// 先通过子系统 API 拿到 TutorialItemBase 实例
TutorialItemBase tutorialItemBase = ...;
var result = tutorialItemBase.IsConditionsMetForVisibility();
```

### OnInventoryTransferItem
`public virtual void OnInventoryTransferItem(InventoryTransferItemEvent obj)`

**用途 / Purpose:** 在 inventory transfer item 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TutorialItemBase 实例
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnInventoryTransferItem(obj);
```

### OnTutorialContextChanged
`public virtual void OnTutorialContextChanged(TutorialContextChangedEvent obj)`

**用途 / Purpose:** 在 tutorial context changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TutorialItemBase 实例
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnTutorialContextChanged(obj);
```

### OnInventoryFilterChanged
`public virtual void OnInventoryFilterChanged(InventoryFilterChangedEvent obj)`

**用途 / Purpose:** 在 inventory filter changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TutorialItemBase 实例
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnInventoryFilterChanged(obj);
```

### OnPerkSelectedByPlayer
`public virtual void OnPerkSelectedByPlayer(PerkSelectedByPlayerEvent obj)`

**用途 / Purpose:** 在 perk selected by player 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TutorialItemBase 实例
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnPerkSelectedByPlayer(obj);
```

### OnFocusAddedByPlayer
`public virtual void OnFocusAddedByPlayer(FocusAddedByPlayerEvent obj)`

**用途 / Purpose:** 在 focus added by player 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TutorialItemBase 实例
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnFocusAddedByPlayer(obj);
```

### OnGameMenuOpened
`public virtual void OnGameMenuOpened(MenuCallbackArgs obj)`

**用途 / Purpose:** 在 game menu opened 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TutorialItemBase 实例
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnGameMenuOpened(obj);
```

### OnMainMapCameraMove
`public virtual void OnMainMapCameraMove(MapScreen.MainMapCameraMoveEvent obj)`

**用途 / Purpose:** 在 main map camera move 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TutorialItemBase 实例
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnMainMapCameraMove(obj);
```

### OnCharacterPortraitPopUpOpened
`public virtual void OnCharacterPortraitPopUpOpened(CharacterObject obj)`

**用途 / Purpose:** 在 character portrait pop up opened 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TutorialItemBase 实例
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnCharacterPortraitPopUpOpened(obj);
```

### OnPlayerStartTalkFromMenuOverlay
`public virtual void OnPlayerStartTalkFromMenuOverlay(Hero obj)`

**用途 / Purpose:** 在 player start talk from menu overlay 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TutorialItemBase 实例
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnPlayerStartTalkFromMenuOverlay(obj);
```

### OnGameMenuOptionSelected
`public virtual void OnGameMenuOptionSelected(GameMenuOption obj)`

**用途 / Purpose:** 在 game menu option selected 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TutorialItemBase 实例
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnGameMenuOptionSelected(obj);
```

### OnPlayerStartRecruitment
`public virtual void OnPlayerStartRecruitment(CharacterObject obj)`

**用途 / Purpose:** 在 player start recruitment 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TutorialItemBase 实例
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnPlayerStartRecruitment(obj);
```

### OnNewCompanionAdded
`public virtual void OnNewCompanionAdded(Hero obj)`

**用途 / Purpose:** 在 new companion added 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TutorialItemBase 实例
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnNewCompanionAdded(obj);
```

### OnPlayerRecruitedUnit
`public virtual void OnPlayerRecruitedUnit(CharacterObject obj, int count)`

**用途 / Purpose:** 在 player recruited unit 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TutorialItemBase 实例
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnPlayerRecruitedUnit(obj, 0);
```

### OnPlayerInventoryExchange
`public virtual void OnPlayerInventoryExchange(List<(ItemRosterElement, int)> purchasedItems, List<(ItemRosterElement, int)> soldItems, bool isTrading)`

**用途 / Purpose:** 在 player inventory exchange 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TutorialItemBase 实例
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnPlayerInventoryExchange(list<(ItemRosterElement, 0, list<(ItemRosterElement, 0, false);
```

### OnMissionNameMarkerToggled
`public virtual void OnMissionNameMarkerToggled(MissionNameMarkerToggleEvent obj)`

**用途 / Purpose:** 在 mission name marker toggled 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TutorialItemBase 实例
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnMissionNameMarkerToggled(obj);
```

### OnPlayerToggleTrackSettlementFromEncyclopedia
`public virtual void OnPlayerToggleTrackSettlementFromEncyclopedia(PlayerToggleTrackSettlementFromEncyclopediaEvent obj)`

**用途 / Purpose:** 在 player toggle track settlement from encyclopedia 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TutorialItemBase 实例
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnPlayerToggleTrackSettlementFromEncyclopedia(obj);
```

### OnInventoryEquipmentTypeChange
`public virtual void OnInventoryEquipmentTypeChange(InventoryEquipmentTypeChangedEvent obj)`

**用途 / Purpose:** 在 inventory equipment type change 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TutorialItemBase 实例
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnInventoryEquipmentTypeChange(obj);
```

### OnArmyCohesionByPlayerBoosted
`public virtual void OnArmyCohesionByPlayerBoosted(ArmyCohesionBoostedByPlayerEvent obj)`

**用途 / Purpose:** 在 army cohesion by player boosted 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TutorialItemBase 实例
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnArmyCohesionByPlayerBoosted(obj);
```

### OnPartyAddedToArmyByPlayer
`public virtual void OnPartyAddedToArmyByPlayer(PartyAddedToArmyByPlayerEvent obj)`

**用途 / Purpose:** 在 party added to army by player 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TutorialItemBase 实例
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnPartyAddedToArmyByPlayer(obj);
```

### OnPlayerStartEngineConstruction
`public virtual void OnPlayerStartEngineConstruction(PlayerStartEngineConstructionEvent obj)`

**用途 / Purpose:** 在 player start engine construction 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TutorialItemBase 实例
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnPlayerStartEngineConstruction(obj);
```

### OnPlayerUpgradeTroop
`public virtual void OnPlayerUpgradeTroop(CharacterObject arg1, CharacterObject arg2, int arg3)`

**用途 / Purpose:** 在 player upgrade troop 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TutorialItemBase 实例
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnPlayerUpgradeTroop(arg1, arg2, 0);
```

### OnPlayerMoveTroop
`public virtual void OnPlayerMoveTroop(PlayerMoveTroopEvent obj)`

**用途 / Purpose:** 在 player move troop 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TutorialItemBase 实例
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnPlayerMoveTroop(obj);
```

### OnPerkSelectionToggle
`public virtual void OnPerkSelectionToggle(PerkSelectionToggleEvent obj)`

**用途 / Purpose:** 在 perk selection toggle 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TutorialItemBase 实例
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnPerkSelectionToggle(obj);
```

### OnPlayerInspectedPartySpeed
`public virtual void OnPlayerInspectedPartySpeed(PlayerInspectedPartySpeedEvent obj)`

**用途 / Purpose:** 在 player inspected party speed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TutorialItemBase 实例
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnPlayerInspectedPartySpeed(obj);
```

### OnPlayerMovementFlagChanged
`public virtual void OnPlayerMovementFlagChanged(MissionPlayerMovementFlagsChangeEvent obj)`

**用途 / Purpose:** 在 player movement flag changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TutorialItemBase 实例
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnPlayerMovementFlagChanged(obj);
```

### OnPlayerToggledUpgradePopup
`public virtual void OnPlayerToggledUpgradePopup(PlayerToggledUpgradePopupEvent obj)`

**用途 / Purpose:** 在 player toggled upgrade popup 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TutorialItemBase 实例
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnPlayerToggledUpgradePopup(obj);
```

### OnOrderOfBattleHeroAssignedToFormation
`public virtual void OnOrderOfBattleHeroAssignedToFormation(OrderOfBattleHeroAssignedToFormationEvent obj)`

**用途 / Purpose:** 在 order of battle hero assigned to formation 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TutorialItemBase 实例
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnOrderOfBattleHeroAssignedToFormation(obj);
```

### OnOrderOfBattleFormationClassChanged
`public virtual void OnOrderOfBattleFormationClassChanged(OrderOfBattleFormationClassChangedEvent obj)`

**用途 / Purpose:** 在 order of battle formation class changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TutorialItemBase 实例
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnOrderOfBattleFormationClassChanged(obj);
```

### OnOrderOfBattleFormationWeightChanged
`public virtual void OnOrderOfBattleFormationWeightChanged(OrderOfBattleFormationWeightChangedEvent obj)`

**用途 / Purpose:** 在 order of battle formation weight changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TutorialItemBase 实例
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnOrderOfBattleFormationWeightChanged(obj);
```

### OnCraftingWeaponClassSelectionOpened
`public virtual void OnCraftingWeaponClassSelectionOpened(CraftingWeaponClassSelectionOpenedEvent obj)`

**用途 / Purpose:** 在 crafting weapon class selection opened 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TutorialItemBase 实例
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnCraftingWeaponClassSelectionOpened(obj);
```

### OnCraftingOnWeaponResultPopupOpened
`public virtual void OnCraftingOnWeaponResultPopupOpened(CraftingWeaponResultPopupToggledEvent obj)`

**用途 / Purpose:** 在 crafting on weapon result popup opened 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TutorialItemBase 实例
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnCraftingOnWeaponResultPopupOpened(obj);
```

### OnCraftingOrderTabOpened
`public virtual void OnCraftingOrderTabOpened(CraftingOrderTabOpenedEvent obj)`

**用途 / Purpose:** 在 crafting order tab opened 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TutorialItemBase 实例
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnCraftingOrderTabOpened(obj);
```

### OnCraftingOrderSelectionOpened
`public virtual void OnCraftingOrderSelectionOpened(CraftingOrderSelectionOpenedEvent obj)`

**用途 / Purpose:** 在 crafting order selection opened 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TutorialItemBase 实例
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnCraftingOrderSelectionOpened(obj);
```

### OnInventoryItemInspected
`public virtual void OnInventoryItemInspected(InventoryItemInspectedEvent obj)`

**用途 / Purpose:** 在 inventory item inspected 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TutorialItemBase 实例
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnInventoryItemInspected(obj);
```

### OnCrimeValueInspectedInSettlementOverlay
`public virtual void OnCrimeValueInspectedInSettlementOverlay(CrimeValueInspectedInSettlementOverlayEvent obj)`

**用途 / Purpose:** 在 crime value inspected in settlement overlay 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TutorialItemBase 实例
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnCrimeValueInspectedInSettlementOverlay(obj);
```

### OnClanRoleAssignedThroughClanScreen
`public virtual void OnClanRoleAssignedThroughClanScreen(ClanRoleAssignedThroughClanScreenEvent obj)`

**用途 / Purpose:** 在 clan role assigned through clan screen 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TutorialItemBase 实例
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnClanRoleAssignedThroughClanScreen(obj);
```

### OnPlayerSelectedAKingdomDecisionOption
`public virtual void OnPlayerSelectedAKingdomDecisionOption(PlayerSelectedAKingdomDecisionOptionEvent obj)`

**用途 / Purpose:** 在 player selected a kingdom decision option 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TutorialItemBase 实例
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnPlayerSelectedAKingdomDecisionOption(obj);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
TutorialItemBase instance = ...;
```

## 参见

- [本区域目录](../)