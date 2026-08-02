---
title: "GameModels"
description: "战役世界所有子系统计算逻辑（各种 *Model）的中央容器：通过 Campaign.Current.Models.<ModelName> 读取，并在 SubModule.InitializeGameStarter 中通过 AddModel 注册或替换。"
---
# GameModels

**Namespace:** TaleWorlds.CampaignSystem  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public sealed class GameModels : GameModelsManager`  
**Base:** `GameModelsManager`（位于 `TaleWorlds.Core`）  
**File:** `TaleWorlds.CampaignSystem/GameModels.cs`

## 概述

`GameModels` 是 Bannerlord 战役层（Campaign）的**模型容器**。它不存放任何世界状态，而是把上百个“纯计算逻辑”子系统——行军速度、外交、家族财政、城镇忠诚度、工资上限、围城结算等——以强类型属性的形式集中暴露出来。每个属性背后都是一个继承自 `GameModel`（或 `MBGameModel<T>`）的实例，例如 `PartySpeedCalculatingModel` 持有 `PartySpeedModel`、`DiplomacyModel` 持有外交评判逻辑。

这些模型是**无状态（或近乎无状态）的只读计算器**：它们根据传入的世界对象（部队、据点、家族……）返回数值或做判定，但从不修改世界本身。真正改变世界的是 `*Action`（如 `DeclareWarAction`、`ChangeKingdomInfluenceAction`）。当你想知道“派系战争得分怎么算”“工资上限是多少”“这支部队速度多快”时，要找的是 `Campaign.Current.Models` 里的某个 Model，而不是某个 Action。这也是「想改党派战争得分该找 Model 还是 Action」的答案：得分逻辑在 `DiplomacyModel` 里，属于 Model 层。

## 心智模型

把 `GameModels` 想成战役里的**“公式手册”**，而不是“账本”：

- 它只回答“怎么算”，不负责“怎么改”。调用任何一个 Model 的方法通常只是读取/计算，不会落地任何状态变更。
- 所有模型都在 `Campaign.Current.Models` 上，按类型强类型暴露（`Campaign.Current.Models.DiplomacyModel`、`Campaign.Current.Models.PartyWageModel`……）。
- 容器本身在**战役初始化时一次性构建完成**，之后只读。你不能在游戏进行中（例如在某个 `CampaignBehaviorBase` 里）再 `AddModel` 来让它生效——那时 `GameModels` 早已装配好，新增的模型进不了这些强类型属性。
- 注册/替换模型只能发生在 `SubModule.InitializeGameStarter(Game, IGameStarter)` 阶段，早于 `Campaign` 本体被创建。
- 内部用 `GetGameModel<T>()` 解析每个属性，而该方法**从列表末尾向前找、返回最后一个匹配的类型**。这意味着：后注册的模型会覆盖先注册的同类模型——这正是官方与社区替换模型的标准手法。
- 注意：`GameModels` 只在 `Campaign.Current.GameMode` 为 `Campaign` 或 `Tutorial` 时才会填充分类属性（见 `GetSpecificGameBehaviors()`）。在非战役模式（如自定义战斗）下，这些属性保持 `null`。

## 如何获取 / 注册 Model

**读取**已注册的模型——直接走 `Campaign.Current.Models` 上的强类型属性：

```csharp
// 战役开始后，任何地方都能这样拿到某个模型
DiplomacyModel diplomacy = Campaign.Current.Models.DiplomacyModel;
PartyWageModel wageModel = Campaign.Current.Models.PartyWageModel;
MapDistanceModel distanceModel = Campaign.Current.Models.MapDistanceModel;
```

如果只想按类型动态获取（例如不确定某个模型是否注册、或类型在老版本不存在），用基类的泛型方法：

```csharp
// 来自 GameModelsManager，找不到返回 null
PartySpeedModel speed = Campaign.Current.Models.GetGameModel<PartySpeedModel>();
```

**注册 / 替换**模型——只能在 `SubModule` 的 `InitializeGameStarter` 里，通过 `IGameStarter.AddModel(...)`：

```csharp
public class MySubModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        // 1) 直接丢一个 GameModel 实例进去（最常用）
        gameStarterObject.AddModel(new MyDiplomacyModel());

        // 2) 泛型重载：用已有同类模型初始化你的包装模型，
        //    让新模型能委托给被它替换掉的“上一层”
        gameStarterObject.AddModel<PartyWageModel>((MBGameModel<PartyWageModel>)new MyWageWrapper());
    }
}
```

`CampaignGameStarter.AddModel` 的实现只是 `_models.Add(gameModel)`；泛型 `AddModel<T>(MBGameModel<T>)` 会先 `GetModel<T>()` 取出当前模型，再调用 `model.Initialize(existing)` 把它塞进你的 `BaseModel`。因此**注册顺序决定覆盖关系**：官方默认模型（在 `SandBoxManager` 与 `SandBoxSubModule` 中注册）先入列，模块的 `InitializeGameStarter` 后运行，所以模块注册的同类模型排在最末、最终胜出。

装配发生在 `Campaign` 构造期间：`base.GameManager.InitializeGameStarter(...)` 收集所有模型 → `CurrentGame.AddGameModelsManager<GameModels>(campaignGameStarter.Models)` 创建 `GameModels` → 其构造函数调用 `GetSpecificGameBehaviors()`，逐个把属性填成 `GetGameModel<T>()` 的结果。

## 主要属性

下表按子系统分组，列出最常接触、以及与 mod 逻辑关系最大的强类型属性。容器实际暴露约 130 个属性（视角、贸易、锻造、任务、比武、犯罪……），完整集合随版本增长；统一访问形态都是 `Campaign.Current.Models.<ModelName>`。

| 属性 | 类型 | 说明 |
|------|------|------|
| `PartySpeedCalculatingModel` | `PartySpeedModel` | 计算部队在地图上的移动速度（地形、载货、疲劳、补给等加权）。 |
| `MapDistanceModel` | `MapDistanceModel` | 两据点间的行程距离/可达性，AI 寻路与任务选点大量依赖。 |
| `MapVisibilityModel` | `MapVisibilityModel` | 地图迷雾与敌方部队可见性判定。 |
| `PartyNavigationModel` | `PartyNavigationModel` | 部队路径规划与导航。 |
| `EncounterModel` | `EncounterModel` | 遭遇触发半径与遭遇类型选择。 |
| `PartyMoraleModel` | `PartyMoraleModel` | 部队士气增减计算。 |
| `PartyDesertionModel` | `PartyDesertionModel` | 部队逃兵概率判定。 |
| `MobilePartyFoodConsumptionModel` | `MobilePartyFoodConsumptionModel` | 部队每日口粮消耗。 |
| `PartyFoodBuyingModel` | `PartyFoodBuyingModel` | 部队在城镇自动购粮逻辑。 |
| `PartyImpairmentModel` | `PartyImpairmentModel` | 部队减员/伤残（非战斗减损）计算。 |
| `CombatXpModel` | `CombatXpModel` | 战斗后经验分配。 |
| `GenericXpModel` | `GenericXpModel` | 通用经验曲线。 |
| `CombatSimulationModel` | `CombatSimulationModel` | 自动战斗模拟结算。 |
| `BattleRewardModel` | `BattleRewardModel` | 战斗获胜后的奖励（影响力、声望）计算。 |
| `PartyTrainingModel` | `PartyTrainingModel` | 部队在行军中训练升级。 |
| `ClanFinanceModel` | `ClanFinanceModel` | 家族每日收入/支出汇总。 |
| `ClanTierModel` | `ClanTierModel` | 家族等级阈值与升级条件。 |
| `SettlementTaxModel` | `SettlementTaxModel` | 城镇税收计算。 |
| `SettlementLoyaltyModel` | `SettlementLoyaltyModel` | 城镇忠诚度变化与叛乱阈值。 |
| `SettlementProsperityModel` | `SettlementProsperityModel` | 城镇繁荣度增减。 |
| `SettlementSecurityModel` | `SettlementSecurityModel` | 城镇治安度。 |
| `SettlementFoodModel` | `SettlementFoodModel` | 城镇粮食供给。 |
| `WorkshopModel` | `WorkshopModel` | 工坊每日收益与运营。 |
| `ValuationModel` | `ValuationModel` | 物品/部队的价值估值（用于交易、赎金）。 |
| `TradeItemPriceFactorModel` | `TradeItemPriceFactorModel` | 交易品买卖价差因子。 |
| `PartyWageModel` | `PartyWageModel` | 部队工资与最高工资支付上限 `MaxWagePaymentLimit`。 |
| `PartySizeLimitModel` | `PartySizeLimitModel` | 部队带兵上限。 |
| `InventoryCapacityModel` | `InventoryCapacityModel` | 部队背包容量上限。 |
| `DiplomacyModel` | `DiplomacyModel` | 外交评判核心：宣战/议和得分、影响力开销、王国合并评分。 |
| `AllianceModel` | `AllianceModel` | 盟友关系与结盟评分。 |
| `KingdomCreationModel` | `KingdomCreationModel` | 建立王国的条件与花费。 |
| `KingdomDecisionPermissionModel` | `KingdomDecisionPermissionModel` | 王国议会的决策权限。 |
| `ClanPoliticsModel` | `ClanPoliticsModel` | 家族在王国内的政治权重。 |
| `MinorFactionsModel` | `MinorFactionsModel` | 小派系行为逻辑。 |
| `CharacterDevelopmentModel` | `CharacterDevelopmentModel` | 英雄升级所需经验 `GetXpRequiredForLevel`。 |
| `CharacterStatsModel` | `CharacterStatsModel` | 英雄属性/技能派生数值。 |
| `PregnancyModel` | `PregnancyModel` | 怀孕概率与孕期逻辑。 |
| `AgeModel` | `AgeModel` | 年龄阶段与寿命相关判定。 |
| `MarriageModel` | `MarriageModel` | 婚姻成立条件。 |
| `VolunteerModel` | `VolunteerModel` | 城镇志愿者兵种生成。 |
| `HeirSelectionCalculationModel` | `HeirSelectionCalculationModel` | 继承人选拔评分。 |
| `HeroDeathProbabilityCalculationModel` | `HeroDeathProbabilityCalculationModel` | 英雄死亡概率（含战役事件致死）。 |
| `SiegeEventModel` | `SiegeEventModel` | 围城事件推进。 |
| `SiegeAftermathModel` | `SiegeAftermathModel` | 破城后处置（占领/劫掠/附庸）。 |
| `SiegeStrategyActionModel` | `SiegeStrategyActionModel` | 围城战略选择。 |
| `MilitaryPowerModel` | `MilitaryPowerModel` | 势力军力评估，用于战争得分。 |
| `TargetScoreCalculatingModel` | `TargetScoreCalculatingModel` | AI 选目标时的加权评分。 |

## 主要方法

`GameModels` 自身没有对外可调用的方法（其装配逻辑 `GetSpecificGameBehaviors()` 为私有）。可读的入口来自基类 `GameModelsManager`，或容器上的强类型属性。

### 按类型读取模型

#### `public T GetGameModel<T>() where T : GameModel`（基类 `GameModelsManager`）
从已注册模型列表中**自末尾向前**查找，返回最后一个 `T` 类型实例；未注册则返回 `null`。这是“后注册覆盖先注册”的底层实现。

```csharp
// 安全写法：先判空再调用，避免非战役模式下属性为 null 时崩溃
PartySpeedModel speed = Campaign.Current.Models.GetGameModel<PartySpeedModel>();
if (speed != null)
{
    ExplainedNumber result = speed.CalculateSpeed(party, null);
}
```

#### `public MBReadOnlyList<GameModel> GetGameModels()`（基类 `GameModelsManager`）
返回容器内**所有**已注册模型的只读列表。适合调试、批量枚举，或在不依赖强类型属性名的前提下遍历。

```csharp
foreach (GameModel model in Campaign.Current.Models.GetGameModels())
{
    // 例如打印所有已装配的模型类型，排查某个模型是否注册成功
    Debug.Print(model.GetType().Name);
}
```

### 强类型属性访问
每个子系统对应一个 `get` 属性（如 `Campaign.Current.Models.DiplomacyModel`）。这是在战役代码中**最高频**的访问方式，返回的类型就是该 Model 的接口/抽象类本身，直接调用其方法即可。

```csharp
// 真实调用示例（来自 SandBox / 官方代码风格）：
float recruitCost = Campaign.Current.Models.PartyWageModel.GetTroopRecruitmentCost(
    troop, Hero.MainHero, false);
