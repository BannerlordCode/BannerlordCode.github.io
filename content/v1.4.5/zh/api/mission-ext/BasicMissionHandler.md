---
title: "BasicMissionHandler"
description: "v1.4.5 任务默认 MissionLogic：显示并处理撤退或围城投降确认。"
---
# BasicMissionHandler

**Namespace:** `TaleWorlds.MountAndBlade.Source.Missions.Handlers`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class BasicMissionHandler : MissionLogic`  
**Base:** [`MissionLogic`](../MissionLogic)  
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Source.Missions.Handlers/BasicMissionHandler.cs`

## 一句话职责

`BasicMissionHandler` 负责任务默认的撤退/投降确认：在合适的一侧暂停游戏，显示 `InquiryData`，接受后通知所有任务逻辑，再请求撤退或投降。

## 心智模型

这是默认的 `MissionLogic`，不是战斗结果计算器，也不是 [`BattleEndLogic`](../BattleEndLogic) 的替代品。`MissionState` 在启用默认行为时，会把它和网络、伤亡、AI 等任务逻辑一起加入任务。`OnBehaviorInitialize` 会把 `IsWarningWidgetOpened` 重置为 `false`，之后等待 UI/控制器把 `BattleEndLogic.ExitResult` 传给 `CreateWarningWidgetForResult`。

这个类只有一个临时决策位 `_isSurrender`。只有传入 `SurrenderSiege` 时它才为真；其他任何传入值都会选择撤退弹窗。用户接受后，处理器复制当前任务逻辑列表，对副本逐一调用 `OnBattleEnded()`，关闭弹窗，然后调用 `Mission.SurrenderMission()` 或 `Mission.RetreatMission()`。取消只关闭弹窗。这个类不保存决定，也不判断战斗胜负。

## 何时用，何时不用

**适合使用：**

- 任务 UI 已经拥有退出决定，需要游戏标准的撤退/投降询问框时。
- 通过 `Mission.GetMissionBehavior<BasicMissionHandler>()` 检查标准询问是否已打开时。
- 自定义 Mission behavior 需要在撤退或投降清理前接收现有 `OnBattleEnded()` 通知时。

**不适合使用：**

- 计算战斗结果时。应读取或协调 [`BattleEndLogic`](../BattleEndLogic)。
- 需要自定义确认 UI、文本或结束动作时。应由所属任务模块拥有 UI 和明确的动作，不要先打开此弹窗再追加第二次状态转换。
- 任务使用 `addDefaultMissionBehaviors = false` 打开时。默认列表不会包含此处理器；应有意加入替代 behavior，不要假定查找结果非空。
- Mission 为空、正在结束或已经移除时。这个类不会在接受回调抵达任务转换处提供完整的 `Mission.Current` 防护。

## 依赖图

**上游：**

- [`MissionState`](../../campaign-ext/MissionState) 在 `OpenNew` 保留默认行为时，通过默认任务行为列表加入处理器。
- [`CustomBattleScoreboardVM`](../../viewmodel/CustomBattleScoreboardVM) 和 [`SPScoreboardVM`](../../campaign-ext/SPScoreboardVM) 从当前 [`Mission`](../../mission/Mission) 获取它，并调用公开的弹窗方法。
- [`BattleEndLogic`](../BattleEndLogic) 提供调用者用来判断是否需要确认的 `ExitResult` 语义。

**下游：**

- [`InformationManager`](../../core-extra/InformationManager) 显示 [`InquiryData`](../../core-extra/InquiryData) 询问框。
- `MBCommon.PauseGameEngine()` 和 `GameNetwork.IsClient` 决定本地游戏引擎是否暂停。
- 任务中的每个 [`MissionBehavior`](../../mission/MissionBehavior) 在最终转换前都会收到 `OnBattleEnded()`。
- [`Mission`](../../mission/Mission) 接收 `RetreatMission()` 或 `SurrenderMission()`，并拥有后续的任务结束生命周期。

## 真实获取与调用路径

标准 Custom Battle 记分板从活动任务中获取处理器，并只在需要确认时调用它。下面是 `CustomBattleScoreboardVM.OnExitBattle` 的源码模式：

```csharp
public void OnExitBattle()
{
    BasicMissionHandler missionBehavior =
        _mission.GetMissionBehavior<BasicMissionHandler>();
    BattleEndLogic.ExitResult exitResult =
        (!_mission.MissionEnded)
            ? BattleEndLogic.ExitResult.NeedsPlayerConfirmation
            : BattleEndLogic.ExitResult.True;
    if (exitResult == BattleEndLogic.ExitResult.NeedsPlayerConfirmation)
    {
        OnToggle(false);
        missionBehavior.CreateWarningWidgetForResult(exitResult);
    }
    else
    {
        _mission.EndMission();
    }
}
```

单人记分板在查询 `BattleEndLogic.TryExit()` 后也走同一获取边界。mod 应复制所有权规则而不是复制私有弹窗回调：从活动 Mission 获取处理器，在默认行为可能关闭时检查 null，并且不要在另一个询问框打开时再次调用。

## 关键成员与时机

### OnBehaviorInitialize

`public override void OnBehaviorInitialize()`

