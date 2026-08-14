---
title: "DefaultPartyWageModel"
description: "战役队伍工资、支付上限与招募成本的默认计算实现。"
---
# DefaultPartyWageModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultPartyWageModel : PartyWageModel`  
**Base:** [`PartyWageModel`](../PartyWageModel)  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyWageModel.cs`（v1.3.15；v1.4.5 同名实现位于 `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents`）

## 一句话职责

`DefaultPartyWageModel` 把兵种等级、职业、队伍编制、英雄 Perk、据点建筑和文化效果转换成**解释过的工资或招募价格**。它只提供计算结果；每日扣钱、招募、赎金支付和逃兵处理由战役 Behavior / Action 完成。

## 心智模型

```text
CharacterObject / MobileParty / TroopRoster / Hero
                -> Campaign.Current.Models.PartyWageModel
                -> ExplainedNumber（工资或招募成本）
                -> MobileParty.TotalWage、Recruitment、Desertion、Ransom
```

先区分三件容易混淆的事：`GetCharacterWage` 是单个兵种的基础日薪，`GetTotalWage` 是某个 roster 在当前队伍上下文中的汇总，`GetTroopRecruitmentCost` 是一次性招募/估值成本。`MaxWagePaymentLimit` 只是支付预算的上限，不是把金钱从 clan treasury 扣走的 API。

### 什么时候使用

- 需要显示或比较一支队伍的工资，使用 `Campaign.Current.Models.PartyWageModel` 的汇总结果，并保留 `ExplainedNumber` 的说明。
- 需要改变默认工资或招募成本时，在 `CampaignGameStarter` 阶段注册 `DefaultPartyWageModel` 子类；只覆盖自己负责的分支，其余交给 `base`。
- 需要分析 AI 招募、驻军招募、赎金或升级费用时，先确认调用方传入的 `buyerHero` 与 `withoutItemCost`，不要把这些调用当作玩家商店结算。

### 什么时候不要使用

不要在模型方法里调用 `GiveGoldAction`、删 roster、触发逃兵或发事件。模型可能同时被 UI、AI、每日结算和赎金估值调用；在这里做副作用会造成重复扣款、递归调用或存档状态不一致。

## 上下游关系

### 上游输入

| 类型 | 作用 |
| --- | --- |
| [`MobileParty`](../../campaign/MobileParty) | 提供领袖、军队、围城、海上状态、驻地和有效军需官。 |
| [`TroopRoster`](../TroopRoster) | 提供非英雄兵种数量；英雄条目按英雄工资规则处理。 |
| [`CharacterObject`](../../campaign/CharacterObject) | 提供 Tier、职业、兵种类别、等级、文化和马匹装备。 |
| [`Hero`](../../campaign/Hero) / `PerkObject` | 提供支付、招募和队伍工资修正。 |
| [`CharacterDevelopmentModel`](../CharacterDevelopmentModel) | 提供 Epic Perk 使用的技能阈值。 |

### 下游消费者

| 类型/流程 | 读取什么 |
| --- | --- |
| [`MobileParty`](../../campaign/MobileParty) | `TotalWage` 与 `TotalWageExplained` 直接调用 `GetTotalWage`。 |
| `RecruitmentCampaignBehavior` / `GarrisonRecruitmentCampaignBehavior` | 用 `GetTroopRecruitmentCost(...).RoundedResultNumber` 和 `GetCharacterWage` 做招募判定与费用。 |
| `DefaultPartyDesertionModel` | 用总工资判断欠薪导致的逃兵规模。 |
| `DefaultRansomValueCalculationModel` / 升级模型 | 以 `buyerHero: null` 或 `withoutItemCost: true` 计算估值。 |
| [`PartyBase`](../../campaign/PartyBase) 的 PartyComponent | 读取 `MaxWagePaymentLimit` 作为工资预算边界。 |

## 公共契约

| 成员 | 默认行为 | 关键边界 |
| --- | --- | --- |
| `MaxWagePaymentLimit` | 返回 `10000`。 | 是预算/支付限制，不代表每天实际支付 10000。 |
| `GetCharacterWage` | 按兵种 Tier 给基础日薪，Mercenary 乘 `1.5` 后转为整数。 | 不读取队伍数量，也不扣钱。 |
| `GetTotalWage` | 遍历 roster，加入英雄/兵种工资，再叠加队伍、驻军、Perk、建筑、政策和文化因素。 | 返回 `ExplainedNumber`；调用者才决定如何显示或结算。 |
| `GetTroopRecruitmentCost` | 按 troop Level 给基础成本，再处理坐骑、职业和买家 Perk。 | `withoutItemCost` 只排除马匹装备附加价，不会排除基础兵种成本。 |

## 默认计算细节

### `MaxWagePaymentLimit`

```csharp
int budget = Campaign.Current.Models.PartyWageModel.MaxWagePaymentLimit;
MobileParty party = MobileParty.MainParty;
bool hasLimitedBudget = party.PaymentLimit != budget;
```

`PartyComponent`、领主队伍初始化和战役变量行为会用这个值初始化或钳制支付预算。`budget` 不是 `TotalWage`，也不是可以直接写入 `Clan.Gold` 的数值。

### `GetCharacterWage`

默认 Tier 与基础日薪如下；源码对 6 以上的 Tier 统一走最后一档：

| Tier | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 其他 |
| ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 基础工资 | 1 | 2 | 3 | 5 | 8 | 12 | 17 | 23 |

若 `Occupation == Occupation.Mercenary`，结果乘 `1.5` 并转换为 `int`。因此这是**兵种定义的基础值**；队伍里的数量、英雄、驻军 Perk 和建筑都要到 `GetTotalWage` 再处理。

### `GetTotalWage`

方法逐项读取 `TroopRosterElement`。非英雄条目使用 `character.TroopWage * element.Number`；英雄条目使用英雄工资，且 Clan leader 通常不重复计入，玩家主队的领主例外也由源码单独处理。领队拥有 `Steward.PaidInPromise` 时，英雄工资会按该 Perk 的主要加成取整。

汇总阶段会先记录特殊兵种工资占比，再把相应修正加入 `ExplainedNumber`。`Steward.AidCorps` 分支会读取 `Number` 与 `WoundedNumber`，但 v1.3.15/v1.4.5 默认实现后续仍以 `element.Number` 计算普通兵种工资；不要把这个读取动作误解成伤兵免薪：

- **驻军**：城堡/城镇的驻军 Perk、驻军中步兵/远程/骑兵占比对应的 Governor Perk、帝国驻军文化特性，以及 `GarrisonWageReduction` 建筑效果。
- **队伍上下文**：`MilitaryCoronae` 政策、Caravan Guard/ Mercenary 占比对应的贸易或 Steward Perk、Aserai 工资特性、陆地上的 `Steward.Frugal`、军队中的 `EfficientCampaigner`、围城中的 `MasterOfWarcraft`、有效军需官的 `PriceOfLoyalty` 和据点内的 `ContentTrades`。
- **底线与说明**：基础总和先 `LimitMin(0)`；`includeDescriptions: true` 时，Perk、政策、文化和建筑会出现在结果解释中。海上状态会传给支持海上条件的 Perk，不能在自定义实现中默认为陆地。

调用路径：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Roster;
using TaleWorlds.Library;

MobileParty party = MobileParty.MainParty;
PartyWageModel model = Campaign.Current.Models.PartyWageModel;
ExplainedNumber explained = model.GetTotalWage(
    party, party.MemberRoster, includeDescriptions: true);

int dailyWage = (int)explained.ResultNumber;
```

