---
title: "MobilePartyFoodConsumptionModel"
description: "把队伍成员、俘虏、Perk 和战役状态转换为每日食物消耗与是否需要消耗食物的规则模型。"
---
# MobilePartyFoodConsumptionModel

**命名空间:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public abstract class MobilePartyFoodConsumptionModel : MBGameModel<MobilePartyFoodConsumptionModel>`  
**基类:** `MBGameModel<MobilePartyFoodConsumptionModel>`  
**源文件:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MobilePartyFoodConsumptionModel.cs`  
**默认实现:** `TaleWorlds.CampaignSystem.GameComponents/DefaultMobilePartyFoodConsumptionModel.cs`

## 一句话职责

它决定一支 `MobileParty` 是否参与食物系统，并把成员/俘虏数量和战役修正转换为每日消耗；它只提供计算结果，不直接删除食物、屠宰牲畜或处理饥饿后果。每日消费、AI 补粮和队伍属性都会读取这个结果，因此自定义实现必须保持纯查询语义。

## 心智模型

这是食物数值的规则层。`MobileParty.FoodChange` 先调用 `CalculateDailyBaseFoodConsumptionf` 得到基础消耗，再调用 `CalculateDailyFoodConsumptionf` 应用 Perk、地形、军队、围城和海上条件。`FoodConsumptionBehavior` 在每日队伍 tick 中先用 `DoesPartyConsumeFood` 判断是否执行消耗，然后根据 `FoodChange` 减少 `RemainingFoodPercentage`，必要时扣除库存食物、屠宰牲畜或从军团成员共享食物。

```text
成员 / 俘虏 / Perk / 地形 / Army / Siege
                 |
                 v
Campaign.Current.Models.MobilePartyFoodConsumptionModel
        +--------+-------------------------+
        v                                  v
基础消耗 -> 最终消耗                   是否参与食物系统
        |                                  |
        v                                  v
MobileParty.FoodChange             FoodConsumptionBehavior
                                           |
                                           v
                              扣粮 / 屠宰 / 分享 / 饥饿后果
```

模型属性和方法可以被 UI、AI 补粮和队伍属性重复读取，必须保持无副作用。尤其不要在计算方法中直接修改 `ItemRoster` 或 `RemainingFoodPercentage`；那会和 `FoodConsumptionBehavior` 的每日处理重复执行。`DoesPartyConsumeFood` 是行为是否执行扣粮的资格判断，不代表 `FoodChange` 属性本身会自动变成零。

## 何时使用，何时不要用

- 想改变人数到食物单位的换算、Perk 对消耗的修正，或哪些队伍参与食物系统时，替换这个 Model。
- 想显示队伍每日消耗时，从 `Campaign.Current.Models.MobilePartyFoodConsumptionModel` 或 `MobileParty.FoodChangeExplained` 读取。
- 不要在模型里扣除食物、屠宰牲畜、共享库存、增加饥饿士气惩罚或派发 `OnPartyConsumedFood`；这些属于 `FoodConsumptionBehavior`。
- 不要把 `DoesPartyConsumeFood` 当成“当前库存足够”的判断，它只判断队伍类型和生命周期是否参与食物系统。

## 依赖图

### 上游

| 类型 | 关系 |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | 提供当前战役和 `Models` 注册表。 |
| [`GameModels`](../GameModels) | 在战役构造阶段持有注册的食物消耗 Model。 |
| [`MobileParty`](../../campaign/MobileParty) | 提供成员、俘虏、领袖、军队、围城、地形和海上状态。 |
| [`CharacterDevelopmentModel`](../CharacterDevelopmentModel) | 为默认实现提供 Epic Perk 阈值。 |

### 下游

| 类型 | 关系 |
| --- | --- |
| [`MobileParty`](../../campaign/MobileParty) | 通过 `FoodChange`、`BaseFoodChange` 和 `FoodChangeExplained` 读取计算结果。 |
| [`FoodConsumptionBehavior`](../FoodConsumptionBehavior) | 在每日 tick 中执行实际扣粮、屠宰、共享和事件通知。 |
| [`PartiesBuyFoodCampaignBehavior`](../PartiesBuyFoodCampaignBehavior) | 用 `DoesPartyConsumeFood` 和 `FoodChange` 判断是否补粮、补多少。 |
| [`PartyFoodBuyingModel`](../PartyFoodBuyingModel) | 提供补粮目标天数和候选物品规则；它消费本模型产生的食物变化。 |
| [`PartyMoraleModel`](../PartyMoraleModel) | 食物持续不足时参与饥饿士气后果的计算。 |

### 事件、Action 与存档边界

模型没有自己的存档 payload，也不派发消费事件。`FoodConsumptionBehavior.SyncData` 保存的是其内部物品版本检查状态；实际库存变化通过 `ItemRoster` 和游戏行为完成，饥饿后果还会触发士气、技能和战役事件。模型只应返回 `ExplainedNumber` 或布尔值。

