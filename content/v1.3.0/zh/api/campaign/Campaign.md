---
title: "Campaign"
description: "战役层单例根对象：英雄、氏族、王国、部队、聚落的注册表，管理器、模型、时间控制与自定义系统。"
---

# Campaign

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Campaign : GameType`
**Base:** `GameType`
**File:** `TaleWorlds.CampaignSystem/Campaign.cs`

## 概述

`Campaign` 是整个战役层的唯一活动实例，也就是那张战略地图上的全部世界状态。它派生自 `GameType`，因此引擎在一个战役游戏中只会创建一个，并通过 `MBSubModuleBase.OnCampaignStart` 交给各个模块。

它同时承担四种职责：

1. **注册表。** `AliveHeroes`、`Clans`、`Kingdoms`、`MobileParties`、`Settlements`、`Characters` 与 `Factions` 都是 `MBObjectManager` 之上的缓存视图，而不是另一份独立存储。
2. **管理器中枢。** `FactionManager`、`QuestManager`、`IssueManager`、`MapEventManager`、`SiegeEventManager`、`KingdomManager`、`BarterManager`、`CharacterRelationManager`、`Romance`、`PlayerCaptivity` 与 `TournamentManager` 都在这里被创建并注入。
3. **模型中枢。** `Campaign.Current.Models` 是一个 `GameModels` 实例，承载各模块在 `CampaignGameStarter.AddModel` 中注册的全部 `GameModel` 实现。
4. **时钟与控制。** `TimeControlMode`、`SetTimeSpeed`、`CampaignDt`、`IsDay` / `IsNight` 以及静态的 `CurrentTime`。

## 心智模型

`Campaign` 位于战役对象图的最顶端，所有其他战役对象都挂在它下面，通过静态的 `Campaign.Current` 访问：

```
MBSubModuleBase.OnGameStart(game, starter)
    starter.AddCampaignBehavior(new MyBehavior());   // 仅排队，尚未生效
MBSubModuleBase.OnCampaignStart(game, starterObject)
    此处 Campaign.Current 已可用
    CampaignBehaviorBase.RegisterEvents()           // 行为在此订阅事件
    Campaign.Current.GetCampaignBehavior<MyBehavior>()  // 首次合法查询时机
