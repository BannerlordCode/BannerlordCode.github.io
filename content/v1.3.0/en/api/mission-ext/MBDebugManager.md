---
title: "MBDebugManager"
description: "Auto-generated class reference for MBDebugManager."
---
# MBDebugManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBDebugManager : IDebugManager`
**Base:** `IDebugManager`
**File:** `TaleWorlds.MountAndBlade/MBDebugManager.cs`

## Overview

`MBDebugManager` is the bridge that lets native code call managed debug routines. It is `public class MBDebugManager : IDebugManager` (`MBDebugManager.cs:8`) with no fields, no constructor and no public members at all — it is installed once into the engine's static slot by `Debug.DebugManager = new MBDebugManager()` in `CoreManaged` (`CoreManaged.cs:39`).

Every member is an **explicit interface implementation**: the declarations read `void IDebugManager.ShowWarning(...)` (`MBDebugManager.cs:23`), `Vec3 IDebugManager.GetDebugVector()` (`MBDebugManager.cs:115`) and so on. So the class's own surface is empty; the only way to reach any of it is through an `IDebugManager` reference.

Most members are one-line forwards to the static `MBDebug` class: `ShowWarning` → `MBDebug.ShowWarning` (`MBDebugManager.cs:25`), `ShowError`, `ShowMessageBox`, `SilentAssert`, `Print`, `PrintError` and `PrintWarning`. Three members reach past `MBDebug` to `Utilities`: `SetCrashReportCustomString` (`MBDebugManager.cs:13`) and `SetCrashReportCustomStack` (`MBDebugManager.cs:19`). `AbortGame` forwards with a fixed code, `MBDebug.AbortGame(5)` (`MBDebugManager.cs:135`).

## Mental Model

Ten of the members have empty bodies and are therefore dead on arrival. `Assert` is empty (`MBDebugManager.cs:41`), and so are `DisplayDebugMessage` (`MBDebugManager.cs:70`), `WatchVariable` (`MBDebugManager.cs:75`), `WriteDebugLineOnScreen` (`MBDebugManager.cs:80`), and the whole debug-draw family: `RenderDebugLine`, `RenderDebugSphere`, `RenderDebugFrame`, `RenderDebugText`, `RenderDebugText3D`, `RenderDebugRectWithColor` (`MBDebugManager.cs:85` through `MBDebugManager.cs:110`).

`Assert` is the one that matters most. `SilentAssert` is forwarded to `MBDebug.SilentAssert` (`MBDebugManager.cs:48`) but plain `Assert` does nothing at all — so native code calling an assert through this interface gets silence, in a shipped build and a development build alike. The draw members being empty means debug visualisation requested from native code simply never appears; there is no fallback and no error.

`PrintError` and `PrintWarning` do not use the error channel — both call `MBDebug.Print` with `Debug.DebugColor.White` and log level 0 (`MBDebugManager.cs:60`, `MBDebugManager.cs:66`), discarding the `debugFilter` argument is not the case (they do pass it), but the colour is white either way. An error and a warning are therefore indistinguishable in the log unless the native caller already prefixed the text.

`GetDebugVector`/`SetDebugVector` are a matched pair over the shared static `MBDebug.DebugVector` (`MBDebugManager.cs:117`, `MBDebugManager.cs:123`), so the value is process-global, not per-handler. `SetTestModeEnabled` writes the same kind of shared static (`MBDebugManager.cs:129`).

Because the implementation is explicit, subclassing to fix the empty `Assert` requires re-declaring the member as `void IDebugManager.Assert(...)`, and installing your subclass means assigning `Debug.DebugManager` yourself — which the engine has already done once (`CoreManaged.cs:39`).

## How to use

**Getting one.** There is no instance to obtain: `CoreManaged` installs one into `Debug.DebugManager` at startup (`CoreManaged.cs:39`). Reach the functionality through `MBDebug` directly, which is the class every member forwards to.

**Typical use** — using the debug facilities the way the bridge does, plus supplying your own manager if you need `Assert` to work:

```csharp
using TaleWorlds.Engine;
using TaleWorlds.MountAndBlade;

public class MyDebugManager : MBDebugManager, IDebugManager
{
    // MBDebugManager.Assert is empty, so re-declare it explicitly to get one
    // that actually fires. Explicit implementation is required either way.
    void IDebugManager.Assert(bool condition, string message,
        string callerFile, string callerMethod, int callerLine)
    {
        if (!condition)
        {
            MBDebug.ShowError($"assert failed: {message} ({callerFile}:{callerLine} in {callerMethod})");
        }
    }
}

// The engine already assigned this once (CoreManaged.cs:39); overriding is yours to make.
Debug.DebugManager = new MyDebugManager();

// Everything the shipped manager forwards, called directly on MBDebug:
MBDebug.Print("hello", 0, Debug.DebugColor.White, 0UL);
MBDebug.ShowWarning("careful");
MBDebug.ShowError("broken");
MBDebug.SilentAssert(true, "unused");   // caller info is [Caller*]-supplied
```

`Debug.DebugManager` is the slot `CoreManaged.cs:39` assigns; `MBDebug.Print`, `ShowWarning`, `ShowError` and `SilentAssert` are the four routines with working forwards (`MBDebugManager.cs:25`, `MBDebugManager.cs:48`, `MBDebugManager.cs:54`).

**Most common mistake:** relying on `Assert` to catch a failure in a development build.

```csharp
// Looks like it validates. It does nothing at all.
Assert(condition, "must be non-null", callerFile, callerMethod, callerLine);
```

Routed through this bridge, that call lands in an empty method body (`MBDebugManager.cs:41`). No exception, no log line, no breakpoint — the condition is evaluated and discarded, so a genuine invariant violation proceeds silently in exactly the build where you were relying on it to stop. Use `SilentAssert` if you want the shipped behaviour, or `MBDebug.ShowError` as the example does, and never treat an `Assert` through `IDebugManager` as a real check.

## Usage Example

```csharp
var manager = MBDebugManager.Current;
```

## See Also

- [Area Index](../)
- [MBDebug — the static class every live member forwards to](../../engine/MBDebug)
- [CoreManaged — installs the instance into `Debug.DebugManager`](../CoreManaged)
- [中文页面](../../../../zh/api/mission-ext/MBDebugManager)