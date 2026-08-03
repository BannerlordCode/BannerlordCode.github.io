---
title: "KillCharacterActionDetail"
description: "解释英雄死亡原因、DeathMark 延迟结算，以及继承、部队、任务与存档级联的安全边界。"
---
# KillCharacterActionDetail

**命名空间：** `TaleWorlds.CampaignSystem.Actions`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public enum KillCharacterActionDetail`（`KillCharacterAction` 的嵌套类型）  
**基类：** `System.Enum`  
**源文件：** `TaleWorlds.CampaignSystem/Actions/KillCharacterAction.cs`

## 概述

同时表示英雄死亡或失踪的业务原因和可持久化 `DeathMark`，让立即死亡、战斗后延迟结算、讣告、任务与继承系统共享同一原因。它由 `KillCharacterAction` 的公开入口选择，也会保存在 `Hero` 上跨越地图事件和存档边界；下游据此生成叙事并清理政治关系，但枚举本身不执行死亡，完整结果取决于 `ApplyInternal` 是否立即结算、延迟标记或因保护条件返回。

## 心智模型

这个枚举有两种寿命。作为 `KillCharacterAction.ApplyBy*` 的参数时，它驱动一次不可逆的英雄移除事务；作为 `Hero.DeathMark` 时，它是写入存档的“待结算死亡”标记。战斗或围城仍在使用英雄和部队对象时，`ApplyInternal` 往往只记录标记并返回，等地图事件结束后再由 `ApplyByDeathMark` 完成清理。

因此“调用了死亡 Action”不等于英雄在本行之后必定已经死亡。调用方要检查 `victim.IsAlive` 与 `victim.DeathMark`，并尊重地图事件生命周期。反过来，直接写 `DeathMark` 或 `Hero` 生死字段也不等于完成死亡：继承、军团、部队、囚禁、总督、伴侣、同伴、任务和事件仍需按固定顺序收束。

## ApplyInternal 契约与状态级联

```text
ApplyByMurder(victim, killer, showNotification)
ApplyByBattle(victim, killer, battleContext, agentOrigin)
  -> CanDie(detail)；非 forced 不允许则返回
  -> 已死亡：失败断言并返回
  -> MapEvent/SiegeEvent 中且尚无 DeathMark：写标记并返回
  -> 主角非 forced：OnBeforeMainCharacterDied 后返回，交给继承流程
  -> OnBeforeHeroKilled
  -> 写 DeathMark、讣告
  -> 氏族/王国继承，金币转移
  -> 军团解散或脱离，部队停驻/销毁
  -> Hero = Dead，写 DeathDay，结束囚禁并移出 roster
  -> 清总督、执行处决荣誉副作用，必要时销毁氏族
  -> OnHeroKilled
  -> 清伴侣/同伴/据点角色，调用 Hero.OnDeath
