---
title: "CaravanModel"
description: "裁定商队（caravan）组建成本、初始贸易资金、单个物品类别的采购预算上限与可购种类数、英雄能否组建商队、精英商队生成概率，以及组建后英雄权势变化的规则模型，由 Campaign 在运行时通过 Campaign.Current.Models.CaravanModel 解析。"
---

# CaravanModel

**命名空间：** TaleWorlds.CampaignSystem.ComponentInterfaces
**模块：** TaleWorlds.CampaignSystem
**类型：** public abstract class CaravanModel : MBGameModel<CaravanModel>
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/CaravanModel.cs

## 概述

该模型集中裁决商队系统的经济与资格规则：组建一支商队需要多少资金（组建成本）、商队出发时携带多少初始贸易金、在单次采购中某个物品类别（`ItemCategory`）最多能花多少金、从一个类别最多买多少种物品、英雄是否具备组建商队的资格、精英商队每日生成的概率，以及组建商队后英雄权势（`Power`）的增减。它只做纯计算，真正的商队兵员、资金与队伍状态保存在 `MobileParty` 与 `CaravanPartyComponent` 上，由商队行为在创建与贸易时写入。

## 心智模型

CaravanModel 是一个纯规则扩展点：Campaign 在启动时通过 `GameModels` 从已注册的 `GameModel` 集合中按类型解析出唯一实例（`DefaultCaravanModel`）并缓存，运行时统一用 `Campaign.Current.Models.CaravanModel` 取得；它不参与存档序列化，也不在每个 tick 被重新构造。商队行为 `CaravansCampaignBehavior` 在各英雄每日可创建商队时调用 `CanHeroCreateCaravan` 把关、`GetEliteCaravanSpawnChance` 决定该商队是否为精英；组建成功后 `CaravanPartyComponent` 用 `GetInitialTradeGold` 初始化贸易资金，`CaravansCampaignBehavior` 再用 `GetPowerChangeAfterCaravanCreation` 调整英雄权势。真正花钱采购时，贸易逻辑借 `GetMaxGoldToSpendOnOneItemCategory` 与 `MaxNumberOfItemsToBuyFromSingleCategory` 截断预算与种类数。要改规则就继承并注册一个替换实现，要读结果就走模型；绝不要把模型当成写世界的入口或直接改 `MobileParty.PartyTradeGold`。

## 何时使用 / 何时不要使用

- **使用**：需要查询或自定义“商队组建成本 / 初始资金 / 采购预算 / 组建资格 / 精英概率”规则时，读取 `Campaign.Current.Models.CaravanModel` 的返回值，或提供一个新的派生类覆盖其抽象成员并通过子模块注册替换默认实现（`DefaultCaravanModel`）。
- **不要使用**：不要用模型去“发放”或“扣除”资金——它只会计算，真正的资金来源与扣减在 [CaravanPartyComponent](../CaravanPartyComponent) 的 `InitializePartyTrade`、`CaravansCampaignBehavior` 的组建流程，以及财政模型 [DefaultClanFinanceModel](../DefaultClanFinanceModel) 的税收计算中完成。不要亲自给 `MobileParty.PartyTradeGold` 赋值了事；也不要把模型返回值当作持久世界状态（它是无状态的纯函数）。发起组建商队应走 `CaravansCampaignBehavior` 而非直接调用本模型。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有 `Models` 集合，是运行时获取该模型的入口。
- [GameModels](../GameModels) —— 在构造时通过 `GetGameModel<CaravanModel>()` 解析并缓存实例。
- [Hero](../Hero) —— `CanHeroCreateCaravan`、`GetInitialTradeGold`、`GetEliteCaravanSpawnChance`、`GetPowerChangeAfterCaravanCreation` 都以其为参数。
- [Clan](../Clan) —— `CanHeroCreateCaravan` 检查英雄是否非玩家家族成员、无敌意；组建资格与精英概率计算会读取英雄所属家族状态。
- [ItemCategory](../../core-extra/ItemCategory) —— `GetMaxGoldToSpendOnOneItemCategory` 的类别参数类型，决定单个物品类别的预算上限。

下游与协同系统（调用方）：

