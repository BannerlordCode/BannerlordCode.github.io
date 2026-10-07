---
title: "HideoutBattleEndState"
description: "教程藏身处战斗的四种结局标记：None / Retreated / Defeated / Victory，作为跨菜单事件的状态中转。"
---
# HideoutBattleEndState

**Namespace:** StoryMode.Quests.TutorialPhase
**Module:** StoryMode
**Type:** `public enum HideoutBattleEndState`
**Base:** System.Enum
**Source:** StoryMode/Quests/TutorialPhase/FindHideoutTutorialQuest.cs

## 概述

`FindHideoutTutorialQuest` 内嵌的一个四值枚举，用来描述"刚刚那场藏身处战斗结果如何"。它本身没有任何逻辑，全部意义在于给任务一个可存档的整数状态：**战斗结束时写入，游戏菜单打开时读取并据此分支**。因为 `Bannerlord` 的战斗结果回调（`MapEventEnded`）发生在战斗场景内，而任务的绝大部分处理逻辑要等玩家回到地图菜单才执行，这个枚举就是两者之间唯一的状态载体。

## 心智模型

它在任务里扮演"跨场景信箱"：战斗结束的那一刻 `MapEvent` 已经失效，而 `GameMenuOpened` 回调里 `MapEvent.PlayerMapEvent` 可能已经被清空。`FindHideoutTutorialQuest` 因此不信任事件时序，而是在 `radagos_hideout_menu_on_init` 里第一时间把这个枚举写好，然后在 `OnGameMenuOpened` 里读它来决定补兵、治疗、跳菜单。最后**无论走了哪条分支，枚举都会被重置回 `None`**——这是它必须 `None` 初值的原因：任何一次"打开菜单但没打过仗"都会看到 `None`，从而跳过所有战斗后处理。

因此 `None` 既是"还没打"也是"已经处理完了"。如果你的 mod 复用了这个模式，**不要把 `None` 当作"无操作"的信号**去写额外逻辑，否则每次玩家打开村庄菜单都会误触发。

## 怎么用

### 怎么拿到它

`public enum HideoutBattleEndState` 声明在 `bannerlord-1.5.3/StoryMode/Quests/TutorialPhase/FindHideoutTutorialQuest.cs:796`（嵌套在 `FindHideoutTutorialQuest` 内），四个值 `None`（`:799`）、`Retreated`（`:801`）、`Defeated`（`:803`）、`Victory`（`:805`）。

**它没有独立存储**——宿主字段是 `private FindHideoutTutorialQuest.HideoutBattleEndState _hideoutBattleEndState;`（`FindHideoutTutorialQuest.cs:787`），private 且不进存档。

**同名枚举在模块里有三份，id 各不相同**：

| 宿主类 | 声明行 | 存档枚举 id |
| --- | --- | --- |
| `FindHideoutTutorialQuest`（本页这一份） | `FindHideoutTutorialQuest.cs:796` | 686010（`SaveableStoryModeTypeDefiner.cs:73`） |
| `IstianasBannerPieceQuest` | `IstianasBannerPieceQuest.cs:317` | 687010（`:74`） |
| `ArzagosBannerPieceQuest` | `ArzagosBannerPieceQuest.cs:313` | 681010（`:75`） |

这一份的特殊之处是它被**跨菜单事件**用来做状态中转：宿主在藏身处战斗结算时写入，然后在 `OnGameMenu` 一类回调里反复比对并决定菜单走向。源码里的比对点：`:366`（`== None` 且当前聚落是藏住处且菜单 id 不是 `"radagos_hideout"` 也不是 `"brother_chest_menu"`）、`:370`（`== Victory` 且已与拉达戈斯交谈）、`:375`（`== Defeated` 或 `== Retreated`）、`:437`（菜单 id 是 `"radagos_hideout"` 且 `== Retreated`）。写入点在 `:604`（Victory）、`:608`（Retreated）、`:612`（Defeated）；复位在 `:67`、`:461`、`:564`、`:638`、`:676`。

判定「能否结束」的派生条件是 `base.IsOngoing && this._hideoutBattleEndState == FindHideoutTutorialQuest.HideoutBattleEndState.None`（`:632`）——**只有还处于 None 才算未打完**。

### 典型用法

