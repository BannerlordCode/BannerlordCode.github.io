---
title: "BarterModel"
description: "裁决易货（barter）谈判中溢价关系加成、物品议价惩罚系数、与同一英雄再次议价的冷却天数及 NPC 可动用金比例上限的规则模型，由 Campaign 在运行时通过 Campaign.Current.Models.BarterModel 解析，被 BarterManager 与 ItemBarterable 在谈判与定价时调用。"
---

# BarterModel

**命名空间：** TaleWorlds.CampaignSystem.ComponentInterfaces
**模块：** TaleWorlds.CampaignSystem
**类型：** public abstract class BarterModel : MBGameModel<BarterModel>
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/BarterModel.cs

## 概述

该模型集中裁决“易货（barter）”系统里的各项结算规则：玩家对某英雄多付多少钱能换来多少关系增量、某件物品在某一势力眼中的议价惩罚系数、与同一英雄再次开启议价的冷却天数，以及 NPC 在单次议价中最多可动用其持有金的比例上限。它只做纯计算，真正的物品/金钱/关系转移由 [Barterable](../../campaign-ext/Barterable) 的 `Apply` 与 [ChangeRelationAction](../../campaign-ext/ChangeRelationAction) 完成，议价流程本身由 [BarterManager](../BarterManager) 与各个议价行为驱动。

## 心智模型

BarterModel 是一个纯计算的 Model 型扩展点：Campaign 在启动时通过 `GameModels` 从已注册的 `GameModel` 集合中按类型解析出 `DefaultBarterModel` 唯一实例并缓存，运行时统一用 `Campaign.Current.Models.BarterModel` 取得；它不参与存档序列化，也不在每个 tick 被重新构造。当玩家在对话里结束一次议价并被对方接受时，`BarterManager.ApplyOverpayBonus` 用 `CalculateOverpayRelationIncreaseCosts` 算出溢价换来的关系增量，再经 `ChangeRelationAction.ApplyRelationChangeBetweenHeroes` 落到英雄关系上（且与对方处于交战时跳过）；`BarterManager.HandleHeroCooldown` 则读取 `BarterCooldownWithHeroInDays` 给该英雄打上再次议价的冷却。物品定价侧，`ItemBarterable.GetUnitValueForFaction` 调用 `GetBarterPenalty` 得到惩罚系数再乘以物品价值，得出某个势力愿意为这件物品出的“单位价值”。要改议价规则就继承并注册一个替换实现；要“执行”易货必须走 `Barterable.Apply` 与对应 Action，绝不要把模型当成写世界的入口或直接改英雄关系。

## 何时使用 / 何时不要使用

- **使用**：需要查询或自定义“溢价能换多少关系 / 物品在某势力面前值多少 / 与英雄议价后冷却几天 / NPC 能掏出多少钱”等规则时，读取 `Campaign.Current.Models.BarterModel` 的返回值，或提供一个新的派生类覆盖其抽象成员并通过子模块注册替换默认实现。
- **不要使用**：不要用模型去“执行”易货——它只会计算与判定，真正改物品归属、金钱与关系的是 [Barterable](../../campaign-ext/Barterable) 与 [ChangeRelationAction](../../campaign-ext/ChangeRelationAction)。不要亲自给 `Hero` 关系或金库赋值了事；也不要把模型返回值当作持久世界状态（它是无状态的纯函数）。发起议价应走 [BarterManager](../BarterManager) 与 `GoldBarterBehavior`、`ItemBarterBehavior` 等议价行为，而非直接调用本模型。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有 `Models` 集合，是运行时获取该模型的入口。
- [GameModels](../GameModels) —— 在构造时通过 `GetGameModel<BarterModel>()` 解析并缓存实例。
- [Hero](../Hero) —— 溢价关系加成的主体；`CalculateOverpayRelationIncreaseCosts` 读取 `Hero.GetRelationWithPlayer`，结果经 `ChangeRelationAction` 写回英雄关系。
- [ExplainedNumber](../ExplainedNumber) —— `GetBarterPenalty` 的返回类型，用于携带带说明项的惩罚系数。

下游与协同系统（调用方）：

