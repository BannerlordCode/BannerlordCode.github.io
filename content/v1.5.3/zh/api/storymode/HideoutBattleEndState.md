---
title: "HideoutBattleEndState"
description: "第一阶段碎片任务内嵌的四值枚举，用来把藏身处战斗结果从 MapEvent 回调传递到游戏菜单分支。"
---
# HideoutBattleEndState

**Namespace:** StoryMode.Quests.FirstPhase
**Module:** StoryMode
**Type:** `public enum HideoutBattleEndState`
**Base:** System.Enum
**Source:** StoryMode/Quests/FirstPhase/ArzagosBannerPieceQuest.cs

## 概述

这是 `IstianasBannerPieceQuest` 与 `ArzagosBannerPieceQuest` **各自独立定义**的一个四值枚举。它存在的唯一理由是跨回调传递信息：战斗结果在 `MapEventEnded` 里产生，但"发碎片、完成任务、治疗、解囚"这些动作必须等到玩家回到地图游戏菜单时才能安全执行。这个枚举就是那张便条。

## 心智模型

生命周期是"写一次、读一次、立刻清零"。写入方有三处：`OnMapEventEnded` 根据 `mapEvent.WinningSide` 判定、`OnHideoutCleared` 在藏住处被系统摧毁时直接判胜、`OnGameMenuOpened` 的胜利分支在结算后写回 `None`。读取方只有 `OnGameMenuOpened`。因为每条读取路径末尾都会复位，枚举回到 `None` 就意味着"没有待处理的战斗结果"。

这就是它作为状态机的核心约束：`None` 是一个**被复用的终态**，不是"未开始"。任何基于 `HideoutBattleEndState == None` 写额外逻辑的代码，都会在玩家每次打开城镇/村庄菜单时误触发。

## 主要成员

- `None`：构造期初始值，也是每次处理完战斗后的复位值。
- `Retreated`：`mapEvent.WinningSide == BattleSideEnum.None`，玩家撤离。走"治疗 + 解囚 + 补满强盗队 + 延长藏住处冷却"的自愈流程。
- `Defeated`：玩家战败。走同一套自愈流程，但额外触发重试引导。
- `Victory`：玩家获胜。`OnGameMenuOpened` 读到它就 `FirstPhase.Instance.CollectBannerPiece()` + `CompleteQuestWithSuccess()`。

## 使用示例

```csharp
// 写：地图事件里判定，只记录不结算
if (mapEvent.WinningSide == mapEvent.PlayerSide)
{
    this._hideoutBattleEndState = HideoutBattleEndState.Victory;
    return;   // 结算推迟到 GameMenuOpened
}

// 读：菜单打开时才动作，末尾无条件复位
if (this._hideoutBattleEndState == HideoutBattleEndState.Victory)
{
    FirstPhase.Instance.CollectBannerPiece();
    CompleteQuestWithSuccess();
}
this._hideoutBattleEndState = HideoutBattleEndState.None;
```

## 风险与边界

它带 `[SaveableField(3)]`，因此**在 `OnMapEventEnded` 与 `OnGameMenuOpened` 之间读档会把 `Victory` 带回来**。幸运的是胜利结算只依赖枚举值、不依赖 `MapEvent`，所以能正确完成——但 `Defeated` 分支里的治疗与补队会无条件触发一次，等于读档后"白送一次回血 + 重刷强盗队"。

真正需要警惕的是**三份同名枚举并存**：本枚举在 `StoryMode.Quests.FirstPhase` 下，`IstianasBannerPieceQuest` 和 `ArzagosBannerPieceQuest` 各自内嵌一个，另外 `StoryMode.Quests.TutorialPhase` 的 `FindHideoutTutorialQuest` 里还有第三份。成员顺序完全一致，但类型互不兼容。C# 不会自动合并同名嵌套类型，`using` 之后必须写全限定名，否则是编译错误而不是隐式选中某一个。任何以"枚举名"做反射扫描的 mod 工具都会同时命中三份。

## 依赖关系

- [IstianasBannerPieceQuest（宿主类型之一）](../IstianasBannerPieceQuest)
- [ArzagosBannerPieceQuest（宿主类型之二）](../ArzagosBannerPieceQuest)
- [HideoutBattleEndState（教程阶段的同名副本）](../HideoutBattleEndState__TutorialPhase)