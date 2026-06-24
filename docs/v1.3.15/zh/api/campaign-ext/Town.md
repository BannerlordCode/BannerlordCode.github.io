
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Town`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
- [🔀 跨版本对比 /versions/Town](/versions/Town)
<!-- END BREADCRUMB -->
# Town

**命名空间:** TaleWorlds.CampaignSystem.Settlements  
**模块:** TaleWorlds.CampaignSystem  
**类型:** class（继承自 

`Fief

`? 
**文件:** 

`bannerlord-1.3.15/TaleWorlds.CampaignSystem/Settlements/Town.cs

`

`Town

` 表示附属于一?

`Settlement

`（城镇或城堡）的市场、驻军与行政核心。每个城?城堡定居点都通过 

`Settlement.Town

` 暴露一?

`Town

` 实例，承载繁荣度、忠诚、治安、食物、建筑、工坊、市场数据与所有者家族等状态，并由战役模型每日结算其变化量?
## 概述

`Town

` 同时覆盖城镇（`IsTown

`）与城堡（`IsCastle

`）两种设防定居点。通过 

`Settlement.Town

` 获取实例，或用静?

`AllTowns

` / 

`AllCastles

` / 

`AllFiefs

` 枚举全部。繁荣度、忠诚、治安等数值由战役模型（`SettlementProsperityModel

` 等）计算每日变化量，并由引擎?

`DailyTick

` 中应用。直接赋值会触发内置钳制：繁荣度不低?0；忠?治安钳制?0?00。金币（

`Gold

`）只读，必须通过 

`ChangeGold

` 修改?
## 心智模型

先把 `Town` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

## 常量

\| 名称 \| 类型 \| ?\| 描述 \|
\|------\|------\|-------\|-------------\|
\| 

`InitialTownGold

` \| int \| 20000 \| 城镇初始化金币（

`OnInit

` 中通过 

`ChangeGold

` 设置?\|
\| 

`HighProsperityThreshold

` \| int \| 5000 \| 繁荣度“高”等级阈?\|
\| 

`MidProsperityThreshold

` \| int \| 2000 \| 繁荣度“中”等级阈?\|

&gt; 注：上述常量?

`private

`，仅供引擎内部使用；此处列出以便模组作者理解默认初始值与繁荣度分级?
## 静态属?
\| 名称 \| 类型 \| 描述 \|
\|------\|------\|-------------\|
\| 

`AllTowns

` \| 

`MBReadOnlyList&lt;Town&gt;

` \| 当前所有城?\|
\| 

`AllCastles

` \| 

`MBReadOnlyList&lt;Town&gt;

` \| 当前所有城?\|
\| 

`AllFiefs

` \| 

`IEnumerable&lt;Town&gt;

` \| 所有城镇与城堡的并集枚?\|

## 属?
### 经济与状?
\| 名称 \| 类型 \| 描述 \|
\|------\|------\|-------------\|
\| 

`Prosperity

` \| 

`float

` \| 繁荣度（get/set，赋值钳??0?\|
\| 

`ProsperityChange

` \| 

`float

` \| 每日繁荣度变化量（由 

`SettlementProsperityModel

` 计算?\|
\| 

`ProsperityChangeExplanation

` \| 

`ExplainedNumber

` \| 繁荣度变化量明细 \|
\| 

`Gold

` \| 

`int

` \| 城镇金币（继承自 

`SettlementComponent

`，仅 get；用 

`ChangeGold

` 修改?\|
\| 

`TradeTaxAccumulated

` \| 

`int

` \| 累计交易税（get/set?\|
\| 

`Loyalty

` \| 

`float

` \| 忠诚度（get/set，钳?0?00?\|
\| 

`LoyaltyChange

` \| 

`float

` \| 每日忠诚度变化量 \|
\| 

`LoyaltyChangeExplanation

` \| 

`ExplainedNumber

` \| 忠诚度变化量明细 \|
\| 

`Security

` \| 

`float

