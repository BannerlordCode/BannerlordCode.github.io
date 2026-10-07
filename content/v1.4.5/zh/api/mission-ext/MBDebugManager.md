---
title: "MBDebugManager"
description: "引擎侧调试后端：全类 25 个成员都是 IDebugManager 的显式实现，其中 11 个是空壳；Debug.Print 之类最终都转到它，而 Debug.Assert 与整组 Debug.Render* 在正式构建里静默失效。"
---

# MBDebugManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBDebugManager : IDebugManager`
**Base:** `IDebugManager`
**File:** `TaleWorlds.MountAndBlade/MBDebugManager.cs`

## 概述

`MBDebugManager` 是引擎的调试后端适配层，全类 121 行、**25 个成员，一个公开成员都没有**——每个成员都写成 `void IDebugManager.XXX(...)` 或 `Vec3 IDebugManager.XXX()` 的显式接口实现（`MBDebugManager.cs:8` 到 `:121`）。它在游戏启动时被创建且只创建一次：`CoreManaged.OnStart()` 里 `Debug.DebugManager = new MBDebugManager();`（`CoreManaged.cs:35`），存进 [Debug](../../core-extra/Debug/) 的 `public static IDebugManager DebugManager { get; set; }`（`Debug.cs:81`）。之后全树的 `Debug.Print` / `Debug.ShowWarning` / `Debug.SetCrashReportCustomString` 之类全部经由 `Debug.cs` 里的 `DebugManager.XXX(...)` 转发落到这里，再由它转给 [MBDebug](../../engine/MBDebug/) 或 [Utilities](../../engine/Utilities/)——那两个才是真正碰 native 的地方。

25 个实现里 **14 个有转发逻辑，11 个是空方法体**（实测逐条核对签名行与其后紧跟的 `{`）。空的那 11 个不是遗漏，是这一层被有意掏空：接口是给「可选调试后端」用的全量契约，引擎正式构建只实现了自己用得到的那一半。

## 心智模型

把它当成**插在 `Debug` 静态门面和真正的日志/断言实现之间的一层转接头**，四条推论：

第一，**你永远不能通过具体类型调它的方法。** 全部是显式接口实现，意味着 `new MBDebugManager().ShowWarning("x")` **编译不过**——`ShowWarning` 不是 `MBDebugManager` 的成员，只是它作为 `IDebugManager` 的实现。唯一入口是 `Debug.DebugManager`，而那个属性的静态类型是 `IDebugManager`（`Debug.cs:81`），本来就是对的。

第二，**`Debug.Assert` 在正式构建里什么都不做。** 两层都把它掐掉：调用点侧，`Debug.Assert`（`Debug.cs:109`）带着 `[Conditional("_RGL_KEEP_ASSERTS")]`（`Debug.cs:108`），未定义该符号时编译器直接把调用删掉；万一调用留下了，转发侧 `Debug.cs:113` 打到的是 `MBDebugManager.cs:33` 那个**空方法体**。**断言失败不会弹窗、不会中断、连日志都没有。**

第三，**`Debug.FailedAssert` 更隐蔽——它连 `[Conditional]` 都没有，所以【两跳都真的执行了】，而第二跳是空的。** 链条有两跳，**责任在第二跳**。

- 第一跳 `Debug.FailedAssert`（声明在 `Debug.cs:117`）**不是空实现** —— 它有 `if (DebugManager != null)` 判空。
- 第一跳的转发语句在 `Debug.cs:121`，目标是 `DebugManager.Assert(condition: false, …)`，整个方法体到 `Debug.cs:123` 结束。
- 第二跳是 `MBDebugManager.cs:33` 的 `void IDebugManager.Assert(...)`，**那才是真正的空体**。
- 第二跳的空体范围：左括号在 `MBDebugManager.cs:34`，右括号在 `MBDebugManager.cs:35`。

**这段代码在任何构建里都逐字相同** —— 让你看不到的是空方法体，**与构建配置无关**。所以**读 `Debug.cs` 那一跳是找不出问题的，它写得完全正常；要去 `MBDebugManager.cs:33` 看。** 想留下证据，只有 `Debug.Print` / `Debug.ShowWarning` / `Debug.ShowError` 三条路是通的。

