---
title: "EnterSettlementAction"
description: "v1.4.5 中负责部队、英雄、巷道访问或囚犯进入据点的战役生命周期边界。"
---

# EnterSettlementAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public static class EnterSettlementAction`  
**源码：** `TaleWorlds.CampaignSystem/Actions/EnterSettlementAction.cs`  
**版本：** 本页描述 v1.4.5 的实现。

## 一句话职责

`EnterSettlementAction` 收束一个已经由地图、遭遇或据点 owner 流程授权的进入据点迁移。它把进入的部队或英雄与据点状态同步，派发据点生命周期事件，并应用监听器和后续存档/读档所依赖的副作用。它不是瞬移工具，也不是据点访问权限验证器。

## 心智模型

把进入据点看成生命周期迁移，而不是给 `MobileParty.CurrentSettlement` 或据点 roster 赋值。调用方先从当前 Campaign 解析真实的进入对象和目的地，再选择正确的 public entry，让 Action 完成状态变更和事件级联。

私有 `EnterSettlementDetail` 枚举包含 `WarParty`、`PartyEntersAlley`、`Character` 和 `Prisoner` 四个值。这个枚举是实现细节，不是 mod 面向的 public 类型，也不需要单独建页。四个 public 方法分别选择这些 detail：

| Public entry | 内部 detail | 含义 |
| --- | --- | --- |
| `ApplyForParty` | `WarParty` | 一个 `MobileParty` 到达据点边界。 |
| `ApplyForPartyEntersAlley` | `PartyEntersAlley` | 一个部队进入巷道流程；巷道语义由调用方负责。 |
| `ApplyForCharacterOnly` | `Character` | 一个不通过 `MobileParty` 进入的 `Hero` 到达据点。 |
| `ApplyForPrisoner` | `Prisoner` | 一个 `Hero` 已经成为该据点的囚犯。 |

除解散分支外，所有入口都会汇入相同顺序的 dispatcher 回调。detail 决定回调之后的状态工作，尤其是囚犯通知；它不是权限等级。

## 依赖关系

进入对象来自 [MobileParty](../../campaign/MobileParty)、[Hero](../../campaign/Hero) 和 [Settlement](../../campaign/Settlement)。事件边界由 [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) 转发给 [CampaignEvents](../../campaign/CampaignEvents)；[EncounterManager](../../campaign/EncounterManager)、[DisbandPartyCampaignBehavior](../../campaign/DisbandPartyCampaignBehavior) 和 `PartyScreenHelper` 等 owner 流程决定这次迁移何时合法。

下游状态包括据点组件、[PartyBase](../../campaign/PartyBase)、军团/map event 关系、囚犯通知、owner visit 时间和 naval anchor。解散进入会把终结生命周期委托给 [DestroyPartyAction](../DestroyPartyAction)，而普通离开仍由 [LeaveSettlementAction](../LeaveSettlementAction) 负责。

## 进入前置条件由调用方负责

`EnterSettlementAction` 假设 owner 流程已经确认迁移合法。调用前应检查相关的 [SettlementAccessModel](../../campaign/SettlementAccessModel) 或游戏自定义访问模型、owner/派系关系、遭遇状态以及 menu/location 状态。Action 本身不判断主角能否进入城镇、城堡、村庄、地牢或领主大厅。

原版 [EncounterManager](../../campaign/EncounterManager) 会在进入前分开处理多种情况：它会跳过 inactive、attached、map event、已经在据点或目标不合法的 party；围城逻辑可能启动或加入 [SiegeEvent](../../campaign/SiegeEvent)，而有活动 [MapEvent](../../campaign/MapEvent) 的据点可能要求先完成遭遇结算，而不是直接普通到达。[PlayerEncounter](../../campaign/PlayerEncounter) 会先创建 location encounter，然后在确认玩家进入据点的路径中调用 `ApplyForParty(MobileParty.MainParty, encounterSettlement)`。

因此，不要用这个 Action 绕过：

- 敌对 owner 或访问权限判断；
- 活动中的 map event、战斗、围城突击、出击或封锁；
- 军团附属与 leader party 的同步；
- 仍需要创建或结束 location 状态的 encounter/menu 迁移。

AI party 通常由 encounter/AI 流程负责进入；玩家则通常由 `PlayerEncounter` 和据点 menu 流程负责。mod 应接入这些 owner 边界，而不是因为手里有一个 `Settlement` 对象就直接调用 Action。

## Public entries

### `ApplyForParty`

```csharp
public static void ApplyForParty(MobileParty mobileParty, Settlement settlement)
```

这是普通地图部队进入入口。v1.4.5 会在公共事件路径前完成以下工作：

