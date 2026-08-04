---
title: "战役 API — v1.4.5"
description: "战役模拟层：世界状态、实体、改变世界的 Action、计算的 Model、每 tick 运行的 Behavior、广播的生命周期 Event。心智地图与阅读顺序。"
---
# 战役 API

Campaign 层是**战略模拟**：大地图、势力、据点、队伍，以及推动它们的规则。几乎所有玩法模组都活在这一层。

## ↑ 父级导航

- [API 索引](../)
- [架构索引](../../architecture/)
- [崩溃边界](../../architecture/crash-boundary)

## 本模块是什么

`api/campaign` 持有 `Campaign`（世界单例）及其拥有的一切：实体（`Hero`、`Clan`、`Kingdom`、`Settlement`、`MobileParty`…）、**改变**世界的 `*Action` 家族、**计算**每 tick 数值的 `*Model` 家族、每 tick 跑逻辑的 `CampaignBehaviorBase`、广播生命周期变更的 `CampaignEvents`。

## 枢纽入口

| 分组 | 关键类型 | 说明 |
|------|----------|------|
| 世界 | `Campaign` | `Campaign.Current` 单例 |
| 实体 | `Hero`、`CharacterObject`、`Clan`、`Kingdom`、`Settlement`、`Town`、`Village`、`MobileParty`、`PartyBase`、`Army`、`MapEvent`、`SiegeEvent` | 独立深页（H3） |
| 容器 | `TroopRoster`、`ItemRoster`、`Equipment`、`ItemObject`、`SkillObject`、`CultureObject`、`Banner`、`Workshop` | 实体持有它们 |
| 变更器 | `*Action`（如 `KillCharacterAction`、`GiveGoldAction`、`ChangeKingdomAction`） | **一律走 Apply 变更** |
| 计算器 | `*Model`（如 `PartySpeedModel`、`DiplomacyModel`、`ClanFinanceModel`） | 每 tick 只读 |
| 逻辑 | `CampaignBehaviorBase`、`CampaignGameStarter`、`CampaignBehaviorManager` | 你的每 tick 代码在这里 |
| 事件 | `CampaignEvents` | 订阅生命周期钩子 |

## H3-A/H3-B：按任务进入核心实体

这些波次完成互相连接的战役实体深页。它们解释“读什么”和“用哪个 Action 改什么”；仍未达到手写覆盖标准的长尾类型、`Army`、`MapEvent`、`SiegeEvent` 和容器类型继续按后续波次推进，不要把现有文件存在误认为已经完成手写覆盖。

| 任务 | 从哪里开始 | 关键边界 |
|---|---|---|
| 查询人物、关系、生命周期 | [Hero](./Hero) | 读取状态；金币、关系、死亡和队伍归属走对应 Action。 |
| 读取家族和领地 | [Clan](./Clan) | 家族可以没有王国；影响力、领袖、王国和领地变化有独立 Action。 |
| 读取王国政治 | [Kingdom](./Kingdom) | Model 计算外交评分；宣战、议和、统治家族变化走 Action。 |
| 读取据点和围城 | [Settlement](./Settlement) | `Town`/`Village`/`Hideout` 是不同组件；所有权转移必须走 Action。 |
| 读取和驱动地图队伍 | [MobileParty](./MobileParty) | `PartyBase`、Hero、Army、AI 和位置必须保持双向同步。 |

### H3-B：据点与 Party 实体

| 任务 | 从哪里开始 | 关键边界 |
|---|---|---|
| 查询人物模板、升级与编制来源 | [CharacterObject](./CharacterObject) | 它是注册的角色/兵种模板；英雄与世界状态变化走 `Hero` 和对应 Action。 |
| 读取据点 Party 边界与编制 | [PartyBase](./PartyBase) | 由 `Settlement` 或 `MobileParty` 宿主拥有；不要构造孤立 PartyBase 或直接绕过宿主改世界关系。 |
| 读取城镇/城堡经济与经营状态 | [Town](./Town) | `Town` 是 `Settlement` 的领地组件；所有权和总督变化走对应 Action，数值规则由 Model 计算。 |
| 读取村庄生产、炉灶与贸易绑定 | [Village](./Village) | `Bound` 与 `TradeBound` 不是同一关系；状态变化走 `ChangeVillageStateAction`。 |

## 实体对象图

```text
Campaign
  ├─ Hero ── Clan ── Kingdom
  ├─ MobileParty ── PartyBase ── roster / encounter
  └─ Settlement ── Town / Village / Hideout
        └─ OwnerClan / garrison / siege
```

先从实体页读状态，再进入 [CampaignEvents](./CampaignEvents) 订阅变化，最后到 [campaign-ext](../campaign-ext/) 选择改变世界的 `*Action`。实体页末尾的 Navigation 块提供同级、父级和下游链接。

## 依赖图

```
Campaign → Hero / Clan / Kingdom / Settlement / MobileParty（实体）
Campaign → CampaignBehaviorManager → CampaignBehaviorBase
Campaign → GameModels → *Model
*Action.Apply → 改实体 + 触发 CampaignEvents
CampaignEvents → CampaignBehaviorBase（订阅者）
```

## 推荐阅读顺序

1. `Campaign` — 世界句柄。
2. `CampaignBehaviorBase` + `CampaignGameStarter` — 如何跑你的代码。
3. `*Action` 家族 — 如何安全改变世界。
4. 实体（`Hero`、`Settlement`、`MobileParty`）— 你读/改的对象。
5. `*Model` 家族 — 数值如何被计算。

## 风险概览

- 只通过 `*Action.Apply` 改变世界（崩溃 §2）。
- 不要在 Mission 期间改战役实体（崩溃 §3）。
- 在 Behavior 生命周期内对称地订阅/取消订阅 `CampaignEvents`。

## 参见

- [架构索引](../../architecture/)
- [基础模块](../core/)
- [Mission 模块](../mission/)
- [崩溃边界](../../architecture/crash-boundary)
