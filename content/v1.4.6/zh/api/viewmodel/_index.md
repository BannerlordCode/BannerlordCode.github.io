---
title: "viewmodel 桶 — 界面数据类（尚未手写）"
description: "viewmodel 桶收拢 TaleWorlds.Core.ViewModelCollection、TaleWorlds.CampaignSystem.ViewModelCollection 与 TaleWorlds.MountAndBlade.ViewModelCollection 三个命名空间，实测合计 632 个类型。本页说明它对应什么、mod 什么时候会用到它，以及为什么它当前一张类页都没有。"
---
# viewmodel：界面数据类

> **本桶当前没有任何已撰写页面。** 下面写的是这个桶「是什么、什么时候值得翻它」，不是 API 索引。要找已手写的入口，回到 [API 参考首页](../)。

## 这个桶对应源码里的什么

v1.4.6 的目录名就是程序集名。落在本桶的是三个源码目录，命名空间以 `ViewModelCollection` 结尾（`bannerlord-1.4.6/` 下实测）：

| 命名空间 | 顶层类型数（实测） | 管什么 |
| --- | --- | --- |
| `TaleWorlds.Core.ViewModelCollection` | 47 | 不依赖战役层的通用界面数据：角色卡片、物品格、提示条、战果 |
| `TaleWorlds.CampaignSystem.ViewModelCollection` | 416 | 大厅地图上的一切界面：部队、氏族、王国、锻造、百科、任务、城镇管理 |
| `TaleWorlds.MountAndBlade.ViewModelCollection` | 169 | 战斗内与设置类界面：指令、部署、计分板、十字准星、选项 |

外加一个子命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.BirthAndDeath`（生育与继承相关界面数据），按最长前缀规则也归本桶。

合计 632 个顶层类型，是全部桶里类型数第二多的一个（第一是 [mission-ext](../mission-ext/)）。

**为什么它们会落进同一个桶**：权威映射 `tools/_dir-map-canonical.json` 给这三个命名空间各配了一条比父前缀更长的规则（`TaleWorlds.Core.ViewModelCollection` → `viewmodel` 等），所以 `ViewModelCollection` 这一段永远赢过 `TaleWorlds.Core` / `TaleWorlds.CampaignSystem` / `TaleWorlds.MountAndBlade` 这些父前缀。含义是：名字里带 `ViewModelCollection` 的类型，**不会**落到 `core-extra` / `campaign` / `mission-ext`。

## mod 什么时候会碰到它

诚实的结论是：**大多数 mod 不会「调用」本桶的类，而是「读」它们。**

1. **抄官方界面写法。** 这是最主要的用法。你要做一个自己的锻造界面，先去看 `CraftingVM` 怎么组织数据、怎么挂刷新；官方 ViewModel 是唯一能跑通的完整范例。
2. **确认某个官方界面在算什么。** 「地图部队面板为什么这么排」这类问题的答案在 `PartyVM` / `PartySortControllerVM` 里，而不在 `MobileParty` 里。
3. **少量情况确实要碰。** 极少数 mod 需要往官方 ViewModel 上挂东西——比如在官方界面上加一个按钮或一列。这时你会用到具体的 `*VM` 类型，以及 `TaleWorlds.Core.ViewModelCollection` 里的通用基类。

**心智模型**：ViewModel 是「屏幕状态的投影」，不是权威数据源。权威数据在 [campaign 桶](../campaign) 的 `Campaign` / `MobileParty` / `Hero` 上。ViewModel 持有的是一份为了渲染而整理过的副本，通常带排序、筛选、分页。所以判断「这个值从哪来」的顺序永远是：先在 campaign 层找字段，再看哪个 ViewModel 把它搬到了屏幕上。

**边界**：ViewModel 基本不带存档标记（`[SaveableProperty]`），也不该被长期持有。跨界面持有 ViewModel 引用是 1.4.6 里很常见的崩溃来源——它随时会被屏幕栈弹掉。

## 待写清单（节选，28 条）

下面每个名字都在 `bannerlord-1.4.6/` 里核实过确实存在。**清单是节选，不是完整列表**——本桶有 632 个类型，全列没有意义；挑的是 mod 最常翻的那几个。真要写某一页时，用 `grep -rn "class <名字>" ../bannerlord-1.4.6/` 确认签名，别照抄本文。

来自 `TaleWorlds.Core.ViewModelCollection`：

- `BattleResultVM` — 战斗结算界面绑定的数据类，战后要改结算显示（比如加一行战果统计）时看它
- `CharacterViewModel` — 单个角色的展示数据，角色卡 / 头像 / 装备预览的公共底座
- `CharacterWithActionViewModel` — 在角色展示数据上再挂一组可点动作，菜单里「某人 + 某操作」的行用它
- `CraftingItemViewModel` — 锻造界面里单个配方条目的数据
- `HintViewModel` / `HintVM` — 屏幕下方提示条的数据（两种粒度）
- `ItemVM` — 单个物品的展示数据，全游戏的物品格几乎都基于它
- `SelectorItemVM` / `StringItemWithActionVM` — 下拉选择器的一行；自己写选项菜单时照抄
- `SceneNotificationVM` — 场景中飘出的通知（图章、任务提示）

来自 `TaleWorlds.CampaignSystem.ViewModelCollection`：

- `ArmyManagementVM` — 军队整备界面（含面板叠层的 prefab 标识）
- `ClanMembersVM` — 氏族成员列表
- `CraftingVM` — 锻造主界面；自建锻造界面时最常被翻的一个
- `EncyclopediaViewModel` — 百科主界面（注意类名是 `EncyclopediaViewModel`，不是 `EncyclopediaVM`；同一区域还有 `EncyclopediaHomeVM` / `EncyclopediaHeroPageVM` / `EncyclopediaFactionPageVM` / `EncyclopediaSettlementPageVM` / `EncyclopediaUnitPageVM` 等分页模型，命名不统一）
- `GameMenuVM` — 地图上弹出的小游戏菜单（打猎、兵棋、逃跑前的拦截菜单）
- `ItemMenuVM` — 交易 / 物品清单菜单
- `KingdomManagementVM` — 王国管理界面
- `PartyVM` — 地图上单个部队的面板数据
- `QuestsVM` — 任务日志界面
- `RecruitmentVM` — 招募界面
- `TownManagementVM` — 城镇管理界面
- `CharacterCreationStageBaseVM` — 角色创建流程的阶段基类（各 `CharacterCreation*VM` 阶段都从它来）

来自 `TaleWorlds.MountAndBlade.ViewModelCollection`：

- `MissionOrderVM` — 战斗指令界面
- `MissionAgentLockVisualizerVM` — 锁定某个单位时的锁定环显示
- `OrderOfBattleVM` — 战前布阵界面
- `CrosshairVM` — 准星
- `EscapeMenuVM` — 暂停 / 退出菜单
- `OptionsVM` — 选项主界面；键位与手柄选项的宿主
- `ScoreboardBaseVM` — 计分板基类，多人与单机计分板都从它派生
- `FormationConfiguration` — 阵型配置的展示数据

## 一处源码纠错

旧文档在 `viewmodel` 待补清单里点过名 `ControlCharacterCreationStage`。在 `bannerlord-1.4.6/` 全树搜索，**这个类型不存在**；`/1` 命中的角色创建阶段类是 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation.CharacterCreationStageBaseVM` 及其派生类。写这一桶的页面时不要为 `ControlCharacterCreationStage` 建页。

