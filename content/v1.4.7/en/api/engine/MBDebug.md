---
title: "MBDebug"
description: "The engine's static debug toolbox: caller-aware assertions, logging, timed on-screen text and 3D debug primitives, plus the error-report and test switches. The first thing to reach for when a mod misbehaves in development."
---
# MBDebug

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public static class MBDebug`
**Base:** none (static class)
**Source:** `TaleWorlds.Engine/MBDebug.cs` (declaration at line 11)

## Overview

`MBDebug` is the flat, static surface the engine exposes for debugging, and it deliberately contains no state: every member is a static method or a static field. It groups into five concerns that a mod developer touches for very different reasons.

**Assertions** — `Assert`, `FailedAssert`, `SilentAssert` and the two caller-name variants. The call-site information (file, member, line) is injected by the compiler through `[CallerFilePath]` / `[CallerMemberName]` / `[CallerLineNumber]`, so the call itself only has to carry a condition and a message.

**Output** — `Print`, `ConsolePrint`, `WriteDebugLineOnScreen`, `PostWarningLine`, plus user-facing dialogs (`ShowWarning`, `ShowError`, `ShowMessageBox`, the content-warning trio). These are not interchangeable: some are development logs, some are modal UI.

**Timed screen text** — `RenderDebugText`, `RenderText`, `RenderDebugText3D`. Each takes a `time` argument in seconds; it is an overlay that expires, not a log.

**3D primitives** — `RenderDebugLine`, `RenderDebugSphere`, `RenderDebugCapsule`, `RenderDebugFrame`, `RenderDebugBoundingBox`, `RenderDebugBoxObject`, `RenderDebugDirectionArrow` and friends. All of them push into one shared per-frame queue that `ClearRenderObjects()` empties.

**Global switches** — `ShouldAssertThrowException`, `TestModeEnabled`, `DisableAllUI`, `DisableLogging`, `IsDisplayingHighLevelAI`, and the error-report queries `IsErrorReportModeActive()` / `IsErrorReportModePauseMission()`.

## Mental Model

Think of `MBDebug` as three different mechanisms that get confused with each other, plus a set of process-wide switches.

**Assertions are invariants, not logging.** The compiler fills in the location for you, so the whole point is that a failing assert tells you *which line* without you writing it. The three flavours behave differently on failure: `Assert(condition, message)` interrupts in a development build, `FailedAssert(message)` fires unconditionally (mark dead code), and `SilentAssert(condition, message, getDump)` records without interrupting and optionally produces a crash dump. `AssertConditionOrCallerClassName(condition, name)` and its `...SearchAllCallstack` sibling assert that the *caller* is of a given type — useful for "only `MyBehavior` is allowed to do this" constraints.

**Screen text is a timed overlay, not a log.** `RenderDebugText` and `RenderDebugText3D` both take `time`; with the default `0f` the text is submitted for one frame. If you want text that persists and updates each frame, submit it every frame — that is what `WriteDebugLineOnScreen(str)` is for. `RenderDebugText3D` pins a string to a world position, which is the fastest way to see where an `Agent` actually is or what a path point resolved to.

**3D primitives are a per-frame queue, and the queue is global.** Every `RenderDebug*` call appends to one shared list. The only way to empty it is `ClearRenderObjects()`, and that call wipes *every* contributor's primitives, not just yours. The pattern that works is: clear first, then re-submit, once per frame. Submitting without clearing produces a growing smear of stale geometry.

**The switches are process-wide and they change the meaning of the other members.** `DisableLogging` makes `Print` silent. `ShouldAssertThrowException` converts every assertion failure — including the engine's own — into a thrown exception. `DisableAllUI` hides every screen. Turning any of these on "to test something" and leaving it on is a bug in your mod, not a debug aid.

## When to Use / When Not To Use

- **Use** `Assert` / `FailedAssert` to state a precondition that the rest of your method assumes.
- **Use** `RenderDebugText3D` to put a label on a world position while debugging positioning or pathing.
- **Use** `ClearRenderObjects` plus a small set of `RenderDebug*` calls to draw the state of your own system for one frame.
- **Use** `ShouldAssertThrowException` and `TestModeEnabled` in an automated or headless run so a broken invariant is not silent.
- **Do not** use assertions for business validation that must survive a release build.
- **Do not** use `Print` as a shipping log — `DisableLogging` silences it.
- **Do not** call `ShowWarning`, `ShowError` or `ShowMessageBox` for debugging; they are modal UI the player sees.
- **Do not** call `AbortGame` outside an explicit "kill this process now" situation; it does not save or clean up.
- **Do not** leave debug primitives submitted without a matching `ClearRenderObjects`.

## Members

### Assertions

| Member | What it is for |
| --- | --- |
| `static void Assert(bool condition, string message, [CallerFilePath] string callerFile = "", [CallerMemberName] string callerMethod = "", [CallerLineNumber] int callerLine = 0)` | Conditional invariant. The three trailing parameters are filled in by the compiler; pass only the condition and the message. Interrupts on failure in a development build. |
| `static void FailedAssert(string message, ...same caller parameters...)` | Unconditional failure. Use it on a branch that should be unreachable, so an unexpected state reports where it happened. |
| `static void SilentAssert(bool condition, string message = "", bool getDump = false, ...same caller parameters...)` | Records the failure without interrupting. `getDump` controls whether a crash dump is produced. |
| `static void AssertConditionOrCallerClassName(bool condition, string name)` | Asserts both the condition and that the immediate caller's type name matches `name`. |
| `static void AssertConditionOrCallerClassNameSearchAllCallstack(bool condition, string name)` | Same, but walks the whole call stack. More expensive — reserve it for diagnosing ownership problems. |
| `static bool ShouldAssertThrowException` | When true, a failed assertion throws instead of only reporting. For test harnesses. |

### Logging and dialogs

| Member | What it is for |
| --- | --- |
| `static void Print(string message, int logLevel = 0, Debug.DebugColor color = Debug.DebugColor.White, ulong debugFilter = 17592186044416UL)` | The engine's categorised log. `debugFilter` selects the category mask. |
| `static void ConsolePrint(string message, Debug.DebugColor color = Debug.DebugColor.White, ulong debugFilter = 17592186044416UL)` | Straight console output without a log level. |
| `static void WriteDebugLineOnScreen(string str)` | Writes one line at a fixed screen position. Persists across frames because you re-submit it. |
| `static void PostWarningLine(string line)` | Queues a warning line for the output log. |
| `static void ShowWarning(string message)` | Modal warning dialog. **Player-visible UI.** |
| `static void ShowError(string message)` | Modal error dialog. **Player-visible UI.** |
| `static void ShowMessageBox(string lpText, string lpCaption, uint uType)` | Raw platform message box; `uType` is a `MessageBoxTypeFlag` value. |
| `static void ContentWarning(string message)` | Rating / content warning dialog. |
| `static void ConditionalContentWarning(bool condition, string message)` | Same, gated on a condition. |
| `static string DisableUI(List<string> strings)` | Console command: turns the whole UI off. |
| `static string ClearConsole(List<string> strings)` | Console command: clears the console. |
| `static void EchoCommandWindow(string content)` | Echoes text into the command window. |
| `static string EchoCommandWindow(List<string> strings)` | Console-command form of the same. |
| `static string EchoCommandWindowTest(List<string> strings)` | Test variant of the echo command. |

### Timed screen text

| Member | What it is for |
| --- | --- |
| `static void RenderDebugText(float screenX, float screenY, string text, uint color = 4294967295U, float time = 0f)` | Text at a screen coordinate, displayed for `time` seconds. `0f` means one frame. |
| `static void RenderText(float screenX, float screenY, string text, uint color = 4294967295U, float time = 0f)` | General-purpose text render with the same shape. |
| `static void RenderDebugText3D(Vec3 worldPosition, string str, uint color = 4294967295U, int screenPosOffsetX = 0, int screenPosOffsetY = 0, float time = 0f)` | **Text pinned to a world position.** The most useful member here for debugging placement, pathing and formation positions. |

### 3D debug primitives

All of these append to one shared queue for the current frame.

| Member | What it is for |
| --- | --- |
| `static void RenderDebugFrame(MatrixFrame frame, float lineLength, float time = 0f)` | Three axis stubs at `frame`. The quickest way to read an object's position and orientation. |
| `static void RenderDebugLine(Vec3 position, Vec3 direction, uint color = 4294967295U, bool depthCheck = false, float time = 0f)` | A segment. `depthCheck` controls occlusion by geometry. |
| `static void RenderDebugDirectionArrow(Vec3 position, Vec3 direction, uint color = 4294967295U, bool depthCheck = false)` | A direction arrow. |
| `static void RenderDebugSphere(Vec3 position, float radius, uint color = 4294967295U, bool depthCheck = false, float time = 0f)` | A sphere — ranges, radii, trigger volumes. |
| `static void RenderDebugCapsule(Vec3 p0, Vec3 p1, float radius, uint color = 4294967295U, bool depthCheck = false, float time = 0f)` | A capsule between two points. |
| `static void RenderDebugBoundingBox(BoundingBox box, MatrixFrame frame, uint color = 4294967295U, bool depthCheck = false, float time = 0f)` | Bounding box drawn in a supplied local frame. |
| `static void RenderDebugBoundingBoxOfEntity(GameEntity entity, MatrixFrame frame, uint color = 4294967295U, bool depthCheck = false, float time = 0f)` | The bounding box of an existing scene entity. |
| `static void RenderDebugBoxObject(Vec3 min, Vec3 max, uint color = 4294967295U, bool depthCheck = false, float time = 0f)` | Axis-aligned box from two corners. |
| `static void RenderDebugBoxObject(Vec3 min, Vec3 max, MatrixFrame frame, uint color = 4294967295U, bool depthCheck = false, float time = 0f)` | The same box with an explicit local frame. |
| `static void RenderDebugRect(float x, float y, float width, float height, float time = 0f)` | A screen-space rectangle. |
| `static void RenderDebugRectWithColor(float x, float y, float width, float height, uint color = 4294967295U, float time = 0f)` | The same rectangle in an explicit colour. |
| `static void ClearRenderObjects()` | **Empties the shared primitive queue.** Call once per frame before re-submitting; it also clears other systems' primitives. |

### Global switches, error reporting and memory

| Member | What it is for |
| --- | --- |
| `static bool TestModeEnabled` | Puts the engine in test mode. |
| `static bool IsTestMode()` | Queries test mode. |
| `static bool DisableAllUI` | Hides all UI process-wide. |
| `static bool DisableLogging` | Silences `Print`. |
| `static bool IsDisplayingHighLevelAI` | Whether high-level AI information is being drawn. |
| `static bool IsErrorReportModeActive()` | Whether the engine is in crash-reporter mode. UI and input are unavailable in that state. |
| `static bool IsErrorReportModePauseMission()` | Whether error-report mode also pauses the mission. |
| `static void SetErrorReportScene(Scene scene)` | Chooses the scene used by the error reporter. |
| `static void SetDumpGenerationDisabled(bool value)` | Skips crash-dump generation, which speeds up a crash. |
| `static void AssertMemoryUsage(int memoryMB)` | Asserts that memory use is below `memoryMB`. Reads process statistics — not cheap, not per-frame. |
| `static void AbortGame(int ExitCode = 5)` | Terminates the process immediately. No save, no cleanup. |
| `public enum MessageBoxTypeFlag` | Flags for `ShowMessageBox`'s `uType` parameter. |

## Examples

### Example 1: State an invariant and let the compiler supply the location

Only `condition` and `message` are written at the call site. The class here is the reader's own, not a game type.

```csharp
using TaleWorlds.Engine;

