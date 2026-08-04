---
title: "GameModels"
description: "战役层的强类型规则门面：在启动阶段从 CampaignGameStarter 收集 GameModel，按契约类型绑定 PartyWageModel、DiplomacyModel、SettlementEconomyModel 等属性，并由 Campaign.Current.Models 提供运行期读取入口。"
---

# GameModels

**Namespace:** TaleWorlds.CampaignSystem  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public sealed class GameModels : GameModelsManager`  
**Base:** `GameModelsManager`  
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/GameModels.cs`

## 职责一句话

`GameModels` 是战役规则的强类型门面：它不自己计算工资、外交或聚落产出，而是在战役组装完成时把一组 `GameModel` 实现绑定到稳定的属性名，供 `Campaign`、Behavior 和其它模型按契约读取。

## 心智模型

它位于 Core 的模型管理器和 Campaign 的具体规则之间。`GameModelsManager` 保存 `IEnumerable<GameModel>` 的副本；`GameModels` 的构造函数随后对每个属性调用泛型 `GetGameModel<T>()`。这个查找从列表尾部向前扫描，因此同一契约类型最后加入的实现获胜。

- **谁创建 / 谁持有**：`Campaign.OnInitialize()` 创建 `CampaignGameStarter`，让各模块把模型加入 starter；随后调用 `Game.SetBasicModels(campaignGameStarter.Models)` 和 `Game.AddGameModelsManager<GameModels>(campaignGameStarter.Models)`。`Campaign` 把返回的实例放到私有字段，并通过 `Campaign.Models` 暴露它。
- **何时可用**：等战役初始化走到模型管理器创建之后，再从 `Campaign.Current.Models` 读取。新战役和读档都会经过同一组模型组装；`GetSpecificGameBehaviors()` 只在 Campaign 或 Tutorial 模式下绑定战役模型。
- **何时用**：需要查询原生规则时用对应的具体门面属性，例如 `Campaign.Current.Models.PartyWageModel`、`DiplomacyModel` 或 `SettlementEconomyModel`。具体模型的抽象契约才是扩展点。
- **何时不要用**：不要直接 `new GameModels(...)`，也不要把它当作世界状态容器、事件总线或 Action。改变金钱、关系、所有权等状态应走对应的 Action；改变计算规则应在 starter 阶段加入模型实现，而不是运行中反射写入这些 `private set` 属性。

### 组装顺序

```text
模块 / SandBox / StoryMode
  -> CampaignGameStarter.AddModel(model)
  -> Campaign.OnInitialize()
  -> Game.SetBasicModels(starter.Models)
  -> Game.AddGameModelsManager<GameModels>(starter.Models)
  -> GameModels.GetSpecificGameBehaviors()
  -> Campaign.Current.Models
```

`GameModelsManager` 的构造函数会把输入枚举复制为内部 `MBList<GameModel>`。因此 starter 完成后再调用 `AddModel`，不会回填已经创建的 `GameModels`；覆盖必须发生在两个管理器创建之前。组装列表本身也没有公开 remove API，常见的替换方式是把同一抽象契约的包装实现追加到末尾。

## 依赖关系

**上游（创建与注入）**

- [Campaign](../Campaign) —— 在初始化期间保存模型门面，并通过 `Models` 暴露它。
- [CampaignGameStarter](../CampaignGameStarter) —— 模块启动期的 `AddModel` 注册入口。
- [Game](../../core/Game) —— 创建 `BasicGameModels` 和战役 `GameModels` 管理器。
- [GameModelsManager](../../core-extra/GameModelsManager) —— 负责复制组件列表和按类型反向查找。
- [GameModel](../../core-extra/GameModel) / [MBGameModel](../../core-extra/MBGameModel) —— 所有规则模型的基础契约与包装替换基类。

**下游（读取与消费）**

- [PartyWageModel](../PartyWageModel) —— `Campaign`、`CharacterObject`、招募和驻军逻辑读取工资规则。
- [DiplomacyModel](../DiplomacyModel) —— 战争、和平、外交评分等战役逻辑读取外交规则。
- [SettlementEconomyModel](../SettlementEconomyModel) —— 聚落经济行为读取结算规则。
- [DefaultPartyWageModel](../DefaultPartyWageModel) —— 原生默认实现；不要把默认类当成门面本身。
- [CampaignBehaviorBase](../CampaignBehaviorBase) —— 行为通常在事件或 tick 回调里消费模型。

**边界**

