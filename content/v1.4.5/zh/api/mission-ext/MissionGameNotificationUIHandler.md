---
title: "MissionGameNotificationUIHandler"
description: "7 行空壳，且在 v1.4.5 全树只出现 1 次（自己的声明）——没有 OverrideView 特性指向它，没有工厂方法造它。真正显示游戏内通知的是 GauntletGameNotification 全局层，不是它。"
---

# MissionGameNotificationUIHandler

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGameNotificationUIHandler : MissionView`
**Base:** `MissionView`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.View/TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews/MissionGameNotificationUIHandler.cs`

## 概述

全文 7 行：`using TaleWorlds.MountAndBlade.View.MissionViews;`、命名空间、空行、类头、左括号、右括号。**它没有成员、没有 override、没有构造器。** 命名空间落在 `TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews`，说明它被摆在多人模块的视图目录里。

和它在同桶的两个兄弟（[MissionBattleScoreUIHandler](../MissionBattleScoreUIHandler/)、[MissionFormationMarkerUIHandler](../MissionFormationMarkerUIHandler/)）相比，它少了一样关键的东西：**没有任何人点名它。** 实测在 v1.4.5 的整棵托管源码树里 grep `MissionGameNotificationUIHandler`，命中 **1 次**，就是它自己的第 5 行声明。进一步实测：

- `grep "OverrideView(typeof(MissionGameNotificationUIHandler))"` → **0 命中**（对比：`MissionGauntletBattleScore.cs:17` 点名了 `MissionBattleScoreUIHandler`，`MissionGauntletFormationMarker.cs:16` 点名了 `MissionFormationMarkerUIHandler`）
- [ViewCreator](../ViewCreator/) 里**没有**对应的工厂方法（`grep -n Notification ViewCreator.cs` 只命中 `CreateSingleplayerMissionKillNotificationUIHandler`，那是另一个类型）
- 全树唯一的 `[OverrideView]` 出现次数是 88（实测），没有一次以它为目标

也就是说：**它是一个已声明、但从未接线的空令牌。** 真正在屏幕上显示「游戏内通知」的不是它——那是 [GlobalLayer](../../gui/GlobalLayer/) 体系里的 `GauntletGameNotification`（`GauntletGameNotification.cs:11`），它自己 `new GameNotificationVM()`（`:29`）并 `LoadMovie("GameNotificationUI", _dataSource)`（`:31-32`），跟 `MissionView` 一点关系都没有。

跨版本看（实测读取各版本源码文件）：v1.4.6 / v1.4.7 / v1.5.3 里的同名类是**逐字相同的空类**，且都带着同一条元数据注释 `// Token: 0x02000011 RID: 17`。**三个版本一模一样，没有人在后续版本里把它接上。** 关于 v1.3.0 / v1.3.15：实测那两棵源码树里 `*Multiplayer.View*` 路径下 **0 个 .cs 文件**（1.3.0 全树 4,596 个 .cs，1.5.3 有 11,487 个，覆盖率约 40%），所以「找不到」是源码覆盖不足，**不能据此断言该版本不存在这个类**——这一点标记为 UNRESOLVED。

## 心智模型

把它当成**「预留但没插上的插槽」**，而不是「通知视图」。四条推论：

第一，**它挂在错误的体系里。** 通知 UI 走的是 `GlobalLayer` + `GauntletLayer` + `ViewModel` 这条线（`GauntletGameNotification.cs:11-33`），而 `MissionView` 是 mission behavior 那条线（`MissionView.cs:7`：`public abstract class MissionView : MissionBehavior`）。**这个类型在通知渲染链路上找不到任何位置。** 就算你把它加进 mission view 列表，屏幕上也不会多出任何东西——它继承了 `MissionView` 的一堆空钩子（`OnMissionScreenTick` 在 `MissionView.cs:21` 就是空实现，`OnEscape` 在 `:25` 返回 `false`），而**没有一行渲染代码**。

