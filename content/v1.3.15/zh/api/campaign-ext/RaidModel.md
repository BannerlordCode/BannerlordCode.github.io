---
title: "RaidModel"
description: "村庄/定居点突袭的规则模型：计算每 tick 的破坏伤害、烧毁炉灶带来的金币奖励以及突袭战利品的掉落权重与倍率。"
---
# RaidModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public abstract class RaidModel : MBGameModel<RaidModel>`  
**Base:** `MBGameModel<RaidModel>`  
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/RaidModel.cs`

## 概述

`RaidModel` 是战役里**突袭（Raid）机制**的规则集合：当一支部队把村庄/定居点的守军清空、进入掠夺阶段后，引擎每个 tick 都会向它问四个问题——这一 tick 对据点造成多少破坏、每烧毁一个炉灶（Hearth）给首领多少金币、战利品按什么权重掉落、以及对某个部队的战利品倍率是多少。

它的默认实现是 [DefaultRaidModel](../DefaultRaidModel/)，由 SandBox 模块在启动时通过 `gameStarter.AddModel(new DefaultRaidModel())` 注册。所有实际计算都发生在 [RaidEventComponent](../RaidEventComponent/) 的 `Update` 循环里——模型本身不保存任何状态，它只是被反复调用的纯规则函数。

## 心智模型

把 `RaidModel` 想象成**“突袭结算公式本”**，放在战役规则层（Campaign 层，Foundation/Campaign/Mission/UI/Save 中的 Campaign 层），由 `Campaign.Current.Models` 这个模型容器持有：

- **它不拥有数据，也不驱动流程。** 真正推动突袭的是 [RaidEventComponent](../RaidEventComponent/)：只有当防守方部队数量归零、据点进入“劫掠阶段”后，组件才每个 tick 调用 `CalculateHitDamage` 累积伤害，并在累积量超过阈值时一次性结算炉灶损失、金币与战利品。
- **四个成员各回答一个数值问题**，全部基于传入的 `MapEventSide` / `PartyBase` / `SettlementHitPoints`，不读全局可变状态，因此可以安全替换而不破坏其它系统。
- **不要自己 `new RaidModel()`。** 取实例走 `Campaign.Current.Models.RaidModel`；要改规则就继承 [DefaultRaidModel](../DefaultRaidModel/) 并覆盖对应成员，然后在你的 `MBSubModuleBase` 里用 `gameStarter.AddModel(...)` 注册（注意注册顺序——后注册的会覆盖先注册的同名模型）。
- **何时用**：你想调整突袭数值（如提高/降低每炉灶金币、让突袭更猛或更温和、替换战利品表）时，覆盖这个模型。  
  **何时不要用**：要发起一次突袭、设置村庄状态、发金币、加战利品——那些是 [VillageHostileActionCampaignBehavior](../VillageHostileActionCampaignBehavior/)、`ChangeVillageStateAction`、`GiveGoldAction` 的职责，模型只负责“算多少”，不负责“做动作”。

## 如何获取 RaidModel

```csharp
using TaleWorlds.CampaignSystem.ComponentInterfaces;

// 战役运行时，通过模型容器拿当前生效的实例（默认是 DefaultRaidModel）
RaidModel raidModel = Campaign.Current.Models.RaidModel;
if (raidModel != null)
{
    int goldPerHearth = raidModel.GoldRewardForEachLostHearth;
}
```

要替换规则，写一个子类并注册：

```csharp
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;

