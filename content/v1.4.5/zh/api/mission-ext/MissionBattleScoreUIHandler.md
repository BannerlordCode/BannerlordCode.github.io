---
title: "MissionBattleScoreUIHandler"
description: "5 行的空壳 MissionView：它的唯一身份是被 [OverrideView] 点名的替换令牌，让 ViewCreatorManager 把真的 Gauntlet 计分板实现换上去。自己 new 它只会得到一块什么都不画的空白。"
---

# MissionBattleScoreUIHandler

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionBattleScoreUIHandler : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer/MissionBattleScoreUIHandler.cs`

## 概述

全文 5 行：命名空间一行、空行、类头一行、左括号、右括号。**它没有成员、没有字段、没有构造器，也没有 override 任何东西。** 但它绝不是残留代码——它是整个引擎 UI 替换机制里的一个**具名令牌**：真实的计分板实现 [MissionGauntletBattleScore](../MissionGauntletBattleScore/) 在自己头上写了 `[OverrideView(typeof(MissionBattleScoreUIHandler))]`（`MissionGauntletBattleScore.cs:17`），意思是「凡是按 `MissionBattleScoreUIHandler` 这个类型请求视图的地方，都换成我」。

链路是这样的：[ViewCreator](../ViewCreator/) 的工厂方法 `CreateMissionBattleScoreUIHandler(Mission mission, ScoreboardBaseVM dataSource)`（`ViewCreator.cs:90`）调用 `ViewCreatorManager.CreateMissionView<MissionBattleScoreUIHandler>(isNetwork: false, mission, new object[1] { dataSource })`（`ViewCreator.cs:92`）。`CreateMissionView<T>`（`ViewCreatorManager.cs:191`）查一张「基类型 → 候选实现」表，命中就 `Activator.CreateInstance(type, parameters)`（`:205`）反射造出 `MissionGauntletBattleScore`；没命中就 `return new T();`（`:207`）——**参数被静默丢弃，只给你一个真的空壳。**

那张表由 `CheckOverridenViews` 扫出来（`ViewCreatorManager.cs:228`）：只收 `MissionView` 或 `ScreenBase` 的派生类型（`:232`），只收恰好带一个 `[OverrideView]` 的类型（`:236-237`），把候选塞进 `_actualViewTypes[overrideView.BaseType]`（`:239-248`）。v1.4.5 里 `[OverrideView]` 一共出现 **88 次**（实测），本类是其中之一的目标。

工厂方法的 6 个真实调用点（实测 grep），每一个传进来的 `ScoreboardBaseVM` 都是不同的子类：

| 调用点 | 传入的 dataSource |
| --- | --- |
| `Modules.CustomBattle/.../CustomBattleViews.cs:54` | `new CustomBattleScoreboardVM(new CustomBattleScoreContext(mission))` |
| `Modules.CustomBattle/.../CustomBattleViews.cs:119` | 同上 |
| `Modules.CustomBattle/.../CustomBattleViews.cs:170` | 同上 |
| `Modules.Multiplayer/.../MultiplayerPracticeMissionViews.cs:46` | 同上 |
| `Modules.SandBox/.../SandBoxMissionViews.cs:400` | `SPScoreboardVM.CreateMission(mission)` |
| `Modules.SandBox/.../SandBoxMissionViews.cs:452` | 同上 |

**同一个令牌服务三种不同的计分板数据源**，这就是为什么替换必须走基类型而不是具体类。

## 心智模型

把它当成**「插槽名」而不是「视图」**。四条推论：

第一，**`new MissionBattleScoreUIHandler()` 得到的东西屏幕上什么都不会出现。** 它继承的全部行为来自 [MissionView](../MissionView/)：所有生命周期钩子（`OnMissionScreenTick` 在 `MissionView.cs:21`、`OnMissionScreenInitialize`、`OnEscape` 在 `:25`）都是空实现或返回默认值。**这个类型没有渲染代码，一个字节都没有。** 它能出现在画面上，唯一途径是别人替它实现。

第二，**真正干活的是被 `[OverrideView]` 点名的那个类，而且只有它。** 替换发生在 `ViewCreatorManager.cs:205` 的反射构造——**调用方拿到的对象类型是 `MissionGauntletBattleScore`，不是 `MissionBattleScoreUIHandler`**。所以 `var view = ViewCreator.CreateMissionBattleScoreUIHandler(...); view.GetType().Name` 打印出来的是 `MissionGauntletBattleScore`。**别按请求的类型去 `as` 回去**，会拿到 null。

第三，**如果你自己写一个类挂 `[OverrideView(typeof(MissionBattleScoreUIHandler))]`，它就必须能接住 `(ScoreboardBaseVM)`。** 因为 `:205` 走 `Activator.CreateInstance(type, parameters)`，而 `parameters` 是 `ViewCreator.cs:92` 传下来的 `new object[1] { dataSource }`。**你的替换类必须有一个接受单个 `ScoreboardBaseVM` 参数的构造函数**，否则 `MissingMethodException` 在运行时炸，而不是编译时。

第四，**替换是「最后注册的、且程序集处于激活状态的」赢。** `ViewCreatorManager.cs:197-204` 是从候选列表**尾部往前**扫，命中第一个「程序集在 `ModuleHelper.GetActiveGameAssemblies()` 里」的类型就 `break`。所以 mod 的替换类只要程序集是激活的，就会压过官方实现。**这正是这个机制存在的理由。**

还有一条边界：如果 `_actualViewTypes` 里有条目、但候选类型所在的程序集**不在**激活列表里（`:194` 命中、`:196-204` 全部落空），`type` 保持 `null`，`:205` 会执行 `Activator.CreateInstance(null, parameters)`——**直接抛异常，而不是退回 `new T()`**。空壳 fallback 只发生在「压根没人注册过替换」的情况。

## 如何使用

**拿法：** 别自己 new，走工厂。工厂会做替换：

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.View;
using TaleWorlds.MountAndBlade.Missions.BattleScore;          // CustomBattleScoreContext
using TaleWorlds.MountAndBlade.View;
using TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard;  // CustomBattleScoreboardVM / ScoreboardBaseVM

MissionView view = ViewCreator.CreateMissionBattleScoreUIHandler(
    mission,
    scoreboardBaseVM);        // 必须是 ScoreboardBaseVM 子类

missionScreen.AddMissionView(view);
```

