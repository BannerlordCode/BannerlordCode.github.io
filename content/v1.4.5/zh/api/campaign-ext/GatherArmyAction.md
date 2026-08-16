---
title: "GatherArmyAction"
description: "战役中“军团已集结”事件的触发入口：读取领袖部队所属的 Army 并广播 OnArmyGathered，本身不创建军团。"
---
# GatherArmyAction

**Namespace:** TaleWorlds.CampaignSystem.Actions  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public static class GatherArmyAction`  
**Base:** （无，静态类）  
**File:** `TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/GatherArmyAction.cs`

## 一句话职责

在战役世界里**宣告一支军团已经在某个地图点完成集结**，从而让其它系统（AI、军团凝聚力、通知、日志）获知这一事件——它只广播，不负责组建或召集军团本身。

## 心智模型

把 `GatherArmyAction` 理解为**一个轻量的“事件广播器”**，而不是“创建军团的工厂”。

- 它唯一的公开入口是静态方法 `Apply(MobileParty leaderParty, IMapPoint gatheringPoint)`。
- 进入 `Apply` 后，它直接读取 `leaderParty.Army`（该领袖部队当前所属的 [`Army`](../Army/)），然后调用 `CampaignEventDispatcher.Instance.OnArmyGathered(army, gatheringPoint)` 把“军团已集结到该点”这件事广播出去。
- 它**不会**：新建 `Army`、不会把其它 `MobileParty` 拉进军团、不会移动任何部队。真正的“组建 + 召集”发生在 `Army.Gather(...)` 里——`Gather` 先安排各部队归属，最后才调用 `GatherArmyAction.Apply` 来发事件。
- 引擎内部只有一个调用点：[`Army.Gather`](../Army/)（见 `TaleWorlds.CampaignSystem/Army.cs`）。绝大多数 mod 不需要直接调用它，除非你想在自定义逻辑里手动复刻“军团集结”这一事件。
- 所在层是 **Campaign 层**：它在战役模拟（地图 tick / 行为）中运行，与战斗场景（Mission）无关。

## 何时用 / 何时不要用

**用它（或它背后的 `Army.Gather`）：**

- 你已经有一个 `Army` 实例，并且想让世界知道“这支军团已在某点集结”，从而触发后续行为（通知、AI 重算等）。
- 你重写了军团召集流程，需要在自己的代码路径末尾补齐这一事件广播。

**不要用它：**

- 想“凭空创建一支军团”——`GatherArmyAction.Apply` 不会建军团。先拿到/组建一个 `Army`（例如通过正常的军团召集逻辑或 `Army.Gather`），再考虑事件广播。
- 想“把某个 `MobileParty` 塞进军团”——直接赋值 `party.Army = someArmy` 会绕过所有事件与关联状态，应该走 `Army.Gather(partiesToCallToArmy: ...)` 之类的官方入口。
- 想移动部队到集结点到——那是 AI / 行为的事，不在本 Action 职责内。

正确范式：需要组建并召集军团时调用 `Army.Gather(...)`；本 Action 只是 `Gather` 内部广播事件的最后一步。不要手动改 `leaderParty.Army` 或各 `MobileParty` 的 `Army` 字段来“假装配”一个集结。

## 依赖图

- 上游：[`Army`](../Army/)（提供 `leaderParty.Army` 及 `Army.Gather` 调用入口）；[`MobileParty`](../../campaign/MobileParty/)（领袖部队，携带 `Army` 引用）；[`Settlement`](../../campaign/Settlement/)（最常见的集结 `IMapPoint`）。
- 下游/事件：[`CampaignEvents`](../CampaignEvents/) 中的 `OnArmyGathered`；由 [`CampaignEventDispatcher`](../CampaignEventDispatcher/) 实际派发，触发各 [`CampaignBehaviorBase`](../CampaignBehaviorBase/) 与通知系统。
- 相关 Action 同级：[`AddCompanionAction`](../AddCompanionAction/) · [`RemoveCompanionAction`](../RemoveCompanionAction/) · [`TakePrisonerAction`](../TakePrisonerAction/) · [`TransferPrisonerAction`](../TransferPrisonerAction/)。
- 上层世界：[`Campaign`](../../campaign/Campaign/)（`Campaign.Current` 访问战役状态）、[`Hero`](../../campaign/Hero/)（军团领袖）。

## 风险

- **领袖部队没有军团会广播空 Army**：`Apply` 直接读取 `leaderParty.Army` 并原样传给 `OnArmyGathered`。若 `leaderParty.Army == null`，下游订阅者会收到 `null` 的 Army，可能触发空引用。务必在调用前确认 `leaderParty.Army != null`（见下方示例）。
- **事件顺序敏感**：必须在军团各成员的 `Army` 字段已正确赋值之后再调用，否则广播出去的“集结”状态与真实归属不一致，导致 AI/通知计算出错。
- **只在有效战役阶段调用**：`OnArmyGathered` 由 `CampaignEventDispatcher` 派发，应在战役模拟上下文（地图 tick / 行为中）触发，不要在存档加载中途或场景（Mission）代码里随意调用。
- **玩家卷入度是硬编码的**：`Apply` 内部把“玩家卷入度”设为 `leaderParty == MobileParty.MainParty ? 1f : 0f`，mod 无法覆盖该值——如果你需要不同的卷入度语义，要在自己的逻辑里另行处理，不能指望本 Action 透传。

## 成员说明

### `public static void Apply(MobileParty leaderParty, IMapPoint gatheringPoint)`

唯一的公开入口。把 `leaderParty` 所属军团的“已集结到 `gatheringPoint`”这一事实广播出去。

- **参数 `leaderParty`**：军团的领袖部队。必须已经是某个 `Army` 的成员（`leaderParty.Army != null`），否则会广播空 Army。
- **参数 `gatheringPoint`**：军团集结的目标地图点，通常是 `Settlement`（`Settlement` 实现了 `IMapPoint`）。
- **副作用**：读取 `leaderParty.Army`，调用 `CampaignEventDispatcher.Instance.OnArmyGathered(army, gatheringPoint)`；根据 `leaderParty` 是否为主角部队设置玩家卷入度（1 或 0）。不修改任何世界状态，只派发事件。
- **何时调用**：军团已经组建、各成员 `Army` 字段已就绪之后；通常由 `Army.Gather` 在末尾调用，mod 一般无需直接调用。

```csharp
// 真实调用：在军团已组建、leaderParty.Army 就绪后广播集结事件（通常由 Army.Gather 在末尾调用）
MobileParty leaderParty = someLord.Party;
if (leaderParty != null && leaderParty.Army != null)
    GatherArmyAction.Apply(leaderParty, someSettlement); // someSettlement 实现了 IMapPoint
