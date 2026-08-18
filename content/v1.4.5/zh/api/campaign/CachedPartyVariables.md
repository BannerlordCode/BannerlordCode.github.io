---
title: "CachedPartyVariables"
description: "MobileParty 内部的一个每帧瞬态缓存结构，快照并推进单支队伍在一次战役地图 tick 内的移动派生量（位置、移动距离、军队/附属/地图事件/换乘状态），供 CampaignTickCacheDataStore 在并行推进中避免反复读取实时 MobileParty 状态。"
---
# CachedPartyVariables

**命名空间：** `TaleWorlds.CampaignSystem.Party`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `internal struct MobileParty.CachedPartyVariables`（嵌套于 `MobileParty` 内部的私有结构，mod 代码不可直接构造或赋值）  
**源文件：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party/MobileParty.cs`（嵌套定义于 `MobileParty.cs` 内，line 44）

## 概述

`CachedPartyVariables` 是 `MobileParty` 内部用来承载「单支队伍在某一次战役地图 tick 的移动计算过程中所需的全部派生量」的临时缓存：它在每帧开始时从实时 `MobileParty` 状态（`Position`、`IsMoving`、`Army`、`AttachedTo`、`MapEvent`、`IsTransitionInProgress` 等）快照一组标志与坐标，在并行移动推进里被反复读写以推进 `CurrentPosition`/`NextPosition`/`NextMoveDistance`，并在帧末回写进 `CampaignTickCacheDataStore` 的每队伍槽位。它**不持久化进存档**，只在本帧有效，目的是让数百支队伍的移动数学在 `TWParallel.For` 并行循环里各自跑一份局部拷贝，而不是每步都去争抢实时对象。

## 心智模型

把它想成「一支队伍在一次 map tick 里的便签本」——不是长期状态，而是这一帧内用来算「这帧往哪走、走多远」的工作内存。

- **它处在哪一层**：纯 Campaign（战略地图）层的**每帧瞬态缓存**，不参与 Mission、不被任何模型或行为长期持有。它只有一份权威副本，存在 `CampaignTickCacheDataStore._cacheData[i].LocalVariables`（`PartyTickCachePerParty` 数组的一个槽）里，而 `CampaignTickCacheDataStore` 本身是 Campaign 级的单例基础设施（见 [CampaignTickCacheDataStore](../CampaignTickCacheDataStore)）。
- **生命周期（何时创建与被谁持有）**：每帧 `CampaignTickCacheDataStore.RealTick(dt, realDt)` 启动。先是 `ValidateMobilePartyTickDataCache` 确认数组够大，然后 `TWParallel.For` 对每支队伍调 `MobileParty.InitializeCachedPartyVariables(ref variables)` 把实时状态快照进缓存；接着 `CacheTargetPartyVariablesAtFrameStart` 把 `MoveTargetParty` 的位置也快照进来；随后 `ParallelArrangePartyIndices` 按缓存里的 `IsMoving`/`IsArmyLeader`/`IsTransitionInProgress`/`IsAttachedArmyMember` 把队伍分到「移动 / 静止 / 换乘 / 军队领袖」几个桶；各桶在各自的并行循环里 `FillCurrentTickMoveDataForMovingMobileParty` / `CommonMovingPartyTick` / `DoAiPathMode` / `DoUpdatePosition` 一路推进 `CurrentPosition`、`NextPosition`、`NextMoveDistance`，最后 `TryToMoveThePartyWithCurrentTickMoveData` 用 `SetPositionParallel` 把算出的 `NextPosition` 应用到真实 `Position`，并把改动后的 `variables` 写回 `_cacheData[num].LocalVariables`。
- **它和 `MobileParty` / 存档的关系**：它是 `MobileParty` 状态的**只读镜像 + 渐进改写草稿**，帧末只把「算出来的下一个坐标」回灌给真实 `Position`，其余标志随下一帧重新快照。因为它是 `internal struct` 且无 `[SaveableField]`，**永远不会进存档**；读档后由下一帧的 `InitializeCachedPartyVariables` 重新从实时 `MobileParty` 算出来。
- **何时读 / 何时不要直接改**：mod 代码读不到这个结构（internal + 只以 `ref` 传给内部移动方法）。你应当读的是实时 `MobileParty` 上的等效属性（`Position`、`IsMoving`、`Army`、`AttachedTo`、`MapEvent`、`Speed`）；要改变一支队伍的移动，应当改**输入**（调 `SetMove*`、改 `MoveTargetParty`、让 [PartySpeedModel](../PartySpeedModel) 给出新 `Speed`），然后让下一帧的 `InitializeCachedPartyVariables` 重新快照——**不要**试图直接改缓存里的 `NextPosition`/`IsMoving`，它们会在本帧被覆盖，且绕过 `SetPositionParallel` 的 locator/可见性/网格记账。

## 何时使用 / 何时不要使用

### 适合使用（理解层面）

- 阅读 [MobileParty](../MobileParty) 移动相关方法（`InitializeCachedPartyVariables`、`CommonMovingPartyTick`、`DoUpdatePosition`、`TryToMoveThePartyWithCurrentTickMoveData`）时，把它当作「这一帧移动数学的输入/输出便签」来理解代码流程。
- 排查「队伍为什么这一帧没动 / 走到了意料之外的位置」类问题时，明白这些值来自帧初快照 + 本帧推进，而不是长期状态。
- 需要判断一支队伍当前是否在某次移动分类里，直接读实时 `MobileParty` 的 `IsMoving`、`Army`、`AttachedTo`、`MapEvent`、`IsTransitionInProgress`——它们就是缓存快照的源头。

### 不要这样用

- **不要**尝试构造、持有或赋值这个结构：它是 `internal`，且只通过 `ref` 在内部移动方法间传递；任何对它的「修复式写入」都会被下一帧重新快照覆盖，且不会触发位置/可见性的正确记账。
- **不要**把缓存里的坐标（`CurrentPosition`/`NextPosition`）当作队伍的「权威位置」来用：权威位置是 `MobileParty.Position`（和 `MobilePartyLocator` 维护的网格），缓存里的 `NextPosition` 只是本帧**计划**移动到的点，实际写入 `Position` 发生在桶循环末尾。
- **不要**在读取它时假设值是「当前帧最新」：在 `RealTick` 之外的任意时刻读 `_cacheData[i].LocalVariables`，拿到的是上一帧残留的快照（或初始默认），已经陈旧。
- **不要**依赖它做跨存档/跨帧的持久逻辑：它从不序列化，存档里没有它。

## 依赖图

```text
实时 MobileParty 状态 (Position / IsMoving / Army / AttachedTo / MapEvent / IsTransitionInProgress / Speed)
        |
        |  InitializeCachedPartyVariables + CacheTargetPartyVariablesAtFrameStart （帧初快照）
        v
