---
title: "DestroyRaidersConspiracyQuest"
description: "阴谋任务之一：先清掉三支本地强盗队，再与阴谋队长单挑式对话触发决战，胜利削减 50 点阴谋强度。"
---
# DestroyRaidersConspiracyQuest

**Namespace:** StoryMode.Quests.SecondPhase.ConspiracyQuests
**Module:** StoryMode
**Type:** `public class DestroyRaidersConspiracyQuest : ConspiracyQuestBase`
**Base:** ConspiracyQuestBase
**Source:** SecondPhase/ConspiracyQuests/DestroyRaidersConspiracyQuest.cs

## 概述

三个阴谋任务里最复杂的一个。它要求玩家在一个随机选定的城镇附近**先清掉三支由本地强盗势力派出的劫匪队**，清完之后才会刷出第四支"特殊队"——领队是阴谋队长。玩家与队长对话时可以选择威胁或嘲讽，两种选择都会立刻强制开战。全部清除后任务成功，削减 50 点阴谋强度。它还会在成功后给目标城镇 +5 关系/+5 治安/+5 繁荣、给玩家氏族 +5 声望。

## 心智模型

它是 `ConspiracyQuestBase` 的第一个具体实现，由第二阶段的 `SecondPhaseCampaignBehavior` 派发，任务 ID 与导师由外部传入。构造期一次性确定了四件事：目标城镇 `_targetSettlement`（优先从玩家自有聚落里随机挑一个能直达帝国导师家乡的城镇/城堡）、本地强盗氏族 `_banditFaction`（按最近藏处处的文化匹配）、以及三支劫匪的生成位置 `_closestHideouts`。

它的两段式进度用两个 `JournalLog` 表达：`_regularPartiesProgressTracker` 是 0→3，三支清完时它 `HasBeenCompleted()`，于是任务**在此刻才创建** `_specialPartyProgressTracker`（0→1）并生成特殊队。特殊队 defeat 后 `OnQuestSucceeded()`。

坑：`OnQuestSucceeded` 里 `this._targetSettlement.Town.Security += 5f` **无条件访问 `.Town`**——如果目标碰巧是一个城堡（`DetermineTargetSettlement` 明确允许 `IsTown || IsCastle`），这里会抛 `NullReferenceException`。这是本类最严重的实现缺陷。第二个坑是 `_banditFaction` 的确定：`GetBanditTypeForSettlement` 先找最近藏处，再按文化找 `Clan.BanditFactions`，找不到就随机取一个——在原版地图上通常能匹配到，但自定义地图上可能拿到 `looters` 这种通用氏族。第三，`HourlyTick` 里的"主动来找玩家"逻辑会在强盗队实力超过主队 1.2 倍且玩家不在定居点内时强行 `GetActionForEngagingParty`，这是**游戏主动攻击玩家**，mod 里必须保留这个逃生阀否则玩家永远躲得掉。

## 怎么用

### 怎么拿到它

`public class DestroyRaidersConspiracyQuest : ConspiracyQuestBase` 声明在 `bannerlord-1.5.3/StoryMode/Quests/SecondPhase/ConspiracyQuests/DestroyRaidersConspiracyQuest.cs:24`，全文 780 行，三种阴谋任务里最长的一种。

**不要自己 new——它是反射造出来的。** [SecondPhase](../SecondPhase) 的 `CreateNextConspiracyQuest()` 把类型写进 `_conspiracyQuestTypes`（`SecondPhase.cs:119`），然后 `Activator.CreateInstance(type, array)`（`:183`）传两个参数：运行时拼出的任务 id `"conspiracy_quest_" + 次数`（`:180`）和导师 Hero（`:181`）。构造函数签名 `public DestroyRaidersConspiracyQuest(string questId, Hero questGiver)`（`:222`）就是为这个反射准备的——**你手写 `new` 也能跑，但任务 id 不会自动编号。**

基类调用 `: base(questId, questGiver)`（`:223`）→ [ConspiracyQuestBase](../ConspiracyQuestBase) 的 `: base(questId, questGiver, CampaignTime.DaysFromNow(21f), 0)`（`ConspiracyQuestBase.cs:67`），**时限固定 21 天**。

构造函数体（`:224`→`:228`）建两个 `List<MobileParty>(3)`、用 `DetermineTargetSettlement()`（`:305`）定目标城镇、用 `GetBanditTypeForSettlement(Settlement settlement)`（`:440`）定强盗氏族。**它不生成队伍**——队伍在 `InitializeQuestOnLoad`（`:260`）/ `OnStartQuest`（`:293`）里通过 `InitializeRaiders()`（`:356`）、`DetermineClosestHideouts()`（`:366`）、`SpawnRaiderPartyAtHideout(Settlement hideout, bool isSpecialParty = false)`（`:385`）生成。

