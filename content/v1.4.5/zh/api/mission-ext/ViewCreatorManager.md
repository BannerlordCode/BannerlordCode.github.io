---
title: "ViewCreatorManager"
description: "整个视图替换机制的中枢：启动时扫出「基类型 → 候选实现」两张表，运行期用反射把 MissionView/ScreenBase 的请求换成 mod 注册的实现。候选优先级按程序集激活状态倒序取第一个。"
---

# ViewCreatorManager

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class ViewCreatorManager`
**Base:** 无
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/ViewCreatorManager.cs`

## 概述

全文 264 行的**静态类**，是 Bannerlord 整个 UI 替换机制的唯一实现。它维护三张表（`ViewCreatorManager.cs:14` 到 `:18`），都是私有静态：命令名到创建方法的映射、基类型到候选实现类型的映射、以及需要无条件实例化的默认视图集合。

启动时由静态构造（`ViewCreatorManager.cs:20`）触发 `CollectTypes`（`ViewCreatorManager.cs:28`），扫当前程序集加上**所有引用了它的程序集**（`ViewCreatorManager.cs:33`），依次做三件事：

1. `CheckAssemblyScreens` 扫带 `[ViewCreatorModule]` 的类、收集方法上的 `[ViewMethod]` → 填 `_viewCreators`，实现体在 `ViewCreatorManager.cs:54`
2. `CollectDefaults` 收带 `[DefaultView]` 的 mission behavior → 填 `_defaultTypes`，实现体在 `ViewCreatorManager.cs:253`
3. `CheckOverridenViews` 扫 `[OverrideView]` 特性 → 填 `_actualViewTypes`，实现体在 `ViewCreatorManager.cs:228`

运行期的创建入口，逐个列出（**四个入口在「注册缺失」时行为不同**，见风险一节）：

- `CreateMissionView<T>` —— 声明在 `ViewCreatorManager.cs:191`
- `CreateScreenView<T>()` —— 声明在 `ViewCreatorManager.cs:149`
- `CreateScreenView<T>(params object[])` —— 声明在 `ViewCreatorManager.cs:172`
- `CreateMissionViewWithArgs<T>` —— 声明在 `ViewCreatorManager.cs:210`

另有两个 internal 的批量入口：

- `CreateDefaultMissionBehaviors` —— 声明在 `ViewCreatorManager.cs:85`
- `CollectMissionBehaviors` —— 声明在 `ViewCreatorManager.cs:121`

## 心智模型

把它当成**「派发代理」而不是「视图工厂」**。四条推论：

第一，**它的核心价值是「按基类型换实现」，不是「造对象」。** `CreateMissionView<T>` 只要求 `T : MissionView, new()`（`ViewCreatorManager.cs:191`），**根本不看 T 是不是空壳**。命中注册表就反射造替换类（`:205`），没命中就 `new T()`（`:207`）。所以它在两个空壳页 [MissionBattleScoreUIHandler](../MissionBattleScoreUIHandler/) 与 [MissionFormationMarkerUIHandler](../MissionFormationMarkerUIHandler/) 里扮演的角色是「令牌消费器」。

第二，**候选优先级是「倒序 + 激活程序集优先」，也就是后注册的赢。** `CreateMissionView<T>` 的挑选循环在 `ViewCreatorManager.cs:197` 到 `:204`，是从尾部往前扫，命中「程序集在 `ModuleHelper.GetActiveGameAssemblies()` 里」的第一个就 `break`。`CreateScreenView<T>()` 的同形循环在 `ViewCreatorManager.cs:155` 到 `:162`。**这就是 mod 的替换类能压过官方实现的原因，也是为什么注册顺序有意义。**

第三，**没命中替换但**命中了**程序集激活判定时，会抛异常而不是退回。** `TryGetValue` 在 `ViewCreatorManager.cs:194` 命中、但挑选循环（`ViewCreatorManager.cs:196` 起）一个都没命中时，`type` 保持 null，而 `ViewCreatorManager.cs:205` 执行 `Activator.CreateInstance(type, parameters)` 即传入 null。**只有 `TryGetValue` 完全失败（`ViewCreatorManager.cs:194` 返回 false）才会走到 `ViewCreatorManager.cs:207` 的 `new T()` 兜底。** 也就是说「兜底空壳」只在「压根没人注册过」时出现，「注册了但程序集没激活」是硬失败。