- [BarterManager](../BarterManager) —— `ApplyOverpayBonus` 调用 `CalculateOverpayRelationIncreaseCosts` 计算溢价关系增量（交战时不调用）；`HandleHeroCooldown` 调用 `BarterCooldownWithHeroInDays` 设置再次议价冷却。
- [ItemBarterable](../ItemBarterable) —— `GetUnitValueForFaction` 调用 `GetBarterPenalty` 得出某势力对一件物品的单位价值惩罚系数。
- [ChangeRelationAction](../../campaign-ext/ChangeRelationAction) —— `BarterManager.ApplyOverpayBonus` 用 `CalculateOverpayRelationIncreaseCosts` 的返回值实际改变 `Hero.MainHero` 与对方的关系。
- [DefaultBarterModel](../DefaultBarterModel) —— 本模型的默认实现，包含全部规则常量与专长（Charm.Tribute / EffortForThePeople / SlickNegotiator、Trade.SelfMadeMan）调整逻辑。
- [Barterable](../../campaign-ext/Barterable) —— 各类议价项（物品、金、地、俘虏等）的基类；真正的易货执行由其 `Apply` 完成，本模型只为其定价/加成提供数值。
- [CampaignBehaviorBase](../CampaignBehaviorBase) —— 各议价行为（如 `GoldBarterBehavior`、`ItemBarterBehavior`、`DiplomaticBartersBehavior`）的基类，是实际驱动调用方。

相关议价生态：

- [GoldBarterBehavior](../GoldBarterBehavior) / [ItemBarterBehavior](../ItemBarterBehavior) / [DiplomaticBartersBehavior](../DiplomaticBartersBehavior) —— 金币、物品与外交类议价的发起与结算行为，构成模型的主要运行上下文。
- [Clan](../Clan) / [Settlement](../Settlement) / [Town](../Town) —— `GetBarterPenalty` 中用于判定“是否属于己方势力”的归属类型，是惩罚系数分支的依据。

## 风险

- **跨战役重载缓存实例**：`Campaign.Current.Models.BarterModel` 在每次新战役/读档时由 `GameModels` 重新解析。把实例缓存进静态字段或长生命周期对象，会在重载后指向旧战役的已销毁对象，调用即崩溃或读到陈旧规则。每次需要时都重新走 `Campaign.Current.Models` 获取。
- **战役开始前访问**：`Campaign.Current` 或 `Campaign.Current.Models` 在战役未启动时为 `null`。在 `MainMenu`、子模块加载早期或编辑器上下文里调用会直接空引用。
- **误判状态层**：该模型是无状态纯函数，没有需要持久化的字段，也不含 `[SaveableField]`。若你新增的派生类里加了可变字段并期望它随存档恢复，会发现这些值永远不会被序列化，从而产生隐蔽的规则漂移。
- **在 Mission/战斗层调用**：模型属于 Campaign 层，仅在战役模拟中存在；在 `Mission` 或战场逻辑里取 `Campaign.Current.Models` 是错误的访问层。
- **只替换模型不改写入路径**：派生类放松了 `MaximumPercentageOfNpcGoldToSpendAtBarter` 或改写了 `CalculateOverpayRelationIncreaseCosts`，但真正转账/改关系的是 `Barterable.Apply` 与 `ChangeRelationAction`，而议价由行为驱动——只替换模型、却让行为按旧假设处理代价，会出现“判定通过却结算不一致”或溢价关系落空。
- **`GetBarterPenalty` 强烈依赖专长与势力归属**：其系数随 `otherHero`/`OriginalOwner` 是否持有 `Charm.Tribute`、`Charm.EffortForThePeople`、`Charm.SlickNegotiator`、`Trade.SelfMadeMan` 以及双方势力是否相同而剧烈变化（从 `0.4f`、`0f` 到 `-8.4f`/`-2.1f`/`-12.6f`）。错误覆盖该方法会悄然改写物品在市场上的价值评估，连带影响定价界面与谈判成功率。
- **溢价关系加成受交战状态门控**：`BarterManager.ApplyOverpayBonus` 仅在对方势力与玩家**不处于交战**时才调用 `CalculateOverpayRelationIncreaseCosts`，若你自定义了模型却假定每次议价都会给关系，会发现战时溢价不产生任何关系增量。

## 成员说明

### 议价冷却与 NPC 花费上限

- **`BarterCooldownWithHeroInDays`**（属性，返回 `int`）
  - 用途：返回与同一英雄再次开启议价前必须经过的天数。默认实现 `DefaultBarterModel` 返回 `3`；`BarterManager.HandleHeroCooldown` 在议价结束后用 `CampaignTime.Now + CampaignTime.Days(BarterCooldownWithHeroInDays)` 给该英雄写入冷却，冷却未过期时 `CanPlayerBarterWithHero` 会拒绝再次议价。
  - 副作用：无，纯计算；真正的冷却状态由 [BarterManager](../BarterManager) 维护。
  - 调用时机：仅由 `BarterManager.HandleHeroCooldown` 在每次议价结算后调用。

- **`MaximumPercentageOfNpcGoldToSpendAtBarter`**（属性，返回 `float`）
  - 用途：返回 NPC 在一次议价中最多可动用的自身持有金比例上限。默认实现返回 `0.25f`（即最多掏出 25%）；议价系统用它截断 NPC 一方愿意支付的金额，避免 NPC 倾家荡产。
  - 副作用：无。
  - 调用时机：议价定价/出价阶段由行为读取以限制 NPC 的支付能力。