```csharp
// 枚举在宿主任务内部；mod 侧从任务状态反推
FindHideoutTutorialQuest quest = Campaign.Current.QuestManager
    .GetQuest<FindHideoutTutorialQuest>();
if (quest != null)
{
    // IsOngoing 且状态为 None 才能继续打（:632 的语义）
    Debug.Print("藏身处任务在跑=" + quest.IsOngoing);
    Debug.Print("隐藏藏身处=" + (Settlement.CurrentSettlement != null
        && Settlement.CurrentSettlement.IsHideout));
}

// 存档枚举 id 是判别「哪一份」的唯一可靠依据
Debug.Print("FindHideout 版 = 686010，Istiana 版 = 687010，Arzagos 版 = 681010");
Debug.Print("枚举定义登记处：SaveableStoryModeTypeDefiner.DefineEnumTypes()");

// 战斗冷却由 StoryModeData 统一控制
if (Settlement.CurrentSettlement != null && Settlement.CurrentSettlement.Hideout != null)
{
    Debug.Print("下次攻击时间=" + Settlement.CurrentSettlement.Hideout.GetNextPossibleAttackTime()
        + "，冷却时长=" + StoryModeData.StorylineQuestHideoutHiddenDuration.ToHours + " 小时");
}
```

### 最容易踩的坑

这一份的跨菜单比对依赖**当前聚落**：`Settlement.CurrentSettlement != null && Settlement.CurrentSettlement == this._hideout`（`:366`）以及 `Settlement.CurrentSettlement.IsTown ? Settlement.CurrentSettlement.Town.GetWallLevel() : 1`（`TrainingFieldEncounter.cs:38` 同款写法）。在菜单回调这种「玩家已经离开聚落」的时机里 `Settlement.CurrentSettlement` 可能是 null，比对直接失败——源码本身用 `!= null` 挡住了（`:366`），但你在自己的回调里复刻这段逻辑时很容易漏掉这个判空。

## 主要成员

- `None`：初始值与重置值。表示"没有待处理的战斗结果"。
- `Retreated`：玩家主动撤退（`MapEvent.WinningSide == BattleSideEnum.None`）。触发补兵、治疗、解囚，但不算失败。
- `Defeated`：玩家战败。走与撤退几乎相同的自愈流程，但会额外弹出"回村招 4 个人"的 inquiry。
- `Victory`：玩家获胜且 `MapEvent.PlayerMapEvent.WinningSide == PlayerSide`。触发"胜利且已与 Radagos 说话 → `SetNextMenu("brother_chest_menu")`"这条开箱路径。

判定来源是 `MapEvent.PlayerMapEvent` 的三个分支：`WinningSide == PlayerSide` → `Victory`；`WinningSide == BattleSideEnum.None` → `Retreated`；其余 → `Defeated`。

## 使用示例

```csharp
// 写入：在藏身处菜单初始化时立刻冻结战斗结果
if (mapEvent.WinningSide == mapEvent.PlayerSide)      this._hideoutBattleEndState = HideoutBattleEndState.Victory;
else if (mapEvent.WinningSide == BattleSideEnum.None)  this._hideoutBattleEndState = HideoutBattleEndState.Retreated;
else                                                    this._hideoutBattleEndState = HideoutBattleEndState.Defeated;

// 读取 + 复位：处理完必须写回 None，否则下次开菜单会重复结算
if (this._hideoutBattleEndState == HideoutBattleEndState.Victory && this._talkedWithRadagos)
{
    Campaign.Current.GameMenuManager.SetNextMenu("brother_chest_menu");
}
this._hideoutBattleEndState = HideoutBattleEndState.None;
```

## 风险与边界

它带 `[SaveableField(6)]`，所以**战斗结束时立刻读档会让枚举带着 `Victory` 回来**，而 `MapEvent` 已经不存在、`MapEvent.PlayerMapEvent` 为 null——如果读档恢复后玩家打开任意菜单，可能走进一条没有前置战斗的胜利分支。`FindHideoutTutorialQuest` 之所以敢这么存，是因为 `InitializeQuestOnGameLoad` 会重置藏身处状态并重挂菜单，把玩家重新引导回"打一遍"。

另一个坑是**同名不同型**：`StoryMode.Quests.FirstPhase` 命名空间下的 `IstianasBannerPieceQuest` 和 `ArzagosBannerPieceQuest` 各自内嵌了一个**完全独立定义**的 `HideoutBattleEndState` 枚举，成员顺序一致但类型无关。在同一个文件里同时 `using` 这两个命名空间时会产生二义性，必须写全限定名。这是 Bannerlord 源码里少见的枚举复制。

## 依赖关系

- [FindHideoutTutorialQuest（宿主类）](../FindHideoutTutorialQuest)
- [IstianasBannerPieceQuest（拥有同名副本的类型）](../IstianasBannerPieceQuest)
- [ArzagosBannerPieceQuest（拥有同名副本的类型）](../ArzagosBannerPieceQuest)