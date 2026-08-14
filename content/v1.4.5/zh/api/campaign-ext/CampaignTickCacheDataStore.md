---
title: "CampaignTickCacheDataStore"
description: "Campaign 私有持有的 MobileParty 每帧移动缓存：由战役内部初始化、分类、消费和重建，mod 不应直接创建、查询或写入。"
---
# CampaignTickCacheDataStore

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class CampaignTickCacheDataStore`
**Base:** `System.Object`
**File:** `TaleWorlds.CampaignSystem/CampaignTickCacheDataStore.cs`

## 一句话职责

它把战役地图中的 `MobileParty` 按“移动、静止、过渡、军团首领”等每帧类别暂存起来，让引擎可以并行推进部队移动并在帧末集中处理地图定位和离开据点；它是内部执行缓存，不是给 mod 使用的状态仓库。

## 心智模型

把它看成 `Campaign` 的**一次性帧工作区**，而不是一个带查询 API 的业务对象：

- **谁持有：** `Campaign` 有一个私有 `_tickData`。构造 `Campaign` 时由游戏通过 `internal CampaignTickCacheDataStore()` 创建，mod 不能 `new` 它，也没有 `Campaign.TickData` 之类的公开属性。
- **缓存什么：** 每个槽位保存 `MobileParty` 和一份 `MobileParty.CachedPartyVariables`。这些值用于读取本帧移动数据、目标数据、是否移动/过渡/军团首领等分类信息；它不是 `CampaignTime` 的历史记录，也不保存一份可供 mod 查询的“上一帧世界快照”。
- **在哪一层：** 它处于 Campaign 地图的内部移动管线，低于 [CampaignEvents](../CampaignEvents)、[CampaignBehaviorBase](../CampaignBehaviorBase) 和各类 Model 的 mod 扩展入口。它会调用 `MobileParty` 的内部 tick 方法以及 [Campaign](../../campaign/) 的 `MobilePartyLocator`，并使用 `LeaveSettlementAction` 完成离开据点的世界变更。
- **如何被消费：** `RealTick(dt, realDt)` 在每个战役实时帧先校验容量，再初始化缓存、在帧起点缓存目标变量、按缓存分类，最后并行推进各类部队，并在帧末更新定位器和导航过渡。`Tick()` 则处理离开据点的列表、排序后调用行动。
- **如何失效：** “失效”不是某个公开的 `Invalidate()` 调用。每帧 `ValidateMobilePartyTickDataCache` 会把计数器重置为 `-1`；若部队数量触及容量上限则把所有工作数组扩容重建。下一次 `RealTick` 会重新从当前 `MobileParty` 初始化槽位并重新分类，因此 mod 不应尝试手动清空或改写槽位。

页面生成器把私有比较器的 `Compare(MobileParty, MobileParty)` 错误地显示成了类方法。源码中 `MobilePartyComparer` 是私有嵌套类；这个 `Compare` 不是 `CampaignTickCacheDataStore` 的 mod 可见 API。

## 生命周期与调用顺序

### 新战役与首帧

`Campaign` 构造函数同时创建 `CampaignPeriodicEventManager` 与 `_tickData`。新战役首次进入实时循环时，`Campaign.RealTick` 在 `GameStarted` 从 false 变为 true 的分支调用 `InitializeDataCache()`，按 `Campaign.Current.MobileParties.Count` 分配初始数组；随后同一实时帧调用 `RealTick(_dt, realDt)`。

因此，战役对象刚被构造、部队集合尚未建立时，缓存还没有可用的槽位。不要在 `CampaignGameStarter` 仍在组装世界或对象列表尚未完成时反射访问它。

### 每个实时帧

`Campaign.RealTick` 先推进地图时间并执行 Campaign entity 的 `OnTick`，然后把 `_dt` 与 `realDt` 交给缓存。`CampaignTickCacheDataStore.RealTick` 的实际阶段是：

1. `ValidateMobilePartyTickDataCache(Campaign.Current.MobileParties.Count)`：必要时按当前容量的两倍重新分配数组，并把本帧计数器、网格变更计数、过渡计数和离开据点计数重置为 `-1`。
2. 对所有当前 `MobileParty` 调用 `InitializeCachedPartyVariables`，把 party 与 `CachedPartyVariables` 写入同一索引。
3. 调用 `CacheTargetPartyVariablesAtFrameStart`，冻结本帧开始时的目标相关数据，避免并行移动过程中各线程看到不同的目标状态。
4. 按 `IsActive`、`IsMoving`、`IsArmyLeader`、`IsTransitionInProgress` 和 `IsAttachedArmyMember` 把索引分到 moving、stationary、transitioning 和 army-leader 队列。
5. 通过 `TWParallel.For` 处理各队列。移动 party 会调用 `FillCurrentTickMoveDataForMovingMobileParty`、`TryToMoveThePartyWithCurrentTickMoveData`；静止 party 会调用 `TickForStationaryMobileParty`；过渡 party 会调用 `CommonTransitioningPartyTick`。
6. 更新主队附近 party/settlement 的可见性；按 party ID 排序网格变化列表并调用 `Campaign.MobilePartyLocator.UpdateLocator`，再结束导航过渡。

`Campaign.Tick()` 与上面的实时帧不同：它递增 `CurrentTickCount`，先让 [CampaignPeriodicEventManager](../CampaignPeriodicEventManager) 根据 `CampaignTime.DeltaTime` 分发事件和周期 ticker；之后调用 `_tickData.Tick()`，并由缓存集中处理离开据点的 `MobileParty`。不要把 `HourlyTickEvent`、`DailyTickEvent` 的回调顺序理解成“缓存已经为 mod 暴露了一个可查询快照”。

### 读档与重建

读档的 `Campaign.OnGameLoaded` 会先新建一个 `CampaignTickCacheDataStore`，随后执行对象管理器的 `PreAfterLoad`/`AfterLoad`、事件的 `OnGameLoaded` 和 `InitializeForSavedGame`，最后调用 `_tickData.InitializeDataCache()`。这意味着读档后缓存会针对已恢复的 `MobileParty` 集合重新建数组；旧实例中的数组、槽位和 party 引用不应被保留。

这是一个重要边界：缓存只在已建立的 `Campaign.Current`、对象注册和部队列表都进入可运行状态后才可靠。`OnGameEarlyLoaded`、Behavior 的保存数据刚读入、对象尚未 `AfterLoad` 时，不能假定移动缓存已经完成初始化。

## 查询、失效与“不要直接操作”

### 没有 mod 可用的缓存查询

这个 public class 的构造函数是 `internal`；`InitializeDataCache`、`ValidateMobilePartyTickDataCache`、`Tick`、`RealTick` 也都是 `internal`；数组、计数器和 `PartyTickCachePerParty` 都是 `private`。因此不存在一个合法的 `CampaignTickCacheDataStore.Get(party)`、`Clear()` 或 `Set(...)` 调用。反射、Harmony 改私有字段或把内部方法当公开 API 使用，都绕开了游戏保证的阶段与并行约束。

需要“当前时间”时读取 [CampaignTime](../CampaignTime) 的 `CampaignTime.Now`/`DeltaTime`；需要观察部队时从 `Campaign.Current`、[MobileParty](../../campaign/MobileParty) 或 `CampaignEvents` 的回调参数获取；需要周期逻辑时订阅事件，而不是读取 `_cacheData`。

### 什么时候会被刷新

- **每个 `RealTick`：** party 缓存变量先重新初始化，再缓存帧起点目标，再分类；这是正常刷新，不是只在小时/日事件发生时刷新。
- **部队数量达到容量：** `ValidateMobilePartyTickDataCache` 重新分配工作数组，旧数组直接丢弃。不要保存指向其内部槽位的引用。
- **读档完成：** `Campaign.OnGameLoaded` 丢弃旧 `_tickData`，新建并初始化一个实例。
- **当前帧处理结束：** 网格变更列表、导航过渡列表和各种计数只服务当前处理轮次；没有持久化的“下次继续消费”契约。

### 正确的替代入口

- 要按战役时间运行逻辑：使用 [CampaignEvents](../CampaignEvents) 的 `HourlyTickEvent`、`DailyTickEvent`、`QuarterHourlyTickEvent` 或带 party 参数的事件。
- 要读取一个 party 的公开状态：使用 [MobileParty](../../campaign/MobileParty) 的公开属性/方法，在回调中确认 `Campaign.Current`、party 仍然 active 且没有被销毁。
- 要做世界变更：调用相应 `Action.Apply`，不要把 party 放入缓存数组、伪造移动分类或直接调用内部移动函数。
- 要保存自己的状态：在 [CampaignBehaviorBase](../CampaignBehaviorBase) 的 `SyncData(IDataStore)` 中保存自己的字段；不要把引擎的 tick 工作数组复制进存档。

## 与时间、周期事件和存档的边界

### `CampaignTime` 不是 tick cache

`CampaignTime.Now` 与 `CampaignTime.DeltaTime` 从 `Campaign.Current.MapTimeTracker` 读取整数 tick；`CampaignPeriodicEventManager` 将 `DeltaTime.ToHours`/`ToDays` 加到各个 `PeriodicTicker<T>` 的 `TickDebt`，按累计量调用 party、settlement、clan、town、hero 等事件。缓存的 `dt`/`realDt` 则服务地图移动和可见性管线。

所以：

- `CampaignTime.Now` 适合记录“下次执行时刻”；不要用它猜 `_cacheData` 当前处于哪个阶段。
- `DeltaTime == CampaignTime.Zero` 或 `dt == 0` 时，周期事件与移动管线的分支规则仍由游戏控制。不要通过手动调用 `_tickData.RealTick` 来“补 tick”。
- 周期事件的 `TickDebt`/`Index` 属于 `CampaignPeriodicEventManager` 的 Saveable ticker 状态；它们与本类的 party 数组、索引列表和 per-frame 计数不是同一份数据。

### 缓存不是存档数据

`Campaign` 的 `_tickData` 字段没有 `[SaveableField]`；本类的数组、计数器、`dt`、委托和并行辅助对象也没有保存契约。它在存档中不应被当作持久对象图的一部分。相反，`CampaignPeriodicEventManager` 的多个 `PeriodicTicker<T>` 字段带有 `[SaveableField]`，ticker 内的 `TickDebt` 与 `Index` 带有 `[SaveableProperty]`，因此读档要恢复“周期事件消费进度”，而不是恢复移动缓存数组。

mod 应把自己的可持久状态放进 [IDataStore](../IDataStore) / [CampaignBehaviorBase](../CampaignBehaviorBase) 的约定中：保存一个业务时间点、ID 或版本号，加载结束后再通过真实对象集合重建派生数据。不要把 `_cacheData` 的数组索引、`MobileParty` 引用或内部计数写入自己的 save data；部队列表变更、读档重建和版本迁移都会使它们失效。

## 真实获取路径：观察战役 tick

下面是合法的 mod 入口。它获取的是 `CampaignEvents` 和公开战役时间，而不是试图获取 `CampaignTickCacheDataStore`：

```csharp
using TaleWorlds.CampaignSystem;