float dist = Campaign.Current.Models.MapDistanceModel.GetDistance(
    fromSettlement, toSettlement, false, false, MobileParty.NavigationType.Default);
```

## 典型用法示例

### 示例 1：读取速度模型并计算某部队速度
模型是无状态计算器，传入世界对象即可得到结果，不改变任何状态。

```csharp
MobileParty party = MobileParty.MainParty;
PartySpeedModel speedModel = Campaign.Current.Models.PartySpeedCalculatingModel;
if (speedModel != null)
{
    ExplainedNumber speed = speedModel.CalculateBaseSpeed(party);
    InformationManager.DisplayMessage(new InformationMessage(
        $"当前行军基础速度：{speed.ResultNumber:F1}"));
}
```

### 示例 2：子类化并替换 DiplomacyModel，改写“宣战得分”
这是回答「党派战争得分该找 Model 还是 Action」的标准做法——得分在 `DiplomacyModel` 里，改它就要替换这个 Model，而不是去改某个 Action。

```csharp
// 1) 继承官方默认实现，只覆盖你关心的评分
public class MyDiplomacyModel : DefaultDiplomacyModel
{
    public override float GetScoreOfDeclaringWar(
        IFaction factionDeclaresWar, IFaction factionDeclaredWar,
        Clan evaluatingClan, out TextObject reason, bool includeReason = false)
    {
        // 先拿官方原始得分，再按自己的规则放大/缩小
        float baseScore = base.GetScoreOfDeclaringWar(
            factionDeclaresWar, factionDeclaredWar, evaluatingClan, out reason, includeReason);
        return baseScore * 1.5f; // 例如让 AI 更倾向于宣战
    }

