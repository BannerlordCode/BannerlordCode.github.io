---
title: "DedicatedServerConsoleCommandManager"
description: "联机专用服务器的命令分发器：一条输入先查 MultiplayerOptions，再扫注册类型上带 [ConsoleCommandMethod] 的静态私有方法，最后落到 CommandLineFunctionality。带 ? 后缀是「只打印不执行」。"
---

# DedicatedServerConsoleCommandManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class DedicatedServerConsoleCommandManager`
**Base:** 无
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/DedicatedServerConsoleCommandManager.cs`

## 概述

全文 251 行的**静态命令分发器**，输入是一行文本，输出是往服务器控制台打日志。它把一条命令按三级路由，**先命中先用，后两级不跑**：

**第一级** 把第一个词当作 [MultiplayerOptions](../MultiplayerOptions/) 的选项名去查（`DedicatedServerConsoleCommandManager.cs:61`）。查到就走查询/赋值逻辑，末尾把 `flag` 置真（`DedicatedServerConsoleCommandManager.cs:117`）。

**第二级** 第一级没命中，就遍历所有注册过的类型，反射扫它们的**静态 + 非公开**方法，找带 [ConsoleCommandMethod](../ConsoleCommandMethod/) 特性的（`DedicatedServerConsoleCommandManager.cs:123`）。命中就反射调用（`:138`）并置 `flag`（`:140`）。

**第三级** 还没命中，交给 `CommandLineFunctionality.CallFunction`（`DedicatedServerConsoleCommandManager.cs:149`），它自己说成功才算（`:150`）。

三级全落空才打 `--Invalid command is given.`（`DedicatedServerConsoleCommandManager.cs:158`）。

**注册表只有一个类型是自注册的** —— 静态构造把自身加了进去（`DedicatedServerConsoleCommandManager.cs:19`）。扩展点靠 `AddType`（`DedicatedServerConsoleCommandManager.cs:22`）。

## 心智模型

把它当成**「服务器控制台的三级路由表」**。四条推论：

第一，**`?` 后缀是全局的「只查不执行」约定。** 命令名后面的参数如果正好是 `?`，三条路径都只打印帮助不执行：第一级在 `DedicatedServerConsoleCommandManager.cs:63`，第二级在 `DedicatedServerConsoleCommandManager.cs:132`。**这是这一族命令最实用的一个约定 —— 想知道某个命令能干什么，加个 `?` 就够了，不会误改配置。**

第二，**第二级只扫静态且非公开的方法。** `BindingFlags.Static | BindingFlags.NonPublic`（`DedicatedServerConsoleCommandManager.cs:123`）。**这意味着你的命令方法必须声明为 `private static`，写成 `public static` 反而不会被发现。** 类里的 `SetWinnerTeam`（`DedicatedServerConsoleCommandManager.cs:207`）和 `SetServerBandwidthLimitInMbps`（`:214`）都是 `private static`，就是这个原因。

第三，**注册是单向的，没有注销。** `AddType`（`DedicatedServerConsoleCommandManager.cs:22`）只有 Add，字段 `_commandHandlerTypes`（`:14`）在静态构造里 new 之后（`:18`）就没人再动它。**同一个类型注册两次会导致它的每个命令被执行两遍** —— 第二级没有「找到就停」的 break，`DedicatedServerConsoleCommandManager.cs:140` 置真后循环仍会继续。

第四，**第一级会真正改配置，且不校验取值是否合法。** 值类型分支在 `DedicatedServerConsoleCommandManager.cs:70` 到 `:88`：`int.TryParse` 失败时（比如给一个 int 选项传 `"abc"`）**静默不设置**，然后照样走到 `DedicatedServerConsoleCommandManager.cs:99` 打印 `--Changed: ...`，**打印的是旧值**。你看到 `--Changed` 不代表它真改了。

还有一条边界：内置的 `list` 命令硬编码枚举上界 43（`DedicatedServerConsoleCommandManager.cs:175`）。**`OptionType` 加了新成员而这里没改，`list` 就漏掉新的那个。**

## 如何使用

**拿法：** 加自己的命令类型，然后注册：

```csharp
using System;
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;