- **Action** 负责改变世界状态，如 [GiveGoldAction](../../campaign-ext/GiveGoldAction) 或 [ChangeRelationAction](../../campaign-ext/ChangeRelationAction)；`GameModels` 只提供计算规则。
- **事件 / Behavior** 决定何时调用规则；它们不应缓存跨战役的模型实例。行为和战役结束时应丢弃旧的 `Campaign.Current` 引用。
- **存档**：模型对象不是 mod 自定义存档数据的入口。行为的持久状态应由 [CampaignBehaviorBase](../CampaignBehaviorBase) 的 `SyncData(IDataStore)` 管理。

## 成员说明

这些属性全部是 `private set`：mod 通常读取它们，不能在运行中安全地替换门面成员。下面按实际用途分组；每组中的每个属性都是一个独立的规则契约，调用时机由消费者所在的战役阶段决定。

### 地图、党派与移动

| 属性 | 用途 / 时机 / 副作用 |
|------|----------------------|
| `MapVisibilityModel`、`InformationRestrictionModel` | 地图可见性与信息过滤；在地图查询和 UI 信息构建时读取，不直接改地图状态。 |
| `PartySpeedCalculatingModel`、`PartyHealingModel`、`PartyNavigationModel`、`MapDistanceModel`、`MapWeatherModel`、`MapTrackModel` | 党派速度、恢复、寻路、距离、天气和追踪规则；地图 tick、追逐和路径计算中会高频读取，返回值会影响 AI 与玩家移动。 |
| `CaravanModel`、`PartyTrainingModel`、`MobilePartyAIModel`、`ArmyManagementCalculationModel`、`TargetScoreCalculatingModel`、`BanditDensityModel` | 商队、训练、党派 AI、军团编组、目标评分和地图上盗匪密度；由 Campaign 行为和 AI 调用，不应在 UI 线程自行推进 AI。 |
| `PartySizeLimitModel`、`PartyShipLimitModel`、`PartyTransitionModel`、`PartyImpairmentModel`、`PartyDesertionModel` | 队伍上限、船只上限、状态转换、减员和逃兵规则；改变返回值可能使 roster、编队或存档状态不一致。 |
| `PartyMoraleModel` | 党派士气的基线、胜负变化、饥饿与欠薪惩罚，以及包含可解释来源的有效士气；`MobileParty`、每日粮食/财政结算和治疗逻辑会读取它，查询模型不会直接写回 `MobileParty` 的士气状态。 |

### 经济、贸易与资源

| 属性 | 用途 / 时机 / 副作用 |
|------|----------------------|
| `PartyWageModel`、`InventoryCapacityModel`、`PartyFoodBuyingModel`、`MobilePartyFoodConsumptionModel`、`RaidModel` | 工资、携带容量、买粮、粮食消耗和袭击收益/代价；每日结算、队伍预算、驻军和袭击行为会读取。不要把模型查询误当成给队伍加钱或加粮。 |
| `PartyTradeModel`、`TradeItemPriceFactorModel`、`TradeAgreementModel`、`ValuationModel`、`RansomValueCalculationModel` | 交易价格、贸易协议、物品估值和赎金；交易流程会结合当前聚落和库存调用，模型本身不修改物品栏。 |
| `SettlementEconomyModel`、`SettlementFoodModel`、`SettlementTaxModel`、`SettlementProsperityModel`、`VillageProductionCalculatorModel`、`VillageTradeModel` | 城镇/村庄的生产、食物、税收、繁荣和贸易边界；由日结算行为读取，替换时必须保持返回值的单位、范围和解释信息契约。 |
| `BuildingModel`、`BuildingConstructionModel`、`BuildingEffectModel`、`BuildingScoreCalculationModel`、`WorkshopModel`、`ItemDiscardModel`、`SmithingModel` | 建筑对象、建造排队、建筑效果、建造评分、工坊与物品处理、锻造规则；这些属性只提供计算入口，真正的建筑、工坊或物品变更仍由相应行为或 Action 执行。 |

### 聚落、派系与外交

| 属性 | 用途 / 时机 / 副作用 |
|------|----------------------|
| `SettlementValueModel`、`SettlementAccessModel`、`SettlementPatrolModel`、`SettlementGarrisonModel` | 聚落价值、进入权限、巡逻和驻军计算；攻城、进入聚落和驻军行为会依赖它们，返回异常值可能导致错误的目标或预算。 |
| `SettlementMilitiaModel`、`SettlementLoyaltyModel`、`SettlementSecurityModel` | 民兵、忠诚和治安的增减/上限计算；通常在每日或事件结算中读取，不要直接把计算结果写回多个字段。 |
| `ClanTierModel`、`ClanPoliticsModel`、`ClanFinanceModel`、`VassalRewardsModel`、`MinorFactionsModel` | 家族等级、政治、财政、封臣奖励和小派系规则；决策、税收和派系行为会读取，状态变更应交给对应 Action 或 Behavior。 |
| `DiplomacyModel`、`AllianceModel`、`KingdomCreationModel`、`KingdomDecisionPermissionModel`、`EmissaryModel`、`DefectionModel`、`BarterModel`、`PersuasionModel` | 外交、联盟、建国、决策许可、使者、叛变、交易和说服规则；对话或决策阶段调用，不能在规则查询中直接宣布战争或改关系。 |

