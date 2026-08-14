---
title: "MapVisibilityModel"
description: "战役地图上的视野与侦察模型：决定每个部队白天/夜晚能看到多远、主队能看到其它部队的比例，以及隐匿点（藏身处）的可见距离。"
---
# MapVisibilityModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public abstract class MapVisibilityModel : MBGameModel<MapVisibilityModel>`  
**Base:** `MBGameModel<MapVisibilityModel>`  
**File:** `TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/MapVisibilityModel.cs`

## 概述

`MapVisibilityModel` 决定 Bannerlord 战役地图上的**战争迷雾与侦察规则**：每张地图单位的“可见范围”是多少、主队在多大概率/比例下能发现其它部队、以及藏身处（Hideout）在多远就会被玩家侦察到。它是一组纯计算规则，本身不持有任何世界状态——所有输入都来自传入的 `MobileParty` / `IMapPoint` 以及 `Campaign.Current` 的当前环境（昼夜、地形、侦察兵技能与特性）。

绝大多数 mod 不会直接替换它，而是**读取**它的结果来画出/判断可见性；当你想系统性地改大整个地图的可见半径、削弱特定兵种的侦察、或让藏身处更难被发现时，才需要继承 `DefaultMapVisibilityModel` 覆盖对应方法。

## 心智模型

把 `MapVisibilityModel` 当作**“战役地图的能见度裁判”**，而不是一个可变的实体：

- **归谁所有**：它在游戏启动时由 `SandBoxManager` 通过 `gameStarter.AddModel(new DefaultMapVisibilityModel())` 注册进 `Campaign.Current.Models`，之后全程由 `Campaign` 持有，是 **Campaign 层**的只读规则组件。
- **谁调用它**：地图附近的定位（找周围部队/据点）、`MobileParty.SeeingRange` 属性、藏身处的侦察判定、以及主队对其它部队的“相对可见比例”都会走到这里。
- **它不做什么**：它**不**缓存可见性、**不**直接修改迷雾贴图、**不**触发任何事件。迷雾的实际渲染与发现逻辑由地图相关 Behavior 调用本模型的结果驱动。
- **怎么拿到它**：永远通过 `Campaign.Current.Models.MapVisibilityModel`（强类型属性）或 `Campaign.Current.GetGameModel<MapVisibilityModel>()` 取，不要自己 `new` 一个实例——你拿到的必须是已注册进 `Models` 的那一个。
- **不要重造轮子**：侦察距离、昼夜衰减、侦察兵特性加成这套数学已经在 `DefaultMapVisibilityModel` 里算好了。要改规则就覆盖方法并复用基类结果，不要在外面重新推一遍，否则会与迷雾/发现系统脱节。

## 如何获取 MapVisibilityModel

```csharp
// 强类型属性（最常用）
MapVisibilityModel visibility = Campaign.Current.Models.MapVisibilityModel;

// 泛型取模（等价写法，适合在通用 Model 工具方法里用）
MapVisibilityModel visibility2 = Campaign.Current.GetGameModel<MapVisibilityModel>();
```

## 成员说明

下列 5 个成员是 v1.4.5 的真实抽象接口。所有方法都没有副作用——它们只依据传入对象与当前 `Campaign.Current` 环境计算并返回数值，不会修改任何世界状态。

### 视野上限与基础范围

#### `public abstract float MaximumSeeingRange()`
整个地图的**全局可见半径上限**。`DefaultMapVisibilityModel` 固定返回 `60f`，`GetPartySpottingRange` 的结果会被 `LimitMax` 钳制到此值。  
**用途**：决定“没有任何部队能比这看得更远”。`CampaignTickCacheDataStore` 在按位置批量搜索附近部队/据点时，用 `MaximumSeeingRange() + 5f` 作为搜索半径。  
**何时调用**：需要全局上限时读取（例如自定义发现逻辑里给搜索范围兜底）。

```csharp
// 在玩家当前位置附近 65 格内搜索其它部队
LocatableSearchData<MobileParty> data =
    MobileParty.StartFindingLocatablesAroundPosition(
        MobileParty.MainParty.Position2D,
        Campaign.Current.Models.MapVisibilityModel.MaximumSeeingRange() + 5f);
```

#### `public abstract float GetPartySeeingRangeBase(MobileParty party)`
单个部队的**基础侦察范围**（尚未叠加侦察兵技能与特性）。`DefaultMapVisibilityModel` 中白天 `12f`、夜晚 `6f`。  
**用途**：`GetPartySpottingRange` 以它作为 `ExplainedNumber` 的初值，再叠加各项加成。  
**何时调用**：通常不要直接调它——需要“包含全部加成的可见范围”时用 `GetPartySpottingRange`；只有当你想排除技能/特性、只看昼夜基础值时才用它。

