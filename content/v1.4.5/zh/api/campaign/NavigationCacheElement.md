---
title: "NavigationCacheElement"
description: "地图距离缓存的「键」结构：把据点（ISettlementDataHolder，实战中是 Settlement）与其港口/城门入口标志绑成一个只读单元，作为两点间路径距离、陆地占比与最近据点网格索引的字典键；由 SandBoxNavigationCache 在战役地图初始化时填充，mod 只应读取、不应自行构造。"
---
# NavigationCacheElement

**命名空间：** `TaleWorlds.CampaignSystem.Map.DistanceCache`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public readonly struct NavigationCacheElement<T> : IEquatable<NavigationCacheElement<T>> where T : ISettlementDataHolder`  
**约束：** `T` 必须实现 `ISettlementDataHolder`（本构建中实际特化为 `NavigationCacheElement<Settlement>`）  
**源文件：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Map.DistanceCache/NavigationCacheElement.cs`

## 概述

`NavigationCacheElement<T>` 是地图距离缓存用来标识「一段距离的一端」的轻量只读结构：它把**一个据点**（任意 `ISettlementDataHolder`，实战里就是 `Settlement`）与**一个布尔标志 `IsPortUsed`**（表示这次指该据点的海路港口入口还是陆地城门入口）捆成一个单元。缓存（`NavigationCache<T>` / `SandBoxNavigationCache`）用它作为 `_settlementToSettlementDistanceWithLandRatio`（两点间距离与陆地占比）和 `_closestSettlementsToFaceIndices`（每个导航网格面最近据点）这两个字典的键。它不是 mod 代码创建的业务对象——引擎在战役地图初始化时通过 `Settlement.Find(StringId)` 解析出规范据点实例来构造它，mod 只应通过 `MapDistanceModel` / `DefaultMapDistanceModel` 的公共距离 API 间接使用它。

## 心智模型

把 `NavigationCacheElement<T>` 想成地图距离缓存里的一把**「据点 + 入口」钥匙**，而不是一个据点本身。

- **它处在哪一层**：纯 Campaign 地图基础设施层（`TaleWorlds.CampaignSystem.Map.DistanceCache`）。它不计算任何规则，只是把 `ISettlementDataHolder` 提供的 `StringId` / `GatePosition` / `PortPosition` / `HasPort` 重新打包，供 `NavigationCache` 在 `Campaign.Current.MapSceneWrapper`（导航网格）上做路径查询时使用。它比 `Settlement` 薄得多：本身不持有坐标，所有坐标都转发自被绑的据点。
- **它为何区分港口与城门**：同一个据点，走陆路（城门）和走海路（港口）在导航网格上是两条完全不同的线，距离、陆地占比、`NavigationType` 都不同。所以缓存用 `IsPortUsed` 把 (据点, 城门) 和 (据点, 港口) 拆成**两个不同键**——这正是 `NavigationType.Default` / `Naval` / `All` 三套缓存能分别记陆地/海运/混合距离的机制。
- **生命周期**：在战役地图初始化阶段，由 `SandBoxNavigationCache.GenerateCacheData()` 依次生成「最近据点-网格面索引」「据点-据点距离」「邻居据点」三套缓存时，内部通过 `GetCacheElement(Settlement, bool)` 调用 `new NavigationCacheElement<Settlement>(settlement, isPortUsed)` 造出来并塞进字典。缓存造完即只读；它不随每 tick 变化，也不随据点移动自动刷新。
- **谁持有它**：`NavigationCache<T>` 的两个字典（距离表、最近据点表）以它为键；`ISettlementDataHolder` 的据点实例才是真正的状态来源。相等性靠 `StringId` + `IsPortUsed` 决定，因此同一据点只要 ID 相同、入口标志相同，就是同一个键。
- **何时读、何时不要碰**：只读它，或只读它转发的据点字段。绝不要自己 `new NavigationCacheElement<T>` 再塞进缓存字典——那会绕过 `Settlement.Find` 的**规范实例**解析，破坏相等/哈希的一致性（见风险）。想改入口坐标就去改 `Settlement` 的 `GatePosition` / `PortPosition` 并让缓存重建，而不是改这个只读结构。

## 何时使用 / 何时不要使用

