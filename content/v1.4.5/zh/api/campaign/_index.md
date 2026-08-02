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