第四，**整组 `Debug.Render*` 调试绘制同样失效。** `Debug.RenderDebugLine`（`Debug.cs:266`）、`RenderDebugSphere`（`:285`）、`RenderDebugFrame`（`:291`）、`RenderDebugText`（`:297`）、`RenderDebugRectWithColor`（`:303`）、`RenderDebugText3D`（`:309`）、`WriteDebugLineOnScreen`（`:260`）七个全带 `[Conditional("_RGL_KEEP_ASSERTS")]`（分别在 `:265`、`:284`、`:290`、`:296`、`:302`、`:308`、`:259`），并且转发到的 `MBDebugManager.cs:69 / :73 / :77 / :81 / :89 / :85 / :65` **全是空体**。想在线上看到线框，**直接调 [MBDebug](../../engine/MBDebug/) 的同名静态方法**，别走 `Debug` 门面。

还有一个反向推论：`Debug.ReportMemoryBookmark`（`Debug.cs:158`）转发到 `DebugManager.ReportMemoryBookmark`（`Debug.cs:160`），对应实现是 `MBDebugManager.cs:118` 的空体。**所以 [MissionScreen](../MissionScreen/) 的 `AddMissionView` 在 `MissionScreen.cs:3480` 打的那句 `Debug.ReportMemoryBookmark("MissionView Initialized: " + ...)` 永远不会到达 native 侧**——字符串拼好了、方法调了、然后被丢掉。想给自己的 MissionView 加内存书签，得自己去接 native 通道。

## 如何使用

**拿法：** 不要 `new`。`Debug.DebugManager` 在 `CoreManaged.OnStart()`（`CoreManaged.cs:35`）里已被赋好，之后任何时候读它都是同一个实例：

```csharp
using TaleWorlds.Library;

IDebugManager backend = Debug.DebugManager;   // v1.4.5 里是 MBDebugManager，但静态类型是接口
backend.Print("mod boot ok", 0);
```

**最容易踩的一条：** 拿 `Debug.DebugManager` 去调 `RenderDebugLine`、`WatchVariable`、`WriteDebugLineOnScreen` 或 `DisplayDebugMessage`——**接口上有、实现里是空体**，一行代码都不报错，图也不会画出来，条件编译还会把调用整个删掉。要调试绘制就直接调 `MBDebug.RenderDebugLine(...)`（`MBDebug.cs:275`）与 `MBDebug.RenderDebugSphere(...)`（`MBDebug.cs:281`）。

## 关键成员

