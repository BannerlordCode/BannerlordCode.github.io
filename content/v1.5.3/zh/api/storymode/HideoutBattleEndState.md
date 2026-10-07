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

## 怎么用

### 怎么拿到它

`public enum HideoutBattleEndState` 声明在 `bannerlord-1.5.3/StoryMode/Quests/FirstPhase/ArzagosBannerPieceQuest.cs:313`（嵌套在 `ArzagosBannerPieceQuest` 内，全文 324 行），四个值 `None`（`:316`）、`Retreated`（`:318`）、`Defeated`（`:320`）、`Victory`（`:322`）。

**它没有独立存储**——字段是宿主任务里的 `private ArzagosBannerPieceQuest.HideoutBattleEndState _hideoutBattleEndState;`（`ArzagosBannerPieceQuest.cs:310`），私有、没进存档，只能靠宿主任务读写。拿实例的唯一途径是从一个 `ArzagosBannerPieceQuest` 上读——**但该字段是 private，mod 拿不到**，只能读枚举值。

**最重要的一件事：这个名字在模块里有三份，彼此无关。**

| 宿主类 | 声明位置 | 存档枚举 id |
| --- | --- | --- |
| `ArzagosBannerPieceQuest` | `FirstPhase/ArzagosBannerPieceQuest.cs:313` | 681010（`SaveableStoryModeTypeDefiner.cs:75`） |
| `IstianasBannerPieceQuest` | `FirstPhase/IstianasBannerPieceQuest.cs:317` | 687010（`:74`） |
| `FindHideoutTutorialQuest` | `TutorialPhase/FindHideoutTutorialQuest.cs:796` | 686010（`:73`） |

三个 id 由 `base.AddEnumDefinition(typeof(XxxQuest.HideoutBattleEndState), <id>, null)` 分别登记。**值名相同（`None`/`Retreated`/`Defeated`/`Victory`）但类型不同、存档 id 不同**，把 A 任务的枚举塞进 B 任务不会编译报错（如果都是 `int` 参与比较的话），但语义和存档都对不上。

宿主的写入点在战斗结算回调里：`ArzagosBannerPieceQuest.cs:107`→`:109`（胜利）、`:182`（胜利）、`:187`（撤退）、`:206`（战败）；复位在 `:65`、`:143`、`:202`、`:221`、`:239`。

### 典型用法

```csharp
// 枚举值只在宿主任务内部流转；mod 侧要做的是读日志/判断战斗结果
ArzagosBannerPieceQuest quest = Campaign.Current.QuestManager
    .GetQuest<ArzagosBannerPieceQuest>();
if (quest != null && !quest.IsFinalized)
{
    // 该任务的战斗没结束 -> 玩家还能再打一次藏身处
    Debug.Print("Arzagos 藏住处任务进行中");
}

// 存档 id 是判别「这是哪一份」的唯一可靠依据
Debug.Print("Arzagos 版 HideoutBattleEndState 存档枚举 id = 681010");
Debug.Print("Istiana 版 = 687010，FindHideout 版 = 686010，三者不通用");

// 通用写法：直接看战斗结果，而不是依赖这三个枚举
MapEvent mapEvent = PlayerEncounter.Battle?.MapEvent;
if (mapEvent != null)
{
    bool won = mapEvent.Winner == mapEvent.PlayerSide;
    Debug.Print("藏身处战斗胜=" + won + "，敌方=" + mapEvent.GetMapEventSide(mapEvent.DefeatedSide).Parties.Count);
}
```

### 最容易踩的坑

三个同名枚举的 `None` 都是 0，于是**比较时互相兼容**。你写 `if (someInt == (int)HideoutBattleEndState.Victory)` 时编译器不拦你，但那个 int 到底来自哪份枚举取决于宿主是哪个任务。用 [StoryModeData](../StoryModeData) 的 `StorylineQuestHideoutHiddenDuration` 去重置藏住处攻击时间时（`ArzagosBannerPieceQuest.cs:201`、`:205`），如果把状态判断写成另一份枚举的比较，实际效果取决于两者的字面值恰好相同——一旦某个任务给枚举加了成员，顺序一变就全错。**判断藏住处战斗结果请读 `MapEvent`，不要跨任务复用这三个枚举。**

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