- **用**：理解地图距离缓存的键结构；通过 `MapDistanceModel.GetDistance(...)` 系列 / `DefaultMapDistanceModel` 的公共 API 间接消费它（引擎内部用 `NavigationCacheElement` 做字典键）；读取它转发的据点字段（`StringId` / `GatePosition` / `PortPosition`）来理解某次距离查询用的是哪个入口。
- **不要用**：不要 `new NavigationCacheElement<T>` 后塞进 `NavigationCache` 的字典；不要自己用 `StringId + IsPortUsed` 复刻相等/哈希逻辑（直接用类型自带的 `Equals` / `GetHashCode`）；不要把它当成可变的状态去改据点入口——它是 `readonly struct`，且真正的入口坐标在 `Settlement` 上；不要直接读写 `ModuleData/DistanceCaches/settlements_distance_cache_*.bin` 的二进制布局。

## 依赖图

```text
ISettlementDataHolder (StringId / GatePosition / PortPosition / HasPort)
        -> Settlement (唯一实现者，经 Settlement.Find 解析为规范实例)
        -> NavigationCacheElement<T>   (只读键：据点 + IsPortUsed)
        -> NavigationCache<T> / SandBoxNavigationCache
              - _settlementToSettlementDistanceWithLandRatio  (据点键 -> 距离, 陆地占比)
              - _closestSettlementsToFaceIndices             (网格面 -> 最近据点键)
        -> MapDistanceModel.INavigationCache / RegisterDistanceCache
        -> DefaultMapDistanceModel  (按 NavigationType 查询)
        -> MobileParty.NavigationType (决定走哪套缓存：Default / Naval / All)
        -> Campaign.Current.MapSceneWrapper (导航网格路径查询)
```

- **上游 / 持有者：**
  - [Settlement](../Settlement) 实现 `ISettlementDataHolder`，提供 `NavigationCacheElement` 的全部数据来源：`StringId`、`GatePosition`、`PortPosition`、`HasPort`。缓存元素里的据点引用必须是 `Settlement.Find(StringId)` 解析出的规范实例。
  - [Campaign](../Campaign) 提供 `MapSceneWrapper`（导航网格）与 `Models`（含 `MapDistanceModel`）；距离缓存在地图初始化时依赖它们生成。
  - [NavigationType](../NavigationType)（在 `MobileParty` 上）决定使用哪一套缓存：`Default`（陆地）、`Naval`（海运）、`All`（混合），每套用不同的 `NavigationCacheElement` 入口组合。
- **下游 / 变更入口：**
  - [MapDistanceModel](../MapDistanceModel) 定义 `INavigationCache` 接口与 `RegisterDistanceCache`，是缓存对外的统一门面。
  - [DefaultMapDistanceModel](../DefaultMapDistanceModel) 实现距离查询，内部用 `NavigationCacheElement` 作为缓存键去 `_settlementToSettlementDistanceWithLandRatio` 取值。
  - [MobileParty](../MobileParty) 的寻路 / 移动距离读取这套缓存；其 `NavigationType` 是选缓存的开关。
  - `NavigationCache<T>` / `SandBoxNavigationCache`（本构建无独立页）负责填充与持有这些 `NavigationCacheElement` 键。

## 风险边界

- **直接构造会破坏相等/哈希一致性**：`Equals(NavigationCacheElement<T>)` 对 `T=Settlement` 走的是 `Settlement` 的**引用相等**（经 `EqualityComparer<T>.Default`），而缓存里的键都是 `Settlement.Find(StringId)` 返回的同一规范实例。如果你 `new NavigationCacheElement<Settlement>(someSettlement, flag)` 时传入的不是那个规范实例，字典会把它当成和缓存里「不同的键」——查询结果可能 miss、返回 0 或重复插入两条记录。永远走 `MapDistanceModel` 的公共距离 API，让引擎自造键。
- **缓存不会自动刷新（贴合坏档/状态不一致）**：距离缓存在地图初始化时一次性算好，依赖当时的导航网格与每个据点的 `GatePosition` / `PortPosition`。若 mod 在初始化后移动据点入口（`SetPortPosition` / `SetGatePosition`）或修改地图场景却未重建缓存，缓存里的距离、陆地占比、邻居关系就是错的，后果是寻路选错路线、队伍卡死、邻居检测失灵、`PartyNavigationModel` 算出错误的移动耗时与补给消耗。该缓存**没有失效机制**，改动入口位置后必须触发缓存重建。
- **distance cache 二进制版本错配**：`NavigationCache.Serialize` / `Deserialize` 把距离表、邻居表、最近据点表写进 `ModuleData/DistanceCaches/settlements_distance_cache_<NavigationType>.bin`，头部只存两个 CRC（`GetSceneXmlCrc` / `GetSceneNavigationMeshCrc`）。若地图场景变了但 bin 没重算，或 mod 自带了不兼容的 bin，反序列化会**静默**采用错误的距离/邻居/最近据点（CRC 仅打印、不拒绝）。`landRatio` 的读取还依赖 `NavigationType`：读 `Naval` 强制为 0，读 `All` 才会多读一个浮点；用错缓存或错位字节会得到全陆/全海的错估，污染经济与 AI 估算。
- **港口/城门语义混淆**：`IsPortUsed == true` 要求据点确实有港口（`HasPort`）。`Naval` 缓存的陆地占比被强制为 0、`Default` 强制走城门；若据点没有港口却被当港口键查询，`GetRealDistanceAndLandRatioBetweenSettlements` 会用 `PortPosition`（可能是零向量）去问路径，得到错误距离甚至 0。
- **`Sort` 规范化顺序不可绕开**：距离字典通过 `NavigationCacheElement.Sort` 保证对称（A→B 与 B→A 同键）。若任何代码绕过 `Sort` 直接往 `_settlementToSettlementDistanceWithLandRatio` 写入，会与后续读取的顺序不一致而 miss——这是内部结构，mod 更不应碰字典本身。
- **`readonly struct` 的误用**：它是值类型且字段只读，复制时按值传递；把它当可变句柄去「改据点入口」无效，真正的入口坐标在 `Settlement` 上。