Campaign.Current.Models.<模型属性>                   // 模型只解析一次
CampaignEvents.DailyTickEvent / HourlyTickEvent
```

一个战役小时内典型的调用顺序：

`HourlyTickEvent` → 你的处理函数 → 读取 `Campaign.Current` 的各注册表 → 向某个 `GameModel` 询问数值 → 通过对象自身 API 修改状态 → 由官方 `CampaignEvents` 事件播报这次变化。

实际开发中最容易踩的坑：

- **战役之外 `Campaign.Current` 为 null。** 在主菜单、百科界面以及模块加载阶段它都是 `null`（加载新战役时可能短暂是上一个战役的实例）。在 `OnGameStart` / `OnSubModuleLoad` 里必须判空，因为它们早于 `OnCampaignStart` 执行。
- **在 `OnGameStart` 里行为还没生效。** `AddCampaignBehavior` 只是入队。真正的订阅发生在 `RegisterEvents()`，而查找其他行为要从 `OnCampaignStart` 或更晚开始。
- **`Models` 没有公开的 `GetModel<T>()`。** 那是社区扩展方法。引擎自带的取法是强类型属性（例如 `Campaign.Current.Models.PartySpeedCalculatingModel`），或者遍历 `GetGameModels()`。
- **这些集合是活动视图。** `Campaign.Current.Clans` 不是快照；把它缓存进 mod 的 `List<Clan>` 再加载另一个存档，读到的就是上一局的对象。
- **时间不是墙钟时间。** `CampaignDt` 与 `CurrentTime` 跟随 `TimeControlMode`，而玩家可以随时改变它。不要用战役时间的增量去推断真实时间行为。

## 依赖关系

| 方向 | 类型 | 关系 |
|-----------|------|--------------|
| 创建者 | `GameType` | 引擎为每个战役游戏实例化一个 `Campaign` |
| 入口 | `MBSubModuleBase.OnCampaignStart` | 第一个 `Campaign.Current` 合法的回调 |
| 行为宿主 | `CampaignBehaviorBase` | `GetCampaignBehavior<T>()`、`AddCampaignBehaviorManager` |
| 对象存储 | `MBObjectManager` | `BeforeRegisterTypes` / `OnRegisterTypes` |
| 模型 | `GameModels` | `Campaign.Current.Models` |
| 注册表 | [Clan](../Clan)、[Hero](../Hero)、[Kingdom](../Kingdom)、[MobileParty](../MobileParty)、[Settlement](../Settlement) | 以属性形式暴露的缓存列表 |
| 事件 | [CampaignEvents](../CampaignEvents) | 每小时 / 每日 tick 以及全部领域事件 |
| 存档 | 存档系统 | 管理器属性上的每一个 `[SaveableProperty]` |

## 主要成员

### 生命周期与构造

#### `public Campaign(CampaignGameMode gameMode)`

构造函数接收游戏模式，由引擎调用。mod 不要自己 `new Campaign()`，只读 `Campaign.Current`。

#### `public static Campaign Current { get; private set; }`

当前活动实例。`private set` 意味着只有引擎能写，所以单帧内缓存是安全的，但跨战役拆卸缓存就不安全。

#### `protected override void OnInitialize()`

引擎钩子，在构造函数之后调用一次，用于接上依赖对象注册的管理器。不要重写它，`GameType` 内部逻辑依赖基类行为。

#### `protected override void OnRegisterTypes(MBObjectManager objectManager)`

在模块 `OnGameStart` 阶段内部执行。mod 应通过 starter 在这里注册自己的可存档类型，而不是在这里读 `Campaign.Current` 的数据。

### 时间与节奏

#### `public float CampaignDt`

上一 tick 流逝的战役小时数。游戏暂停或有菜单打开时为 0。

#### `public CampaignTimeControlMode TimeControlMode { get; set; }`

当前速度设置（`Unpaused`、`Paused`、`FastForward`、`Evening`、`Night`、`UnstoppablePlay`）。赋值它就是任务或事件强制推进时间的手段。

#### `public void SetTimeSpeed(int speed)`

底层速度设置器，供地图 UI 与 `TimeControlMode` 切换使用。优先直接赋值 `TimeControlMode`。

#### `public static float CurrentTime`

战役开始以来累计的战役小时数。做排程有用，但它是 `float`，长战役会丢失亚小时精度。

#### `public bool IsDay` / `public bool IsNight`

由战役时钟推导的昼夜阶段标志。每 tick 轮询也足够便宜。

### 注册表

#### `public MBReadOnlyList<Hero> AliveHeroes`

全部存活英雄，由对象管理器刷新。等价写法是 `Hero.AllAliveHeroes`；两者都是视图而非拷贝。

#### `public MBReadOnlyList<MobileParty> MobileParties`

全部机动部队，包含守备队、村民与强盗。

#### `public MBReadOnlyList<Clan> Clans` / `public MBReadOnlyList<Kingdom> Kingdoms` / `public MBReadOnlyList<Settlement> Settlements`

预先切分好的列表。例如 `MobileParties` 被拆成 `CaravanParties`、`PatrolParties`、`VillagerParties`、`MilitiaParties`、`GarrisonParties`、`LordParties`、`BanditParties`、`CustomParties` 与 `PartiesWithoutPartyComponent`。

#### `public IEnumerable<IFaction> Factions`

把 `Clan` 与 `Kingdom` 混在一起的同一对象集合视图，方便需要统一处理两者的外交代码。

#### `public MobileParty MainParty`

玩家部队。在编辑器与菜单场景下即使 `Campaign.Current` 非空，它也可能是 `null`。

### 管理器与模型

#### `public GameModels Models`

所有已注册 `GameModel` 的容器。通过强类型属性读取具体模型，例如 `Campaign.Current.Models.PartySpeedCalculatingModel`。

#### `public FactionManager FactionManager`

战争 / 联盟查询与宣告。参见 [FactionManager](../FactionManager)。

#### `public MapEventManager MapEventManager` / `public SiegeEventManager SiegeEventManager`

地图战斗与攻城生命周期。两者是 `internal set`，由引擎创建，mod 无法赋值。

#### `public T GetCampaignBehavior<T>()` / `public IEnumerable<T> GetCampaignBehaviors<T>()`

单实例与多实例行为查找。两者在 `Campaign.Current` 为 null 时都会抛异常；没有注册任何内容时返回空。

#### `public void AddCampaignBehaviorManager(ICampaignBehaviorManager manager)`

注册一个管理器，战役行为管理器会对它调用 `RegisterEvents()`。适合宿主是大量相关处理函数的 mod。

#### `public void AddCustomManager<T>()` / `public T GetCustomManager<T>() where T : ICustomSystemManager`

为 mod 自有的单例预留插槽，生命周期与战役一致。`GetCustomManager<T>()` 在从未 `AddCustomManager` 时返回 `null`，使用前必须判空。

### 实体组件

#### `public TComponent AddEntityComponent<TComponent>() where TComponent : CampaignEntityComponent, new()`

创建并挂接一个战役级实体组件，返回新实例；组件列表只增不减。

#### `public TComponent GetEntityComponent<TComponent>()` / `public List<TComponent> GetComponents<TComponent>()`

查找辅助方法。`GetComponents<T>()` 每次调用都会分配一个新的 `List`，不要在大型循环里逐帧调用。

#### `public void RemoveEntityComponent<TComponent>()` / `public void RemoveEntityComponent<TComponent>(TComponent component)`

摘除并丢弃。若其他代码仍持有该组件引用，就会留下悬垂引用；更安全的做法是在战役结束时清空组件状态。

## 使用示例

### 示例 1：按正确顺序使用 `Campaign.Current` 的行为

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.MountAndBlade;

public sealed class WageWatchBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.DailyTickEvent.AddNonSerializedListener(this, OnDailyTick);
    }

    public override void SyncData(IDataStore dataStore)
    {
    }

    // DailyTickEvent 只在战役存活时触发，因此这里访问 Campaign.Current 是安全的。
    private void OnDailyTick()
    {
        Campaign campaign = Campaign.Current;
        if (campaign == null)
        {
            return;
        }

        foreach (MobileParty party in campaign.MobileParties)
        {
            if (party.IsMainParty)
            {
                InformationManager.DisplayMessage(
                    new InformationMessage($"玩家部队今日薪饷：{party.TotalWage}"));
                return;
            }
        }
    }
}
```

