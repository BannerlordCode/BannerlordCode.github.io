---
title: "GameModels"
description: "126 个玩法模型的强类型索引表：从 CampaignGameStarter 收集的模型列表里按类型解析出的属性集合，Campaign.Current.Models 就是它。替换任何一个模型都从这里生效。"
---

# GameModels

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class GameModels : GameModelsManager`
**Base:** `GameModelsManager`（TaleWorlds.Core）
**Source:** `bannerlord-1.5.3/TaleWorlds.CampaignSystem/GameModels.cs`

## 概述

`GameModels` 是战役的**规则查询表**：126 个 `public XxxModel XxxModel { get; private set; }` 属性，每个对应一种玩法规则（繁荣度、行军速度、说服、外交、AI 决策、装备估值……）。它继承 [GameModelsManager](../../core-extra/GameModelsManager)，后者只做一件事——从一个 `GameModel` 列表里按类型**从后往前**找出第一个匹配。`GameModels` 的构造函数再把这个查找结果逐个填进具体属性。mod 的所有平衡性修改，最终都以「替换掉这里某个属性指向的模型」的形式生效。

## 心智模型

```
SandBoxManager.Initialize(starter)
  └ starter.AddModel<SettlementProsperityModel>(new DefaultSettlementProsperityModel())
       ... 共 126 个
Campaign 初始化
  └ new GameModels(starter.Models)
       └ GetSpecificGameBehaviors()
            if (GameMode == Campaign || Tutorial)
                属性[i] = GetGameModel<T>();   // 末尾优先 → 后注册者赢
Campaign.Current.Models
  └ 你的 behavior 每次现取 → Campaign.Current.Models.SettlementProsperityModel.CalculateProsperityChange(...)
```

关键点：

- **模式门控**：`GetSpecificGameBehaviors()` 只在 `Campaign` 或 `Tutorial` 模式下填属性。`CampaignGameMode.None` 的战役里全部为 `null`。
- **末尾优先**：`GameModelsManager.GetGameModel<T>()` 从列表末尾向前扫描，所以**你在 `OnGameStart` 里注册覆盖时，必须排在原生注册之后**。
- **只读属性**：`private set`，运行时不能替换（只能通过 starter 在启动期换掉实例）。想在战斗中临时切换数值，要在模型内部加开关，而不是换属性。

**常见误用与坑**

1. **`Campaign.Current.Models.XxxModel` 为 null 就直接调用**：先确认 `GameMode != None`，并判空。空引用堆栈会指向某个 Default*Model 内部，看不出根因。
2. **在自己的行为里缓存 `Campaign.Current.Models.XxxModel`**：读档会重建 `GameModels`，旧引用失效。每次现取。
3. **用 `AddModel` 而不用 `AddModel<T>`**：`AddModel(GameModel)` 注册的裸模型没有 `BaseModel`；要「改一点、其余走原实现」必须用 `AddModel<T>(MBGameModel<T>)` 重载。
4. **注册顺序靠运气**：如果你的 `SubModuleLoadOrder` 小于原生模块，覆盖会被原生模型压在后面而静默失效。注册后立刻读一次属性验证。

## 成员与调用时机

**属性（126 个，按域抽样）**

- 时间与进程：`CampaignTimeModel`、`PlayerProgressionModel`、`EncounterGameMenuModel`、`EncounterModel`。
- 人物：`CharacterDevelopmentModel`、`CharacterStatsModel`、`AgeModel`、`ClanTierModel`、`FormationModel`、`EquipmentModel`、`InventoryModel`、`ItemProductionModel`。
- 队伍：`PartySpeedCalculatingModel`、`PartyHealingModel`、`PartyFoodBuyingModel`、`MobilePartyFoodConsumptionModel`、`PartyMoraleModel`、`PartyDesertionModel`、`PartyImpairmentModel`、`PartyTransitionModel`、`PartyTrainingModel`、`PartyTradeModel`、`CaravanModel`。
- 聚落与家族：`SettlementProsperityModel`、`SettlementPatrolModel`、`VillageModel`、`ClanGovernmentModel`、`ClanMilestoneModel`、`KingdomDecisionModel`、`RaidModel`、`HideoutModel`、`MinorFactionsModel`、`AllianceModel`、`DiplomacyModel`、`DefectionModel`。
- 战斗与经济：`CombatSimulationModel`、`CombatXpModel`、`GenericXpModel`、`SmithingModel`、`BarterModel`、`TradeAgreementModel`、`ValuationModel`、`RansomValueCalculationModel`。
- 信息与表现：`MapVisibilityModel`、`InformationRestrictionModel`、`ItemDiscardModel`。

**基类成员**

- `MBReadOnlyList<GameModel> GetGameModels()`（继承自 `GameModelsManager`）：拿全部已注册模型的列表，调试覆盖是否生效时用它。
- 构造函数 `GameModels(IEnumerable<GameModel> inputComponents)`：**public**，引擎内部调用。自己 new 出来的实例缺所有 `private set` 装配流程——不要手工构造。

## 真实示例

```csharp
// 覆盖繁荣度模型：继承 MBGameModel<T> 拿到 BaseModel，未覆盖的逻辑走原实现
public class MyProsperityModel : MBGameModel<SettlementProsperityModel>
{
    public override ExplainedNumber CalculateProsperityChange(Town fortification, bool includeDescriptions = false)
    {
        ExplainedNumber result = BaseModel != null
            ? BaseModel.CalculateProsperityChange(fortification, includeDescriptions)
            : new ExplainedNumber(0f, includeDescriptions, null);

        if (fortification != null && fortification.Settlement != null && fortification.Settlement.IsFortification)
            result.Add(0.5f, "MyMod_bonus", null);

        return result;
    }
}

