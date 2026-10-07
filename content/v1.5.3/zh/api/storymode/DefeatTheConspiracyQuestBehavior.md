---
title: "DefeatTheConspiracyQuestBehavior"
description: "第三阶段总控：阴谋激活时组建对立王国、凭空造出援军部队与新氏族，为每个敌对王国开一个战争进度任务，并在终局播放结局动画。"
---
# DefeatTheConspiracyQuestBehavior

**Namespace:** StoryMode.Quests.ThirdPhase
**Module:** StoryMode
**Type:** `public class DefeatTheConspiracyQuestBehavior : CampaignBehaviorBase`
**Base:** CampaignBehaviorBase
**Source:** ThirdPhase/DefeatTheConspiracyQuestBehavior.cs

## 概述

这是**整个战役脚本的最后一段**。它监听 `StoryModeEvents.OnConspiracyActivatedEvent`（玩家把阴谋强度削到 0 的那一刻），然后一次性完成四件事：挑选敌对王国并强制它们互相停战、按阴谋强度凭空造出若干新氏族与领主部队、把玩家的支持王国与它们宣战、为每个敌对王国创建一个 `DefeatTheConspiracyQuest`。当所有敌对王国都被打掉时，它播放结局动画并进入结算画面。

## 心智模型

它是战役行为（`CampaignBehaviorBase`），常驻整个存档，唯一的 `SyncData` 保存两个字段：`_hasBeenFinalized`（结局是否已播过）和 `_partiesCreatedForQuest`（它造出来的部队列表，用于 `MobilePartyDestroyed` 时反查）。

`InitializeFinalPhase()` 是全游戏最暴力的一段初始化：它会 `Kingdom.ReactivateKingdom()` 复活已灭亡的王国（因为需要一个够数的目标）、给敌对王国两两 `MakePeaceAction.Apply` 让它们停战集中火力、按 `{0.5, 0.3, 0.2}` 的权重把阴谋强度分摊给最多三个目标王国、再按"每 200 人一个新领主"的公式 `Clan.CreateClan` + `HeroCreator.CreateSpecialHero` 造出**全新的氏族与英雄**，最后 `DeclareWarAction.ApplyByPlayerHostility` 对每个目标宣战。

坑非常关键。第一，它给玩家支持的王国调 `ChangeRelationAction.ApplyPlayerRelation(leader, -10, true, true)`——**主线终局会主动扣玩家和某些王国领袖的关系**。第二，造出的新氏族 ID 是 `"main_storyline_clan_" + clanName + "_" + 同名计数`，这个**命名依赖当时地图上已有的氏族名**，旧存档读回来如果地图已变可能撞名。第三，`_partiesCreatedForQuest` 存档但造出来的英雄与氏族**本身不进这个列表**，如果它们在读档后已被其它系统清理，`HourlyTick` 的 `OppositionKingdoms.IsEmpty` 判定仍会正常收尾——但过程中可能出现"目标王国还在、援军却没了"的空转。第四，`TroopLimitPerNewClanParty = 600` 这个 public 常量在 `InitializeFinalPhase` 里**并没有被引用**，是给 mod 调参用的钩子。

## 怎么用

### 怎么拿到它

`public class DefeatTheConspiracyQuestBehavior : CampaignBehaviorBase` 声明在 `bannerlord-1.5.3/StoryMode/Quests/ThirdPhase/DefeatTheConspiracyQuestBehavior.cs:24`，全文 947 行——**这是模块里最长的文件之一，一个文件里装着四个类型**：行为本身（`:24`）、嵌套的 `OppositionData`、`DefeatTheConspiracyQuestBehaviorTypeDefiner`（`:469`）、嵌套的 `DefeatTheConspiracyQuest`（`:486`）。

注册点：`campaignGameStarter.AddBehavior(new DefeatTheConspiracyQuestBehavior())`（`StoryModeSubModule.cs:84`），**无条件**——不在阶段条件块里，所以整个存档期都在。取实例用 `Campaign.Current.GetCampaignBehavior<DefeatTheConspiracyQuestBehavior>()`。

**唯一公开方法就是你要的那个**：`public bool IsMobilePartyCreatedForQuest(MobileParty mobileParty)`（`:27`），函数体是 `this._partiesCreatedForQuest.Contains(mobileParty)`（`:30`）——`List<MobileParty>.Contains`，**引用相等**。

