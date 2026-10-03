---
title: "AssemblyLoader"
description: "The game's assembly loading entry point: LoadFrom loads one dll and, depending on the runtime, recursively pulls its dependencies; a fallback handler is hooked onto AppDomain.AssemblyResolve. A failed LoadFrom pops a modal error box unless showError is false, and the recursive branch writes into the caller's out result, so that result describes the whole dependency chain rather than this one call."
---

# AssemblyLoader

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class AssemblyLoader`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/AssemblyLoader.cs`

## Overview

`AssemblyLoader` is the game's **assembly loading entry point**. It does two things: it loads a given dll via `Assembly.LoadFrom` (forking on the runtime type to decide whether to recursively pull dependencies), and its static constructor hooks a fallback handler onto `AppDomain.CurrentDomain.AssemblyResolve` so that "cannot resolve this assembly by name" gets a second chance.

The role it plays is **"loading mod submodules and engine callback dlls"**. The most important consumer is the `[Module](../../core/Module)` system: `Module.cs:145`'s `CollectModuleAssemblyTypes` uses the `AssemblyLoadResult` from `AssemblyLoader.LoadFrom` to decide whether a submodule can be loaded, and `Managed.cs:219` calls `AssemblyLoader.Initialize()`. **Put differently: without it, no mod dll gets in.**

## Mental Model

Treat it as **a loader plus one global fallback hook**, not as "an ordinary `LoadFrom` wrapper". To decide when you would reach for it: **you are loading a dll the current assembly does not reference** (a standalone mod dll, say), or you need the `AssemblyLoadResult` three-state outcome.

**The centre of the mental model is that there are three silent failure points.** What makes this class dangerous is not that it throws; it is that **in three situations it does not throw and does not work either**:

**First, a failed `LoadFrom` pops a modal message box.** `:52` is `Debug.ShowMessageBox("Cannot load: " + assemblyFile, "ERROR", 4u);`, executed **only when `showError` is true** — and `showError` defaults to `true`. **In a headless environment (dedicated server, automated tests) this hangs the whole process.** The failure is even subtler than it looks, because it sits inside a `try/catch`: `:42` first does `Debug.Print("Loading assembly: ...")`, then `try { Assembly.LoadFrom } catch { ... }`. **So a "failed load" presents as a dialog plus a log line, and the return value is `null`.**

**Second, the `out result` is overwritten by the recursive calls.** This is the subtlest thing on the page. The recursive branch at `:70` reads:

```csharp
LoadFrom(text, out result);
if (result != AssemblyLoadResult.Success)
{
    result = AssemblyLoader.AssemblyLoadResult.LoadedWithErrors;
}
```

**Note that the recursive call reuses the same `out result` parameter**, which means **every dependency's load result overwrites the caller's `result`**. If the dll itself loaded but one of its dependencies did not, the final `result` comes back as `LoadedWithErrors` — probably intentional. The other direction is the problem: **once the dll has loaded successfully, the outcome across a dependency chain is decided by whichever dependency happened to be processed last.** `result` is not "the result of this call"; it is "the result of the whole chain".

**Third, the `AssemblyResolve` fallback only works on Mono + Windows.** `:92`:

```csharp
if (ApplicationPlatform.CurrentRuntimeLibrary == Runtime.Mono && ApplicationPlatform.IsPlatformWindows())
{
    return LoadFrom(args.Name.Split(new char[1] { ',' }, StringSplitOptions.RemoveEmptyEntries)[0] + ".dll", showError: false);
}
return null;
```

**All three conditions are required**: runtime is Mono, platform is Windows, and `showError: false` is passed. **On .NET Core this path never executes at all**, because .NET Core goes down the recursive pre-loading branch at `:61`. So **the exact same mod dll loads by completely different rules under Mono and .NET Core.**

## Key Members

