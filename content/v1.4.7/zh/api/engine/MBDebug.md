---
title: "MBDebug"
description: "引擎调试工具箱（静态类）：断言、日志、屏幕叠加文字与 3D 调试图元渲染，以及错误报告模式的开关。mod 开发期排障的第一入口。"
---
# MBDebug

**命名空间：** `TaleWorlds.Engine`
**模块：** `TaleWorlds.Engine`
**类型：** `public static class MBDebug`
**基类：** 无（静态类）
**源文件：** `bannerlord-1.4.7/TaleWorlds.Engine/MBDebug.cs`（声明见第 11 行）

## 概述

`MBDebug` 是引擎暴露给代码的调试工具箱，全静态。它分五组：**断言**（`Assert` / `FailedAssert` / `SilentAssert`）、**日志与消息框**（`Print` / `ConsolePrint` / `ShowWarning` / `ShowError` / `ShowMessageBox`）、**屏幕叠加文字**（`WriteDebugLineOnScreen` / `RenderDebugText` / `RenderDebugText3D`）、**3D 调试图元**（`RenderDebugLine` / `RenderDebugSphere` / `RenderDebugCapsule` / `RenderDebugBoundingBox` / `RenderDebugDirectionArrow`）、以及**错误报告模式与测试开关**（`IsErrorReportModeActive`、`IsTestMode`、`DisableAllUI`、`DisableLogging`、`ShouldAssertThrowException`）。

对 mod 开发者，最有用的是**断言**与**屏幕叠加文字**。断言能在开发构建里把「我以为成立的不变量」交给引擎检查；`RenderDebugText3D` 能把字符串钉在世界坐标上——调试「这个单位的真实位置在哪」「这条寻路经过了哪些点」时，它比任何日志都直观。

调试图元是**每帧提交**的：`RenderDebugLine` 等方法把图元排入当前帧的渲染队列，`ClearRenderObjects()` 清空它们。**不调 `ClearRenderObjects` 会导致图元累积到下一帧**——这是「调试线画了一堆残留」的成因。

## 心智模型

**心智模型一：断言是「带调用点信息的不变量检查」。**

`Assert(condition, message)` 通过 `[CallerFilePath]` / `[CallerMemberName]` / `[CallerLineNumber]` 自动带上调用位置。**你只写 `condition` 和 `message`，位置是免费的**。三种变体行为不同：

- `Assert(bool, string, ...)` —— 开发构建里失败即中断。
- `FailedAssert(string, ...)` —— **无条件触发**，用于「走到这里就说明逻辑错了」。
- `SilentAssert(bool, string, bool getDump, ...)` —— 失败但不中断（默认不生成 dump）。

`ShouldAssertThrowException` 是静态开关：打开后断言失败会抛异常而不是打印——**在单元测试或自动化流程里打开它**，否则断言失败只会写一行日志然后继续跑，测试就假通过了。

**心智模型二：屏幕文字是每帧提交的覆盖层。** `RenderDebugText(screenX, screenY, text, color, time)` 里的 `time` 是显示时长（秒）。它不是日志——它在屏幕上「烧」一段时间后消失。适合打状态快照，不适合记录历史。

**心智模型三：3D 图元是帧内队列。** `RenderDebugLine` / `RenderDebugSphere` / `RenderDebugBoundingBox` 把图元加到当前帧的队列；`ClearRenderObjects()` 清空整个队列。**典型用法是每帧先 `ClearRenderObjects()` 再重新提交**——不清就会累积。

**常见错误**：在 release 构建里依赖断言做业务校验（断言在发布版可能被裁掉）；忘记 `ClearRenderObjects` 导致图元堆积；以及把 `MBDebug.Print` 当日志系统用（它在某些构建里被 `DisableLogging` 关掉）。

## 何时使用 / 何时不要使用