public static class MyModServerCommands
{
    // ⚠ 必须 private static —— 第二级的绑定标志是
    //    Static | NonPublic（DedicatedServerConsoleCommandManager.cs:123），
    //    写成 public static 反而找不到。
    [ConsoleCommandMethod("my_mod_weather", "Sets the weather: my_mod_weather rain|snow|clear")]
    private static void SetWeather(string argument)
    {
        string kind = argument ?? "clear";
        Debug.Print("[my_mod] weather = " + kind, 0);
    }

    // 派发见 DedicatedServerConsoleCommandManager.cs:138
}
```

注册（注册后命令即可用；注意没有注销接口）：

```csharp
using TaleWorlds.MountAndBlade;

public static void RegisterMyCommands()
{
    // AddType 声明在 DedicatedServerConsoleCommandManager.cs:22
    DedicatedServerConsoleCommandManager.AddType(typeof(MyModServerCommands));

    // ⚠ 同一个类型注册两次 → 每个命令被执行两遍
    //   （DedicatedServerConsoleCommandManager.cs:140 置真后循环不 break）
}
```

零参数的命令也能注册（分发时空参传 null）：

```csharp
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;

public static class MyModPingCommands
{
    // 分发见 DedicatedServerConsoleCommandManager.cs:138：
    // string.IsNullOrEmpty(text) ? null : new[]{text}
    // => 无参数时 invoke 的实参是 null，方法必须能吃 null
    [ConsoleCommandMethod("my_mod_ping", "Prints a pong")]
    private static void Pong()
    {
        Debug.Print("[my_mod] pong", 0);
    }
}
```

在发命令前先查帮助（不误改配置）：

```csharp
using TaleWorlds.MountAndBlade;

public static void ShowHelp(string commandName)
{
    // 输入 "<命令名> ?" —— 「?」后缀走 DedicatedServerConsoleCommandManager.cs:63
    // 与 DedicatedServerConsoleCommandManager.cs:132，只打印不执行
    GameNetwork.HandleConsoleCommand(commandName + " ?");
}
```

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 类声明 | `public static class DedicatedServerConsoleCommandManager`（`DedicatedServerConsoleCommandManager.cs:12`） | 静态类，无实例。`using System.Reflection`（`DedicatedServerConsoleCommandManager.cs:4`）说明第二级靠反射。 |
| `_commandHandlerTypes` | `private static readonly List<Type> _commandHandlerTypes`（`DedicatedServerConsoleCommandManager.cs:14`） | **唯一的字段**，静态构造里 new（`:18`）。**只增不减**，没有去重。 |
| 静态构造 | `static DedicatedServerConsoleCommandManager()`（`DedicatedServerConsoleCommandManager.cs:16`） | 建表（`:18`）并把自身加进去（`:19`）。**所以 `list` 命令天然包含在本类的私有命令里。** |
| `AddType` | `public static void AddType(Type type)`（`DedicatedServerConsoleCommandManager.cs:22`） | **唯一的公开扩展点。** 直接 `Add`（`:24`），无判重、无 null 检查。**传 null 会让第二级在 `DedicatedServerConsoleCommandManager.cs:121` 的遍历里抛异常。** |
| `HandleConsoleCommand` | `internal static void HandleConsoleCommand(string command)`（`DedicatedServerConsoleCommandManager.cs:27`） | **真正的入口，但 internal。** 分词在 `:46` 到 `:57`（按第一个空格切）。三级路由的入口分别在 `:61`、`:121`、`:149`。 |
| `ListAllCommands` | `private static void ListAllCommands()`（`DedicatedServerConsoleCommandManager.cs:164`） | 内置 `list` 命令，特性在 `DedicatedServerConsoleCommandManager.cs:163`。**选项枚举上界硬编码 43**（`:175`），扫描命令在 `:186` 到 `:201`。 |
| `SetWinnerTeam` | `private static void SetWinnerTeam(string winnerTeamAsString)`（`DedicatedServerConsoleCommandManager.cs:207`） | 内置命令，特性在 `:206`。**`int.Parse` 无 try/catch**（`:209`）—— 传非数字直接抛。 |
| `SetServerBandwidthLimitInMbps` | `private static void SetServerBandwidthLimitInMbps(string bandwidthLimitAsString)`（`DedicatedServerConsoleCommandManager.cs:214`） | 内置命令，特性在 `:213`。同样直传 `int.Parse`。 |

三级路由的落点：

| 级别 | 触发条件 | 落点 |
| --- | --- | --- |
| 一 | 选项名能查到 | `DedicatedServerConsoleCommandManager.cs:61` |
| 二 | 一级未命中 | `DedicatedServerConsoleCommandManager.cs:121` |
| 三 | 二级未命中 | `DedicatedServerConsoleCommandManager.cs:149` |
| 兜底 | 三级都未命中 | `DedicatedServerConsoleCommandManager.cs:158` |

## 真实示例

完整复刻第一级的赋值分支（看清「解析失败静默跳过但仍打印 Changed」）：

```csharp
using System;
using TaleWorlds.Core;