本类无任何**公开**成员（全部显式实现）。下表按「转发 / 空壳」分组，签名全部从 `MBDebugManager.cs` 抄出，行号为签名所在行。

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 类声明 | `public class MBDebugManager : IDebugManager`（`:6`） | 调试后端适配层。`using TaleWorlds.Engine;` + `using TaleWorlds.Library;`（`:1-2`）说明它同时桥接 `MBDebug` / `Utilities` 与 `TaleWorlds.Library.Debug` 两边。 |
| `SetCrashReportCustomString` | `void IDebugManager.SetCrashReportCustomString(string customString)`（`:8`） | **转发**到 `Utilities.SetCrashReportCustomString`（`Utilities.cs:772`），后者落到 `EngineApplicationInterface.IUtil`。用途是往崩溃报告里塞自定义上下文，mod 里最常见的用法是标记「本局是哪个 mod 的哪张地图崩的」。 |
| `SetCrashReportCustomStack` | `void IDebugManager.SetCrashReportCustomStack(string customStack)`（`:13`） | **转发**到 `Utilities.SetCrashReportCustomStack`（`Utilities.cs:777`）。附带一段自定义调用栈文本进崩溃报告。 |
| `ShowWarning` | `void IDebugManager.ShowWarning(string message)`（`:18`） | **转发**到 `MBDebug.ShowWarning`（`MBDebug.cs:95`），后者会 `Debugger.Break()`（`MBDebug.cs:98-100`）——**有调试器附加时会直接断下来**，不是纯日志。 |
| `ShowError` | `void IDebugManager.ShowError(string message)`（`:23`） | **转发**到 `MBDebug.ShowError`（`MBDebug.cs:126`）。与 `ShowWarning` 同族的用户可见错误通道，正式版里少数还活着的那几个。 |
| `ShowMessageBox` | `void IDebugManager.ShowMessageBox(string lpText, string lpCaption, uint uType)`（`:28`） | **转发**到 `MBDebug.ShowMessageBox`（`MBDebug.cs:135`）。参数是 Win32 风格的 `lpText` / `lpCaption` / `uType`，`uType` 原样传给 native。 |
| **`Assert`** | `void IDebugManager.Assert(bool condition, string message, string callerFile, string callerMethod, int callerLine)`（`:33`） | **空方法体**（`:34` 是 `{`，`:35` 是 `}`）。`Debug.Assert`（`Debug.cs:109`）与 `Debug.FailedAssert`（`Debug.cs:117`）都落到这里。**断言在你自己的 mod 里等于注释掉。** |
| `SilentAssert` | `void IDebugManager.SilentAssert(bool condition, string message, bool getDump, string callerFile, string callerMethod, int callerLine)`（`:37`） | **转发**到 `MBDebug.SilentAssert`（`MBDebug.cs:158`）。这是断言家族里唯一还有实现的，`getDump` 为 true 时会附带 dump。**要断言就用它，不要用 `Debug.Assert`。** |
| `Print` | `void IDebugManager.Print(string message, int logLevel, Debug.DebugColor color, ulong debugFilter)`（`:42`） | **转发**到 `MBDebug.Print`（`MBDebug.cs:192`）。正式版里最可靠的日志通道，也是 `MBDebugManager` 唯一被大量高频调用的成员。 |
| `PrintError` | `void IDebugManager.PrintError(string error, string stackTrace, ulong debugFilter)`（`:47`） | **转发但丢参数**：实现是 `MBDebug.Print(error, 0, Debug.DebugColor.White, debugFilter)`，**`stackTrace` 被完全丢弃**，颜色被硬编码成 White，日志级别被硬编码成 0。 |
| `PrintWarning` | `void IDebugManager.PrintWarning(string warning, ulong debugFilter)`（`:52`） | **转发到 `Print` 而不是 `ShowWarning`**：实现是 `MBDebug.Print(warning, 0, Debug.DebugColor.White, debugFilter)`。实测 `MBDebug` 类里**没有** `PrintWarning` 方法，所以只能走 `Print`。**它不触发 `Debugger.Break()`，也不弹窗。** |
| **`DisplayDebugMessage`** | `void IDebugManager.DisplayDebugMessage(string message)`（`:57`） | **空方法体**。`Debug.DisplayDebugMessage` 转发到这里（`Debug.cs:207`），无事发生。 |
| **`WatchVariable`** | `void IDebugManager.WatchVariable(string name, object value)`（`:61`） | **空方法体**。想在游戏里盯一个变量的实时值，这个接口成员做不到，得自己接调试器。 |
| **`WriteDebugLineOnScreen`** | `void IDebugManager.WriteDebugLineOnScreen(string message)`（`:65`） | **空方法体**。`Debug.WriteDebugLineOnScreen`（`Debug.cs:260`）转发到这里且带 `[Conditional]`。**屏幕上画字这件事在正式版里是没有的。** |
| **`RenderDebugLine`** | `void IDebugManager.RenderDebugLine(Vec3 position, Vec3 direction, uint color, bool depthCheck, float time)`（`:69`） | **空方法体**。改用 `MBDebug.RenderDebugLine`（`MBDebug.cs:275`）才有线框。 |
| **`RenderDebugSphere`** | `void IDebugManager.RenderDebugSphere(Vec3 position, float radius, uint color, bool depthCheck, float time)`（`:73`） | **空方法体**。同上。 |
| **`RenderDebugFrame`** | `void IDebugManager.RenderDebugFrame(MatrixFrame frame, float lineLength, float time)`（`:77`） | **空方法体**。同上。 |
| **`RenderDebugText`** | `void IDebugManager.RenderDebugText(float screenX, float screenY, string text, uint color, float time)`（`:81`） | **空方法体**。改用 `MBDebug.RenderDebugText`（`MBDebug.cs:234`）。 |
| **`RenderDebugText3D`** | `void IDebugManager.RenderDebugText3D(Vec3 position, string text, uint color, int screenPosOffsetX, int screenPosOffsetY, float time)`（`:85`） | **空方法体**。改用 `MBDebug.RenderDebugText3D`（`MBDebug.cs:263`）。 |
| **`RenderDebugRectWithColor`** | `void IDebugManager.RenderDebugRectWithColor(float left, float bottom, float right, float top, uint color)`（`:89`） | **空方法体**。改用 `MBDebug.RenderDebugRectWithColor`（`MBDebug.cs:251`）。 |
| `GetDebugVector` | `Vec3 IDebugManager.GetDebugVector()`（`:93`） | **转发**到 `MBDebug.DebugVector` 的 getter（`MBDebug.cs:40-45`），最终 `EngineApplicationInterface.IDebug.GetDebugVector()`。这是一个跨进程共享的调试向量，写进去别的系统能读到。 |
| `SetDebugVector` | `void IDebugManager.SetDebugVector(Vec3 value)`（`:98`） | **转发**到 `MBDebug.DebugVector` 的 setter（`MBDebug.cs:46-49`）。与上一条成对。 |
| `SetTestModeEnabled` | `void IDebugManager.SetTestModeEnabled(bool testModeEnabled)`（`:103`） | **转发**到 `MBDebug.TestModeEnabled`（`MBDebug.cs:30`）。这是一个引擎级全局开关，改它会影响整局的行为，属于「测试用、别在正式 mod 里动」的那一类。 |
| `AbortGame` | `void IDebugManager.AbortGame()`（`:108`） | **转发**到 `MBDebug.AbortGame()`——**注意没传参**。`MBDebug.AbortGame` 的签名是 `AbortGame(int ExitCode = 5)`（`MBDebug.cs:90`），所以**退出码恒为 5**，你没法通过 `IDebugManager.AbortGame()` 换成别的码。 |
| `DoDelayedexit` | `void IDebugManager.DoDelayedexit(int returnCode)`（`:113`） | **转发**到 `Utilities.DoDelayedexit`（`Utilities.cs:752`）。与上一条不同，这个**保留了 `returnCode`**，要自定义退出码就用它。 |
| **`ReportMemoryBookmark`** | `void IDebugManager.ReportMemoryBookmark(string message)`（`:118`） | **空方法体**。`MissionScreen.AddMissionView` 在 `MissionScreen.cs:3480` 打的 MissionView 内存书签全部蒸发。 |