这与 `party.TotalWageExplained` 使用同一模型入口。`explained` 是预览/计算结果；不要因为读到它就自行扣金币，否则每日财政流程会再次扣款。

### `GetTroopRecruitmentCost`

基础价格按 `CharacterObject.Level` 分段：

| Level | `<=1` | `2-6` | `7-11` | `12-16` | `17-21` | `22-26` | `27-31` | `32-36` | `>36` |
| ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 基础成本 | 10 | 20 | 50 | 100 | 200 | 400 | 600 | 1000 | 1500 |

随后依次处理：

1. 兵种有马且 `withoutItemCost == false` 时，Level 小于 26 加 150，否则加 500。这个参数只控制这项坐骑装备附加价。
2. `Mercenary`、`Gangster`、`CaravanGuard` 会在当前 `ExplainedNumber.BaseNumber` 上额外加入两倍；由于马匹附加价已先通过 `Add` 加入，该职业加价的基数也包含这项附加价，随后才进入买家 Perk 因素。
3. `buyerHero != null` 时，按 Tier、步兵/远程/骑兵、买家是否为队伍领袖以及特殊职业，应用 `HeadHunter`、步兵/远程招募 Perk、Khuzait 骑兵文化特性、`Frugal`、`SwordForBarter` 和 `SlickNegotiator`。最后只在有买家时把结果下限限制为 1。