public class MyEngagementCheck
{
    private readonly bool _isAlive;
    private readonly float _distanceSquared;

    public MyEngagementCheck(bool isAlive, float distanceSquared)
    {
        _isAlive = isAlive;
        _distanceSquared = distanceSquared;
    }

    public bool IsInRange(float maxDistanceSquared)
    {
        // file, member and line are injected by the compiler
        MBDebug.Assert(_isAlive, "target must be alive before its range is used");
        MBDebug.Assert(_distanceSquared <= maxDistanceSquared, "target outside engagement range");

        if (!_isAlive)
        {
            // Unreachable if the assert above is honoured
            MBDebug.FailedAssert("unreachable branch: liveness assert was ignored");
        }

        return _distanceSquared <= maxDistanceSquared;
    }
}
```

### Example 2: Label agents in the world and clear the queue each frame

The primitive queue is shared and global, so clear it first and submit once per frame.

```csharp
using TaleWorlds.Core;
using TaleWorlds.Engine;
using TaleWorlds.MountAndBlade;

public class AgentLabelOverlay : MissionBehavior
{
    // MissionBehaviorType only has Logic and Other
    public override MissionBehaviorType BehaviorType => MissionBehaviorType.Other;

    public override void OnMissionTick(float dt)
    {
        // Wipes every system's primitives, not just this behaviour's
        MBDebug.ClearRenderObjects();

        Mission mission = Mission.Current;
        if (mission == null)
        {
            return;
        }

        Agent agent = Agent.MainAgent;
        if (agent == null)
        {
            return;
        }

        Vec3 position = agent.Position;

        // Read the agent's real world position and facing directly
        MBDebug.RenderDebugText3D(position, agent.CurrentMortalityState.ToString(), 0xFFFFFFFFu, 0, 0, 0f);
        MBDebug.RenderDebugFrame(new MatrixFrame(position), 1f, 0f);
        MBDebug.RenderDebugSphere(position, 0.6f, 0xFFFFFFFFu, false, 0f);
    }
}
```

### Example 3: Make assertion failures visible to an automated run

By default a failed assertion only writes a line; a headless run would sail past it.

```csharp
using TaleWorlds.Engine;

