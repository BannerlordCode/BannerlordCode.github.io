---
title: "ArzagosBannerPieceQuest"
description: "龙旗碎片任务（反帝国线）：结构与帝国版逐行对称，在指定藏身处打光强盗即可取得一块碎片。"
---
# ArzagosBannerPieceQuest

**Namespace:** StoryMode.Quests.FirstPhase
**Module:** StoryMode
**Type:** `public class ArzagosBannerPieceQuest : StoryModeQuestBase`
**Base:** StoryModeQuestBase
**Source:** StoryMode/Quests/FirstPhase/ArzagosBannerPieceQuest.cs

## 概述

`IstianasBannerPieceQuest` 的反帝国版本，逐行对称：相同的四态枚举中转、相同的 `InitializeHideout` 补队、相同的胜利结算。全部差异只有三处——绑定的导师/藏身处由构造参数传入、对话文案由 `questGiver` 决定、以及**强盗队 StringId 前缀**从 `istiana_banner_piece_quest_raider_party_` 换成 `arzagos_banner_piece_quest_raider_party_`。理解了这个类，就等于理解了帝国线碎片任务。

## 心智模型

构造签名与帝国版完全一致：`(Hero questGiver, Settlement hideout)`，时限取 `StoryModeManager.Current.MainStoryLine.FirstPhase.FirstPhaseEndTime`。它在构造期立刻把藏住处设成可见、补满强盗、注册菜单与对话。

状态中转依然靠私有 `_hideoutBattleEndState`（本类型自己的 `HideoutBattleEndState` 枚举，与 `IstianasBannerPieceQuest` 内嵌的那个同名枚举**类型无关**）。写入点三处：地图事件结束时判胜负、藏住处被摧毁时判胜利、游戏菜单打开时读到胜利即结算。**结算后不总是复位**——成功分支里显式写了复位再 `return`，而失败分支靠末尾统一复位。

坑与帝国版同源但有一个更明显的问题：`OnMapEventEnded` 里存在一段**括号作用域只覆盖单个 `if`** 的 heal/captivity 代码——先 `if (retreat) { ... EndCaptivityAction.ApplyByPeace(...); if (HitPoints < 50) { Heal(...) } ... return; }`，语义正确但可读性极差，移植时容易把 `return` 挪错位置。另外 `_raiderParties` 同样只增不减。`ArzagosRaiderPartyStringId` 常量声明了但实际用的是字面量拼接，改常量不生效。

## 主要成员

- `ArzagosBannerPieceQuest(Hero questGiver, Settlement hideout)`：构造入口。
- `protected override void HourlyTick()`：藏住处不再被占领或不可见时 `InitializeHideout()` 补队。
- `protected override void RegisterEvents()`：与帝国版相同的四个事件。
- `private void IsSettlementBusy(Settlement settlement, object asker, ref int priority)`：本藏处处优先级提到 400。
- `private void OnHideoutCleared(Settlement hideout)`：藏住处摧毁 + 玩家为首要攻击者 → Victory → `CollectBannerPiece()` + 完成任务。
- `private void InitializeHideout()` / `CreateRaiderParty(int number)` / `GetHideoutClan(Settlement hideout)`：按 `arzagos_banner_piece_quest_raider_party_` 前缀生成强盗队，各 5 人。
- `private void OnMapEventEnded(MapEvent mapEvent)`：胜/撤/负三态判定，失败时设藏住处下次可攻击时间。
- `private void OnGameMenuOpened(MenuCallbackArgs args)`：胜利结算 / 失败自愈 + 统一复位。
- `public enum HideoutBattleEndState`：`None, Retreated, Defeated, Victory`。
- `[SaveableField(1..3)]`：`_hideout`、`_raiderParties`、`_hideoutBattleEndState`。

## 使用示例

```csharp
// 战斗结果判定：胜利只置标记，实际结算推迟到下一次打开菜单
private void OnMapEventEnded(MapEvent mapEvent)
{
    if (mapEvent.WinningSide == mapEvent.PlayerSide)
    {
        this._hideoutBattleEndState = HideoutBattleEndState.Victory;
        return;
    }
    this._hideout.Hideout.SetNextPossibleAttackTime(StoryModeData.StorylineQuestHideoutHiddenDuration);
    this._hideoutBattleEndState = HideoutBattleEndState.Defeated;
}

// 菜单打开时才真正给碎片并结束任务
if (this._hideoutBattleEndState == HideoutBattleEndState.Victory)
{
    FirstPhase.Instance.CollectBannerPiece();
    CompleteQuestWithSuccess();
    this._hideoutBattleEndState = HideoutBattleEndState.None;
}
```

## 风险与边界

与帝国版共享同样的两个隐患：`_hideoutBattleEndState` 存档导致"战斗瞬间读档"会把胜利状态带回来（这里安全，因为结算不依赖 `MapEvent`），以及 `_raiderParties` 无限增长。**额外的移植风险**是同名枚举：如果 mod 同时 `using StoryMode.Quests.FirstPhase` 并引用 `IstianasBannerPieceQuest` 的枚举，会得到二义性错误，必须写 `IstianasBannerPieceQuest.HideoutBattleEndState` 或 `ArzagosBannerPieceQuest.HideoutBattleEndState` 完整限定。`RaiderPartySize = 10` 与 `RaiderPartyCount = 2` 两个常量中，`RaiderPartySize` 实际未被使用（真实人数 5），只有 `RaiderPartyCount = 2` 生效。

## 依赖关系

- [HideoutBattleEndState（本类内嵌枚举）](../HideoutBattleEndState)
- [IstianasBannerPieceQuest（对称任务）](../IstianasBannerPieceQuest)
- [MeetWithArzagosQuest（导师线入口）](../MeetWithArzagosQuest)
- [AssembleTheBannerQuest（收集碎片后推进的主线）](../AssembleTheBannerQuest)