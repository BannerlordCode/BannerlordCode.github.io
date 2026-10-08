---
title: "DefaultPartyWageModel"
description: "PartyWageModel 的原版实现：按兵种 Tier 给出基础日薪，再叠加总督 perk、文化特性、城镇建筑与王国政策修正，算出队伍每日应付工资。"
---
# DefaultPartyWageModel

**命名空间：** `TaleWorlds.CampaignSystem.GameComponents`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public class DefaultPartyWageModel : PartyWageModel`
**基类：** `PartyWageModel`
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/GameComponents/DefaultPartyWageModel.cs`（声明见第 17 行）

## 概述

`DefaultPartyWageModel` 是 `PartyWageModel` 契约的原版实现，由 `SandBoxManager.cs:286` 注册。它把工资规则落成具体数字：兵种日薪按 `Tier` 查表（Tier0 到 Tier6 依次为 1/2/3/5/8/12/17，Tier7 及以上为 23，雇佣兵再 ×1.5）；队伍总工资先把「每人日薪 × 人数」求和，再依次叠加总督 perk、文化特性、城镇建筑与王国政策修正，最后返回带逐项说明的 `ExplainedNumber`；招募花费按兵种 `Level` 分档，并叠加马匹价格与雇佣兵溢价。类内还负责驻军工资的「按兵种比例折减」算法。

## 心智模型

把它想成**「先算毛额，再乘一串折减系数」**，三个心智要点：

1. **日薪与总工资是两层，别在错的地方找 perk**。`GetCharacterWage` 只按 `Tier` 与 `Occupation.Mercenary` 查表，**不含任何 perk**；所有 perk、文化、建筑、政策修正都在 `GetTotalWage` 里以 `AddFactor` 叠加。而且 `GetTotalWage` 内部用的 `character.TroopWage` 本身就转发回 `GetCharacterWage`（`CharacterObject.cs:923`），所以覆写 `GetCharacterWage` 会同时影响两层。
2. **驻军折减是「按兵种占比分摊」的**。`CalculatePartialGarrisonWageReduction` 接收 `troopRatio = 该兵种工资 / 基础总工资`，只有 `troopRatio > 0`、城镇有总督、且该 perk 生效时才加因子（`DefaultPartyWageModel.cs:247`）。纯骑兵驻军吃满骑兵折减，混编只吃到一部分。
3. **支付上限与总工资完全无关**。`MaxWagePaymentLimit` 只回答「队伍最多能设多高的支付额度」，默认 10000（`DefaultPartyWageModel.cs:21`），与 `GetTotalWage` 的数值没有计算关系。

## 怎么用

**替换方式**：继承本类，只覆写关心的成员，再 `campaignGameStarter.AddModel<PartyWageModel>(new MyModel())` 注册。因为基类提供默认实现，`base.GetTotalWage(...)` 可以保留整条折减链、只在其上叠加修正。

**真实坑**：

1. **`AidCorps` perk 在原版实现里是空转的**。`GetTotalWage` 开头用 `bool flag = !mobileParty.HasPerk(DefaultPerks.Steward.AidCorps, false)` 分支（`DefaultPartyWageModel.cs:76`），但两个分支里读出的 `Number` / `WoundedNumber` 都是**从未被使用的局部变量**（`DefaultPartyWageModel.cs:85`）。也就是说这个 perk 当前不改变工资。
2. **`troopRoster` 参数不保证是整队**。逃兵系统传入的是「即将逃跑的子集」（`DefaultPartyDesertionModel.cs:58`），所以实现里所有比例都以传入 roster 为基准，覆写时也必须如此。
3. **`buyerHero == null` 会跳过全部 perk 修正**，连 `LimitMin(1f)` 也不执行。赎金估值就传 `null`（`DefaultRansomValueCalculationModel.cs:14`），拿到的是裸价。
4. **`withoutItemCost = true` 会忽略马匹价格**，兵种升级差价正是用这个模式算的（`DefaultPartyTroopUpgradeModel.cs:81`）。
5. **雇佣兵溢价出现在两处且互不相关**：`GetCharacterWage` 里日薪 ×1.5，`GetTroopRecruitmentCost` 里招募成本再加一个 `BaseNumber × 2f`。

**真实使用点**：

- `DefaultPartyWageModel.cs:30` — 兵种日薪查表，是 `CharacterObject.TroopWage` 的实际返回值（`CharacterObject.cs:923`）。
- `DefaultPartyWageModel.cs:68` — 队伍总工资聚合，被 `DefaultPartyDesertionModel.cs:58`、`MobileParty.cs:2461` 附近的支付逻辑与 UI 工资条消费。
- `DefaultPartyWageModel.cs:256` — 招募花费，被 `RecruitmentCampaignBehavior.cs:219`、`GarrisonRecruitmentCampaignBehavior.cs:65`、`TutorialHelper.cs:456` 等大量调用。
- `MobileParty.cs:643` — `PaymentLimit` 无自定义上限时回落到 `MaxWagePaymentLimit`。
- `Campaign.cs:2417` — 开局把主角队伍支付上限设为 `MaxWagePaymentLimit`。
- `ClanVariablesCampaignBehavior.cs:77` / `ClanVariablesCampaignBehavior.cs:372` / `ClanVariablesCampaignBehavior.cs:489` — 驻军与氏族队伍的上限设置与 clamp。
- `DefaultPartyTroopUpgradeModel.cs:81` — 升级差价调用 `GetTroopRecruitmentCost(..., true)`。
- `DefaultPartyDesertionModel.cs:58` — 逃兵判定调用 `GetTotalWage`。
- `AiVisitSettlementBehavior.cs:437` — AI 招募时用 `GetCharacterWage` 累计预算。
- `StoryModeSubModule.cs:95` — 剧情模式用 `StoryModePartyWageModel` 替换本实现，是可参考的真实范例。

