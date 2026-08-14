---
title: "Town"
description: "据点（城镇/城堡）的核心运行时对象：承载建筑、工坊、市场与每日繁荣/忠诚/安全/粮草结算，并持有总督与所属家族等治理状态。"
---
# Town

**Namespace:** TaleWorlds.CampaignSystem.Settlements  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public class Town : Fief`  
**Base:** `Fief` → `SettlementComponent` → `MBObjectBase`  
**File:** `TaleWorlds.CampaignSystem.Settlements/Town.cs`

## 一句话职责

一座城镇（或城堡）在战役世界里全部运行时状态的容器：它**每天自动结算**繁荣、忠诚、安全、粮草与民兵，并向 mod 暴露建筑、工坊、市场等可被读写的入口，以及总督、所属家族等治理关系。

## 心智模型

把 `Town` 当作**“某据点每天都会被推演一次的账本 + 资产清单”**，而不是一个能直接捏来用的普通对象：

- **你不会 `new Town()`。** 它的实例由据点 XML 经 `MBObjectManager` 反序列化（`Deserialize`）生成，随后作为 `Settlement.Town` 这条 **public 字段**长期挂在某个据点下。手动 `new` 出来的 `Town` 不会被注册进存档系统，也没有 parent `Settlement`，引用它只会得到坏档或空引用。
- **它是每日 tick 的结算单元。** `Campaign.DailyTickSettlement` 在每日据点结算时调用 `settlement.Town.DailyTick()`（见 `Town.cs:596`），内部用各 `SettlementXxxModel` 算出变化量并就地累加：`Loyalty += LoyaltyChange`、`Security += SecurityChange`、`Prosperity += ProsperityChange`、`base.Owner.Settlement.Militia += MilitiaChange`，同时推进粮草与城墙修复。累加完成后会触发 `DailyTickTownEvent`。
- **它在 Campaign（战役）层，不在 Mission（战斗）层。** 场景战斗里没有 `Town`；进入战斗后据点会生成 `Party`/`Agent`，但 `Town` 的状态只在地图上演进。
- **谁持有 / 谁被持有：** parent 是 `Settlement`（`Settlement.Town`）。上游依赖 `Settlement.Owner`（即拥有该据点的 `Clan`）、`Hero Governor`（总督）；下游驱动 `Building`（建筑）、`Workshop`（工坊）、`TownMarketData`（市场）、`Village`（绑定村庄 / 贸易绑定村庄）。
- `Town` 同时代表**城镇与城堡**：`IsTown` / `IsCastle` 由反序列化时的 `is_castle` 标志决定，二者互斥。

## 何时用 / 何时不要用

**用 `Town` 当：**

- 读状态：繁荣 `Prosperity`、忠诚 `Loyalty`、安全 `Security`、粮草 `FoodStocks`、民兵（经 `Settlement.Militia`）、贸易税 `TradeTaxAccumulated`、反叛态 `InRebelliousState`。
- 遍历资产：建筑 `Buildings` / `BuildingsInProgress`、工坊 `Workshops`、市场 `MarketData`、绑定村庄 `Villages` / `TradeBoundVillages`。
- 订阅 `DailyTickTownEvent` 做每日逻辑；判断据点类型（`IsTown` / `IsCastle`）与归属（`OwnerClan`）。

**不要用 `Town` 当：**

- **不要 `new Town()`**：创建走据点 XML + `MBObjectManager`，见上文。
- **不要把 `Prosperity` / `Loyalty` / `Security` 当成持久目标去直接赋值。** 每日 `DailyTick` 会用 `SettlementXxxModel` 重新算出变化量并**累加覆盖**，且直接写字段**不会广播任何变更事件**（源码里没有 `OnSettlementProsperityChanged` 之类的通知）。想长期抬升某项，应改“影响项”——建筑等级、总督特性、政策，或**覆写对应的 `SettlementXxxModel`**。
- **改归属不要只写 `town.OwnerClan = clan`。** 字段 setter 会更新家族关系（`ChangeClanInternal` → `OnFortificationAdded/Removed`），但完整的所有权转移应走 `ChangeOwnerOfSettlementAction.ApplyBy*`——它还会广播 `OnSettlementOwnerChangedEvent` 并处理其它连带状态。
- **不要缓存 `[CachedData]` 集合的引用跨存档。** `Villages` / `TradeBoundVillages` / `BesiegerCampPositions1/2` 都是会话期缓存，在 `OnLoad()` / `OnSessionStart()` 里被重建（见 `Town.cs:508`、`Town.cs:488`）。跨读档后你手里那份引用会指向已废弃的集合。
- 不要混淆 `Settlement.Town`（据点上的字段）与 `Town` 自身——`Town` 没有名为 `Town` 的属性。

## 依赖图（可点击）

- **上游（持有 / 创建 / 归属）**
  - [Settlement](../Settlement/) — parent；`Town` 作为 `Settlement.Town` 字段存在，多数状态（如 `Militia`、`FoodStocks` 的上限）经由 `Settlement`/`SettlementComponent` 暴露。
  - [Clan](../Clan/) — `OwnerClan`（当前拥有家族）、`LastCapturedBy`（上一次被谁攻占）。
  - [Hero](../Hero/) — `Governor`（总督，双向关联 `Hero.GovernorOf`）。
  - [MBObjectManager](../../campaign-ext/MBObjectManager/) — 据点 XML 反序列化时创建 `Town` 实例并接入存档。
- **下游（Town 持有 / 驱动）**
  - [Workshop](../Workshop/) — `Workshops`（`Workshop[]`，工坊数组）。
  - [Village](../Village/) — `Villages`（绑定村庄）、`TradeBoundVillages`（贸易绑定村庄）。
  - `Building` — `Buildings` / `BuildingsInProgress`（建筑列表；`Building` 类型本身见 Settlement 建筑系统，本页仅描述 `Town` 对它的持有方式）。
  - `TownMarketData` — `MarketData`（市场定价与价格因子）。
- **相关事件 / Action（位于 `CampaignEvents` / `TaleWorlds.CampaignSystem.Actions`）**
  - `DailyTickTownEvent` — 每个据点 `DailyTick` 结束后广播（订阅例见下文）。
  - `OnSettlementOwnerChangedEvent` — `OwnerClan` 经 Action 改变时广播。
  - `ChangeOwnerOfSettlementAction`、`ChangeOwnerOfWorkshopAction`、`ChangeProductionTypeOfWorkshopAction`、`InitializeWorkshopAction` — 合法的归属/工坊变更入口。
- **相关 Model（`Campaign.Current.Models.*`，统一入口见 [Campaign](../Campaign/)）**
  - `SettlementProsperityModel`、`SettlementLoyaltyModel`、`SettlementSecurityModel`、`SettlementFoodModel`、`SettlementMilitiaModel`、`BuildingConstructionModel`、`SettlementGarrisonModel`、`WorkshopModel`。

## 风险（可能导致崩溃 / 坏档）

1. **在错误的阶段改字段被每日 tick 覆盖。** `DailyTick` 在每日据点结算时被 `Campaign.DailyTickSettlement` 调用；若你在 `OnSessionStart`、读档回调或任意非每日时机直接写 `town.Loyalty = 100`，下一次 `DailyTick` 仍会 `Loyalty += LoyaltyChange`，且你这次写入**没有经过任何变更事件**。若想“固定”某个值，正确做法是改影响它的输入（建筑/总督/政策）或覆写对应 Model，而不是在 tick 之外硬写字段。
2. **缓存 `[CachedData]` 集合跨读档 → 悬空引用 / 坏档。** `Villages`、`TradeBoundVillages`、`BesiegerCampPositions1/2` 在 `OnLoad()`（`Town.cs:508`）与 `OnSessionStart()`（`Town.cs:488`）被重新 `new` 出来。把 `town.TradeBoundVillages`（一个 `MBReadOnlyList<Village>`）存进你自己的字段后，玩家存读档一次，你手里的列表就与当前世界脱节——遍历它会拿到陈旧甚至已释放的对象。每次访问都重新从 `town.Villages` / `town.TradeBoundVillages` 取，不要长期持有。
3. **直接赋值 `Prosperity`/`Loyalty`/`Security` 而非经由 Model/Event。** 源码中这些 setter 只做数值钳制（忠诚/安全钳到 0–100，繁荣下限 0），既不广播事件，也不参与 Model 的“解释项”累加。其它系统（UI、AI、任务判定）读取的是 Model 计算结果与每日 tick 后的真实值，直接写字段会让各方看到不一致的状态。
4. **错误设置 `Governor` 可能留下半吊子双向关联。** `Governor` setter 会同步 `hero.GovernorOf = this`；若你只改了 `Hero.GovernorOf` 而没设 `Town.Governor`（或反之），就会出现“城镇认为某人是总督、但该英雄的 `GovernorOf` 却指向别处”的不一致。`AfterLoad()` 会兜底把 `GovernorOf == null` 的总督清空（`Town.cs:554`），但正常运行期仍应成对维护。
5. **`BesiegerCampPositions1/2` 仅在会话期有效。** 这两个 `[CachedData]` 数组由 `OnSessionStart` 从地图场景取帧填充；在读档完成前或地图场景未就绪时访问，得到的是 `MatrixFrame.Identity` 占位，不应据此做逻辑判定。
6. **`new Town()` 不会进入存档。** 任何手动构造的 `Town` 都不在 `MBObjectManager` 与 `Campaign.Current.AllTowns` 的管辖内，既不会被 `DailyTick` 推进，也不会被序列化；引用它等于引用一个游离对象。

## 成员说明（按主题分组）

> 字段多为「可读写的状态」，但其“正确写入时机”几乎都集中在每日 tick 或经由 Action/Model。下面按用途标注副作用与调用时机。

### 治理与归属

#### `public Clan OwnerClan { get; set; }`
当前拥有该据点的家族。**副作用**：setter 在值变化时调用 `ChangeClanInternal`，内部 `RemoveOwnerClan()` / `SetNewOwnerClan()`，会触发 `Clan.OnFortificationAdded/Removed` 并刷新绑定村庄的可视。**调用时机**：绝大多数情况下不要直接赋值；用 `ChangeOwnerOfSettlementAction.ApplyByDefault(Hero, Settlement)` 等，它会同步广播 `OnSettlementOwnerChangedEvent`。

#### `public Hero Governor { get; set; }`
总督。**副作用**：setter 会**双向**维护 `hero.GovernorOf = this`（切换时先把旧总督的 `GovernorOf` 置空）。**调用时机**：设/撤总督时成对维护；每日 tick 会读取 `Governor` 的特性（`DefaultPerks.Roguery.WhiteLies` / `Scarface`）来随机加关系。

#### `public Clan LastCapturedBy { get; set; }`
上一次攻占据点的家族；由攻城/易主流程写入，用于战利品与声望结算的归属判定。

#### `public CultureObject Culture`
只读，等于 `Settlement.Culture`（据点文化）。用于兵种、名字、建筑风格等判定。

#### `public bool InRebelliousState`
是否处于叛乱态；影响每日防守方民兵是否参战（`DailyTick` 中的 `GetDefenderParties` 逻辑）。由叛乱判定行为写入。

### 繁荣 / 忠诚 / 安全 / 粮草

#### `public float Prosperity { get; set; }`
繁荣度；setter 钳到 `>= 0`。**注意**：直接写只改字段，不广播事件，且每日 tick 会用 `SettlementProsperityModel` 重新累加覆盖。读它取当前值即可；改它应走 Model 影响项。

#### `public float Loyalty { get; set; }`
忠诚度；setter 钳到 0–100。机制同 `Prosperity`。

#### `public float Security { get; set; }`
安全度；setter 钳到 0–100。机制同 `Prosperity`。

#### `public float FoodStocks`（继承自 `Fief`）
粮草库存；`DailyTick` 中按 `FoodChange` 累加，低于 0 时置 0 并标记 `RemainingFoodPercentage = -100`，高于 `FoodStocksUpperLimit()` 时截断。不要把粮草当持久值硬写——它每日被 `SettlementFoodModel` 重算。

#### `public int TradeTaxAccumulated { get; set; }`
累计贸易税；`OnInit` 时城镇初始化为 `1000 + RandomInt(1000)`，城堡为 0。由贸易行为累积，可被征税行为读取/清零。

#### `public IReadOnlyCollection<SellLog> SoldItems`
本城镇近期卖出记录（`SellLog`：类别 + 数量）。由市场卖出逻辑写入（`SetSoldItems`）；只读展示用。

### 每日变化量（只读，来自 Model）

这些属性**不是状态，而是“如果现在结算会发生什么”的预测值**，由对应 Model 实时计算，只读：

- `ProsperityChange` / `ProsperityChangeExplanation` — `SettlementProsperityModel.CalculateProsperityChange`。
- `LoyaltyChange` / `LoyaltyChangeExplanation` — `SettlementLoyaltyModel.CalculateLoyaltyChange`。
- `SecurityChange` / `SecurityChangeExplanation` — `SettlementSecurityModel.CalculateSecurityChange`。
- `FoodChange` / `FoodChangeWithoutMarketStocks` / `FoodChangeExplanation` — `SettlementFoodModel.CalculateTownFoodStocksChange`。
- `MilitiaChange` / `MilitiaChangeExplanation` — `SettlementMilitiaModel.CalculateMilitiaChange`（作用于 `Settlement.Militia`）。
- `Construction` / `ConstructionExplanation` — `BuildingConstructionModel.CalculateDailyConstructionPower`（每日建筑进度点）。

`*Explanation` 变体返回 `ExplainedNumber`，可在 UI/调试里展开每一项贡献来源，是排查“为什么繁荣在掉”的正确入口。

### 建筑

#### `public MBList<Building> Buildings`
该据点的全部建筑（含等级与进度）。**调用时机**：遍历/读取安全；修改建筑等级应经由 `Building` 自身与 `BuildingConstructionModel`，不要直接改内部字段。`AfterLoad` 会剔除 `BuildingType == null` 或 `!IsReady` 的条目（`Town.cs:526`）。

#### `public Queue<Building> BuildingsInProgress`
正在施工的建筑队列（队首即当前施工项）。

#### `public Building CurrentBuilding`
当前施工的建筑：队列非空取队首 `Peek()`，否则取 `CurrentDefaultBuilding`。

#### `public Building CurrentDefaultBuilding`
无在建项时的“默认施工建筑”（第一个 `IsCurrentlyDefault` 的建筑）；有在建项时返回 `null`。

#### `public int BoostBuildingProcess`
玩家用金币额外注入的施工加速点（累加进每日 `Construction`）。真实写入口是 `TaleWorlds.CampaignSystem.Helpers.BuildingHelper.BoostBuildingProcessWithGold(int gold, Town town)`，它会用 `GiveGoldAction` 在玩家与城镇间转账后再写该字段——不要直接赋值，否则金币账目会错。

#### `public float Construction`（见上“每日变化量”）

#### `public int GetWallLevel()`
返回城墙建筑当前等级（城镇取 `SettlementFortifications`，城堡取 `CastleFortifications`）；用于攻城伤害与外观。`DailyTick` 内部调用 `RepairWallsOfSettlementDaily` 用 `SettlementGarrisonModel` 修复墙段。

### 工坊

#### `[SaveableProperty] public Workshop[] Workshops { get; protected set; }`
该据点的工坊数组（长度由 `InitializeWorkshops` 决定）。**调用时机**：只读遍历安全；增删工坊走 `InitializeWorkshopAction` / `ChangeOwnerOfWorkshopAction` / `ChangeProductionTypeOfWorkshopAction`。`AfterLoad` 会对每个工坊调用 `Workshop.AfterLoad()`。

#### `public void InitializeWorkshops(int count)`
按 `count` 以 `"workshop_i"` 为 id 创建空工坊数组；由新游戏初始化流程调用，mod 一般不应在运行时直接调。

### 市场与价格

#### `public TownMarketData MarketData`
市场数据（价格、价格因子、库存更新回调）。`GetItemPrice(ItemObject, ...)` / `GetItemPrice(EquipmentElement, ...)` 与 `GetItemCategoryPriceIndex(ItemCategory)` 都转调它；买卖走这里而非自己算价。

#### `public int GetItemPrice(ItemObject item, MobileParty tradingParty = null, bool isSelling = false)`
委托 `MarketData.GetPrice`；是据点买卖定价唯一可靠入口。

#### `public float GetItemCategoryPriceIndex(ItemCategory itemCategory)`
某物品类别的价格指数（用于供需波动展示）。

### 村庄 / 补给 / 舰队

#### `[CachedData] public MBReadOnlyList<Village> Villages`
绑定到本据点的村庄（`Settlement.BoundVillages` 的缓存视图）。**[风险]** 见上文“缓存跨读档”段——每次访问重新取，勿长期持有。

#### `public MBReadOnlyList<Village> TradeBoundVillages`
贸易绑定村庄（`_tradeBoundVillagesCache`，`OnLoad` 重建）。机制与风险同上。

#### `public MBReadOnlyList<Ship> AvailableShips`
本据点船坞可用的舰船（`Settlement.Party.Ships`）。

#### `public bool HasTournament`
仅城镇且 `TournamentManager.GetTournamentGame(this) != null` 时为 `true`。

### 查询与静态入口

#### `public static MBReadOnlyList<Town> AllTowns` / `AllCastles`
`Campaign.Current.AllTowns` / `AllCastles` 的便捷转发；遍历全部城镇/城堡用这两个，而不是自己 filter。

#### `public static IEnumerable<Town> AllFiefs`
`AllTowns` 与 `AllCastles` 的合并枚举（城镇 + 城堡）。

#### `public override bool IsTown` / `public override bool IsCastle`
是否城镇 / 城堡（互斥）；读据点类型时优先用 `Settlement.IsTown` / `IsCastle`，它们内部就是转发到 `Town`。

#### `public bool IsUnderSiege`
转发 `Settlement.IsUnderSiege`。

#### `public MBReadOnlyList<Settlement> GetNeighborFortifications(MobileParty.NavigationType navigationType)`
经 `MapDistanceModel.GetNeighborsOfFortification` 取相邻据点，用于增援/行军判定。

#### `public int FoodStocksUpperLimit()`
粮草上限：`SettlementFoodModel` 基础值 + 城堡加成 + 建筑（`BuildingEffectEnum.FoodStock`）贡献。`DailyTick` 用它截断粮草。

## 最小真实示例

### 示例 1：遍历所有玩家城镇的工坊（只读查询，任何时机均可）

```csharp
// 真实获取路径：Settlement.All → Settlement.Town → Town.Workshops
foreach (Settlement settlement in Settlement.All)
{
    if (!settlement.IsTown)
    {
        continue;
    }

    Town town = settlement.Town;
    foreach (Workshop workshop in town.Workshops)
    {
        if (workshop.Owner == Hero.MainHero)
        {
            // 这是玩家拥有的工坊，可读 workshop.Capital / workshop.ProfitOfTheLastDay 等
            int capital = workshop.Capital;
        }
    }
}
```

> 这个模式直接来自 `WorkshopsCampaignBehavior.RemoveDeadOwnersFromWorkshops`（`WorkshopsCampaignBehavior.cs:170` 附近）：`Workshop[] workshops = item.Town.Workshops;` 后逐项遍历。

### 示例 2：在 CampaignBehavior 中订阅每日城镇结算（正确的“何时”）

```csharp
public class MyTownWatcherBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        // 真实事件：每个据点 DailyTick 之后广播
        CampaignEvents.DailyTickTownEvent.AddNonSerializedListener(this, OnDailyTickTown);
    }

    private void OnDailyTickTown(Town town)
    {
        if (town.OwnerClan != Clan.PlayerClan)
        {
            return;
        }

        // 读“每日变化量”而非硬写字段：
        float loyaltyChange = town.LoyaltyChange;
        float prosperityChange = town.ProsperityChange;

        // 若想长期抬升忠诚度，应改影响项（建筑/总督特性/政策），
        // 或覆写 SettlementLoyaltyModel，而不是 town.Loyalty += x。
        if (town.Loyalty < 25f)
        {
            // 触发你的告警/事件逻辑
        }
    }

    public override void SyncData(IDataStore dataStore)
    {
        // 没有需要持久化的字段
    }
}
```

### 示例 3：用合法入口给建筑注入施工加速（改状态的正确姿势）

```csharp
// 不要直接写 town.BoostBuildingProcess，而用 BuildingHelper 处理金币转账：
Town town = Settlement.CurrentSettlement.Town;
if (town != null)
{
    TaleWorlds.CampaignSystem.Helpers.BuildingHelper.BoostBuildingProcessWithGold(1000, town);
}