    // GetWarProgressScore 决定战争进度条的增长评分，也可一并覆盖
    public override ExplainedNumber GetWarProgressScore(
        IFaction factionDeclaresWar, IFaction factionDeclaredWar, bool includeDescriptions = false)
    {
        return base.GetWarProgressScore(factionDeclaresWar, factionDeclaredWar, includeDescriptions);
    }
}

// 2) 在 SubModule.InitializeGameStarter 中注册。
//    因为它后于官方默认模型入列，GetGameModel<DiplomacyModel>() 会返回你的版本，
//    于是 Campaign.Current.Models.DiplomacyModel 指向 MyDiplomacyModel。
protected override void InitializeGameStarter(Game game, IGameStarter starter)
{
    starter.AddModel(new MyDiplomacyModel());
}
```

> 真正“发动战争”这件事仍然走 `DeclareWarAction.ApplyByPlayerHostility(...)` 之类的 Action；你改的只是 AI 在决策“要不要宣战”时算出的分数。

### 示例 3：用装饰器模式包装现有模型（保留原逻辑 + 叠加自己的修正）
泛型 `AddModel<T>(MBGameModel<T>)` 会先把当前模型注入你的 `BaseModel`，让你既能委托原实现又能追加逻辑。

```csharp
public class MyWageWrapper : MBGameModel<PartyWageModel>
{
    public override int GetTroopRecruitmentCost(CharacterObject troop, Hero buyer, bool isPatient)
    {
        // 先把原模型的结果算出来，再叠加修正（例如统一打九折）
        int original = BaseModel.GetTroopRecruitmentCost(troop, buyer, isPatient);
        return (int)(original * 0.9f);
    }
}

