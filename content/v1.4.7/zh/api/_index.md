---
title: "API 参考 — 按任务找入口"
description: "v1.4.7 的 API 按命名空间分成 19 个桶：一个类型只属于一个桶，同桶重名用 Namespace__Type 区分。中文树当前 106 篇类页。"
---
# API 参考 — 按任务找入口

这不是签名墙。先决定你要做的事，从下面的表进对应桶，再进具体类页。**同一类型只存在于一个桶** —— 1.4.5 的文档树里同一个类型名出现在两个目录共 2,199 次，那正是"点进去发现是别的地方、然后回不来"的根源。v1.4.7 修掉了这一点。

下面两张表里的页数都是**当前的真实页数**。有 3,598 篇类页曾由脚本批量生成并一度挂在这些目录下，现已撤出文档树；每个桶的索引页都写明了自己覆盖哪个命名空间、约多少类型、当前几页。要查某个类型有没有页面，看 [缺口清单](../../GAPS)。

## 有页面的桶（14 个，106 篇）

| 桶 | 页数 | 覆盖 | 页面 |
| --- | ---: | --- | --- |
| [custombattle](custombattle/) | 15 | `TaleWorlds.MountAndBlade.CustomBattle` 及其子命名空间 | [CustomBattleHelper](custombattle/CustomBattleHelper) · [CustomBattleData](custombattle/CustomBattleData) · [CustomBattleProvider](custombattle/CustomBattleProvider) · [CustomBattleSubModule](custombattle/CustomBattleSubModule) · [CustomBattleCompositionData](custombattle/CustomBattleCompositionData) · [CustomBattleBannerEffects](custombattle/CustomBattleBannerEffects) · [CustomBattleSceneData](custombattle/CustomBattleSceneData) · [CustomBattleTimeOfDay](custombattle/CustomBattleTimeOfDay) · [CustomBattlePlayerSide](custombattle/CustomBattlePlayerSide) · [CustomBattlePlayerType](custombattle/CustomBattlePlayerType) · [ArmyCompositionGroupVM](custombattle/ArmyCompositionGroupVM) · [ArmyCompositionItemVM](custombattle/ArmyCompositionItemVM) · [CustomBattleSiegeMachineVM](custombattle/CustomBattleSiegeMachineVM) · [GameTypeSelectionGroupVM](custombattle/GameTypeSelectionGroupVM) · [MapSelectionGroupVM](custombattle/MapSelectionGroupVM) |
| [campaign](campaign/) | 14 | `TaleWorlds.CampaignSystem` 本体 | [Campaign](campaign/Campaign) · [CampaignGameStarter](campaign/CampaignGameStarter) · [CampaignBehaviorBase](campaign/CampaignBehaviorBase) · [CampaignEvents](campaign/CampaignEvents) · [IFaction](campaign/IFaction) · [Hero](campaign/Hero) · [CharacterObject](campaign/CharacterObject) · [Clan](campaign/Clan) · [Kingdom](campaign/Kingdom) · [Settlement](campaign/Settlement) · [MobileParty](campaign/MobileParty) · [PartyBase](campaign/PartyBase) · [TroopRoster](campaign/TroopRoster) · [MapEvent](campaign/MapEvent) |
| [core-extra](core-extra/) | 14 | `TaleWorlds.Core` 长尾 + 分类法兜底桶 | [Game](core-extra/Game) · [ViewModel](core-extra/ViewModel) · [BoardGameHelper](core-extra/BoardGameHelper) · [AIDifficulty](core-extra/AIDifficulty) · [BoardGameState](core-extra/BoardGameState) · [CaravanHelper](core-extra/CaravanHelper) · [AlleyHelper](core-extra/AlleyHelper) · [BarterHelper](core-extra/BarterHelper) · [BuildingHelper](core-extra/BuildingHelper) · [DialogHelper](core-extra/DialogHelper) · [EquipmentHelper](core-extra/EquipmentHelper) · [CraftingHelper](core-extra/CraftingHelper) · [ItemHelper](core-extra/ItemHelper) · [SkillHelper](core-extra/SkillHelper) |
| [network](network/) | 12 | `TaleWorlds.Network` | [NetworkMessage](network/NetworkMessage) · [NetworkSession](network/NetworkSession) · [MessageContract](network/MessageContract) · [MessageContractHandlerManager](network/MessageContractHandlerManager) · [MessageInfo](network/MessageInfo) · [MessageProxy](network/MessageProxy) · [MessageServiceConnection](network/MessageServiceConnection) · [ConnectionState](network/ConnectionState) · [ClientsideSession](network/ClientsideSession) · [ServersideSession](network/ServersideSession) · [RESTClient](network/RESTClient) · [TickManager](network/TickManager) |
| [system](system/) | 12 | `TaleWorlds.InputSystem` 等放行的运行时命名空间 | [Input](system/Input) · [InputContext](system/InputContext) · [InputState](system/InputState) · [IInputContext](system/IInputContext) · [IInputManager](system/IInputManager) · [EmptyInputContext](system/EmptyInputContext) · [EmptyInputManager](system/EmptyInputManager) · [GameKey](system/GameKey) · [GameKeyContext](system/GameKeyContext) · [HotKey](system/HotKey) · [HotKeyManager](system/HotKeyManager) · [Key](system/Key) |
| [localization](localization/) | 9 | `TaleWorlds.Localization` 及其 `TextProcessor` / `LanguageProcessors` 子命名空间 | [TextObject](localization/TextObject) · [MBTextManager](localization/MBTextManager) · [LocalizedTextManager](localization/LocalizedTextManager) · [LanguageSpecificTextProcessor](localization/LanguageSpecificTextProcessor) · [TextProcessingContext](localization/TextProcessingContext) · [TextGrammarProcessor](localization/TextGrammarProcessor) · [VoiceObject](localization/VoiceObject) · [LocalizedVoiceManager](localization/LocalizedVoiceManager) · [LocalizationException](localization/LocalizationException) |
| [storymode](storymode/) | 9 | `StoryMode` 主线剧情、教程与阴谋任务链 | [CampaignStoryMode](storymode/CampaignStoryMode) · [StoryModeManager](storymode/StoryModeManager) · [StoryModeEvents](storymode/StoryModeEvents) · [StoryModeQuestBase](storymode/StoryModeQuestBase) · [ConspiracyQuestBase](storymode/ConspiracyQuestBase) · [StoryModeCharacterCreationCampaignBehavior](storymode/StoryModeCharacterCreationCampaignBehavior) · [FirstPhaseCampaignBehavior](storymode/FirstPhaseCampaignBehavior) · [TutorialPhaseCampaignBehavior](storymode/TutorialPhaseCampaignBehavior) · [AchievementsCampaignBehavior](storymode/AchievementsCampaignBehavior) |
| [sandbox](sandbox/) | 5 | `SandBox` 及其 `GauntletUI` / `View` / `ViewModelCollection` 子命名空间 | [AgentNavigator](sandbox/AgentNavigator) · [Add1000GoldCheat](sandbox/Add1000GoldCheat) · [Add100InfluenceCheat](sandbox/Add100InfluenceCheat) · [Add100RenownCheat](sandbox/Add100RenownCheat) · [AddCraftingMaterialsCheat](sandbox/AddCraftingMaterialsCheat) |
| [mission](mission/) | 4 | 战斗入口类（按名字从 mission-ext 切出） | [Mission](mission/Mission) · [MissionState](mission/MissionState) · [MissionBehavior](mission/MissionBehavior) · [Agent](mission/Agent) |
| [gui](gui/) | 3 | `ScreenSystem` / `GauntletUI` / `TwoDimension` | [ScreenManager](gui/ScreenManager) · [ScreenBase](gui/ScreenBase) · [ScreenLayer](gui/ScreenLayer) |
| [save-system](save-system/) | 3 | `TaleWorlds.SaveSystem` | [SaveManager](save-system/SaveManager) · [SaveContext](save-system/SaveContext) · [LoadContext](save-system/LoadContext) |
| [campaign-ext](campaign-ext/) | 2 | `CampaignSystem` 子命名空间 + `ObjectSystem` | [MBObjectBase](campaign-ext/MBObjectBase) · [MBObjectManager](campaign-ext/MBObjectManager) |
| [core](core/) | 2 | 模块加载入口 | [Module](core/Module) · [MBSubModuleBase](core/MBSubModuleBase) |
| [engine](engine/) | 2 | `TaleWorlds.Engine` + `Diamond` 访问层 | [GauntletLayer](engine/GauntletLayer) · [MBDebug](engine/MBDebug) |