### 溢价关系加成

- **`CalculateOverpayRelationIncreaseCosts(Hero hero, float overpayAmount)`**
  - 用途：返回玩家在议价中向 `hero` 多付 `overpayAmount` 金后，能换来的关系增量（向上取整）。默认实现以玩家与该英雄的当前关系 `Hero.GetRelationWithPlayer` 为起点 `num`，目标上限 `num2 = Clamp(num + 3, -100, 100)`；逐档累计“每提升 1 点关系所需门槛 `1000 + 100 * i*i`”，用 `overpayAmount` 按门槛（含随机概率 `MBRandom.RandomFloat <= overpayAmount / 门槛`）抵扣，得到关系档数；若 `Hero.MainHero` 持有 `Charm.Tribute` 专长，再乘以 `(1 + 该专长 PrimaryBonus)`。
  - 副作用：无；返回值由 `BarterManager.ApplyOverpayBonus` 经 `ChangeRelationAction` 实际写入关系，且**仅在双方不交战时**才调用。
  - 调用时机：仅由 [BarterManager](../BarterManager).`ApplyOverpayBonus` 在玩家议价被接受且 `overpayAmount > 0` 时调用。

### 物品议价惩罚

- **`GetBarterPenalty(IFaction faction, ItemBarterable itemBarterable, Hero otherHero, PartyBase otherParty)`**
  - 用途：返回某势力 `faction` 对一件 `ItemBarterable` 物品的议价惩罚系数（[ExplainedNumber](../ExplainedNumber)）。默认实现分三种情形：若 `faction` 是 `otherHero` 或 `otherParty` 所属的家族/阵营，系数为 `0.4f`（卖给“自己人”惩罚较轻）；若 `faction` 是物品的原始所有者（OriginalOwner）所属家族/阵营，则按物品类型给负系数——坐骑/动物 `-8.4f`、食物 `-12.6f`、其余 `-2.1f`；其它情形为 `0f`。两种情况都会依据 `OriginalOwner`/`otherHero` 是否持有 `Charm.EffortForThePeople`、`Charm.SlickNegotiator`、`Trade.SelfMadeMan` 专长，对系数作加减因子调整。
  - 副作用：无；返回值被 `ItemBarterable.GetUnitValueForFaction` 乘以物品价值得出该势力的“单位价值”。
  - 调用时机：仅由 [ItemBarterable](../ItemBarterable).`GetUnitValueForFaction` 在为某势力评估物品价值时调用。

## 示例

玩家一次议价被接受、且存在溢价时，先算溢价换来的关系增量，再交给 Action 落定：

```csharp
Hero otherHero = Hero.OneToOneConversationHero; // 对话中的议价对手
float overpayAmount = ...; // 玩家实际多付的金额
if (otherHero != null &&
    !otherHero.MapFaction.IsAtWarWith(Hero.MainHero.MapFaction))
{
    int relationGain = Campaign.Current.Models.BarterModel
        .CalculateOverpayRelationIncreaseCosts(otherHero, overpayAmount);
    if (relationGain > 0)
    {
        // 模型只负责“该加多少关系”，真正写入请走 ChangeRelationAction
        ChangeRelationAction.ApplyRelationChangeBetweenHeroes(Hero.MainHero, otherHero, relationGain);
    }
}
```

评估某势力对一件议价物品给出的单位价值（含惩罚系数）：

```csharp
ItemBarterable itemBarter = ...; // 当前议价项
IFaction faction = Hero.MainHero.MapFaction; // 评估方势力
Hero otherHero = itemBarter.OriginalOwner;   // 议价对手
PartyBase otherParty = otherHero.Party;       // 对手队伍
ExplainedNumber penalty = Campaign.Current.Models.BarterModel
    .GetBarterPenalty(faction, itemBarter, otherHero, otherParty);
int unitValue = MathF.Round(penalty.ResultNumber * itemBarter.ItemValue);
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [GameModels](../GameModels) · [Hero](../Hero) · [ExplainedNumber](../ExplainedNumber) · [BarterManager](../BarterManager) · [ItemBarterable](../ItemBarterable) · [DefaultBarterModel](../DefaultBarterModel) · [Barterable](../../campaign-ext/Barterable) · [ChangeRelationAction](../../campaign-ext/ChangeRelationAction) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [GoldBarterBehavior](../GoldBarterBehavior) · [ItemBarterBehavior](../ItemBarterBehavior) · [DiplomaticBartersBehavior](../DiplomaticBartersBehavior) · [Clan](../Clan) · [Settlement](../Settlement) · [Town](../Town)
