---
title: "EmbarkDisembarkData"
description: "记录移动队穿越陆海边界所需的导航网格边缘、过渡起止点与 dead zone 判定；由 NavigationHelper 的真实工厂产生。"
---
# EmbarkDisembarkData

**Namespace:** `Helpers`
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EmbarkDisembarkData`（定义于 `NavigationHelper` 内的嵌套类型）
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/Helpers/NavigationHelper.cs`

## 一句话职责

把一次陆地/海上导航切换计算的几何结果交给 `MapState` 与 `MobileParty`：它不执行登船或下船，只说明边界在哪里、过渡从哪里开始、应到哪里结束，以及玩家目标是否落在 dead zone。

## 心智模型

把它当作一次移动 tick 的短生命周期结果，而不是可配置的导航服务。`NavigationHelper.GetEmbarkDisembarkDataForTick` 根据当前位置、方向、`Campaign.Current.MapSceneWrapper` 和 `Campaign.Current.Models.PartyNavigationModel` 计算普通移动队的过渡；玩家路径则由 `GetEmbarkAndDisembarkDataForPlayer` 在此基础上结合玩家的移动目标重新判断 dead zone。随后 `MapState.ProcessTravel` 可能把玩家目标改到过渡起点/终点，`MobileParty.CheckTransitionParallel` 再依据同一数据真正初始化转换。

因此，mod 通常只应读取工厂返回值来观察或诊断导航，不应把它当作替代 `MapState.ProcessTravel` 或 `MobileParty` 内部转换状态机的入口。不要从字段反推“已经登船”：`IsValidTransition` 只是表示几何过渡有效，真正的转换仍由 `MobileParty` 的导航逻辑执行。

## 依赖关系：数据来源与下游

