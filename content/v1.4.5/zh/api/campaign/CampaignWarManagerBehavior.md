---
title: "CampaignWarManagerBehavior"
description: "战争数据记账员：订阅 MapEvent 结束与村庄劫掠完成事件，把交战双方的兵员伤亡、舰船损失、攻城与破镇成功次数累加到它们的 StanceLink，为战损面板与外交判定提供底层数据。"
---
# CampaignWarManagerBehavior

**命名空间：** TaleWorlds.CampaignSystem.CampaignBehaviors
**模块：** TaleWorlds.CampaignSystem
**类型：** `public class CampaignWarManagerBehavior : CampaignBehaviorBase`
**基类：** CampaignBehaviorBase
**源文件：** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/CampaignWarManagerBehavior.cs`

## 概述

`CampaignWarManagerBehavior` 是一个纯事件驱动的战役行为，它本身不持有任何状态，只在每次地图战斗结束（`MapEventEnded`）与村庄劫掠完成（`RaidCompletedEvent`）时，把交战双方的兵员伤亡、舰船损失、攻城成功与破镇成功次数累加到它们之间的 `StanceLink` 上。它会跳过土匪势力和同属一个最高势力的内部冲突，因此呈现的是「国家间战争」的净战损与战果，是战损统计、关系衰减与停战条件等上层系统的底层数据来源。

## 心智模型

把它想成「战争数据记账员」。它不发起战争、也不推进战争状态机，只在别人打完仗之后被动记录战果。生命周期由战役统一掌管：SubModule 在 `InitializeGameStarter` 中 `AddBehavior(new CampaignWarManagerBehavior())` 注册后，战役启动 `RegisterEvents` 订阅两个事件；之后每一次相关战斗或劫掠结束，引擎回调 `MapEventEnded` / `OnRaidCompleted`。要读取它累计的结果，不是找这个行为，而是直接看对应 `IFaction.GetStanceWith(other)` 返回的 `StanceLink`（如 `TroopCasualties1/2`、`SuccessfulSieges1/2`）。由于本行为没有任何 `[SaveableField]`，它自身无需存档，`SyncData` 为空——所有统计都常驻在 `StanceLink`（由它自己的存档机制持久化）。何时用：想理解战损/战果数字从哪来，或在 `MapEventEnded` / `RaidCompletedEvent` 后追加你自己的统计。何时不要用：想主动发起或结束战争——那要走 `DeclareWarDecision` / `MakePeaceKingdomDecision` 与对应 `*Action`，本行为只做只读记录、不会改变战争状态。

## 何时使用 / 何时不要使用

- **用**：理解战损/战果数字的来源；在 `MapEventEnded` / `RaidCompletedEvent` 后追加自定义统计（直接复制它的「取两方 → `GetStanceWith` → 累加」模式）。
- **不要用**：主动发起/结束战争（走 `DeclareWarDecision` / `MakePeaceKingdomDecision` 与对应 Action）；直接改 `StanceLink` 字段来「制造战果」，会绕过事件与一致性检查；在 Mission 层调用（它是 CampaignBehavior，只在战役事件中运行）。

## 依赖图

- **上游**：[CampaignBehaviorBase](../CampaignBehaviorBase)（基类与存读档契约）、[CampaignEvents](../CampaignEvents)（`MapEventEnded` / `RaidCompletedEvent` 订阅源）、[CampaignGameStarter](../CampaignGameStarter)（`AddBehavior` 注册入口）、[Campaign](../Campaign)（战役生命周期）、[StanceLink](../StanceLink)（真正的累加目标数据，含 `TroopCasualties*` / `ShipCasualties*` / `SuccessfulSieges*` / `SuccessfulRaids*` 等字段）、[MapEvent](../MapEvent) 与 [RaidEventComponent](../RaidEventComponent)（事件载荷）、[Settlement](../Settlement)（`MapEventSettlement`、`IsFortification` / `IsTown` / `IsVillage` 判定）、[Village](../Village)（`VillageState.Looted` 判定）、[IFaction](../IFaction)（`GetStanceWith`、`IsBanditFaction`、`MapFaction`）。
- **下游 / 相关（决定它统计的战争背景）**：[DeclareWarDecision](../DeclareWarDecision) 与 [MakePeaceKingdomDecision](../MakePeaceKingdomDecision)（战争发起/结束的决策入口）、[CommentOnDeclareWarBehavior](../CommentOnDeclareWarBehavior) / [PeaceOfferCampaignBehavior](../PeaceOfferCampaignBehavior)（同样响应战争/和平事件的邻近行为）、[DiplomacyStance](../DiplomacyStance)（立场类型枚举）、[MapEvent](../MapEvent) / [RaidEventComponent](../RaidEventComponent)（事件载荷来源）。

## 风险

- **`SyncData` 为空，但 `StanceLink` 必须正确存档**：本行为不持有状态，`SyncData` 是空实现；它累加的所有数字都写在 `StanceLink` 上。若你派生本行为并新增 `[SaveableField]`，却忘了在 `SyncData` 里登记 → 读档后统计丢失或错位（典型坏档点）。
- **只统计「国家间」冲突**：土匪（`IsBanditFaction`）与同属一个最高势力（`MapFaction == MapFaction2.MapFaction`）的战斗被直接 `return`，不会计入战损——不要在它身上找「玩家 vs 土匪」的战果。
- **攻城战果仅在攻方胜利且为围城时**：`SuccessfulSieges*` 仅当 `BattleState == AttackerVictory` 且 `MapEventSettlement.IsFortification` 且 `EventType == Siege` 才累加；防守方胜利或野战不计入。城镇围城额外累加 `SuccessfulTownSieges*`。
- **破镇战果要求村庄已被洗劫**：`SuccessfulRaids*` 仅当 `BattleState == AttackerVictory` 且 `MapEventSettlement.IsVillage` 且 `VillageState == Looted` 才累加——单纯路过或未被 looted 的村庄不算。
- **不要直改 `StanceLink` 字段制造战果**：直接赋值会绕过事件与下游一致性（关系衰减、停战条件）；应订阅同一事件自己累加，或走正式的 `*Action`。
- **跨战役缓存失效**：通过 `Campaign.Current.GetCampaignBehavior<CampaignWarManagerBehavior>()` 取出的实例只在本战役有效；新战役会重新 `AddBehavior` 并新建实例，旧引用作废。

## 成员说明

### RegisterEvents() — 订阅两个事件
战役启动时由引擎经 `CampaignBehaviorBase` 契约调用。注册 `CampaignEvents.MapEventEnded.AddNonSerializedListener(this, MapEventEnded)` 与 `CampaignEvents.RaidCompletedEvent.AddNonSerializedListener(this, OnRaidCompleted)`。这里用的是 `AddNonSerializedListener`——监听器本身不被存档，正好契合它无状态的特性。派生时务必保留这两个订阅，否则统计不会触发。

### MapEventEnded(MapEvent) — 累加战斗/舰船伤亡与攻城战果
地图战斗结束时由 `MapEventEnded` 事件回调。先过滤：攻击方或防守方 `MapFaction` 为空、是土匪、或两方同属一个最高势力 → 直接 `return`。否则取 `mapFaction.GetStanceWith(mapFaction2)`，按「本行为站在 `Faction1` 还是 `Faction2`」把 `mapEvent.AttackerSide` / `DefenderSide` 的 `TroopCasualties` 与 `ShipCasualties` 分别累加进 `StanceLink.TroopCasualties1/2` 与 `ShipCasualties1/2`。若同时满足 `BattleState == AttackerVictory` + `MapEventSettlement.IsFortification` + `EventType == Siege`，再按阵营累加 `SuccessfulSieges1/2`，且当该定居点是城镇时额外累加 `SuccessfulTownSieges1/2`。**副作用**：直接改写传入 `StanceLink` 的字段（这些字段持久化在 `StanceLink` 上）。**调用时机**：每次地图战斗结算后由引擎自动触发。

### OnRaidCompleted(BattleSideEnum, RaidEventComponent) — 累加破镇战果
劫掠完成时由 `RaidCompletedEvent` 回调。同样先过滤土匪/同势力。若 `MapEventSettlement` 非空、`BattleState == AttackerVictory` 且该定居点是村庄且 `VillageState == Looted`，按本行为站在 `Faction1` / `Faction2` 累加 `StanceLink.SuccessfulRaids1/2`。**副作用**：改写 `StanceLink` 字段。**调用时机**：村庄劫掠结算、且该村庄已被洗劫时。

### SyncData(IDataStore) — 空实现（无状态）
方法体为空。本行为不持有任何需要存档的字段，全部统计都在 `StanceLink` 上。若你派生并新增 `[SaveableField]`，必须在此登记，否则读档错乱。

## 示例

读取两敌对势力之间由本行为累加的战损与战果（数据常驻在 `StanceLink`，而非行为自身）：

```csharp
IFaction faction1 = Hero.MainHero.MapFaction;
IFaction faction2 = Settlement.CurrentSettlement.MapFaction;
StanceLink stance = faction1.GetStanceWith(faction2);
int warCasualties = stance.TroopCasualties1 + stance.TroopCasualties2;
int warSieges = stance.SuccessfulSieges1 + stance.SuccessfulSieges2;
Campaign.Current.GetCampaignBehavior<CampaignWarManagerBehavior>(); // 行为无公开 API；真实数据在 stance 上
```

复制本行为的「取两方 → `GetStanceWith` → 累加」模式，在战斗结束时追加你自己的统计（参数类型 `MapEvent` 来自事件签名）：

```csharp
CampaignEvents.MapEventEnded.AddNonSerializedListener(this, OnMyMapEventEnded);