第四，**表是一次性构建的，没有失效入口。** `CollectTypes`（`ViewCreatorManager.cs:28`）在静态构造里跑一次。`CollectTypes` 本身是 `internal`（`:28`），所以运行时能重扫，但**引擎里没有任何地方再调它**（实测）。这意味着**运行期新加载的 mod 程序集不会自动被纳入替换表** —— 除非你在合适的时机反射调一次。

还有一条边界：`CheckOverridenViews` 的类型门槛在 `ViewCreatorManager.cs:232` —— 必须是 `MissionView` 或 `ScreenBase` 的派生类。另一条在 `ViewCreatorManager.cs:237`，要求**恰好一个** `[OverrideView]`。挂两个等于没挂。

## 如何使用

**拿法：** 静态类，直接调。全程不要 `new`。

```csharp
using TaleWorlds.MountAndBlade.View;
using TaleWorlds.MountAndBlade.View.MissionViews;

// 创建 MissionView：声明在 ViewCreatorManager.cs:191
MissionView view = ViewCreatorManager.CreateMissionView<MissionBattleScoreUIHandler>(
    isNetwork: false, mission, myDataSource);
```

替换一个视图（这是 mod 最常见的用法）：

```csharp
using TaleWorlds.MountAndBlade.View;
using TaleWorlds.MountAndBlade.View.MissionViews;
using TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard;

// 两条门槛（ViewCreatorManager.cs:232 与 :237）：
//   1. 必须是 MissionView 或 ScreenBase 的派生类
//   2. 必须恰好带一个 [OverrideView]
[OverrideView(typeof(MissionBattleScoreUIHandler))]
public class MyModScoreView : MissionView
{
    private readonly ScoreboardBaseVM _dataSource;

    // ViewCreatorManager.cs:205 用 Activator.CreateInstance 反射构造，
    // 传入的是 ViewCreator 传下来的 object[]，所以构造函数签名必须对得上
    public MyModScoreView(ScoreboardBaseVM dataSource)
    {
        _dataSource = dataSource;
    }
}
```

注册一个按命令名创建视图的方法：

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.View.MissionViews;

[ViewCreatorModule]
public static class MyModViewCreators
{
    [ViewMethod("MyModHudView")]
    public static MissionView CreateHud(Mission mission)
    {
        return new MyModHudView();
    }
}
```

诊断「我的替换到底生效没有」：

```csharp
using TaleWorlds.MountAndBlade.View;
using TaleWorlds.MountAndBlade.View.MissionViews;
using TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer;