## 真实示例

正式版里可靠的写法——绕过被掏空的那一半，直接走还活着的成员：

```csharp
using TaleWorlds.Library;

public static class MyModDiagnostics
{
    // 可靠：Debug.Print -> MBDebugManager.cs:42 -> MBDebug.Print(MBDebug.cs:192)
    public static void Info(string message)
    {
        Debug.Print("[MyMod] " + message, 0);
    }

    // 可靠：走 IDebugManager 的 ShowWarning，正式版不会被条件编译删掉
    public static void Warn(string message)
    {
        Debug.ShowWarning("[MyMod] " + message);
    }
}
```

崩溃报告里塞上下文（这条链上三处转发都是活的）：

```csharp
using TaleWorlds.Library;

// Debug.SetCrashReportCustomString -> Debug.cs:96 -> MBDebugManager.cs:8 -> Utilities.cs:772
Debug.SetCrashReportCustomString("MyModVersion=1.2.3;Map=my_mod_arena;SaveSlot=slot_7");
Debug.SetCrashReportCustomStack("MyModMissionLoader.Load -> MyModScenario.Init");
```

断言要用就绕开 `Debug.Assert`（它在 `Debug.cs:108` 带 `[Conditional]`，转发到的 `MBDebugManager.cs:33` 也是空体）：

```csharp
using TaleWorlds.Library;

// 反例：正式版里静默消失
Debug.Assert(agentCount > 0, "no agents spawned");           // -> Debug.cs:113 -> MBDebugManager.cs:33 空体

// 正解：Debug.SilentAssert -> Debug.cs:129 -> MBDebugManager.cs:37 -> MBDebug.cs:158
Debug.SilentAssert(agentCount > 0, "no agents spawned", getDump: true);
```

调试绘制要看得见，就绕开 `Debug` 门面直接调引擎层：

```csharp
using TaleWorlds.Engine;

// 反例：Debug.RenderDebugLine 带 [Conditional("_RGL_KEEP_ASSERTS")]（Debug.cs:265），
//       且转发到的 MBDebugManager.cs:69 是空体 —— 什么都不会画
// Debug.RenderDebugLine(from, to, 0xFF00FF00uL, false, 5f);

// 正解：直接进 MBDebug 静态层
MBDebug.RenderDebugLine(from, to, 0xFF00FF00uL, false, 5f);     // MBDebug.cs:275
MBDebug.RenderDebugSphere(center, 2f, 0xFFFF0000uL, false, 3f);  // MBDebug.cs:281
```

