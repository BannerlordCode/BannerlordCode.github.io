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

## 怎么用

### 怎么拿到它

`public class AssembleEmpireQuest : StoryModeQuestBase` 声明在 `bannerlord-1.5.3/StoryMode/Quests/SecondPhase/AssembleEmpireQuestBehavior.cs:54`——**它嵌套在 `AssembleEmpireQuestBehavior` 类内**，完整类型名是 `AssembleEmpireQuestBehavior.AssembleEmpireQuest`。全文 229 行，一个文件里还带着宿主行为和存档定义器。

创建入口是唯一构造函数 `AssembleEmpireQuest(Hero questGiver)`（`:77`），基类调用 `: base("assemble_empire_quest", questGiver, CampaignTime.Never)`（`:78`）——**任务 id 硬编码、时限是 `Never`（与基类 `IsRemainingTimeHidden = true` 一起构成双重隐藏）**。

构造函数体（`:80`→`:85`）：`_assembledEmpire = false`（`:80`）、`CacheSettlementCounts()`（`:81`）、`SetDialogs()`（`:82`）、`InitializeQuestOnCreation()`（`:83`），最后建一条离散日志（`:84`），初值取当前拥有数、目标取 `MathF.Ceiling((float)this._imperialCultureTowns * 0.66f)`。

比例常量是 `private const float _ratioOfSettlementToTake = 0.66f;`（`:221`）——**但代码里直接写了字面量 `0.66f`**，常量本身没被引用。

`RegisterEvents()`（`:107`）挂三条：`CampaignEvents.OnSettlementOwnerChangedEvent`（`:109`）、`StoryModeEvents.OnConspiracyActivatedEvent`（`:110`）、`CampaignEvents.OnClanChangedKingdomEvent`（`:111`）。

`HourlyTick()`（`:142`）只做一件事：`if (QuestConditionsHold()) SuccessQuest();`（`:143`→`:144`）——**达标判定是轮询式，不是事件驱动**。

`QuestConditionsHold()`（`:178`）= `_ownedByPlayerImperialTowns >= MathF.Ceiling((float)_imperialCultureTowns * 0.66f)`（`:180`）。`SuccessQuest()`（`:184`）写日志 `"{=sJeYHMGG}You have unified the Empire."`、完成任务、置 `_assembledEmpire = true`（`:187`）、调 `SecondPhase.Instance.ActivateConspiracy();`（`:189`）。

失败路径是**事件驱动**的：`OnConspiracyActivated()`（`:151`）在 `!_assembledEmpire` 时 `CompleteQuestWithFail(new TextObject("{=80NOk1Ee}You could not unify the Empire.", null))`（`:153`→`:154`）——**阴谋被别条线激活就算你输**。

`CacheSettlementCounts()`（`:160`）遍历 `Settlement.All`，只数 `settlement.IsTown && settlement.Culture.StringId == "empire"`，并在其中 `settlement.OwnerClan.Kingdom == Clan.PlayerClan.Kingdom` 时累加第二个计数。**它由构造函数（`:81`）和 `InitializeQuestOnGameLoad`（`:98`）各调一次**，中途不再重算。

存档只有 `_numberOfCapturedSettlementsLog`（`[SaveableField(1)]`，`:224`→`:225`）——三个计数字段都不进存档，读档后靠 `CacheSettlementCounts()` 重算。

### 典型用法

```csharp
// 1) 宿主行为在选边时创建它；mod 里也可以手动创建
AssembleEmpireQuest quest = new StoryMode.Quests.SecondPhase.AssembleEmpireQuestBehavior.AssembleEmpireQuest(
    StoryModeHeroes.ImperialMentor);
quest.StartQuest();

// 2) 复现进度判据
int imperial = 0, owned = 0;
foreach (Settlement s in Settlement.All)
{
    if (s.IsTown && s.Culture.StringId == "empire")
    {
        imperial++;
        if (s.OwnerClan.Kingdom == Clan.PlayerClan.Kingdom) owned++;
    }
}
int goal = MathF.Ceiling(imperial * 0.66f);
Debug.Print("Conquered Settlements " + owned + "/" + goal + "（帝国城镇总数 " + imperial + "）");

// 3) 读任务状态
QuestBase q = Campaign.Current.QuestManager.GetQuest<AssembleEmpireQuest>();
Debug.Print("id=" + q.QuestId + "，时限=" + q.RemainingTime + "，隐藏=" + q.IsRemainingTimeHidden);

// 4) 冲突判定：别被别条线抢先
SecondPhase second = StoryModeManager.Current.MainStoryLine.SecondPhase;
Debug.Print("阴谋强度=" + second.ConspiracyStrength + "（涨到 2000 会激活，激活后本任务判失败）");
```

### 最容易踩的坑

达标是**每小时轮询一次**（`HourlyTick`→`:142`→`:144`），而失败是**事件驱动**（`OnConspiracyActivated`→`:151`）。两个时序不对称：玩家攻下最后一座帝国城镇后，如果 `SecondPhase.ConspiracyStrength` 先涨到 2000 并 `ActivateConspiracy()`，`OnConspiracyActivated` 先跑，`_assembledEmpire` 还是 false，任务直接判失败——哪怕城镇已经够了。想避免这个竞争，mod 里要么在 `ActivateConspiracy` 之前主动检查任务状态，要么自己接管计时。

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