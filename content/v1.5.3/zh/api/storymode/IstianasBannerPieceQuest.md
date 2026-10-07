---
title: "IstianasBannerPieceQuest"
description: "龙旗碎片任务（帝国线）：在藏身处击败强盗即可取得一块碎片，用私有四态枚举跨菜单传递战斗结果。"
---
# IstianasBannerPieceQuest

**Namespace:** StoryMode.Quests.FirstPhase
**Module:** StoryMode
**Type:** `public class IstianasBannerPieceQuest : StoryModeQuestBase`
**Base:** StoryModeQuestBase
**Source:** StoryMode/Quests/FirstPhase/IstianasBannerPieceQuest.cs

## 概述

第一阶段的碎片收集任务（帝国导师线）。玩家从 Istiana 那里得知某个藏身处藏着龙旗碎片，进入藏身处打光强盗就能拿到一块。任务本身不含"给予物品"的逻辑——它只调 `FirstPhase.Instance.CollectBannerPiece()` 递增全局计数，剩下的物品发放由 `StoryModeBannerItemModel` 处理。它真正做的事是**把藏身处变成一个稳定可反复攻击的靶子**：没有强盗就生成两支强盗队、赢了就结算、输了就把队伍补满。

## 心智模型

由帝国导师线的剧情逻辑创建，构造时传入 `Hero questGiver` 与 `Settlement hideout`。时限是 `FirstPhase.FirstPhaseEndTime`。

它的状态中转机制和教程版 `FindHideoutTutorialQuest` 完全同构：用一个内嵌枚举 `_hideoutBattleEndState`（None/Retreated/Defeated/Victory）把"刚才那场仗结果如何"从 `MapEventEnded` 传递到 `GameMenuOpened`。三个地方会写这个枚举：`OnMapEventEnded` 判胜负、`OnHideoutCleared` 直接判胜利、`OnGameMenuOpened` 在读到 Victory 后立刻结算并复位。

坑：`_hideout.Hideout.IsInfested` 是所有补队逻辑的开关。`HourlyTick` 里只要藏身处不再"被占领"或者不可见，就调 `InitializeHideout()` 重新塞两支队。这意味着**玩家把强盗全清了但没触发胜利分支时，队伍会在下一个小时回来**。另外 `IsSettlementBusy` 把这个藏身处的占用优先级拉到 400，保证没有别的系统抢走它。`RaiderPartySize = 10` 这个常量其实没被用到——实际放 5 人（`AddToCounts(bandit, 5, ...)`），所以别把它当难度参数。

## 怎么用

### 怎么拿到它

`public class IstianasBannerPieceQuest : StoryModeQuestBase` 声明在 `bannerlord-1.5.3/StoryMode/Quests/FirstPhase/IstianasBannerPieceQuest.cs:22`，全文约 330 行。与 [ArzagosBannerPieceQuest](../ArzagosBannerPieceQuest) 结构逐行对称，只换导师。

构造函数 `IstianasBannerPieceQuest(Hero questGiver, Settlement hideout)`（见本页「主要成员」），基类调用 `: base(..., questGiver, StoryModeManager.Current.MainStoryLine.FirstPhase.FirstPhaseEndTime)`——**任务 id 硬编码、时限取第一阶段截止**，第一阶段没开始时 NRE。存档 id 687001（`SaveableStoryModeTypeDefiner.cs:54`）。

**谁创建它**：[FirstPhaseCampaignBehavior](../FirstPhaseCampaignBehavior) 的 `OnQuestCompleted`（`:65`）里 `new IstianasBannerPieceQuest(imperialMentor, this.FindSuitableHideout(imperialMentor)).StartQuest();`——**藏住处由行为侧的 `FindSuitableHideout(Hero questGiver)` 选好传进来**。

`RegisterEvents()` 挂四条 `CampaignEvents.*`：`MapEventEnded`、`GameMenuOpened`、`IsSettlementBusyEvent`（`ReferenceAction<Settlement, object, ref int>`）、`OnHideoutDeactivatedEvent`。旗片进度由 `FirstPhase.Instance.CollectBannerPiece()` 推进，战斗结算分派四个状态（胜利 / 撤退 / 复位 / 战败），战败与撤退走同一套自愈流程，冷却用 `StoryModeData.StorylineQuestHideoutHiddenDuration`（`:206`、`:210`）。

**本类嵌套着 `public enum HideoutBattleEndState`**（`:317`，值在 `:320`/`:322`/`:324`/`:326`），存档枚举 id 是 **687010**（`SaveableStoryModeTypeDefiner.cs:74`）——**注意它与 `ArzagosBannerPieceQuest` 的 681010、`FindHideoutTutorialQuest` 的 686010 是三个不同的登记**。

对话流挂 `"hero_main_options"`、priority `100`。

### 典型用法

```csharp
// 1) 正常由 FirstPhaseCampaignBehavior 创建
IstianasBannerPieceQuest q = new IstianasBannerPieceQuest(
    StoryModeHeroes.ImperialMentor, someHideoutSettlement);
q.StartQuest();

// 2) 旗片进度
FirstPhase first = StoryModeManager.Current.MainStoryLine.FirstPhase;
Debug.Print("碎片=" + first.CollectedBannerPieceCount + "/" + FirstPhase.NeededBannerPieceCount);

// 3) 藏住处冷却
Debug.Print("藏住处隐藏时长=" + StoryModeData.StorylineQuestHideoutHiddenDuration.ToHours + " 小时");

// 4) 三份同名枚举的存档 id（互不通用）
Debug.Print("Istiana 版 = 687010，Arzagos 版 = 681010，FindHideout 版 = 686010");

// 5) 读任务
QuestBase b = Campaign.Current.QuestManager.GetQuest<IstianasBannerPieceQuest>();
Debug.Print("id=" + b.QuestId + "，存档 id=687001，发布者=" + b.QuestGiver?.Name);
```