` \| 治安度（get/set，钳?0?00?\|
\| 

`SecurityChange

` \| 

`float

` \| 每日治安度变化量 \|
\| 

`SecurityChangeExplanation

` \| 

`ExplainedNumber

` \| 治安度变化量明细 \|
\| 

`FoodStocks

` \| 

`float

` \| 食物储备（继承自 

`Fief

`，get/set?\|
\| 

`FoodChange

` \| 

`float

` \| 每日食物变化量（含市场库存） \|
\| 

`FoodChangeWithoutMarketStocks

` \| 

`float

` \| 每日食物变化量（不含市场库存?\|
\| 

`FoodChangeExplanation

` \| 

`ExplainedNumber

` \| 食物变化量明?\|
\| 

`Militia

` \| 

`float

` \| 民兵强度（继承自 

`Fief

`，仅 get，取?

`Owner.Settlement.Militia

`；写值请?

`Settlement.Militia

`?\|
\| 

`MilitiaChange

` \| 

`float

` \| 每日民兵变化?\|
\| 

`MilitiaChangeExplanation

` \| 

`ExplainedNumber

` \| 民兵变化量明?\|
\| 

`Construction

` \| 

`float

` \| 每日建造力（由 

`BuildingConstructionModel

` 计算?\|
\| 

`ConstructionExplanation

` \| 

`ExplainedNumber

` \| 每日建造力明细 \|

### 归属与派?
\| 名称 \| 类型 \| 描述 \|
\|------\|------\|-------------\|
\| 

`OwnerClan

` \| 

`Clan

` \| 拥有该城?城堡的家族（get/set，变更会同步通知家族?\|
\| 

`Owner

` \| 

`PartyBase

` \| 所属定居点的拥有方队伍（继承自 

`SettlementComponent

`?\|
\| 

`MapFaction

` \| 

`IFaction

` \| 所属家族的地图派系（override；无拥有家族时为 null?\|
\| 

`Governor

` \| 

`Hero

` \| 总督（get/set，赋值会同步维护 

`Hero.GovernorOf

` 反向引用?\|
\| 

`LastCapturedBy

` \| 

`Clan

` \| 最后攻占该地的家族（get/set?\|
\| 

`Culture

` \| 

`CultureObject

` \| 文化（取?

`Owner.Settlement.Culture

`?\|

### 市场、建筑与工坊

\| 名称 \| 类型 \| 描述 \|
\|------\|------\|-------------\|
\| 

`MarketData

` \| 

`TownMarketData

` \| 市场数据（仅 get?\|
\| 

`Workshops

` \| 

`Workshop[]

` \| 工坊数组（`[SaveableProperty(1005)]

`?\|
\| 

`Buildings

` \| 

`MBList&lt;Building&gt;

` \| 已建成建筑（字段，`[SaveableField(1006)]

`?\|
\| 

`BuildingsInProgress

` \| 

`Queue&lt;Building&gt;

` \| 在建建筑队列（字段，

`[SaveableField(1007)]

`?\|
\| 

`CurrentBuilding

` \| 

`Building

` \| 当前进行中的建筑（无在建时返回当前默认建筑） \|
\| 

`CurrentDefaultBuilding

` \| 

`Building

` \| 当前默认建筑（有在建时返?null?\|
\| 

`BoostBuildingProcess

` \| 

`int

` \| 建造进度加成（字段，`[SaveableField(1008)]

`?\|
\| 

`TradeBoundVillages

` \| 

`MBReadOnlyList&lt;Village&gt;

` \| 贸易绑定村庄 \|
\| 

`Villages

` \| 

`MBReadOnlyList&lt;Village&gt;

` \| 绑定村庄（取?

`Settlement.BoundVillages

`，`[CachedData]

`?\|
\| 

`SoldItems

` \| 

`IReadOnlyCollection&lt;SellLog&gt;