### 示例 2：在运行时解析模型

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.Core;

public static class SpeedProbe
{
    public static float LordCruiseSpeed()
    {
        Campaign campaign = Campaign.Current;
        if (campaign == null)
        {
            return 0f;
        }

        // 强类型访问器 —— 引擎并没有提供 GetModel<T>()。
        PartySpeedModel model = campaign.Models.PartySpeedCalculatingModel;
        ExplainedNumber speed = model.CalculateBaseSpeed(campaign.MainParty, true);
        return speed.ResultNumber;
    }

    // 等价的泛型扫描，用于模型类型只有运行时才知道的场景。
    public static T FindModel<T>() where T : GameModel
    {
        Campaign campaign = Campaign.Current;
        if (campaign == null)
        {
            return null;
        }

        return campaign.Models.GetGameModels().OfType<T>().FirstOrDefault();
    }
}
```

### 示例 3：mod 自定义的系统管理器

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Handlers;

public sealed class TradeLedger : ICustomSystemManager
{
    public int RecordedTrades { get; private set; }

    public void Record()
    {
        RecordedTrades++;
    }
}

public sealed class LedgerBootstrapper : MBSubModuleBase
{
    protected override void OnCampaignStart(Game game, object starterObject)
    {
        Campaign.Current.AddCustomManager<TradeLedger>();
    }

    public static TradeLedger Ledger => Campaign.Current.GetCustomManager<TradeLedger>();
}
```