它被外部模型消费：[StoryModePartySizeLimitModel](../StoryModePartySizeLimitModel) 通过一个私有惰性属性缓存住这个行为（`StoryModePartySizeLimitModel.cs:30`→`:38`），然后调 `IsMobilePartyCreatedForQuest(party.MobileParty)`（`:99`）——命中就 `return new ExplainedNumber(600f, false, null)`（`:101`）。**`600` 正是本文件里的 `public const int TroopLimitPerNewClanParty = 600;`（`:409`）。**

`RegisterEvents()`（`:53`）挂三条：`StoryModeEvents.OnConspiracyActivatedEvent`（`:55`）、`CampaignEvents.HourlyTickEvent`（`:56`）、`CampaignEvents.MobilePartyDestroyed`（`:57`）。主流程在 `protected void InitializeFinalPhase()`（`:109`），末尾 `defeatTheConspiracyQuest.StartQuest();`（`:169`）。`HourlyTick()`（`:76`）、`OnConspiracyActivated()`（`:70`）、`OnMobilePartyDestroyed(MobileParty mobileParty, PartyBase destroyerParty)`（`:61`）是三条推进线。

存档字段带公开可见性：`InitialWarScore`（`[SaveableField(10)]`，`:452`→`:453`）、`ReinforcedWarScore`（20，`:456`→`:457`）、`QuestLog`（30，`:460`→`:461`）、`LastPeaceOfferDate`（40，`:464`→`:465`），私有的是 `_hasBeenFinalized`（`:403`）与 `_partiesCreatedForQuest`（`:406`）。战斗统计文案在 `ShowGameStatistics()`（`:392`），每个新领主 `TroopCountPerNewLord = 200`（`:400`）。

### 典型用法

```csharp
// 1) 公开入口：判断某个队伍是不是本行为为终局任务造的
DefeatTheConspiracyQuestBehavior def =
    Campaign.Current.GetCampaignBehavior<DefeatTheConspiracyQuestBehavior>();
if (def != null && StoryModeManager.Current.MainStoryLine.ThirdPhase != null)
{
    Debug.Print("任务队伍 600 上限常量=" + DefeatTheConspiracyQuestBehavior.TroopLimitPerNewClanParty);

    // 玩家在终局里造出来的领主队伍
    foreach (MobileParty p in Settlement.All
                 .Where(s => s.IsFortification)
                 .Select(s => s.Siege?.BesiegerParty)
                 .Where(p => p != null))
    {
        if (def.IsMobilePartyCreatedForQuest(p))
        {
            Debug.Print(p.Name + " 是终局任务队伍，上限 " + def.TroopLimitPerNewClanParty);
        }
    }
}

// 2) 与玩家队伍人数上限的关系（复现 StoryModePartySizeLimitModel 的分支）
PartySizeLimitModel limit = Campaign.Current.Models.PartySizeLimitModel;
Debug.Print("主队人数上限=" + limit.GetPartyMemberSizeLimit(PartyBase.MainParty, true).Result);

// 3) 终局进度字段是公开的，可直接读
Debug.Print("初始战争分=" + def.InitialWarScore + "，上次和谈=" + def.LastPeaceOfferDate);
```

### 最容易踩的坑

`IsMobilePartyCreatedForQuest`（`:27`）用 `List<MobileParty>.Contains`（`:30`），是**引用相等**；而 `_partiesCreatedForQuest`（`:406`）**没有 `[SaveableField]` 标注**——它不进存档。读档后这个列表由 `InitializeFinalPhase` 重新填充，在那之前 `IsMobilePartyCreatedForQuest` 对任何队伍都返回 false，于是 [StoryModePartySizeLimitModel](../StoryModePartySizeLimitModel) 的 `600` 人上限分支**在读档初期不生效**，队伍人数暂时走基类计算，队伍 UI 上的数字会在读档后跳一次。

## 主要成员