## 成员契约

| 成员 | 用途与调用时机 | 默认实现与副作用边界 |
| --- | --- | --- |
| `NumberOfMenOnMapToEatOneFood` | 将地图上的人数换算为一单位每日食物消耗的分母。 | 默认 `20`；只返回常量，不修改队伍。 |
| `CalculateDailyBaseFoodConsumptionf(MobileParty, bool)` | 按全部成员和一半俘虏数量建立基础消耗。 | 默认 `-(NumberOfAllMembers + NumberOfPrisoners / 2) / 20`，至少按 `1` 人计算；返回解释值。方法名末尾的 `f` 是源码 API 的真实名称。 |
| `CalculateDailyFoodConsumptionf(MobileParty, ExplainedNumber)` | 在基础消耗上应用 Perk、军队、围城、地形和海上修正。 | 默认最终结果不能高于 `-0.01f`，不执行扣粮。 |
| `DoesPartyConsumeFood(MobileParty)` | 判断队伍是否应由 `FoodConsumptionBehavior` 处理每日食物。 | 默认要求队伍活动，且排除驻军、商队、土匪、民兵、巡逻队和村民等类型。 |

默认修正包括：土匪成员与 `Promises`、`Spartan`、非海上 `WarriorsDiet`、军需官 `PriceOfLoyalty`、森林/草原 `Foragers`、围城驻军 `StrongLegs`、军队 `StiffUpperLip`，以及围城 `SoundReserves`/`MasterOfPlanning`。这些因素应通过当前版本默认模型委托获得，不要在 Mod 中复制一份可能过期的 Perk 数值。

## 真实读取路径

下面的顺序与 `MobileParty.FoodChange` 和 `FoodChangeExplained` 的源码路径一致：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

public ExplainedNumber ExplainDailyFoodChange(MobileParty party)
{
    if (Campaign.Current == null || party == null)
    {
        return new ExplainedNumber(0f);
    }

    MobilePartyFoodConsumptionModel model =
        Campaign.Current.Models.MobilePartyFoodConsumptionModel;
    ExplainedNumber baseConsumption =
        model.CalculateDailyBaseFoodConsumptionf(party, includeDescription: true);
    return model.CalculateDailyFoodConsumptionf(party, baseConsumption);
}
```

需要判断行为是否会执行扣粮时，再读取：

```csharp
bool consumesFood = Campaign.Current.Models.MobilePartyFoodConsumptionModel
    .DoesPartyConsumeFood(party);
```

这些调用只读取策略。真正的每日处理由 `FoodConsumptionBehavior.DailyTickParty` 触发；它还会处理库存食物随机消耗、牲畜转肉、军团共享、饥饿士气惩罚和 `OnPartyConsumedFood` 事件。

## 替换模型的安全边界

如果只改变消耗倍率，保留 vanilla 的基础成员、Perk 修正和 `-0.01f` 上限，再增加有界因素。如果改变 `DoesPartyConsumeFood`，必须同时检查补粮行为、每日消费行为、商队/驻军/村民的特殊逻辑，否则队伍可能不扣粮却仍被 AI 当作需要补粮，或相反。不要在运行中的 Behavior 中用 `AddModel` 期待重建已经装配的 `GameModels`。

## 风险与排错顺序

1. **把计算当扣粮:** `FoodChange` 可能被 UI、AI 和行为多次读取；在模型里改库存会重复扣除。
2. **忽略返回符号:** 默认消耗是负数，`FoodConsumptionBehavior` 用它计算缺口；返回正数会使队伍看起来凭空增加食物。
3. **跳过最小消耗边界:** 让最终值达到 `0` 或正数会破坏饥饿/补粮判断；保留目标版本的最小负值约束。
4. **误解资格判断:** `DoesPartyConsumeFood` 不检查当前库存，也不负责判断队伍是否正在饥饿。
5. **军团共享不一致:** 食物不足时行为会从军团领队或附属队伍共享，模型不应自行复制这套库存转移。
6. **初始化阶段调用:** `Campaign.Current`、地图场景和当前导航面可能尚未准备好；不要在标题界面或静态初始化时查询默认模型。

## 版本与导航

v1.3.15 与 v1.4.5 保留四个公开入口和默认 `20` 人/食物单位的基础分母；默认 Perk、海上和围城条件应以目标版本源码为准。跨版本替换时优先委托当前版本默认实现。

- [父级：Campaign 扩展 API](../)
- [队伍模型目录](../models/)
- [↔ PartyFoodBuyingModel](../PartyFoodBuyingModel)
- [↔ PartyMoraleModel](../PartyMoraleModel)
- [MobileParty](../../campaign/MobileParty)
- [FoodConsumptionBehavior](../FoodConsumptionBehavior)
- [PartiesBuyFoodCampaignBehavior](../PartiesBuyFoodCampaignBehavior)
- [CharacterDevelopmentModel](../CharacterDevelopmentModel)