第二，**通知的真实入口在别处。** [MultiplayerGameNotificationsComponent](../MultiplayerGameNotificationsComponent/) 是一个 `MissionNetwork`（`MultiplayerGameNotificationsComponent.cs:11`），它的私有 `ShowNotification(MultiplayerNotificationEnum notification, params int[] parameters)`（`:163`）最终落到 `MBInformationManager.AddQuickInformation(message, 0, null, null, soundEventPath)`（`:176`）——**完全不经过任何 `MissionView`**。通知的排队与优先级由 [GameNotificationVM](../../core-extra/GameNotificationVM/) 与 [GameNotificationItemVM](../../core-extra/GameNotificationItemVM/) 负责，`GauntletGameNotification` 订阅 `_dataSource.CurrentNotificationChanged`（`GauntletGameNotification.cs:30`）来刷新画面。

第三，**它和兄弟类的差别只有一个，但那个差别是决定性的。** 另两个空壳都有 `[OverrideView]` 指过来，于是 `ViewCreatorManager.CheckOverridenViews`（`ViewCreatorManager.cs:228`）会把真实实现登记进 `_actualViewTypes`，工厂调用时走 `Activator.CreateInstance(type, parameters)`（`ViewCreatorManager.cs:205`）换成真货。它没有登记，所以——**就算有人写 `ViewCreatorManager.CreateMissionView<MissionGameNotificationUIHandler>()`，也会走 `:207` 的 `return new T();` 兜底，拿回一个纯空壳。**

第四，**想用它当扩展点的话，机制上是通的，但没有任何官方实现来接。** 你可以自己写一个类挂 `[OverrideView(typeof(MissionGameNotificationUIHandler))]`，机制会认（前提是满足 `ViewCreatorManager.cs:232` 的 `MissionView` 派生约束、`:237` 的「恰好一个 OverrideView」）。**但那是 mod 自己发明的替换目标，不是官方留的洞**——官方通知走 `GlobalLayer`，两条线在 UI 栈里会互相抢层级。

## 如何使用

**拿法：** 没有官方入口。要用只能自己接：`new` 出来加进 mission view 列表（几乎必然什么也不显示），或者自己写一个 `[OverrideView]` 替换类——后者机制可用但无先例。

如果你真正想要的是「在任务里弹一条通知」，**别经过这个类**，直接用通知 VM：

```csharp
using TaleWorlds.Core.ViewModelCollection.Information;
using TaleWorlds.Localization;

public static class MyModNotifier
{
    public static void Say(TextObject message)
    {
        // GameNotificationVM.cs:299 的签名：
        // AddGameNotification(string notificationText, int extraTimeInMs,
        //                     BasicCharacterObject announcerCharacter,
        //                     Equipment equipment, string soundId)
        GameNotificationVM vm = new GameNotificationVM();
        vm.AddGameNotification(message.ToString(), 0, null, null, null);
    }
}
```

**最容易踩的一条：** 看到名字里有 `GameNotification` 就以为任务里显示通知要走它，于是 `Mission.Current.AddMissionBehavior(new MissionGameNotificationUIHandler())`。这行代码能编译、能加进列表、不抛异常，**但屏幕上什么也不会出现**——因为这个类没有任何渲染逻辑，而且 v1.4.5 里**没有任何代码会构造它**。走 `GameNotificationVM` / `MBInformationManager`。

## 关键成员