```csharp
float baseRange = Campaign.Current.Models.MapVisibilityModel.GetPartySeeingRangeBase(MobileParty.MainParty);
// baseRange == 12f（白天）/ 6f（夜晚）
```

### 综合侦察范围

#### `public abstract ExplainedNumber GetPartySpottingRange(MobileParty party, bool includeDescriptions = false)`
计算某部队**最终可见范围**，在 `GetPartySeeingRangeBase` 基础上叠加：追踪技能（TrackingSpottingDistance）、鹰眼特性（EagleEye）、侦察兵的 WaterDiviner / NightRunner 或 DayTraveler / VantagePoint / MountedScouts 等特性，以及巴旦尼亚森林文化特性；最后用 `LimitMax(MaximumSeeingRange())` 封顶。返回的 `ExplainedNumber` 可用 `.ResultNumber` 取数值，用 `.GetDescription()` 取加成明细。  
**副作用**：无（不修改任何状态）。  
**何时调用**：每当需要展示或判定某部队的可见半径时——`MobileParty.SeeingRange` 与 `SeeingRangeExplanation` 内部就是调它。

```csharp
ExplainedNumber range =
    Campaign.Current.Models.MapVisibilityModel.GetPartySpottingRange(MobileParty.MainParty, includeDescriptions: false);
float seeingRange = range.ResultNumber; // 例如 18.5f
```

### 主队相对可见比例

#### `public abstract float GetPartySpottingRatioForMainPartySeeingRange(MobileParty party)`
站在**主队视角**看，某个其它部队被“看清”的比例系数（`0~1`）。森林地形会降低该比例（可被 KeenSight 特性缓解），部队/军团规模越大越容易被发现。  
**用途**：`PartyBase` 在判定主队是否能发现某部队时，用这个比例乘以主队可见范围。  
**何时调用**：仅在实现自定义“主队能否发现某部队”的判定逻辑时需要；常规开发读 `MobileParty.SeeingRange` 即可。

```csharp
float ratio =
    Campaign.Current.Models.MapVisibilityModel.GetPartySpottingRatioForMainPartySeeingRange(enemyParty);
bool canSpot = (MobileParty.MainParty.SeeingRange * ratio) >= distanceToEnemy;
```

### 藏身处侦察距离

#### `public abstract float GetHideoutSpottingDistance()`
玩家部队能**侦察到藏身处**的距离。默认等于 `MobileParty.MainParty.SeeingRange * 1.2f`，若主队拥有 RumourNetwork 特性则再乘 `(1 + 该特性副加成)`。  
**用途**：`HideoutCampaignBehavior` 据此判定玩家是否发现了地图上的藏身处据点。  
**何时调用**：实现与藏身处发现相关的自定义逻辑时读取；不要自己缓存结果，它随主队 `SeeingRange` 实时变化。

```csharp
float hideoutDistance =
    Campaign.Current.Models.MapVisibilityModel.GetHideoutSpottingDistance();
// 配合地图定位，在玩家周围 hideoutDistance 范围内寻找未被发现的藏身处
```

## 最小真实示例

### 示例 1：读取主队可见范围并搜索附近敌人

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;

MapVisibilityModel model = Campaign.Current.Models.MapVisibilityModel;

// 主队包含全部加成的最终可见半径
float mainSeeingRange = MobileParty.MainParty.SeeingRange;

// 用全局上限兜底，搜索主队周围 65 格内的其它部队
LocatableSearchData<MobileParty> nearby =
    MobileParty.StartFindingLocatablesAroundPosition(
        MobileParty.MainParty.Position2D,
        model.MaximumSeeingRange() + 5f);

foreach (MobileParty other in MobileParty.GetLocatableList(nearby))
{
    if (other.MapFaction.IsAtWarWith(Hero.MainHero.MapFaction))
    {
        // 结合主队相对可见比例判断是否“看清”了这支敌军
        float ratio = model.GetPartySpottingRatioForMainPartySeeingRange(other);
        if (mainSeeingRange * ratio >= MobileParty.MainParty.Position2D.Distance(other.Position2D))
        {
            // 玩家能在此距离发现该敌军
        }
    }
}
MobileParty.StopFindingLocatables(nearby);
```

### 示例 2：继承 DefaultMapVisibilityModel 扩大整体可见半径

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.Party;

public class MyBiggerVisibilityModel : DefaultMapVisibilityModel
{
    // 把全局上限从 60 提到 120，让整张地图看得更远
    public override float MaximumSeeingRange() => 120f;

    // 保留基类对昼夜、技能、特性的全部计算，仅放大基础值
    public override float GetPartySeeingRangeBase(MobileParty party)
    {
        return base.GetPartySeeingRangeBase(party) * 1.5f;
    }
}

// 在 SubModule 的 OnGameStarter 中注册（替换默认实现）：
// gameStarter.AddModel(new MyBiggerVisibilityModel());
```