### 最容易踩的坑

它与 `ArzagosBannerPieceQuest` 会在**同一个存档里共存的可能**——两条任务的旗片都往同一个 `FirstPhase.Instance.CollectedBannerPieceCount` 上加，而旗片总数是 3。你在 mod 里把 `FindSuitableHideout` 改成对两位导师返回**同一座藏住处**，两支强盗队就会在同一个 `Hideout` 里打架；两边的 `HideoutBattleEndState`（`:317` 与 `ArzagosBannerPieceQuest.cs:313`）各写各的私有字段，互不通知，于是**一座藏住处可能同时被判成「已被 Arzagos 线清空」和「Istiana 线尚未开始」**。

## 主要成员

- `IstianasBannerPieceQuest(Hero questGiver, Settlement hideout)`：构造入口。`InitializeHideout()` → `AddTrackedObject(_hideout)` → `SetDialogs()` → `InitializeQuestOnCreation()` → 写日志。
- `protected override void HourlyTick()`：藏身处被清空/不可见时重新 `InitializeHideout()`。
- `protected override void RegisterEvents()`：挂 `MapEventEnded`、`GameMenuOpened`、`IsSettlementBusyEvent`、`OnHideoutDeactivatedEvent`。
- `private void IsSettlementBusy(Settlement settlement, object asker, ref int priority)`：把本藏处处的优先级提到 400。
- `private void OnHideoutCleared(Settlement hideout)`：藏身处被彻底摧毁时，若 `LastAttackerParty.IsMainParty` 且当前状态允许（或玩家勾选了"遣散部队攻点"），直接判 Victory、收集碎片、完成任务。
- `private void InitializeHideout()` / `CreateRaiderParty(int number)` / `GetHideoutClan(Settlement hideout)`：把藏处处设为可见，按文化找对应的强盗氏族（排除 `looters`），用 `BanditPartyComponent.CreateBanditParty` 生成两支各 5 人的队伍并 `SetDoNotMakeNewDecisions(true)` + `EnterSettlementAction`。
- `private void OnMapEventEnded(MapEvent mapEvent)`：胜利置 Victory；`BattleSideEnum.None` 置 Retreated 并解囚/治疗/补队/延长藏身处冷却；其余置 Defeated。
- `private void OnGameMenuOpened(MenuCallbackArgs args)`：**结算中枢**。Victory → `CollectBannerPiece()` + `CompleteQuestWithSuccess()`；Retreated/Defeated → 解囚、治疗、补队。最后统一把枚举复位为 None。
- `public enum HideoutBattleEndState`：本类内嵌枚举（与教程版同名但类型独立）。
- `[SaveableField(1..3)]`：`_hideout`、`_raiderParties`、`_hideoutBattleEndState`。

## 使用示例

```csharp
// 藏身处被系统判定为"已清空"时也算胜利（覆盖玩家主动遣散部队攻点的情况)
private void OnHideoutCleared(Settlement hideout)
{
    if (hideout != this._hideout) return;
    MobileParty lastAttacker = hideout.LastAttackerParty;
    if (lastAttacker != null && lastAttacker.IsMainParty &&
        (this._hideoutBattleEndState == HideoutBattleEndState.None || PlayerEncounter.Current.ForceHideoutSendTroops))
    {
        this._hideoutBattleEndState = HideoutBattleEndState.Victory;
        FirstPhase.Instance.CollectBannerPiece();
        CompleteQuestWithSuccess();
    }
}

// 战败后把藏住处重新填满，让玩家能立刻重来
this._hideout.Hideout.SetNextPossibleAttackTime(StoryModeData.StorylineQuestHideoutHiddenDuration);
this.InitializeHideout();
```

## 风险与边界

`_hideoutBattleEndState` 带 `[SaveableField(3)]`，意味着**战斗结束瞬间读档会把 `Victory` 状态带回来**，而此时 `MapEvent` 已失效——`OnGameMenuOpened` 里的胜利分支只依赖枚举值不需要 MapEvent，所以恰好能安全结算；但如果读档发生在 `OnMapEventEnded` 置 `Defeated` 之后、菜单结算之前，玩家会白挨一次治疗与补队循环。`_raiderParties` 是 `readonly List<MobileParty>` 且会一直累积——`InitializeHideout` 每次都 `Add` 但从不 `Remove`，长时间打不动会积累大量失效队伍引用（虽然 `HourlyTick` 只检查 `IsInfested`，不会因此崩）。这是本类最实在的长期隐患。

## 依赖关系

- [HideoutBattleEndState（本类内嵌枚举）](../HideoutBattleEndState)
- [ArzagosBannerPieceQuest（几乎逐行相同的反帝国版本）](../ArzagosBannerPieceQuest)
- [AssembleTheBannerQuest（收集碎片后推进的主线）](../AssembleTheBannerQuest)
- [BannerInvestigationQuest（同阶段并行任务）](../BannerInvestigationQuest)