// 遍历建筑（只读）：
foreach (Building building in town.Buildings)
{
    if (building.BuildingType == DefaultBuildingTypes.SettlementMilitiaBarracks)
    {
        int level = building.CurrentLevel;
    }
}
```

### 示例 4：合法转移据点归属（而非直接写 OwnerClan）

```csharp
Settlement target = Settlement.Find("town_ESWE_1");
if (target != null && target.Town != null)
{
    // 会正确更新 Town.OwnerClan 并广播 OnSettlementOwnerChangedEvent：
    ChangeOwnerOfSettlementAction.ApplyByDefault(Hero.MainHero, target);
}
```

## 跨版本提示

- 本页 API 语义以 **1.4.5 权威源码**为准。对照 `bannerlord-1.3.15` 的 `Town.cs`，其**公开接口与 1.4.5 基本一致**（均为 `Town : Fief`，拥有 `Prosperity`/`Loyalty`/`Security`/`Buildings`/`Workshops`/`Governor`/`OwnerClan` 等成员，以及 `DailyTick`、`InitializeWorkshops`），本页放在 `v1.3.15` 文档桶下共用同一套 API 描述。
- `DailyTickTownEvent`、`ChangeOwnerOfSettlementAction`、`BuildingHelper.BoostBuildingProcessWithGold` 在 1.3.x 已存在，示例可直接复用。
- 若写跨版本 mod，注意 `Town` 的 `FoodStocks` 继承自 `Fief`（1.3.x 同样如此）；粮草上限/城墙修复逻辑走对应 `SettlementXxxModel`，覆写 Model 比硬写字段更稳。

## 参见

- ↑ 父级：[Settlement](../Settlement/) — `Town` 挂在 `Settlement.Town` 下，是其 parent 组件
- ↔ 同级 / 相关：[Clan](../Clan/)（OwnerClan）、[Hero](../Hero/)（Governor）、[Workshop](../Workshop/)（工坊）、[Village](../Village/)（绑定村庄）
- 相关行为与模型入口：[Campaign](../Campaign/) — `Campaign.Current.Models` 与各 `SettlementXxxModel`、`CampaignEvents`
- 创建与反序列化：[MBObjectManager](../../campaign-ext/MBObjectManager/) — `Town` 实例由据点 XML 经它生成