- `public override void RegisterEvents()`：挂 `OnConspiracyActivatedEvent`、`CampaignEvents.HourlyTickEvent`、`MobilePartyDestroyed`。
- `public bool IsMobilePartyCreatedForQuest(MobileParty mobileParty)`：**public 判定接口**，供外部（成就系统、UI）识别"这支部队是终局脚本造的"。
- `public const int TroopLimitPerNewClanParty = 600`：公开的调参常量。
- `protected void InitializeFinalPhase()`：整个终局的编排方法（详见心智模型）。
- `private void HourlyTick()`：`OppositionKingdoms` 为空且未播过结局 → 弹 inquiry → 玩家确认后 `Campaign.Current.TimeControlMode = Stop` → `PlayOutroCinematic` → `ShowGameStatistics`。
- `private static void PlayOutroCinematic(string videoFile, string audioFile, string subtitleFile, Action onVideoFinished)`：从 `SandBox` 模块的 `Videos/CampaignOutro/` 目录取 `.ivf` 视频 + `.ogg` 音频 + 字幕文件，按立场二选一（`imperial_outro` / `anti_imperial_outro`，三者同名），推入 `VideoPlaybackState`。
- `private void ShowGameStatistics()`：弹出 `GameOverState`（`GameOverReason.Victory`）。
- `public override void SyncData(IDataStore dataStore)`：`SyncData<bool>("_hasBeenFinalized")` 与 `SyncData<List<MobileParty>>("_partiesCreatedForQuest")`。
- `internal class OppositionData`：每个敌对王国的战况数据（初始战分数、强化后战分数、任务日志、上次提出和谈的日期），四个字段全带 `[SaveableField(10/20/30/40)]`。
- `public class DefeatTheConspiracyQuestBehaviorTypeDefiner : SaveableTypeDefiner`：全局 id `16000`，注册 `OppositionData` 为 id 1、`DefeatTheConspiracyQuest` 为 id 2。
- `public class DefeatTheConspiracyQuest : StoryModeQuestBase`（内嵌，见独立页）。

## 使用示例

```csharp
// 终局触发点：阴谋强度被削到 0 的那一刻
public override void RegisterEvents()
{
    StoryModeEvents.OnConspiracyActivatedEvent.AddNonSerializedListener(this, new Action(this.OnConspiracyActivated));
    CampaignEvents.HourlyTickEvent.AddNonSerializedListener(this, new Action(this.HourlyTick));
    CampaignEvents.MobilePartyDestroyed.AddNonSerializedListener(this, new Action<MobileParty, PartyBase>(this.OnMobilePartyDestroyed));
}

// 造出新氏族与领主部队，撑起终战的兵力
Clan clan = Clan.CreateClan("main_storyline_clan_" + clanName + "_" + sameNameCount);
clan.Culture = kingdom.Culture;
clan.Banner = Banner.CreateRandomClanBanner(-1);
clan.IsNoble = true;
Hero lord = HeroCreator.CreateSpecialHero(lordTemplate.CharacterObject, settlement, clan, null, -1);
GiveGoldAction.ApplyBetweenCharacters(null, lord, 200000, true);
lord.ChangeState(Hero.CharacterStates.Active);
```

## 风险与边界

`InitializeFinalPhase()` **只应该跑一次**——它靠 `OnConspiracyActivatedEvent` 触发，而该事件是全局的；一旦某个 mod 重复触发它，会再造一批氏族与部队并重复宣战。它还会**修改地图政治格局**（复活王国、强制停战、扣关系），这些副作用无法通过"结束任务"回滚。`_hasBeenFinalized` 是唯一的幂等保护，但只保护结局动画，不保护 `InitializeFinalPhase` 本身。结局视频文件路径硬编码为 `SandBox` 模块的相对目录，改模块名或用 mod 覆盖时必须同步改这段。`OppositionData` 的 SaveId 从 **10** 起跳（10/20/30/40），新增字段请接着用 50，不要复用。

## 依赖关系

- [DefeatTheConspiracyQuest（内嵌的战争进度任务）](../DefeatTheConspiracyQuest)
- [DefeatTheConspiracyQuestBehaviorTypeDefiner（存档注册）](../DefeatTheConspiracyQuestBehaviorTypeDefiner)
- [ConspiracyProgressQuest（激活阴谋的常驻任务）](../ConspiracyProgressQuest)
- [CampaignBehaviorManager（战役行为的注册与获取入口）](../../campaign-ext/CampaignBehaviorManager)
- [module-map（结局状态机与界面栈归属的模块总览）](../../../architecture/module-map)