```

### `private static void ApplyInternal(MobileParty leaderParty, IMapPoint gatheringPoint, float playerInvolvement = 0f)`

内部工作方法，对 mod 不可见。它执行真正的读取与事件派发；`Apply` 只是给它包了一层“玩家卷入度”的默认值（`MobileParty.MainParty` → 1f，否则 0f）。文档列出它是为了说明 `Apply` 的真实行为——**不要**从 mod 直接调用私有方法。

```csharp
// ApplyInternal 是私有实现；Apply 仅补一个玩家卷入度默认值后转发：
//   GatherArmyAction.Apply(leaderParty, gatheringPoint);
// 内部读取 leaderParty.Army 并广播 OnArmyGathered(army, gatheringPoint)
```

## 最小真实示例

### 示例 1：手动广播一次军团集结事件（确认已有 Army）

```csharp
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Party;

// leaderParty 必须是某个 Army 的领袖部队
MobileParty leaderParty = someLord.Party;
// 集结到的地图点：城镇/城堡/村庄都实现了 IMapPoint
IMapPoint gatheringPoint = someSettlement;

// 关键守卫：Apply 会原样读取 leaderParty.Army，null 会广播空 Army
if (leaderParty != null && leaderParty.Army != null)
{
    GatherArmyAction.Apply(leaderParty, gatheringPoint);
}
```

### 示例 2：正确组建并召集军团的方式（走 Army.Gather）

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;

// 真正“组建并召集”军团的是 Army.Gather，它内部会调用 GatherArmyAction.Apply
MobileParty leaderParty = someLord.Party;
Army army = leaderParty?.Army;
if (army != null)
{
    // 传入敌对据点作为初始目标；Gather 安排成员归属后广播 OnArmyGathered
    army.Gather(initialHostileSettlement: someEnemySettlement);
}
```

> 不要为了“创建军团”去调用 `GatherArmyAction.Apply`——它不会建军团，只广播事件。

## 跨版本提示

- v1.3.0 / v1.3.15：API 与 v1.4.5 一致，`public static void Apply(MobileParty, IMapPoint)` 与私有 `ApplyInternal` 签名相同，唯一调用点同样是 `Army.Gather`。
- v1.4.5：行为未变；以 1.4.5 源码为权威。注意 `Apply` 仅广播事件，组建军团仍由 `Army` 负责。

## 导航

- ↑ 父级：[战役扩展 API 索引](../)
- ↔ 同级：[AddCompanionAction](../AddCompanionAction/) · [RemoveCompanionAction](../RemoveCompanionAction/) · [TakePrisonerAction](../TakePrisonerAction/) · [TransferPrisonerAction](../TransferPrisonerAction/)
- 相关类：[Army](../Army/) · [MobileParty](../../campaign/MobileParty/) · [Campaign](../../campaign/Campaign/) · [Hero](../../campaign/Hero/) · [CampaignEvents](../CampaignEvents/) · [CampaignEventDispatcher](../CampaignEventDispatcher/)