// 对应 DedicatedServerConsoleCommandManager.cs:70-106
// 返回 true 表示真的改了；false 表示参数没被接受
public static bool TryApplyOption(int optionValueType, string text, Action<object> setValue)
{
    switch (optionValueType)
    {
        case 3:   // DedicatedServerConsoleCommandManager.cs:70
            setValue(text);
            return true;

        case 1:   // DedicatedServerConsoleCommandManager.cs:74
            if (int.TryParse(text, out int i1))
            {
                setValue(i1);
                return true;
            }
            return false;   // 解析失败 —— 原实现静默跳过，但仍会打印 Changed

        case 2:   // DedicatedServerConsoleConsoleCommandManager.cs:81 处的分支
            if (int.TryParse(text, out int i2))
            {
                setValue(i2);
                return true;
            }
            return false;

        case 0:   // DedicatedServerConsoleCommandManager.cs:88
            if (bool.TryParse(text, out bool b))
            {
                setValue(b);
                return true;
            }
            return false;

        default:
            // DedicatedServerConsoleCommandManager.cs:97 的 FailedAssert 走这里
            return false;
    }
}
```

复刻第二级的命令发现（看清「静态 + 非公开」与「不 break」）：

```csharp
using System;
using System.Collections.Generic;
using System.Reflection;
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;

public static class CommandDiscovery
{
    // 绑定标志与 DedicatedServerConsoleCommandManager.cs:123 完全一致
    private static readonly BindingFlags Flags = BindingFlags.Static | BindingFlags.NonPublic;

    public static List<string> Discover(IEnumerable<Type> handlerTypes)
    {
        var names = new List<string>();

        foreach (Type handlerType in handlerTypes)
        {
            MethodInfo[] methods = handlerType.GetMethods(Flags);

            foreach (MethodInfo method in methods)
            {
                foreach (object attr in Extensions.GetCustomAttributesSafe(method, false))
                {
                    if (attr is ConsoleCommandMethod command && !names.Contains(command.CommandName))
                    {
                        names.Add(command.CommandName);
                    }
                }
            }
        }

        return names;
    }

    // ⚠ 原实现没有这个去重（DedicatedServerConsoleCommandManager.cs:140 之后循环继续），
    //   所以同一个类型注册两次 => 命令被执行两遍。
}
```

反射调用时的实参规则（对照 `DedicatedServerConsoleCommandManager.cs:138`）：

```csharp
using System.Collections.Generic;
using System.Reflection;

// 复刻 DedicatedServerConsoleCommandManager.cs:138 的实参构造
public static object[] BuildArguments(string text)
{
    // 无参数时传 null 数组，不是空数组
    return string.IsNullOrEmpty(text) ? null : new List<object> { text }.ToArray();
}