1. `NavigationHelper.GetEmbarkDisembarkDataForTick(position, direction)` 调用内部的边界计算。它从当前导航面沿方向寻找边缘，并用 `PartyNavigationModel.GetEmbarkDisembarkThresholdDistance()` 构造两侧候选点；无法得到跨地形过渡时返回 [`Invalid`](#invalid)。
2. `NavigationHelper.GetEmbarkAndDisembarkDataForPlayer(...)` 先执行 tick 计算；当初始过渡两侧属于同一种可导航地形时，它还会从玩家移动目标的导航面重新计算，再依据目标距离判断是否命中 dead zone。
3. [`MapState.ProcessTravel`](../../campaign/MapState) 对主队调用玩家工厂。目标在 dead zone 时，它选择 `TransitionStartPosition` 或 `TransitionEndPosition`，然后仍交给 `NavigationHelper.CanPlayerNavigateToPosition` 和 `MobileParty.SetMoveGoToPoint` 做最终导航设置。
4. [`MobileParty`](../../campaign/MobileParty) 在移动 tick 与 `CheckTransitionParallel` 中读取结果；只有过渡有效、目标不在己方 dead-zone 面、地形模型允许且距离条件满足时，才调用内部的 `InitializeNavigationTransitionParallel`。

相关的几何值使用 [`CampaignVec2`](../../campaign/CampaignVec2) 表示，因此每个位置同时携带二维坐标和 `IsOnLand` 地形侧信息。地形能否由当前移动队导航由 [`PartyNavigationModel`](../../campaign/PartyNavigationModel) 决定，而不是由这个数据类自行决定。

## 关键成员

### `Invalid`

`public static readonly EmbarkDisembarkData Invalid`

无有效过渡时返回的共享哨兵。源码把 `IsValidTransition` 设为 `false`，三个位置设为 `CampaignVec2.Invalid`，两个 dead-zone 标记设为 `false`。读取工厂结果时应先检查 `IsValidTransition`，不要对无效位置调用 `Face`、`Distance` 或把它作为移动目标。

### `IsValidTransition`

`public bool IsValidTransition`

表示 `TransitionEndPosition` 是否通过有效性检查。`GetEmbarkDisembarkDataForTick` 只有在结束位置有效时才创建有效结果；如果边界两侧都落在当前导航面，内部计算会将起止位置都置为无效，工厂最终返回 `Invalid`。它表示“可以继续评估转换”，不表示转换已经开始或已完成。

### `NavMeshEdgePosition`

`public CampaignVec2 NavMeshEdgePosition`

当前位置沿移动方向遇到的导航网格边缘，保存当前地形侧的 `CampaignVec2`。`MobileParty.CheckTransitionParallel` 用它计算队伍到边缘的距离，并与起点到边缘的阈值比较，决定是否进入转换。

### `TransitionStartPosition` 与 `TransitionEndPosition`

```csharp
public CampaignVec2 TransitionStartPosition;
public CampaignVec2 TransitionEndPosition;
```

起点位于当前移动侧，终点在相反的陆/海侧；两者由边缘和 `GetEmbarkDisembarkThresholdDistance()` 推导。如果计算出的起点无效，tick 工厂会退回使用传入的 `position` 作为起点；终点仍必须有效，否则结果是 `Invalid`。玩家处理 dead zone 时，未进行中的转换使用起点，进行中的转换使用终点，这就是 `MapState.ProcessTravel` 读取两个字段的原因。

### `IsTargetingTheDeadZone`

`public bool IsTargetingTheDeadZone`

只在玩家工厂的目标判断阶段设置。它表示玩家目标位于陆海切换的模糊边界，`MapState.ProcessTravel` 会把目标改为明确的过渡起点或终点，避免把点击位置直接当成普通陆地/海上目标。tick 工厂返回的结果不会设置这个标记。

### `IsTargetingOwnSideOfTheDeadZone`

`public bool IsTargetingOwnSideOfTheDeadZone`

当目标确实在 dead zone 且目标导航面仍等于过渡起点导航面时为 `true`。`MobileParty` 用它阻止在己方一侧重复初始化转换，并在已有转换的移动检查中决定是否取消。只有先确认 `IsTargetingTheDeadZone`，这个标记才有业务含义。

### 构造函数

```csharp
public EmbarkDisembarkData(
    bool isValid,
    CampaignVec2 navMeshEdgePosition,
    CampaignVec2 transitionStartPosition,
    CampaignVec2 transitionEndPosition,
    bool isTargetingTheDeadZone,
    bool isTargetingOwnSideOfTheDeadZone);
```

构造函数是公开的，但它只负责逐字段赋值；它不会查询地图、校验导航面，也不会自动维护标记之间的关系。除非在诊断测试中明确需要构造数据，否则不要手工 `new` 一个结果来驱动游戏移动。

## 真实获取示例：只读玩家过渡结果

下面的路径使用游戏当前主队和其真实移动目标。它适合在地图导航调试代码中观察转换，不代替游戏设置移动目标的流程；正常玩家移动应让 [`MapState.ProcessTravel`](../../campaign/MapState) 处理。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Helpers;
using TaleWorlds.Library;

MobileParty party = MobileParty.MainParty;
CampaignVec2 target = party.MoveTargetPoint;

Campaign campaign = Campaign.Current;
if (campaign != null && party.HasNavalNavigationCapability && target.IsValid())
{
    Vec2 direction = (target.ToVec2() - party.Position.ToVec2()).Normalized();
    NavigationHelper.EmbarkDisembarkData data =
        NavigationHelper.GetEmbarkAndDisembarkDataForPlayer(
            party.Position, direction, target, target.IsOnLand);

    if (data.IsValidTransition && !data.IsTargetingOwnSideOfTheDeadZone)
    {
        CampaignVec2 edge = data.NavMeshEdgePosition;
        CampaignVec2 end = data.TransitionEndPosition;
        bool needsExplicitTransition = data.IsTargetingTheDeadZone;
    }
}
```

这里的 `target.IsOnLand` 必须来自实际的 `CampaignVec2` 目标，不能用固定布尔值替代。示例只读取字段；它没有调用内部的 `InitializeNavigationTransitionParallel`，因为该方法属于 `MobileParty` 的内部状态机。

## 何时不要使用

- 不要用它保存或恢复导航状态。它是由当前地图网格、方向和模型阈值即时算出的瞬时结果，不是存档契约。
- 不要在没有活动战役或地图场景的初始化阶段调用工厂。工厂会访问 `Campaign.Current.MapSceneWrapper` 和 `Campaign.Current.Models.PartyNavigationModel`，空上下文会导致空引用或无效的地图查询。
- 不要把 `Invalid` 当成普通坐标传给 `SetMoveGoToPoint`，也不要在检查 `IsValidTransition` 前读取三个位置的 `Face` 或距离。
- 不要只修改返回对象的布尔字段来伪造登船/下船结果。游戏是否切换地形、何时开始或取消转换，仍由 `MapState` 与 `MobileParty` 的导航状态机决定。
- 不要跨多个 tick 缓存结果并假定仍然准确；队伍位置、移动方向、目标导航面或模型阈值变化后，边缘和起止点都可能已经过期。

## 风险与版本边界

最常见的失败不是字段本身抛异常，而是把无效几何继续传入导航流程：无效的 `CampaignVec2` 可能让后续导航面查询失败，错误的 dead-zone 处理则会让主队在陆海边界反复取消或重新开始转换。读值时遵守“先有效性、后位置”的顺序，并让游戏已有的 `CanPlayerNavigateToPosition` 和 `SetMoveGoToPoint` 做最终判定。

这个页面按 v1.4.5 `NavigationHelper.cs` 解释。`EmbarkDisembarkData` 不承担存档字段、事件发布或模型替换职责；它依赖当前 `Campaign`、地图场景和 `PartyNavigationModel` 的运行时实现。若 mod 替换了 `PartyNavigationModel`，阈值、可导航地形和 `Invalid` 出现频率都可能改变，不能把默认模型的距离假设硬编码到自己的逻辑中。

## ↑ 父级导航

- [系统 API 索引](../)
- [NavigationHelper](../NavigationHelper)

## ↔ 同级与相关类型

- [CampaignVec2](../../campaign/CampaignVec2)：位置值及其 `Face`、陆海侧和有效性。
- [PartyNavigationModel](../../campaign/PartyNavigationModel)：可导航地形、海军能力与过渡阈值的规则来源。
- [MobileParty](../../campaign/MobileParty)：移动 tick、转换开始/取消和主队状态机。
- [MapState](../../campaign/MapState)：玩家点击地图目标后处理 dead zone 并设置移动目标。
- [系统 API 目录](../)