本类**声明成员数为 0**。下表列出它所处机制上真正起作用的成员，签名均从源码抄出；因为本类没有成员，所有行都标注了来源是别处。

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 类声明 | `public class MissionGameNotificationUIHandler : MissionView`（`MissionGameNotificationUIHandler.cs:5`） | 文件第 1 行 `using TaleWorlds.MountAndBlade.View.MissionViews;`（`:1`）是它唯一的 `using`——**存在的全部理由就是够到基类 `MissionView`**。非抽象、无参可构造，满足 `CreateMissionView<T>` 的 `new()` 约束。 |
| 本类的成员 | **无。声明成员数 0** | 没有字段、没有属性、没有构造器、没有 override。文件第 5 行到第 7 行只有类头与两个括号。 |
| 本类的引用点 | **实测 0 处**（全树 grep `MissionGameNotificationUIHandler` 共 1 次命中，即 `:5` 自身） | 这是本页最重要的一条事实，也是它与两个兄弟类的唯一区别。**没有任何生产代码构造它、引用它或按它做类型判断。** |
| `[OverrideView]` 指向它 | **实测 0 处** | 对比：`MissionGauntletBattleScore.cs:17` 写的是 `[OverrideView(typeof(MissionBattleScoreUIHandler))]`。本类既没被点名，也没有点名别人。 |
| 工厂方法 | **不存在** | `ViewCreator.cs` 里没有任何 `CreateMissionGameNotification*`。唯一含 "Notification" 的工厂是 `CreateSingleplayerMissionKillNotificationUIHandler`（`ViewCreator.cs:65`），指向另一个类型 `MissionSingleplayerKillNotificationUIHandler`。 |
| 基类 `MissionView` | `public abstract class MissionView : MissionBehavior`（`MissionView.cs:7`） | 本类间接成为 mission behavior。它能加进 mission 列表靠的就是这条继承。基类提供 `ViewOrderPriority`（`MissionView.cs:9`）、`MissionScreen`（`:11`）、`Input`（`:13`）、`IsViewSuspended`（`:15`）、`IsFinalized`（`:19`）——**本类一个都没用。** |
| 基类的空钩子 | `public virtual void OnMissionScreenTick(float dt)`（`MissionView.cs:21`，空体 `:22-23`）、`public virtual bool OnEscape()`（`:25`，`return false;` 在 `:27`） | 本类没有 override 任何一个。**这就是「什么都不显示」的机械原因**：即使它被加进列表并被 tick 到了，也没有代码去画东西。 |
| 真正的通知渲染者 | `public class GauntletGameNotification : GlobalLayer`（`GauntletGameNotification.cs:11`） | **不在 `MissionView` 体系里。** 构造时 `_dataSource = new GameNotificationVM()`（`:29`）、`_dataSource.CurrentNotificationChanged += OnReceiveNewNotification`（`:30`）、`_layer = new GauntletLayer("GameNotification", 19007, false)`（`:31`）、`_layer.LoadMovie(MovieName, ...)`（`:32`，`MovieName` 来自 `:21` 的 `protected virtual string MovieName => "GameNotificationUI"`）。 |
| 通知排队入口 | `public void AddGameNotification(string notificationText, int extraTimeInMs, BasicCharacterObject announcerCharacter, Equipment equipment, string soundId)`（`GameNotificationVM.cs:299`） | 往通知队列里塞一条。旁边还有 `AddDialogNotification`（`:212`，第一个形参是 TextObject 而非 string，多两个参数 `MBInformationManager.NotificationPriority priority` 与 `string dialogSoundPath`，返回 `MBInformationManager.DialogNotificationHandle`）、`ClearDialogNotification`（`:254`）、`ClearAllDialogNotifications`（`:283`）、`GetIsAnyDialogNotificationActiveOrQueued`（`:274`）、`GetStatusOfDialogNotification`（`:237`）、`FadeOutCurrentNotification`（`:173`）、`SkipCurrentNotification`（`:185`）、`ClearNotifications`（`:206`）。 |
| 单条通知 | `public GameNotificationItemVM(string notificationText, int extraTimeInMs, BasicCharacterObject announcerCharacter, Equipment characterEquipment, string soundId, int priority, bool isDialog, string dialogSoundPath)`（`GameNotificationItemVM.cs:128`） | 通知队列的元素。`GameNotificationVM` 构造时先塞一条占位（`GameNotificationVM.cs:202`：文本 `"NULL"`、时长 0、声音 `"NULL"`），所以**队列永远非空**，`CurrentNotification` 永不为 null。 |
| 联机通知的实际投递 | `MBInformationManager.AddQuickInformation(message, 0, null, null, soundEventPath)`（`MultiplayerGameNotificationsComponent.cs:176`） | 联机任务里通知真正落地的地方，在私有 `ShowNotification(MultiplayerNotificationEnum, params int[])`（`:163`）内部。**这条链完全不经过 `MissionView`，也不经过本类。** |

