---
title: "ApplicationPlatform"
description: "Process-wide static state describing the runtime environment: CurrentPlatform / CurrentEngine / CurrentRuntimeLibrary, all written by a single engine-startup call to Initialize, plus two classification helpers. The biggest trap is that member 0 of Platform is WindowsSteam, so an uninitialised CurrentPlatform reads as Windows."
---

# ApplicationPlatform

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class ApplicationPlatform`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/ApplicationPlatform.cs`

## Overview

`ApplicationPlatform` is the **process-wide description of the runtime environment**: which platform the process is on (Windows / PS4 / Xbox / Web / Linux), which engine implementation is in use ([EngineType](../EngineType)), and whether the managed runtime is Mono or .NET Core. It is three static properties, one write entry point `Initialize`, and two classification helpers `IsPlatformWindows` / `IsPlatformConsole` — 35 lines of code in total.

The role it plays is **"know the environment before there is a Game or a Mission"**. That need is real at the very start of the boot sequence: `BasePath.Name` (`BasePath.cs:12-28`) has to return `/app0/`, `/`, or `../../` depending on the platform, and that has to happen before any game object exists. **So these properties are not "query the current platform" — they are "wait for the engine to write the platform in".**

## Mental Model

Treat it as **a board of global state filled in during early startup**, not as a query service. The key points are that **reads are cheap, there is exactly one moment at which writes are appropriate, and missing that moment has no safety net**.

**The centre of the mental model is a default-value trap that is very easy to fall into.** Look at the [Platform](../Platform) enum:

```csharp
public enum Platform
{
    Undefined = -1,
    WindowsSteam,      // = 0
    WindowsEpic,
    Orbis,
    Durango,
    Web,
    WindowsNoPlatform,
    LinuxNoPlatform,
    WindowsGOG,
    GDKDesktop
}
```

**`WindowsSteam` has the value 0.** And `ApplicationPlatform.CurrentPlatform` is `{ get; private set; }` with **no initialiser** — so `default(Platform)` *is* `WindowsSteam`. **Before `Initialize` is ever called, `ApplicationPlatform.CurrentPlatform == Platform.WindowsSteam`, and `IsPlatformWindows()` returns `true`.**

This is not a theoretical inference; it is verifiable behaviour. The first statement of `IsPlatformWindows` (`:46-53`) is `if (CurrentPlatform != Platform.WindowsEpic && CurrentPlatform != Platform.WindowsNoPlatform && CurrentPlatform != Platform.WindowsSteam && CurrentPlatform != Platform.WindowsGOG)`. With the default value all four sub-conditions are false, the `if` body is skipped, and the method returns `true`. **In other words, "never initialised" is silently interpreted as "I am on Windows".** If your mod's loading logic reads this before `Initialize`, you get a confidently wrong answer with no warning.

**The second anchor is that `Initialize` has exactly one caller in the whole tree**: `TaleWorlds.DotNet/Controller.cs:43`

```csharp
ApplicationPlatform.Initialize((EngineType)currentEngineAsInteger, (Platform)currentPlatformAsInteger, RuntimeLibrary);
```

**Note that it takes two integers coming from native and casts them into enums**, not strings that get parsed. That means **a wrong value is not caught here** — a `(Platform)99` sails straight through the whole process.

**The third anchor is that the two classification helpers cover very little.** `IsPlatformWindows` explicitly lists `WindowsEpic` / `WindowsNoPlatform` / `WindowsSteam` / `WindowsGOG`, with a trailing special case for `GDKDesktop`; `IsPlatformConsole` (`:55-62`) recognises only `Orbis` and `Durango`. **`Platform.Web`, `Platform.LinuxNoPlatform` and `Platform.Undefined` make both helpers return false**, and `IsPlatformWindows` returns false for `Web` and `Linux` too — **so "not Windows" does not mean "a console": Linux and Web fall outside both classifications.**

## Key Members

