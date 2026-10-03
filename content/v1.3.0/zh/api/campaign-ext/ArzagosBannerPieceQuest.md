---
title: "ArzagosBannerPieceQuest"
description: "主线第一阶段的一个任务：一个藏身处 + 两支掠夺者队伍 + 一个四态战斗结果机。构造函数里就完成全部初始化和对话注册；OnFinalize 是空实现；HourlyTick 每小时重新灌满藏身处。"
---

# ArzagosBannerPieceQuest

**Namespace:** StoryMode.Quests.FirstPhase
**Module:** StoryMode.Quests
**Type:** `public class ArzagosBannerPieceQuest : StoryModeQuestBase`
**Base:** `StoryModeQuestBase`（→ [QuestBase](../../campaign/QuestBase)）
**File:** `StoryMode/Quests/FirstPhase/ArzagosBannerPieceQuest.cs`（311 行）

## 概述

第一阶段主线里「替 Arzagos 找回旗子碎片」的那一环。整个类的结构是「**一次性的构造函数 + 一个四态状态机 + 每小时重置**」：

```csharp
public ArzagosBannerPieceQuest(Hero questGiver, Settlement hideout)
    : base("arzagos_banner_piece_quest", questGiver,
           StoryModeManager.Current.MainStoryLine.FirstPhase.FirstPhaseEndTime)
{
    this._hideout = hideout;
    this._raiderParties = new List<MobileParty>();
    this.InitializeHideout();
    base.AddTrackedObject(this._hideout);
    this.SetDialogs();
    base.InitializeQuestOnCreation();
    base.AddLog(this._startQuestLog, false);
    this._hideoutBattleEndState = HideoutBattleEndState.None;
}
```

构造函数**一次做完七件事**：存藏身处、建队伍列表、把藏身处标记为已发现且可见、加入 tracked objects、注册对话、初始化任务、写第一条 log、把状态机归零。没有别的初始化入口。

`_hideoutBattleEndState` 是一个四值私有枚举（嵌套在本类里，`:294-304`）：

| 值 | 含义 | 谁写它 |
| --- | --- | --- |
| `None` | 空闲 / 战斗刚结束 | 构造函数（`:45`）、`InitializeHideout`（`:110`）、`OnHideoutCleared` 成功后（`:82`）、`OnMapEventEnded` 撤退分支（`:157`）、`OnGameMenuOpened`（`:194` / `:210`） |
| `Victory` | 玩家打赢了藏身处战斗 | `OnMapEventEnded`（`:131`）、`OnHideoutCleared`（`:79`） |
| `Retreated` | 玩家战败撤退 | `OnMapEventEnded`（`:135`） |
| `Defeated` | 玩家输了但没撤 | `OnMapEventEnded`（`:169`） |

四个事件监听器在 `RegisterEvents`（`:87-93`）里注册，**全部用 `AddNonSerializedListener`**：`MapEventEnded`、`GameMenuOpened`、`IsSettlementBusyEvent`、`OnHideoutDeactivatedEvent`。

## 心智模型

**把它当成「一个由三处事件推进的有限状态机，外面套了一层每小时的自我修复」。**

状态机是这样运转的：

```
                     ┌──────────────────────────────────────────┐
                     │                                          │
  构造函数 / 每小时 ──▶ InitializeHideout()                     │
                     │   IsSpotted = true; IsVisible = true     │
                     │   若 !Hideout.IsInfested：建 2 支掠夺者队  │
                     │   _hideoutBattleEndState = None            │
                     ▼                                          │
                    [None]                                       │
                     │                                          │
        MapEventEnded │ WinningSide == PlayerSide                │
                     ▼                                          │
                 [Victory] ──▶ 打开菜单 / 藏身处被清空           │
                     │             │                             │
                     │             ▼                             │
                     │      CollectBannerPiece()                │
                     │      CompleteQuestWithSuccess()           │
                     │             │                            │
                     │             ▼                            │
                     │        状态回 None，任务结束 ─────────────┘
                     │
                     │ WinningSide == -1（撤退）
                     ▼
               [Retreated] ──▶ 菜单打开：EndCaptivityByPeace + Heal + Inquiry 弹窗
                     │             若 _hideout.Parties.Count == 0 → InitializeHideout()
                     ▼
              其他情况（输但未撤）
                  [Defeated] ──▶ 菜单打开：同样的解救流程
```