public static string DiagnoseOverride()
{
    MissionView requested =
        ViewCreatorManager.CreateMissionView<MissionBattleScoreUIHandler>();

    string actual = requested.GetType().FullName;

    // 若返回 MissionBattleScoreUIHandler 本身，
    // 说明 ViewCreatorManager.cs:194 的 TryGetValue 失败（没人注册过替换），
    // 走到了 ViewCreatorManager.cs:207 的 new T() 兜底。
    if (actual == typeof(MissionBattleScoreUIHandler).FullName)
    {
        return "NO OVERRIDE — 空壳兜底，屏幕上不会有东西";
    }

    // 若抛了 ArgumentNullException，
    // 说明 ViewCreatorManager.cs:194 命中但 :196-204 全落空，
    // 你的程序集没在 ModuleHelper.GetActiveGameAssemblies() 里。
    return "override active -> " + actual;
}
```

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 类声明 | `public static class ViewCreatorManager`（`ViewCreatorManager.cs:12`） | 静态类，无实例、无基类。`using System.Reflection`（`ViewCreatorManager.cs:4`）说明反射是它的日常。 |
| `_viewCreators` | `private static Dictionary<string, MBList<MethodInfo>> _viewCreators`（`ViewCreatorManager.cs:14`） | 命令名 → 创建方法列表。**MBList 意味着同名可注册多次。** |
| `_actualViewTypes` | `private static Dictionary<Type, MBList<Type>> _actualViewTypes`（`ViewCreatorManager.cs:16`） | **本类的核心表**：基类型 → 候选实现。注册逻辑在 `ViewCreatorManager.cs:239` 到 `:248`。 |
| `_defaultTypes` | `private static HashSet<Type> _defaultTypes`（`ViewCreatorManager.cs:18`） | 无条件实例化的默认视图集合。收集在 `ViewCreatorManager.cs:253` 到 `:261`。 |
| 静态构造 | `static ViewCreatorManager()`（`ViewCreatorManager.cs:20`） | 建三个表（`:22` 到 `:24`）并触发一次 `CollectTypes`（`:25`）。**整张表的生命周期由它决定。** |
| `CollectTypes` | `internal static void CollectTypes()`（`ViewCreatorManager.cs:28`） | **重建全部三张表。** internal 意味着你能反射调它，引擎自己只在静态构造里调一次。 |
| `CheckAssemblyScreens` | `private static void CheckAssemblyScreens(Assembly assembly)`（`ViewCreatorManager.cs:54`） | 只收带 `[ViewCreatorModule]` 的类（`ViewCreatorManager.cs:58` 到 `:62`）。另一处在 `ViewCreatorManager.cs:66`，收方法上的 `[ViewMethod]`。**特性必须打在类上，方法才被扫。** |
| `CreateDefaultMissionBehaviors` | `internal static IEnumerable<MissionBehavior> CreateDefaultMissionBehaviors(Mission mission)`（`ViewCreatorManager.cs:85`） | 遍历 `_defaultTypes` 并实例化。失败时在 `ViewCreatorManager.cs:115` 打一条硬编码路径的 `FailedAssert`——它转发到 `MBDebugManager.cs:33`，**那一跳是空方法体**，所以初始化失败不会有任何提示。 |
| `CollectMissionBehaviors` | `internal static IEnumerable<MissionBehavior> CollectMissionBehaviors(string missionName, Mission mission, IEnumerable<MissionBehavior> behaviors)`（`ViewCreatorManager.cs:121`） | 按任务名找到创建方法，反射调用后与入参拼接（`:146`）。同样是倒序扫 + 激活判定（`:128` 到 `:134`）。 |
| `CreateScreenView<T>()` | `public static ScreenBase CreateScreenView<T>() where T : ScreenBase, new()`（`ViewCreatorManager.cs:149`） | 无参版。倒序挑选在 `ViewCreatorManager.cs:155` 到 `:162`，**都没命中就 `return new T()`**（`:169`）—— 与 MissionView 版不同，这里是安全兜底。 |
| `CreateScreenView<T>(params)` | `public static ScreenBase CreateScreenView<T>(params object[] parameters) where T : ScreenBase`（`ViewCreatorManager.cs:172`） | 带参版。**注意它没有 `new()` 约束**，因为走的是 `Activator.CreateInstance`（`:187`）。 |
| `CreateMissionView<T>` | `public static MissionView CreateMissionView<T>(bool isNetwork = false, Mission mission = null, params object[] parameters) where T : MissionView, new()`（`ViewCreatorManager.cs:191`） | **最常用的入口。** 命中注册表走 `:205` 的反射；否则走 `:207` 的 `new T()`，**此时 `parameters` 被静默丢弃**。 |
| `CreateMissionViewWithArgs<T>` | `public static MissionView CreateMissionViewWithArgs<T>(params object[] parameters) where T : MissionView`（`ViewCreatorManager.cs:210`） | 与上一个的差别：**没有 `new()` 约束、也没有无参兜底**（`:225` 直接 `Activator.CreateInstance`）。**注册缺失时会抛而不是返回空壳。** |
| `CheckOverridenViews` | `private static void CheckOverridenViews(Assembly assembly)`（`ViewCreatorManager.cs:228`） | 替换表构建器。类型门槛 `ViewCreatorManager.cs:232`，特性读取 `:236`，恰好一个的条件 `:237`，写入 `:239` 到 `:248`（后四个行号都落在同一个方法体内）。 |
| `CollectDefaults` | `private static void CollectDefaults(Assembly assembly)`（`ViewCreatorManager.cs:253`） | 收 `[DefaultView]` 且是 `MissionBehavior` 派生类的类型（`ViewCreatorManager.cs:257`）。 |
| `InitializeTelemetryScopeNames`（对照类） | 形如 `private void InitializeTelemetryScopeNames()` | 本类**没有**这个方法（它在 [FormationQuerySystem](../FormationQuerySystem/) 上，且是空体）。不要照抄那个空钩子。 |

## 真实示例

复刻「倒序 + 激活程序集优先」的挑选逻辑（这是全部优先级的来源）：

```csharp
using System;
using System.Collections.Generic;
using System.Reflection;

