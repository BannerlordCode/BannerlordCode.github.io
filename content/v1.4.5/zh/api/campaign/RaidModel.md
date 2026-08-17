---
title: "RaidModel"
description: "决定袭击（Raid）过程中定居点受创程度、炉灶损毁带来的金币奖励、战利品掉率与种类权重的计算模型，由 Campaign 在运行时通过 Campaign.Current.Models.RaidModel 解析。"
---

# RaidModel

**命名空间：** TaleWorlds.CampaignSystem.ComponentInterfaces
**模块：** TaleWorlds.CampaignSystem
**类型：** abstract class RaidModel : MBGameModel<RaidModel>
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/RaidModel.cs

## 概述

该模型集中了「袭击一个村庄 / 定居点」时所有数值规则的纯计算：每模拟步对定居点造成的伤害、每个被毁炉灶奖给袭击领袖的金币、以及战利品（普通物品与村庄产物）的掉率与权重。它不持有任何会写进存档的世界状态——`SettlementHitPoints` 与 `Village.Hearth` 等真实状态由 [RaidEventComponent](../RaidEventComponent) 在地图事件模拟中读写，模型只返回带说明的数值。

## 心智模型

RaidModel 是袭击规则的纯计算扩展点：Campaign 在启动时通过 `GameModels` 从已注册模型集合中按类型解析出唯一实例（`DefaultRaidModel`）并持有，运行时统一用 `Campaign.Current.Models.RaidModel` 取得；它不参与存档序列化，也不在每个 tick 重新构造。真正的袭击循环由地图事件组件 [RaidEventComponent](../RaidEventComponent) 驱动——其 `Update` 在守军被清空（`DefenderSide.TroopCount == 0`）后进入劫掠阶段，每个模拟步调用模型的四个成员：用 `CalculateHitDamage` 累加 `_nextSettlementDamage` 并扣减 `Settlement.SettlementHitPoints`，用 `GoldRewardForEachLostHearth` × 损失炉灶数向袭击领袖发金币，用 `GetRaidLootMultiplier` 缩放金币 / 村庄产物 / 物品掉率，用 `GetCommonLootItemScores` 按权重抽取普通战利品；此外 [VillageHostileActionCampaignBehavior](../VillageHostileActionCampaignBehavior) 在玩家「强征物资（force supplies）成功」的菜单结算里也直接读取 `GoldRewardForEachLostHearth` 发放奖励。要改规则就继承并注册一个替换实现，要读结果就走模型，绝不要直接改模型字段。

## 何时使用 / 何时不要使用

- **使用**：需要查询或自定义「袭击伤害 / 炉灶金币 / 战利品」规则时，读取 `Campaign.Current.Models.RaidModel` 的返回值，或提供 `DefaultRaidModel` 的派生类覆盖四个抽象成员并通过子模块注册替换默认实现。
- **不要使用**：不要直接给 `Settlement.SettlementHitPoints` 或 `Village.Hearth` 赋值来“模拟一次袭击”——真实状态在 [Settlement](../Settlement) / [Village](../Village) 上，由 [RaidEventComponent](../RaidEventComponent) 在每个模拟步写入；模型是无状态纯函数，篡改其字段不会影响世界。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有 `Models` 集合，是运行时获取该模型的入口。
- [GameModels](../GameModels) —— 在构造时通过 `GetGameModel<RaidModel>()` 解析并缓存实例。
- [RaidEventComponent](../RaidEventComponent) —— 地图事件组件，是四个成员的主要调用方（袭击模拟主循环）。
- [VillageHostileActionCampaignBehavior](../VillageHostileActionCampaignBehavior) —— 在玩家「强征物资成功」的菜单结算里调用 `GoldRewardForEachLostHearth`。

下游与协同系统：

- [Settlement](../Settlement) —— 模型读写其 `SettlementHitPoints`（定居点生命值）。
- [Village](../Village) —— 模型计算涉及 `Village.Hearth`（炉灶数）与 `VillageType.Productions`（村庄产物）。
- [MapEventSide](../MapEventSide) —— `CalculateHitDamage` 的入参，代表袭击方各队伍。
- [PartyBase](../PartyBase) —— `GetRaidLootMultiplier` 的入参，代表接收战利品的一方。
- `ExplainedNumber`（`TaleWorlds.Core`）—— `CalculateHitDamage` 与 `GetRaidLootMultiplier` 的返回类型，用于携带带说明项的数值（无独立页，不链）。
- `ItemObject` / `MBReadOnlyList<(ItemObject, float)>`（`TaleWorlds.Core` / `TaleWorlds.Library`）—— `GetCommonLootItemScores` 的返回元素类型（无独立页，不链）。

## 风险