三个关键点：

**一、`HourlyTick` 是一个「藏身处空了就把敌人塞回去」的修复循环。**

```csharp
// :62-68
protected override void HourlyTick()
{
    if (!this._hideout.Hideout.IsInfested || !this._hideout.Hideout.IsSpotted || !this._hideout.IsVisible)
    {
        this.InitializeHideout();
    }
}
```

注意这个条件用的是三个 **or**——`IsInfested` 为假就够了。所以「藏身处空了」和「藏身处被从地图上抹掉了」都会触发重建。

**二、`InitializeHideout` 里的 `for (int i = 0; i < 2; i++)` 有一个短路。**

```csharp
// :107-118
if (!this._hideout.Hideout.IsInfested)
{
    for (int i = 0; i < 2; i++)
    {
        if (!this._hideout.Hideout.IsInfested)   // 每次循环内部再查一次
        {
            this._raiderParties.Add(this.CreateRaiderParty(i));
        }
    }
}
```

`CreateRaiderParty` 会 `EnterSettlementAction.ApplyForParty`（`:158`），那一步会把藏处en's `IsInfested` 置真。所以**通常只会创建一支队伍**，第二支被内层的 `if` 拦掉。外层的 `RaiderPartyCount = 2`（`:224` 常量）与实际行为不一致——**这是「看起来能放两队、实际只放一队」的静默差异**。

**三、队伍创建是完全手工的。** `CreateRaiderParty(int number)`（`:121-159`）不是走 AI 逻辑而是手搓：`BanditPartyComponent.CreateBanditParty` → `TroopRoster.AddToCounts(<culture>_bandit, 5)` → `InitializeMobilePartyAtPosition` → `SetCustomName("{=u1Pkt4HC}Raiders")` → `ActualClan = hideout.OwnerClan` → `InitializePartyTrade((int)(1f * MBRandom.RandomFloat * 20f * strength + 50f))` → `SetMoveGoToSettlement` → `Ai.SetDoNotMakeNewDecisions(true)` → `SetPartyUsedByQuest(true)` → `EnterSettlementAction.ApplyForParty`。

**`Ai.SetDoNotMakeNewDecisions(true)` 意味着这两支队伍永远不主动决策**——它们只是驻守在藏身处里的靶子。想让「掠夺者」有 AI 行为，得改这一行。

## 关键成员