CachedPartyVariables （每帧瞬态便签，存于 CampaignTickCacheDataStore._cacheData[i].LocalVariables）
        |
        |  ParallelArrangePartyIndices 分类 -> 各桶并行推进
        |  CommonMovingPartyTick -> DoAiPathMode / DoUpdatePosition / TryToMoveThePartyWithCurrentTickMoveData
        v
真实 MobileParty.Position （经 SetPositionParallel 写回，带 Interlocked 网格记账）
        |
        |  影响
        v
MobilePartyLocator 网格、[MapVisibilityModel](../MapVisibilityModel) 可见性、[PartyNavigationModel](../PartyNavigationModel) 换乘判定
```

- **上游（谁持有 / 构造它）：**[MobileParty](../MobileParty) 定义并写入它（`InitializeCachedPartyVariables`、`CacheTargetPartyVariablesAtFrameStart`、`ComputeNextMoveDistance` 等）；[CampaignTickCacheDataStore](../CampaignTickCacheDataStore) 持有每队伍副本的数组并编排并行 tick。它的所有输入都来自 [MobileParty](../MobileParty) 的实时字段与 [Campaign](../Campaign) 的模型（`Speed` 经 [PartySpeedModel](../PartySpeedModel) 计算）。
- **下游（哪些系统读写它）：**[CampaignTickCacheDataStore](../CampaignTickCacheDataStore) 的并行循环读取并回写；[MobileParty](../MobileParty) 的 `CommonMovingPartyTick` / `DoAiPathMode` / `DoAIMove` / `GetTargetCampaignPosition` / `DoUpdatePosition` 在帧内推进它；`TryToMoveThePartyWithCurrentTickMoveData` 读取它来决定是否移动、并把 `NextPosition` 应用到真实坐标。
- **相关类型 / Behaviors / Models：** 分类用到的 [Army](../Army)（军队领袖 / 附属成员判定）、[MapEvent](../MapEvent)（`HasMapEvent`）、[PartyNavigationModel](../PartyNavigationModel)（海上/陆地换乘）、[MapVisibilityModel](../MapVisibilityModel)（帧末可见性刷新）、[CampaignVec2](../CampaignVec2)（所有坐标字段的类型）。换乘与可见性还间接依赖 [Settlement](../Settlement) 与据点状态。

## 风险

- **每帧瞬态、非持久**：缓存只在 `RealTick` 的一次完整循环里有效。循环之外（`CampaignBehavior` 的其它回调、UI 刷新、事件处理）读 `_cacheData[i].LocalVariables` 会得到上一帧残留或初始默认值，已陈旧。需要「当前」状态请读实时 `MobileParty` 属性，不要读缓存。
- **不序列化、读档重建**：它是 `internal struct` 且无 `[SaveableField]`，存档里根本不含它。不要在它上面挂任何跨存档/跨帧的持久逻辑；读档后由下一帧 `InitializeCachedPartyVariables` 重新从实时 `MobileParty` 计算。任何假设「缓存会随档保留」的设计都是错的。
- **帧内缓存新鲜度 vs 实时状态**：快照在帧初只做一次。若某个行为在 `InitializeCachedPartyVariables` 之后、本帧 tick 之前改了队伍的 `Army`/`AttachedTo`/`MapEvent`/`IsTransitionInProgress`，缓存标志不会反映该变化，队伍可能在这一帧被分错桶（例如仍以旧身份移动或静止）。结构性变更（加入/离开军队、附加/脱离、进入/离开地图事件）应放在安全时机，交给下一帧自然重新快照。
- **并行推进中的坐标观察**：位置在 `TWParallel.For` 内通过 `SetPositionParallel`（用 `Interlocked` 维护 locator 网格变更列表）逐队更新。与移动 tick 交错运行的 `CampaignBehavior` 可能看到坐标处于「更新到一半」的状态；以帧末的 `MobileParty.Position` 与 `MobilePartyLocator` 为权威，不要假设并行循环内的更新顺序。
- **直接改字段会绕过记账**：由于结构 `internal` 且只以 `ref` 传入内部方法，mod 代码无法合法直接赋值。概念上即便能改，`NextPosition`/`IsMoving` 之类也会在帧内被覆盖，且绕过 `SetPositionParallel` 对 locator 网格、可见性（`MapVisibilityModel`）、换乘状态（`PartyNavigationModel`）的全部正确记账，导致地图上「队伍坐标与网格索引不符」「看不见本应可见的队伍」等离奇坏状态。正确的「刷新路径」是改输入（移动意图、`MoveTargetParty`、`Speed`）让下一帧重新快照。
- **追击目标的帧初快照滞后**：朝另一支队伍移动时，用 `TargetPartyPositionAtFrameStart`（帧初快照）作为目标点。若目标本帧内移动很大，追随者这一帧会瞄准一个过时位置；引擎用 `IsTargetMovingAtFrameStart` 触发「无路径」回退来缓解，但仍意味着高速追击目标最多滞后一帧。自定义拦截/会合逻辑要为此留余量。

## 成员说明

字段都是 `internal`，仅供 `MobileParty` 内部移动方法读写；下面按它们真正持有/计算的内容说明。

### 身份与状态快照（帧初由 `InitializeCachedPartyVariables` 写入）

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `IsAttachedArmyMember`（`bool`） | 标记本队是某支军队的**附属成员**（非领袖）。写入于 `InitializeCachedPartyVariables`：当 `Army != null` 且本队不是 `Army.LeaderParty` 且 `AttachedTo != null` 时置 `true`，同时把 `IsMoving` 提升为「本队或军队领袖在移动」、把 `IsTransitionInProgress` 继承军队领袖的换乘状态。移动推进里 `DoAiPathMode`/`DoUpdatePosition` 据此跳过自身寻路、改为跟随军队领袖站位。 |
| `IsArmyLeader`（`bool`） | 标记本队是否是其 `Army` 的领袖（`Army.LeaderParty == this`）。决定本队走 `FillCurrentTickMoveDataForMovingArmyLeader`（`ComputeNextMoveDistanceForArmyLeader`，用 `CalculateSpeedForPartyUnified`）还是普通移动分支，也决定 `ParallelArrangePartyIndices` 把它分到「移动/静止军队领袖」桶。 |
| `IsMoving`（`bool`） | 本帧是否有移动意图，初值来自 `MobileParty.IsMoving`；若是附属军队成员则会被「或」上军队领袖的移动状态。是 `ParallelArrangePartyIndices` 分流的首要标志。注意它只代表「帧初意图」，实际本帧能否移动还要看 `NextMoveDistance > 0` 且 `HasMapEvent`/`BesiegedSettlement` 等条件（`TryToMoveThePartyWithCurrentTickMoveData` 内）。 |
| `HasMapEvent`（`bool`） | 本队是否处于 `MapEvent` 中（`MapEvent != null`）。帧内 `DoUpdatePosition` 用它决定移动方向指向 `Party.MapEvent.Position` 而非 `NextTargetPosition`；`TryToMoveThePartyWithCurrentTickMoveData` 在 `HasMapEvent` 时直接跳过移动。 |
| `IsTransitionInProgress`（`bool`） | 是否正在海上↔陆地的换乘（`IsTransitionInProgress`），初值来自实时标志，附属成员继承军队领袖的换乘状态。`CommonTransitioningPartyTick` 与 `CheckTransitionParallel` 据此决定是否继续/结束换乘。 |

### 位置与移动进度（帧内被推进方法反复改写）

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `CurrentPosition`（`CampaignVec2`） | 本帧「当前已经走到哪」的累积坐标，帧初 = `Position`，随后在 `DoAiPathMode` 沿路径逐段推进（`CurrentPosition = NextTargetPosition`）。它是寻路距离判定与换乘方向计算的基准，不是权威坐标——权威坐标是帧末由 `SetPositionParallel` 写回的 `MobileParty.Position`。 |
| `LastCurrentPosition`（`CampaignVec2`） | 上一次 `CurrentPosition` 的备份，`DoAiPathMode` 在沿路径消耗一段距离前先存一份，用于在路径耗尽 (`PathBegin >= Path.Size`) 时回退到上一有效点。 |
| `NextPosition`（`CampaignVec2`） | 本帧**计划**移动到的下一个点。`DoAiPathMode` 算完后、`TryToMoveThePartyWithCurrentTickMoveData` 用它决定是跟随军队领袖站位还是调用 `SetPositionParallel(in variables.NextPosition, ...)` 把真实 `Position` 推过去；换乘触发时此值还会被 `CheckTransitionParallel` 用来算方向并随后把 `NextMoveDistance` 清零。 |
| `NextMoveDistance`（`float`） | 本帧还能走的距离，= `Speed * dt`（由 `ComputeNextMoveDistance` / `ComputeNextMoveDistanceForArmyLeader` 在 `dt > 0` 时写入，否则 `0`）。`DoAiPathMode` 沿路径消耗它，`DoUpdatePosition` 用它裁剪实际移动步长，`TryToMoveThePartyWithCurrentTickMoveData` 以 `NextMoveDistance > 0 && IsMoving` 作为移动前提。 |
| `TargetPartyPositionAtFrameStart`（`CampaignVec2`） | 仅当 `MoveTargetParty != null` 时，由 `CacheTargetPartyVariablesAtFrameStart` 在帧初把目标队伍的位置快照进来（初值 `CampaignVec2.Invalid`）。`GetTargetCampaignPosition` 用它在「追击另一支队伍」模式下作为本帧目标点，避免每步重读目标实时位置造成并行竞争。 |
| `IsTargetMovingAtFrameStart`（`bool`） | 帧初目标队伍是否「在移动或换乘中」的快照。`GetTargetCampaignPosition` 中若目标点对该队伍的导航能力无效且目标仍在移动，则强制回退到「无路径、原地」模式并要求 AI 重算目标；是追击滞后缓解机制的一部分。 |

### 调试

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `ToString()`（`public override`） | 仅把上述标志与坐标拼成多行字符串用于调试/日志，无副作用，不参与任何移动或存档逻辑。 |

## 示例

`CachedPartyVariables` 是 `internal`，mod 无法直接构造或读取它。下面的示例演示两件真实的事：**(1)** 用公开 API 读取缓存所「镜像」的那些实时标志（这才是你在游戏里该读的来源）；**(2)** 通过改输入（`SetMove*` 与 `Speed`）让下一帧的 `InitializeCachedPartyVariables` 自然重算，而不是去碰缓存。

### 示例 1：读取一支队伍「缓存会快照」的实时状态

这就是 `InitializeCachedPartyVariables` 每帧所依据的输入。想判断一支队伍本帧会被怎样分类，读这些实时属性即可：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;

// 真实获取路径：从当前 Campaign 取到具体队伍（此处以玩家队伍为例）
MobileParty party = MobileParty.MainParty;
if (party != null)
{
    bool isMoving = party.IsMoving;
    bool inMapEvent = party.MapEvent != null;
    bool isArmyLeader = party.Army != null && party.Army.LeaderParty == party;
    bool isAttachedMember = party.Army != null && party.AttachedTo != null && party.Army.LeaderParty != party;
    bool transitionInProgress = party.IsTransitionInProgress;
    CampaignVec2 currentPos = party.Position;
}
```

