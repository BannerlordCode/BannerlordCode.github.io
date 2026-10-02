---
title: "viewmodel 桶 — 界面数据类（0 张类页）"
description: "viewmodel 桶收拢 TaleWorlds.Core.ViewModelCollection、TaleWorlds.CampaignSystem.ViewModelCollection 与 TaleWorlds.MountAndBlade.ViewModelCollection 三个命名空间前缀。实测合计 535 个 .cs 文件、526 个命名空间级类型声明。本页说明它对应什么、mod 什么时候会用到它、以及为什么它当前一张类页都没有。"
---
# viewmodel：界面数据类

> **覆盖状态：本桶 0 张类页。**
> 下面写的是这个桶「是什么、什么时候值得翻它」，不是 API 索引。要找已手写的入口，回到 [API 参考首页](../)。页面上出现的类型名全部是纯文本，**没有任何一个指向尚未撰写的类页**。

## 这个桶在源码里对应什么

v1.4.6 的目录名就是程序集名。落在本桶的是三个源码目录，命名空间以 `ViewModelCollection` 结尾：

| 命名空间前缀 | 源码目录 | `.cs` 文件数 | 命名空间级类型声明数 | 管什么 |
| --- | --- | --- | --- | --- |
| `TaleWorlds.Core.ViewModelCollection` | `TaleWorlds.Core.ViewModelCollection/` | 46 | 45 | 不依赖战役层的通用界面数据：角色卡片、物品格、提示条、战果 |
| `TaleWorlds.CampaignSystem.ViewModelCollection` | `TaleWorlds.CampaignSystem.ViewModelCollection/` | 352 | 347 | 大厅地图上的一切界面：部队、氏族、王国、锻造、百科、任务、城镇管理 |
| `TaleWorlds.MountAndBlade.ViewModelCollection` | `TaleWorlds.MountAndBlade.ViewModelCollection/` | 137 | 134 | 战斗内与设置类界面：指令、部署、计分板、十字准星、选项 |
| **合计** | | **535** | **526** | |

这三个前缀下的**子命名空间一共有 92 个**（8 + 51 + 33）。比如 `TaleWorlds.CampaignSystem.ViewModelCollection.BirthAndDeath`（生育与继承相关界面数据）、`.CharacterCreation`、`.Encyclopedia`、`.Inventory`、`.KingdomManagement` 等，都按最长前缀规则归本桶。反过来也成立：`TaleWorlds.MountAndBlade.ViewModelCollection.Order` 是本桶的子命名空间，所以 `MissionOrderVM` 在 `Order/MissionOrderVM.cs`，不在目录根部。

**口径定义**：`.cs 文件数` = `find <目录> -name '*.cs' | wc -l`；`命名空间级类型声明数` = 命名空间以该前缀开头的文件里，缩进恰好一个制表符的类型 / 委托声明行数，**不含嵌套类型**，**不按名字去重**。

**为什么它们会落进同一个桶**：权威映射给这三个命名空间各配了一条比父前缀更长的规则（`TaleWorlds.Core.ViewModelCollection` → `viewmodel` 等），所以 `ViewModelCollection` 这一段永远赢过 `TaleWorlds.Core` / `TaleWorlds.CampaignSystem` / `TaleWorlds.MountAndBlade` 这些父前缀。含义是：名字里带 `ViewModelCollection` 的类型，**不会**落到 `core-extra` / `campaign` / `mission-ext`。

**别按界面名字猜桶，要按命名空间查。** 反过来这条也成立：锻造界面看着像「战役界面」，但 `CraftingVM` 在 `TaleWorlds.CampaignSystem.ViewModelCollection`，归本桶；而沙盒专属的界面数据类在 [sandbox](../sandbox) 桶。两个名字里都带 VM，落桶规则却完全不同。

## 读源码：可复跑的查法

在工作区根目录执行：

```bash
# 本桶的三个源码目录
ls -d bannerlord-1.4.6/*ViewModelCollection

# 每个前缀下到底有哪些子命名空间
for p in TaleWorlds.Core.ViewModelCollection \
         TaleWorlds.CampaignSystem.ViewModelCollection \
         TaleWorlds.MountAndBlade.ViewModelCollection; do
  grep -rhoE "^namespace ${p}[A-Za-z0-9_.]*" bannerlord-1.4.6 --include='*.cs' | sort -u
done

# 某个 ViewModel 在哪个桶：全树搜，看它属于哪个命名空间
grep -rn 'class CraftingVM' bannerlord-1.4.6 --include='*.cs'

# 某个界面的 VM 依赖了哪些数据类（抄官方界面的起点）
grep -rln 'ViewModel' bannerlord-1.4.6/TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderVM.cs

# 排除 prefab 生成物
find bannerlord-1.4.6/TaleWorlds.CampaignSystem.ViewModelCollection -name '*.cs' ! -name '*__*' | head -40
```

## 什么时候会碰到它

**大多数 mod 不会「调用」本桶的类，而是「读」它们。**

1. **抄官方界面写法。** 这是最主要的用法。你要做一个自己的锻造界面，先去看 `CraftingVM` 怎么组织数据、怎么挂刷新；官方 ViewModel 是唯一能跑通的完整范例。
2. **确认某个官方界面在算什么。** 「地图部队面板为什么这么排」这类问题的答案在 `PartyVM` / 部队排序那一组类里，而不在 `MobileParty` 里。
3. **少量情况确实要碰。** 极少数 mod 需要往官方 ViewModel 上挂东西——比如在官方界面上加一个按钮或一列。这时你会用到具体的 `*VM` 类型，以及 `TaleWorlds.Core.ViewModelCollection` 里的通用基类。

