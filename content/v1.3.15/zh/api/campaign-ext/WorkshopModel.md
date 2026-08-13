---
title: "WorkshopModel"
description: "战役里工坊经营规则的只读计算契约：工坊的建造成本、每日开销、仓库容量、生产转化率与买卖判定都从这里取值，并可在 GameModels 中被整类覆盖。"
---
# WorkshopModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class WorkshopModel : MBGameModel<WorkshopModel>`  
**Base:** `MBGameModel<WorkshopModel>`  
**File:** `TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/WorkshopModel.cs`

## 一句话职责

它集中规定了一个城镇工坊「值多少钱、每天烧多少、仓库多大、转化多快、玩家能开几家、能不能卖给名流」——所有工坊经济数值的判官。

## 概述

`WorkshopModel` 是战役里工坊（Workshop）子系统的**规则来源**。工坊本身是持有资金、库存和生产线数据的实体，但“这个工坊卖给玩家要多少金”“每天固定开支多少”“仓库能囤多少货”“某条生产线的实际转化速度被政策/建筑/特技加成到多少”这类计算全部委托给 `WorkshopModel`。引擎自带实现是 [DefaultWorkshopModel](../DefaultWorkshopModel/)，它把每个抽象成员写死成一组常量（初始资金 10000、仓库 6000、每日开销 100 等）。模组想改工坊经济，不需要去改 `Workshop` 字段，而是替换这个 Model。

## 心智模型

把 `WorkshopModel` 当成**工坊经济的一张只读配置表 + 一组计算器**，而不是一个会自己跑的业务对象：

- **它何时存在**：战役初始化时由 `SandBoxManager` 通过 `gameStarter.AddModel(new DefaultWorkshopModel())` 注册进 [GameModels](../GameModels/)，随后 `Campaign.Current.Models.WorkshopModel` 就能拿到。战役未启动前访问会得到 `null`。
- **谁持有它**：[Campaign](../../campaign/Campaign/) 的 `Models` 聚合了所有 Model，工坊相关的所有 Behavior（[WorkshopsCampaignBehavior](../WorkshopsCampaignBehavior/)、[WorkshopsCharactersCampaignBehavior](../WorkshopsCharactersCampaignBehavior/)）和 [Action](../ChangeOwnerOfWorkshopAction/) 都从 `Campaign.Current.Models.WorkshopModel` 读取数值，自己不缓存。
- **它管哪块经济**：工坊的**建造成本 / 资金下限 / 初始资金 / 每日开销 / 仓库容量 / 玩家可持有上限 / 生产转化率 / 买卖判定**。它不直接改任何 `Workshop` 的状态——它只“算”。
- **与周边类型的关系**：
  - [Workshop](../Workshop/)：被计算的实体；`Workshop.Expense` 直接取 `WorkshopModel.DailyExpense`，新建工坊时 `Capital` 取 `InitialCapital`。
  - [WorkshopType](../WorkshopType/)：转换生产线的花费 `GetConvertProductionCost` 由工坊类型决定。
  - [Town](../../campaign/Town/) / [Settlement](../../campaign/Settlement/)：成本与转化率依赖城镇的繁荣度、所属王国政策、建筑加成。
  - [Clan](../../campaign/Clan/)：玩家能开几家工坊由 `GetMaxWorkshopCountForClanTier(clan.Tier)` 决定，并与 [ClanTierModel](../ClanTierModel/) 的 `MaxClanTier` 关联。
  - [ClanFinanceModel](../ClanFinanceModel/) / [SettlementEconomyModel](../SettlementEconomyModel/)：工坊分红、清退由这些 Model 在每日结算里调用本 Model 的 `CapitalLowLimit` 等阈值。
- **Model 是只读计算器**：`DefaultWorkshopModel` 的属性都是无状态常量、方法都是纯函数（输入工坊/类型，输出数值）。不要往 Model 里塞可变状态或缓存结果——它应以 `Campaign.Current.Models` 中那份为唯一真相。

## 何时用 / 何时不要用

**用 `WorkshopModel` 当：**