- [CaravansCampaignBehavior](../CaravansCampaignBehavior) —— 每日判定各英雄能否组建商队（`CanHeroCreateCaravan`），掷骰决定是否生成精英（`GetEliteCaravanSpawnChance`），组建后调整权势（`GetPowerChangeAfterCaravanCreation`），并在贸易采购时用 `GetMaxGoldToSpendOnOneItemCategory` 与 `MaxNumberOfItemsToBuyFromSingleCategory` 截断预算与种类。
- [CaravanPartyComponent](../CaravanPartyComponent) —— 商队创建时调用 `GetInitialTradeGold` 初始化 `MobileParty` 的贸易资金。
- [CaravanConversationsCampaignBehavior](../CaravanConversationsCampaignBehavior) —— 玩家对话中组建商队时调用 `GetCaravanFormingCost` 显示与扣除组建成本（分精英 / 海军组合）。
- [DefaultClanFinanceModel](../DefaultClanFinanceModel) —— 计算商队税收与收益时调用 `GetInitialTradeGold` 作为基准资金差额。
- [EscortMerchantCaravanIssueBehavior](../EscortMerchantCaravanIssueBehavior) —— 护送商队任务创建商队时调用 `GetInitialTradeGold` 初始化资金。
- [MobileParty](../MobileParty) —— 商队队伍载体，`PartyTradeGold` 是被初始化与扣减的真实状态。

共享 / 相关类型：

- [DefaultCaravanModel](../DefaultCaravanModel) —— 本模型的默认实现，具体数值与公式所在。
- [CampaignBehaviorBase](../CampaignBehaviorBase) —— `CaravansCampaignBehavior` 等的基类，是实际驱动调用方。
- [Settlement](../Settlement) —— 商队贸易所经过与停靠的定居点上下文。

## 风险

- **跨战役重载缓存实例**：`Campaign.Current.Models.CaravanModel` 在每次新战役 / 读档时由 `GameModels` 重新解析。把实例缓存进静态字段或长生命周期对象，会在重载后指向旧战役的已销毁对象，调用即崩溃或读到陈旧规则。每次需要时都重新走 `Campaign.Current.Models` 获取。
- **战役开始前访问**：`Campaign.Current` 或 `Campaign.Current.Models` 在战役未启动时为 `null`。在 `MainMenu`、子模块加载早期或编辑器上下文里调用会直接空引用。
- **误判状态层**：该模型是无状态纯函数，没有需要持久化的字段，也不含 `[SaveableField]`。若你新增的派生类里加了可变字段并期望它随存档恢复，会发现这些值永远不会被序列化，从而产生隐蔽的规则漂移。
- **在 Mission / 战斗层调用**：模型属于 Campaign 层，仅在战役模拟中存在；在 `Mission` 或战场逻辑里取 `Campaign.Current.Models` 是错误的访问层。
- **只替换模型不改写入路径**：派生类改了初始资金或成本公式，但真正把资金写入 `MobileParty.PartyTradeGold`、扣费与调整权势的是 `CaravanPartyComponent` 与 `CaravansCampaignBehavior`。只替换模型、却让行为按旧假设处理资金或队伍上限，会出现界面成本与扣费不一致、或“判定通过却流程不推进”。
- **`GetInitialTradeGold` 的 `eliteCaravan` 语义**：默认实现把第三个参数理解为“大规模商队（large）”，且对 `Hero.MainHero` 额外 `+5000`。若你的替换实现把该参数另作“精英”解释，会与创建方（`CaravanPartyComponent` 传入的 `isElite`）口径不一致，导致初始资金偏差。
- **`CanHeroCreateCaravan` 的副作用经由组建流程放大**：它只判定“可创建”，真正扣资金、建队伍、`AddPower` 的是 `CaravansCampaignBehavior`；若替换实现放宽了资格却让行为按旧假设处理资金或队伍上限，会出现流程不推进或资金 / 队伍不一致。

## 成员说明

### 组建资格与精英概率

- **`CanHeroCreateCaravan(Hero hero)`**
  - 用途：判断英雄当前能否组建商队。默认实现要求：是商人职业（`IsMerchant`）、当前不隶属于任何队伍（`PartyBelongedTo == null`）、名下没有处于活动状态（未被 AI 禁用）的商队（即 `OwnedCaravans` 中活跃数为 0）、处于活跃状态（`IsActive`）且非模板英雄（`!IsTemplate`），最后再要求 `hero.CanLeadParty()` 为真。
  - 副作用：无，纯判定。
  - 调用时机：`CaravansCampaignBehavior` 在每日结算时为各存活英雄调用，决定是否可以发起组建；`CaravanConversationsCampaignBehavior` 的对话分支也借此判断玩家可否创建。

- **`GetEliteCaravanSpawnChance(Hero hero)`**
  - 用途：返回该英雄的商队成为“精英商队”的每日生成概率（`0~1`）。默认实现：英雄权势 `Power` 须 `>= 112`，否则返回 `0f`；满足时概率为 `hero.Power * 0.0045f - 0.5f`（随权势线性增长）。
  - 副作用：无，纯计算。
  - 调用时机：`CaravansCampaignBehavior` 在掷骰判定新商队是否为精英时，比较 `GetEliteCaravanSpawnChance(hero) > hero.RandomFloat()`。

### 资金与成本

