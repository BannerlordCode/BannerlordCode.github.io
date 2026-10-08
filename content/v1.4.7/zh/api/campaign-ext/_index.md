---
title: "Campaign ext — 战役的扩展面：行为、组件与组件接口"
description: "TaleWorlds.CampaignSystem 的子命名空间所在目录：行为、组件、组件接口、对话、议题与 ObjectSystem。目前 30 页。"
---
# Campaign ext — 战役的扩展面：行为、组件与组件接口

`TaleWorlds.CampaignSystem` 本体在 [campaign](../campaign/)。这个桶装的是它的**子命名空间**，也就是"往战役里加东西"的那一面：行为的基类、可替换的组件模型、组件接口、对话、议题，以及 `TaleWorlds.ObjectSystem` 的 MBO 层。

对模组作者来说这是最常待的一个桶。战役的扩展点几乎全部做成"注册一个行为"或"替换一个组件模型"，而这两类东西的类型都在这里，不在 `campaign/`。

按前缀规则属于这个桶的子命名空间：

| 命名空间 | 1.4.7 的 `.cs` 数量 | 内容 |
| --- | ---: | --- |
| `TaleWorlds.CampaignSystem.CampaignBehaviors` | 135 | 官方战役行为：`BattleCampaignBehavior`、`BuildingsCampaignBehavior` 等 |
| `TaleWorlds.CampaignSystem.ComponentInterfaces` | 126 | 组件模型的**接口**：`AgeModel`、`AllianceModel`、`BattleRewardModel` 等 |
| `TaleWorlds.CampaignSystem.GameComponents` | 124 | 上面那些接口的**官方实现**：`DefaultAgeModel`、`DefaultAllianceModel` 等 |
| `TaleWorlds.CampaignSystem.Issues` | 43 | 战役问题（`IssueBase` 的子类）与其默认效果 |
| `TaleWorlds.CampaignSystem.Conversation` | 12 | 对话：句子、选项、`CampaignMapConversation` |
| `TaleWorlds.ObjectSystem` | 18 | MBO 定义与注册：`MBObjectManager`、`MBObjectBase` |

`ComponentInterfaces` 与 `GameComponents` 是一对：`GameComponents` 里的每个 `Default*` 都是 `ComponentInterfaces` 里对应接口的官方实现。替换组件 = 写一个自己的实现并在加载时替换，这是组件化战役规则的主要手段。

## 本区页面（30）

| 页面 | 讲的是什么 |
| --- | --- |
| [MBObjectBase](./MBObjectBase) | MBO 的基类：定义一个可序列化的战役对象 |
| [MBObjectManager](./MBObjectManager) | MBO 的注册与按类型取用 |
| [PartySizeLimitModel](./PartySizeLimitModel) | 队伍人数上限的组件契约：成员、俘虏、驻军、村民队伍各自的上限 |
| [DefaultPartySizeLimitModel](./DefaultPartySizeLimitModel) | 官方实现：上限 = 基础值 + 技能/perk/政策修正 |
| [PartySpeedModel](./PartySpeedModel) | 行军速度的组件契约：基础速度、最低速度与两段式求值 |
| [DefaultPartySpeedCalculatingModel](./DefaultPartySpeedCalculatingModel) | 官方实现：人数衰减算基础速度，再叠加骑兵比例等项 |
| [PartyHealingModel](./PartyHealingModel) | 队伍治疗契约：伤员存活概率、手术成功率、每日治疗量 |
| [DefaultPartyHealingModel](./DefaultPartyHealingModel) | 官方实现：以医疗技能与 Medicine/Athletics perk 为核心 |
| [PartyWageModel](./PartyWageModel) | 队伍工资契约：兵种日薪、总工资、支付上限与招募花费 |
| [DefaultPartyWageModel](./DefaultPartyWageModel) | 官方实现：按兵种 Tier 给基础日薪，再叠加 perk 与总督修正 |
| [PartyMoraleModel](./PartyMoraleModel) | 队伍士气契约：基础值、断粮/欠饷惩罚与每日士气变化 |
| [DefaultPartyMoraleModel](./DefaultPartyMoraleModel) | 官方实现：以 50 为基值，按「近期事件 → 领导技能 → …」顺序累加 |
| [SettlementFoodModel](./SettlementFoodModel) | 聚落食物契约：库存上限、消耗速率与每日食物变化 |
| [DefaultSettlementFoodModel](./DefaultSettlementFoodModel) | 官方实现：库存上限 300、每 40 繁荣度消耗 1 单位等原版数值 |
| [SettlementMilitiaModel](./SettlementMilitiaModel) | 聚落民兵契约：围城后民兵生成量与每日增减 |
| [DefaultSettlementMilitiaModel](./DefaultSettlementMilitiaModel) | 官方实现：围城后 90–108 民兵、城堡 +2/天等原版数值 |
| [SettlementSecurityModel](./SettlementSecurityModel) | 聚落治安契约：治安每日变化量的全部修正项 |
| [DefaultSettlementSecurityModel](./DefaultSettlementSecurityModel) | 官方实现：上限 100、漂移目标 50、税收三阈值等原版数值 |