- 你需要查询一个工坊的购买价、可持有上限、仓库容量、生产转化率等——直接读 `Campaign.Current.Models.WorkshopModel`。
- 你想要改变整局游戏的工坊经济（比如更便宜的工坊、更大的仓库）——继承 `WorkshopModel` 并在游戏初始化时注册自定义实现（见下方「自定义 Model」）。

**不要用 `WorkshopModel` 当：**

- 想给单个工坊改资金、生产线、所有者——那是 `Workshop` 实例状态，应走 [ChangeOwnerOfWorkshopAction](../ChangeOwnerOfWorkshopAction/)、[ChangeProductionTypeOfWorkshopAction](../ChangeProductionTypeOfWorkshopAction/) 等 Action，而不是自己写字段或调 Model 的方法去“施加”变更。
- 想直接写入 `WorkshopModel` 的属性——抽象属性没有 setter，且引擎只读它；任何“覆盖数值”的企图都应换成注册新 Model。
- 在 [Campaign](../../campaign/Campaign/) 初始化之前就访问——此时 `Campaign.Current.Models` 尚未装配，会抛空引用或返回 `null`。

## 依赖图

- 上游（创建/持有）：[Campaign](../../campaign/Campaign/) → [GameModels](../GameModels/)（在 `SandBoxManager` 中 `AddModel(new DefaultWorkshopModel())`）
- 调用方（下游系统）：[WorkshopsCampaignBehavior](../WorkshopsCampaignBehavior/)（生产/分红/清退循环）、[WorkshopsCharactersCampaignBehavior](../WorkshopsCharactersCampaignBehavior/)（买卖 UI 判定）、[ChangeOwnerOfWorkshopAction](../ChangeOwnerOfWorkshopAction/)、[ChangeProductionTypeOfWorkshopAction](../ChangeProductionTypeOfWorkshopAction/)、[ClanFinanceModel](../ClanFinanceModel/)、[ClanTierModel](../ClanTierModel/)
- 被计算的数据实体：[Workshop](../Workshop/)、[WorkshopType](../WorkshopType/)、[Town](../../campaign/Town/)、[Settlement](../../campaign/Settlement/)、[Clan](../../campaign/Clan/)
- 默认实现：[DefaultWorkshopModel](../DefaultWorkshopModel/)
- 相关经济模型：[SettlementEconomyModel](../SettlementEconomyModel/)、[ClanFinanceModel](../ClanFinanceModel/)、[ClanTierModel](../ClanTierModel/)
- 写作约束见 [doc-contract](../../../architecture/doc-contract/)

## 风险

- **战役初始化前访问**：`Campaign.Current.Models` 在 `OnGameStart` 装配完成前为 `null`，此时读 `WorkshopModel` 会空引用崩溃。只在 Behavior 的 tick、对话、Action 等战役已运行的上下文中使用。
- **假设 Model 一定非空**：自定义构建或精简版可能未注册工坊 Model，`Campaign.Current.Models.WorkshopModel` 可能返回 `null`。读之前务必判空，或确认宿主模块已加载。
- **把 Model 当成可变状态**：`DefaultWorkshopModel` 是纯计算、无状态。若在自定义 Model 里塞缓存字段，存档/读档不会恢复它，且多存档切换时可能产生脏数据。让 Model 永远保持“输入→输出”的纯函数形态。
- **跨版本差异极小但需留意**：`WorkshopModel` 的公开成员在 1.3.0 → 1.3.15 → 1.4.5 之间完全一致（仅 IL 元数据顺序微调）。若你依赖某个未在抽象层声明、只存在于 `DefaultWorkshopModel` 的具体行为（如固定常量 10000/6000），应显式读取对应属性而非硬编码常量，以便兼容未来默认实现调整。

## 成员说明

### 配置常量（只读属性）

每个属性在 [DefaultWorkshopModel](../DefaultWorkshopModel/) 里是固定常量，引擎各处按名读取，不在别处缓存。

#### `public abstract int DaysForPlayerSaveWorkshopFromBankruptcy { get; }`
玩家工坊破产后，玩家还能在多少天内把它赎回（默认 `3`）。无副作用；由破产清算逻辑读取。

#### `public abstract int CapitalLowLimit { get; }`
工坊“资金下限”（默认 `5000`）。低于此值时不参与分红，并可能被 [ClanFinanceModel](../ClanFinanceModel/) 在每日结算里标记为可清退。纯读取。