`AddMissionView` 会做四件事（`MissionScreen.cs:3475-3481`）：`Mission.AddMissionBehavior((MissionBehavior)(object)missionView)`（`:3477`）、`RegisterView(missionView)`（`:3478`，实现在 `MissionScreen.cs:3658`）、`missionView.OnMissionScreenInitialize()`（`:3479`）、再打一句内存书签（`:3480`）。

**最容易踩的一条：** 在自己的 mission view 列表里写 `list.Add(new MissionBattleScoreUIHandler())`。它能编译、能加进列表、不会抛异常，**但屏幕上什么也不会出现**——因为那个类没有渲染逻辑，画计分板的是 `MissionGauntletBattleScore`。必须用 `ViewCreator.CreateMissionBattleScoreUIHandler`。

## 关键成员

本类**声明成员数为 0**。它继承的一切都来自 `MissionView`；下表列出替换链条上真正决定行为的成员，签名均从源码抄出。

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 类声明 | `public class MissionBattleScoreUIHandler : MissionView`（`MissionBattleScoreUIHandler.cs:3`） | 5 行文件的全部内容。**非抽象、可无参构造**，这正是 `ViewCreatorManager.CreateMissionView<T>` 的 `new()` 约束（`ViewCreatorManager.cs:191`）所要求的，也是 `:207` 的 `return new T();` 能编译的原因。 |
| `[OverrideView(typeof(MissionBattleScoreUIHandler))]` | `MissionGauntletBattleScore` 类上的特性（`MissionGauntletBattleScore.cs:17`） | 把本类登记成「可替换令牌」。`CheckOverridenViews` 靠它把 `MissionGauntletBattleScore` 塞进 `_actualViewTypes[MissionBattleScoreUIHandler]`（`ViewCreatorManager.cs:239-248`）。**没有这个特性，本类就真的只是一个空类。** |
| `OverrideView` | `public class OverrideView : Attribute`，`public Type BaseType { get; private set; }`（`OverrideView.cs:5` / `:7`） | 只存一个类型引用，通过 `public OverrideView(Type baseType)`（`OverrideView.cs:9`）构造。**它就是 `MissionBattleScoreUIHandler` 这类空壳存在的全部理由。** |
| 工厂方法 | `public static MissionView CreateMissionBattleScoreUIHandler(Mission mission, ScoreboardBaseVM dataSource)`（`ViewCreator.cs:90`） | 唯一入口。注意返回类型是 `MissionView`（基类），**不是** `MissionBattleScoreUIHandler`——签名层面就没承诺具体类型。 |
| 工厂实现 | `return ViewCreatorManager.CreateMissionView<MissionBattleScoreUIHandler>(isNetwork: false, mission, new object[1] { dataSource });`（`ViewCreator.cs:92`） | `isNetwork` 硬编码 `false`；`mission` 可为 null；`parameters` 是 `new object[1] { dataSource }`——**单元素数组，这就是替换类必须能吃一个 `ScoreboardBaseVM` 的原因**。 |
| `CreateMissionView<T>` | `public static MissionView CreateMissionView<T>(bool isNetwork = false, Mission mission = null, params object[] parameters) where T : MissionView, new()`（`ViewCreatorManager.cs:191`） | 泛型约束 `where T : MissionView, new()` 意味着**每个令牌类型都必须有无参构造**——因为 `:207` 要 `new T()`。 |
| 替换分支 | `return Activator.CreateInstance(type, parameters) as MissionView;`（`ViewCreatorManager.cs:205`） | **替换发生的唯一位置。** 反射构造，`parameters` 被原样传进去。此时 `type` 是被注册的实现（`MissionGauntletBattleScore`），返回值的运行时类型已经不是调用方要求的那个了。 |
| 兜底分支 | `return new T();`（`ViewCreatorManager.cs:207`） | **只在 `_actualViewTypes` 完全没有 `typeof(T)` 时到达（`:194` 的 `TryGetValue` 失败）。此时 `parameters` 被静默丢弃**——本类就以「空壳」形态被创建，什么都不画。 |
| 候选挑选 | `ViewCreatorManager.cs:197-204` 的倒序 for 循环 + `ModuleHelper.GetActiveGameAssemblies()`（`:196`） | 从候选尾部往前找第一个**程序集处于激活状态**的，命中即 `break`。这就是 mod 的替换类能压过官方实现的原因。 |
| `CheckOverridenViews` 的类型门槛 | `if (!typeof(MissionView).IsAssignableFrom(item) && !typeof(ScreenBase).IsAssignableFrom(item)) continue;`（`ViewCreatorManager.cs:232-234`） | 只扫 `MissionView` 与 `ScreenBase` 的派生类型。别在这两个体系之外的类上挂 `[OverrideView]`，会被静默忽略。 |
| `AddMissionView` | `public void AddMissionView(MissionView missionView)`（`MissionScreen.cs:3475`） | 把视图真正接上：`Mission.AddMissionBehavior`（`:3477`）→ `RegisterView`（`:3478`）→ `OnMissionScreenInitialize()`（`:3479`）→ `Debug.ReportMemoryBookmark`（`:3480`）。**顺序固定，`OnMissionScreenInitialize` 在注册之后才被调。** |
| `MissionView` 基类能力 | `public abstract class MissionView : MissionBehavior`（`MissionView.cs:7`） | 本类通过它间接成为 mission behavior，因此 `AddMissionView` 里的 `Mission.AddMissionBehavior` 才成立。`MissionView` 还提供 `ViewOrderPriority`（`MissionView.cs:9`）、`MissionScreen`（`:11`）、`Input`（`:13`）、`IsViewSuspended`（`:15`）与 `IsFinalized`（`:19`）——**本类一个都没用到。** |

