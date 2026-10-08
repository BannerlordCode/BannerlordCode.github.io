---
title: "EncounterManager"
description: "遭遇战总调度：每帧检测移动部队是否与敌人或聚落接触并触发交互，提供部队战与聚落战两个手动开战入口。"
---
# EncounterManager

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class EncounterManager`
**Source:** `TaleWorlds.CampaignSystem/EncounterManager.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`EncounterManager` 是战役地图层的**遭遇战调度器**：它决定「两支部队在地图上相遇时什么时候真的打起来」「一支部队走到聚落门口时是入城、被劫掠还是被围攻」。它是 `static` 类，361 行，全部方法都是 `public static`，mod 直接调即可。

它的工作分两条线。**自动线**：`Tick` 每帧被战役循环调用，遍历 `Campaign.Current.MobileParties`，对每支满足条件的部队跑 `HandleEncounterForMobileParty`——条件包括部队活跃、没有附着到其他部队、不在地图事件里、不在聚落内（驻军除外）、不在被围攻状态等，全部通过后才触发 AI 的交互行为。**手动线**：`StartPartyEncounter` 和 `StartSettlementEncounter` 是两个「直接开战」入口，供剧情、任务、AI 决策在需要时强制触发一场战斗。

## 心智模型

**它是「地图接触 → 战斗」的翻译层，不是「战斗本身」。**

- **它管「什么时候打」**：部队在地图上重叠、部队走到聚落边界——这些「接触」是否变成战斗，由它判定。
- **它不管「战斗怎么打」**：战斗打响后逻辑在 `Mission` 层，它只负责把双方送进 `PlayerEncounter` / `MapEvent` / `StartBattleAction`。
- **它不管「AI 想干什么」**：`HandleEncounterForMobileParty` 最后调的是 `mobileParty.Ai.AiBehaviorInteractable.OnPartyInteraction(mobileParty)`——AI 决定「接触后做什么」，它只负责「允许接触发生」。
- **它区分「玩家参与」和「AI 互打」**：`StartPartyEncounter` 里有一整套分支——玩家主队参战、玩家正在观战、双方都是 AI、一方在攻城……每种情形走不同的初始化路径。

**为什么条件判定那么长**：`HandleEncounterForMobileParty` 的 if 条件有十几个子句，因为「部队在地图上」不等于「部队可以打」——正在入城的、正在被围攻的、正在海上的、正在护送商队的、AI 正要去某个点的部队，都不应该被随机遭遇打断。

**一个常见误用**：直接调 `StartPartyEncounter` 期望「两支 AI 部队开打」。如果双方都不是玩家主队且玩家不在相关地图事件里，它确实会走 `StartBattleAction.Apply`；但如果玩家主队正在附近的地图事件里，它会优先把玩家拉进战斗。想强制 AI 互打要先确认玩家不在场。

## 怎么用

### 怎么拿到

```csharp
// 静态类，直接调，不需要拿实例
EncounterManager.Tick(dt);
```

### 典型用法

```csharp
// 每帧驱动全图遭遇检测（正常由战役循环调，mod 一般不需要自己调）
EncounterManager.Tick(dt);

// 手动让玩家主队与一支部队开战
EncounterManager.StartPartyEncounter(MobileParty.MainParty.Party, targetParty);

// 手动让一支部队攻击一个聚落（触发攻城/劫掠/入城判定）
EncounterManager.StartSettlementEncounter(attackerParty, settlement);
```

每帧入口是 `Tick`（`EncounterManager.cs:31`），它内部遍历全部部队并对每支跑 `HandleEncounterForMobileParty`（`EncounterManager.cs:49`）。两个手动入口分别是 `StartPartyEncounter`（`EncounterManager.cs:79`）和 `StartSettlementEncounter`（`EncounterManager.cs:124`）。

### 坑

- **`Tick` 在时间暂停时不工作**。`HandleEncounters` 开头检查 `Campaign.Current.TimeControlMode != CampaignTimeControlMode.Stop`，暂停时整个遭遇检测跳过。
- **`HandleEncounterForMobileParty` 的条件很苛刻**。部队必须 `IsActive`、`AttachedTo == null`、`MapEventSide == null`、不在聚落内（驻军除外）、不在被围攻状态（攻城中的除外）……任何一个不满足就直接返回。
- **`StartSettlementEncounter` 不是「直接攻城」**。它先检查攻击者的 `DefaultBehavior` 和 `ShortTermBehavior`——围攻中的走围城逻辑，劫掠中的走劫掠逻辑，只是路过聚落的走入城逻辑。想强制攻城要先设 `SetMoveBesiegeSettlement`。
- **`EncounterModel` 是转发属性**。它直接返回 `Campaign.Current.Models.EncounterModel`，mod 读遭遇相关数据应该走模型而不是这个静态类。

## 关键成员

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| 类声明 | `public static class EncounterManager` | 遭遇战总调度，361 行；全部方法 public static，mod 直接调 | `EncounterManager.cs:18` |
| `EncounterModel` | `static EncounterModel EncounterModel { get; }` | 当前战役的遭遇模型，转发到 `Campaign.Current.Models.EncounterModel` | `EncounterManager.cs:22` |
| `Tick` | `static void Tick(float dt)` | 每帧入口：时间未暂停时遍历全部部队跑遭遇检测 | `EncounterManager.cs:31` |
| `HandleEncounterForMobileParty` | `static void HandleEncounterForMobileParty(MobileParty mobileParty, float dt)` | 单支部队的遭遇判定：活跃、无附着、无地图事件、不在聚落（驻军除外）等条件全过才触发 AI 交互 | `EncounterManager.cs:49` |
| `StartPartyEncounter` | `static void StartPartyEncounter(PartyBase attackerParty, PartyBase defenderParty)` | 两支部队开战入口：区分玩家参战、AI 互打、加入进行中等情形 | `EncounterManager.cs:79` |
| `StartSettlementEncounter` | `static void StartSettlementEncounter(MobileParty attackerParty, Settlement settlement)` | 部队攻聚落入口：按攻击者行为走围城、劫掠、入城等不同分支 | `EncounterManager.cs:124` |

## 真实示例

```csharp
// 一个 CampaignBehavior：玩家进入某区域时，强制与最近的敌对战开战
public class AmbushBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.HourlyTick.AddNonSerializedListener(this, this.OnHourlyTick);
    }

    private void OnHourlyTick()
    {
        MobileParty nearest = FindNearestEnemy(MobileParty.MainParty);
        if (nearest == null) return;
        float dist = Campaign.Current.Models.MapDistanceModel
            .GetDistance(MobileParty.MainParty, nearest);
        if (dist < 2f)
            EncounterManager.StartPartyEncounter(
                MobileParty.MainParty.Party, nearest.Party);
    }
}
```

## 参见

- [`../Campaign`](../Campaign) — 战役根对象，`EncounterManager.Tick` 的每帧调用者。
- [`../MobileParty`](../MobileParty) — 移动部队实体，`HandleEncounterForMobileParty` 的参数类型。
- [`../PartyBase`](../PartyBase) — 战斗接口基类，`StartPartyEncounter` 的参数类型。
- [`../Settlement`](../Settlement) — 聚落实体，`StartSettlementEncounter` 的参数类型。
- [`../MapEvent`](../MapEvent) — 地图事件，部队参战后归属的战斗容器。

## 导航

- 同桶：[`../Campaign`](../Campaign) · [`../MobileParty`](../MobileParty) · [`../PartyBase`](../PartyBase) · [`../Settlement`](../Settlement) · [`../MapEvent`](../MapEvent)
- 父索引：[`../_index`](../_index)
