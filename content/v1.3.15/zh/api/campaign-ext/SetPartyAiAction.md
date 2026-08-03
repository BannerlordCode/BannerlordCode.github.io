---
title: "SetPartyAiAction"
description: "把 AI 决策提交为一致的部队移动目标，协调行为、目标对象、海陆导航、港口过渡及军团领袖的战略元数据。"
---
# SetPartyAiAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`

**模块：** `TaleWorlds.CampaignSystem`

**类型：** `public static class SetPartyAiAction`

**基类：** 无（静态类）

**源文件：** `TaleWorlds.CampaignSystem/Actions/SetPartyAiAction.cs`

## 核心定位

把 AI 选出的战略意图一次写入 `MobileParty` 的移动状态，并在需要时同步军团与港口导航语义。

## 概述

`AiPartyThinkBehavior` 每小时比较候选 `AiBehaviorData` 后，通过本类把“去聚落、巡逻、劫掠、围城、追击、防守、护送或回到最近陆地”落实到地图部队。商队、村民和任务 Behavior 也会在选出目标后直接调用对应入口。虽然方法名以 `GetActionFor*` 开头，它们全都返回 `void`，是有副作用的命令，不是查询。

## 心智模型

地图 AI 不是单个 `DefaultBehavior` 字段。一个有效命令至少要协调行为枚举、目标聚落或目标部队、目标坐标、`DesiredAiNavigationType`，还可能标记下一帧从港口退出。底层 `MobileParty.SetMove*` 会重置旧移动参数并令短期 AI 重新计算；若执行者是军团领袖，部分聚落命令还会更新 `ArmyType` 与 `AiBehaviorObject`。

所以应把本类看作“AI 决策的提交层”。它不负责判断目标是否合理、双方是否敌对、部队能否航海或当前战斗是否允许改目标；这些条件由上游 AI、任务或 Behavior 决定。对于保持原地，官方直接使用 `MobileParty.SetMoveModeHold()`，本类没有 Hold 入口。

## ApplyInternal 契约

私有 `ApplyInternal` 根据内部原因枚举选择一个 `SetMove*`。多数分支先比较当前行为、目标和导航参数，状态相同时避免重复重置路径；发生变化时按以下顺序提交：

```text
上游选出 MobileParty + 目标 + NavigationType
  -> 如需从港口出发且尚未过渡，标记下一帧退出港口
  -> MobileParty.SetMove* 重置旧移动参数并写入新目标
  -> 聚落类命令可能同步军团领袖的 ArmyType / AiBehaviorObject
  -> 后续地图 AI tick 重新计算短期行为与路径
```

该 Action 不派发独立 `CampaignEvent`。它的下游级联来自 `MobileParty` 属性 setter 设置的 AI dirty 状态，以及军团战略元数据变化。

## 关键入口与调用时机

| 入口组 | 写入的目标与副作用 | 典型时机 |
|---|---|---|
| `GetActionForVisitingSettlement` | 设为 `GoToSettlement`，选择城门或港口；军团领袖同步为 Defender 并记录聚落。 | 商队 `ThinkNextDestination`、村民返程、任务队伍前往指定聚落后。 |
| `GetActionForPatrollingAroundSettlement` / `GetActionForPatrollingAroundPoint` | 设为 `PatrolAroundPoint`；聚落版本保留 `TargetSettlement`，并可同步军团防守目标。坐标版本虽然接收 `isFromPort`，当前内部巡逻分支并不读取它。 | 巡逻 AI 或任务队伍需要在聚落/坐标周围活动时；坐标版本不能代替港口退出流程。 |
| `GetActionForRaidingSettlement` / `GetActionForBesiegingSettlement` | 写入劫掠或围城目标；军团领袖分别同步 Raider 或 Besieger。 | 上游确认战争关系、目标有效且当前 `MapEvent` 不已经执行相同进攻后。 |
| `GetActionForEngagingParty` / `GetActionForGoingAroundParty` | 写入目标 `MobileParty` 并追击或绕行。 | AI 已确认目标仍活跃、可接触且当前不受战斗流程锁定时。 |
| `GetActionForDefendingSettlement` | 防守聚落或其港口；军团领袖同步 Defender。 | 聚落受威胁且部队尚未位于目标聚落时。 |
| `GetActionForEscortingParty` | 跟随目标部队；可继承面向港口的目标语义。 | 军团附属部队跟随领袖、任务护送或商队脚本。 |
| `GetActionForMovingToNearestLand` | 切到 `MoveToNearestLandOrPort`，可记录一个港口聚落；底层按部队能力选择 Naval 或 All。 | 海上部队失去继续航海条件，需要恢复到陆地/港口时。 |

## 海陆与港口参数

`MobileParty.NavigationType` 是 Flags：`Default` 表示陆路，`Naval` 表示海路，`All` 允许两者。`isFromPort` 不是“目标是港口”，而是指这次命令从港口出发；Action 会在过渡尚未进行时设置 `StartTransitionNextFrameToExitFromPort`。`isTargetingPort` 决定目标取聚落的港口位置还是城门位置。两者含义不同，不能互换。

## 依赖与上下游