- **使用**：开发期验证不变量（`Assert` / `FailedAssert`）。
- **使用**：把运行时状态画到屏幕上（`RenderDebugText` / `RenderDebugText3D`）。
- **使用**：绘制 3D 调试图元（包围盒、射线、方向箭头）。
- **使用**：在测试 / 自动化流程里用 `ShouldAssertThrowException` 把断言失败变成异常。
- **不要**：在发布版本里用断言做业务逻辑校验——它可能被裁剪。
- **不要**：把 `Print` 当日志系统依赖——`DisableLogging` 会关掉它。
- **不要**：在非调试构建里打开 `ShouldAssertThrowException`——用户会看到异常弹窗。
- **不要**：忘记 `ClearRenderObjects`。

## 成员说明

### 一、断言

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `static void Assert(bool condition, string message, [CallerFilePath] string callerFile = "", [CallerMemberName] string callerMethod = "", [CallerLineNumber] int callerLine = 0)` | 条件断言。**位置参数自动填充**，你只需传 `condition` 与 `message`。开发构建里失败即中断。 |
| `static void FailedAssert(string message, [CallerFilePath] ..., [CallerMemberName] ..., [CallerLineNumber] ...)` | **无条件**触发断言失败。用于「走到这里就说明逻辑错了」的死代码标记。 |
| `static void SilentAssert(bool condition, string message = "", bool getDump = false, [CallerFilePath] ..., ...)` | 静默断言：记录但不中断。`getDump` 控制是否生成崩溃转储。 |
| `static void AssertConditionOrCallerClassName(bool condition, string name)` | 断言条件或调用者类名匹配——用于「只有某个 Behavior 才允许做这件事」这类约束。 |
| `static void AssertConditionOrCallerClassNameSearchAllCallstack(bool condition, string name)` | 同上，但搜索整个调用栈。更贵，只在排查归属问题时用。 |
| `static bool ShouldAssertThrowException` | **静态开关**：断言失败时抛异常。测试 / 自动化流程里打开。 |

### 二、日志与消息框

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `static void Print(string message, int logLevel = 0, Debug.DebugColor color = White, ulong debugFilter = 17592186044416UL)` | 带级别、颜色与过滤掩码的日志输出。`debugFilter` 用于按类别过滤。 |
| `static void ConsolePrint(string message, Debug.DebugColor color = White, ulong debugFilter = 17592186044416UL)` | 直接输出到控制台。 |
| `static void ShowWarning(string message)` | 弹出警告框。**用户可见**，不要用于调试。 |
| `static void ContentWarning(string message)` | 内容警告（分级内容提示）。 |
| `static void ConditionalContentWarning(bool condition, string message)` | 条件内容警告。 |
| `static void ShowError(string message)` | 弹出错误框。 |
| `static void ShowMessageBox(string lpText, string lpCaption, uint uType)` | 原生消息框。 |
| `static string DisableUI(List<string> strings)` | 控制台命令：关闭 UI（调试用）。 |
| `static string ClearConsole(List<string> strings)` | 控制台命令：清空控制台。 |
| `static void EchoCommandWindow(string content)` | 回显到命令窗口。 |
| `static string EchoCommandWindow(List<string> strings)` | 控制台命令形式的回显。 |
| `static string EchoCommandWindowTest(List<string> strings)` | 回显的测试变体。 |

### 三、屏幕叠加文字

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `static void WriteDebugLineOnScreen(string str)` | 在屏幕固定位置写一行。**每帧提交，不会自动消失**。 |
| `static void RenderDebugText(float screenX, float screenY, string text, uint color = 4294967295U, float time = 0f)` | 在指定屏幕坐标渲染文字，`time` 是显示秒数（0 表示只显示一帧）。 |
| `static void RenderText(float screenX, float screenY, string text, uint color = 4294967295U, float time = 0f)` | 同上，通用文本版本。 |
| `static void RenderDebugText3D(Vec3 worldPosition, string str, uint color = 4294967295U, int screenPosOffsetX = 0, int screenPosOffsetY = 0, float time = 0f)` | **把文字钉在世界坐标上**。调试单位位置、寻路点时最有用。 |
| `static void PostWarningLine(string line)` | 提交一条警告行到输出队列。 |