## 真实示例

先证伪「它有接线」这个假设——真机上唯一的观测点就是类型是否被构造过：

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews;

// v1.4.5 实测：全树没有任何代码 new 过 MissionGameNotificationUIHandler。
// 所以下面这行是全仓库里唯一一次构造它。
var view = new MissionGameNotificationUIHandler();

// 它是 MissionView，所以可以加进 mission 列表；不会抛异常，也不会显示任何东西。
Mission.Current.AddMissionBehavior(view);

// 继承自 MissionView 的钩子全是空的：OnMissionScreenTick 在 MissionView.cs:21-23
// 是空实现，OnEscape 在 :25-28 返回 false。
Debug.Print("added, type = " + view.GetType().Name
          + ", missionScreen = " + (view.MissionScreen?.GetType().Name ?? "null"), 0);
```

想要通知 UI，就走 `GlobalLayer` 那条真正在跑的线（对照 `GauntletGameNotification.cs:23-34`）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.Core.ViewModelCollection.Information;
using TaleWorlds.Engine.GauntletUI;
using TaleWorlds.ScreenSystem;
using TaleWorlds.MountAndBlade.GauntletUI;

// 复刻 GauntletGameNotification 的构造流程（GauntletGameNotification.cs:23-34）
GameNotificationVM dataSource = new GameNotificationVM();
GauntletLayer layer = new GauntletLayer("GameNotification", 19007, false);
layer.LoadMovie("GameNotificationUI", (ViewModel)dataSource);

// 塞一条进去：AddGameNotification 见 GameNotificationVM.cs:299
dataSource.AddGameNotification("MyMod: 增援部队正在接近", 0, null, null, null);
```

更贴近联机侧的用法——用带优先级与对话音效的 `AddDialogNotification`（`GameNotificationVM.cs:212`）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.Core.ViewModelCollection.Information;
using TaleWorlds.Localization;

public static void Announce(BasicCharacterObject announcer, TextObject line)
{
    GameNotificationVM vm = new GameNotificationVM();

    // 返回 DialogNotificationHandle，之后可以单独撤销这一条
    MBInformationManager.DialogNotificationHandle handle = vm.AddDialogNotification(
        line,
        extraTimeInMs: 0,
        announcerCharacter: announcer,
        equipment: null,   // BasicCharacterObject 上没有直取装备的方法，拿不到就传 null
        // NotificationPriority 的成员只有 Lowest/Low/Medium/High/Highest
        // (MBInformationManager.cs:11-15)，没有 Default
        priority: MBInformationManager.NotificationPriority.High,
        dialogSoundPath: null);

    // 想反悔：vm.ClearDialogNotification(handle, fadeOut: true)（GameNotificationVM.cs:254）
}
```

如果你坚持要在这条空的 `MissionView` 线上做自己的替换（机制上可行，但官方从未这样用过）：

```csharp
using TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews;
using TaleWorlds.MountAndBlade.View;
using TaleWorlds.MountAndBlade.View.MissionViews;