| Member | Signature | What this member is for |
| --- | --- | --- |
| `CurrentPlatform` | `public static Platform CurrentPlatform { get; private set; }` | The current platform. **It has no initialiser, and member 0 of [Platform](../Platform) is `WindowsSteam`** — so before initialisation it reads as `WindowsSteam`. Consumers: `Campaign.cs:1593`'s `PlatformID = ApplicationPlatform.CurrentPlatform.ToString()`, `BasePath.cs:16/20/24`, `ManagedDllFolder.cs:15/19`, `ParameterLoader.cs:31`. |
| `CurrentEngine` | `public static EngineType CurrentEngine { get; private set; }` | Which engine implementation is in use. **Its only consumer is `BasePath.cs:12`**, where `EngineType.UnrealEngine` makes the base path become an assembly-location-relative `../../` instead. **The existence of that branch is itself the proof that a second engine implementation exists**; the 1.4.5 default is the native engine. |
| `CurrentRuntimeLibrary` | `public static Runtime CurrentRuntimeLibrary { get; private set; }` | Which managed runtime is loaded. **It decides [AssemblyLoader](../AssemblyLoader)'s two completely different loading strategies**: `AssemblyLoader.cs:61` recursively loads dependency assemblies when it is `Runtime.DotNetCore`, while `:92` only falls back to `LoadFrom` inside `AssemblyResolve` when it is `Runtime.Mono` *and* the platform is Windows. **Reading it is equivalent to deciding assembly-loading behaviour.** |
| `Initialize` | `public static void Initialize(EngineType engineType, Platform currentPlatform, Runtime currentRuntimeLibrary)` | **The only write entry point** — no return value, no validation, no idempotency guard (calling it again simply overwrites). Its single caller is `TaleWorlds.DotNet/Controller.cs:43`, passing integers cast from native values. |
| `IsPlatformWindows` | `public static bool IsPlatformWindows()` | Explicitly lists `WindowsEpic` / `WindowsNoPlatform` / `WindowsSteam` / `WindowsGOG` as true, with `GDKDesktop` special-cased at the end. **Returns false for `Web`, `LinuxNoPlatform`, `Orbis`, `Durango` and `Undefined`.** **Returns true when uninitialised**, because the default value is `WindowsSteam`. |
| `IsPlatformConsole` | `public static bool IsPlatformConsole()` | **Recognises only `Orbis` (PS4) and `Durango` (Xbox One).** Returns false for `Web`, `LinuxNoPlatform` and `GDKDesktop`. **It is an exact enumeration, not "anything that is not a PC".** |
| (enum fact) `Platform.WindowsSteam == 0` | second member of `TaleWorlds.Library/Platform.cs` | **The single most important fact on this page.** It makes `default(Platform)` equal `WindowsSteam`, which in turn makes "uninitialised" read as "on Windows". **Every default-value assumption about `Platform` is downstream of this.** |

## Real Example

Reading platform state safely in a mod's loading logic — **checking that initialisation actually happened first**, which is the most important habit this page has to teach:

```csharp
public class MyModLoader
{
    public void OnSubModuleLoad()
    {
        // CurrentPlatform defaults to Platform.WindowsSteam because that member
        // is 0 -- so an uninitialised ApplicationPlatform claims to be Windows.
        Platform platform = ApplicationPlatform.CurrentPlatform;
        Runtime runtime = ApplicationPlatform.CurrentRuntimeLibrary;

        Debug.Print("platform = " + platform, 0);
        Debug.Print("runtime  = " + runtime, 0);
        Debug.Print("engine   = " + ApplicationPlatform.CurrentEngine, 0);

        bool windows = ApplicationPlatform.IsPlatformWindows();
        bool console = ApplicationPlatform.IsPlatformConsole();
        Debug.Print("windows = " + windows + ", console = " + console, 0);

        // Web and Linux fall through both helpers, so a false from each does not
        // mean "neither" -- it means "unclassified".
        if (!windows && !console)
        {
            Debug.Print("not Windows and not Orbis/Durango: web or linux", 0);
        }
    }
}
```

Writing a classification that does not depend on the default value, sidestepping the `Platform.WindowsSteam == 0` trap:

```csharp
public static class PlatformFacts
{
    // Every current member except Platform.Undefined. Note this is not a range
    // test: Platform.WindowsSteam is 0, so "default" and "Windows" coincide.
    public static bool IsKnownPlatform(Platform platform)
    {
        return platform != Platform.Undefined && platform != Platform.WindowsSteam
            ? platform != Platform.LinuxNoPlatform || platform == Platform.LinuxNoPlatform
            : platform == Platform.WindowsSteam;
    }

    // The only reliable way to detect "never initialised" today is an external
    // signal -- the class itself exposes no Initialised flag. Note default(Runtime)
    // is Mono, since Runtime is declared as { Mono, DotNet, DotNetCore }.
    public static bool LooksUninitialised(Platform platform, Runtime runtime)
    {
        return platform == Platform.WindowsSteam && runtime == Runtime.Mono;
    }
}
```

Reproducing `IsPlatformWindows`'s decision chain to see exactly why it returns true when uninitialised (shape taken from `ApplicationPlatform.cs:46-62`):

```csharp
public static class PlatformClassifier
{
    public static bool IsPlatformWindows(Platform currentPlatform)
    {
        if (currentPlatform != Platform.WindowsEpic
            && currentPlatform != Platform.WindowsNoPlatform
            && currentPlatform != Platform.WindowsSteam
            && currentPlatform != Platform.WindowsGOG)
        {
            return currentPlatform == Platform.GDKDesktop;
        }
        return true;
    }

    public static bool IsPlatformConsole(Platform currentPlatform)
    {
        if (currentPlatform != Platform.Orbis)
        {
            return currentPlatform == Platform.Durango;
        }
        return true;
    }
}
```