| 依赖 | 关系 |
|---|---|
| [`MobileParty`](../../campaign/MobileParty) | 状态所有者；`SetMove*` 重置旧移动参数并写入行为、目标、位置和导航类型。 |
| [`Settlement`](../../campaign/Settlement) | 提供城门、港口、围城和防守目标。传入已销毁或不兼容的聚落会留下失效 AI 目标。 |
| [`AiBehavior`](../AiBehavior) | 上游思考结果与 `DefaultBehavior` 的共同枚举；名称相同不代表目标参数也相同。 |
| [`Army`](../Army) | 当 owner 是军团领袖时，访问聚落、巡逻、劫掠、围城和防守会同步军团类型与战略对象。 |
| [`CampaignEvents`](../CampaignEvents) | 官方 AI 由小时 tick 驱动，但本 Action 本身不广播事件；模组通常从事件监听器取得有效部队后再提交命令。 |

## 不要直接改字段

不要分别写 `DefaultBehavior`、`TargetParty`、目标坐标或 `DesiredAiNavigationType`。这些字段必须彼此一致，底层 setter 还负责重置路径与标记 AI 重算。直接调用某个 `MobileParty.SetMove*` 虽能建立基本目标，却会绕过本 Action 的港口退出标记和军团领袖元数据；模组在复用官方战略意图时应优先走这里。只有本类没有覆盖的明确动作，例如 Hold，才调用对应的完整 `SetMove*` 方法。

## 生命周期与坏档风险

- 所有入口都假定 `owner` 与所需目标非空、仍活跃且属于当前 Campaign；没有防御性校验。失效目标可能立即空引用，或在稍后的 AI tick/pathfinding 中崩溃。
- 不要在 `MapEvent`、正在进行的围城突击、港口过渡或 Party 移除回调中强行改目标。官方 `AiPartyThinkBehavior` 会尊重 `DoNotChangeBehavior`，并在劫掠/围城已经发生时跳过重复提交。
- `NavigationType` 必须符合部队能力与目标位置。把纯陆地部队送上 Naval 路径，或把无港聚落标为港口目标，可能导致找不到路径、永久停滞或加载后反复重算。
- 目标部队和聚落会进入 `MobileParty` 的可保存 AI 状态；如果模组在保存前删除了目标却没有先让追随者 Hold 或改道，加载后会恢复出悬空战略意图。销毁目标前先收束引用它的部队。
- `StartTransitionNextFrameToExitFromPort` 是下一帧语义，不应由模组持久缓存或在加载同步阶段伪造。等 Campaign 与地图导航恢复后再提交新命令。
- 高频 tick 中反复提交不同参数会不断重置路径。只在决策确实变化时调用，并避免多个 Behavior 同时争夺同一部队。
- v1.3.15 与 v1.4.5 的反编译实现中，Engage 和 GoAround 的去重条件比较的是 `owner` 与目标部队，而不是现有 `TargetParty`；通常会再次调用底层 `SetMove*`。不要在每帧无条件重复提交这两个命令。

## 真实获取路径示例

下面从官方 `CampaignEvents.HourlyTickPartyEvent` 获取当前有效部队，再从其 `HomeSettlement` 取得真实目标。示例用模组创建部队的稳定 `StringId` 前缀限定所有权，避免接管原生商队 AI。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;

public override void RegisterEvents()
{
    CampaignEvents.HourlyTickPartyEvent.AddNonSerializedListener(this, OnHourlyTickParty);
}

private void OnHourlyTickParty(MobileParty party)
{
    Settlement home = party.HomeSettlement;
    if (party.StringId.StartsWith("my_mod_caravan_") &&
        party.IsActive && party.MapEvent == null &&
        home != null && party.CurrentSettlement != home)
    {
        SetPartyAiAction.GetActionForVisitingSettlement(
            party,
            home,
            MobileParty.NavigationType.Default,
            isFromPort: false,
            isTargetingPort: false);
    }
}
```

`RegisterEvents` 应位于 `CampaignBehaviorBase` 派生类；非序列化监听器会随 Behavior 生命周期重新注册，不能在每次加载后重复添加匿名监听器。

## 版本注记

v1.3.15 的 `GetActionForRaidingSettlement` 签名为 `(MobileParty, Settlement, NavigationType, bool isFromPort)`，劫掠目标固定走非港口语义。v1.4.5 核心程序集为该入口增加 `bool isTargetingPort`，并把它传给 `SetMoveRaidSettlement`；其余公开入口仍返回 `void`，类型仍位于 `TaleWorlds.CampaignSystem.Actions`。针对两个版本编译的模组需要为这个重载差异做条件适配。

## 导航

- 存档边界：[SaveableTypeDefiner](../../save-system/SaveableTypeDefiner/) 注册 `MobileParty` 的持久状态；AI 事件与短期目标不会作为历史事件在读档时重放。
- ↑ Parent：[战役扩展 API](../)
- ↔ Sibling：[AiBehavior](../AiBehavior) · [Army](../Army) · [DisbandArmyAction](../DisbandArmyAction)
- ↓ Children：无独立子页；各导航目标的查询入口已在本页成员章节说明
- Related：[MobileParty](../../campaign/MobileParty) · [Settlement](../../campaign/Settlement) · [CampaignEvents](../CampaignEvents)