// Set once, at the entry point of the test or tool harness
MBDebug.ShouldAssertThrowException = true;
MBDebug.TestModeEnabled = true;

// From here on any failing MBDebug.Assert throws instead of only reporting,
// including assertions inside the engine itself.
```

## Risks and Boundaries

- **Assertions may be compiled out of a release build.** Never use `Assert` for a business rule that must hold in the field; there is no guarantee it is evaluated.
- **`ShouldAssertThrowException` has global reach.** It converts *every* assertion failure, engine internals included, into an exception. Shipping it means players see exception dialogs.
- **`ClearRenderObjects` is not scoped to you.** If two systems both draw primitives, one clearing the queue erases the other's output. Coordinate a single clear point per frame.
- **Skipping the clear produces accumulating geometry.** Submitting every frame without clearing leaves a growing trail of stale lines and spheres.
- **`DisableLogging` makes `Print` a no-op.** A mod that treats `Print` as its shipping log will be silent in any build where that flag is set.
- **`ShowWarning`, `ShowError`, `ShowMessageBox` and the content-warning methods are modal UI.** They are not debug output. Calling them from a debug path reaches the player.
- **`AbortGame` is an abrupt process exit.** Nothing is saved and nothing is cleaned up. It exists for a deliberate hard stop, not for "quit to menu".
- **Error-report mode disables UI and input.** Query `IsErrorReportModeActive()` before attempting any screen work; it will fail.
- **The 3D primitives cross into native rendering.** They require the main thread and a loaded scene. Calling them during loading or from a background job crashes.
- **`AssertMemoryUsage` reads process statistics.** It is not cheap enough for a per-frame path.

## Dependencies

- **Upstream / providers**
  - [Mission](../../mission/Mission) and [Agent](../../mission/Agent) supply the world positions and frames that the 3D primitives draw.
  - [MBSubModuleBase](../../core/MBSubModuleBase) is the usual moment to switch these debug facilities on for a mod.
- **Peers / downstream**
  - [ScreenManager](../../gui/ScreenManager) exposes the UI-side counterpart, `SetScreenDebugInformationEnabled`.
  - [MBObjectManager](../../campaign-ext/MBObjectManager) has its own debug dump entry points that pair with this class.

## See Also

- ↑ Parent: [engine index](../)
- ↔ Related: [Mission](../../mission/Mission) · [Agent](../../mission/Agent) · [ScreenManager](../../gui/ScreenManager) · [MBSubModuleBase](../../core/MBSubModuleBase) · [Chinese twin](../../../../zh/api/engine/MBDebug)