### 角色、遭遇与战役内容

| 属性 | 用途 / 时机 / 副作用 |
|------|----------------------|
| `CharacterDevelopmentModel`、`CharacterStatsModel`、`AgeModel`、`MarriageModel`、`PregnancyModel`、`RomanceModel`、`HeroCreationModel` | 角色成长、属性、年龄、婚姻、怀孕、恋爱和创建规则；生命周期行为会使用，替换时要保持对 `Hero` 生命周期与事件的兼容。 |
| `EncounterModel`、`EncounterGameMenuModel`、`HideoutModel`、`CrimeModel`、`DisguiseDetectionModel`、`BribeCalculationModel`、`LocationModel` | 遭遇、遭遇菜单、藏身处、犯罪、伪装检测、贿赂和地点规则；地图遭遇或菜单初始化时读取，不能从普通 tick 假造一次遭遇。 |
| `VolunteerModel`、`NotablePowerModel`、`NotableSpawnModel`、`TavernMercenaryTroopsModel`、`CompanionHiringPriceCalculationModel`、`PrisonerRecruitmentCalculationModel`、`PrisonerDonationModel`、`PartyTroopUpgradeModel`、`TroopSupplierProbabilityModel` | 志愿兵、显贵、招募、酒馆雇佣、伙伴价格、俘虏招募/捐赠、兵种升级和部队供应概率；招募行为需要同时维护 roster、金钱和事件，模型只给出计算结果。 |
| `PlayerProgressionModel`、`GenericXpModel`、`CombatXpModel`、`DailyTroopXpBonusModel`、`PrisonBreakModel`、`ExecutionRelationModel`、`HeirSelectionCalculationModel`、`HeroAgentLocationModel`、`HeroDeathProbabilityCalculationModel` | 玩家进度、经验、每日经验、越狱、处决关系、继承人、英雄 Agent 位置和死亡概率规则；在战斗或战役结算后读取，不能绕过相应 Action 直接伪造结算。 |

### 战斗、攻城、船只与表现

| 属性 | 用途 / 时机 / 副作用 |
|------|----------------------|
| `CombatSimulationModel`、`BattleRewardModel`、`TroopSacrificeModel`、`BattleCaptainModel`、`BodyPropertiesModel`、`EquipmentSelectionModel` | 战斗模拟、战利品、牺牲、指挥官、身体属性和装备选择；战斗创建/结算阶段调用，错误替换会影响结果和 Agent 初始化。 |
| `SiegeStrategyActionModel`、`SiegeEventModel`、`SiegeAftermathModel`、`SiegeLordsHallFightModel`、`WallHitPointCalculationModel`、`MilitaryPowerModel` | 攻城策略、攻城事件、善后、大厅战斗、城墙生命值和军力；攻城生命周期中读取，不能在 SiegeEvent 已销毁后缓存其对象继续调用。 |
| `BannerItemModel`、`VoiceOverModel`、`SceneModel`、`CutsceneSelectionModel`、`IncidentModel`、`AlleyModel` | 旗帜物品、语音、场景、过场、事件和巷道内容选择；它们可能依赖 UI/场景生命周期，计算模型不等于可以在后台线程加载引擎资源。 |
| `CampaignTimeModel`、`DifficultyModel`、`DelayedTeleportationModel`、`CampaignShipDamageModel`、`CampaignShipParametersModel`、`ShipCostModel`、`ShipStatModel`、`FleetManagementModel`、`ClanMemberPartyRoleModel`、`TournamentModel`、`IssueModel` | 战役时间、难度、延迟传送、船只伤害/参数/费用/属性、舰队管理、家族成员角色、竞技大会和 Issue 规则；战役开始、地图移动、内容事件和每日结算阶段使用，版本升级时需重新核对契约和返回单位。 |

### 继承成员

`GetGameModels()` 返回管理器内部的 `MBReadOnlyList<GameModel>`，适合诊断当前已注册组件和确认替换顺序。它不是可写的模型注册 API；请在启动阶段使用 [CampaignGameStarter](../CampaignGameStarter) 的 `AddModel`。

