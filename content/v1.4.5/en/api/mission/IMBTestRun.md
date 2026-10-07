---
title: "IMBTestRun"
description: "Auto-generated class reference for IMBTestRun."
---
# IMBTestRun

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal interface IMBTestRun`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/IMBTestRun.cs`

## Overview

`IMBTestRun` is the bridge behind the **scene editor's test-run controls** — opening, closing and saving scenes, entering edit mode, starting a mission, reading the frame rate, and one automation hook. It is 38 lines, `internal`, marked `[ScriptingInterfaceBase]` at `IMBTestRun.cs:5`. Its ten members bind `auto_continue` (`:8-9`), `get_fps` (`:11-12`), `enter_edit_mode` (`:14-15`), `open_scene` (`:17-18`), `close_scene` (`:20-21`), `save_scene` (`:23-24`), `open_default_scene` (`:26-27`), `leave_edit_mode` (`:29-30`), `new_scene` (`:32-33`) and `start_mission` (`:35-36`).

**Two of those ten are dead at the managed boundary, and this is measurable.** The public wrapper `public class MBTestRun` (`MBTestRun.cs:3`) forwards the other eight, but `SaveScene()` (`:30-33`) and `OpenDefaultScene()` (`:35-38`) **return `false` without calling `MBAPI.IMBTestRun` at all**:

```csharp
public static bool SaveScene()
{
    return false;
}
```

So the native symbols `save_scene` and `open_default_scene` are declared and bound, but no managed code path in the module ever invokes them. `AutoContinue(int type)` (`:9`) is likewise absent from the wrapper — `MBTestRun.cs:3`-`:49` declares no such method.

## Mental Model

Think of it as **a crane control pendant for the scene editor, with two buttons taped over**. The pendant really is wired to the editor: open a scene, make a new one, close it, drop into edit mode, come back out, launch a mission, read the frame rate. Those controls work. But the save button and the "load default scene" button are physically present in the C# declaration and return a fixed `false` before they reach the wire — a mod can call them and get a clean, confident, wrong answer.

That is the mental model that changes how you use this page: **on this interface a `bool` return means "the managed layer chose to forward this and native agreed", not "this operation succeeded".** Two members short-circuit that contract entirely, so a `false` from `MBTestRun.SaveScene()` tells you nothing about the native `save_scene` implementation.

The second boundary is the one that bites in practice: **`AutoContinue` is an automation hook with no wrapper.** An automation script that wants to drive the editor step by step cannot reach it from a mod assembly, because the bridge is `internal` (`IMBTestRun.cs:6`), the `MBAPI` field is `internal static` (`MBAPI.cs:8`), and `TaleWorlds.MountAndBlade/Properties/AssemblyInfo.cs:8-10` grants `InternalsVisibleTo` only to three TaleWorlds assemblies.

## How to use

**How to obtain it.** `public class MBTestRun` (`MBTestRun.cs:3`) is public and needs no detour. The interface is `internal` (`IMBTestRun.cs:6`) behind `internal static IMBTestRun IMBTestRun;` (`MBAPI.cs:8`), with `InternalsVisibleTo` limited to three TaleWorlds assemblies (`TaleWorlds.MountAndBlade/Properties/AssemblyInfo.cs:8-10`).

**A typical use.** A mod that opens a scene, checks the result, and starts a mission from it:

```csharp
using TaleWorlds.MountAndBlade;

if (!MBTestRun.OpenScene("test_map"))
{
    Debug.Print("scene 'test_map' could not be opened", 0);
    return;
}
Debug.Print("editor fps = " + MBTestRun.GetFPS(), 0);
MBTestRun.StartMission();
```

**What to watch out for.** Trusting the `bool` from `SaveScene()` or `OpenDefaultScene()`. The single most common mistake on this page is calling `MBTestRun.SaveScene()` after building a scene and reading `false` as "the save failed" — when the truth is that the method never reaches native at all (`MBTestRun.cs:30-33`). The consequence is that a scene-edit tool appears to save nothing and the mod author has no stack trace, no log line and no native error to chase, because there is no call to fail. The same applies to `OpenDefaultScene()` (`:35-38`). Treat both as unavailable; do not build a retry loop around them.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `OpenScene` | `[EngineMethod("open_scene", false, null, false)] bool OpenScene(string sceneName)` | Loads a named scene into the editor. Forwarded at `MBTestRun.cs:20-23`. **`false` here is meaningful** — it is the forwarder's own result — so this is the safe form of the call to branch on. |
| `CloseScene` | `[EngineMethod("close_scene", false, null, false)] bool CloseScene()` | Unloads the current scene. Forwarded at `MBTestRun.cs:25-28`. As with `OpenScene`, a `false` reflects a real native answer. |
| `NewScene` | `[EngineMethod("new_scene", false, null, false)] bool NewScene()` | Creates a fresh empty scene. Forwarded at `MBTestRun.cs:10-13`. Order matters against `OpenScene` — the two are alternatives, not a sequence. |
| `EnterEditMode` | `[EngineMethod("enter_edit_mode", false, null, false)] bool EnterEditMode()` | Enters the editor's interactive mode. Forwarded at `MBTestRun.cs:5-8`. Distinct from [`IMBEditor.EnterEditMode`](../IMBEditor), which takes a scene widget pointer and a camera frame; this one takes nothing. |
| `LeaveEditMode` | `[EngineMethod("leave_edit_mode", false, null, false)] bool LeaveEditMode()` | Leaves interactive mode. Forwarded at `MBTestRun.cs:15-18`. Pair it with `EnterEditMode` — an unbalanced pair leaves the editor in a half-entered state. |
| `StartMission` | `[EngineMethod("start_mission", false, null, false)] void StartMission()` | Launches a mission from the current scene. **`void`** (`:36`) and forwarded as `public static void` (`MBTestRun.cs:45-48`) — **no acknowledgement at all**, so a `true`/`false` check is impossible here. |
| `GetFPS` | `[EngineMethod("get_fps", false, null, false)] int GetFPS()` | Current frame rate. Forwarded at `MBTestRun.cs:40-43`. Useful for a load-time check; it is an instantaneous sample, not a rolling average, so a single read on a loading frame is not a measurement. |
| `SaveScene` | `[EngineMethod("save_scene", false, null, false)] bool SaveScene()` | **Dead at the managed boundary.** The wrapper returns `false` without calling the bridge (`MBTestRun.cs:30-33`). **Never forward the native result — a `false` here means nothing about whether saving works.** |
| `OpenDefaultScene` | `[EngineMethod("open_default_scene", false, null, false)] bool OpenDefaultScene()` | **Dead at the managed boundary**, same shape: `public static bool OpenDefaultScene() { return false; }` (`MBTestRun.cs:35-38`). There is no way to open the default scene through this wrapper. |
| `AutoContinue` | `[EngineMethod("auto_continue", false, null, false)] int AutoContinue(int type)` | Automation hook for stepping the test run. **No wrapper method declares it** (`MBTestRun.cs:3`-`:49`), so it is unreachable from a mod assembly even though it is bound. Returns an `int`, whose meaning this file does not state. |

