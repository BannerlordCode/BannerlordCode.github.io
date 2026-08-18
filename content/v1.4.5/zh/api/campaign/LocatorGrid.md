---
title: "LocatorGrid"
description: "战役地图的二维空间索引：把实现了 ILocatable<T> 的地图实体（MobileParty、Settlement、Track 等）按坐标哈希进网格节点并用链表串接，支撑「某点半径范围内有哪些实体」的邻近查询；由 Campaign 持有，随实体坐标变化经 UpdateLocator 维护。"
---
# LocatorGrid

**命名空间:** `TaleWorlds.CampaignSystem.Map`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `internal class LocatorGrid<T> where T : ILocatable<T>`  
**源文件:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Map/LocatorGrid.cs`

## 概述

`LocatorGrid<T>` 是战役地图上一张**空间哈希网格**，用来在每 tick 频繁发生的「某个坐标附近有哪些实体」查询中，避免遍历全部队伍 / 据点。它把实现了 `ILocatable<T>` 的实体按 `GetPosition2D` 整除网格尺寸得到节点下标，把同一节点内的实体用 `NextLocatable` 串成单链表；引擎原生用它索引 `MobileParty`（`Campaign.MobilePartyLocator`）和 `Settlement`（`Campaign.SettlementLocator`），`MapTracksCampaignBehavior` 也用它索引 `Track`。它本身不持有任何玩法状态，只是实体坐标的一个**派生缓存**，正确性完全依赖实体移动时调用 `UpdateLocator` 同步节点。

## 心智模型

把 `LocatorGrid<T>` 想成贴在战役地图上的「格子索引板」：**它不创造、也不解释世界，只是把已经存在的地图实体按坐标归类，方便快速问「这附近有什么」**。

- **它在哪一层**：纯 Campaign（战略地图）层，由 [Campaign](../Campaign) 持有两个原生实例——`SettlementLocator`（`LocatorGrid<Settlement>`）与 `MobilePartyLocator`（`LocatorGrid<MobileParty>`），都通过惰性属性 `??` 创建，且**不是 `[SaveableField]`**，读档后会被重建。
- **实体如何挂上去**：每个被索引的实体都实现 [ILocatable<T>](../ILocatable)，提供三个 `[CachedData]` 成员：`LocatorNodeIndex`（所在节点）、`NextLocatable`（同节点链表后继）、`GetPosition2D`（当前坐标）。关键认知——**网格不是你填的，是实体的 `Position` setter 自动维护的**：`MobileParty.Position` 与 `Settlement.Position` 的 setter 在坐标变化时都会调用 `Campaign.Current.MobilePartyLocator.UpdateLocator(this)` / `SettlementLocator.UpdateLocator(this)`，重新计算节点并改写链表。新实体 `LocatorNodeIndex` 初值为 `-1`（尚未注册）。
- **查询怎么走**：`StartFindingLocatablesAroundPosition(Vec2, radius)` 算出查询矩形覆盖的网格范围，返回一个 `LocatableSearchData<T>` 游标；随后反复调用 `FindNextLocatable(ref data)` 沿链表逐个取出、并用真实 `DistanceSquared` 按半径过滤，直到返回 `null`。`MobileParty` / `Settlement` 把这套封装成静态方法（`MobileParty.StartFindingLocatablesAroundPosition` / `FindNextLocatable`），AI、遭遇、视野、任务行为都靠它。
- **何时读、何时不要直接改**：查询（只读）任何时候都安全；但**绝不要自己写 `_nodes`、改 `LocatorNodeIndex` 或 `NextLocatable`**——它们是 `[CachedData]` 链表结构，直接改会让网格与实体真实位置脱节，甚至触发 `Debug.FailedAssert("cannot remove party from MapLocator")`。让实体移动永远走 `Position` setter / 对应 *Action，让引擎替你 `UpdateLocator`。
- **它不是存档字段、也不是权威状态**：它只是坐标的派生视图。依赖它的前提是世界已经把实体注册进来了——在 `OnGameLoadFinished` / 新游戏初始化完成前过早查询会返回空。

## 何时使用 / 何时不要使用

- **用**：查询某坐标半径内的据点 / 队伍 / 轨迹（走 `Settlement.StartFindingLocatablesAroundPosition` + `FindNextLocatable`，或 `MobileParty` 的同名封装）；判断两点是否落在同一网格节点（`CheckWhetherPositionsAreInSameNode`，引擎内部用于决定移动是否改变节点）；为**你自己实现的 `ILocatable<T>` 自定义地图实体**在本 mod 的 `CampaignBehavior` 里维护一份 `LocatorGrid<T>`（参考 `MapTracksCampaignBehavior._trackLocator`）。
- **不要使用（优先替代）**：不要用它当权威容器去「持有」实体——权威集合是 `Campaign.Current.MobileParties` / `Settlements`，网格只是它们的空间加速结构。不要为了「瞬移」实体直接改坐标字段绕过 `Position` setter，否则节点不会更新、邻近查询会漏掉它。不要修改 `[CachedData]` 的 `LocatorNodeIndex` / `NextLocatable`。不要在遍历 `FindNextLocatable` 的循环里销毁被查到的实体（见风险）。

## 依赖图

- 上游 / 持有者：[Campaign](../Campaign) 持有原生 `SettlementLocator` 与 `MobilePartyLocator`（惰性属性，非序列化）；`LocatorGrid<T>` 本身不独立创建，通常由持有世界状态的系统实例化。
- 被索引的实体（实现 [ILocatable<T>](../ILocatable)）：[MobileParty](../MobileParty)（通过 `Position` setter 注册到 `MobilePartyLocator`）、[Settlement](../Settlement)（通过 `Position` setter 注册到 `SettlementLocator`）、[Track](../Track)（`MapTracksCampaignBehavior` 维护的 `_trackLocator`）。
- 下游 / 查询方：[MapEvent](../MapEvent) 用它找可加入遭遇的队伍；`MobilePartyAi`、`DefaultEncounterModel`、`DefaultMobilePartyAIModel`、`AiEngagePartyBehavior`、`HeroHelper`、`CampaignTickCacheDataStore`（视野/侦测缓存）等都经 `StartFindingLocatablesAroundPosition` 查询。
- 数据形态：坐标用 [Vec2](../../core-extra/Vec2)（由 `CampaignVec2.ToVec2()` 转换）；[Track](../Track) 的生命周期与 [CampaignTime](../CampaignTime) 相关。

## 风险

- **绕过 `Position` setter 移动实体 → 查询返回空 / 漏查**：网格节点的正确性**完全依赖**实体移动时调用 `UpdateLocator`。若用反射直接写 `_position`、在初始化阶段改坐标、或自定义 `ILocatable` 实体移动后忘了调 `UpdateLocator`，该实体的 `LocatorNodeIndex` 会停留在旧节点；半径查询要么漏掉它、要么在错误节点里找到它。`CheckWhetherPositionsAreInSameNode`（引擎内部用于延迟批量 `UpdateLocator`）也会基于错误的 `LocatorNodeIndex` 误判「没移动」。
- **链表不一致触发断言**：`RemoveFromList` 在节点链表中找不到待移除实体时会 `Debug.FailedAssert("cannot remove party from MapLocator: ...")`。这通常意味着实体被**重复移除**（如销毁逻辑与 `Position` setter 的 `UpdateLocator` 竞态）或 `LocatorNodeIndex` 与实际链表脱节。不要自行改写 `NextLocatable` / `LocatorNodeIndex`。
- **网格是环绕（toroidal）哈希**：`MapCoordinates` 对 `x`、`y` 取模（`x %= width; if (x < 0) x += width`），意味着地图坐标会**回绕**到 32×32 网格内。默认节点尺寸 5、网格 32×32，即约 160 世界单位见方；超出此范围的坐标会回绕进别的节点。`GetBoundaries` 把查询范围限制到 `width-1`/`height-1`，半径很大或靠近地图边界时，边界矩形计算可能不覆盖真实环绕距离。实际返回前 `FindNextLocatable` 会用真实 `DistanceSquared` 过滤，所以回绕不会造成**误报**（假阳性），但边界外的实体可能被漏掉。
- **`[CachedData]` 不序列化，读档后靠重注册**：`LocatorNodeIndex` / `NextLocatable` / `GetPosition2D` 标 `[CachedData]`，不进存档；`LocatorGrid` 本身也不是 `[SaveableField]`。读档后它们被重建，实体在位置被重算（setter 触发 `UpdateLocator`）时才重新挂回网格。**在 `OnGameLoadFinished` / `OnNewGameCreated` 完成前过早做邻近查询，会得到空结果**——查询应放在正常 tick / 行为回调里。
- **遍历中销毁实体会破坏链表**：`FindNextLocatable` 沿 `NextLocatable` 链表前进。若循环体内销毁了当前或相邻实体（`MobilePartyLocator.RemoveLocatable` 改写链表头 / 后继），游标可能跳过实体或指向已失效节点。需要边查边删时，先收集结果再在循环外处理。
- **查询游标必须复用一个 `data`**：`StartFindingLocatablesAroundPosition` 返回的 `LocatableSearchData<T>` 是带可变 `CurrentX` / `CurrentY` / `CurrentLocatable` 的迭代游标，必须按 `ref` 在整段 `for` 循环里复用同一个实例。中途新建一个搜索数据会让迭代从头开始，造成重复或死循环。
- **不要在 Campaign 主线程之外移动实体**：批量坐标更新走 `SetPositionParallel` + `Interlocked.Increment` + `gridChangeList`，把 `UpdateLocator` 延迟到单线程 batched 阶段（见 `CampaignTickCacheDataStore`），以避免并发改写链表。Mod 不应在其它线程直接改 `Position`，否则链表可能被并发破坏。

## 成员说明

按主题分组；每个成员说明它**真正计算 / 持有 / 序列化什么**，以及何时被调用。

### 构造与坐标映射

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `LocatorGrid(float gridNodeSize = 5f, int gridWidth = 32, int gridHeight = 32)` | 构造网格：按 `width*height` 分配 `_nodes` 数组（全部为 `default(T)`，即 `null`），记录节点尺寸与宽高。地图实体不调用它——原生实例由 `Campaign` 的惰性属性创建；自定义 `ILocatable` 网格由你的 `CampaignBehavior` 创建（参考 `MapTracksCampaignBehavior._trackLocator`）。 |
| `MapCoordinates(int x, int y)` → `int`（私有） | 把网格下标 `x`、`y` 取模回绕到 `[0,width)`/`[0,height)` 并返回扁平下标 `y*width + x`。这是网格「环绕」特性的来源。 |
| `GetGridIndices(Vec2 position, out int x, out int y)`（私有） | 计算坐标落在哪个网格单元：`x = Floor(position.x / gridNodeSize)`、`y = Floor(position.y / gridNodeSize)`。 |
| `Pos2NodeIndex(Vec2 position)` → `int`（私有） | `GetGridIndices` + `MapCoordinates` 的合并：返回某坐标对应的节点下标。 |
| `GetBoundaries(Vec2, float radius, out int minX, out int minY, out int maxX, out int maxY)`（私有） | 以 `position ± radius` 算出查询覆盖的最小/最大网格下标，并把跨度限制到 `width-1`/`height-1`（环绕边界处理）。供 `StartFindingLocatablesAroundPosition` 用。 |

### 注册 / 维护（写入路径）

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `UpdateLocator(T locatable)` → `bool` | **网格维护的唯一正确入口**。按 `locatable.GetPosition2D` 重算节点；若与 `locatable.LocatorNodeIndex` 不同，先从旧节点链表摘除、再挂到新节点头，并把 `LocatorNodeIndex` 更新为新值，返回 `true`（节点变了）。`locatable.LocatorNodeIndex < 0`（未注册）时只 `AddToList`。`MobileParty` / `Settlement` 的 `Position` setter 调它；自定义实体移动后也必须调它。 |
| `RemoveFromList(ILocatable<T> locatable)`（私有） | 把 `locatable` 从它所在节点的链表中摘除（改写前驱的 `NextLocatable` 或节点头）。若链表里找不到它，触发 `Debug.FailedAssert("cannot remove party from MapLocator")`。 |
| `AddToList(int nodeIndex, T locator)`（私有） | 把 `locator` 设为该节点链表新头，原头成为它的 `NextLocatable`（头插法）。 |
| `RemoveLocatable(T locatable)` | 实体销毁时调用：若 `locatable.LocatorNodeIndex >= 0`，从对应节点链表摘除。`MobileParty` 销毁流程会调 `MobilePartyLocator.RemoveLocatable(this)`。 |
| `CheckWhetherPositionsAreInSameNode(Vec2 pos1, ILocatable<T> locatable)` → `bool` | 比较 `pos1` 的节点下标与 `locatable.LocatorNodeIndex` 是否相等。引擎内部用于判断移动是否跨节点（决定是否把该实体加入批量 `UpdateLocator` 列表）；**不修改网格**。 |

### 查询（只读路径）

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `StartFindingLocatablesAroundPosition(Vec2 position, float radius)` → `LocatableSearchData<T>` | 创建半径查询游标：经 `GetBoundaries` 算出覆盖的网格范围，返回含 `Position` / `RadiusSquared` / 边界下标 / 当前游标状态的 `LocatableSearchData<T>`。只读，不触碰网格。 |
| `FindNextLocatable(ref LocatableSearchData<T> data)` → `T` | 沿链表逐个取出半径 `data.RadiusSquared` 内（按真实 `DistanceSquared` 过滤）的下一个实体；游标耗尽或越界返回 `default(T)`（即 `null`）。必须在 `for` 循环里复用同一个 `data`（按 `ref`）。 |
| `FindLocatableOnNextNode(ref LocatableSearchData<T> data)`（私有） | 推进游标到下一节点，返回该节点链表头；是 `FindNextLocatable` 的底层支撑。 |

### 被索引实体的契约（在 `ILocatable<T>` 上，非本类成员）

| 成员（位于 [ILocatable<T>](../ILocatable)） | 用途 |
| --- | --- |
| `LocatorNodeIndex`（`[CachedData]`，`int`） | 实体当前所在网格节点；`-1` 表示未注册。由 `UpdateLocator` / `RemoveLocatable` 写。 |
| `NextLocatable`（`[CachedData]`，`T`） | 同节点链表中的后继实体；构成节点内的单链表。 |
| `GetPosition2D`（`[CachedData]`，`Vec2`） | 实体的当前地图坐标，是节点计算与半径过滤的依据。 |

## 示例

### 示例 1：查询某坐标半径内的据点（真实封装入口）

`Settlement.StartFindingLocatablesAroundPosition` 内部就是 `Campaign.Current.SettlementLocator.StartFindingLocatablesAroundPosition`，`FindNextLocatable` 同理。坐标用 `CampaignVec2.ToVec2()` 转为 `Vec2`：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Library;

// 玩家队伍当前位置，半径范围内的据点
Vec2 center = MobileParty.MainParty.Position.ToVec2();
float radius = Campaign.Current.Models.MapVisibilityModel.MaximumSeeingRange() + 5f;

LocatableSearchData<Settlement> data =
    Settlement.StartFindingLocatablesAroundPosition(center, radius);

for (Settlement settlement = Settlement.FindNextLocatable(ref data);
     settlement != null;
     settlement = Settlement.FindNextLocatable(ref data))
{
    // settlement 是距 center 半径 radius 内的据点，已按真实距离过滤
    if (settlement.IsTown)
    {
        // ...
    }
}
```