public class MyRaidModel : DefaultRaidModel
{
    // 覆盖成员见下方“成员说明”
}
```

```csharp
// 在你的 MBSubModuleBase.OnGameStart / OnCampaignStart 中：
protected override void OnGameStart(Game game, IGameStarter gameStarter)
{
    if (gameStarter is CampaignGameStarter campaignStarter)
    {
        campaignStarter.AddModel(new MyRaidModel());
    }
}
```

## 成员说明

按职责分成三组：破坏结算、炉灶金币、战利品。

### 破坏与炉灶金币

#### `public abstract int GoldRewardForEachLostHearth { get; }`
每烧毁**一个炉灶（Hearth）** 时，作为突袭首领的 `Hero` 能拿到的金币基数。[DefaultRaidModel](../DefaultRaidModel/) 默认返回 `4`。实际发钱公式是 `丢失的炉灶数 × GoldRewardForEachLostHearth × GetRaidLootMultiplier(首领部队).ResultNumber`，并通过 `GiveGoldAction.ApplyBetweenCharacters(null, leaderHero, gold, disableNotification: true)` 发放（仅对玩家首领弹“掠夺所得”提示）。
- 调用时机：仅在据点被清空、进入劫掠结算、且本轮累计破坏已超过阈值时发生。
- 副作用：仅返回常数，无副作用；真正的转账由调用方（[RaidEventComponent](../RaidEventComponent/)）完成。

#### `public abstract ExplainedNumber CalculateHitDamage(MapEventSide attackerSide, float settlementHitPoints)`
计算**当前这一 tick** 对据点造成的破坏量（写入 `SettlementHitPoints` 的递减量）。
[DefaultRaidModel](../DefaultRaidModel/) 的实现为 `(√(attackerSide.TroopCount) + 5) / 900 × DeltaHours`，并对首领拥有 `Roguery.NoRestForTheWicked` 特长的 attacker 方追加一个加成因子。
- 调用时机：每个 tick 由 [RaidEventComponent](../RaidEventComponent/).`Update` 调用一次，返回值累加到内部 `_nextSettlementDamage`，只有超过 `0.05` 才真正结算。
- 副作用：无（纯计算）；返回 `ExplainedNumber` 以便你在 UI/日志里看到各部分加成来源。
- 注意：传入的 `settlementHitPoints` 当前在默认实现里未被使用，但保留为参数以便派生模型按据点剩余血量调整。

### 战利品掉落

#### `public abstract MBReadOnlyList<(ItemObject, float)> GetCommonLootItemScores()`
返回一份**通用战利品权重表**：每个元组是 `(物品, 权重)`。默认实现包含兽皮、硬木、工具、谷物，以及 linen / sheep / mule / pottery 等，权重按 `100 / (物品基础价值 + 1)` 折算。
[RaidEventComponent](../RaidEventComponent/) 在每次随机掉落时调用 `MBRandom.ChooseWeighted(...)` 从中抽一件常见物资（约 25% × 倍率 的概率）。
- 调用时机：劫掠结算中、对每个被掠夺的炉灶尝试一次常见物资掉落时。
- 副作用：无。只是提供掉落池与权重，真正的入包由调用方完成。

#### `public abstract ExplainedNumber GetRaidLootMultiplier(PartyBase receivingParty)`
返回对**指定部队**的战利品总倍率（影响炉灶金币和物品掉落数量）。[DefaultRaidModel](../DefaultRaidModel/) 默认返回 `1.0`。
- 调用时机：每轮劫掠结算开头一次（作用于金币与 `_nextSettlementDamage` 计算结果），以及每件被掠夺物品掉落判定时一次。
- 副作用：无。返回 `0` 会**完全禁掉**该部队的炉灶金币与掉落。
- 跨版本：此成员**在 1.3.15 及更早版本中不存在**，是之后新增的（见下方“跨版本提示”）。

## 真实示例

### 示例 1：在自定义行为里读取本 tick 的破坏量

```csharp
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.MapEvents;
using TaleWorlds.CampaignSystem.Party;

// 假设你已经拿到当前 Raid 的 attackerSide 与据点剩余血量
float hitPoints = raidEvent.MapEventSettlement.SettlementHitPoints;
ExplainedNumber dmg = Campaign.Current.Models.RaidModel.CalculateHitDamage(attackerSide, hitPoints);
float thisTickDamage = dmg.ResultNumber; // 仅本 tick 的破坏量，需累积后才结算
```

### 示例 2：覆盖模型，让每炉灶金币翻倍并放大战利品

```csharp
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

public class GenerousRaidModel : DefaultRaidModel
{
    // 每烧毁一个炉灶给 8 金（默认 4）
    public override int GoldRewardForEachLostHearth => 8;