需要退出码自定义时用 `DoDelayedexit` 而不是 `AbortGame`：

```csharp
using TaleWorlds.Library;

// IDebugManager.AbortGame -> MBDebugManager.cs:108 -> MBDebug.AbortGame() -> 退出码硬编码 5 (MBDebug.cs:90)
Debug.DebugManager.AbortGame();

// 这条会保留 returnCode：MBDebugManager.cs:113 -> Utilities.cs:752
Debug.DebugManager.DoDelayedexit(2);
```

## 风险与边界

- **零公开成员。** 全部是显式接口实现，`new MBDebugManager().任何方法` 一律编译不过。
- **实例只有一个。** `CoreManaged.cs:35` 赋给 `Debug.DebugManager` 之后不要自己再 new 一个塞回去——会同时有两个后端，原生侧只会认一个。
- **11 个空方法体（实测）**：`:33`、`:57`、`:61`、`:65`、`:69`、`:73`、`:77`、`:81`、`:85`、`:89`、`:118`。调它们不报错、不打日志、什么都不发生。
- **断言链有两跳，空的是第二跳。** `Debug.Assert` 额外多一层 `[Conditional("_RGL_KEEP_ASSERTS")]`（`Debug.cs:108`），那会**在编译期把调用剔除**；`Debug.FailedAssert`（`Debug.cs:117`）**没有**这个标记，调用一定在，但它转发的 `DebugManager.Assert`（`Debug.cs:121`）落到 `MBDebugManager.cs:33` 那个空体。**两条路最终都通向同一个空方法体，但机制不同：一个是编译器剔除，一个是空方法体。** **断言不能当护栏用。**
- **`PrintError` 丢 `stackTrace`**（`MBDebugManager.cs:47`），颜色与日志级别也被硬编码。要完整错误上下文得自己拼字符串再 `Debug.Print`。
- **`PrintWarning` 不等于警告。** 它落到 `MBDebug.Print`（`:52`），不弹窗也不断点；真要断点用 `Debug.ShowWarning`（`:18`）。
- **`AbortGame()` 退出码恒为 5**（`MBDebug.cs:90` 的默认值）。要别的码用 `DoDelayedexit`。
- **`SetTestModeEnabled`（`:103`）改的是引擎全局状态**，不是 per-mod 的东西。
- **它不是调试后端的可插拔点。** 虽然接口在 `TaleWorlds.Library` 里、类型是 `public`，但 `Debug.DebugManager` 是公开可写的——理论上你能覆盖它，代价是关掉上面所有还活着的转发。**不建议。**

## 依赖关系

- 创建点：[CoreManaged](../CoreManaged/) 的 `IManagedComponent.OnStart()`（`CoreManaged.cs:33-35`），全树唯一一处 `new MBDebugManager()`
- 宿主静态属性：[Debug](../../core-extra/Debug/) 的 `DebugManager`（`Debug.cs:81`），转发调用点散布在 `Debug.cs:96 / 104 / 113 / 121 / 129 / 137 / 145 / 154 / 160 / 170 / 180 / 189 / 198 / 207 / 262 / 268 / 279 / 287 / 293 / 299 / 305 / 311 / 333`
- 接口契约：[IDebugManager](../../core-extra/IDebugManager/)（`IDebugManager.cs:5-56`，25 个成员）
- 真正干活的两层：[MBDebug](../../engine/MBDebug/)（`MBDebug.cs:10` 起，含 `ShowWarning:95` / `ShowError:126` / `Print:192` / `AbortGame:90`）与 [Utilities](../../engine/Utilities/)（`DoDelayedexit:752` / `SetCrashReportCustomString:772` / `SetCrashReportCustomStack:777`）
- 底层通道：[EngineApplicationInterface](../../engine/EngineApplicationInterface/) 的 `IDebug` / `IUtil`
- 已知被空体吞掉的调用点：[MissionScreen](../MissionScreen/) 的 `MissionScreen.cs:3480`
- 桶首页：[mission-ext API 分区](../)