public sealed class PartyTickObserver : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.HourlyTickEvent.AddNonSerializedListener(this, OnHourlyTick);
        CampaignEvents.DailyTickPartyEvent.AddNonSerializedListener(this, OnDailyPartyTick);
    }

    private void OnHourlyTick()
    {
        Campaign campaign = Campaign.Current;
        if (campaign == null || !campaign.GameStarted)
            return;

        CampaignTime now = CampaignTime.Now;
        MobileParty mainParty = MobileParty.MainParty;
        if (mainParty != null && mainParty.IsActive)
        {
            // 在这里读取公开 party 状态或更新 mod 自己的派生数据。
            _lastObservedTime = now;
        }
    }

    private void OnDailyPartyTick(MobileParty party)
    {
        if (party != null && party.IsActive)
        {
            // party 是事件提供的真实对象；不要把它送进内部 tick cache。
        }
    }

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData("last_observed_time", ref _lastObservedTime);
    }

    private CampaignTime _lastObservedTime;
}
```

这里的 `RegisterEvents` 是真实的 `CampaignBehaviorBase` 注册路径，`SyncData` 是真实的 Behavior 存档路径。示例只观察公开状态；若逻辑必须在每个地图实时帧运行，应该使用项目已有的合法 Campaign/实体回调，并自行处理 `dt`，仍然不能把内部缓存当作扩展点。

## 依赖关系

### 上游

- [Campaign](../../campaign/Campaign)：创建并私有持有 `_tickData`，控制 `RealTick`/`Tick` 的调用顺序。
- [MobileParty](../../campaign/MobileParty)：提供 `CachedPartyVariables`、移动/静止/过渡处理和活动状态；缓存不能脱离当前 party 列表使用。
- [CampaignTime](../CampaignTime)：为周期管理器提供 `Now` 与 `DeltaTime`；它不是本类的持久化或查询接口。
- [CampaignPeriodicEventManager](../CampaignPeriodicEventManager)：使用战役时间推进周期 ticker，并在 Campaign tick 中先于 `_tickData.Tick()` 分发周期事件。

### 下游

- `MobilePartyLocator`：帧末接收网格位置变化。
- `LeaveSettlementAction`：`Tick()` 将检测到的离开据点 party 转成正式世界变更。
- `MapVisibilityModel`：缓存更新主队附近可见性时通过 `Campaign.Current.Models.MapVisibilityModel.MaximumSeeingRange()` 计算搜索范围。
- [CampaignEvents](../CampaignEvents) 与 [CampaignBehaviorBase](../CampaignBehaviorBase)：mod 应从这里观察 tick，而不是下钻到内部工作区。
- [IDataStore](../IDataStore)：保存 mod 自己的业务状态；不保存本类派生数组。

## 风险与错误阶段

- **过早读取：** 在 `Campaign.Current` 为空、`MobileParties` 尚未建立、`OnGameLoaded` 的 `InitializeDataCache` 之前反射读取，会得到空数组/旧引用，或因依赖为空而崩溃。
- **错误 tick 阶段：** 在并行 `RealTick` 中从其他线程改 party、调用 Action、改变 `MobileParties` 数量，可能让缓存索引、locator 列表和活动状态不同步，产生越界、竞态或地图状态损坏。把变更排到官方事件/安全阶段。
- **伪造移动：** 直接调用内部移动函数、修改 `CachedPartyVariables` 或伪造网格变化，绕过速度验证、导航过渡、`LeaveSettlementAction` 和 locator 更新；轻则 party 位置/可见性错乱，重则后续 AI 或地图查询崩溃。
- **保存内部状态：** 持久化数组索引、party 引用或 per-frame 计数，读档后它们不再对应新建的 `_tickData`，会导致错误 party 被处理，甚至坏档。只保存稳定业务 ID/时间/版本，并在加载完成后重新查找。
- **跨线程/跨帧保留引用：** `RealTick` 使用并行数组并可能因容量增长整批替换；不要把内部引用传给 UI、异步任务或下一个 tick。
- **把周期进度混为缓存进度：** 改动 `PeriodicTicker` 的 Saveable 数据或手动补事件会改变存档恢复后的事件顺序；需要自定义周期时用 `CampaignPeriodicEventManager.CreatePeriodicEvent` 或事件系统，并按其存档契约处理。

## 1.3.15 与 1.4.5 对照

- 两版都保持同一核心边界：构造函数为 `internal`，`Campaign` 私有 `_tickData` 在构造时创建，读档 `OnGameLoaded` 时重新创建，再在加载完成后 `InitializeDataCache`；每个实时帧按当前 `MobileParty` 数量验证容量并重建/刷新工作数组。
- 两版的 `CampaignPeriodicEventManager` 都把各类 `PeriodicTicker<T>` 字段用 `[SaveableField]` 保存、把 ticker 的 `TickDebt`/`Index` 用 `[SaveableProperty]` 保存；这不改变本类缓存不持久化的结论。
- 1.4.5 的 `UpdateVisibilitiesAroundMainParty` 增加了“主队正在港口 raid 且地图事件 settlement 有港口”时使用该 settlement 位置和 `SeeingRange * 1.35f` 的分支；1.3.15 只有 siege 港口分支，否则使用主队位置。mod 不应依赖这个内部可见性细节来决定业务逻辑。
- 1.4.5 的源码还把 `CampaignTime.Seasons` 明确暴露为公开枚举，并采用文件级命名空间/较新的并行调用写法；这些是源码形态或时间 API 的演进，不是给 mod 增加缓存访问权。

## 导航

### ↑ Parent

- [Campaign-ext API](../)
- [SDK 总览](../../../architecture/sdk-overview)

### ↔ Sibling

- [Campaign](../../campaign/Campaign)
- [CampaignTime](../CampaignTime)
- [CampaignPeriodicEventManager](../CampaignPeriodicEventManager)
- [CampaignEvents](../CampaignEvents)
- [CampaignBehaviorBase](../CampaignBehaviorBase)

### Related / 双向返回

- [MobileParty](../../campaign/MobileParty)：缓存的真实数据来源；从 party 回到本页可理解移动管线边界。
- [IDataStore](../IDataStore)：mod 自己的存档入口；从存档系统回到本页可区分持久 ticker 与临时缓存。
- [SaveManager](../../save-system/SaveManager)：存档总管；不应被调用来保存本类内部数组。

## 源码依据

- 1.3.15：`R:\Bannerlord\bannerlord-1.3.15\TaleWorlds.CampaignSystem\CampaignTickCacheDataStore.cs`（构造、容量验证、初始化、`Tick`、`RealTick`）；`Campaign.cs`（构造、`OnGameLoaded`、`RealTick`、`Tick`）；`CampaignTime.cs`；`CampaignPeriodicEventManager.cs`。
- 1.4.5 对照：`R:\Bannerlord\bannerlord-1.4.5\Bannerlord.Source\bin\TaleWorlds.CampaignSystem\TaleWorlds.CampaignSystem\CampaignTickCacheDataStore.cs`、`Campaign.cs`、`CampaignTime.cs`、`CampaignPeriodicEventManager.cs`。
- 读档与保存边界还对照了两版 `CampaignEvents.cs`、`CampaignBehaviorBase.cs` 与 `TaleWorlds.SaveSystem` 的 `[SaveableField]`/`[SaveableProperty]` 调用契约。

## 参见

- ↑ [Campaign-ext API](../)
- ↔ [Campaign](../../campaign/Campaign) · [CampaignTime](../CampaignTime) · [CampaignPeriodicEventManager](../CampaignPeriodicEventManager)
- ↓ [CampaignEvents](../CampaignEvents) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [IDataStore](../IDataStore)