1. 如果一个附属军团 party 跟随 army leader 进入同一据点，并且满足源码条件，就把它加入 leader 的 merged-party 状态。
2. 根据陆地导航能力，以及船队是否正在以据点为港口目标，计算新的海上/陆地状态。
3. 设置 `mobileParty.CurrentSettlement`；如果船队正驶向港口且需要更新，则把 ship anchor 移到目的地。
4. 调用 `settlement.SettlementComponent.OnPartyEntered(mobileParty)`。
5. 以该 party 的 leader hero 作为参数进入公共生命周期路径。

第 3 步的赋值只是契约的一部分。军团合并、海上状态、anchor、据点组件和事件必须作为一个整体保留。

### `ApplyForPartyEntersAlley`

```csharp
public static void ApplyForPartyEntersAlley(
    MobileParty party,
    Settlement settlement,
    Alley alley,
    bool isPlayerInvolved = false)
```

这个入口选择 `PartyEntersAlley`，并把真实的 `Alley` 与 `isPlayerInvolved` 传入私有路径。当前 v1.4.5 Action 在接收后不会直接根据这两个值分支；巷道 owner 流程仍负责 location、访问权限和玩家参与行为。它也不会执行 `ApplyForParty` 的海上状态、anchor、军团合并、`CurrentSettlement` 或据点组件写入。不要把它当作另一种部队瞬移，也不要在 owner 巷道流程尚未建立真实对象时伪造 `Alley`。

当前 v1.4.5 源码没有需要依赖的 stock call site，这不影响 public entry 的契约。mod 只能从真实且已经授权的巷道迁移中调用它，并保留下面描述的公共事件顺序。

### `ApplyForCharacterOnly`

```csharp
public static void ApplyForCharacterOnly(Hero hero, Settlement settlement)
```

它先设置 `hero.StayingInSettlement = settlement`，再以没有 `MobileParty` 的形式进入公共路径。这个入口用于英雄不以地图部队身份进入、而是被放置到据点的情况。它不会设置 party 的 `CurrentSettlement`，不会把英雄加入 roster，也不会执行囚犯转移。

原版 `PartyScreenHelper` 会在真实的当前据点 party-screen 操作把英雄放入 garrison，或处理据点中的英雄时使用这个入口。owner 流程必须先完成自己的 roster 操作，并传入同一个 live `Settlement`；这个 Action 只记录角色进入生命周期并派发通知。

### `ApplyForPrisoner`

```csharp
public static void ApplyForPrisoner(Hero hero, Settlement settlement)
```

它先调用 `hero.ChangeState(Hero.CharacterStates.Prisoner)`，再以没有 `MobileParty` 的形式进入公共路径。三个据点回调完成后，`Prisoner` detail 会以 `takenFromDungeon: false` 为该英雄派发 `PrisonersChangeInSettlement`。

这个 Action 不负责决定谁被俘，也不负责把英雄加入地牢 roster。原版 `PartyScreenHelper` 会在当前据点的囚犯转移已经识别出真实英雄后调用它。mod 必须让转移/roster owner 和这个通知边界处于同一个生命周期中；只改 `Hero` 状态或只改据点 prison roster 都是不完整的。

## 事件与状态顺序

普通进入会严格按下面的顺序收到 dispatcher 回调：

1. `CampaignEventDispatcher.Instance.OnBeforeSettlementEntered(...)`，对应 [CampaignEvents](../../campaign/CampaignEvents) 的 `BeforeSettlementEnteredEvent` hook。
2. `OnSettlementEntered(...)`，对应 `CampaignEvents.SettlementEntered`。
3. `OnAfterSettlementEntered(...)`，对应 `CampaignEvents.AfterSettlementEntered`。

[CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) 会把每个回调转发给 campaign behavior。监听器可能打开 menu、更新 quest 状态或改变其他 Campaign 状态，所以监听器不应为同一迁移递归调用这个 Action，也不能假设进入对象在回调之后仍未改变。

公共回调之后，v1.4.5 还会应用这些后果：

- `Prisoner` detail 会派发据点囚犯变化通知。私有路径在内部收到 party 囚犯 roster 时也能通知其 flattened roster；public `ApplyForPrisoner` 传入的是 hero。
- 它读取进入的 leader（或 character-only hero）；当该 hero 同时是据点 owner clan 的领主和该 clan 的 leader 时，更新 `settlement.LastVisitTimeOfOwner`。
- 如果 `MobileParty.MainParty` 是 army leader，会递归对 attached parties 调用 `ApplyForParty`，避免军团只让 leader 进入据点而附属 party 仍停留在地图状态。
- 没有 party、没有囚犯归属、属于玩家 clan 且不是 governor 的 character-only 英雄，可能收到 `OnHeroGetsBusyEvent` 的 emissary-busy 通知。
- fleeing party 在路径结束后会被禁用 AI 五小时。玩家/main party 进入还会写 diagnostic message；日志不能替代事件。