`GameModels(IEnumerable<GameModel>)` 是引擎组装入口。构造函数先交给基类复制列表，再绑定属性；直接调用会缺少 `Campaign.Current`、默认模型和正确的模块顺序。

## 真实示例

### 在战役行为中读取现有规则

`Campaign.Current.Models` 是战役运行期的真实获取路径。下面只读取工资上限；它不改变队伍金钱，也不绕过工资结算。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;

public static int ReadWageLimit()
{
    Campaign campaign = Campaign.Current;
    if (campaign == null || campaign.Models == null)
    {
        return 0;
    }

    PartyWageModel wageModel = campaign.Models.PartyWageModel;
    return wageModel == null ? 0 : wageModel.MaxWagePaymentLimit;
}
```

原生代码也沿用这条路径：`Campaign` 在初始化主队时读取 `Current.Models.PartyWageModel.MaxWagePaymentLimit`，`CharacterObject.GetWage()` 则通过同一模型取得角色工资。需要改变世界状态时应转到 Action，例如 [GiveGoldAction](../../campaign-ext/GiveGoldAction)，而不是修改模型返回值。

### 在 starter 阶段替换一个模型

这是 1.4.5 StoryMode 的真实注册形状：`StoryModePartyWageModel` 继承 `PartyWageModel`，通过 `MBGameModel<PartyWageModel>.BaseModel` 委托未改变的默认规则，再只覆盖教程需要的招聘费用。

```csharp
private void AddModels(CampaignGameStarter campaignGameStarter)
{
    campaignGameStarter.AddModel<PartyWageModel>(
        (MBGameModel<PartyWageModel>)(object)new StoryModePartyWageModel());
}
```

`CampaignGameStarter.AddModel<T>` 会先用当前同类型模型调用包装器的 `Initialize`，再把包装器追加到列表；之后 `GameModelsManager.GetGameModel<T>` 的反向扫描才会选中它。自己的 mod 应在同一个启动钩子里注册自己的 `PartyWageModel` 派生类，并保留基类抽象方法的返回契约。

## 风险与崩溃边界

- **过早读取**：在 Campaign 模型管理器创建前调用 `Campaign.Current.Models`，或在战役销毁后继续保存引用，得到的对象可能是 `null` 或已经失效。把读取放在战役启动完成后的行为、事件或明确的 SubModule 钩子中。
- **缺少契约实现**：`GetGameModel<T>()` 找不到匹配类型时返回 `null`。若 starter 没有加入某个模型，所有直接解引用 `Campaign.Current.Models.SomeModel` 的消费者都可能发生空引用。
- **错误的替换顺序**：模型列表从尾到头取最后一个匹配类型。把包装器加在默认实现之前会被默认实现遮住；在 `GameModels` 构造后再加则不会更新现有门面。
- **包装器的 BaseModel 为空**：`AddModel<T>(MBGameModel<T>)` 会把当前模型传给 `Initialize`，但当前模型本身可能不存在。包装器若无条件访问 `BaseModel`，会把启动阶段问题变成空引用。
- **只替换一半管理器**：Campaign 初始化会用同一组件枚举创建 `BasicGameModels` 和战役 `GameModels`。只考虑其中一个管理器会让 Core 与 Campaign 消费不同的实现，产生难以复现的规则分歧。
- **把查询当成写操作**：模型返回的是计算结果，不会自动更新 `Hero`、`MobileParty`、`Settlement` 或存档字段。直接修改这些对象的内部状态以“模拟模型结果”会跳过事件、Action 和存档边界。
- **错误阶段和线程**：部分模型依赖地图、场景或战役对象已完成初始化。不要在静态初始化、后台线程或 Mission 结束回调中访问依赖当前状态的模型；先确认相应生命周期仍然有效。
- **版本契约漂移**：模型属性名称或抽象方法可能在版本间变化。跨 1.3.15 与 1.4.5 的 mod 必须重新核对对应接口，不能只按属性名反射查找。

## 导航

- ↑ 父级：[Campaign API](../)
- ↔ 同级：[Campaign](../Campaign) · [CampaignGameStarter](../CampaignGameStarter) · [DiplomacyModel](../DiplomacyModel) · [PartyWageModel](../PartyWageModel)
- 上游枢纽：[GameModelsManager](../../core-extra/GameModelsManager) · [Game](../../core/Game)
- 下游 / 相关：[CampaignBehaviorBase](../CampaignBehaviorBase) · [DefaultPartyWageModel](../DefaultPartyWageModel) · [MBGameModel](../../core-extra/MBGameModel)
- 架构边界：[崩溃边界](../../../architecture/crash-boundary) · [文档契约](../../../architecture/doc-contract)
