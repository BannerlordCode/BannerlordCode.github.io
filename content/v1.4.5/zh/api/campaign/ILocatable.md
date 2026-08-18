---
title: "ILocatable"
description: "战役地图空间索引的契约接口：让 MobileParty、Settlement、Track 等实体以统一方式被 LocatorGrid 登记、按 2D 坐标分桶并支持「某点周围半径内」的范围查询。"
---
# ILocatable

**命名空间：** `TaleWorlds.CampaignSystem.Map`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `internal interface ILocatable<T>`（`T` 自身约束 `where T : ILocatable<T>`；注意它是 `internal` 的泛型接口，`LocatorGrid<T>` 通过它操作实体，普通 mod 代码通常只间接使用其派生静态方法）  
**源文件：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Map/ILocatable.cs`

## 概述

`ILocatable<T>` 是战役地图空间索引的底层契约：它只暴露三个成员——当前所在的网格桶索引、同一桶内的下一个实体引用、以及用于分桶的 2D 坐标，使得 `LocatorGrid<T>` 能把这些实体按地图坐标放进一个定长网格、用链表串起同桶碰撞项，并高效回答「以某坐标为中心、半径 R 内有哪些实体」。它让 `MobileParty`、`Settlement`、`Track` 三类实体共享同一套「附近查询」基础设施，被遭遇判定、AI 寻敌、巡逻、追踪脚印等系统大量调用。

## 心智模型

把 `ILocatable<T>` 想成「实体在世界地图上的定位标签」——它本身不持有游戏状态，只是把实体接入一张空间哈希网格的钩子。

- **它在哪一层**：纯 Campaign（战略地图）层的基础设施，定义在 `TaleWorlds.CampaignSystem.Map`。`LocatorGrid<T>` 持有一个 `_nodes` 定长数组（默认 32×32、每格 5 单位），每个桶是一条单向链表；`ILocatable<T>` 的 `LocatorNodeIndex` 是实体当前所在桶的下标，`NextLocatable` 是链表里指向同桶下一个 `T` 的引用，`GetPosition2D` 提供分桶用的坐标。三者都被 `[CachedData]` 标记——它们描述的是运行期的空间索引，不随游戏世界状态持久化，读档后由定位系统重新登记。
- **谁实现它**：只有三个实体直接实现 `ILocatable<T>`——`MobileParty`（`ILocatable<MobileParty>`）、`Settlement`（`ILocatable<Settlement>`）、`Track`（`ILocatable<Track>`）。**`Hero` 并不实现此接口**：英雄没有独立地图坐标，也不进定位网格，它的位置靠其所属队伍或所在据点推导。注意 `LocatorGrid<T>` 的泛型约束 `where T : ILocatable<T>` 要求 `T` 就是实体自身，因此网格是按实体类型分别实例化的。
- **它如何被推动**：`Campaign` 持有两张网格——`MobilePartyLocator`（`LocatorGrid<MobileParty>`）与 `SettlementLocator`（`LocatorGrid<Settlement>`）；`Track` 的网格则在 `MapTracksCampaignBehavior` 内自行持有。`MobileParty`/`Settlement` 在坐标变化时调用 `Campaign.Current.MobilePartyLocator.UpdateLocator(this)` / `SettlementLocator.UpdateLocator(this)`，由网格重算桶下标、必要时把实体从旧桶摘除并头插进新桶，并写回 `LocatorNodeIndex`。
- **正确的使用方式**：你几乎从不直接改这三个成员。要查「附近」，用实体类型上的静态入口 `MobileParty.StartFindingLocatablesAroundPosition(pos, r)` / `FindNextLocatable(ref data)`、`Settlement.StartFindingLocatablesAroundPosition(...)` 等，它们内部转发到 `Campaign.Current.*Locator`。不要自己维护 `LocatorNodeIndex`/`NextLocatable`，也不要在实体没被网格登记前假设这些字段有效。

## 何时使用 / 何时不要使用

- **用**：需要「某坐标半径内有哪些队伍 / 据点 / 脚印」时，调用对应的 `StartFindingLocatablesAroundPosition` + `FindNextLocatable`（或 `Campaign.Current.MobilePartyLocator` / `SettlementLocator`）。这是遭遇、AI 寻敌、巡逻、追踪系统的标准做法。
- **用**：读取 `GetPosition2D`（即实体的 2D 地图坐标）作为范围查询的中心点，通常来自 `MobileParty.Position.ToVec2()` / `Settlement.GatePosition.ToVec2()` 等真实坐标。
- **不要用**：不要手动写 `LocatorNodeIndex` 或 `NextLocatable`，也不要直接增删网格里的链表——绕过 `UpdateLocator`/`RemoveLocatable` 会让桶链表断裂（源码中摘除失败会触发 `Debug.FailedAssert("cannot remove party from MapLocator: ...")`）。
- **不要用**：不要把 `ILocatable<T>` 当作「获取实体坐标的通用接口」去遍历 `Hero` 等未实现的类型；`Hero` 没有地图定位，强制转换会得到编译错误或空引用。
- **不要用**：不要在 Campaign 未加载、`Campaign.Current` 为 `null` 的阶段调用 `...Locator` 或静态 `StartFindingLocatablesAroundPosition`，此时网格尚未建立，调用会抛空引用。

## 依赖图

- 上游 / 网格持有者：
  - [Campaign](../Campaign) 持有 `_mobilePartyLocator` 与 `_settlementLocator` 两张 `LocatorGrid`，并通过 `MobilePartyLocator` / `SettlementLocator` 惰性属性暴露；所有队伍/据点的定位都路由到这里。
  - [MobileParty](../MobileParty) 实现 `ILocatable<MobileParty>`，在位置变化时调用 `MobilePartyLocator.UpdateLocator(this)`，并提供 `StartFindingLocatablesAroundPosition` / `FindNextLocatable` 静态入口。
  - [Settlement](../Settlement) 实现 `ILocatable<Settlement>`，调用 `SettlementLocator.UpdateLocator(this)`，并暴露同样的静态查询入口。
  - [Track](../Track) 实现 `ILocatable<Track>`，由 `MapTracksCampaignBehavior` 内的 `LocatorGrid<Track>` 维护，用于地图脚印的范围发现与过期清理。
- 下游 / 查询调用方：
  - [MapEvent](../MapEvent) 在 `Position` 周围用 `MobileParty.StartFindingLocatablesAroundPosition` 拉取可加入遭遇的队伍。
  - `CampaignTickCacheDataStore`、`MobilePartyAi`、`DefaultEncounterModel`、`AiEngagePartyBehavior` 等大量调用 `StartFindingLocatablesAroundPosition` / `FindNextLocatable`（经 [CampaignEvents](../CampaignEvents) 外的直接定位路径）做视野、遭遇与寻敌计算。
- 序列化边界：
  - 三个接口成员均为 `[CachedData]`，语义上属于运行期缓存而非世界状态；与之相关的存档字段（如 `Track._nextLocatable` 标 `[SaveableField(117)]`）由 [SaveableFieldAttribute](../../save-system/SaveableFieldAttribute) 体系控制，读档后定位索引会被重置（-1）并重新登记。

## 风险

- **未登记即读取定位字段**：在实体被 `UpdateLocator` 登记进网格之前，`LocatorNodeIndex` 为初始值 `-1`，`NextLocatable` 为 `default(T)`（即 `null`）。若你以 `ILocatable<T>` 去读 `LocatorNodeIndex` 或顺着 `NextLocatable` 遍历，会得到「不在任何桶」或跟到 `null`，据此做范围判定会漏掉实体或空转。
- **绕过网格直接改链表**：`NextLocatable` 与 `LocatorNodeIndex` 必须成对由 `LocatorGrid.AddToList` / `RemoveFromList` 维护。手动改一侧会导致桶链表错乱；摘除时若节点不在头部且后续链不匹配，源码会 `Debug.FailedAssert("cannot remove party from MapLocator: ...")`，随后链表状态不一致，后续 `FindNextLocatable` 可能跳过实体或死循环。
- **Campaign 未加载时空调用**：`MobileParty.StartFindingLocatablesAroundPosition` / `Settlement.StartFindingLocatablesAroundPosition` 内部直接访问 `Campaign.Current.MobilePartyLocator` / `SettlementLocator`。主菜单、模块加载或读档中途 `Campaign.Current` 为 `null` 时调用会空引用崩溃；务必先判空 `Campaign.Current`。
- **坐标类型错配**：`GetPosition2D` 返回的是 `Vec2`（地图 2D 坐标），而实体公开坐标多为 `CampaignVec2`（含海陆标记）。把它当 `CampaignVec2` 或反序列化前的旧坐标用，会让范围查询中心偏移，尤其港口/海上据点的 `PortPosition` / `GatePosition` 需选对。
- **读档重建时机**：定位索引是 `[CachedData]`，读档时先被重置为 `-1`，要等定位系统重新 `UpdateLocator` 后才有效。在 `OnLoad`/`OnGameLoaded` 早期就假定 `LocatorNodeIndex` 有有效桶值，会拿到 -1，导致同帧的附近查询全部落空。
- **泛型约束限制**：`LocatorGrid<T> where T : ILocatable<T>` 要求 `T` 是自己。这意味着没有一种「通用 `ILocatable` 网格」能混装队伍与据点；混用类型需要分别走 `MobilePartyLocator` / `SettlementLocator`，不能用一个网格查两种实体。

## 成员说明

> 接口本身只有三个成员，全部为 `[CachedData]`，服务于 `LocatorGrid<T>`。下面的语义来自 `LocatorGrid.cs` 的实际用法。

| 成员 | 真实语义、副作用与调用时机 |
| --- | --- |
| `int LocatorNodeIndex { get; set; }` | 实体当前所在的网格桶下标，由 `LocatorGrid.Pos2NodeIndex(GetPosition2D)` 算出（默认网格 32×32、每格 5 单位，下标经取模环绕）。`UpdateLocator` 比较此值与新鲜算出的桶：不同则先从旧桶摘除、再头插进新桶并写回新值；相同则返回 `false` 表示无需移动。初始/未登记时为 `-1`。这是运行期缓存，不是世界状态。 |
| `T NextLocatable { get; set; }` | 同一网格桶内链表中的下一个 `T`（碰撞链）。`AddToList` 把新实体置为桶头、将其 `NextLocatable` 指向旧桶头；`FindNextLocatable` 沿这条链逐个取实体并用 `GetPosition2D.DistanceSquared(data.Position) >= data.RadiusSquared` 过滤出半径内的。`RemoveFromList` 把它从链中摘除。未登记时为 `default(T)`（即 `null`）。 |
| `Vec2 GetPosition2D { get; }` | 用于分桶与半径过滤的 2D 地图坐标。`LocatorGrid.UpdateLocator` 用它算桶下标，`FindNextLocatable` 用它算到查询中心的距离平方。各实现返回实体的真实地图坐标：`Track` 为 `Position.ToVec2()`；`MobileParty` / `Settlement` 同样以各自地图坐标为准。这是只读快照——实体移动后必须重新 `UpdateLocator` 才会反映到桶里。 |

## 最小真实示例

### 示例 1：用静态入口查询玩家队伍附近的据点

`Settlement.StartFindingLocatablesAroundPosition` 内部转发到 `Campaign.Current.SettlementLocator`，是源码中 `AiEngagePartyBehavior`、AI 寻敌等系统的标准用法：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Map;
using TaleWorlds.Library;

// 真实查询中心：玩家队伍的 2D 地图坐标
Vec2 center = MobileParty.MainParty.Position.ToVec2();
float radius = 25f;

LocatableSearchData<Settlement> data =
    Settlement.StartFindingLocatablesAroundPosition(center, radius);

for (Settlement settlement = Settlement.FindNextLocatable(ref data);
     settlement != null;
     settlement = Settlement.FindNextLocatable(ref data))
{
    // settlement 即落在 center 半径 25 内的据点（已按 GetPosition2D 距离过滤）
}
```

