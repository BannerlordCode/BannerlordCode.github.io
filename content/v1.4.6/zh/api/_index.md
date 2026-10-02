---
title: "API 参考 — 已手写覆盖到哪里"
description: "v1.4.6 的 API 分区当前只有手写内容：40 张类页分布在 9 个桶，本文说明覆盖到哪、mod 从哪一类开始读、哪些桶尚未手写。"
---
# API 参考：已手写覆盖到哪里

> **先说清楚现状，避免你点空。** v1.4.6 的 API 分区目前**只有手写类页**，没有自动生成的 A–Z 类目录树。40 张类页分布在 9 个桶里，都是 mod 最常碰的类型；`mission-ext/`、`viewmodel/`、`system/`、`modulemanager/`、`sandbox/`、`storymode/`、`custombattle/`、`network/`、`achievementsystem/`、`activitysystem/` 这 10 个桶**一张页都还没有**。需要某个桶里的具体类型时，回到 [模块地图](../architecture/module-map) 看它属于哪一桶，本文末尾列出待补类型名。

## 按任务找入口

分层理由见 [SDK 分层概览](../architecture/sdk-overview)，「这个类型归哪个桶」见 [模块地图](../architecture/module-map)。这里只回答「我现在该打开哪张类页」：

| 我想做的事 | 先看这张类页 | 它属于 |
| --- | --- | --- |
| 让模块在正确阶段加载、拿到 `Game.Current` 这局游戏的根 | [MBSubModuleBase](./core/MBSubModuleBase) · [Module](./core/Module) | core |
| 给物品、装备、技能挂自定义数据 | [ItemObject](./core-extra/ItemObject) · [Equipment](./core-extra/Equipment) · [WeaponComponent](./core-extra/WeaponComponent) · [BodyProperties](./core-extra/BodyProperties) · [Crafting](./core-extra/Crafting) · [SkillObject](./core-extra/SkillObject) | core-extra |
| 注册游戏模型、给英雄/部队换算模型 | [GameModel](./core-extra/GameModel) · [GameModelsManager](./core-extra/GameModelsManager) · [GameManagerBase](./core-extra/GameManagerBase) · [GameStateManager](./core-extra/GameStateManager) | core-extra |
| 绑定属性、事件总线、参数容器 | [BindingPath](./core-extra/BindingPath) · [EventBase](./core-extra/EventBase) · [ParameterContainer](./core-extra/ParameterContainer) · [Banner](./core-extra/Banner) | core-extra |
| 写 ViewModel 绑定、给玩家弹提示 | [ViewModel](./core-extra/ViewModel) · [InformationManager](./core-extra/InformationManager) | core-extra |
| 在战役里挂行为、监听战役事件 | [CampaignBehaviorBase](./campaign/CampaignBehaviorBase) · [CampaignEvents](./campaign/CampaignEvents) · [IDataStore](./campaign/IDataStore) | campaign |
| 拿战役当前状态、英雄、聚落 | [Campaign](./campaign/Campaign) · [CampaignGameStarter](./campaign/CampaignGameStarter) · [Hero](./campaign/Hero) · [Settlement](./campaign/Settlement) | campaign |
| 按 MBGUID 跨存档引用对象、注册可加载类型 | [MBObjectManager](./campaign-ext/MBObjectManager) · [MBObjectBase](./campaign-ext/MBObjectBase) | campaign-ext |
| 处理一场战斗里的单位与行为 | [Mission](./mission/Mission) · [MissionBehavior](./mission/MissionBehavior) · [Agent](./mission/Agent) · [Formation](./mission/Formation) | mission |
| 推屏/弹屏、按输入限制屏蔽交互 | [ScreenManager](./gui/ScreenManager) · [ScreenBase](./gui/ScreenBase) | gui |
| 拿到渲染用的 Gauntlet layer | [GauntletLayer](./engine/GauntletLayer) | engine |
| 面向玩家的文本、变量替换 | [TextObject](./localization/TextObject) | localization |
| 给自定义行为加存档字段、注册可保存类型 | [SaveManager](./save-system/SaveManager) · [SaveableTypeDefiner](./save-system/SaveableTypeDefiner) · [SaveableFieldAttribute](./save-system/SaveableFieldAttribute) · [SaveablePropertyAttribute](./save-system/SaveablePropertyAttribute) | save-system |

**入口的读法**：`core/` 与 `campaign/`、`mission/` 各有一张类是「枢纽页」——`MBSubModuleBase` 决定你的 mod 什么时候拿到游戏对象，`CampaignBehaviorBase` / `MissionBehavior` 决定你挂的行为什么时候被调用，`SaveManager` 决定你的字段怎么进存档。绝大多数 mod 只用到这三张，加上 `Mission` / `Campaign` / `ScreenManager` / `Game` 这几个上下文对象。

## 已手写的 9 个桶