## 成员说明（按主题分组）

### 身份与入口（缓存键的构成）

| 成员 | 类型 / 来源 | 真实用途、副作用与时机 |
| --- | --- | --- |
| `Settlement` | `readonly T`（即 `ISettlementDataHolder`） | 被缓存的据点引用。它是状态来源：所有坐标都来自它。`NavigationCache` 保证此引用是 `Settlement.Find(StringId)` 的规范实例，所以相等比较才稳定。读取即用；不要替换。 |
| `IsPortUsed` | `readonly bool` | 标识该缓存元素指向据点的**港口（海路）入口**还是**城门（陆路）入口**。与 `StringId` 共同决定字典键——同一据点的城门键与港口键是不同的。 |
| `StringId` | `string`（`=> Settlement.StringId`） | 据点的稳定字符串 ID。是 `GetHashCode` 与相等比较的根基，也是序列化进 distance cache bin 时的主键。 |
| `GatePosition` | `CampaignVec2`（`=> Settlement.GatePosition`） | 该据点的**陆地城门**坐标。缓存真正想从 `ISettlementDataHolder` 拿的点之一，用于向 `MapSceneWrapper` 查询陆路路径长度。 |
| `PortPosition` | `CampaignVec2`（`=> Settlement.PortPosition`） | 该据点的**海路港口**坐标。仅当 `HasPort` 时有意义；`IsPortUsed == true` 时取它做路径查询。 |

### 构造与排序

| 成员 | 签名 / 调用点 | 真实用途、副作用与时机 |
| --- | --- | --- |
| 构造函数 | `NavigationCacheElement(T settlement, bool isPortUsed)` | 唯一构造器，绑定据点与入口标志。`SandBoxNavigationCache.GetCacheElement` 在 `GenerateClosestSettlementToFaceCache`、`AddClosestEntrancePairBase` 等内部调用；mod 不应直接 `new`。 |
| `Sort` | `static void Sort(ref NavigationCacheElement<T> s1, ref NavigationCacheElement<T> s2, out bool isPairChanged)` | 对一对缓存元素做**规范化排序**，让距离字典对称（A→B 与 B→A 落到同一键）。按 `StringId` 字典序、再按 `IsPortUsed` 比较；若交换了顺序则 `isPairChanged = true`。被 `GetSettlementToSettlementDistanceWithLandRatio`、`SetSettlementToSettlementDistanceWithLandRatio`、`AddClosestEntrancePairBase`、`Deserialize` 调用。 |

### 相等、哈希与序列化键

| 成员 | 签名 | 真实用途、副作用与时机 |
| --- | --- | --- |
| `GetHashCode()` | `override int` | 返回 `StringId.GetDeterministicHashCode() * 2 + (IsPortUsed ? 1 : 0)`。把「据点 ID」与「港口标志」合成稳定哈希，作为 `Dictionary<NavigationCacheElement<T>, …>` 的键——所以 (据点, 城门) 与 (据点, 港口) 哈希不同。 |
| `Equals(NavigationCacheElement<T>)` | `bool Equals(NavigationCacheElement<T> other)` | 相等 = `Settlement` 引用相等 **且** `IsPortUsed` 相同。注意这里走的是 `T` 的引用相等（对 `Settlement` 即对象同一性），因此必须配合 `Settlement.Find` 的规范实例。 |
| `Equals(object)` | `override bool Equals(object obj)` | 先转型为 `NavigationCacheElement<T>`，再按 `StringId` **串相等** + `IsPortUsed` 比较。与泛型重载语义略有差异（泛型看引用、object 看 StringId），但因缓存元素统一由 `Settlement.Find` 解析，结果一致。 |
| `==` / `!=` | `static operator` | 委托给 `Equals`；用于缓存元素比较与字典键查找。 |
| 序列化键 | （被 `NavigationCache.Serialize` / `Deserialize` 使用） | 写入/读取 bin 时只持久化 `StringId` 与 `IsPortUsed`（最近据点表与距离表都只存这两项），反序列化时再经 `GetCacheElement(StringId)` 解析回规范据点实例。 |