` \| 售出物品日志 \|

### 设防与围?
\| 名称 \| 类型 \| 描述 \|
\|------\|------\|-------------\|
\| 

`IsTown

` \| 

`bool

` \| override；非城堡即为 true \|
\| 

`IsCastle

` \| 

`bool

` \| override；是否城?\|
\| 

`IsUnderSiege

` \| 

`bool

` \| 是否被围攻（取自 

`Settlement.IsUnderSiege

`?\|
\| 

`HasTournament

` \| 

`bool

` \| 是否有进行中的锦标赛（仅城镇?\|
\| 

`InRebelliousState

` \| 

`bool

` \| 是否处于叛乱状态（字段，`[SaveableField(1011)]

`?\|
\| 

`GarrisonParty

` \| 

`MobileParty

` \| 驻军队伍（继承自 

`Fief

`，仅 get；无驻军组件时为 null?\|
\| 

`AvailableShips

` \| 

`MBReadOnlyList&lt;Ship&gt;

` \| 可用船只（取?

`Settlement.Party.Ships

`?\|
\| 

`BesiegerCampPositions1

` / 

`BesiegerCampPositions2

` \| 

`MatrixFrame[]

` \| 围攻营地位置（字段，

`[CachedData]

`，会话开始时填充?\|
\| 

`GarrisonAutoRecruitmentIsEnabled

` \| 

`bool

` \| 驻军自动招募开关（字段，默?true，`[SaveableField(1016)]

`?\|

## 方法

### ChangeGold

`

`

`csharp
public void ChangeGold(int changeAmount)
`

`

`

调整城镇金币（继承自 

`SettlementComponent

`）。将 

`Gold

` 增加 

`changeAmount

`，结果钳制不低于 0。这是修?

`Gold

` 的正确方式（

`Gold

` 本身仅公开 get）?
**参数:**
- 

`changeAmount

` - 金币增减量（可为负）

### GetItemPrice

`

`

`csharp
public override int GetItemPrice(ItemObject item, MobileParty tradingParty = null, bool isSelling = false)
public override int GetItemPrice(EquipmentElement itemRosterElement, MobileParty tradingParty = null, bool isSelling = false)
`

`

`

通过 

`MarketData.GetPrice

` 计算物品在该城镇市场的价格?
**参数:**
- 

`item

` / 

`itemRosterElement

` - 待估价物?- 

`tradingParty

` - 交易方队伍（可空?- 

`isSelling

` - 是否为卖?
**返回:** 物品价格（int）?
### GetItemCategoryPriceIndex

`

`

`csharp
public float GetItemCategoryPriceIndex(ItemCategory itemCategory)
`

`

`

返回指定物品类别在该城镇市场的价格因子（取自 

`MarketData.GetPriceFactor

`）?
### GetWallLevel

`

`

`csharp
public int GetWallLevel()
`

`

`

返回城墙等级：城镇取 

`SettlementFortifications

` 建筑、城堡取 

`CastleFortifications

` 建筑?

`CurrentLevel

`；未找到返回 0?
### GetProsperityLevel

`

`

`csharp
public override SettlementComponent.ProsperityLevel GetProsperityLevel()
`

`

`

按繁荣度返回等级：≥ 5000 ?

`High

`，≥ 2000 ?

`Mid

`，否?

`Low

`?
### FoodStocksUpperLimit

`

`

`csharp
public int FoodStocksUpperLimit()
`

`

`

返回食物储备上限。基础值取 

`SettlementFoodModel.FoodStocksUpperLimit

`，城堡额外加?

`CastleFoodStockUpperLimitBonus

`，再叠加建筑的食物储备效果?
**返回:** 上限值（int）?
### GetNeighborFortifications

`

`

`csharp
public MBReadOnlyList&lt;Settlement&gt; GetNeighborFortifications(MobileParty.NavigationType navigationType)
`

`

`

返回按指定导航类型可达的相邻设防定居点（取自 

`MapDistanceModel.GetNeighborsOfFortification

`）?
**参数:**
- 

`navigationType

