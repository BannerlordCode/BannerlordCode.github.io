---
title: "AiHelper"
description: "战役 AI 的导航选择门面：按 MobileParty 的陆路/海路能力、据点港口和 MapDistanceModel 选择导航类型与调整后距离。"
---
# AiHelper

**命名空间：** `Helpers`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public static class AiHelper`  
**基类：** `System.Object`  
**源码：** `bin/TaleWorlds.CampaignSystem/Helpers/AiHelper.cs`

## 一句话职责

`AiHelper` 为 Campaign AI 比较移动队伍到据点或另一支移动队伍的陆路、海路和陆海混合距离，并通过 `out` 参数返回推荐的 `MobileParty.NavigationType`、距离以及是否从港口出发。

## 心智模型

这个类没有实例状态，也不创建队伍、设置 AI 行为或推进地图位置。两个公开方法都会先把结果初始化为 `NavigationType.None` 和 `float.MaxValue`，再根据来源队伍的陆路/海路能力调用 [DistanceHelper](../DistanceHelper) 和当前 [MapDistanceModel](../../campaign/MapDistanceModel) 比较候选路线。

到据点的方法还会考虑：

- 当前队伍是否已经在目标据点；这种情况下返回零距离，并按 `isTargetingPort` 选择 Default 或 Naval。
- `isTargetingPort` 是否要求驶向港口；海路距离会乘以基于船速、安全航行时长、船员容量和队伍人数的航海放大系数。
- 来源据点是否有港口；有港口时会比较从港口和非港口出发的混合路线，并通过 `isFromPort` 报告胜出的起点。

队伍到队伍的方法比较 Default、Naval 和 All 三种距离。两种方法都用 `Campaign.MapDiagonal * 5f` 作为内部可行性上限；调用方应把 `None`/`float.MaxValue` 当作“当前没有可用导航结果”，不要把它当成一条需要执行的路线。

## 什么时候使用，什么时候不要使用

- **适合：** AI 行为需要在进入 `GoToSettlement`、巡逻、军团跟随或接近另一队伍前选择导航类型和距离排序。
- **适合：** 诊断一个当前 Campaign 中的移动队伍为何选择陆路、海路或混合路线。
- **不要：** 用它移动队伍、改变 `MobileParty.Ai`、创建船只或保证路线最终可达；这些职责属于移动队伍 AI、导航系统和现有 Campaign 行为。
- **不要：** 直接复制航海放大系数。它依赖 `Campaign.Current`、船只状态和可替换的 `MapDistanceModel`，版本间常量可能变化。
- **不要：** 在没有活动 Campaign、来源队伍或目标据点时调用；方法内部会读取 Campaign 和 Model，空引用不能由 `out` 参数修复。

## 方法一：移动队伍到据点

### GetBestNavigationTypeAndAdjustedDistanceOfSettlementForMobileParty

```csharp
public static void GetBestNavigationTypeAndAdjustedDistanceOfSettlementForMobileParty(
    MobileParty mobileParty,
    Settlement settlement,
    bool isTargetingPort,
    out MobileParty.NavigationType bestNavigationType,
    out float bestNavigationDistance,
    out bool isFromPort)
```

它以当前队伍的能力为约束，比较通往目标据点的路线。返回的距离已经把海路成本调整到该队伍的航行条件；它不是 `MapDistanceModel` 原始的几何距离。

真实 AI 调用会先取得 `MobileParty` 和目标 `Settlement`，再用 `NavigationType.None` 判断是否跳过本次行为：

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Library;
using Helpers;

public static void InspectSettlementNavigation()
{
    if (Campaign.Current == null)
    {
        return;
    }

    MobileParty mobileParty = MobileParty.MainParty;
    Settlement target = Campaign.Current.Settlements
        .FirstOrDefault(settlement => settlement.HasPort && !settlement.IsUnderSiege);
    if (mobileParty == null || target == null)
    {
        return;
    }

    bool isTargetingPort = target.HasPort && mobileParty.HasNavalNavigationCapability;
    AiHelper.GetBestNavigationTypeAndAdjustedDistanceOfSettlementForMobileParty(
        mobileParty,
        target,
        isTargetingPort,
        out MobileParty.NavigationType navigationType,
        out float distance,
        out bool isFromPort);

    if (navigationType != MobileParty.NavigationType.None)
    {
        Debug.Print($"{navigationType}: {distance}, fromPort={isFromPort}");
    }
}
```