量它的命令：`for d in content/v1.4.7/zh/api/*/; do find "$d" -name '*.md' ! -name '_index.md' | wc -l; done`

## 当前 0 页的桶（5 个）

这些目录都存在、都有索引页，索引页里写明了覆盖的命名空间和类型规模：

| 桶 | 覆盖 | 类型规模 |
| --- | --- | ---: |
| [mission-ext](mission-ext/) | `TaleWorlds.MountAndBlade` + `TaleWorlds.Mission` 全部实现面 | 约 669 |
| [viewmodel](viewmodel/) | 三个 `*.ViewModelCollection` 命名空间 | 约 357 |
| [modulemanager](modulemanager/) | `TaleWorlds.ModuleManager` | 8 |
| [activitysystem](activitysystem/) | `TaleWorlds.ActivitySystem` | 6 |
| [achievementsystem](achievementsystem/) | `TaleWorlds.AchievementSystem` | 4 |

"类型规模"是源码树里的类型数，不是页面数 —— 这些桶的页面数当前是 0。

> **没有 `gameplay/` 目录，也没有 `navigationsystem/` 目录。** 前者被拆进 `sandbox`（1.4.5 那个目录本身是混合的，无法用命名空间规则复现），后者在 1.4.7 里没有公开类型，归入 `core-extra`。原因见 [版本差异](../architecture/version-delta)。