## 真实示例

正确用法——走工厂，让替换生效：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.View;
using TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer;

// ViewCreator.cs:90 -> ViewCreator.cs:92 -> ViewCreatorManager.cs:191
MissionView view = ViewCreator.CreateMissionBattleScoreUIHandler(
    mission,
    (ScoreboardBaseVM)new CustomBattleScoreboardVM(new CustomBattleScoreContext(mission)));

// MissionScreen.cs:3475
missionScreen.AddMissionView(view);

// 注意 view 的运行时类型是 MissionGauntletBattleScore，不是 MissionBattleScoreUIHandler
Debug.Print("actual view type = " + view.GetType().Name, 0);
```

自己写一个替换类（mod 最常见的用法）——注意构造函数签名必须吃 `ScoreboardBaseVM`：

```csharp
using TaleWorlds.MountAndBlade.View;
using TaleWorlds.MountAndBlade.View.MissionViews;
using TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard;

// ViewCreatorManager.cs:232 要求：必须是 MissionView 或 ScreenBase 的派生类
// ViewCreatorManager.cs:237 要求：恰好带一个 [OverrideView]
[OverrideView(typeof(MissionBattleScoreUIHandler))]
public class MyModBattleScoreView : MissionView
{
    private readonly ScoreboardBaseVM _dataSource;

    // ViewCreator.cs:92 传下来的是 new object[1] { dataSource }，
    // ViewCreatorManager.cs:205 用 Activator.CreateInstance 反射调用 —— 签名必须对得上
    public MyModBattleScoreView(ScoreboardBaseVM dataSource)
    {
        _dataSource = dataSource;
    }