#### `public abstract int InitialCapital { get; }`
新建工坊时注入的初始资金（默认 `10000`）。`Workshop` 在创建时会把 `Capital` 与 `InitialCapital` 都设成这个值；[ChangeOwnerOfWorkshopAction](../ChangeOwnerOfWorkshopAction/) 转让工坊时也用此值重置资金。

#### `public abstract int DailyExpense { get; }`
工坊每日固定开支（默认 `100`）。`Workshop.Expense` 直接返回它；[WorkshopsCampaignBehavior](../WorkshopsCampaignBehavior/) 在每日 tick 据此扣减资金。

#### `public abstract int WarehouseCapacity { get; }`
仓库容量上限（默认 `6000`，按重量计）。[WorkshopsCampaignBehavior](../WorkshopsCampaignBehavior/) 在判断能否入库时用它比对库存重量，决定生产是否暂停。

#### `public abstract int DefaultWorkshopCountInSettlement { get; }`
城镇初始化时的工坊数量（默认 `4`），由 [WorkshopsCampaignBehavior](../WorkshopsCampaignBehavior/) 的 `InitializeWorkshops` 在城镇建立时调用。

#### `public abstract int MaximumWorkshopsPlayerCanHave { get; }`
玩家家族最多能持有的工坊总数。`DefaultWorkshopModel` 实现为 `GetMaxWorkshopCountForClanTier(ClanTierModel.MaxClanTier)`，因此它会随家族等级上限变化。购买前由买卖 UI 比对 `Hero.MainHero.OwnedWorkshops.Count` 来拦截超额。

### 工坊数量与买卖定价

#### `public abstract int GetMaxWorkshopCountForClanTier(int tier)`
给定家族等级 `tier` 允许的工坊数（默认实现为 `tier + 1`）。被 [ClanTierModel](../ClanTierModel/) 与买卖 UI 用来算“升一级多开几家”。纯函数，无副作用。

#### `public abstract int GetCostForPlayer(Workshop workshop)`
玩家从城镇买下该工坊要付的金。默认实现：`WorkshopType.EquipmentCost + (int)Town.Prosperity * 4 + InitialCapital / 5`。[WorkshopsCharactersCampaignBehavior](../WorkshopsCharactersCampaignBehavior/) 与 [ChangeOwnerOfWorkshopAction](../ChangeOwnerOfWorkshopAction/) 都走它计算实付价；它只读取、不改状态。

#### `public abstract int GetCostForNotable(Workshop workshop)`
把工坊卖给名流（不是玩家）时的成交价。默认：`(WorkshopType.EquipmentCost + (int)Town.Prosperity / 2 + workshop.Capital) / 2`。出售流程用此值给名流一方结算。

#### `public abstract Hero GetNotableOwnerForWorkshop(Workshop workshop)`
按“声望 / 已持股数”加权随机挑一个合适的名流来接手工坊。默认实现遍历 `Settlement.Notables`，排除已死或与当前 owner 相同的，权重为 `Power / 10^已有工坊数`，最后 `MBRandom.ChooseWeighted` 选出。返回 `null` 表示镇上无人接盘。

### 生产与经济计算

#### `public abstract int GetConvertProductionCost(WorkshopType workshopType)`
把工坊生产线切换到某 `WorkshopType` 需要花费的金。默认实现直接返回 `workshopType.EquipmentCost`。[ChangeProductionTypeOfWorkshopAction](../ChangeProductionTypeOfWorkshopAction/) 在 `ignoreCost == false` 时用它扣钱。

#### `public abstract ExplainedNumber GetEffectiveConversionSpeedOfProduction(Workshop workshop, float speed, bool includeDescriptions)`
计算一条生产线的**实际转化率**。它把基础 `speed` 包进 `ExplainedNumber`，再叠加：所属王国政策（`ForgivenessOfDebts` -5%、`StateMonopolies` -10%）、城镇 `WorkshopProduction` 类建筑加成、商贸系 `MercenaryConnections` 特技、`Steward.Sweatshops` 特技。返回带明细的 `ExplainedNumber`，可用 `ResultNumber` 取最终值。由 [WorkshopsCampaignBehavior](../WorkshopsCampaignBehavior/) 在跑生产时调用。