### 四、3D 调试图元

这组方法把图元排入**当前帧**的渲染队列。典型用法：每帧先 `ClearRenderObjects()` 再重新提交。

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `static void RenderDebugFrame(MatrixFrame frame, float lineLength, float time = 0f)` | 画一个坐标轴框架（三根短线）。**判断某个对象的朝向与位置的最快方式**。 |
| `static void RenderDebugLine(Vec3 position, Vec3 direction, uint color = 4294967295U, bool depthCheck = false, float time = 0f)` | 画线段。`depthCheck` 控制是否被遮挡。 |
| `static void RenderDebugDirectionArrow(Vec3 position, Vec3 direction, uint color = 4294967295U, bool depthCheck = false)` | 画方向箭头。 |
| `static void RenderDebugSphere(Vec3 position, float radius, uint color = 4294967295U, bool depthCheck = false, float time = 0f)` | 画球体（范围显示）。 |
| `static void RenderDebugCapsule(Vec3 p0, Vec3 p1, float radius, uint color = 4294967295U, bool depthCheck = false, float time = 0f)` | 画胶囊体。 |
| `static void RenderDebugBoundingBox(BoundingBox box, MatrixFrame frame, uint color = 4294967295U, bool depthCheck = false, float time = 0f)` | 画包围盒（本地坐标系）。 |
| `static void RenderDebugBoundingBoxOfEntity(GameEntity entity, MatrixFrame frame, uint color = 4294967295U, bool depthCheck = false, float time = 0f)` | 画某个实体的包围盒。 |
| `static void RenderDebugBoxObject(Vec3 min, Vec3 max, uint color = 4294967295U, bool depthCheck = false, float time = 0f)` | 画 AABB。 |
| `static void RenderDebugBoxObject(Vec3 min, Vec3 max, MatrixFrame frame, uint color = 4294967295U, bool depthCheck = false, float time = 0f)` | 画带局部坐标系的盒。 |
| `static void ClearRenderObjects()` | **清空本帧的调试图元队列。** 不调用会导致图元累积到后续帧。 |
| `static void AssertMemoryUsage(int memoryMB)` | 断言内存占用低于给定值。内存排查用。 |

### 五、错误报告与测试开关

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `static bool IsErrorReportModeActive()` | 是否处于错误报告模式（崩溃后自动重启的场景）。**该模式下 UI 与输入被禁用**。 |
| `static bool IsErrorReportModePauseMission()` | 错误报告模式下是否暂停任务。 |
| `static void SetErrorReportScene(Scene scene)` | 设置错误报告使用的场景。 |
| `static void SetDumpGenerationDisabled(bool value)` | 禁用崩溃转储生成（加快崩溃速度）。 |
| `static bool IsTestMode()` | 是否处于测试模式。 |
| `static bool TestModeEnabled` | 测试模式开关。 |
| `static bool DisableAllUI` | **全局关闭 UI**。调试「不显示任何界面」时用。 |
| `static bool DisableLogging` | **全局关闭日志**。打开后 `Print` 无输出。 |
| `static bool IsDisplayingHighLevelAI` | 是否在显示高层 AI 信息。 |
| `static void AbortGame(int ExitCode = 5)` | 立即终止游戏。**这不是调试功能，是硬退出**。 |
| `static void AssertMemoryUsage(int memoryMB)` | 内存断言。 |
| `public enum MessageBoxTypeFlag` | 消息框类型标志。 |

## 示例

### 示例 1：用断言表达不变量

位置参数是自动填充的——只写 `condition` 和 `message`。

```csharp
using TaleWorlds.Engine;

public class TargetingHelper
{
    public void Apply(Targetable target)
    {
        // 前提不变量：target 必须有效
        MBDebug.Assert(target != null && target.IsAlive, "target must be alive before applying");

        if (!target.IsAlive) return;

        // 走到这里说明调用方违反了契约
        if (target.Position.x > 10000f)
        {
            MBDebug.FailedAssert("target position exceeded world bounds");
        }

        target.Apply();
    }
}
```