protected override void InitializeGameStarter(Game game, IGameStarter starter)
{
    starter.AddModel<PartyWageModel>((MBGameModel<PartyWageModel>)new MyWageWrapper());
}
```

## 风险与崩溃边界

- **模型为 `null`**：若某模型从未被注册（或你在一个非战役 `GameMode` 下访问，而该属性只在 `Campaign`/`Tutorial` 模式填充），对应强类型属性会是 `null`。直接 `Campaign.Current.Models.X.Method()` 会抛 `NullReferenceException`。跨版本访问新模型前务必用 `GetGameModel<T>()` 并判空。
- **战役未初始化就访问**：`Campaign.Current` 在战役真正创建前为 `null`，此时 `Campaign.Current.Models` 不可用。任何模型读取都必须发生在战役启动之后（如 `CampaignBehaviorBase` 的 `RegisterEvents`/`DailyTick` 内），绝不能在 `SubModule` 加载阶段就调用。
- **Model 不是改世界的入口**：模型方法几乎都是只读计算。若你“改了模型里某个字段”却没看到世界变化，是因为你走错了层——状态变更应使用 `*Action`（如 `DeclareWarAction.ApplyByPlayerHostility(...)`、`ChangeClanInfluenceAction.Apply(...)`）。混淆 Model（逻辑）与 Action（状态变更）是最常见的误用。
- **运行期 AddModel 无效**：`GameModels` 在战役构造阶段一次性装配完。游戏进行中通过行为去 `AddModel` 不会反映到 `Campaign.Current.Models` 的强类型属性上——注册必须在 `InitializeGameStarter` 阶段完成。
- **覆盖顺序冲突**：同一类型后注册的胜出。若两个模块都替换了同一个模型，最后一个入列的会覆盖前一个，可能造成意料之外的相互影响。需要协作时优先考虑装饰器（`MBGameModel<T>` 的 `BaseModel`）而非整体替换。
- **`GetSpecificGameBehaviors` 的模式限制**：它仅在 `Campaign`/`Tutorial` 模式下填充属性。为自定义战斗等模式写的模型即便注册了，也不会进 `GameModels` 的强类型属性（但仍可通过 `GetGameModel<T>()` 取到）。

## 跨版本提示

- v1.3.0：容器结构相同，`GetGameModel<T>()` 与 `AddModel` 机制已存在。但该版本**没有**舰船、小巷（Alley）、舰队（Fleet）相关模型——`CampaignShipDamageModel`、`CampaignShipParametersModel`、`ShipCostModel`、`ShipStatModel`、`AlleyModel`、`FleetManagementModel`、`ClanMemberPartyRoleModel` 等是后续版本（约 v1.4.x 起）才加入的属性。针对这些写逻辑时务必用 `GetGameModel<T>()` 判空以兼容老版本。
- v1.4.5：属性集合最完整（即本页所列范围）。覆盖机制与 v1.3.x 一致，但模型总数显著增加；跨版本 mod 不要假设某个具体属性一定存在，宁可走 `GetGameModel<T>()`。
- 通用：无论哪个版本，模型都**只回答“怎么算”**。若某版本间某个评分公式改了，那通常是对应 `*Model` 的默认实现变了，替换该 Model 即可，无需触碰调用方。

## 参见

- [Campaign](../) — 通过 `Campaign.Current.Models` 拿到整个容器
- [CampaignGameStarter](../CampaignGameStarter) — `AddModel` / `GetModel` 的注册入口
- [CampaignBehaviorBase](../CampaignBehaviorBase) — 在战役运行期安全地读取模型（不要在这里注册）
- [Game](../../core-extra/Game/) — `IGameStarter` 与模型列表的持有者 `CurrentGame`
- [Hero](../../campaign/Hero/) — 模型常被传入 `Hero` 等世界对象做计算