调用基类生命周期钩子，并把 `IsWarningWidgetOpened` 重置为 `false`。它由 Mission 的 behavior 初始化阶段调用，不是 mod 构造函数或 UI 首次显示时调用。

```csharp
public override void OnBehaviorInitialize()
{
    base.OnBehaviorInitialize();
    IsWarningWidgetOpened = false;
}
```

### IsWarningWidgetOpened

`public bool IsWarningWidgetOpened { get; private set; }`

表示处理器是否已经打开标准询问框。setter 是 private，调用者只能观察，不能通过赋值关闭处理器。`ShowInquiry` 后变为 true，私有的接受/取消关闭路径会把它恢复为 false。

```csharp
BasicMissionHandler handler =
    Mission.Current?.GetMissionBehavior<BasicMissionHandler>();
bool promptIsOpen = handler?.IsWarningWidgetOpened ?? false;
```

应在任务/UI 路径中用它避免再次显示退出询问。这是临时 UI 状态，不是持久化的战斗结果。

### CreateWarningWidgetForResult

`public void CreateWarningWidgetForResult(BattleEndLogic.ExitResult result)`

通过 `InformationManager.ShowInquiry` 选择并显示询问框。非客户端会先暂停游戏引擎；只在结果严格等于 `SurrenderSiege` 时记录投降；只有这个值使用投降文本，其他值都使用撤退文本；最后标记询问已打开。传给询问框的 `pauseGameActiveState` 为 `true`。

```csharp
BasicMissionHandler handler =
    Mission.Current?.GetMissionBehavior<BasicMissionHandler>();
if (handler != null && !handler.IsWarningWidgetOpened)
{
    handler.CreateWarningWidgetForResult(
        BattleEndLogic.ExitResult.NeedsPlayerConfirmation);
}
```

正常调用者应传入已经由 `BattleEndLogic` 得到的结果，不要把任意枚举值当作自定义弹窗类型。传 `SurrenderSiege` 会选择投降问题，而 `NeedsPlayerConfirmation` 在当前实现中会选择撤退文本。

## 内部决议流程

接受和取消回调是 `InquiryData` 的 private 回调，不是扩展点。二者都会先关闭选择框；关闭会清除 `IsWarningWidgetOpened`，非客户端还会调用 `MBCommon.UnPauseGameEngine()`。

接受时，处理器使用 `ToArray()` 快照复制 `Mission.MissionLogics`，在请求最终转换前对每一项调用 `OnBattleEnded()`：

```csharp
MissionLogic[] logics = Mission.MissionLogics.ToArray();
for (int i = 0; i < logics.Length; i++)
{
    logics[i].OnBattleEnded();
}

if (_isSurrender)
{
    Mission.SurrenderMission();
}
else
{
    Mission.RetreatMission();
}
```

这里使用快照很重要：回调可能影响活动集合，但循环不会枚举正在修改的集合。实现 `OnBattleEnded()` 的自定义 behavior 必须准备好在任务转换之前运行，并且不能假设之后 Mission 仍然活动。

## 风险与崩溃边界

- 只有启用默认任务行为时 `MissionState` 才会加入此类。自定义任务中 `GetMissionBehavior<BasicMissionHandler>()` 可能返回 null，记分板回调直接解引用会失败。
- `CreateWarningWidgetForResult` 不防止第二个询问框。自定义调用者应检查 `IsWarningWidgetOpened`，否则两个询问框可能竞争同一任务/UI 状态。
- 只有 `SurrenderSiege` 选择投降文本和 `Mission.SurrenderMission()`。`NeedsPlayerConfirmation`、`True` 和其他值都走撤退分支，不要误传结果期待其他语义。
- 非客户端会暂停并稍后恢复游戏引擎；客户端仍显示询问但不会调用引擎暂停 API，不能只依据这个标记推断 UI 和网络所有权。
- 接受会在转换前调用每个任务逻辑的 `OnBattleEnded()`。在此回调中重复释放 Agent 或原生实体，可能让后续任务清理访问失效对象。
- `RetreatMission()` 和 `SurrenderMission()` 会启动任务结束流程。接受此询问的 behavior 不要再调用 `EndMission()`，任务结束回调后也不要继续持有 Mission。
- `IsWarningWidgetOpened` 和 `_isSurrender` 只是运行时状态，不是存档字段，也不是战役/存档系统契约。

## 参见与双向导航

- ↑ 父级：[Mission-ext 模块索引](../)
- ↔ 基类与宿主：[MissionLogic](../MissionLogic) · [Mission](../../mission/Mission) · [MissionState](../../campaign-ext/MissionState)
- 退出来源：[BattleEndLogic](../BattleEndLogic)
- UI 调用者：[CustomBattleScoreboardVM](../../viewmodel/CustomBattleScoreboardVM) · [SPScoreboardVM](../../campaign-ext/SPScoreboardVM)
- 询问与显示：[InquiryData](../../core-extra/InquiryData) · [InformationManager](../../core-extra/InformationManager) · [GameNetwork](../GameNetwork)
- 相关对象生命周期：[MissionObject](../MissionObject) · [BannerlordMissions](../BannerlordMissions)
- 文档契约：[Doc Contract](../../../architecture/doc-contract)
- 中文/English：[BasicMissionHandler](../../../../en/api/mission-ext/BasicMissionHandler)
