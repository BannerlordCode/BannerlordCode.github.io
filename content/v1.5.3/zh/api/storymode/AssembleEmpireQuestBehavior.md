---
title: "AssembleEmpireQuestBehavior"
description: "第二阶段帝国线触发器：监听主线立场选择，开出统一的帝国城镇占领进度任务，并在达标后激活阴谋。"
---
# AssembleEmpireQuestBehavior

**Namespace:** StoryMode.Quests.SecondPhase
**Module:** StoryMode
**Type:** `public class AssembleEmpireQuestBehavior : CampaignBehaviorBase`
**Base:** CampaignBehaviorBase
**Source:** SecondPhase/AssembleEmpireQuestBehavior.cs

## 概述

这是一个**没有状态的触发器**。它挂在战役行为列表里，全程只做一件事：监听 `StoryModeEvents.OnMainStoryLineSideChosenEvent`，一旦玩家选了 `CreateImperialKingdom` 或 `SupportImperialKingdom`，就 `new AssembleEmpireQuestBehavior.AssembleEmpireQuest(StoryModeHeroes.ImperialMentor).StartQuest()`。实际的进度判定全在它内嵌的那个 `AssembleEmpireQuest` 里。

它存在的意义是把"第二阶段的入口条件"与"第二阶段的具体目标"分离：行为是无状态的全局钩子，任务是带存档的进度容器。mod 想换掉第二阶段目标但保留触发条件时，只需要替换内嵌任务类。

## 心智模型

战役行为（`CampaignBehaviorBase`）由 `MBSubModuleBase` 的 `AddCampaignBehaviors` 注册，整个存档期间常驻。行为本身**不存档任何东西**（`SyncData` 是空实现），所以它可以在任何存档状态下重建，不会丢状态。

内嵌的 `AssembleEmpireQuest` 是一个极简任务：构造时 `CacheSettlementCounts()` 统计地图上**所有帝国文化的城镇总数**（`_imperialCultureTowns`）和**其中属于玩家王国的那部分**（`_ownedByPlayerImperialTowns`），然后 `HourlyTick` 里每小时候检查一次"玩家是否已拿下 66% 的帝国城镇"，达标就 `SuccessQuest()` → 完成自己 + 调 `SecondPhase.Instance.ActivateConspiracy()`。

坑：`_ratioOfSettlementToTake = 0.66f` 用的是 `MathF.Ceiling(_imperialCultureTowns * 0.66f)`。而 `OnSettlementOwnerChanged` 只在 `settlement.IsTown && settlement.Culture.StringId == "empire"` 时才计数——**城堡不计入**。如果 mod 改了帝国文化 ID 的判定（例如用 `StoryModeData.IsKingdomImperial` 之类），这个计数会与缓存值不一致，导致进度条永远到不了目标。还有：`OnSettlementOwnerChanged` 里的增减用 `settlement.OwnerClan.Kingdom == Clan.PlayerClan.Kingdom` 而不是 `RulingClan`，如果玩家自己就是统治氏族，这两者相等，能正常工作；但如果玩家不是统治氏族却把城镇划给了自己，会出现"城镇属于玩家王国但没被计入"的偏差。

## 怎么用

### 怎么拿到它

`public class AssembleEmpireQuestBehavior : CampaignBehaviorBase` 声明在 `bannerlord-1.5.3/StoryMode/Quests/SecondPhase/AssembleEmpireQuestBehavior.cs:15`，全文 229 行——**这个文件同时装着三个类型**：`AssembleEmpireQuestBehavior`（`:15`）、`AssembleEmpireQuestBehaviorTypeDefiner`（`:38`）、以及嵌套的 `AssembleEmpireQuest`（`:54`）。

行为本身极薄：`RegisterEvents()`（`:18`）只挂一条 `StoryModeEvents.OnMainStoryLineSideChosenEvent`（`:20`），`SyncData`（`:24`）是空实现——**行为无状态**。`OnMainStoryLineSideChosen(MainStoryLineSide side)`（`:29`）判 `side == MainStoryLineSide.CreateImperialKingdom || side == MainStoryLineSide.SupportImperialKingdom` 后 `new AssembleEmpireQuestBehavior.AssembleEmpireQuest(StoryModeHeroes.ImperialMentor).StartQuest();`（`:33`）。

注册点是 `campaignGameStarter.AddBehavior(new AssembleEmpireQuestBehavior())`（`StoryModeSubModule.cs:83`），无条件。取实例用 `Campaign.Current.GetCampaignBehavior<AssembleEmpireQuestBehavior>()`——但**它没有任何可读成员**，真正有意义的是它启动的那个任务。

同文件里 `AssembleEmpireQuestBehaviorTypeDefiner : SaveableTypeDefiner`（`:38`）构造函数只调 `: base(1002000)`（`:42`），`DefineClassTypes()`（`:47`）调基类实现后再 `AddClassDefinition` 登记嵌套的 `AssembleEmpireQuest`。**这个类引擎自动实例化，别自己 new。**

### 典型用法