### 示例 2：把状态画到屏幕上

`RenderDebugText3D` 把文字钉在世界坐标上——调试位置问题最直观。

```csharp
using TaleWorlds.Core;
using TaleWorlds.Engine;
using TaleWorlds.MountAndBlade;

public class DebugOverlayBehavior : MissionBehavior
{
    public override MissionBehaviorType BehaviorType => MissionBehaviorType.Other;

    protected internal override void Tick(float dt)
    {
        base.Tick(dt);

        // 每帧先清空图元队列，再重新提交
        MBDebug.ClearRenderObjects();

        Mission mission = Mission.Current;
        if (mission == null) return;

        Agent player = Agent.MainAgent;
        if (player == null) return;

        // 把玩家的位置与状态钉在屏幕上的对应位置
        Vec3 pos = player.Position;
        MBDebug.RenderDebugText3D(pos, player.CurrentMortalityState.ToString(), 0xFFFFFFFFu, 0, 0, 0f);

        // 画一个坐标轴框架看朝向
        MBDebug.RenderDebugFrame(new MatrixFrame(pos), 1.0f, 0f);
    }
}
```

### 示例 3：在测试里让断言失败变成异常

默认断言失败只写日志——自动化流程里这会让测试假通过。

```csharp
using TaleWorlds.Engine;

// 在测试 / 工具链入口打开
MBDebug.ShouldAssertThrowException = true;
MBDebug.TestModeEnabled = true;

// 之后任何 MBDebug.Assert 失败都会抛异常，测试能捕获到
```

## 风险与边界

- **发布构建里断言可能被裁掉**。**不要**用断言做业务校验——它在发行版不保证存在。
- **`ShouldAssertThrowException` 的影响面**。打开后所有断言失败都会变成异常，包括引擎内部的断言。在发布版本打开会让用户看到异常弹窗。
- **`ClearRenderObjects` 是全局的**。它清空**所有**系统的调试图元队列，不只是你的。两个系统同时画图元时，一个的 `Clear` 会抹掉另一个的。
- **图元累积**。忘记 `ClearRenderObjects` 的症状是调试图形在屏幕上留下越来越长的拖影。
- **`DisableLogging` 让 `Print` 静默失效**。用它做正式日志的 mod 在别人开了这个开关的构建里会毫无输出。
- **`ShowWarning` / `ShowError` / `ShowMessageBox` 对用户可见**。它们不是调试输出，是 UI。发布版本里调用等于弹窗骚扰用户。
- **`AbortGame` 是硬退出**。它不保存、不清理，直接终止进程。只在明确的调试场景使用。
- **`IsErrorReportModeActive` 期间 UI 与输入被禁用**。这个阶段做 UI 操作会失败。
- **原生互操作**：3D 图元渲染穿透到 native 渲染管线，只能在主线程、场景已加载的前提下调用。跨线程或在加载阶段调用会崩。
- **`AssertMemoryUsage` 的开销**。它读取内存统计，不适合放在每帧路径里。

## 依赖关系

- 上游 / 提供者：
  - [MBObjectManager](../../campaign-ext/MBObjectManager) 的 `AddHandler` / `DebugPrint` / `DebugDump` 与本类同属引擎调试面，常一起使用。
  - [Mission](../../mission/Mission) 与 [Agent](../../mission/Agent) 的调试图元在世界坐标系里绘制。
- 相互 / 下游：
  - [ScreenManager](../../gui/ScreenManager) 的 `SetScreenDebugInformationEnabled` 是 UI 侧的对应开关。
  - [MBSubModuleBase](../../core/MBSubModuleBase) 是 mod 侧启用这些调试能力的时机。

## 参见

- ↑ 父级：[engine 索引](../)
- ↔ 相关：[MBObjectManager](../../campaign-ext/MBObjectManager) · [Mission](../../mission/Mission) · [Agent](../../mission/Agent) · [ScreenManager](../../gui/ScreenManager) · [MBSubModuleBase](../../core/MBSubModuleBase)