// 所以你的命令方法必须：
//   - 无参（"my_cmd"）        => Invoke(null, null)
//   - 或恰好一个 string 形参  => Invoke(null, new object[]{ text })
// 两个形参的命令永远不会被分发。
```

## 风险与边界

- **命令方法必须 `private static`。** 绑定标志是 `Static | NonPublic`（`DedicatedServerConsoleCommandManager.cs:123`），**`public static` 反而找不到。**
- **只接受 0 个或 1 个 string 参数**（`DedicatedServerConsoleCommandManager.cs:138`）。两个形参的方法永远不会被调用。
- **`AddType` 无判重、无注销。** 重复注册同一类型 ⇒ 命令执行两遍。
- **`AddType(null)` 会在遍历时抛。** 列表里不会有 null 检查（`DedicatedServerConsoleCommandManager.cs:121`）。
- **`?` 后缀是只读开关。** 三条路径都尊重它，但**只认参数恰好等于 `"?"`** —— `? extra` 不生效。
- **`int.TryParse` 失败静默跳过**（`DedicatedServerConsoleCommandManager.cs:76`、`:83`、`:90`），**但仍会打印 `--Changed`**（`:99`）。**看到 Changed 不代表改了。**
- **内置命令用 `int.Parse` 无保护**（`DedicatedServerConsoleCommandManager.cs:209`）。传非数字直接抛异常。
- **`list` 的选项上界硬编码 43**（`DedicatedServerConsoleCommandManager.cs:175`）。`OptionType` 扩容后 `list` 会漏。
- **三级路由是短路的。** 命令名同时是选项名和自定义命令时，**选项优先**（`DedicatedServerConsoleCommandManager.cs:117` 置真后 `:119` 直接跳过第二级）。
- **`HandleConsoleCommand` 是 internal**（`DedicatedServerConsoleCommandManager.cs:27`）。外部要经 `GameNetwork.HandleConsoleCommand`（`GameNetwork.cs:721`）转发。
- **日志 filter 是硬编码的 `17179869184uL`**（`DedicatedServerConsoleCommandManager.cs:65`）。你的日志订阅器要匹配它。
- **CustomBattle 与 Multiplayer 各有一份同名文件**，改一份不影响另一份。

## 依赖关系

- 本类：`DedicatedServerConsoleCommandManager.cs:12` 类头、`:14` 注册表字段、`:16` 静态构造、`:22` 扩展点、`:27` 分发入口、`:164` 内置 list（这一句指的都是同一个文件）
- 内置命令：`DedicatedServerConsoleCommandManager.cs:207` 与 `DedicatedServerConsoleCommandManager.cs:214`（这一句指的都是同一个文件）
- 命令特性：[ConsoleCommandMethod](../ConsoleCommandMethod/)，带 `CommandName` 与 `Description` 两个只读属性
- 第一级依赖：[MultiplayerOptions](../MultiplayerOptions/) 的 `TryGetOptionTypeFromString`；[OptionType](../OptionType/) 与 [MultiplayerOptionsProperty](../MultiplayerOptionsProperty/)
- 入口转发：[GameNetwork](../GameNetwork/) 的 `HandleConsoleCommand`（`GameNetwork.cs:721`），再经处理器接口回调
- 处理器接口：`IGameNetworkHandler.cs:23` 的 `OnHandleConsoleCommand`
- 触发点：[MultiplayerOptions](../MultiplayerOptions/) 的 `MultiplayerOptions.cs:637`
- 第三级依赖：[CommandLineFunctionality](../../core-extra/CommandLineFunctionality/)
- 日志：[Debug](../../core-extra/Debug/)；filter 常量见 `DedicatedServerConsoleCommandManager.cs:65`；另有 [DebugColor](../../core-extra/DebugColor/)
- 同构副本：`Modules.Multiplayer/` 下有同名同实现的文件，两份互不影响
- 桶首页：[mission-ext API 分区](../)