- **跨战役重载缓存实例**：`Campaign.Current.Models.RaidModel` 在每次新战役 / 读档时由 `GameModels` 重新解析。把实例缓存进静态字段或长生命周期对象，会在重载后指向旧战役的已销毁对象，调用即崩溃或读到陈旧规则。每次需要时都重新走 `Campaign.Current.Models` 获取。
- **战役开始前访问**：`Campaign.Current` 或 `Campaign.Current.Models` 在战役未启动时为 `null`。在 `MainMenu`、子模块加载早期或编辑器上下文里调用会直接空引用。
- **误判状态层**：该模型是无状态纯函数，没有需要持久化的字段，也不含 `[SaveableField]`。若你新增的派生类里加了可变字段并期望它随存档恢复，会发现这些值永远不会被序列化，从而产生隐蔽的规则漂移。
- **在 Mission/战斗层调用**：模型属于 Campaign 层，仅在战役模拟中存在；在 `Mission` 或战场逻辑里取 `Campaign.Current.Models` 是错误的访问层。
- **只替换模型不改写入路径**：派生类改变了伤害 / 战利品公式，但真正把这些数值写回 `Settlement.SettlementHitPoints`、`Village.Hearth` 并发放金币 / 物品的是 [RaidEventComponent](../RaidEventComponent)（及 [VillageHostileActionCampaignBehavior](../VillageHostileActionCampaignBehavior)）。只替换模型、却让组件按旧假设处理状态，会出现数值与预测不一致。

## 成员说明

### 袭击伤害与炉灶金币

- **`GoldRewardForEachLostHearth`**（属性，`int`）
  - 用途：返回每损毁一个炉灶（hearth）时奖给袭击方领袖英雄的金币数（默认实现为 `4`）。
  - 副作用：无，纯属性；真正的金币发放由调用方经 `GiveGoldAction.ApplyBetweenCharacters` 完成（`GiveGoldAction` 无独立页，不链）。
  - 调用时机：在 [RaidEventComponent](../RaidEventComponent) 的 `Update` 劫掠阶段按损失炉灶数 `num` 结算 `(int)(num * GoldRewardForEachLostHearth * lootMultiplier)` 发给袭击领袖；也由 [VillageHostileActionCampaignBehavior](../VillageHostileActionCampaignBehavior) 在玩家「强征物资成功」菜单结算中按 `Max((int)(Hearth * 0.15f), 20)` 作为 `num` 发放给主角。

- **`CalculateHitDamage(MapEventSide attackerSide, float settlementHitPoints)`**
  - 用途：返回袭击方在本模拟步对定居点造成的伤害（`ExplainedNumber`）。默认实现为 `(√(attackerSide.TroopCount) + 5) / 900 × 本步小时数`，并对拥有 `Roguery.NoRestForTheWicked` 专长的袭击方各队伍叠加一个 `SecondaryBonus` 因子。
  - 副作用：无，纯计算；结果被 [RaidEventComponent](../RaidEventComponent) 累加进 `_nextSettlementDamage` 后再扣减 `Settlement.SettlementHitPoints`。
  - 调用时机：仅由 [RaidEventComponent](../RaidEventComponent) 的 `Update` 在守军清空、进入劫掠阶段后每个模拟步调用。

### 战利品掉率与种类

- **`GetRaidLootMultiplier(PartyBase receivingParty)`**
  - 用途：返回袭击战利品倍率（`ExplainedNumber`，默认实现恒为 `1.0`），用于缩放金币奖励、村庄产物掉率与物品掉落概率。
  - 副作用：无，纯计算。
  - 调用时机：[RaidEventComponent](../RaidEventComponent) 的 `Update` 在劫掠阶段先以 `AttackerSide.LeaderParty` 取一次用于金币与产物结算；之后对逐件被劫物品以具体 `partyBase` 再取一次用于掉率判定（`0.5f * 倍率`）。

- **`GetCommonLootItemScores()`**
  - 用途：返回常见的战利品物品及其出现权重列表 `MBReadOnlyList<(ItemObject, float)>`。默认实现从 hides、hardwood、tools、grain、linen、sheep、mule、pottery 构造，权重为 `100 / (物品价值 + 1)`。
  - 副作用：无，纯计算；`DefaultRaidModel` 内部以惰性缓存（`CommonLootItemSpawnChances`）持有该列表。
  - 调用时机：[RaidEventComponent](../RaidEventComponent) 的 `Update` 在劫掠阶段以 `MBRandom.ChooseWeighted(...)` 按权重随机抽取一件普通战利品（基础概率 `0.25f * 倍率`）。

## 示例

读取某个村庄被袭击时的单步伤害（取自 RaidEventComponent.Update 的袭击模拟上下文）：

```csharp
// 在 RaidEventComponent.Update 的袭击模拟上下文中
MapEventSide attackerSide = MapEventSettlement.MapEvent.AttackerSide;
float hitPoints = MapEventSettlement.SettlementHitPoints;
ExplainedNumber hitDamage = Campaign.Current.Models.RaidModel
    .CalculateHitDamage(attackerSide, hitPoints);
_nextSettlementDamage += hitDamage.ResultNumber;
```

按损失的炉灶数给袭击领袖发放金币（取自 RaidEventComponent 劫掠阶段的结算）：

```csharp
// num 为本步损失的炉灶数
float lootMultiplier = Campaign.Current.Models.RaidModel
    .GetRaidLootMultiplier(AttackerSide.LeaderParty).ResultNumber;
int gold = (int)(num * (float)Campaign.Current.Models.RaidModel.GoldRewardForEachLostHearth * lootMultiplier);
GiveGoldAction.ApplyBetweenCharacters(null, AttackerSide.LeaderParty.LeaderHero, gold);
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [GameModels](../GameModels) · [RaidEventComponent](../RaidEventComponent) · [VillageHostileActionCampaignBehavior](../VillageHostileActionCampaignBehavior) · [Settlement](../Settlement) · [Village](../Village) · [MapEventSide](../MapEventSide) · [PartyBase](../PartyBase) · [CampaignBehaviorBase](../CampaignBehaviorBase)