调用前需确认 `Campaign.Current` 已存在、`MobileParty.MainParty` 非空，否则 `StartFindingLocatablesAroundPosition` 会在访问 `Campaign.Current.SettlementLocator` 时空引用。

### 示例 2：通过接口读出一个定位实体的 2D 坐标

`GetPosition2D` 是 `ILocatable<T>` 暴露的唯一坐标成员；把它当作接口使用即可拿到分桶用的 `Vec2`：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Map;
using TaleWorlds.Library;

Settlement settlement = Settlement.CurrentSettlement;
if (settlement != null)
{
    ILocatable<Settlement> locatable = settlement; // 拆箱到接口
    Vec2 pos2D = locatable.GetPosition2D;          // = settlement.Position.ToVec2()
    int bucket = locatable.LocatorNodeIndex;        // -1 表示尚未登记进网格
}
```

注意 `LocatorNodeIndex` 为 `-1` 只说明该实体当前不在任何网格桶中（可能还没被 `UpdateLocator` 过），并不等价于「实体无效」；不要用 `-1` 去判断实体是否存在。

## 版本注记

本页以 v1.4.5 `TaleWorlds.CampaignSystem.Map/ILocatable.cs` 及其实现（`MobileParty.cs`、`Settlement.cs`、`Track.cs`）与 `LocatorGrid.cs` 为准。跨版本使用时重新核对默认网格尺寸（`DefaultGridNodeSize = 5f`、`DefaultGridWidth/Height = 32`）、`LocatableSearchData<T>` 的构造参数，以及 `Campaign.MobilePartyLocator` / `SettlementLocator` 惰性属性的可用性。

## 导航

- ↑ 父级：[Campaign API 索引](../)
- ↔ 实现者：[MobileParty](../MobileParty) · [Settlement](../Settlement) · [Track](../Track)
- 网格持有者：[Campaign](../Campaign) · [MapEvent](../MapEvent) · [CampaignEvents](../CampaignEvents)
- 序列化边界：[SaveableFieldAttribute](../../save-system/SaveableFieldAttribute)