| 成员 | 签名（行号） | 这个成员是做什么用的 |
| --- | --- | --- |
| `Title` | `public override TextObject Title`（`:33`） | 每次读都 `new TextObject("{=ay1gPPsP}Find Another Piece of the Banner for Arzagos", null)`。**不是常量字段，每次访问都分配。** |
| `IsRemainingTimeHidden` | `public override bool`（`:40`） | 硬编码 `return false;` —— 与基类 `StoryModeQuestBase`（`StoryMode/StoryModeQuestBase.cs:22`）的实现相反。**基类返回别的值，这里覆盖成「显示剩余时间」。** |
| `_startQuestLog` | `private TextObject`（`:25`） | 第一条日志文本，同样每次访问都 new。 |
| 构造函数 | `public ArzagosBannerPieceQuest(Hero questGiver, Settlement hideout)`（`:44`） | 见上文。**questId 写死 `"arzagos_banner_piece_quest"`，时限取 `StoryModeManager.Current.MainStoryLine.FirstPhase.FirstPhaseEndTime`。** 没有无参构造。 |
| `HourlyTick` | `protected override void`（`:62`） | 三个 or 条件的藏身处重建。**唯一 override 里有实质逻辑的 QuestBase 钩子。** |
| `RegisterEvents` | `protected override void`（`:87`） | 四个 `AddNonSerializedListener`。**`IsSettlementBusy` 是个 `ReferenceAction<Settlement, object, int>`**，收到请求时把 priority 抬到 `Math.Max(priority, 400)`（`:96`），但只在 `asker != this && settlement == this._hideout` 时——**任务自己请求进入藏身处时不会被抬优先级**。 |
| `InitializeQuestOnGameLoad` | `protected override void`（`:106`） | 读档时只重新 `SetDialogs()`。**不重建掠夺者队伍、不重置 `_hideoutBattleEndState`**——后者靠 `[SaveableField(3)]` 从存档恢复。 |
| `SetDialogs` | `protected override void`（`:96`） | 往 `hero_main_options` 优先级 100 的对话流里插一条四句链：`PlayerLine("About the task you gave me...")` → `Condition(conversation_lord_task_given_on_condition)` → `NpcLine("What happened?...")` → `PlayerLine("No, I am still working on it...")` → `CloseDialog()`。 |
| `conversation_lord_task_given_on_condition` | `private bool`（`:102`） | `Hero.OneToOneConversationHero == base.QuestGiver && base.IsOngoing`。 |
| `InitializeHideout` | `private void`（`:108`） | 见上文。 |
| `CreateRaiderParty` | `private MobileParty CreateRaiderParty(int number)`（`:121`） | 见上文。party 名前缀来自常量 `ArzagosRaiderPartyStringId = "arzagos_banner_piece_quest_raider_party_"`（`:226`）。 |
| `OnMapEventEnded` | `private void OnMapEventEnded(MapEvent mapEvent)`（`:127`） | 三个守卫：`PlayerEncounter.Current != null` && `mapEvent.IsPlayerMapEvent` && `Settlement.CurrentSettlement == this._hideout`。三条都不中则状态机**完全不动**。 |
| `OnGameMenuOpened` | `private void OnGameMenuOpened(MenuCallbackArgs args)`（`:174`） | 见状态机图。**注意它第一件事就是「藏身处空了且不是胜利状态 → InitializeHideout」**（`:176`），所以战斗后打开菜单可能已经把队伍补回去了。 |
| `OnHideoutCleared` | `private void OnHideoutCleared(Settlement hideout)`（`:75`） | 藏身处被清空时。守卫是四重与：`hideout == this._hideout` && `LastAttackerParty != null` && `LastAttackerParty.IsMainParty` && (`_hideoutBattleEndState == None` \|\| `PlayerEncounter.Current.ForceHideoutSendTroops`)。 |
| `OnFinalize` | `protected override void`（`:59`） | **`{ base.OnFinalize(); }` —— 空壳。** 掠夺者队伍没有在这里被销毁（它们靠 `SetPartyUsedByQuest(true)` 与藏身处生命周期自然清理）。 |
| `HideoutBattleEndState` | `public enum`（`:294`） | 嵌套枚举，四个值。**`public` 但只在类内使用**，外部代码读不到 `_hideoutBattleEndState`（private）。 |
| 常量 | `MainPartyHealHitPointLimit = 50`（`:222`）、`RaiderPartySize = 10`（`:223`）、`RaiderPartyCount = 2`（`:224`） | **`RaiderPartySize = 10` 是死常量**——`CreateRaiderParty` 里硬写的是 `AddToCounts(..., 5, ...)`，用的是 5 不是 10。`MainPartyHealHitPointLimit = 50` 也是硬编码的：两个分支各写了一遍 `if (Hero.MainHero.HitPoints < 50) Hero.MainHero.Heal(50 - Hero.MainHero.HitPoints, false);`（`:139-142` 与 `:200-203`），**没有引用这个常量**。 |

## 真实示例

读档后的状态判断（本类唯一「安全」对外可观察的东西是任务是否在进行 + 当前藏身处状态）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;