## 解散是另一条分支

私有路径在普通回调之前检查：传入的 `MobileParty` 是否正在解散，以及它的 `TargetSettlement` 是否就是本次目的地。如果是，就调用 [DestroyPartyAction](../DestroyPartyAction).`ApplyForDisbanding`，跳过普通据点进入回调链。party owner 已经决定这个 party 在该据点结束生命周期，而不是普通到达。

因此目标和 owner 状态都很重要：不要为 owner 的解散流程预期要销毁的 party 调用普通进入；也不要只因为 party 有 `IsDisbanding` 标志就调用解散入口。相关的 [DisbandPartyAction](../DisbandPartyAction)、[LeaveSettlementAction](../LeaveSettlementAction) 和 [DisbandPartyCampaignBehavior](../../campaign/DisbandPartyCampaignBehavior) 页面说明 owner 侧清理及据点关系。

## 真实当前 Campaign 示例

下面的 helper 使用真实的主 party 及其 live target。它只适用于调用方就是地图到达流程 owner，且已经完成上文所说的访问、owner、遭遇和 menu 检查。guards 会阻止 stale、inactive、已经在据点、正在解散或处于 map event 的 party 被当作新到达处理。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;

public static void EnterConfirmedTargetSettlement()
{
    if (Campaign.Current == null)
        return;

    MobileParty party = MobileParty.MainParty;
    Settlement target = party?.TargetSettlement;
    if (party == null || target == null || !party.IsActive ||
        party.CurrentSettlement != null || party.IsDisbanding ||
        party.MapEvent != null || party.BesiegedSettlement != null)
        return;

    // 负责地图/遭遇的 owner 流程已经完成访问权限和合法性验证。
    EnterSettlementAction.ApplyForParty(party, target);
}
```

这个示例没有构造 `MobileParty`、`Settlement` 或 `PartyBase`，也没有给 `CurrentSettlement` 赋值。如果调用方是玩家 encounter 流程，应沿用其真实的 location-encounter 创建步骤；如果调用方是 AI 或 army 流程，应先让 [EncounterManager](../../campaign/EncounterManager) 完成 map event、围城和军团判断。character-only 或 prisoner entry 应使用 party-screen/captivity owner 提供的 live settlement 与 hero，不要把这个 party 示例套到那两个入口上。

## 直接修改与存档风险

不要用下面的方式替代这个 Action：

- 只写 `mobileParty.CurrentSettlement = settlement`，却不处理海上状态、anchor、据点组件回调、事件链、owner visit、fleeing AI 和军团递归；
- 直接写据点 owner、party、prison 或 garrison 字段来模拟到达；
- 只设置 `Hero.StayingInSettlement` 或只改变 `Hero.CharacterStates.Prisoner`，却不派发对应的 dispatcher 回调和囚犯通知；
- 在部分字段已经被直接改写后手工发布 `CampaignEvents`，导致事件看到的 party 位置与据点组件不一致。

这些 shortcut 可能留下只让 army leader 进入据点的军团、anchor 过期的船队、据点组件未登记 party 的状态，或只有囚犯通知而没有相应英雄状态的状态。此时创建的存档可能在读档后恢复出互相矛盾的引用。

把进入对象视为当前 Campaign 流程拥有的对象。除非 owner 明确把这个 Action 作为下一个状态，否则不要在活动战斗、围城、遭遇或 menu 迁移中直接调用。不要把已经解散的 party，或递归进入过的 attached party，当成普通通知后继续使用。读档时应从 Campaign state 重新获取 live `MobileParty`、`Hero` 和 `Settlement`，而不是持久化一次性的迁移对象。

## 导航

- **父级：** [Campaign extension API 目录](../) · [Campaign system](../../campaign/)
- **同级：** [DestroyPartyAction](../DestroyPartyAction) · [DisbandPartyAction](../DisbandPartyAction) · [LeaveSettlementAction](../LeaveSettlementAction)
- **相关实体：** [MobileParty](../../campaign/MobileParty) · [PartyBase](../../campaign/PartyBase) · [Hero](../../campaign/Hero) · [Settlement](../../campaign/Settlement) · [Army](../../campaign/Army)
- **相关流程与事件：** [EncounterManager](../../campaign/EncounterManager) · [SettlementAccessModel](../../campaign/SettlementAccessModel) · [MapEvent](../../campaign/MapEvent) · [SiegeEvent](../../campaign/SiegeEvent) · [CampaignEvents](../../campaign/CampaignEvents) · [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) · [DisbandPartyCampaignBehavior](../../campaign/DisbandPartyCampaignBehavior)