private void OnMyMapEventEnded(MapEvent mapEvent)
{
    IFaction attacker = mapEvent.AttackerSide.LeaderParty.MapFaction;
    IFaction defender = mapEvent.DefenderSide.LeaderParty.MapFaction;
    if (attacker == null || defender == null || attacker.IsBanditFaction || defender.IsBanditFaction)
        return;
    if (attacker.MapFaction == defender.MapFaction)
        return;
    StanceLink stance = attacker.GetStanceWith(defender);
    stance.TroopCasualties1 += mapEvent.AttackerSide.TroopCasualties;
}
```

## 参见

- ↑ 父级/枢纽：[战役 API 索引](../) · [CampaignBehaviorBase](../CampaignBehaviorBase)（基类与存读档契约，所有 CampaignBehavior 的对照范本）
- ↔ 相关：
  - [StanceLink](../StanceLink)（本行为累加的战损/战果字段所在）
  - [DeclareWarDecision](../DeclareWarDecision) 与 [MakePeaceKingdomDecision](../MakePeaceKingdomDecision)（战争发起/结束的决策入口，决定本行为统计的立场背景）
  - [CommentOnDeclareWarBehavior](../CommentOnDeclareWarBehavior) / [PeaceOfferCampaignBehavior](../PeaceOfferCampaignBehavior)（同样响应战争/和平事件的邻近行为）
  - [CampaignEvents](../CampaignEvents)（`MapEventEnded` / `RaidCompletedEvent` 订阅源）
  - [MapEvent](../MapEvent) / [RaidEventComponent](../RaidEventComponent)（事件载荷来源）