private static bool CanPlayerRetryHideout(ArzagosBannerPieceQuest quest, Settlement hideout)
{
    // IsRemainingTimeHidden 被这个类覆盖成 false，任务带时限
    if (!quest.IsOngoing)
    {
        return false;
    }
    // 每小时 HourlyTick 会把藏身处补回成 infested + visible + spotted，
    // 所以「藏身处被彻底清空」这个状态最迟持续一个小时
    return hideout.Hideout.IsInfested && hideout.Hideout.IsSpotted && hideout.IsVisible;
}
```

想理解「战败后为什么玩家会被放出来」——那是 `OnGameMenuOpened` 里的这段（`:196-209`）：

```csharp
// OnMapEventEnded 的撤退分支和 OnGameMenuOpened 走的是同一套逻辑
if (Hero.MainHero.IsPrisoner)
{
    EndCaptivityAction.ApplyByPeace(Hero.MainHero, null);
    if (Hero.MainHero.HitPoints < 50)
    {
        Hero.MainHero.Heal(50 - Hero.MainHero.HitPoints, false);
    }
    InformationManager.ShowInquiry(new InquiryData(
        new TextObject("{=FPhWhjq7}Defeated", null).ToString(),
        new TextObject("{=btAV7mmq}You are defeated by the raiders in the hideout but you managed to escape...", null).ToString(),
        true, false,
        new TextObject("{=yQtzabbe}Close", null).ToString(),
        null, null, null, "", 0f, null, null, null),
        false, false);
}
```

**注意 `EndCaptivityAction.ApplyByPeace` 是无条件执行的**——玩家被俘后立刻以「和平」方式被放出来，且血量补到至少 50。这段代码没有检查玩家是否真的在这场战斗里被抓。

## 风险与边界

- **`InitializeHideout` 的双重 `for (int i = 0; i < 2; i++)` 实际只建一支队伍。** `:113` 的外层 `if (!IsInfested)` 进去后，内层 `:115` 每次迭代重查；`CreateRaiderParty` 末尾的 `EnterSettlementAction.ApplyForParty`（`:158`）把 `IsInfested` 置真，第二支被跳过。**`RaiderPartyCount = 2` 与实际行为不符**——你照着常量写「会有两队」的逻辑会算错战力和奖励。
- **`RaiderPartySize = 10` 是死常量。** `:223` 定义了它，`:130` 却硬写 `troopRoster.AddToCounts(character, 5, false, 0, 0, true, -1)`——**每队 5 人，不是 10**。
- **`MainPartyHealHitPointLimit = 50` 也是死常量。** `:222` 定义了它，但 `:139-142` 与 `:200-203` 两处都硬编码 `50`。改那个常量不会有任何效果。
- **`OnFinalize` 是空的。** `{ base.OnFinalize(); }`（`:59-62`），掠夺者队伍不会被显式销毁。任务完成/放弃后它们靠 `Hideout` 自己的清理走。如果你在 mod 里复用这个模式，**必须自己处理队伍回收**，否则它们会带着 `SetPartyUsedByQuest(true)` 的标记留在世界里。
- **`SetDialogs` 与构造函数、`InitializeQuestOnGameLoad` 都调它。** 读档路径（`:106`）重跑 `SetDialogs` 会在 `hero_main_options`（优先级 100）里**再插一条同 id 的对话流**。`ConversationManager.AddDialogFlow` 没有去重——`conversation_lord_task_given_on_condition` 返回 true 时玩家会看到重复的追问链。
- **`OnMapEventEnded` 的三个守卫里含 `PlayerEncounter.Current != null`。** 在藏身处里做地图事件但 `PlayerEncounter.Current` 已被清掉时，**战斗结果被整个丢弃**：`_hideoutBattleEndState` 停在 `None`，任务不会完成也不会失败。
- **`OnGameMenuOpened` 会在菜单打开时补队伍。** `:176-178` 的条件是「不是 Victory && 当前在藏身处 && 不再 infested」，所以战败后打开菜单的那一刻敌人就已经补回来了。**「战败 → 等一小时再来」的提示语与实际节奏不一致**，实际是「关掉菜单再来就行」。
- **`OnHideoutCleared` 里 `PlayerEncounter.Current.ForceHideoutSendTroops` 有 NRE 风险。** `:78` 的条件是 `_hideoutBattleEndState == None || PlayerEncounter.Current.ForceHideoutSendTroops`——**短路只在第一项为 true 时生效**；如果 `_hideoutBattleEndState` 是 `Victory`（`:79` 刚由 `OnMapEventEnded` 写入），就必须解引用 `PlayerEncounter.Current`，而它此时**可能已经是 null**（`OnMapEventEnded` 自己的守卫只保证进入时非空）。
- **`CreateRaiderParty` 的 troop 类型依赖 `hideout.Culture.StringId + "_bandit"`。** `:126` 的 `ObjectManager.GetObject<CharacterObject>(...)` 拿不到就返回 null，`:128` 的 `AddToCounts(null, 5, ...)` 会抛。藏处en's Culture 决定了这支队伍是什么兵种——**改藏处en's culture 会让这个任务直接崩**。
- **`Ai.SetDoNotMakeNewDecisions(true)` 让掠夺者队伍完全静止。** `:156`。它们不主动出击、不追击、不撤退。想让「藏处遭遇战」变成真实战斗，得去掉这一行。
- **`RegisterEvents` 用 `AddNonSerializedListener`。** 四个监听器都不参与存档，读档后由 `InitializeQuestOnGameLoad` 重建——**但它只重建了对话，事件监听器由 QuestBase 基类自己重新注册**。
- **`HideoutBattleEndState` 虽是 public 嵌套枚举，但状态字段是 private。** 外部代码拿不到「当前处于哪个状态」，只能通过 `MobileParty` 状态或藏处en's `IsInfested` 间接推断。

## 跨版本提示

- **8 条 public/protected 声明（类 + 构造函数 + `Title` + `IsRemainingTimeHidden` + 4 个 override）在 1.4.6 / 1.4.7 / 1.5.3 上与 1.3.0 完全一致。** 自动比对里唯一出现的「差异」只是构造函数那一行在更高版本被拆成了多行（`: this(...)` 单独一行），签名本身逐字相同。1.3.15 与 1.4.5 是残缺树，没有 `StoryMode/Quests/FirstPhase/` 目录。
- **`HideoutBattleEndState` 四个值、`RaiderPartyCount` / `RaiderPartySize` / `MainPartyHealHitPointLimit` 三个常量、四个事件监听器、`HourlyTick` 的三 or 条件、两个 dead constant，在所有存在的版本里逐字一致。**
- **对 mod 的实际含义：** 这个类是官方主线的样板，也是**「一个 quest 完整长什么样」最好的参考实现**。1.3.0 → 1.5.3 升级时你的补丁不需要改；但如果你在更高版本上写同类任务，**不要照抄那三个 dead constant 和 `for` 双重守卫的写法**——它们在官方代码里就是错的。

## 依赖关系

- 基类链：`StoryModeQuestBase`（`StoryMode/StoryModeQuestBase.cs`）→ [QuestBase](../../campaign/QuestBase)，提供 `QuestGiver` / `IsOngoing` / `AddLog` / `AddTrackedObject` / `InitializeQuestOnCreation` / `CompleteQuestWithSuccess` / `HourlyTick`
- 地图实体：[Settlement](../../campaign/Settlement) 的 `Hideout` 属性（藏身处专属）、`Hideout.IsInfested` / `IsSpotted`、`GatePosition`、`OwnerClan`、`LastAttackerParty`、`Parties`
- 队伍：[MobileParty](../../campaign/MobileParty)、`BanditPartyComponent.CreateBanditParty`、`EnterSettlementAction`（同桶）、`EndCaptivityAction`（同桶）
- 阶段推进：`FirstPhase.Instance.CollectBannerPiece()`（同桶，任务完成时写回主线进度）+ `StoryModeManager.Current.MainStoryLine.FirstPhase.FirstPhaseEndTime`
- 事件源：`CampaignEvents.MapEventEnded` / `GameMenuOpened` / `IsSettlementBusyEvent` / `OnHideoutDeactivatedEvent`
- UI：[InformationManager](../../core-extra/InformationManager) 的 `ShowInquiry`；文本全部用带 `{=hash}` 的 [TextObject](../../localization/TextObject)
- 桶首页：[campaign-ext API 分区](../)