```csharp
// 1) 行为的唯一作用：选边时出任务
MainStoryLine line = StoryModeManager.Current.MainStoryLine;
if (line.IsOnImperialQuestLine && !Campaign.Current.QuestManager.Quests.Any(q => q is AssembleEmpireQuest))
{
    AssembleEmpireQuest quest = new StoryMode.Quests.SecondPhase.AssembleEmpireQuestBehavior.AssembleEmpireQuest(
        StoryModeHeroes.ImperialMentor);
    quest.StartQuest();
}

// 2) 读任务进度（百分比判据的复现）
FirstPhase first = StoryModeManager.Current.MainStoryLine.FirstPhase;
if (first != null)
{
    int imperial = 0, owned = 0;
    foreach (Settlement s in Settlement.All)
    {
        if (s.IsTown && s.Culture.StringId == "empire")
        {
            imperial++;
            if (s.OwnerClan.Kingdom == Clan.PlayerClan.Kingdom) owned++;
        }
    }
    Debug.Print("帝国城镇 " + owned + "/" + imperial
              + "，需要 " + MathF.Ceiling(imperial * 0.66f) + " 座才达标");
}

// 3) 存档定义：任务类 id 1002000 段
Debug.Print(typeof(AssembleEmpireQuestBehavior).Assembly.GetName().Name + " 存档区间从 1002000 起");
```

### 最容易踩的坑

它判的是 `settlement.Culture.StringId == "empire"`（`CacheSettlementCounts` 里 `:168` 附近，`Culture.StringId` 字面量），而达成条件是 `MathF.Ceiling(_imperialCultureTowns * 0.66f)`（`QuestConditionsHold`）——**注意分母只在构造那一刻算过一次**（`CacheSettlementCounts` 由构造函数调用）。也就是说 mod 在游戏中途新增或删除帝国城镇（改 Culture、毁城、重开地图）后，判据的分母**不会重算**，任务要么永远达不到、要么立刻完成。要让进度跟着地图变化，必须自己重算，不能依赖这个缓存字段。

## 主要成员

- `public override void RegisterEvents()`：挂 `OnMainStoryLineSideChosenEvent`。
- `public override void SyncData(IDataStore dataStore)`：空实现——行为无状态。
- `private void OnMainStoryLineSideChosen(MainStoryLineSide side)`：立场是 `CreateImperialKingdom` 或 `SupportImperialKingdom` 时开出内嵌任务。
- `public class AssembleEmpireQuestBehaviorTypeDefiner : SaveableTypeDefiner`：构造 ID `1002000`，注册 `AssembleEmpireQuest` 为 id 1。**内嵌任务能被存进存档全靠这个 definer**——删了它旧存档就读不出来。
- `public class AssembleEmpireQuest : StoryModeQuestBase`（内嵌）：任务 ID `assemble_empire_quest`，`CampaignTime.Never`。
  - `public AssembleEmpireQuest(Hero questGiver)`：缓存城镇计数、`SetDialogs()`、`InitializeQuestOnCreation()`。
  - `protected override void InitializeQuestOnGameLoad()`：重算计数、重挂对话、重建日志进度。
  - `protected override void RegisterEvents()`：`OnSettlementOwnerChangedEvent`、`OnConspiracyActivatedEvent`、`OnClanChangedKingdomEvent`。
  - `private void CacheSettlementCounts()`：遍历 `Settlement.All` 统计帝国城镇总数与玩家持有数。
  - `private bool QuestConditionsHold()`：`_ownedByPlayerImperialTowns >= MathF.Ceiling(_imperialCultureTowns * 0.66f)`。
  - `private void SuccessQuest()`：`CompleteQuestWithSuccess()` + `_assembledEmpire = true` + `SecondPhase.Instance.ActivateConspiracy()`。
  - `private void OnConspiracyActivated()`：若自己已完成则跳过，否则被别处激活阴谋时取消。
  - `[SaveableField(1)] _numberOfCapturedSettlementsLog`。

## 使用示例

```csharp
// 触发器：立场一确定就开出目标追踪任务
public override void RegisterEvents()
{
    StoryModeEvents.OnMainStoryLineSideChosenEvent.AddNonSerializedListener(
        this, new Action<MainStoryLineSide>(this.OnMainStoryLineSideChosen));
}

private void OnMainStoryLineSideChosen(MainStoryLineSide side)
{
    if (side == MainStoryLineSide.CreateImperialKingdom || side == MainStoryLineSide.SupportImperialKingdom)
        new AssembleEmpireQuestBehavior.AssembleEmpireQuest(StoryModeHeroes.ImperialMentor).StartQuest();
}

// 达标即激活阴谋，把第二阶段推给玩家
private void SuccessQuest()
{
    CompleteQuestWithSuccess();
    this._assembledEmpire = true;
    SecondPhase.Instance.ActivateConspiracy();
}
```

## 风险与边界

`AssembleEmpireQuestBehaviorTypeDefiner` 的 **id 1002000 与类内 id 1 是存档 ABI**，一旦改动旧存档直接无法反序列化——这是改版时最容易踩的雷。`_assembledEmpire` 字段**没有** `[SaveableField]`，所以读档后会退回 `false`；如果玩家在达标瞬间读档，`OnConspiracyActivated` 的保护判断就会失效。这个任务**只数城镇**：玩家通过和平谈判、购买等方式获得帝国城镇也计数（因为事件只认 `OwnerClan.Kingdom`），所以"占领"在这里的含义比字面更宽。它同样没有失败日志，只有被阴谋激活抢先时的取消。

## 依赖关系

- [AssembleEmpireQuest（内嵌的任务类型）](../AssembleEmpireQuest)
- [WeakenEmpireQuestBehavior（反帝国线的对称触发器）](../WeakenEmpireQuestBehavior)
- [ConspiracyProgressQuest（阴谋强度仪表盘）](../ConspiracyProgressQuest)
- [CampaignBehaviorManager（战役行为的注册与获取入口）](../../campaign-ext/CampaignBehaviorManager)
- [SaveableTypeDefiner（存档类型定义机制）](../../save-system/SaveableTypeDefiner)