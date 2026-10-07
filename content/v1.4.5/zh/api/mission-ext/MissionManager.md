---
title: "MissionManager"
description: "标记静态类成为任务目录来源的空特性：Module 启动时反射扫描带它的类，把其中 public static 方法里带 [MissionMethod] 的注册成可在任务选择器里点到的任务。"
---

# MissionManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionManager : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.MountAndBlade/MissionManager.cs`

## 概述

`MissionManager` 全文 7 行、**一个成员都没有**，它唯一的职责是「挂一个章」。真正干活的是 [Module](../../core/Module/) 的启动扫描：启动时它遍历当前 AppDomain 里的程序集，把每个类型拿 `GetCustomAttributesSafe(typeof(MissionManager), inherit: true)` 试一遍（`Module.cs:874`），命中就把这个类型收进候选表；紧接着对这个类型取 `GetMethods(BindingFlags.Static | BindingFlags.Public)`（`Module.cs:884`），再对每个方法查 `[MissionMethod]`（`Module.cs:887`），命中的方法被包成一个 [MissionInfo](../MissionInfo/) 条目塞进 `_missionInfos`。

所以它是**任务目录的入口章，不是管理器**。类名叫 Manager，但全树没有任何一处 `new MissionManager()`、没有任何属性读它、也没有任何逻辑挂在它身上——它连 `AttributeUsage` 都没写，因此在 C# 语义上可以被无限次叠加到同一个类型上。

v1.4.5 里带这个章的类型共 8 处（实测 grep）：

| 类型 | 位置 | 命名空间 |
| --- | --- | --- |
| `BannerlordMissions` | `BannerlordMissions.cs:15` | `TaleWorlds.MountAndBlade` |
| `MultiplayerMissions` | `Modules.Multiplayer/.../MultiplayerMissions.cs:10` | `TaleWorlds.MountAndBlade.Multiplayer` |
| `MultiplayerPracticeMissions` | `Modules.Multiplayer/.../MultiplayerPracticeMissions.cs:15` | `TaleWorlds.MountAndBlade.Multiplayer` |
| 同名两份（CustomBattle 变体） | `Modules.CustomBattle/.../MultiplayerMissions.cs:10`、`MultiplayerPracticeMissions.cs:15` | 同上 |
| `SandBoxMissions` | `Modules.SandBox/SandBox/Sandbox/SandBoxMissions.cs:38` | `SandBox` |
| `TournamentMissionStarter` | `Modules.SandBox/SandBox/SandBox.Tournaments/TournamentMissionStarter.cs:14` | `SandBox.Tournaments` |
| `StoryModeMissions` | `Modules.StoryMode/.../StoryModeMissions.cs:21` | `StoryMode` |

## 心智模型

把它当成**贴在店门口、告诉扫描器「这家店的货在我这屋」的标签**，而不是一台机器。四条推论：

第一，**它自己不产生任何行为，行为全在被标记的那个类里。** 加了章之后你还得在同一个类里写 `public static Mission Open...`，再给方法挂 [MissionMethod](../MissionMethod/)。只挂类不挂方法，等于什么都没注册——扫描器 `Module.cs:887` 查的是方法上的属性，不是类上的。

第二，**章挂在实例类上等于挂了个空章。** `Module.cs:884` 只取 `Static | Public` 方法。实例方法根本不会进入候选集，扫描器不会报错也不会警告，你的任务就是静默消失。官方 8 处全部是 `public static class`（见 `TournamentMissionStarter.cs:15`）。

第三，**任务显示名是被程序改写过的，不是你的方法名。** `Module.cs:895-898` 先剥掉开头的 `Open`，`Module.cs:900-903` 再剥掉结尾的 `Mission`，最后 `Module.cs:904` 拼上 `[管理器类名]`。所以 `OpenTournamentArcheryMission` 在目录里显示成 `TournamentArchery[SandBox.Tournaments.TournamentMissionStarter]`。**想让名字好看就按 `OpenXxxMission` 命名，别跟这套约定对着干。**

第四，**能不能出现在场景编辑器里，取决于 [MissionMethod](../MissionMethod/) 的公开字段 `UsableByEditor`（`MissionMethod.cs:7`），不取决于本特性。** 扫描时它被抄进 `MissionInfo.UsableByEditor`（`Module.cs:894`），`Module.GetMissionControllerClassNames()`（`Module.cs:913`）再据此决定是否输出给编辑器。

