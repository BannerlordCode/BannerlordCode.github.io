---
title: "viewmodel 目录"
description: ViewModel 视图模型类参考目录
---
## 模块心智模型

`viewmodel` 桶是 Bannerlord 的**表现层数据模型（presentation model）**——它只收录那些没有归到具体模块、跨战役/任务/核心散落分布的独立 ViewModel 与配套数据载体，是 Gauntlet UI 与游戏状态之间的「可绑定桥」。

本桶的类型几乎都继承自 `TaleWorlds.Library` 的 `ViewModel` 基类：每个属性在 setter 中触发 `INotifyPropertyChanged` 的 `PropertyChanged` 通知，Gauntlet 的 Movie 据此刷新对应控件；以 `Execute*` 命名的方法则被 UI 按钮直接绑定为命令。因此你应当把这里每个类型都理解为「状态 + 命令」的暴露点，而非普通 DTO——谁创建它、谁持有它的 DataSource、谁调用它的 `Execute*`，决定了 mod 该继承、组合还是只读使用。

注意本桶只是 ViewModel 层的「碎片集合」。命名空间 `TaleWorlds.Core.ViewModelCollection`、`TaleWorlds.CampaignSystem.ViewModelCollection.*`、`TaleWorlds.MountAndBlade.ViewModelCollection.*` 暗示着这些 VM 本应归属于各自的业务模块；大量更成体系的 VM（如王国管理、 inventory、兵种编队）实际沉淀在 `../core-extra/`。本桶里的 `*Comparer` 与 `*Info`/`*Data` 结构多是为列表排序与数据传递服务的配角，真正的核心入口是下面这些可直接绑定到 Movie 的 VM 与数据载体。

## 核心入口类型

- [CharacterViewModel](./CharacterViewModel) — 角色头像/装备/动画状态绑定，mod 最常拿来驱动自定义角色展示。
- [HintViewModel](./HintViewModel) — 提示气泡（tooltip）的显隐与文本绑定，配 `ExecuteBeginHint`/`ExecuteEndHint` 命令。
- [InputKeyItemVM](./InputKeyItemVM) — 键位设置界面里单个按键的绑定项，承载 `GameKey`/`HotKey` 与可见性。
- [MissionHintInteractionItemVM](./MissionHintInteractionItemVM) — 任务交互提示项，派生自 `MissionInteractionItemBaseVM`。
- [ClanCardSelectionInfo](./ClanCardSelectionInfo) — 氏族管理卡片选择的数据载体（含 `ClanCardSelectionItemInfo`/`ItemPropertyInfo` 配套结构）。
- [GameMenuItemCreationData](./GameMenuItemCreationData) — 游戏菜单选项的创建参数结构体，`OptionID` 驱动菜单分支。
- [JournalLogIndex](./JournalLogIndex) — 任务日志排序索引枚举，配合日志 VM 的排序控制器。
- [MenuOverlayContextList](./MenuOverlayContextList) — 右键/叠加菜单的上下文条目列表。
- [OrderOfBattleUIHelper](./OrderOfBattleUIHelper) — 布阵（Order of Battle）UI 的静态辅助逻辑。
- [VisualOrderExecutionParameters](./VisualOrderExecutionParameters) — 编队指令的视觉执行参数结构体。
- [MouseState](./MouseState) — 记分板中鼠标悬停/选中状态的枚举。

## 与其他模块的关系

上方 Gauntlet 的层是消费端：Movie 通过 DataSource 持有这些 VM，XAML 控件绑定其属性与命令，基类 `ViewModel`（`TaleWorlds.Library`）与 Movie 生命周期机制见 [GUI 模块](../gui/)。本桶与 [core-extra](../core-extra/) 是「碎片 vs 主体」关系——更庞大的业务 VM 集合（王国、背包、锻造等）按命名空间落在 core-extra，跨桶查阅才能拼出完整 MVVM 图景。

生命周期风险不可忽视：ViewModel 在场景切换或菜单关闭时必须正确 `OnFinalize` 注销订阅，否则悬空 `PropertyChanged` 回调会越界访问已释放状态。UI/ViewModel 生命周期崩溃的边界与兜底策略见 [崩溃边界](../../architecture/crash-boundaries/)。

<!-- BEGIN SECTION INDEX -->

## ↑ 上级导航

- [API 参考](../)
- [版本首页](../../)

## ↓ 子类列表 — 按字母分组

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