| 桶 | 类页 | mod 什么时候碰 |
| --- | --- | --- |
| `core/` | [MBSubModuleBase](./core/MBSubModuleBase) · [Module](./core/Module) | 写模块入口 |
| `core-extra/` | [Game](./core-extra/Game) · [ItemObject](./core-extra/ItemObject) · [Equipment](./core-extra/Equipment) · [WeaponComponent](./core-extra/WeaponComponent) · [BodyProperties](./core-extra/BodyProperties) · [Crafting](./core-extra/Crafting) · [SkillObject](./core-extra/SkillObject) · [GameModel](./core-extra/GameModel) · [GameModelsManager](./core-extra/GameModelsManager) · [GameManagerBase](./core-extra/GameManagerBase) · [GameStateManager](./core-extra/GameStateManager) · [ViewModel](./core-extra/ViewModel) · [BindingPath](./core-extra/BindingPath) · [EventBase](./core-extra/EventBase) · [ParameterContainer](./core-extra/ParameterContainer) · [InformationManager](./core-extra/InformationManager) · [Banner](./core-extra/Banner) | 定义物品/技能/事件/提示 |
| `campaign/` | [Campaign](./campaign/Campaign) · [CampaignBehaviorBase](./campaign/CampaignBehaviorBase) · [CampaignEvents](./campaign/CampaignEvents) · [CampaignGameStarter](./campaign/CampaignGameStarter) · [Hero](./campaign/Hero) · [Settlement](./campaign/Settlement) · [IDataStore](./campaign/IDataStore) | 战役世界状态与行为 |
| `campaign-ext/` | [MBObjectManager](./campaign-ext/MBObjectManager) · [MBObjectBase](./campaign-ext/MBObjectBase) | 对象身份与类型注册 |
| `mission/` | [Mission](./mission/Mission) · [Agent](./mission/Agent) · [MissionBehavior](./mission/MissionBehavior) · [Formation](./mission/Formation) | 一场战斗内的处理 |
| `gui/` | [ScreenManager](./gui/ScreenManager) · [ScreenBase](./gui/ScreenBase) | 屏幕栈 |
| `engine/` | [GauntletLayer](./engine/GauntletLayer) | UI 渲染层 |
| `localization/` | [TextObject](./localization/TextObject) | 本地化文本 |
| `save-system/` | [SaveManager](./save-system/SaveManager) · [SaveableTypeDefiner](./save-system/SaveableTypeDefiner) · [SaveableFieldAttribute](./save-system/SaveableFieldAttribute) · [SaveablePropertyAttribute](./save-system/SaveablePropertyAttribute) | 存档字段 |

## 尚未手写的桶（待补清单）

这些桶在 [模块地图](../architecture/module-map) 里有完整的归属说明，但类页还没写。下面是各桶里 mod 最常接触的类型名，**没有对应页面可以点**：

- `mission-ext/`：`MissionLogic`、`MBGameManager`、以及 `TaleWorlds.MountAndBlade` 下除 `Mission`/`Agent`/`MissionBehavior`/`Formation` 之外的类型
- `viewmodel/`：`BattleResultVM`、`CharacterViewModel`、`ControlCharacterCreationStage`
- `system/`：`IInputManager`、`InputContext`、`GameKey`、`HotKey`、`HotKeyManager`
- `modulemanager/`：`ModuleInfo`、`ModuleHelper`、`SubModuleInfo`、`DependedModule`
- `sandbox/`：`SandBoxSubModule`、`SandBoxMissions`、`SandBoxSaveManager`
- `storymode/`：`StoryModeSubModule`、`CampaignStoryMode`、`StoryModeManager`、`StoryModeEvents`
- `custombattle/`：`CustomBattleScreen`、`CustomBattleSceneData`、`CPUBenchmarkMissionLogic`
- `network/`：`CoroutineManager`、`ClientsideSession`、`ConnectionState`
- `achievementsystem/`：`Achievement`、`AchievementManager`、`IAchievementService`
- `activitysystem/`：`Activity`、`ActivityManager`、`IActivityService`

要写这些页时，先看 [模块地图](../architecture/module-map) 的「待补」列确认归属（命名空间前缀最长优先、类型名覆写），再回 `bannerlord-1.4.6/` 源码核实签名。

## 阅读顺序

1. 先读 [版本首页](../) 确认你在哪一层，再读 [SDK 分层概览](../architecture/sdk-overview) 判断对象活多久。
2. 用上面的任务表挑入口类页，一张枢纽页通常已经够你起步。
3. 类页里看「心智模型 / 关键成员 / 风险与边界」，再顺着同命名空间链接回溯。
4. 需要 1.4.5 或 1.3.15 上的同一类型时，走 [逐类 API 对比](../../../versions/)。

## 参见

- ↑ [版本首页](../)
- ↔ [架构总览](../architecture/)
- ↔ [模块地图](../architecture/module-map)