    // 对所有部队的战利品与金币翻倍
    public override ExplainedNumber GetRaidLootMultiplier(PartyBase receivingParty)
    {
        return new ExplainedNumber(2f);
    }
}
```

## 依赖图

- 上游（谁创建 / 持有 / 调用它）：
  - [Campaign](../../campaign/Campaign/) 通过 `Campaign.Current.Models` 容器持有本模型实例。
  - [DefaultRaidModel](../DefaultRaidModel/) 是默认实现；由 SandBox 模块 `AddModel` 注册。
  - 基类为 `MBGameModel<RaidModel>`，即模型注册基类：引擎按类型从 `GameModels` 表取出对应实例，同名模型后注册者覆盖先注册者。
- 下游（谁消费它的结果）：
  - [RaidEventComponent](../RaidEventComponent/) 在每个 tick 调用四个成员完成破坏、金币、战利品结算。
  - [VillageHostileActionCampaignBehavior](../VillageHostileActionCampaignBehavior/) 负责发起突袭并把村庄置为 `BeingRaided`。
  - 结算动作走 [ChangeVillageStateAction](../ChangeVillageStateAction/)（置为 `Looted` / `Normal`）与 [GiveGoldAction](../GiveGoldAction/)（发掠夺金币）。
  - 结果反映到据点与村庄数据：[Settlement](../../campaign/Settlement/)、[Village](../../campaign/Village/)（炉灶 `Hearth`、据点血量 `SettlementHitPoints`）、[Hero](../../campaign/Hero/)（首领得到金币）、[PartyBase](../../campaign/PartyBase/)（物品入包）。
  - 事件通知经 `CampaignEventDispatcher.Instance.RaidCompleted` / `OnItemsLooted`。
- 相关模型：同桶的其它规则模型如 [BattleRewardModel](../BattleRewardModel/)、[AgeModel](../AgeModel/)，均通过 `Campaign.Current.Models` 访问。

## 风险

- **模型未注册**：若你的模块在 `AddModel(new DefaultRaidModel())` 之前就访问 `Campaign.Current.Models.RaidModel`，会拿到 `null` 并在 [RaidEventComponent](../RaidEventComponent/) 运行时抛出空引用。务必确认 SandBox 或你自己的模块已注册该模型后再让突袭发生。`MBGameModel<T>` 从 `GameModels` 表中按类型取出，同名模型后注册者覆盖先注册者。
- **破坏与战利品的时序**：`CalculateHitDamage` 每 tick 调用，但返回值先累加到 `_nextSettlementDamage`，**只有累计超过 0.05 才一次性结算**炉灶损失、金币与掉落。不要在单次调用里期望“立刻扣炉灶/发钱”；这是分块结算，不是逐 tick 全额结算。
- **覆盖 `GetRaidLootMultiplier` 返回 0**：会同时禁掉炉灶金币与物品掉落，且默认实现依赖传入的 `receivingParty` 参数；忽略该参数会让所有部队拿到同一倍率。
- **不要手动改 `SettlementHitPoints` / `Village.Hearth`**：这些由 [RaidEventComponent](../RaidEventComponent/) + 模型驱动；直接写字段会绕过 `RaidCompleted`/`ChangeVillageStateAction` 事件与村庄状态机，可能导致村庄卡在 `BeingRaided` 或坏档。
- **存档**：突袭进行中的累计伤害等状态由 [RaidEventComponent](../RaidEventComponent/) 的 `[SaveableField]` 持久化；模型本身无状态，替换模型不影响旧档加载，但旧档（1.3.15 之前）没有 `GetRaidLootMultiplier`，读旧档时默认实现不会调用该成员。

## 跨版本提示

- **v1.3.15 / v1.3.0**：`RaidModel` 只有三个成员——`GetCommonLootItemScores()`、`GoldRewardForEachLostHearth`、`CalculateHitDamage(...)`。**`GetRaidLootMultiplier(PartyBase)` 当时尚不存在**，默认实现里也没有战利品倍率概念；写兼容 1.3.15 的 mod 时不要调用该成员，也不要在子类中覆盖它。
- **v1.4.5（本站源真相）**：新增了 `GetRaidLootMultiplier(PartyBase receivingParty)`，默认返回 `1.0`，用于统一调整金币与掉落倍率。本页按 1.4.5 完整 API 编写，1.3.15 文档子树中的调用需自行去掉该成员。

## 参见

- ↑ 父级：[campaign-ext 索引](../)
- ↔ 同级：[DefaultRaidModel](../DefaultRaidModel/) · [RaidEventComponent](../RaidEventComponent/) · [GiveGoldAction](../GiveGoldAction/) · [ChangeVillageStateAction](../ChangeVillageStateAction/) · [VillageHostileActionCampaignBehavior](../VillageHostileActionCampaignBehavior/) · [BattleRewardModel](../BattleRewardModel/) · [AgeModel](../AgeModel/)
- 相关类：[Campaign](../../campaign/Campaign/) · [Settlement](../../campaign/Settlement/) · [Village](../../campaign/Village/) · [PartyBase](../../campaign/PartyBase/) · [Hero](../../campaign/Hero/) · [MapEvent](../../campaign/MapEvent/)