**心智模型**：ViewModel 是「屏幕状态的投影」，不是权威数据源。权威数据在 [campaign](../campaign) 桶的 `Campaign` / `MobileParty` / `Hero` 上。ViewModel 持有的是一份为了渲染而整理过的副本，通常带排序、筛选、分页。所以判断「这个值从哪来」的顺序永远是：先在 campaign 层找字段，再看哪个 ViewModel 把它搬到了屏幕上。

**边界**：ViewModel 基本不带存档标记（`[SaveableProperty]`），也不该被长期持有。跨界面持有 ViewModel 引用是 1.4.6 里很常见的崩溃来源——它随时会被屏幕栈弹掉。

## 按命名空间分组的代表性类型（非链接，全部核实，未撰写类页）

下面每个名字都用 `grep -rw` 在对应的三个 `*ViewModelCollection/` 目录里核实过。**这是按用途挑的代表性索引，不是待补清单，它们全部没有类页。**

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

- `ArmyManagementVM` — 军队整备界面
- `ClanMembersVM` — 氏族成员列表
- `CraftingVM` — 锻造主界面；自建锻造界面时最常被翻的一个
- `EncyclopediaViewModel` — 百科主界面（注意类名是 `EncyclopediaViewModel`，不是 `EncyclopediaVM`；同一区域还有 `EncyclopediaHomeVM` 等分页模型，命名不统一）
- `GameMenuVM` — 地图上弹出的小游戏菜单（打猎、兵棋、逃跑前的拦截菜单）
- `ItemMenuVM` — 交易 / 物品清单菜单
- `KingdomManagementVM` — 王国管理界面
- `PartyVM` — 地图上单个部队的面板数据
- `QuestsVM` — 任务日志界面
- `RecruitmentVM` — 招募界面
- `TownManagementVM` — 城镇管理界面
- `CharacterCreationStageBaseVM` — 角色创建流程的阶段基类。它有 5 个直接子类：`CharacterCreationClanNamingStageVM` / `CharacterCreationCultureStageVM` / `CharacterCreationNarrativeStageVM` / `CharacterCreationOptionsStageVM` / `CharacterCreationReviewStageVM`

来自 `TaleWorlds.MountAndBlade.ViewModelCollection`：

- `MissionOrderVM` — 战斗指令界面
- `MissionAgentLockVisualizerVM` — 锁定某个单位时的锁定环显示
- `OrderOfBattleVM` — 战前布阵界面
- `CrosshairVM` — 准星
- `EscapeMenuVM` — 暂停 / 退出菜单
- `OptionsVM` — 选项主界面；键位与手柄选项的宿主
- `ScoreboardBaseVM` — 计分板基类，多人与单机计分板都从它派生
- `FormationConfiguration` — 阵型配置的展示数据

**没有页面。** 而且**这一桶不适合按类平铺**：官方 ViewModel 之间几乎不共享基类（只有 `CharacterCreationStageBaseVM` 这类 `*BaseVM` 后缀的基类；`*BaseVM` 是对这类基类名的口语简写，**不是一个类型名**）。逐个写页会产出五百多张互不相干的签名罗列，对读者没有增量信息。真正有价值的写法是「以某个界面为主线、串起它依赖的 ViewModel」，那种页面要等界面级专题页才写得出来。

## 一处容易踩的坑：按类型名反查会走偏

有一个类型叫 `ControlCharacterCreationStage`——但**它不是类，是一个委托**：

```
bannerlord-1.4.6/TaleWorlds.Core.ViewModelCollection/ControlCharacterCreationStage.cs
  public delegate void ControlCharacterCreationStage();
```

同目录里还有 `ControlCharacterCreationStageReturnInt` / `ControlCharacterCreationStageWithInt` / `ControlCharacterCreationStageWithString` 三个同族委托。角色创建**阶段**的实现类在 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` 命名空间下，基类是 `CharacterCreationStageBaseVM`。

写这一桶的页面时要注意：**这些名字既不是「不存在的旧文档残留」，也不该按类页处理**——它们是委托，文档归类时归到「回调契约」而不是「界面数据类」。

## 桶间分工

| 你想做的事 | 该去哪个桶 |
| --- | --- |
| 查官方界面的数据类、抄界面写法 | **本桶** |
| 查权威战役数据（`Campaign` / `MobileParty` / `Hero`） | [campaign](../campaign) |
| 战斗内状态与单位 | [mission](../mission) |
| 推屏 / 弹屏 / 输入限制 | [gui](../gui) |
| 沙盒 / 故事模式专属界面数据类 | [sandbox](../sandbox) · [storymode](../storymode) |
| 重绑动作键、输入上下文 | [system](../system) |

[gui](../gui) 与 [system](../system) 是本桶界面的两个上游消费者，两页互链。

## 导航

- ↑ [API 参考首页](../) — 已手写覆盖到哪里
- ↑↑ [1.4.6 中文首页](../../) · [版本首页](../../../)
- ↔ [模块地图](../../architecture/module-map) — 桶名 ↔ 命名空间的权威对照
- ↔ [SDK 分层概览](../../architecture/sdk-overview)
- ↔ English: [API](../../../en/api/)
- ↔ 跨版本：[1.4.5 API](../../../../v1.4.5/zh/api/) · [逐类对比](../../../../versions/)