## 为什么现在还没有页面

1.4.6 的手写覆盖按 **mod 实际使用频率** 排序，不是按类型数量排序。已经写完的 9 个桶是「写一个 mod 一定会碰到」的：模块入口、战役行为、战斗行为、存档字段、界面栈。本桶排在后面有两个原因：

1. **它是阅读材料，不是调用面。** 让一个 mod 跑起来不需要引用本桶任何类型；绝大多数需求在 [campaign](../campaign) 和 [mission](../mission) 两桶就闭环了。
2. **632 个类型没有统一心智模型。** 官方 ViewModel 之间几乎不共享基类（除了少数几个 `*BaseVM`），逐个写页会产出 600 多张互不相干的签名罗列，对读者没有增量信息。真正有价值的写法是「以某个界面为主线、串起它依赖的 ViewModel」，这种页面要等界面级的专题页才写得出来，不适合按类平铺。

因此本桶排在手写队列的后段。**这一页不是占位符**：上面的归属、待写清单和纠错都是核实过的内容，写具体类页时可以直接从这里取线索。

## 读到这一桶之前

先确认你确实需要它：

- 想知道战役世界的权威数据 → [campaign](../campaign)
- 想知道一场战斗内怎么处理 → [mission](../mission)
- 想知道界面怎么推、怎么弹 → [gui](../gui)
- 想知道 `CampaignStoryMode` 这类官方玩法层在哪儿 → [storymode](../storymode)
- 想知道桶名 ↔ 命名空间的完整对照 → [模块地图](../../architecture/module-map)

## 导航

- ↑ [API 参考首页](../) — 已手写覆盖到哪里
- ↑↑ [1.4.6 中文首页](../../) · [版本首页](../../../)
- ↔ [模块地图](../../architecture/module-map) · [SDK 分层概览](../../architecture/sdk-overview)
- ↔ English: [API](../../../en/api/)
- ↔ 跨版本：[1.4.5 API](../../../../v1.4.5/zh/api/) · [逐类对比](../../../../versions/)