四个抽象成员的 override：`SideNotificationText`（`:108`）、`StartMessageLogFromMentor`（`:91`）、`StartLog`（`:78`）、`ConspiracyStrengthDecreaseAmount`（`:48`）。`Title` 文案是 `"{=DfiACGay}Destroy Raiders"`（`:42`）。

`RegisterEvents()`（`:238`）挂四条：`CampaignEvents.HeroPrisonerTaken`（`:240`）、`MobilePartyDestroyed`（`:241`）、`GameMenuOpened`（`:242`）、`MapEventEnded`（`:243`）。结局分三条：`OnQuestSucceeded()`（`:602`）、`OnQuestFailedByDefeat()`（`:616`）、`OnQuestFailed()`（`:624`），以及覆写的 `OnTimedOut()`（`:644`）。三种结局文案分别写在 `:136`、`:146`、`:168` 附近。

两个进度日志：`JournalLog _regularPartiesProgressTracker`（`[SaveableField(4)]`，`:756`）与 `_specialPartyProgressTracker`（`[SaveableField(5)]`，`:760`）。生成数量常量 `NumberOfRegularRaidersToSpawn = 3`（`:741`）。

成功奖励四个各 `5`：`QuestSuccededRelationBonus`（`:726`）、`QuestSucceededSecurityBonus`（`:729`）、`QuestSuceededProsperityBonus`（`:732`）、`QuestSuceededRenownBonus`（`:735`）；失败惩罚 `QuestFailedRelationPenalty = -5`（`:738`）。

### 典型用法

```csharp
// 1) 反射创建（正常路径）
SecondPhase second = StoryModeManager.Current.MainStoryLine.SecondPhase;
second.CreateNextConspiracyQuest();

// 2) 判在跑的是哪一类（比 BaseType，别比 GetType）
foreach (QuestBase q in Campaign.Current.QuestManager.Quests)
{
    if (q.IsOngoing && q.GetType().BaseType == typeof(ConspiracyQuestBase))
    {
        Debug.Print(q.QuestId + " 标题=" + q.Title + "，剩余=" + q.RemainingTime);
        if (q is DestroyRaidersConspiracyQuest raiders)
        {
            Debug.Print("  目标城镇=" + raiders.Title + "，需清 3 支常规队 + 1 支特殊队");
        }
    }
}

// 3) 常量与奖励
Debug.Print("常规队数量=" + DestroyRaidersConspiracyQuest.NumberOfRegularRaidersToSpawn);
Debug.Print("成功四奖各 5；失败关系 -5");

// 4) 强度扣减的落点在基类
Debug.Print("完成一条扣 ConspiracyStrengthDecreaseAmount，当前=" + second.ConspiracyStrength);
```

### 最容易踩的坑

它的队伍是 `readonly List<MobileParty>` 里的**运行时对象引用**（`_regularRaiderParties`（`:748`）、`_specialRaiderParty`（`:752`）、`_directedRaidersToEngagePlayer`（`:776`），全部带 `[SaveableField]`）。存档系统会把它们当对象图保存，但**这些队伍是被 `SpawnRaiderPartyAtHideout`（`:385`）动态生成的**，不是 `MobileParty.CreateParty` 之外的持久实体。读档后若 `InitializeQuestOnLoad`（`:260`）的重建逻辑与存档里的引用不一致，`MobilePartyDestroyed`（`:241`）计数就会对不上——表现为任务永远清不完或直接判失败。你若在 mod 里删掉其中一支队伍，剩下的计数不会再补。

## 主要成员

