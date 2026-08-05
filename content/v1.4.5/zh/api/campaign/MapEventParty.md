---
title: "MapEventParty"
description: "地图事件中把一个 PartyBase 绑定到事件一方，并记录兵力快照、伤亡、贡献、战利品和战后奖励的派对记录。"
---

# MapEventParty

**命名空间：** `TaleWorlds.CampaignSystem.MapEvents`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public class MapEventParty`  
**基类：** 无  
**源文件：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/MapEventParty.cs`

## 一句话职责

`MapEventParty` 是 [`MapEventSide`](../MapEventSide) 内的单派对战斗记录，把一个 [`PartyBase`](../PartyBase) 与兵力快照、伤亡、贡献、战利品去向和战后奖励连接起来。

## 心智模型

构造函数是 `internal`，由派对加入事件时的 `MapEventSide` 创建。它不是派对本身，也不替代 `PartyBase.MemberRoster`；它是从该派对当前兵力建立的事件范围记录。`Update()` 会重建 `FlattenedTroopRoster` 快照，而 `OnTroopKilled`、`OnTroopWounded` 和 `OnTroopRouted` 等回调会按照战斗协议同时更新事件记录，并在源码要求时更新派对的实际 Roster。

记录会一直绑定在事件一方，直到事件结算。`RosterToReceiveLootMembers`、`RosterToReceiveLootPrisoners` 和 `RosterToReceiveLootItems` 会为玩家派对与 NPC 派对选择不同的目标。因此它适合读取战斗视图，却不适合在回调顺序之外任意修改。

## 何时使用，何时不要使用

**适合使用：**

- 读取哪一个 `PartyBase` 参加了哪一方，以及事件开始时有多少兵力。
- 在正确阶段读取事件范围内的伤亡、参战人数限制、贡献或战后解释数值。
- 处理已经由战斗结束回调提供合法时机的结果。

**不要这样使用：**

- 不要直接添加或移除派对；让 [`MapEventSide`](../MapEventSide)、遭遇逻辑和相关行动协调成员关系。
- 不要把 `RosterToReceiveLoot...` 当成可替换的临时 Roster；它们是引擎选出的战利品目标。
- 不要调用 `Update()` 或伤亡回调来伪造结算；这些方法会改事件快照，伤亡回调还可能改 `PartyBase.MemberRoster`。

## 依赖关系与所有权

- **所有者：** [`MapEventSide`](../MapEventSide) 持有记录列表；[`MapEvent`](../MapEvent) 持有双方并控制事件生命周期。
- **绑定对象：** `Party` 指向一个 `PartyBase`，可能是主派对、MobileParty、驻军、民兵或其他 Settlement 派对。
- **战斗数据：** `FlattenedTroopRoster`、`TroopRoster`、`ItemRoster`、`UniqueTroopDescriptor`、`MapEventSide` 和 `BattleSideEnum` 共同构成事件视图。
- **下游：** `PlayerEncounter` 消费玩家战利品去向；`BattleRewardModel`、`CombatXpModel` 与战役行为计算奖励和后果。
- **存档：** 记录及伤兵/死亡/溃逃 Roster 属于地图事件存档图。引擎恢复稳定的派对身份，mod 不应再存一份对象副本。

## 关键成员与调用时机

| 成员 | 用途、副作用与时机 |
|---|---|
| `Party` | 所属 `PartyBase`；记录创建后可用，但只有在事件仍保留该派对时才应继续使用。 |
| `Troops`、`HealthyManCountAtStart`、`ParticipatingTroopCount`、`HasTroopLimit` | 读取兵力快照和 Mission 分配边界；`Troops` 不是实时派对 Roster。 |
| `WoundedInBattle`、`DiedInBattle`、`RoutedInBattle` | 由战斗回调填充的事件伤亡 Roster，应在对应结果阶段读取。 |
| `ContributionToBattle` | 用于战斗奖励和分配逻辑的贡献，不是直接发放金币或声望。 |
| `RosterToReceiveLootMembers/Prisoners/Items` | 解析玩家或 NPC 战利品的合法目标；使用前必须处于有效的玩家遭遇和派对生命周期。 |
| `Update()` | 从 `Party.MemberRoster` 重建扁平快照，只应在宿主规定的同步点调用。 |
| `OnTroopKilled/Wounded/Routed(...)` | 把战斗结果写入事件快照，并在源码要求时更新实时派对 Roster；时机由引擎回调控制。 |
| `OnRoundEnd(...)`、`OnTroopScoreHit(...)` | 通过战役 Model 更新士气、经验和贡献，不是任意发奖 API。 |
| `SetRenownInfluenceAndMoraleOnBattleEnd(...)` | 保存带解释的战后结果，不能单独发放这些数值。 |

## 真实获取示例

从活动战役事件读取玩家一方，并按 `PartyBase` 找到记录：

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.MapEvents;

public static int GetMainPartyStartingMen()
{
    MapEvent mapEvent = Campaign.Current.MapEventManager.MapEvents
        .FirstOrDefault(eventRecord => eventRecord.IsPlayerMapEvent);
    MapEventParty record = mapEvent?.PartiesOnSide(BattleSideEnum.Attacker)
        .FirstOrDefault(eventParty => eventParty.Party == PartyBase.MainParty);
    return record?.HealthyManCountAtStart ?? 0;
}
```

读取防守方时使用 `BattleSideEnum.Defender`。记录可能在结算前离开或被移除，因此必须处理找不到记录的情况。

## 风险与崩溃边界

1. `Troops` 是事件快照，不是当前 `MemberRoster`；伤亡、转移或兵力分配后直接当实时数量会得到错误结果。
2. 伤亡回调会修改实时 Roster，并使用 `UniqueTroopDescriptor` 查找；传入其他事件的 descriptor 可能造成无效访问或重复损失。
3. 玩家战利品属性会经过 `PlayerEncounter.Current`；在玩家遭遇之外读取可能为空，或对 AI 战斗产生错误语义。
4. 兵力分配锁定后调用 `Update()` 可能擦掉 Mission supplier 依赖的快照；应让 `MapEventSide` 控制分配和刷新时机。
5. 不要把 `MapEventParty`、`PartyBase` 或 Roster 引用带过 `MapEventEnded` 存入存档。保存稳定 ID 或标量结果，加载后再获取当前派对。

## 版本说明

v1.4.5 使用 `FlattenedTroopRoster` 快照、可存档的伤亡 Roster 和由 Model 计算的奖励。构造函数可见性、Roster 兼容回调和海战成员可能跨版本变化；直接调用公开回调前必须重新核对源码。

## 导航

- ↑ 父级：[Campaign API](../)
- ↔ 同区：[`MapEvent`](../MapEvent) · [`MapEventSide`](../MapEventSide) · [`PartyBase`](../PartyBase)
- 相关：[`TroopRoster`](../TroopRoster) · [`ItemRoster`](../ItemRoster) · [`PlayerEncounter`](../PlayerEncounter) · [`MapEventComponent`](../MapEventComponent)
- English: [MapEventParty](../../../../en/api/campaign/MapEventParty)