// 对应 ViewCreatorManager.cs:196 到 :204 的形状
public static Type PickCandidate(IReadOnlyList<Type> candidates, Func<Type, bool> isAssemblyActive)
{
    // 倒序扫描 —— 后注册的排在后面，因此优先
    for (int i = candidates.Count - 1; i >= 0; i--)
    {
        if (isAssemblyActive(candidates[i]))
        {
            return candidates[i];
        }
    }

    return null;
    // ⚠ 返回 null 时，ViewCreatorManager.cs:205 会拿它去 Activator.CreateInstance
    //   => 抛 ArgumentNullException，而不是退回 new T()
}
```

复刻三条入口在「注册缺失」时的不同表现：

```csharp
using TaleWorlds.MountAndBlade.View;

// 对照 ViewCreatorManager.cs 的四个创建入口
public static string CompareFallbacks()
{
    var sb = new System.Text.StringBuilder();

    // CreateMissionView<T>：TryGetValue 失败 -> :207 new T()，静默返回空壳
    sb.AppendLine("CreateMissionView     : 无替换时静默返回 new T()（ViewCreatorManager.cs:207）");

    // CreateScreenView<T>()：:169 new T()，也是静默兜底
    sb.AppendLine("CreateScreenView<T>() : 无替换时静默返回 new T()（ViewCreatorManager.cs:169）");

    // CreateScreenView<T>(params)：:187 Activator.CreateInstance，无兜底
    sb.AppendLine("CreateScreenView<T>(p): 无 new() 约束，注册缺失直接抛（ViewCreatorManager.cs:187）");

    // CreateMissionViewWithArgs<T>：:225 Activator.CreateInstance，无兜底
    sb.AppendLine("CreateMissionViewWithArgs: 无 new() 约束，注册缺失直接抛（ViewCreatorManager.cs:225）");

    return sb.ToString();
}
```

自建一张替换表（把注册逻辑搬到自己这边）：

```csharp
using System;
using System.Collections.Generic;
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade.View;
using TaleWorlds.MountAndBlade.View.MissionViews;
using TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer;

// 对应 ViewCreatorManager.cs:236 到 :248 的登记逻辑
public static class MyModViewRegistry
{
    private static readonly Dictionary<Type, List<Type>> Overrides = new();

    public static void Register(Type baseType, Type implementation)
    {
        // ViewCreatorManager.cs:232 的类型门槛
        if (!typeof(MissionView).IsAssignableFrom(implementation)
            && !typeof(ScreenBase).IsAssignableFrom(implementation))
        {
            return;
        }

        if (Overrides.TryGetValue(baseType, out var list))
        {
            list.Add(implementation);
        }
        else
        {
            Overrides[baseType] = new List<Type> { implementation };
        }
    }