#### `public abstract float GetTradeXpPerWarehouseProduction(EquipmentElement production)`
每次生产产出的物品给玩家“商贸”技能的经验量。默认：`production.GetBaseValue() * 0.1f`。由 [DefaultSkillLevelingManager](../DefaultSkillLevelingManager/)（若不存在则技能升级相关系统）在工坊产出时调用 `Hero.MainHero.AddSkillXp(DefaultSkills.Trade, ...)`。

#### `public abstract bool CanPlayerSellWorkshop(Workshop workshop, out TextObject explanation)`
玩家能否把该工坊卖给名流。`DefaultWorkshopModel` 实现会调 `GetNotableOwnerForWorkshop`；若无接盘名流，返回 `false` 且 `explanation` 给出“镇上无人接手”的提示文本，否则返回 `true`、`explanation` 为 `null`。买卖 UI 用它来禁用出售按钮并显示原因。

## 最小真实示例

### 示例 1：读取工坊购买价与玩家持有上限

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.CampaignSystem.Settlements.Workshops;

// 战役运行中才能访问；未初始化时为 null
WorkshopModel model = Campaign.Current.Models.WorkshopModel;

// 取当前城镇第一家工坊
Workshop workshop = Settlement.CurrentSettlement.Town.Workshops[0];

int buyPrice = model.GetCostForPlayer(workshop);
int maxForTier = model.GetMaxWorkshopCountForClanTier(Clan.PlayerClan.Tier);
int alreadyOwned = Hero.MainHero.OwnedWorkshops.Count;

if (alreadyOwned < maxForTier && Hero.MainHero.Gold >= buyPrice)
{
    // 这里应调用 ChangeOwnerOfWorkshopAction 真正完成购买，而非直接改字段
}
```

### 示例 2：查询某条生产线的实际转化率

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements.Workshops;
using TaleWorlds.Core;

WorkshopModel model = Campaign.Current.Models.WorkshopModel;
Workshop workshop = Settlement.CurrentSettlement.Town.Workshops[0];

ExplainedNumber speed = model.GetEffectiveConversionSpeedOfProduction(
    workshop,
    workshop.WorkshopType.Productions[0].ConversionSpeed,
    includeDescriptions: true);

float effectiveSpeed = speed.ResultNumber;
```

### 示例 3：注册自定义工坊 Model（覆盖默认经济）

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;

public class CheaperWorkshopModel : DefaultWorkshopModel
{
    public override int InitialCapital => 5000;   // 更便宜的启动资金
    public override int WarehouseCapacity => 12000; // 更大的仓库
}

// 在 SubModule 的 OnGameStart（或 RegisterModels）阶段注册；
// 后注册的同类 Model 会覆盖先注册的 DefaultWorkshopModel
gameStarter.AddModel(new CheaperWorkshopModel());
```

## 跨版本提示

- v1.3.0 / v1.3.15 / v1.4.5：抽象成员列表完全一致，无新增或删除。差异仅在 IL 元数据顺序，对调用方透明。
- 若依赖 `DefaultWorkshopModel` 的具体常量（10000 / 6000 / 100 等），请改为读取对应属性，避免未来默认实现调整时数值漂移。

## 参见

- [DefaultWorkshopModel](../DefaultWorkshopModel/) — 引擎默认实现与具体常量
- [Workshop](../Workshop/) — 被计算的工坊实体
- [WorkshopType](../WorkshopType/) — 生产线类型与转换花费来源
- [GameModels](../GameModels/) — 持有并派发所有 Model 的容器
- [WorkshopsCampaignBehavior](../WorkshopsCampaignBehavior/) — 每日生产 / 分红 / 清退循环
- [ChangeOwnerOfWorkshopAction](../ChangeOwnerOfWorkshopAction/) — 玩家/名流接手工坊
- [ClanTierModel](../ClanTierModel/) — 家族等级上限，影响玩家可持工坊数
- [Campaign](../../campaign/Campaign/) — 通过 `Campaign.Current.Models` 访问整个世界