> `mission/` 与 `core/` 刻意做小，只放模组入口类；完整的 `TaleWorlds.MountAndBlade` 与基础层分别在 `mission-ext/` 与 `core-extra/`。

## 两个曾缺失的桶现已建成

`tools/_dir-map-canonical.json` 对 `TaleWorlds.Localization` 与 `StoryMode` 各有一条正式规则，`tools/_v147_treespec.md` 也把两者列为桶；`content/v1.3.0`、`v1.3.15`、`v1.4.5`、`v1.4.6`、`v1.5.3` 五棵树里这两个桶目录都存在，**只有 v1.4.7 曾缺**。按全量裁定（`tools/_SCOPE-DECISION-20260824.md`：六个版本、全部 public 类型），两个桶现已补齐：

- [localization](localization/) —— 21 个类型里已有 **9** 页；待写 12 个（8 个语言处理器 + `DateRange` / `DefaultTextProcessor` / `MBTextModel` / `SaveableLocalizationTypeDefiner`），逐名登记在该桶索引的「尚未收录」里。
- [storymode](storymode/) —— 193 个类型里已有 **9** 页；缺口队列里还剩 **171** 个，逐族登记在该桶索引的「尚未收录」里。

⇒ 两个桶的待写清单都在各自的桶索引里，**本页不重复列举**；要看一个桶现有几页、还缺哪些，进那个桶的索引页。

## 依赖阅读顺序

1. [架构总览](../architecture/) —— 先确认自己处于哪一层。
2. 本页的两张表 —— 进入对应子系统。
3. 桶索引页 —— 它列出该桶现有的全部页面、覆盖范围与缺口，并链回父级和全部兄弟桶。
4. 具体类页 —— 看心智模型、何时用、何时不要用、风险。

## 参见

- ↑ [语言首页](../)
- ↔ [架构总览](../architecture/)
- ↘ [缺口清单](../../GAPS)
- ↘ [跨版本类对比](../../../versions/)