- `DestroyRaidersConspiracyQuest(string questId, Hero questGiver)`：构造入口。建三个列表/字段，确定目标城镇与强盗氏族。**`questId` 必须由调用方提供**——它不是固定字符串。
- `public override float ConspiracyStrengthDecreaseAmount`：固定 `50f`。
- `public override TextObject StartLog` / `StartMessageLogFromMentor` / `SideNotificationText`：三条抽象属性的实现，都按 `IsOnImperialQuestLine` 注入另一位导师作为"敌对导师"人称。
- `private int RegularRaiderPartyTroopCount`：`17 + Ceil(23 * 难度系数)`。`private int SpecialRaiderPartyTroopCount`：`33 + Ceil(37 * 难度系数)`。两者都随战役难度成长。
- `private float RaiderPartyPlayerEncounterRadius`：`EncounterModel.GetEncounterJoiningRadius * 3f`。
- `protected override void OnStartQuest()`：按立场选 `conspiracy_commander_empire` 或 `conspiracy_commander_antiempire` 作为队长 CharacterObject，`InitializeRaiders()` 生成三支队，`_regularPartiesProgressTracker` 建 0→3 日志，`InitializeQuestOnCreation()`。
- `private Settlement DetermineTargetSettlement()`：三级降级策略（玩家自有聚落 → 支持王国的聚落 → 地图随机），每级都要求 `PathExistBetweenPoints` 可达。
- `private List<Settlement> DetermineClosestHideouts()`：按到目标城镇的距离取最近三个**可达**藏处，并记下 `_closestHideout`。
- `private void SpawnRaiderPartyAtHideout(Settlement hideout, bool isSpecialParty = false)`：特殊队用固定模板 `conspiracy_{anti_,}imperial_special_raider_party_template` 并配半匹马；普通队用本地强盗氏族的默认模板。
- `private void OnBanditPartyClearedByPlayer(MobileParty defeatedParty)`：**阶段切换点**。三支清完后弹通知、写下"特殊队出现"的日志、建 `_specialPartyProgressTracker`、生成特殊队。
- `private void OnSpecialBanditPartyClearedByPlayer()`：特殊队清除 → 刷进度 → `OnQuestSucceeded()`。
- `private void OnQuestSucceeded()`：给关系/声望/治安/繁荣奖励后 `CompleteQuestWithSuccess()`。
- `private void OnQuestFailed()` / `OnQuestFailedByDefeat()` / `protected override void OnTimedOut()`：失败时销毁所有剩余劫匪队并扣目标城镇领主 5 点关系。
- `protected override void InitializeQuestOnGameLoad()`：读档修复——重算藏处、重绑特殊队氏族、修 `_directedRaidersToEngagePlayer` 列表、重设各队默认 AI。
- `private void CheckRaiderPartyPlayerEncounter(MobileParty raiderParty)`：实力比 1.2 倍且玩家在野外时**强制派队来打玩家**，并在玩家脱离范围后撤回默认 AI。
- `[SaveableField(1..9)]`：目标城镇、三个进度/队伍引用、进度条、队长、藏处、追击列表全部存档。

## 使用示例

```csharp
// 阶段切换：三支普通队清完才生成特殊队
private void OnBanditPartyClearedByPlayer(MobileParty defeatedParty)
{
    this._regularRaiderParties.Remove(defeatedParty);
    this._regularPartiesProgressTracker.UpdateCurrentProgress(3 - this._regularRaiderParties.Count);
    if (this._regularPartiesProgressTracker.HasBeenCompleted())
    {
        this._specialPartyProgressTracker = AddDiscreteLog(
            this._destroyRaidersSpecialPartyProgress, TextObject.GetEmpty(), 0, 1, null, false);
        this.SpawnRaiderPartyAtHideout(this._closestHideout, true);
    }
}

// 派队主动找玩家：实力超过主队 1.2 倍且玩家不在聚落内
if (raiderParty.Party.CalculateCurrentStrength() > PartyBase.MainParty.CalculateCurrentStrength() * 1.2f
    && MobileParty.MainParty.CurrentSettlement == null)
{
    SetPartyAiAction.GetActionForEngagingParty(raiderParty, MobileParty.MainParty,
        MobileParty.NavigationType.Default, false);
}
```

## 风险与边界

**成功后必然访问 `_targetSettlement.Town`**，而目标可能是城堡——这是崩溃点，mod 里若放宽 `DetermineTargetSettlement` 的候选集必须同时给这段加 `IsTown` 判断。跨读档风险高：九个存档字段里 `_specialPartyProgressTracker` 只在阶段二才创建，读档若发生在阶段一它是 null，后续访问会 NRE；`_directedRaidersToEngagePlayer` 也在读档钩子里做了 null 与数量异常的双重修复，说明它历史上出过问题。任务有 21 天硬时限（基类），超时同样扣关系。另外它会**篡改敌方英雄**：被劫匪抓走的非玩家氏族英雄会被 `EndCaptivityAction.ApplyByEscape` 强制放走（同时打 `Debug.FailedAssert`），所以在这个任务期间劫匪不会真正抓人。

## 依赖关系

- [ConspiracyQuestBase（父类，21 天时限与削弱强度在此）](../ConspiracyQuestBase)
- [ConspiracyProgressQuest（阴谋强度仪表盘）](../ConspiracyProgressQuest)
- [DisruptSupplyLinesConspiracyQuest（并列阴谋任务）](../DisruptSupplyLinesConspiracyQuest)
- [ConspiracyBaseOfOperationsDiscoveredConspiracyQuest（并列阴谋任务）](../ConspiracyBaseOfOperationsDiscoveredConspiracyQuest)
- [CampaignEvents（MapEventEnded / MobilePartyDestroyed 等）](../../campaign/CampaignEvents)