    public static Type Resolve(Type baseType, Func<Type, bool> isAssemblyActive)
        => Overrides.TryGetValue(baseType, out var list)
            ? PickCandidate(list, isAssemblyActive)
            : null;
}
```

## 风险与边界

- **注册缺失时的表现按入口不同。**
- `CreateMissionView` 静默返回空壳，兜底在 `ViewCreatorManager.cs:207`
- `CreateScreenView<T>()` 也是静默兜底，兜底在 `ViewCreatorManager.cs:169`
- `CreateScreenView<T>(params)` 直接抛，反射构造在 `ViewCreatorManager.cs:187`
- `CreateMissionViewWithArgs` 的声明在 `ViewCreatorManager.cs:210`，直接抛
- 它的反射构造在同一方法末尾，见 `ViewCreatorManager.cs:225`
- **四个入口两种行为。**
- **注册了但程序集未激活 ⇒ 抛异常，不是兜底。** `ViewCreatorManager.cs:205` 拿到 null 的 `type`。**这是最常见的「mod 装上了但没生效」的真因。**
- **`[OverrideView]` 必须恰好一个。** 判定在 `ViewCreatorManager.cs:237`，条件是 `Length == 1`。挂两个等于没挂。
- **只能替换 `MissionView` / `ScreenBase` 的派生类**（`ViewCreatorManager.cs:232`）。别的基类被静默 `continue` 掉。
- **`CreateMissionView<T>` 有 `new()` 约束**（`ViewCreatorManager.cs:191`）。带必需构造参数的类型不能当令牌。
- **兜底时 `parameters` 被丢弃**（`ViewCreatorManager.cs:207`）。你的 `ScoreboardBaseVM` 会无声丢失。
- **候选顺序是倒序**（`ViewCreatorManager.cs:197`）。**后注册赢** —— 但也意味着重复注册会让老命令跑两遍（对照 [DedicatedServerConsoleCommandManager](../DedicatedServerConsoleCommandManager/) 的同类问题）。
- **表只在静态构造时构建一次**（`ViewCreatorManager.cs:25`）。运行期加载的 mod 不会被自动纳入。
- **`CollectTypes` 是 internal 且会清空重建**（`ViewCreatorManager.cs:30-32`）。反射调它是安全的，但要挑时机。
- **`CreateDefaultMissionBehaviors` 的失败断言最终落到空方法体**（`ViewCreatorManager.cs:115`）。归因在第二跳：`Debug.FailedAssert`（`Debug.cs:117`）本身有判空与转发（`Debug.cs:121`），空的是它转发的 `MBDebugManager.cs:33`。默认视图初始化失败**不会有任何提示**，且**与构建配置无关**。
- **`isNetwork` 与 `mission` 两个形参在 `CreateMissionView` 里没被使用**（`ViewCreatorManager.cs:191`）。**它们是历史遗留，不影响替换结果。**
- **CustomBattle 与 Multiplayer 各有一份同名文件**，改一份不影响另一份。

## 依赖关系

- 本类的类头与三张表：`ViewCreatorManager.cs:12` 类头，`:14` 到 `:18` 三张表（这一句指的都是同一个文件）
- 本类的两个生命周期钩子：`ViewCreatorManager.cs:20` 静态构造与 `ViewCreatorManager.cs:28` 的 `CollectTypes`（这一句指的都是同一个文件）
- 本类的四个创建入口：`ViewCreatorManager.cs:149`、`:172`、`:191`、`:210`（这一句指的都是同一个文件）
- 表构建三步，每步一个方法：
- `CheckAssemblyScreens` —— 实现体在 `ViewCreatorManager.cs:54`
- `CheckOverridenViews` —— 实现体在 `ViewCreatorManager.cs:228`
- `CollectDefaults` —— 实现体在 `ViewCreatorManager.cs:253`
- 特性：[OverrideView](../OverrideView/)（替换目标）、[DefaultView](../DefaultView/)（默认视图）、[ViewMethod](../ViewMethod/) 与 [ViewCreatorModule](../ViewCreatorModule/)（按命令名创建）
- 被替换的基类：[MissionView](../MissionView/)；屏幕基类 [ScreenBase](../../gui/ScreenBase/)
- 程序集激活判定：[ModuleHelper](../../campaign-ext/ModuleHelper/) 的 `GetActiveGameAssemblies`；反射工具 [Extensions](../../core-extra/Extensions/)
- 调用方：[ViewCreator](../ViewCreator/) 的全部 `Create*` 方法；[MissionScreen](../MissionScreen/) 的 `AddMissionView`
- 典型令牌：[MissionBattleScoreUIHandler](../MissionBattleScoreUIHandler/)、[MissionFormationMarkerUIHandler](../MissionFormationMarkerUIHandler/)
- 桶首页：[mission-ext API 分区](../)