若返回 `None`，应让上层 AI 选择另一个目标或等待状态，而不是把 `float.MaxValue` 交给移动命令。

## 方法二：移动队伍到移动队伍

### GetBestNavigationTypeAndDistanceOfMobilePartyForMobileParty

```csharp
public static void GetBestNavigationTypeAndDistanceOfMobilePartyForMobileParty(
    MobileParty mobileParty,
    MobileParty toMobileParty,
    out MobileParty.NavigationType bestNavigationType,
    out float bestNavigationDistance)
```

这个方法只返回推荐导航类型和距离，不返回港口起点。它仍然会根据来源队伍的船只耐久、安全航行时长、可用船员容量和附属队伍人数调整海路候选；目标队伍不等于“已经可以交战”。遇到 `NavigationType.None` 时，AI 行为通常应放弃当前接近评分。

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Library;
using Helpers;

public static void InspectPartyNavigation()
{
    if (Campaign.Current == null)
    {
        return;
    }

    MobileParty mobileParty = MobileParty.MainParty;
    MobileParty otherParty = MobileParty.All
        .FirstOrDefault(candidate => candidate != mobileParty && candidate.IsActive);
    if (mobileParty == null || otherParty == null)
    {
        return;
    }

    AiHelper.GetBestNavigationTypeAndDistanceOfMobilePartyForMobileParty(
        mobileParty,
        otherParty,
        out MobileParty.NavigationType navigationType,
        out float distance);
    Debug.Print($"Target {otherParty.Name}: {navigationType}, {distance}");
}
```

## 依赖关系

- [MobileParty](../../campaign/MobileParty) 提供 `NavigationType`、陆路/海路能力、当前位置、船只、成员 roster 和附属队伍；AiHelper 只读取这些状态。
- [Settlement](../../campaign/Settlement) 提供港口、围城和目标位置；据点本身不执行移动。
- [DistanceHelper](../DistanceHelper) 负责调用当前规则模型计算各种来源/目标组合的地图距离。
- [MapDistanceModel](../../campaign/MapDistanceModel) 是距离规则提供者；`AiHelper` 再叠加队伍航海条件和海路成本，不应缓存或替换模型结果。
- [Campaign](../../campaign/Campaign) 提供 `Campaign.Current`、`MapDiagonal`、速度估计和 `CampaignShipDamageModel`；这些值要求战役已初始化。
- 原版 [Army](../../campaign/Army)、`AiVisitSettlementBehavior`、`AiPatrollingBehavior` 和 `AiMilitaryBehavior` 使用返回结果构造后续 AI 行为；AiHelper 不负责这些行为的生命周期。

## 风险与版本说明

- `out` 参数总会被赋值，但这不代表输入合法；仍需在调用前检查 Campaign、队伍和据点，并在调用后检查 `NavigationType.None`。
- `isTargetingPort` 是目标意图，不是“只允许海路”的硬开关。方法仍可能比较混合路线，并根据最终距离返回 `All`。
- 返回距离会受船只生命值、船员容量、附属队伍人数和安全航行时长影响；它不能直接转换成到达时间，速度模型还需要额外参与。
- 地图事件、围城封锁和队伍当前据点会改变可用路线。调用结果只代表当前瞬间，不能跨 tick 或存档长期缓存。
- v1.4.5 的海路放大逻辑由源码内部维护；Mod 应调用 AiHelper/DistanceHelper，不要复制常量以避免跨版本漂移。

## 导航

- ↑ 父级：[`api/system`](../)
- ↔ 同级：[DistanceHelper](../DistanceHelper) · [TownHelpers](../TownHelpers) · [MobilePartyHelper](../MobilePartyHelper)
- 相关：[MobileParty](../../campaign/MobileParty) · [Settlement](../../campaign/Settlement) · [MapDistanceModel](../../campaign/MapDistanceModel) · [Campaign](../../campaign/Campaign) · [Army](../../campaign/Army)
- English: [AiHelper](../../../../en/api/system/AiHelper)