` - 导航类型（步?海上等）

**返回:** 相邻设防定居点列表?
### InitializeWorkshops

`

`

`csharp
public void InitializeWorkshops(int count)
`

`

`

按数量初始化工坊数组（每个工坊以 

`"workshop_" + i

` 为标识）。`count ?0

` 时不创建?
### AddEffectOfBuildings

`

`

`csharp
public void AddEffectOfBuildings(BuildingEffectEnum buildingEffect, ref ExplainedNumber result)
`

`

`

将该城镇所有已建成建筑对指定效果类型的贡献累加?

`result

`?
### GetDefenderParties / GetNextDefenderParty

`

`

`csharp
public IEnumerable&lt;PartyBase&gt; GetDefenderParties(MapEvent.BattleTypes battleType)
public PartyBase GetNextDefenderParty(ref int partyIndex, MapEvent.BattleTypes battleType)
`

`

`

枚举 / 逐个获取守方队伍（定居点队伍 + 与攻方处于战争且活跃的驻军、民兵等，按战斗类型过滤）?
### SetSoldItems

`

`

`csharp
public void SetSoldItems(IEnumerable&lt;Town.SellLog&gt; logList)
`

`

`

替换售出物品日志?
### 其他

\| 方法 \| 描述 \|
\|------\|------\|
\| 

`ToString()

` \| override；返?

`Name

` 文本 \|
\| 

`OnInit()

` \| override；初始化忠诚/治安/交易?初始金币?0000?\|
\| 

`OnSessionStart()

` \| override；从地图场景读取围攻营地位置 \|
\| 

`Deserialize(MBObjectManager, XmlNode)

` \| override；从 XML 读取 

`is_castle

`、繁荣度、建筑等 \|
\| 

`DailyTick()

` \| internal；每日结算忠?治安/食物/繁荣/民兵与城墙修复（引擎调用?\|

## 嵌套类型

### Town.SellLog

`

`

`csharp
public struct SellLog
{
    [SaveableProperty(200)] public ItemCategory Category { get; }
    [SaveableProperty(201)] public int Number { get; }
    public SellLog(ItemCategory category, int count);
}
`

`

`

售出物品日志条目：物品类别与数量?
## 使用示例

`

`

`csharp
// 通过定居点获?Town
Settlement settlement = Settlement.Find("town_Epiphany");
Town town = settlement?.Town;
if (town == null) return;

// 读取与修改繁荣度（赋值自动钳??0?float prosperity = town.Prosperity;
town.Prosperity += 100f;

// 读取/修改金币（Gold ?get，必须用 ChangeGold?int gold = town.Gold;
town.ChangeGold(5000);   // 增加 5000 金币
town.ChangeGold(-1000);  // 扣减，结果不低于 0

// 忠诚/治安钳制?0?00
town.Loyalty = 80f;
town.Security = 75f;

// 读取每日变化量与明细
float prosperityChange = town.ProsperityChange;
ExplainedNumber detail = town.ProsperityChangeExplanation;

// 市场价格与价格因?int price = town.GetItemPrice(itemObject, tradingParty: null, isSelling: false);
float factor = town.GetItemCategoryPriceIndex(itemCategory);

// 拥有家族与总督
Clan owner = town.OwnerClan;
Hero governor = town.Governor;
town.Governor = newGovernor;  // 自动维护 Hero.GovernorOf

// 驻军与民兵（民兵写值用 Settlement.Militia?MobileParty garrison = town.GarrisonParty;
town.Settlement.Militia += 5f;

// 枚举全部城镇
foreach (Town t in Town.AllTowns)
{
    Debug.Print($"{t.Name}: 繁荣 {t.Prosperity:F0}, 金币 {t.Gold}");
}
`

`

`

## 参见

- [Settlement](./Settlement.md)
- [Workshop](./Workshop.md)
- [Campaign](./Campaign.md)
- [PartyTemplate](./PartyTemplate.md)