例如，战役招募行为需要整数价格时应沿用源码调用路径：

```csharp
CharacterObject troop = notable.VolunteerTypes[0];
Hero buyer = Hero.MainHero;
ExplainedNumber price = Campaign.Current.Models.PartyWageModel
    .GetTroopRecruitmentCost(troop, buyer, withoutItemCost: false);
int denars = price.RoundedResultNumber;
```

这段代码只得到战役使用的价格。实际支付和 roster 变更仍由招募流程负责；赎金/升级调用可能传入 `null` 买家或 `withoutItemCost: true`，自定义模型必须保留这两个契约。

## 替换默认模型

在 `SubModule.InitializeGameStarter` 中注册子类，官方默认模型已先注册，因此战役通过 `Campaign.Current.Models.PartyWageModel` 看到后注册的实现：

```csharp
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.Core;

public sealed class MyPartyWageModel : DefaultPartyWageModel
{
    public override int GetCharacterWage(CharacterObject character)
    {
        return base.GetCharacterWage(character) + 1;
    }
}

protected override void InitializeGameStarter(Game game, IGameStarter starter)
{
    starter.AddModel(new MyPartyWageModel());
}
```

如果要保留一个已经注册的模型再叠加修正，应使用 `CampaignGameStarter.AddModel<T>(MBGameModel<T>)` 的包装形式，而不是在新模型里再次读取 `Campaign.Current.Models.PartyWageModel`；后者会在替换完成后递归调用自己。模型注册必须发生在 starter 阶段，不能在 `DailyTick` 中动态追加。

## 风险与调试顺序

1. **重复扣款**：先检查财政 Behavior/Action，再检查模型；`GetTotalWage` 不拥有金币转移。
2. **预算误读**：`PaymentLimit`、`MaxWagePaymentLimit` 和 `TotalWage` 是三个不同值；先看 `MobileParty` 的支付限制，再判断欠薪。
3. **买家为空**：赎金估值和升级常传 `buyerHero: null`；不要无条件访问买家 Perk 或文化。
4. **海上/驻军分支**：工资 Perk 和建筑因素依赖队伍当前状态；用 `includeDescriptions: true` 检查解释项，而不是只打印最终整数。
5. **注册递归**：自定义模型委托默认实现时要保存明确的 `BaseModel` 或直接继承默认类，不能从已替换的强类型属性回读自己。
6. **版本差异**：当前两版默认实现的工资分段、职业/马匹边界、主要 Perk 分支和海上参数语义一致，主要差异是反编译代码的语法表现；仍应以目标游戏版本的 `DefaultPartyWageModel` 为准。

## 参见

- [Campaign-ext Models 家族](../models/)
- [`PartyWageModel`](../PartyWageModel)
- [`MobileParty`](../../campaign/MobileParty)
- [`PartyBase`](../../campaign/PartyBase)
- [`CharacterDevelopmentModel`](../CharacterDevelopmentModel)
- [`DefaultPartyDesertionModel`](../DefaultPartyDesertionModel)
- [`CampaignGameStarter`](../CampaignGameStarter)
- [`GameModels`](../GameModels)
- [`SandBoxManager`](../SandBoxManager)