| Member | Signature | What this member is for |
| --- | --- | --- |
| `LoadFrom(string, bool)` | `public static Assembly LoadFrom(string assemblyFile, bool showError = true)` | A convenience overload whose body is `return LoadFrom(assemblyFile, out result, showError);`. **Note that it declares a discarded local `AssemblyLoadResult result` at `:35`, so this overload gives you no status** — to learn success or failure you must use the `out` overload. |
| `LoadFrom(string, out AssemblyLoadResult, bool)` | `public static Assembly LoadFrom(string assemblyFile, out AssemblyLoadResult result, bool showError = true)` | **The core implementation.** The flow is: `Debug.Print` → `try Assembly.LoadFrom` → `Success` on success, or `Debug.ShowMessageBox` + `Debug.Print` and `CriticalError` on failure → if the runtime is `DotNetCore` and the assembly is not already in `_loadedAssemblies`, recursively load its referenced assemblies → `Debug.Print` the outcome → return. **Failure returns `null`; it does not throw.** |
| `AssemblyLoadResult` | `public enum AssemblyLoadResult { Success, LoadedWithErrors, CriticalError }` | The three-state outcome. `Success` means this dll and every dependency loaded; `LoadedWithErrors` means at least one dependency failed; `CriticalError` means this dll itself failed. **The three members have no explicit values, so declaration order makes them 0/1/2.** |
| static constructor | `static AssemblyLoader()` | Runs on first touch of this class: `new List<Assembly>()`, seeds `_loadedAssemblies` from `AppDomain.CurrentDomain.GetAssemblies()`, then `AppDomain.CurrentDomain.AssemblyResolve += OnAssemblyResolve;`. **That is the "already hooked without being asked" part — no explicit call is required.** |
| `Initialize()` | `public static void Initialize()` | **The body is empty** (`:29-31` is just a brace pair). It exists so callers have a way to "make sure the static constructor ran" — `Managed.cs:219` calls it. **But touching the class triggers the static constructor anyway, so this line is purely a courtesy.** |
| `OnAssemblyResolve` | `private static Assembly OnAssemblyResolve(object sender, ResolveEventArgs args)` | The fallback handler. It first scans **all currently loaded assemblies** for an exact `assembly.FullName == args.Name` match; only if that fails, **and only when the runtime is Mono and the platform is Windows**, does it build `firstSegmentOfName + ".dll"` and call `LoadFrom(..., showError: false)`; otherwise it returns `null`. **Private, so reachable only indirectly through the `AssemblyResolve` event.** |
| `_loadedAssemblies` | `private static List<Assembly> _loadedAssemblies` | The tracking table of loaded assemblies, seeded from the current domain. **It serves only the deduplication test at `:61`** (`!_loadedAssemblies.Contains(assembly)`) — and note it **never removes anything**, so an assembly recorded once is in the table forever. |
| (runtime fork) `Runtime.DotNetCore` | `ApplicationPlatform.CurrentRuntimeLibrary == Runtime.DotNetCore`, `:61` | **Decides whether referenced assemblies are pre-loaded recursively**, and it skips dependencies whose names start with `System` / `mscorlib` / `netstandard` (`:68`). **This is the single switch separating Mono behaviour from .NET Core behaviour.** |
| (dependency filter) `StartsWith` tests | `:68`'s `!text.StartsWith("System") && !text.StartsWith("mscorlib") && !text.StartsWith("netstandard")` | Skips BCL assemblies during recursive loading. **These are prefix matches, not exact ones** — any dependency named `SystemFoo.dll` is wrongly skipped along with them. |

## Real Example

Loading a mod dll and checking the three-state result — **note that only the `out` overload gives you the status**:

```csharp
private Assembly LoadModAssembly(string dllPath)
{
    Assembly assembly = AssemblyLoader.LoadFrom(dllPath, out AssemblyLoader.AssemblyLoadResult result);
    if (assembly == null)
    {
        // CriticalError: the dll itself failed. Note that the default showError:true
        // also popped a modal message box before we got here.
        Debug.Print("failed to load " + dllPath + " result=" + result, 0);
        return null;
    }

    if (result == AssemblyLoader.AssemblyLoadResult.LoadedWithErrors)
    {
        // At least one referenced assembly failed. This flag can come from a
        // dependency, not from this dll itself, because the recursive call
        // writes into the same out parameter.
        Debug.Print("loaded with dependency errors: " + dllPath, 0);
    }

    return assembly;
}
```

Turning the dialog off in a headless environment — **the mandatory step for servers and automation**:

```csharp
public class MyServerLoader
{
    public void LoadWithoutBlockingTheMainThread()
    {
        // Default showError:true pops a modal Debug.ShowMessageBox on failure
        // (AssemblyLoader, line 52), which hangs a headless process. Always pass
        // false off-screen.
        Assembly assembly = AssemblyLoader.LoadFrom(
            "Modules/MyMod/bin/MyMod.dll",
            out AssemblyLoader.AssemblyLoadResult result,
            showError: false);

        if (assembly == null || result == AssemblyLoader.AssemblyLoadResult.CriticalError)
        {
            Debug.Print("mod load failed, result = " + result, 0);
            return;
        }

        Type[] types = assembly.GetTypes();
        Debug.Print("loaded " + types.Length + " types", 0);
    }
}
```

Seeing the cost of the convenience overload — **it throws the status away**:

```csharp
public static class LoaderComparison
{
    public static void ShowTheDifference()
    {
        string path = "Modules/MyMod/bin/MyMod.dll";

        // The convenience overload discards the result: the implementation declares
        // AssemblyLoadResult result and never surfaces it.
        Assembly a = AssemblyLoader.LoadFrom(path);
        Debug.Print("convenience overload returned null? " + (a == null), 0);

        // The out overload is the only way to learn why.
        Assembly b = AssemblyLoader.LoadFrom(path, out AssemblyLoader.AssemblyLoadResult result);
        Debug.Print("out overload result = " + result, 0);
    }
}
```

## Risks and Boundaries