- **`GetInitialTradeGold(Hero owner, bool isNavalCaravan, bool eliteCaravan)`**
  - 用途：返回商队出发时的初始贸易资金。默认实现：基础 `10000`；若 `owner` 是玩家主角（`Hero.MainHero`）额外 `+5000`；若 `eliteCaravan` 为真（大规模商队）则基础额提升到 `17500`。注意第三个参数在默认实现中等同于“大规模商队”，与创建方传入的 `isElite` 语义一致。
  - 副作用：无，纯计算；真正写入 `MobileParty.PartyTradeGold` 由调用方完成。
  - 调用时机：`CaravanPartyComponent` 与 `EscortMerchantCaravanIssueBehavior` 在创建商队队伍时调用以初始化资金；`DefaultClanFinanceModel` 在算商队收益 / 税收时调用作为基准差额。

- **`GetCaravanFormingCost(bool eliteCaravan, bool navalCaravan)`**
  - 用途：返回组建一支商队所需的花费（金币）。默认实现：精英 / 大规模商队为 `22500`，普通商队为 `15000`；若玩家文化拥有阿塞莱商人特性（`AseraiTraderFeat`），则按该特性的效果加成 `EffectBonus` 取整打折。
  - 副作用：无，纯计算；真正扣费由对话 / 组建流程完成。
  - 调用时机：仅 `CaravanConversationsCampaignBehavior` 在玩家对话中组建商队时，按“精英 / 海军”四种组合分情况调用以显示与扣除成本。

### 采购预算与种类上限

- **`GetMaxGoldToSpendOnOneItemCategory(MobileParty caravan, ItemCategory itemCategory)`**
  - 用途：返回该商队在单次采购中对某一个物品类别（`ItemCategory`）最多可花费的金币。默认实现固定返回 `1500`（与具体类别无关，但方法签名预留了类别参数以便派生实现差异化）。
  - 副作用：无，纯计算。
  - 调用时机：`CaravansCampaignBehavior` 在商队自动贸易采购时，用该上限截断单个类别的支出（`MathF.Min(PartyTradeGold * 0.5f, ……, 上限)`）。

- **`MaxNumberOfItemsToBuyFromSingleCategory`**（属性，`int`）
  - 用途：商队从单一物品类别最多可采购的物品种类数。默认实现 `DefaultCaravanModel` 返回 `300`；贸易循环在已达该数量后停止继续从同一类别购买。
  - 副作用：无，纯计算。
  - 调用时机：`CaravansCampaignBehavior` 在采购循环里以 `num4 < MaxNumberOfItemsToBuyFromSingleCategory` 作为继续条件。

### 组建后的权势变化

- **`GetPowerChangeAfterCaravanCreation(Hero hero, MobileParty caravanParty)`**
  - 用途：返回英雄成功组建商队后其权势（`Power`）的变化量。默认实现：若英雄当前 `Power >= 50`，则返还 `-30`（组建商队轻微削弱权势），否则返回 `0`。
  - 副作用：无，纯计算；真正的 `hero.AddPower(...)` 由调用方在组建成功后执行。
  - 调用时机：仅 `CaravansCampaignBehavior` 在商队组建成功时调用，对英雄施加权势增减。

## 示例

判定英雄能否组建商队，并读取其初始贸易资金与组建成本：

```csharp
Hero merchant = Hero.OneToOneConversationHero; // 对话中的商人英雄
if (merchant != null &&
    Campaign.Current.Models.CaravanModel.CanHeroCreateCaravan(merchant))
{
    int tradeGold = Campaign.Current.Models.CaravanModel
        .GetInitialTradeGold(merchant, isNavalCaravan: false, eliteCaravan: false);
    int formingCost = Campaign.Current.Models.CaravanModel
        .GetCaravanFormingCost(eliteCaravan: false, navalCaravan: false);
}
```

读取商队单次采购的类别预算与种类上限：

```csharp
MobileParty caravan = MobileParty.MainParty;
int categoryBudget = Campaign.Current.Models.CaravanModel
    .GetMaxGoldToSpendOnOneItemCategory(caravan, itemCategory);
int maxKinds = Campaign.Current.Models.CaravanModel.MaxNumberOfItemsToBuyFromSingleCategory;
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [GameModels](../GameModels) · [Hero](../Hero) · [Clan](../Clan) · [MobileParty](../MobileParty) · [CaravansCampaignBehavior](../CaravansCampaignBehavior) · [CaravanConversationsCampaignBehavior](../CaravanConversationsCampaignBehavior) · [CaravanPartyComponent](../CaravanPartyComponent) · [DefaultClanFinanceModel](../DefaultClanFinanceModel) · [EscortMerchantCaravanIssueBehavior](../EscortMerchantCaravanIssueBehavior) · [Settlement](../Settlement) · [DefaultCaravanModel](../DefaultCaravanModel) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [ItemCategory](../../core-extra/ItemCategory)