## 关键成员

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `public override int MaxWagePaymentLimit` | 只读属性，固定返回 10000，作为队伍支付上限的硬顶。`DefaultPartyWageModel.cs:21` |
| `public override int GetCharacterWage(CharacterObject character)` | 按 `character.Tier` 查表返回日薪（0→1、1→2、2→3、3→5、4→8、5→12、6→17、其余 23）；`Occupation.Mercenary` 再乘 `MercenaryWageFactor`。`DefaultPartyWageModel.cs:30` |
| `public override ExplainedNumber GetTotalWage(MobileParty mobileParty, TroopRoster troopRoster, bool includeDescriptions = false)` | 核心聚合。逐人累加 `TroopWage × Number`（英雄按 `TroopWage`，家族领袖与主角家族领主不计）；再处理 `DeepPockets`、`PickedShots`、驻军折减、`EmpireGarrisonWageFeat`、`MilitaryCoronae`、建筑效果、`AseraiIncreasedWageFeat`、`Frugal`、`EfficientCampaigner`、`MasterOfWarcraft`、`PriceOfLoyalty`、`ContentTrades` 等修正，最后 `LimitMin(0f)`。`DefaultPartyWageModel.cs:68` |
| `private void CalculatePartialGarrisonWageReduction(float troopRatio, MobileParty mobileParty, PerkObject perk, ref ExplainedNumber garrisonWageReductionMultiplier, bool isSecondaryEffect)` | 驻军按兵种占比分摊折减：需 `troopRatio > 0`、城镇有总督、且该 perk 对该城镇生效，才加 `perk 奖励 × troopRatio`。`DefaultPartyWageModel.cs:247` |
| `public override ExplainedNumber GetTroopRecruitmentCost(CharacterObject troop, Hero buyerHero, bool withoutItemCost = false)` | 招募花费：按 `troop.Level` 分档（10/20/50/100/200/400/600/1000/1500），有马且 `withoutItemCost == false` 时另加 150 或 500，雇佣兵/强盗/商队护卫再加 `BaseNumber × 2f`；`buyerHero` 非空时叠加投掷/单手/双手/长杆/弓/弩/魅力 perk 与文化特性，并 `LimitMin(1f)`。`DefaultPartyWageModel.cs:256` |
| `bool flag = !mobileParty.HasPerk(DefaultPerks.Steward.AidCorps, false)` | `AidCorps` 分支；两个分支读出的 `Number` / `WoundedNumber` 均未被使用，该 perk 当前不影响工资。`DefaultPartyWageModel.cs:76` |
| `int number = elementCopyAtIndex.Number` | 死代码：分支内读出的正规军人数从未参与后续计算。`DefaultPartyWageModel.cs:85` |
| `DefaultPolicies.MilitaryCoronae` 政策分支 | 队伍领袖所属王国非雇佣且政策生效时，总工资加 0.1 因子。`DefaultPartyWageModel.cs:189` |
| `private const float MercenaryWageFactor = 1.5f` | 雇佣兵日薪倍率常量。`DefaultPartyWageModel.cs:374` |

## 真实示例

### 示例 1：只改日薪与总工资，保留招募成本

```csharp
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Roster;
using TaleWorlds.Core;
using TaleWorlds.Localization;

public class CheapWageModel : DefaultPartyWageModel
{
    public override int MaxWagePaymentLimit => 20000;

    public override int GetCharacterWage(CharacterObject character) => 1;

    public override ExplainedNumber GetTotalWage(MobileParty mobileParty, TroopRoster troopRoster, bool includeDescriptions = false)
    {
        ExplainedNumber wage = base.GetTotalWage(mobileParty, troopRoster, includeDescriptions);
        wage.AddFactor(-0.5f, new TextObject("MyMod: cheap troops"));   // 整体打五折
        return wage;
    }
}
```

### 示例 2：注册并读取实际总工资

```csharp
campaignGameStarter.AddModel<PartyWageModel>(new CheapWageModel());

int goldPerDay = Campaign.Current.Models.PartyWageModel
    .GetTotalWage(mobileParty, mobileParty.MemberRoster, false)
    .RoundedResultNumber;
```

因为 `CheapWageModel` 继承了默认实现，`GetTroopRecruitmentCost` 仍走原版分档逻辑，招募花费不变。

## 参见

- ↔ [PartyWageModel](../PartyWageModel)：本类实现的契约层，定义全部抽象成员与替换机制。
- ↔ [MobileParty](../../campaign/MobileParty)：`PaymentLimit`、`TotalWage` 与 `SetWagePaymentLimit` 的宿主。
- ↔ [Clan](../../campaign/Clan)：氏族队伍支付上限的实际设置方。
- ↔ [CampaignGameStarter](../../campaign/CampaignGameStarter)：`AddModel<T>` 的宿主，模型替换的注册入口。

## 导航

- ↑ [campaign-ext 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