### 示例 2：通过改输入驱动下一帧的缓存重算（正确刷新路径）

不要写缓存字段。要改变一支队伍的移动，下达移动意图并依赖 `PartySpeedModel` 给出的 `Speed`；下一帧 `InitializeCachedPartyVariables` 会把新的 `IsMoving`/`Speed` 快照进去，`NextMoveDistance` 自然变成 `Speed * dt`：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;

MobileParty party = MobileParty.MainParty;
Settlement target = Settlement.CurrentSettlement;
if (party != null && target != null && party.Army == null)
{
    // 下达「前往据点」意图 -> 下帧 InitializeCachedPartyVariables 把 IsMoving 快照为 true
    party.SetMoveGoToSettlement(target);
    // Speed 来自 PartySpeedModel；本帧可移动距离 = Speed * dt，由 ComputeNextMoveDistance 写入缓存
    float speed = party.Speed;
}
```

如果目标是追击另一支队伍，用 `SetMoveEngageParty`，引擎会在 `CacheTargetPartyVariablesAtFrameStart` 把对方位置快照进 `TargetPartyPositionAtFrameStart`，由 `GetTargetCampaignPosition` 在本帧使用。

## 参见

- **↑ 父级：** [战役 API 索引](../)
- **↔ 相关：** [MobileParty](../MobileParty) · [CampaignTickCacheDataStore](../CampaignTickCacheDataStore) · [Army](../Army) · [MapEvent](../MapEvent) · [PartySpeedModel](../PartySpeedModel) · [PartyNavigationModel](../PartyNavigationModel) · [MapVisibilityModel](../MapVisibilityModel) · [CampaignVec2](../CampaignVec2)
