---
title: "AssembleEmpireQuest"
description: "第二阶段帝国线目标任务：任务日志上显示已占领帝国城镇数量进度条，每小时检查是否达到 66% 并激活阴谋。"
---
# AssembleEmpireQuest

**Namespace:** StoryMode.Quests.SecondPhase
**Module:** StoryMode
**Type:** `public class AssembleEmpireQuestBehavior.AssembleEmpireQuest : StoryModeQuestBase`
**Base:** StoryModeQuestBase
**Source:** SecondPhase/AssembleEmpireQuestBehavior.cs

## 概述

第二阶段帝国线的目标追踪器。它只有一条任务日志——"已占领的帝国城镇 X / Y"——和一个每小时跑一次的达标判定。当玩家控制的王国拿下地图上 66% 以上的帝国城镇时，它就完成自己并调 `SecondPhase.Instance.ActivateConspiracy()`，把剧情推进到"开始刷阴谋任务"的阶段。它是一个 `StoryModeQuestBase` 的**嵌套类**，只能通过外层 `AssembleEmpireQuestBehavior` 创建。

## 心智模型

创建者是 `AssembleEmpireQuestBehavior.OnMainStoryLineSideChosen`——玩家在第一阶段确立"帝国线"立场的那一刻，它就被 `StartQuest()` 了。任务 ID 是 `assemble_empire_quest`，无时限。

它的进度计算方式是**增量计数 + 周期重算并存**：`CacheSettlementCounts()` 在构造与读档时全量扫描一遍地图，之后由 `OnSettlementOwnerChanged` 事件做 `_ownedByPlayerImperialTowns++ / --` 的增量维护，每小时用增量值与全量缓存的总数比对。这种设计在 mod 里很容易踩坑：如果你自己改了城镇归属但不通过 `ChangeOwnerOfSettlementAction`，事件不触发，进度就不更新。

坑：`OnClanChangedKingdom` 里只处理了"玩家离开自己支持的王国"→ 取消任务 + `CancelSecondAndThirdPhase()`，**没有**处理"玩家加入另一个王国后继续占地"的情况。所以玩家换主效忠对象后，进度仍然按新王国的城镇算（因为判定用的是 `Clan.PlayerClan.Kingdom`），语义已经漂移了。另一个坑是 `_ownedByPlayerImperialTowns` 与 `_imperialCultureTowns` 都没有 `[SaveableField]`——它们靠 `InitializeQuestOnGameLoad()` 里的 `CacheSettlementCounts()` 全量重算，所以**只对存档、跨版本时行为正确**；但如果 mod 在运行期动态创造/销毁帝国城镇而没有触发归属变更事件，计数会永久偏差。

## 主要成员

- `public AssembleEmpireQuest(Hero questGiver)`：任务 ID `assemble_empire_quest`，`questGiver` 传的是帝国导师。无时限。构造时缓存城镇计数、`SetDialogs()`、`InitializeQuestOnCreation()`。
- `override TextObject Title`：标题带 `FACTION` 变量（玩家王国名）。
- `private TextObject _questCanceledLogText`：仅在"离开支持王国"时被使用。
- `protected override void InitializeQuestOnGameLoad()`：**读档修复的核心**——`CacheSettlementCounts()` 重算两个计数，然后 `SetDialogs()`，若日志为空则重建并把进度设成当前值。
- `protected override void RegisterEvents()`：三个事件（城镇归属变更、阴谋激活、氏族换王国）。
- `private void OnSettlementOwnerChanged(...)`：增量维护 `_ownedByPlayerImperialTowns`，并把进度钳制到 `0.._imperialCultureTowns` 写入日志。
- `protected override void HourlyTick()`：**唯一判定点**。`QuestConditionsHold()` 为真就 `SuccessQuest()`。
- `private void CacheSettlementCounts()`：遍历 `Settlement.All`，只数 `IsTown && Culture.StringId == "empire"`，其中 `OwnerClan.Kingdom == Clan.PlayerClan.Kingdom` 的计入持有数。
- `private bool QuestConditionsHold()`：`_ownedByPlayerImperialTowns >= MathF.Ceiling(_imperialCultureTowns * 0.66f)`。
- `private void SuccessQuest()`：完成自己 → `_assembledEmpire = true` → `SecondPhase.Instance.ActivateConspiracy()`。
- `private void OnConspiracyActivated()`：若 `_assembledEmpire` 已为真则什么都不做，否则被抢先激活时取消。
- `private const float _ratioOfSettlementToTake = 0.66f`。
- `[SaveableField(1)] _numberOfCapturedSettlementsLog`。

## 使用示例

```csharp
// 达标判定：只数帝国文化的城镇，占比向上取整
private bool QuestConditionsHold()
{
    return this._ownedByPlayerImperialTowns >= MathF.Ceiling((float)this._imperialCultureTowns * 0.66f);
}

// 增量维护：城镇换手时在两个计数之间移动一格，并把进度钳进区间
if (settlement.OwnerClan.Kingdom == Clan.PlayerClan.Kingdom && oldOwner.Clan.Kingdom != Clan.PlayerClan.Kingdom)
    this._ownedByPlayerImperialTowns++;
if (oldOwner.Clan.Kingdom == Clan.PlayerClan.Kingdom && newOwner.Clan.Kingdom != Clan.PlayerClan.Kingdom)
    this._ownedByPlayerImperialTowns--;
this._numberOfCapturedSettlementsLog.UpdateCurrentProgress(
    MathF.Clamp((float)this._ownedByPlayerImperialTowns, 0f, (float)this._imperialCultureTowns));
```

## 风险与边界

它**没有任何奖励、没有声望、没有对话**——`SetDialogs()` 是空的，玩家只能在任务日志里看到进度条。这是设计上刻意的"沉默任务"。两个计数不入存档是本类最需要警惕的点：读档修复靠的是全量重扫 `Settlement.All`，这意味着**存档前后地图内容不一致时（比如某些 mod 在读档钩子里删城镇），进度会跳变**。`_assembledEmpire` 同样不入存档，导致"读档后阴谋已被别人激活"这一保护分支在跨存档时会退化为直接取消本任务。第三，它统计的是"城镇属于玩家王国"而不是"城镇属于玩家氏族"，所以作为附庸取得的城镇也算数——这是与 `CreateKingdomQuest`（要求自有城堡）语义不同的重要区别。

## 依赖关系

- [AssembleEmpireQuestBehavior（唯一创建者）](../AssembleEmpireQuestBehavior)
- [AssembleEmpireQuestBehaviorTypeDefiner（存档注册）](../AssembleEmpireQuestBehaviorTypeDefiner)
- [WeakenEmpireQuest（反帝国线的对称任务）](../WeakenEmpireQuest)
- [ConspiracyProgressQuest（被激活后接管进度显示）](../ConspiracyProgressQuest)