// 注册（顺序关键：必须在 SandBoxManager 之后）
protected override void OnGameStart(Game game, IGameStarter gameStarterObject)
{
    base.OnGameStart(game, gameStarterObject);
    var starter = (CampaignGameStarter)gameStarterObject;
    starter.AddModel<SettlementProsperityModel>(new MyProsperityModel());

    // 验证覆盖生效
    SettlementProsperityModel active = Campaign.Current.Models.SettlementProsperityModel;
    Debug.Print("active model: " + active.GetType().Name);
}
```

## 风险与边界

- **存档无风险、加载顺序有风险**：模型本身不存档（每次启动重建），但**覆盖是否生效完全取决于模块加载顺序**。这是本类最实际的风险。
- **`private set` 不可运行时替换**：想做「玩家设置里切换难度模型」必须自己实现一个内部带开关的模型实例，而不是换属性。
- **`None` 模式下全 null**：自定义战役工厂传 `CampaignGameMode.None` 会让 126 个属性全为 null，症状是进游戏第一步 NRE。
- **跨域方向**：`GameModels` 在 CampaignSystem 层，被 [Campaign](../Campaign) 持有。你的模型实现可以引用 Core 与 CampaignSystem，但不要引用 ScreenSystem/Engine.GauntletUI。
- **`ExplainedNumber` 是返回值契约**：所有模型的返回值类型都是 `ExplainedNumber`（含数值 + 说明项列表），UI 直接显示说明项。自己实现时漏填说明会导致界面显示空白 tooltip。

## 依赖关系

- [GameModelsManager](../../core-extra/GameModelsManager) — 提供末尾优先的 `GetGameModel<T>()` 与 `GetGameModels()`
- [GameModel](../../core-extra/GameModel) — 全部 126 个模型属性的基类
- [MBGameModel](../../core-extra/MBGameModel) — 「包装式覆盖」的基类，提供 `BaseModel` 与 `Initialize`
- [DefaultSettlementProsperityModel](../../campaign-ext/DefaultSettlementProsperityModel) — 一个具体的官方模型实现，示范 `ExplainedNumber` 的组装方式