- **Failure pops a modal dialog.** `:52`'s `Debug.ShowMessageBox`, with `showError` defaulting to `true`. **A headless environment — dedicated server, CI, automated tests — will simply hang.** Any non-interactive scenario must pass `showError: false` explicitly.
- **Failure returns `null` rather than throwing.** The `try/catch` swallows every exception from `Assembly.LoadFrom`. **A caller that skips the null check will NRE somewhere much later, far away from the real cause.**
- **The `out result` is overwritten by the recursive calls.** The `LoadFrom(text, out result)` at `:70` reuses the same `out` parameter, so `result` describes **the whole dependency chain**, not this one call. **Do not read it as local diagnostic information.**
- **Recursive pre-loading happens only on `Runtime.DotNetCore`.** The condition at `:61` includes it. **Under Mono, dependencies are resolved on demand through the `AssemblyResolve` event instead of being pulled up front.** The same mod therefore fails at different points under the two runtimes.
- **The `AssemblyResolve` fallback only works on Mono + Windows.** Both conditions at `:92` are required, and **it returns `null` outright on .NET Core.**
- **`OnAssemblyResolve` matches on exact `FullName`.** `:88` is `assembly.FullName == args.Name`. **A slightly different version or public key token misses entirely**, and only then does it fall through to the name-plus-`.dll` attempt — which is itself platform-restricted.
- **The dependency filter is a prefix match.** `StartsWith("System")` at `:68` also skips any custom `SystemFoo.dll`. **That is a real false-positive surface.**
- **`_loadedAssemblies` only grows.** Nothing is ever removed, so the `!_loadedAssemblies.Contains(assembly)` test at `:61`, once false, stays false. **Reloading the same dll will not re-resolve its dependencies.**
- **`Initialize()` is empty.** It only triggers the static constructor, which happens anyway on first touch. **The call at `Managed.cs:219` accomplishes nothing.**
- **`OnAssemblyResolve` is private.** You cannot call it directly; it is reachable only through `AppDomain.CurrentDomain.AssemblyResolve`. **Nor can you unsubscribe** — there is no public counterpart.
- **The static constructor has an irreversible side effect.** It registers a **process-wide** `AppDomain.CurrentDomain.AssemblyResolve` handler. **The first touch of `AssemblyLoader` — even just reading the enum — installs it**, and the whole AppDomain carries that handler from then on.
- **`GetTypes()` can still throw `ReflectionTypeLoadException`.** A successful `LoadFrom` does not guarantee a successful `assembly.GetTypes()`; `Module.cs:155-190`'s `CollectModuleAssemblyTypes` handles that with a full `try/catch` and `ex2.LoaderExceptions` inspection, but **your own call site has to write its own.**

## Cross-Version Notes

`AssemblyLoader.cs` is 98 lines in 1.4.5 with one nested enum `AssemblyLoadResult`, one public static class, and three public members, in original-source form. **What genuinely deserves checking across versions is the four couplings to the outside world**: the `AppDomain.CurrentDomain.AssemblyResolve` subscription (removed or altered in parts by .NET 6+, so migrating to a CoreCLR runtime may require `AssemblyLoadContext` instead); the member set of the `Runtime` enum (one more runtime means one more fork); whether `Module.cs`'s `CollectModuleAssemblyTypes` still consumes its three-state result; and where the dll path comes from — `GameApplicationDomainController.cs:49-50` builds the name from `ManagedDllFolder.Name`. **Note that later 1.4.x releases moved the game onto a custom `AssemblyLoadContext` arrangement and the mod-loading entry point changed with it — so "how do I load a mod dll" must be re-researched per version rather than copied from this page.**

## Dependencies

- Runtime state: [ApplicationPlatform](../ApplicationPlatform)'s `CurrentRuntimeLibrary` selects between the `:61` and `:92` branches — **reading it is equivalent to choosing an assembly-loading strategy**
- Main consumer: [Module](../../core/Module)'s `CollectModuleAssemblyTypes` (`Module.cs:155`) uses `AssemblyLoadResult` to decide whether a submodule loads; `Module.cs:141/145-168` is the return-value handling
- Startup call: `TaleWorlds.DotNet/Managed.cs:219`'s `AssemblyLoader.Initialize()` (an empty implementation)
- Callback dlls: `TaleWorlds.DotNet/Managed.cs:232`, `TaleWorlds.Engine/EngineManaged.cs:46`, and `TaleWorlds.MountAndBlade/CoreManaged.cs:75` all load native-callback implementations via `LoadFrom(ManagedCallbacksDll).GetTypesSafe()`
- Path source: `ManagedDllFolder.Name` (itself a function of `ApplicationPlatform.CurrentPlatform`) is used by `GameApplicationDomainController.cs:49-50` to build dll names
- Reflection host: `System.Reflection.Assembly` and `AppDomain.CurrentDomain`
- Error exit: [Debug](../Debug)'s `ShowMessageBox` and `Print`, both inside the `try/catch` or at the method tail
- Bucket index: [core-extra API section](../)