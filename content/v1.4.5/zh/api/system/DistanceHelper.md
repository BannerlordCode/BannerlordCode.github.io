---
title: "DistanceHelper"
description: "DistanceHelper 是战役地图距离计算的静态门面，按移动队导航能力、港口和陆海转换，把 Settlement、MobileParty 或地图点交给当前 MapDistanceModel 计算。"
---
# DistanceHelper

**命名空间:** `Helpers`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public static class DistanceHelper`  
**基类:** 无  
**源文件:** `bin/TaleWorlds.CampaignSystem/Helpers/DistanceHelper.cs`

## 一句话职责

它把聚落、移动队和地图点之间的各种距离请求统一转给当前战役的 `MapDistanceModel`，并额外处理港口选择、陆海比例、导航能力和最大距离比较，因此它是距离查询边界而不是寻路状态的所有者。

## 心智模型

`DistanceHelper` 不缓存路线，也不移动任何移动队；它只是根据输入的 `MobileParty.NavigationType` 选择陆路、海路或全部能力，再调用 `Campaign.Current.Models.MapDistanceModel`。当起点或终点有港口时，它会比较进出港组合，并通过 `out` 参数报告是否选用了港口以及陆海比例。调用方拿到的是当前模型的计算结果，不是一个可继续执行的路径对象。

它被 `SettlementHelper`、AI 和延迟传送等系统反复调用，所以同一个地图点在不同导航能力下可能有不同结果。`float.MaxValue` 表示当前输入没有可用的候选距离；不能把它当作一个正常地图距离继续平方或拿去做移动时间估算。

## 何时使用，何时不要用

- 需要比较移动队到聚落、聚落到聚落、移动队到移动队或地图点的战役距离时使用，并传入调用方真实的导航能力。
- 需要判断阈值时使用带 `maxDistance` 的 overload，同时读取 `out distance` 和 `out landRatio`，不要自己重复实现港口和转换成本判断。
- 不要把它当作实时寻路器、移动队速度模型或战斗距离；实际规则应回到 [MapDistanceModel](../../campaign/MapDistanceModel) 或对应的 AI/移动队模型。
- 不要在 `Campaign.Current` 尚未建立、输入实体已被销毁或 `NavigationType` 与实体能力不匹配时调用；先在战役生命周期内取得有效对象。

## 依赖关系

```text
Campaign.Current.Models.MapDistanceModel
  -> DistanceHelper overload family
  -> SettlementHelper / AI / delayed teleportation
  -> distance, port flags, landRatio
```

- 规则提供者：[MapDistanceModel](../../campaign/MapDistanceModel) · [GameModels](../../campaign/GameModels)。
- 输入实体：[Settlement](../../campaign/Settlement) · [MobileParty](../../campaign/MobileParty) · [PartyBase](../../campaign/PartyBase)。
- 典型消费者：[SettlementHelper](../SettlementHelper)；这些结果仍应由上层模型决定如何解释。

## 公开成员

| 成员族 | 成员 | 用途与调用时机 |
|---|---|---|
| 常量 | `BirdFlyDistanceSquaredThresholdForMobilePartyToMobilePartyDistance` | 移动队间鸟飞距离的平方阈值；它是比较用常量，不是距离查询结果的单位转换。 |
| 聚落到聚落 | `FindClosestDistanceFromSettlementToSettlement` 的三种普通 overload | 比较默认、港口起点、港口终点和双港组合；带 `out bool isFromPort`、`out bool isTargetingPort`、`out float landRatio` 的版本保留完整决策结果。 |
| 移动队到聚落 | `FindClosestDistanceFromMobilePartyToSettlement` 的三种距离 overload 与一个 `maxDistance` overload | 起点在聚落内时复用聚落入口逻辑，否则直接用移动队到聚落的模型距离；海上导航会单独尝试目标港口。 |
| 移动队到移动队 | `FindClosestDistanceFromMobilePartyToMobileParty` 的三种 overload | 处理双方当前聚落、海陆能力和陆海转换，阈值版本返回 `distance < maxDistance`。 |
| 点与聚落 | `FindClosestDistanceFromSettlementToPoint`、`FindClosestDistanceFromMapPointToSettlement` | 在聚落、地图点和港口之间比较可达距离，并报告港口与陆海比例。 |
| 移动队到点 | `FindClosestDistanceFromMobilePartyToPoint` 的两个 overload | 起点在聚落内时考虑入口和转换成本，否则直接调用地图距离模型。 |
| 精确移动队距离 | `GetDistanceBetweenMobilePartyToMobileParty` | 以双方当前导航面、门口/港口位置和模型转换调整计算更精细的移动队间距离；没有有效入口时可能返回 `float.MaxValue`。 |

## 真实示例

```csharp
using System.Linq;
using Helpers;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;

MobileParty party = MobileParty.MainParty;
Settlement target = Settlement.All.FirstOrDefault(settlement => settlement.IsTown && settlement != party.CurrentSettlement);

if (target != null)
{
    float distance = DistanceHelper.FindClosestDistanceFromMobilePartyToSettlement(
        party,
        target,
        party.NavigationCapability,
        out bool isTargetingPort,
        out float landRatio);
}
```

此路径与 `SettlementHelper` 的调用方式一致：移动队由 `MobileParty.MainParty` 取得，导航能力来自移动队本身，调用方保留港口和陆海比例，而不是假设结果永远是陆路距离。

## 风险与存档边界

- 方法本身不修改存档实体，但错误的 `NavigationType` 会让 AI、传送或遇敌判定选择错误路线；不要用 `Default` 冒充海上能力。
- `Settlement`、`MobileParty` 或 `IMapPoint` 必须仍属于当前 `Campaign`。加载中、销毁后或跨战役缓存的引用可能导致空引用或过期位置。
- 先判断 `float.MaxValue` 再计算时间、平方距离或阈值；否则不可达结果会溢出上层数值逻辑。
- `landRatio` 是模型对当前最佳路径的陆海解释，不是“已移动了多少陆路”的持久状态；不要写回实体或存档。

## 版本注记

v1.4.5 的实现已把港口和海上导航纳入同一套 overload 选择，并通过 `MapDistanceModel` 处理陆海转换成本。不同版本的港口模型参数可能变化，Mod 不应复制内部常量。

## 导航

- [↑ API 系统索引](../)
- [↔ SettlementHelper](../SettlementHelper)
- [相关：MapDistanceModel](../../campaign/MapDistanceModel)
- [相关：MobileParty](../../campaign/MobileParty)