`Settlement.StartFindingLocatablesAroundPosition` / `FindNextLocatable` 在 v1.4.5 `Settlement.cs`（line 1160–1167）验证为静态封装；游标 `data` 必须在整个循环里按 `ref` 复用同一个实例。

### 示例 2：为你自己的 `ILocatable<T>` 实体维护一份网格（自定义 `CampaignBehavior`）

当你在 mod 里引入实现 `ILocatable<T>` 的地图实体时，可在 `CampaignBehaviorBase` 中持有一个 `LocatorGrid<T>` 并在其坐标变化时调用 `UpdateLocator`——这正是 `MapTracksCampaignBehavior` 对 `Track` 的做法：

```csharp
using TaleWorlds.CampaignSystem.Map;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Library;

// 自定义地图标记实现 ILocatable<T>；三个成员都标 [CachedData]
internal class MyMapMarker : ILocatable<MyMapMarker>
{
    public int LocatorNodeIndex { get; set; } = -1; // -1 = 尚未注册进网格
    public MyMapMarker NextLocatable { get; set; }
    public Vec2 GetPosition2D => _pos;
    private Vec2 _pos;

    public void SetPosition(Vec2 pos) => _pos = pos;
}

// 在你的 CampaignBehavior 中持有并维护网格
private readonly LocatorGrid<MyMapMarker> _markerLocator = new LocatorGrid<MyMapMarker>();

void RegisterOrMove(MyMapMarker marker, Vec2 newPos)
{
    marker.SetPosition(newPos);          // 先更新坐标
    _markerLocator.UpdateLocator(marker); // 必须调用：否则节点与坐标脱节，查询会漏
}

// 查询中心 20 单位内的标记
LocatableSearchData<MyMapMarker> data = _markerLocator.StartFindingLocatablesAroundPosition(center, 20f);
for (MyMapMarker m = _markerLocator.FindNextLocatable(ref data);
     m != null;
     m = _markerLocator.FindNextLocatable(ref data))
{
    // 半径内的标记
}
```