## 如何使用

**拿法：** 没有入口 API 要调。这个类只能通过反射被读到——你要做的是「在自己程序集的一个 `public static class` 上打两个章」，让 `Module` 的启动扫描替你发现它。

它要生效，还差三步：

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.Core;

namespace MyMod.Missions;

// 1) 类必须是 public static —— Module.cs:884 只扫 Static|Public 方法
[MissionManager]
public static class MyModMissions
{
    // 2) 方法必须 public static，返回 Mission，名字以 Open 开头、结尾可选 Mission
    [MissionMethod]
    public static Mission OpenMyModSkirmish(string scene)
    {
        // 3) 方法体自己负责建 Mission；本特性不提供任何上下文
        return MissionState.OpenNew("MyModSkirmish", new MissionInitializerRecord(scene));
    }
}
```

**最容易踩的一条：** 把 `[MissionManager]` 和 `[MissionMethod]` 都挂对了，但类写成了非 `static`，或者方法写成了实例方法。启动时不会有任何报错，`Module.cs:909` 打印的 `Found N missions` 里的 N 就是少了你的那一条，而你会花很久去查 `Mission` 构造函数。

**另一半坑：** `MissionMethod` 只有 `UsableByEditor` 一个**公开字段**（`MissionMethod.cs:7`），没有构造参数。写 `[MissionMethod(true)]` 编译不过，正确写法是先 `var m = new MissionMethod { UsableByEditor = true };`——但属性特性不接受实例，所以实际上你只能依赖默认值。

## 关键成员

本类**声明成员数为 0**（`MissionManager.cs:5` 到 `:7` 之间只有类头、类体左括号、右括号）。下表列的是 modder 实际要打交道的契约成员，签名与行号均从源码抄出。

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `MissionManager`（本类） | `public class MissionManager : Attribute`（`MissionManager.cs:5`） | 纯标记。自身零成员、零逻辑、零字段。它唯一的作用是让 `Module.cs:874` 的 `typeof(MissionManager)` 特征匹配命中。 |
| `Module._missionInfos` | `private List<MissionInfo> _missionInfos`（`Module.cs:862`） | 扫描结果容器。赋值发生在 `Module.cs:862`，写入发生在 `Module.cs:905`，最终在 `Module.cs:909` 打印总数。这是判断「我的任务到底注册上没有」的唯一可观测点。 |
| `Module` 的扫描前置过滤 | `CheckAssemblyForMissionMethods(assembly)`（`Module.cs:868`） | 先按程序集粗筛，不通过就 `continue` 掉整个程序集（`Module.cs:869-871`）。**程序集里一个 `[MissionManager]` 都没有的话，你的程序集根本不会被逐类型检查。** |
| `MissionManager` 特征匹配 | `item.GetCustomAttributesSafe(typeof(MissionManager), inherit: true)`（`Module.cs:874`） | 逐类型判定。`inherit: true` 意味着**继承链上的章也算数**——基类打了章，派生类也会被登记。 |
| 方法枚举的绑定标志 | `item2.GetMethods(BindingFlags.Static \| BindingFlags.Public)`（`Module.cs:884`） | 决定哪些方法有资格。`Static` 与 `Public` 缺一不可，`protected`/`internal`/实例方法全部落选且不报错。 |
| `MissionMethod` 特征匹配 | `methodInfo.GetCustomAttributesSafe(typeof(MissionMethod), inherit: true)`（`Module.cs:887`） | 方法级判定。只有命中它的方法才会进 `MissionInfo`。取 `customAttributesSafe2[0]`（`Module.cs:890`），**多个 `[MissionMethod]` 只认第一个**。 |
| `MissionInfo.Creator` | `public MethodInfo Creator { get; set; }`（`MissionInfo.cs:10`） | 存被反射到的那个静态方法。运行期真正开任务时调的就是它。 |
| `MissionInfo.Manager` | `public Type Manager { get; set; }`（`MissionInfo.cs:12`） | 存打了章的那个类型。它同时是显示名的后缀来源（`Module.cs:904` 取 `item2.Name`）。 |
| `MissionInfo.UsableByEditor` | `public bool UsableByEditor { get; set; }`（`MissionInfo.cs:14`） | 从 `MissionMethod.UsableByEditor` 抄来（`Module.cs:894`），决定该任务是否出现在场景编辑器的可选列表里。 |
| `MissionMethod.UsableByEditor` | `public bool UsableByEditor;`（`MissionMethod.cs:7`） | 公开**字段**不是属性。在属性用法里你没法用 `UsableByEditor = true` 命名参数，只能吃默认 `false`。 |

## 真实示例

注册一个能被扫描到的任务入口，并把诊断信息打出来：

```csharp
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;