### 示例 4：读取时间但不缓存过期的 `Campaign`

```csharp
using TaleWorlds.CampaignSystem;

public static bool IsNightHour()
{
    Campaign campaign = Campaign.Current;
    if (campaign == null)
    {
        return false;
    }

    // 优先使用标志位，而不是对 CurrentTime 做算术。
    return campaign.IsNight &&
           campaign.GetSimplifiedTimeControlMode() != CampaignTimeControlMode.Paused;
}
```

## 风险与崩溃边界

1. **战役之外为 null。** 主菜单与角色创建流程中 `Campaign.Current` 是 `null`。任何静态初始化器或模块加载钩子碰它都会抛异常。
2. **加载顺序。** `OnGameStart` 在 `Campaign.Current` 存在之前执行；`OnCampaignStart` 在之后。在 `OnGameStart` 里添加的行为，只有在 `RegisterEvents()` 跑过之后才可被查到。
3. **与存档耦合。** `FactionManager`、`QuestManager`、`IssueManager`、`BarterManager`、`MapStateData` 与 `PlayerEncounter` 都是 `[SaveableProperty]` 宿主。重新编号或重排它们会破坏已有存档，参见 [存档系统](../../../architecture/save-system)。
4. **跨域依赖。** `Models` 由各模块的 `AddModel` 填充。在模型自己的 `Initialize` 期间读取 `Campaign.Current` 会碰到一个半成品战役；把读取推迟到第一个 tick。
5. **ID 稳定性。** `UniqueGameId` 与 `PlatformID` 会进存档。不要把它们当作跨安装稳定的标识符，改用 `MBObjectManager` 索引或对象的 `StringId`。
6. **管理器归属。** `MapEventManager`、`SiegeEventManager` 与 `MapMarkerManager` 是 `internal set`；mod 给它们赋值无法对引擎程序集编译。
7. **热路径分配。** `GetComponents<T>()` 与 `GetCampaignBehaviors<T>()` 每次调用都新建集合。如果逐帧轮询，请在 `OnCampaignStart` 里缓存一次。

## 跨版本提示

- 上面的成员列表对应 1.3.0 的反编译接口面。后续 1.3.x / 1.4.x 构建增加了面向海战的属性（如 `PlayerRegionSwitchCostFromLandToSea`、海军速度估计），但顶层结构保持不变。
- `AddCustomManager<T>()` / `GetCustomManager<T>()` 与 `GetGameModels()` 在 1.3.x 全系未变。基于它们写的代码可以直接在 1.4.x 存档上加载。

## 参见

- [Clan](../Clan) — 主要的阵营 / 身份聚合体
- [Hero](../Hero) — 地图上的角色聚合体
- [MobileParty](../MobileParty) — 行军部队身份
- [Settlement](../Settlement) — 地图地点聚合体
- [Kingdom](../Kingdom) — 王国聚合体
- [FactionManager](../FactionManager) — 建立在注册表之上的外交查询
- [SettlementVisual](../../campaign-ext/SettlementVisual) — 聚落的地图场景对应物
- [CampaignEvents](../CampaignEvents) — 战役事件总线
- [MbEvent](../MbEvent) — 单参数事件实现
- [存档系统](../../../architecture/save-system) — Saveable 属性纪律
- [SDK 总览](../../../architecture/sdk-overview) — `MBSubModuleBase` 的位置
- [战役基础](../../../guide/campaign-basics) — 以任务为导向的上手指南