## 依赖图

- **上游（创建 / 持有）**：[Campaign](../../campaign/Campaign/) 在启动时通过 `SandBoxManager` 把 [DefaultMapVisibilityModel](../DefaultMapVisibilityModel/) 注册进 `Models`；属性声明在 [GameModels](../GameModels/)。
- **下游（消费结果）**：[MobileParty](../../campaign/MobileParty/) 的 `SeeingRange` / `SeeingRangeExplanation` 直接调 `GetPartySpottingRange`；[Settlement](../../campaign/Settlement/) 与部队的地图定位用 `MaximumSeeingRange` 作为搜索半径；藏身处发现判定走 `GetHideoutSpottingDistance`。
- **相关模型 / 接口**：地图可见性还受天气影响，参见 [MapWeatherModel](../MapWeatherModel/)；可见范围外的追踪标记由 [MapTrackModel](../MapTrackModel/) 管理；可被侦察的实体实现 [ISpottable](../ISpottable/)；侦察相关特性与技能汇总在 [Scouting](../Scouting/)；部队间距离与发现半径的其它计算见 [MapDistanceModel](../MapDistanceModel/)。
- **规则约束**：本页写作与验收遵循 [文档契约](../../../architecture/doc-contract/)。

## 风险

- **未注册即访问会拿到 null**：`Campaign.Current.Models.MapVisibilityModel` 只有在游戏启动、模型被 `AddModel` 注册后才非空。在 `OnGameStarter` 之前或地图未加载时读取会得到 `null`，务必判空或确保处于战役运行时。
- **结果随时间与环境变化，勿缓存**：所有方法都依赖 `Campaign.Current.IsNight`、地形、侦察兵当前特性与 `MobileParty.SeeingRange`。把 `GetPartySpottingRange(...).ResultNumber` 存成字段会拿到过期值；每次需要都重新调用。
- **覆盖实现必须保持上限与累加结构**：`GetPartySpottingRange` 默认用 `LimitMax(MaximumSeeingRange())` 封顶。自定义实现若漏掉这一步，可见范围可能突破全局上限，破坏平衡甚至让迷雾逻辑异常。建议复用 `base.` 实现再调整初值。
- **不要在任务（Mission）层调用**：这是 Campaign 层模型，战斗场景中 `Campaign.Current` 仍在但地图环境语义不同；侦察/可见性相关计算应放在 Campaign 层 Behavior 或地图 UI 中。
- **替换默认实现要整体替换**：只覆盖个别方法而忘记 `AddModel` 注册，或注册了两次，会导致实际生效的是另一份实现，调试时极易困惑。

## 跨版本提示

- **v1.3.0 / v1.3.15**：本模型接口为 `GetPartySpottingRangeBase(MobileParty)`、`GetPartySpottingRange(MobileParty, bool)`、`GetPartyRelativeInspectionRange(IMapPoint)`、`GetPartySpottingDifficulty(MobileParty, MobileParty)`、`GetHideoutSpottingDistance()`——**没有** `MaximumSeeingRange()`，也没有 `GetPartySpottingRatioForMainPartySeeingRange`。基础方法名为 `GetPartySpottingRangeBase`（到 v1.4.5 改名为 `GetPartySeeingRangeBase`）。
- **v1.4.5（本页权威语义）**：移除了 `GetPartyRelativeInspectionRange` 与 `GetPartySpottingDifficulty`，新增 `MaximumSeeingRange()` 作为全局上限、`GetPartySpottingRatioForMainPartySeeingRange(MobileParty)` 表达主队相对可见比例，并把基础方法更名为 `GetPartySeeingRangeBase`。写跨版本 mod 时请用 `#if` 或运行时反射区分这两者。

## 导航块

- ↑ 父级：[战役扩展 API 索引](../)
- ↔ 同级：[DefaultMapVisibilityModel](../DefaultMapVisibilityModel/) · [GameModels](../GameModels/) · [MapDistanceModel](../MapDistanceModel/) · [MapTrackModel](../MapTrackModel/) · [MapWeatherModel](../MapWeatherModel/) · [ISpottable](../ISpottable/) · [Scouting](../Scouting/)
- 相关类：[Campaign](../../campaign/Campaign/) · [MobileParty](../../campaign/MobileParty/) · [Settlement](../../campaign/Settlement/)