// 满足 ViewCreatorManager.cs:232（必须是 MissionView 派生）与 :237（恰好一个 [OverrideView]）
[OverrideView(typeof(MissionGameNotificationUIHandler))]
public class MyModMissionGameNotificationView : MissionView
{
    // 注意：ViewCreator.cs 里没有对应工厂方法，所以 ViewCreatorManager.CreateMissionView<T>
    // 只能由你自己调；而且走 :205 的 Activator.CreateInstance 时参数要你自己准备。
    public override void OnMissionScreenTick(float dt)
    {
        // 真正的绘制写在这里
    }
}
```

## 风险与边界

- **v1.4.5 里零引用（实测）。** 全树 grep 只有自己的声明。任何「游戏会用它」的推断都没有代码支撑。
- **它不是通知的实现。** 通知走 `GlobalLayer` / `GauntletGameNotification` / `GameNotificationVM`，与 `MissionView` 无关。
- **`new` 它不会报错，也不会显示。** 没有渲染代码，全是继承来的空钩子。
- **没有工厂方法。** 想用 `ViewCreatorManager.CreateMissionView<T>` 只能自己调，而且要在 `_actualViewTypes` 里没有任何登记时才会走 `:207` 的 `new T()` 兜底——**那正是空壳**。
- **v1.4.6 / v1.4.7 / v1.5.3 逐字相同**（实测，含相同的 `Token: 0x02000011 RID: 17` 元数据注释）。**跨这三个版本不要期待行为变化。**
- **v1.3.0 / v1.3.15 的状态 UNRESOLVED。** 实测那两棵树里 `*Multiplayer.View*` 路径下 0 个 .cs 文件（覆盖率不足），无法据此断言类是否存在。
- **命名空间在 Multiplayer 模块。** `TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews`（`:3`）。**单人或无联机模块的环境下这个程序集可能根本不加载**，引用它等于给整个 mod 加一条联机模块依赖。
- **占位文本。** `GameNotificationVM` 构造完先塞一条 `"NULL"`（`GameNotificationVM.cs:202`），所以「有没有通知」不能用队列是否为空来判断，要看 `CurrentNotification` 的文本是不是 `"NULL"`。
- **`NotificationPriority` 没有 `Default`。** 成员只有 `Lowest` / `Low` / `Medium` / `High` / `Highest`（`MBInformationManager.cs:11-15`），写 `Default` 编译不过。
- **两条通知线会互相盖。** `GlobalLayer` 和 `MissionView` 都在同一棵 UI 栈里同时挂自己的 layer，自己做替换时要自己管 z-order，官方没有替你协调。

## 依赖关系

- 本类：声明在 `MissionGameNotificationUIHandler.cs:5`，唯一 `using` 是 `:1` 的 `TaleWorlds.MountAndBlade.View.MissionViews`
- 基类：[MissionView](../MissionView/)（`MissionView.cs:7`），再往上是 [MissionBehavior](../../mission/MissionBehavior/)
- 同桶同类：[MissionBattleScoreUIHandler](../MissionBattleScoreUIHandler/) 与 [MissionFormationMarkerUIHandler](../MissionFormationMarkerUIHandler/)（**这两个有真实的 `[OverrideView]` 实现**：`MissionGauntletBattleScore.cs:17` 与 `MissionGauntletFormationMarker.cs:16`；本类没有）
- 替换机制（对它当前无效，但机制本身可用）：[OverrideView](../OverrideView/)（`OverrideView.cs:5`）、[ViewCreatorManager](../ViewCreatorManager/) 的 `CheckOverridenViews`（`ViewCreatorManager.cs:228`）与 `CreateMissionView<T>`（`:191`，兜底分支在 `:207`）、[ViewCreator](../ViewCreator/)
- 通知的真实链路：`GauntletGameNotification`（`GauntletGameNotification.cs:11`，`GlobalLayer` 见 [GlobalLayer](../../gui/GlobalLayer/)）→ [GameNotificationVM](../../core-extra/GameNotificationVM/) → [GameNotificationItemVM](../../core-extra/GameNotificationItemVM/) → [MBInformationManager](../../core-extra/MBInformationManager/)
- 联机侧投递点：[MultiplayerGameNotificationsComponent](../MultiplayerGameNotificationsComponent/)（`MultiplayerGameNotificationsComponent.cs:11`，`:163` 的 `ShowNotification`，`:176` 的 `AddQuickInformation`）
- 消息文本类型：[TextObject](../../localization/TextObject/)
- 桶首页：[mission-ext API 分区](../)