## Examples

Open a scene, confirm it took, and read the frame rate before committing to a mission run:

```csharp
using TaleWorlds.MountAndBlade;

bool opened = MBTestRun.OpenScene("test_map");
if (!opened)
{
    Debug.Print("scene 'test_map' could not be opened", 0);
    return;
}
Debug.Print("editor fps = " + MBTestRun.GetFPS(), 0);
```

Enter and leave edit mode as a balanced pair:

```csharp
using TaleWorlds.MountAndBlade;

if (MBTestRun.EnterEditMode())
{
    Debug.Print("edit mode entered", 0);
    MBTestRun.LeaveEditMode();
}
```

Start a mission, noting there is no result to check:

```csharp
using TaleWorlds.MountAndBlade;

MBTestRun.StartMission();
Debug.Print("start requested; there is no return value to inspect", 0);
```

## Risks and crash boundaries

- **Two members are unreachable through the wrapper.** `SaveScene` (`MBTestRun.cs:30-33`) and `OpenDefaultScene` (`:35-38`) return `false` without touching `MBAPI.IMBTestRun`. **A `false` from either is a managed constant, not a native answer** — this is the primary trap on the page.
- **One member has no wrapper at all.** `AutoContinue(int type)` (`IMBTestRun.cs:9`) is declared on the interface and absent from `MBTestRun.cs:3`-`:49`.
- **A mod assembly cannot call this interface.** `internal interface IMBTestRun` (`IMBTestRun.cs:6`), `internal static` field (`MBAPI.cs:8`), `InternalsVisibleTo` limited to three TaleWorlds assemblies (`TaleWorlds.MountAndBlade/Properties/AssemblyInfo.cs:8-10`).
- **`StartMission` is `void`.** (`:36`, `MBTestRun.cs:45`) **No acknowledgement exists** — you cannot tell whether a mission actually started.
- **`AutoContinue` returns `int` with no documented meaning.** (`:9`) The `type` argument's domain is not stated in this file; an out-of-range value is not validated here.
- **Two similarly named members exist elsewhere.** `IMBTestRun.EnterEditMode` (`:15`) takes no arguments, while [`IMBEditor.EnterEditMode`](../IMBEditor) takes a scene widget pointer and a camera frame (`:32`). They are not interchangeable.
- **Editor state is global, not per-mission.** Opening, closing and creating scenes mutate the editor session, so concurrent use from two systems will fight over the same state.
- **Not a save participant.** No `[Serializable]`; the scene tools operate on editor session state.

## Cross-Version Notes

The v1.4.5 file is 38 lines with ten `[EngineMethod]`-annotated members. The identically named file in `bannerlord-1.3.0` and `bannerlord-1.3.15` under the same `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/` layout declares the same native symbol strings, and `bannerlord-1.5.3` retains the shape. **The two dead members are a managed-side fact, not a native one** — `MBTestRun.cs:30`-`:38` returns `false` in the C# wrapper regardless of which native implementation `save_scene` and `open_default_scene` bind to, so the deadness will survive any version that keeps the same wrapper shape.

## Dependencies

- Public wrapper: `public class MBTestRun` in the same module (`MBTestRun.cs:3`-`:49`), forwarding eight of the ten members and stubbing two.
- Static holder: `MBAPI.IMBTestRun`, an `internal static` field on the public `MBAPI` class (`MBAPI.cs:8`).
- Binding marker: [`ScriptingInterfaceBase`](../ScriptingInterfaceBase), applied at `IMBTestRun.cs:5`.
- Same-named but differently shaped edit-mode operations: [`IMBEditor`](../IMBEditor), whose `EnterEditMode` (`:32`) takes a scene widget pointer and a camera frame while `LeaveEditMode` (`:38`) takes nothing.
- Input path that reaches edit mode from a screen: [`IMBScreen`](../IMBScreen), invoked by `MBInitialScreenBase` (`MBInitialScreenBase.cs:221`, `:226`).
- Empty sibling bridges: [`IMBMultiplayerData`](../IMBMultiplayerData) and [`IMBDelegate`](../IMBDelegate).
- Bucket index: [mission API](../)