`UpdateLocator` 是唯一维护入口；若 `SetPosition` 后忘记调它，该标记会从邻近查询中消失。`MyMapMarker.GetPosition2D` 因 `[CachedData]` 不进存档，读档后需重新 `UpdateLocator` 注册。

## 版本注记

本页以 v1.4.5 `TaleWorlds.CampaignSystem.Map/LocatorGrid.cs`、`ILocatable.cs`、`LocatableSearchData.cs`，以及 `Campaign.cs`（`SettlementLocator` / `MobilePartyLocator`）、`MobileParty.cs` / `Settlement.cs` 的 `Position` setter、`MapTracksCampaignBehavior.cs` 源码为准。跨版本使用时重新核对默认网格尺寸（`DefaultGridNodeSize=5`、`DefaultGridWidth/Height=32`）、`ILocatable<T>` 的 `[CachedData]` 标注，以及 `StartFindingLocatablesAroundPosition` / `FindNextLocatable` 的静态封装位置。

## 导航

- ↑ 父级：[Campaign API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [MobileParty](../MobileParty) · [Settlement](../Settlement) · [Track](../Track) · [ILocatable](../ILocatable) · [MapEvent](../MapEvent)
- 相关类型：[Vec2](../../core-extra/Vec2) · [CampaignTime](../CampaignTime)