## 最小真实示例

### 示例 1：通过公共 API 查询两点据点距离（引擎内部用 `NavigationCacheElement` 做缓存键）

mod 不应自己造缓存键，而应通过 `MapDistanceModel` 查距离——它内部会构造 `NavigationCacheElement<Settlement>` 并查 `_settlementToSettlementDistanceWithLandRatio`：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;

// 经 MBObjectManager 按 StringId 拿到规范据点实例
Settlement from = Settlement.Find("town_1");
Settlement to   = Settlement.Find("town_2");

if (from != null && to != null)
{
    // 陆地（走城门）距离；landRatio 出参返回这条路径的陆地占比
    float dist = Campaign.Current.Models.MapDistanceModel
        .GetDistance(from, to,
                     isFromPort: false, isTargetingPort: false,
                     MobileParty.NavigationType.Default,
                     out float landRatio);
}
```

`GetDistance` 背后会用 `(from, 城门)`、`(to, 城门)` 两个 `NavigationCacheElement<Settlement>` 作为键去查缓存；`landRatio` 来自缓存里预存的陆地占比，不是每次重算。`from` / `to` 必须来自 `Settlement.Find` 的规范实例，否则键对不上。

### 示例 2：读取 `NavigationCacheElement` 实际包裹的据点字段

`NavigationCacheElement<T>` 是只读转发结构，它本身不存坐标。若你想理解某次距离查询用的是哪个入口，直接读它转发的 `Settlement` 字段即可：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;

Settlement s = Settlement.Find("town_1");
if (s != null)
{
    string id = s.StringId;                  // 缓存键的 StringId 来源
    CampaignVec2 gate = s.GatePosition;      // IsPortUsed == false 时用的陆地入口
    bool hasPort = s.HasPort;
    // IsPortUsed == true 时取港口入口（前提 HasPort 为真且 PortPosition 非零）
    CampaignVec2 entrance = (hasPort && s.PortPosition.ToVec2() != default)
        ? s.PortPosition
        : s.GatePosition;
}
```

这正是 `SandBoxNavigationCache.GetRealDistanceAndLandRatioBetweenSettlements` 内部在 `IsPortUsed` 为真时取 `PortPosition`、否则取 `GatePosition` 去问 `MapSceneWrapper` 的逻辑。不要把 `entrance` 写回据点——改入口坐标应走 `Settlement` 的 `SetGatePosition` / `SetPortPosition`，并让距离缓存重建。

## 版本注记

本页以 v1.4.5 `TaleWorlds.CampaignSystem.Map.DistanceCache/NavigationCacheElement.cs`、`NavigationCache.cs`、`SandBoxNavigationCache.cs` 与 `TaleWorlds.CampaignSystem.ComponentInterfaces/MapDistanceModel.cs` 源码为准。`NavigationCacheElement<T>` 是泛型只读结构，本构建中由 `SandBoxNavigationCache` 以 `T = Settlement` 特化；它不实现 `[Saveable]`——距离缓存不进战役存档，而是以 `ModuleData/DistanceCaches/settlements_distance_cache_<NavigationType>.bin` 预计算文件形式驻留。跨版本使用时重新核对 `INavigationCache` 接口签名、`RegisterDistanceCache` 的 `NavigationType` 枚举值，以及 bin 头部的 CRC 校验逻辑。

## 导航

- ↑ 父级：[Campaign API 索引](../)
- ↔ 同级：[Settlement](../Settlement)（它实现 `ISettlementDataHolder`，是 `T` 的实际类型）· [Campaign](../Campaign)（提供 `MapSceneWrapper` 与 `Models`）· [MobileParty](../MobileParty)（其 `NavigationType` 决定用哪套缓存）· [MapDistanceModel](../MapDistanceModel)（缓存门面与注册入口）· [DefaultMapDistanceModel](../DefaultMapDistanceModel)（距离查询实现）· [CampaignVec2](../CampaignVec2)（入口坐标类型）· [NavigationType](../NavigationType)（Default / Naval / All 三套缓存）· [ISettlementDataHolder](../ISettlementDataHolder)（缓存键要求的接口）
