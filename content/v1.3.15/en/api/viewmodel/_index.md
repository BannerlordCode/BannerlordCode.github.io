---
title: "viewmodel index"
description: ViewModel class reference index
---
## Mental Model

View-model classes are the binding boundary between campaign or mission state and a Gauntlet movie. A screen owns the instance and its data context; properties notify the UI, command methods perform UI-scoped work, and `OnFinalize` releases subscriptions. They are presentation state, not a replacement for campaign Actions or Models.

Use these types when a movie needs a typed data source. Create them from the owning screen or view, keep updates on the UI lifecycle, and route world mutations through campaign services. Do not keep a view-model after its screen or mission is finalized.

| Namespace | Type | Purpose | Timing |
| --- | --- | --- | --- |
| TaleWorlds.Core.ViewModelCollection | [CharacterViewModel](./CharacterViewModel) | Exposes character appearance and equipment state to a bound movie. | While a character card or preview is open. |
| TaleWorlds.Core.ViewModelCollection.Information | [HintViewModel](./HintViewModel) | Provides tooltip text, visibility, and hint commands. | During hover or focus changes. |
| TaleWorlds.MountAndBlade.ViewModelCollection.Input | [InputKeyItemVM](./InputKeyItemVM) | Represents one input binding row and its display state. | While input settings are bound. |
| TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement | [ClanCardSelectionInfo](./ClanCardSelectionInfo) | Carries clan-card selection data for the management UI. | During clan selection screen construction. |
| TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu | [GameMenuItemCreationData](./GameMenuItemCreationData) | Describes menu option data consumed by a game-menu view-model. | When menu options are assembled. |
| TaleWorlds.CampaignSystem.ViewModelCollection | [IssueQuestFlags](./IssueQuestFlags) | Encodes issue/quest presentation flags for list filtering. | When journal entries are projected to UI. |
| TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard | [BattleResultType](./BattleResultType) | Labels the result category shown by the mission scoreboard. | After a mission reports its result. |

<!-- BEGIN SECTION INDEX -->

## Parent Navigation

- [API Reference](../)
- [Version Home](../../)

## Child Classes — Alphabetical

### B

- [BattleResultType](./BattleResultType)

### C

- [CharacterViewModel](./CharacterViewModel)
- [ClanCardSelectionInfo](./ClanCardSelectionInfo)
- [ClanCardSelectionItemInfo](./ClanCardSelectionItemInfo)
- [ClanCardSelectionItemPropertyInfo](./ClanCardSelectionItemPropertyInfo)

### D

- [DecisionTypes](./DecisionTypes)
- [DescriptionType](./DescriptionType)

### G

- [GameMenuItemCreationData](./GameMenuItemCreationData)

### H

- [HintViewModel](./HintViewModel)

### I

- [InputKeyItemVM](./InputKeyItemVM)
- [IssueQuestFlags](./IssueQuestFlags)
- [ItemClanComparer](./ItemClanComparer)
- [ItemComparerBase](./ItemComparerBase)
- [ItemComparerBase](./ItemComparerBase__TaleWorlds_CampaignSystem_ViewModelCollection_GameMenu_TournamentLeaderboard)
- [ItemComparerBase](./ItemComparerBase__TaleWorlds_CampaignSystem_ViewModelCollection_KingdomManagement_Armies)
- [ItemComparerBase](./ItemComparerBase__TaleWorlds_CampaignSystem_ViewModelCollection_KingdomManagement_Clans)
- [ItemComparerBase](./ItemComparerBase__TaleWorlds_CampaignSystem_ViewModelCollection_KingdomManagement_Diplomacy)
- [ItemComparerBase](./ItemComparerBase__TaleWorlds_CampaignSystem_ViewModelCollection_KingdomManagement_Settlements)
- [ItemComparerBase](./ItemComparerBase__TaleWorlds_CampaignSystem_ViewModelCollection_WeaponCrafting_Smelting)
- [ItemCostComparer](./ItemCostComparer)
- [ItemDistanceComparer](./ItemDistanceComparer)
- [ItemNameComparer](./ItemNameComparer)
- [ItemNameComparer](./ItemNameComparer__TaleWorlds_CampaignSystem_ViewModelCollection_GameMenu_TournamentLeaderboard)
- [ItemNameComparer](./ItemNameComparer__TaleWorlds_CampaignSystem_ViewModelCollection_Inventory)
- [ItemNameComparer](./ItemNameComparer__TaleWorlds_CampaignSystem_ViewModelCollection_KingdomManagement_Armies)
- [ItemNameComparer](./ItemNameComparer__TaleWorlds_CampaignSystem_ViewModelCollection_KingdomManagement_Clans)
- [ItemNameComparer](./ItemNameComparer__TaleWorlds_CampaignSystem_ViewModelCollection_KingdomManagement_Settlements)
- [ItemNameComparer](./ItemNameComparer__TaleWorlds_CampaignSystem_ViewModelCollection_WeaponCrafting_Smelting)
- [ItemOwnerComparer](./ItemOwnerComparer)
- [ItemShipCountComparer](./ItemShipCountComparer)
- [ItemStrengthComparer](./ItemStrengthComparer)
- [ItemTypeComparer](./ItemTypeComparer)
- [ItemTypeComparer](./ItemTypeComparer__TaleWorlds_CampaignSystem_ViewModelCollection_Inventory)
- [ItemTypeComparer](./ItemTypeComparer__TaleWorlds_CampaignSystem_ViewModelCollection_KingdomManagement_Settlements)
- [ItemTypeComparer](./ItemTypeComparer__TaleWorlds_CampaignSystem_ViewModelCollection_WeaponCrafting_Smelting)

### J

- [JournalLogIndex](./JournalLogIndex)

### M

- [MenuOverlayContextList](./MenuOverlayContextList)
- [MissionHintInteractionItemVM](./MissionHintInteractionItemVM)
- [MouseState](./MouseState)

### O

- [OrderOfBattleUIHelper](./OrderOfBattleUIHelper)

### T

- [TroopItemFormationIndexComparer](./TroopItemFormationIndexComparer)

### V

- [VisualOrderExecutionParameters](./VisualOrderExecutionParameters)


<!-- END SECTION INDEX -->