```

`OnHeroKilled` 发出时，受害者已经是死亡状态，主要政治和部队清理已发生；但伴侣、同伴和当前据点角色清理位于事件之后。事件订阅者不能假设所有尾部引用都已归零。

## 枚举值、入口与副作用

| 值 | 常见入口 | 语义与调用时机 |
|---|---|---|
| `None` | 无直接死亡入口 | `Hero.DeathMark` 的空哨兵。不要把它作为待结算死亡交给 `ApplyByDeathMark`。 |
| `Murdered` | `ApplyByMurder` | 谋杀/暗杀；`PayForCrimeAction` 可对主角使用，讣告和犯罪 Behavior 会据此处理。 |
| `DiedInLabor` | `ApplyInLabor` | 分娩死亡；`PregnancyCampaignBehavior` 在分娩结果确定后调用。 |
| `DiedOfOldAge` | `ApplyByOldAge`、`ApplyByPlayerIllness` | 老死或主角疾病强制死亡。`AgingCampaignBehavior` 在年龄检查和已有标记结算时调用。 |
| `DiedInBattle` | `ApplyByBattle` | 战斗死亡。Agent origin 与 `MapEventSide` 传入战斗英雄；在地图事件中通常先成为延迟 `DeathMark`。 |
| `WoundedInBattle` | `ApplyByWounds` | 通过 Kill Action 使用时表示死于战伤并生成对应讣告；`Hero.MakeWounded` 也可把它作为受伤标记上下文，不能只凭枚举名判断对象已死。 |
| `Executed` | `ApplyByExecution` | 常规处决；可选 `isForced` 会绕过 `CanDie`。主角处决有额外继承流程，玩家处决领主还会触发荣誉特质副作用。 |
| `ExecutionAfterMapEvent` | `ApplyByExecutionAfterMapEvent` | 地图事件后的处决分支。首次调用在无标记时可能只写 `DeathMark`；`HeroExecutionSceneNotificationData` 会在演出阶段强制完成。 |
| `Lost` | `ApplyByRemove` | 从战役中移除/失踪，不等于普通死亡叙事。`DestroyClanAction`、同伴和要人维护 Behavior 使用；默认 `isForced = true` 且不显示通知。 |

`ApplyByDeathMark` 和 `ApplyByDeathMarkForced` 不选择新原因，而是读取 `victim.DeathMarkKillerHero` 与 `victim.DeathMark`。后者绕过 `CanDie`，只应用于上游已经作出不可撤销决定的流程。

## 依赖与下游影响

| 方向 | 类型与作用 |
|---|---|
| 上游对象 | [`Hero`](../../campaign/Hero) 提供 `CanDie`、`IsAlive`、可存档 `DeathMark`/`DeathMarkKillerHero`、氏族和部队关系。地图战斗、老龄、怀孕、处决与氏族销毁流程选择原因。 |
| 政治级联 | [`ChangeClanLeaderAction`](../ChangeClanLeaderAction)、`ChangeRulingClanAction` 和 [`DestroyClanAction`](../DestroyClanAction) 处理领袖、统治氏族及无继承人的氏族。 |
| 部队级联 | [`DisbandArmyAction`](../DisbandArmyAction)、`DisbandPartyAction`、`DestroyPartyAction` 与 [`EndCaptivityAction`](../EndCaptivityAction) 清理军团、地图部队和囚禁 roster。 |
| 事件与任务 | [`CampaignEvents`](../CampaignEvents) 的 `BeforeHeroKilledEvent`/`HeroKilledEvent` 把本枚举交给任务、评论、关系、总督、工坊和 UI Behavior。 |
| 存档 | `Hero.DeathMark` 是 `SaveableProperty(400)`，凶手是 `SaveableProperty(401)`；1.4.5 的 `SaveableCampaignTypeDefiner` 以枚举定义 ID `2058` 注册本类型。 |

## 风险、坏档与生命周期

- 不要直接调用 `Hero.ChangeState(Dead)`、改 `DeathMark` backing field，或只从 roster 删除角色。这样会绕过继承和事件链，留下仍指向死者的氏族领袖、军团、总督、伴侣、任务或据点角色，最终可能坏档或在后续 tick 空引用。
- `isForced: true` 会绕过 `Hero.CanDie`。除非上游已经处理主角继承、剧情保护和演出阶段，否则不要使用；`ApplyByRemove` 默认就是强制路径，尤其危险。
- 活跃任务的要人被杀会触发失败断言，但源码随后仍可能继续。先检查 `victim.Issue?.IssueQuest == null`，让任务 Behavior 自己结束或取消后再执行。
- 在 `MapEvent`/`SiegeEvent` 中调用可能只写入可持久化 `DeathMark`。不要随即销毁其部队或把英雄当作已死；也不要在下一 tick 再选一个不同原因覆盖标记。
- 延迟标记会随存档保存。读档后 `AgingCampaignBehavior` 等流程可继续调用 `ApplyByDeathMark`；不完整或错误的标记会把一次临时战斗判断变成之后的真实死亡。
- 死亡事件同步修改大量集合。遍历 `Clan.Heroes`、部队 roster、据点要人或任务列表时，应先快照，并在调用后丢弃缓存的领导者、总督和部队引用。

## 真实获取路径示例

下面从当前据点取得一个真实要人，只在没有活动任务、允许该原因死亡且不处于地图事件时走非强制谋杀入口。实际模组应从自己的已完成剧情决定中触发，而不是每 tick 扫描：

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Settlements;

Hero victim = Settlement.CurrentSettlement?.Notables
    .FirstOrDefault(hero =>
        hero.IsAlive &&
        hero.Issue?.IssueQuest == null &&
        hero.PartyBelongedTo?.MapEvent == null &&
        hero.PartyBelongedTo?.SiegeEvent == null &&
        hero.CanDie(KillCharacterAction.KillCharacterActionDetail.Murdered));

if (victim != null)
{
    KillCharacterAction.ApplyByMurder(victim, Hero.MainHero, showNotification: true);
}
```

调用后仍应以 `victim.IsAlive` 判断是否已完成；主角保护或其他生命周期条件可能让非强制入口返回，地图事件条件也可能只留下 `DeathMark`。

## 版本注记

v1.3.15 与 v1.4.5 都在 `TaleWorlds.CampaignSystem` 中定义相同九个值、相同公开入口，并保留 `DeathMark` 延迟结算及主要死亡级联。1.4.5 源码显示相同的事件相对顺序；跨版本模组仍不应序列化裸整数，因为新增或重排枚举值会让旧存档把死亡原因解释成另一种语义。

## 导航

- ↑ Parent：[战役扩展 API](./)
- ↔ Sibling：[KillCharacterAction](../KillCharacterAction) · [DestroyClanAction](../DestroyClanAction)
- Related：[Hero](../../campaign/Hero) · [CampaignEvents](../CampaignEvents) · [ChangeClanLeaderAction](../ChangeClanLeaderAction) · [EndCaptivityAction](../EndCaptivityAction)