| [PrisonerRecruitmentCalculationModel](./PrisonerRecruitmentCalculationModel) | 俘虏招募这条链路的抽象契约：顺从度阈值、每小时累积速度与可招募数量 |
| [DefaultPrisonerRecruitmentCalculationModel](./DefaultPrisonerRecruitmentCalculationModel) | 默认俘虏招募模型：决定俘虏顺从值的增长速率、招募门槛与士气代价 |
| [PartyTrainingModel](./PartyTrainingModel) | 战役层部队经验计算的抽象契约：分摊共享经验、结算战斗经验 |
| [DefaultPartyTrainingModel](./DefaultPartyTrainingModel) | 默认部队经验模型：升级所需经验曲线、每日训练与战斗经验分摊 |
| [PartyDesertionModel](./PartyDesertionModel) | 部队逃亡策略接口：决定每 tick 逃离部队的名册 |
| [DefaultPartyDesertionModel](./DefaultPartyDesertionModel) | 默认逃兵模型：按士气阈值与薪资/兵力上限计算逃亡 |
| [PartyImpairmentModel](./PartyImpairmentModel) | 定义部队陷入混乱状态与攻城脆弱期的时长与触发条件 |
| [DefaultPartyImpairmentModel](./DefaultPartyImpairmentModel) | 默认混乱/脆弱状态模型：判定部队是否有资格陷入及其时长 |
| [InventoryCapacityModel](./InventoryCapacityModel) | 背包容量与物品重量的抽象计算模型：一支部队能携带多少 |
| [DefaultInventoryCapacityModel](./DefaultInventoryCapacityModel) | 默认背包容量与负重模型：按士兵、备用坐骑与牲畜计算 |
| [VolunteerModel](./VolunteerModel) | 决定据点与英雄每天能产出多少志愿兵、以及最高可招档位 |
| [DefaultVolunteerModel](./DefaultVolunteerModel) | 志愿兵招募的默认规则引擎：可招档位、每日产出概率 |

（上表 30 行 = 本桶 30 个页面；计数命令：`find content/v1.4.7/zh/api/campaign-ext -name '*.md' ! -name '_index.md' | wc -l`）

**这 18 页的读法**：前两页（`MBObjectBase` / `MBObjectManager`）是「往战役里塞自定义持久化对象」的入口；
后面 16 页里，**每两页成一对** —— 一个 `XxxModel` 是**契约**（声明要算哪些量），
一个 `DefaultXxxModel` 是**官方实现**（原版数值与公式）。想改游戏规则，先读契约确认自己能覆写什么，
再读默认实现确认原版怎么算；两者在 `## 参见` 里互相链接。

## 尚未收录

这个桶的扩展面主体**仍未落笔**：126 个 `ComponentInterfaces` 契约里已写 8 个（上表的 8 个 `XxxModel`），
124 个 `GameComponents` 官方实现里已写 8 个，而 **135 个官方战役行为、43 个议题类、12 个对话类型**
以及 `MBObjectManager` 之外的 MBO 基础设施，都还没有各自的页面。

量它的命令（在仓库根跑）：

```bash
node -e "const t=require('./tools/_verify/types-1.4.7.json').types,fs=require('fs');
const sub=['ComponentInterfaces','CampaignBehaviors','GameComponents','Conversation','Issues'];
const ce=t.filter(x=>sub.some(s=>x.namespace==='TaleWorlds.CampaignSystem.'+s)||x.namespace.startsWith('TaleWorlds.ObjectSystem'));
const pages=new Set(fs.readdirSync('content/v1.4.7/zh/api/campaign-ext').filter(f=>f.endsWith('.md')&&f!=='_index.md').map(f=>f.replace('.md','')));
console.log(ce.length, pages.size, ce.filter(x=>!pages.has(x.name)).length);"
```

## 相邻目录

[campaign](../campaign/) · [core](../core/) · [core-extra](../core-extra/) · [mission](../mission/) · [mission-ext](../mission-ext/) · [gui](../gui/) · [viewmodel](../viewmodel/) · [engine](../engine/) · [sandbox](../sandbox/) · [custombattle](../custombattle/) · [system](../system/) · [network](../network/) · [modulemanager](../modulemanager/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

## 参见

- ↑ [版本首页](../../)
- ↑ [API 参考](../)
- ↔ [架构总览](../../architecture/)
- ↘ [存档系统](../../architecture/save-system)
- ↘ [模块系统](../../architecture/module-system)