namespace MyMod.Missions;

[MissionManager]
public static class MyModMissions
{
    [MissionMethod]
    public static Mission OpenMyModPitFight(string scene, int upgradeLevel = 0)
    {
        MBDebug.Print("MyModPitFight mission creator invoked, scene = " + scene, 0);
        return MissionState.OpenNew("MyModPitFight", new MissionInitializerRecord(scene)
        {
            TerrainType = TerrainType.Field,
            SceneLevel = upgradeLevel
        });
    }
}
```

命名约定对显示名的实际影响（对应 `Module.cs:895-904` 的改写逻辑）：

```csharp
// 方法名 OpenTournamentArcheryMission
//   -> 剥 Open   -> TournamentArcheryMission   (Module.cs:898)
//   -> 剥 Mission-> TournamentArchery          (Module.cs:902)
//   -> 拼后缀    -> TournamentArchery[SandBox.Tournaments.TournamentMissionStarter]  (Module.cs:904)
//
// 方法名 StartArena
//   -> 不剥 Open
//   -> 不剥 Mission
//   -> StartArena[MyMod.Missions.MyModMissions]   ← "StartArena" 原样出现在选择器里
```

排查「任务没注册」时读日志的那一行（对应 `Module.cs:861` 与 `Module.cs:909`）：

```csharp
// 启动时 MBDebug.Print("Searching Mission Methods")                 -> Module.cs:861
// 扫完带章的类型: MBDebug.Print("Found " + list.Count + " mission managers") -> Module.cs:881
// 注册完方法:     MBDebug.Print("Found " + _missionInfos.Count + " missions") -> Module.cs:909
// 官方 8 处带章类型都命中时，managers 一行应当 >= 8；
// 你的任务没进 missions 计数，说明 [MissionMethod] 或 static public 没到位。
```

## 风险与边界

- **零成员，不是管理器。** 全类没有任何可调用成员。任何 `new MissionManager()` 都在造一个毫无作用的实例。
- **类必须 `public static`，方法必须 `public static`。** 写错不报错，只是任务不进目录。
- **只认方法上的 `[MissionMethod]`，不认类上的。** 只挂类 = 空注册。
- **`inherit: true` 会让继承来的章生效。** 基类打了章，派生类会被重复登记一次同名管理器。
- **显示名被强制改写。** `Open` 前缀与 `Mission` 后缀会被剥掉（`Module.cs:898` / `Module.cs:902`），别指望任务选择器里显示你的完整方法名。
- **`[MissionMethod]` 的多个实例只取 `[0]`**（`Module.cs:890`），重复挂章没有意义。
- **不加 `AttributeUsage` 意味着无限制叠加。** 同一类型写三个 `[MissionManager]` 不会被拒绝，但 `Module.cs:875` 只判长度非零，重复登记照样发生。
- **程序集级粗筛不可绕过。** `Module.cs:868` 的 `CheckAssemblyForMissionMethods` 不通过时整个程序集被跳过。

## 依赖关系

- 扫描方：[Module](../../core/Module/) 的启动流程（`Module.cs:861` 至 `Module.cs:910`），这是全树唯一读 `typeof(MissionManager)` 的地方（实测唯一命中 `Module.cs:874`）
- 方法侧标记：[MissionMethod](../MissionMethod/)，全文 8 行，只有一个 `public bool UsableByEditor;` 字段
- 承载结果：[MissionInfo](../MissionInfo/)，四个自动属性 `Name` / `Creator` / `Manager` / `UsableByEditor`
- 被标记的典型样本：[BannerlordMissions](../BannerlordMissions/)（`BannerlordMissions.cs:15`），它同时是 [CustomSallyOutMissionController](../CustomSallyOutMissionController/) 与 [CustomSiegeMissionSpawnHandler](../CustomSiegeMissionSpawnHandler/) 的注册处
- 桶首页：[mission-ext API 分区](../)