    public override void OnMissionScreenTick(float dt)   // MissionView.cs:21 的空实现在这里被替换
    {
        // 真正的绘制逻辑
    }
}
```

对照官方替换类的真实形状（`MissionGauntletBattleScore.cs:17-24` 起）：

```csharp
// 官方实现在自己的类头上挂了 [OverrideView(typeof(MissionBattleScoreUIHandler))]，
// 里面持有 ScoreboardBaseVM _dataSource 与 GauntletLayer _gauntletLayer，
// 还有一个 private bool _toOpen 用来做「按 Tab 打开」的延迟。
// 这就是 ViewCreatorManager.cs:205 反射造出来的那个类型。
[OverrideView(typeof(MissionBattleScoreUIHandler))]
public class MissionGauntletBattleScore : MissionView
{
    private ScoreboardBaseVM _dataSource;
    private GauntletLayer _gauntletLayer;
    private bool _toOpen;
}
```

诊断「替换到底有没有生效」——比对请求类型与实际类型：

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.View;
using TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer;
using TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard;

MissionView requested = ViewCreator.CreateMissionBattleScoreUIHandler(mission, vm);

if (requested.GetType() == typeof(MissionBattleScoreUIHandler))
{
    // 走到这里说明 ViewCreatorManager.cs:194 的 TryGetValue 失败了：
    // 没有任何程序集注册过 [OverrideView(typeof(MissionBattleScoreUIHandler))]，
    // 于是 :207 返回了 new T() —— 一个什么都不画的空壳。
    Debug.Print("NO override registered; got the empty shell", 0);
}
else
{
    // 正常路径：拿到的是 MissionGauntletBattleScore 或你的替换类
    Debug.Print("override active, actual type = " + requested.GetType().FullName, 0);
}
```

## 风险与边界

- **零声明成员。** 它本身不渲染任何东西，任何「直接 new 它就能显示计分板」的想法都是错的。
- **返回类型是 `MissionView`（`ViewCreator.cs:90`）。** 静态类型层面就不保证具体类，`as MissionBattleScoreUIHandler` 会得到 null。
- **运行时类型会变。** 走 `:205` 时返回的是 `MissionGauntletBattleScore`。**任何按具体类型判断的分支都会走错。**
- **兜底分支吞参数。** `:207` 的 `new T()` 不传 `parameters`。如果哪天替换注册丢了，你的 `ScoreboardBaseVM` 会被无声丢弃，而不是报错。
- **`type` 为 null 会抛而不是退回。** `:194` 命中但 `:196-204` 一个都没命中时，`:205` 的 `Activator.CreateInstance(null, parameters)` 直接抛异常。
- **`new()` 约束不可绕过。** `CreateMissionView<T>` 要求 `where T : MissionView, new()`（`:191`），所以**任何要当令牌的 `MissionView` 都必须有无参构造**。带必需构造参数的类不能当令牌。
- **`[OverrideView]` 必须恰好一个。** `:237` 的条件是 `customAttributesSafe.Length == 1`，挂两个等于没挂。
- **只能在 `MissionView` / `ScreenBase` 体系内替换**（`:232`）。挂在别的基类上被静默 `continue` 掉。
- **替换结果依赖程序集激活顺序。** 倒序扫描 + `GetActiveGameAssemblies()` 判定（`:197-204`）。mod 程序集没被激活时，你的替换不生效，而 `MissionGauntletBattleScore` 生效——同一份代码两种表现。
- **单例式用法。** 全树只有 6 个调用点，全是官方模块。**想在自己的 mission 里加计分板，走 `ViewCreator` 而不是 `new`。**

## 依赖关系

- 令牌本身：本页就是；类声明在 `MissionBattleScoreUIHandler.cs:3`，基类 [MissionView](../MissionView/)
- 替换机制：[OverrideView](../OverrideView/)（`OverrideView.cs:5-13`），扫描与登记在 [ViewCreatorManager](../ViewCreatorManager/) 的 `CheckOverridenViews`（`ViewCreatorManager.cs:228-251`）、挑选与构造在 `CreateMissionView<T>`（`:191-208`）
- 工厂：[ViewCreator](../ViewCreator/) 的 `CreateMissionBattleScoreUIHandler`（`ViewCreator.cs:90-93`）
- 唯一的官方替换实现：[MissionGauntletBattleScore](../MissionGauntletBattleScore/)（特性在 `MissionGauntletBattleScore.cs:17`，类体从 `:18` 起）
- 6 个调用点：`Modules.CustomBattle/.../CustomBattleViews.cs:54 / :119 / :170`、`Modules.Multiplayer/.../MultiplayerPracticeMissionViews.cs:46`、`Modules.SandBox/.../SandBoxMissionViews.cs:400 / :452`
- 数据源契约：[ScoreboardBaseVM](../ScoreboardBaseVM/)（`TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`）；实际传入的是 `CustomBattleScoreboardVM` 与 `SPScoreboardVM`
- 挂载点：[MissionScreen](../MissionScreen/) 的 `AddMissionView`（`MissionScreen.cs:3475`）与 `RegisterView`（`:3658`）；行为基类 [MissionBehavior](../../mission/MissionBehavior/)
- 同桶同类令牌：[MissionFormationMarkerUIHandler](../MissionFormationMarkerUIHandler/)、[MissionGameNotificationUIHandler](../MissionGameNotificationUIHandler/)（两者也是空壳，但后者没有对应的 `[OverrideView]`）
- 桶首页：[mission-ext API 分区](../)