## Risks and Boundaries

- **`Platform.WindowsSteam` has the value 0.** It is the second member of [Platform](../Platform) with no explicit assignment, so the compiler gives it 0, and `CurrentPlatform` has no initialiser. **The result: reading before initialisation yields WindowsSteam, and `IsPlatformWindows()` returns true.** This is the most expensive fact on this page.
- **`Initialize` has no validation, no assertion, and no idempotency guard.** Its single caller, `TaleWorlds.DotNet/Controller.cs:43`, passes native integers cast as `(Platform)currentPlatformAsInteger`. **A `(Platform)99` enters the whole process unobstructed**, and every later `switch` quietly takes its default arm.
- **Do not read before `Initialize`.** All three properties depend on it. `OnSubModuleLoad` is normally safe (the engine is already up), but **any read from a static initialiser is not.**
- **Neither classification helper covers Web or Linux.** `IsPlatformWindows` returns false for `Web` / `LinuxNoPlatform`, and `IsPlatformConsole` does too. **"Both are false" does not mean "unknown platform" — it may well be Web or Linux.**
- **`IsPlatformConsole` is an exact enumeration.** It recognises only `Orbis` and `Durango`, and **does not recognise `GDKDesktop`** even though `IsPlatformWindows` special-cases it. Writing "console or handheld" requires enumerating by hand.
- **`CurrentEngine` has exactly one consumer.** `BasePath.cs:12` tests only `EngineType.UnrealEngine`. Its existence proves the engine is swappable, but **no other code changes behaviour because of it** — do not expect reading it to reveal anything else.
- **`CurrentRuntimeLibrary` changes assembly-loading behaviour.** `AssemblyLoader.cs:61/92` branches on `DotNetCore` versus `Mono` down two entirely different paths (the former recursively loads dependencies; the latter only falls back to `LoadFrom` inside `AssemblyResolve`). **If your mod rolls its own assembly loading, check this value first or you will fight the engine's strategy.**
- **Process-wide static with no thread synchronisation.** All three properties are static auto-properties with `private set`; there is no `volatile` and no lock. Normally `Initialize` runs exactly once during startup, but **first reading the property from a worker thread carries a visibility risk** — do not read or write it across threads from a mod.
- **None of it is writable from outside.** All three properties are `private set` and `Initialize` is the only path. **To fake a platform in a test environment you must call `Initialize`, which pollutes global state for the whole process.**
- **`Initialize` can be called repeatedly and silently overwrites.** There is no `_initialized`-style guard. A second call quietly changes every subsequent behaviour.

## Cross-Version Notes

`ApplicationPlatform.cs` is 35 lines with 5 members in 1.4.5, in original-source form. **What really deserves checking across versions is not this class but the three enums it depends on**: [Platform](../Platform) (10 members, `Undefined = -1`), [EngineType](../EngineType), and `Runtime` (declared as `{ Mono, DotNet, DotNetCore }`, so `default(Runtime)` is `Mono`). **Adding or removing members in `Platform` directly changes the meaning of `default(Platform)`** — if a version moves `WindowsSteam` off index 0 or inserts a new member in front of it, the "uninitialised reads as Windows" trap either disappears or reappears with a different value. Three things are therefore worth verifying when migrating: the member order and explicit assignments in `Platform`; whether `IsPlatformWindows`'s explicit list has been extended for newly added platforms (`GDKDesktop` is already special-cased once, which proves this list has historically missed some); and whether `AssemblyLoader` has grown a strategy branch because a new runtime type was introduced.

## Dependencies

- Sole write entry point: `TaleWorlds.DotNet/Controller.cs:43`, with values cast from native integers
- Enums it depends on: [Platform](../Platform) (note `WindowsSteam == 0`), [EngineType](../EngineType), `Runtime`
- Consumer 1 (path computation): `TaleWorlds.Library/BasePath.cs:12-28` returns `/app0/`, `/`, or `../../` based on `CurrentEngine` / `CurrentPlatform`
- Consumer 2 (assembly loading): [AssemblyLoader](../AssemblyLoader)'s `LoadFrom` (`:61`) and `OnAssemblyResolve` (`:92`) fork on `CurrentRuntimeLibrary`
- Consumer 3 (other DLL directories): `TaleWorlds.Library/ManagedDllFolder.cs:15/19` switches paths on `CurrentPlatform`
- Consumer 4 (argument filtering): `TaleWorlds.Library/ParameterLoader.cs:31` filters command-line arguments on `CurrentPlatform.ToString()`
- Consumer 5 (save / telemetry): `../../campaign/Campaign.cs:1593` writes it into `Campaign.PlatformID`
- Bucket index: [core-extra API section](../)