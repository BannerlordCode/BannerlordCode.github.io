---
title: "ModuleHelper"
description: "The static registry that maps module ids to on-disk folders, builds dependency-ordered module lists, and walks the loaded assemblies reachable from active modules. Every SubModule.xml, XML/XSL/XSD asset lookup and every 'is this mod installed' question in the game funnels through this one static class."
---
# ModuleHelper

**Namespace:** TaleWorlds.ModuleManager  
**Module:** TaleWorlds.ModuleManager  
**Type:** `public static class ModuleHelper`  
**Base:** none  
**File:** `TaleWorlds.ModuleManager/ModuleHelper.cs`

## Overview

`ModuleHelper` is the game's module registry and path resolver. It is a fully static class: `InitializeModules(string[] loadedModuleIds, string[] platformModulePaths = null)` builds the private `_loadedModules` dictionary from the physical folders under `<game>/Modules/` plus any injected platform folders, and from that point on almost every other member is a query against that dictionary. The queries come in three flavours. First, identity: `GetModuleInfo`, `IsModuleActive`, `GetActiveModules`, `GetAllModules`, `GetModules(predicate)`. Second, ordering: `GetSortedModules(string[])` runs `MBMath.TopologySort` over `GetDependentModulesOf`, so a mod that declares a dependency on another mod is guaranteed to appear after it. Third, paths: `GetModuleFullPath`, `GetXmlPath`, `GetXsltPath`, `GetXsdPath`, `GetMbprojPath` and the `...ForNative` variants, which build the string paths that the XML loader, the native side, and the schema validator consume.

The fourth job is assembly discovery. `GetActiveGameAssemblies()` walks `AppDomain.CurrentDomain.GetAssemblies()`, keeps the ones whose DLL name is directly referenced by an active module's `SubModuleInfo`, then transitively enqueues everything those reference (skipping `System*`, `Microsoft*`, `mscorlib` and `netstandard`). That result is what reflection-based registries scan — see [CampaignOptionsManager](../../viewmodel/CampaignOptionsManager/), which iterates exactly this list to instantiate every `ICampaignOptionProvider`.

## Mental Model

Read it as **"the filesystem view of what is installed"**, populated exactly once and then queried for the rest of the process:

- **Load order is the whole story.** `_loadedModules` is `null` until `InitializeModules` runs. Any `GetModuleInfo` / `GetModuleFullPath` call before that throws `NullReferenceException` on the dictionary, not a friendly error. Module initialisation happens inside `MBSubModuleBase` startup, well after `Campaign` exists, so querying from campaign code is safe; querying from a static constructor or a `SubModule` field initialiser is not.
- **Ids are case-insensitive but the stored key is lowercase.** `GetModuleInfo` and `GetModuleFullPath` both call `.ToLower()` on the argument, while `ModuleInfo.Id` itself keeps its original casing. `GetSortedModules` compares `ModuleInfo.Id` with `==` (ordinal, case-sensitive) — that only works because the list is built from a single consistent source.
- **`GetSortedModules` is the only ordering API that respects dependencies.** `GetActiveModules()` returns dictionary values in unspecified order. If your mod must run after another mod, sort; do not assume.
- **Common misuse trap — treating `GetModuleFullPath` as "is it installed".** It indexes `_loadedModules[moduleId.ToLower()]` directly and throws `KeyNotFoundException` for an unknown id, unlike `GetModuleInfo` which returns `null`. Use `GetModuleInfo`/`IsModuleActive` for detection, `GetModuleFullPath` only once you know the module is there.
- **Common misuse trap — `GetActiveGameAssemblies` is expensive.** It reflects over every loaded assembly and their `GetReferencedAssemblies()`. Call it once at startup and cache; never call it from a per-frame path.
- **`IsTestMode` short-circuits the whole filter.** When it is `true`, `GetActiveGameAssemblies()` returns every assembly in the domain unfiltered — useful for tests, dangerous to leave on.

## When to Use / When NOT to Use

**Use it when:**
- You need to check whether an optional dependency (a DLC module, another mod) is present and active before using its types — `IsModuleActive` guards the call site.
- You need to resolve an asset path that belongs to a module, e.g. your own `ModuleData/items.xml`, or an XSD your custom XML must validate against.
- You need the dependency-respecting load order of a set of modules (`GetSortedModules`), or the set of assemblies your code may legally reflect over.
- You are inside a `SubModule` and want your own module's folder to bootstrap an `AssemblyLoadContext`-free scan.

**Do NOT use it when:**
- You want to load a module at runtime. `OnModuleActivated` / `OnModuleDeactivated` only flip `ModuleInfo.IsActive` on already-registered modules; they do not add new folders to `_loadedModules`.
- You want to enumerate .NET assemblies for your own reflection needs. `AppDomain.CurrentDomain.GetAssemblies()` filtered by `Assembly.GetName().Name.StartsWith("MyMod")` is simpler and does not depend on module state.
- You need a mod's version. `ModuleInfo.Version` reflects the module's own declared version, not a compatibility verdict; use `RequiredBaseVersion` / `DependedModule` for that.

## Dependencies

- [ModuleInfo](../ModuleInfo) — the per-module record (`Id`, `FolderPath`, `IsActive`, `SubModules`, `DependedModules`, `ModulesToLoadAfterThis`, `IncompatibleModules`) that this registry stores.
- [SubModuleInfo](../SubModuleInfo) — per-assembly declaration read from `SubModule.xml`; its `DLLName` and `Assemblies` lists are what make an assembly "directly referenced in module".
- [DependedModule](../DependedModule) — a single declared dependency edge, used for both `DependedModules` and `ModulesToLoadAfterThis` when building the sort graph.
- [MBSubModuleBase](../../core/MBSubModuleBase) — your `SubModule` entry point; module initialisation and `OnModuleDeactivated`/`OnApplicationQuit` run from here, long after `ModuleHelper` is populated.
- [CampaignOptionsManager](../../viewmodel/CampaignOptionsManager) — a concrete consumer of `GetActiveGameAssemblies()` for reflection-based content registration.

## Key members

### `public static void InitializeModules(string[] loadedModuleIds, string[] platformModulePaths = null)`

Populates `_loadedModules`. Scans physical modules and platform modules, special-cases the `NavalDLC` version check (a mismatch pops a message box and calls `Environment.Exit(0)`), then for each requested id adds the matching `ModuleInfo` into the dictionary under its lowercase key and calls `UpdateVersionChangeSet()` for official modules and their dependencies.
- **Return value:** none.
- **Failure mode:** a requested id that has no matching folder is silently skipped — no exception, no diagnostic. A mod that "does not appear to load" is usually an id/folder-name mismatch surfacing here.

### `public static ModuleInfo GetModuleInfo(string moduleId)`

Lowercases the id and returns the `ModuleInfo`, or `null` when absent. This is the safe existence probe.

### `public static bool IsModuleActive(string moduleId)`

`GetModuleInfo(id)` then `.IsActive`. Returns `false` for unknown ids as well as for loaded-but-deactivated ones, so it is the correct check for "can I call into this module's types right now".

### `public static string GetModuleFullPath(string moduleId)`

Returns `FolderPath + "/"` for the module. **Throws `KeyNotFoundException`** for an unknown id — there is no guard on this path, unlike `GetModuleInfo`.

### `public static List<ModuleInfo> GetSortedModules(string[] moduleIDs)`

Resolves ids through `GetModuleInfos` (which drops unknown ones), then topologically sorts with `MBMath.TopologySort` using `GetDependentModulesOf` as the edge provider.
- **Return semantics:** the dependency graph edges are the union of "modules this one depends on" and "modules that declare they load after this one", so both `DependedModules` and `ModulesToLoadAfterThis` participate.
- If the graph contains a cycle, `TopologySort` cannot produce a total order — this is a module authoring error, not something this method detects.

### `public static MBList<Assembly> GetActiveGameAssemblies()`

Breadth-first walk of the domain's assemblies, rooted at every assembly directly referenced by an active module. Returns each assembly once, in BFS order.
- **Cost:** reflection over the entire `AppDomain`. Cache the result.
- **`IsTestMode`:** when true, returns *all* domain assemblies unfiltered.

### `public static List<ModuleInfo> GetModules(Func<ModuleInfo, bool> cond = null)`

Enumerates `_loadedModules.Values`, optionally filtered. Order is dictionary order, i.e. not meaningful. `GetActiveModules()` is exactly this with `x => x.IsActive`.

### Path helpers

#### `public static string GetXmlPath(string moduleId, string xmlName)`
`GetModuleFullPath(moduleId) + "ModuleData/" + xmlName + ".xml"` — the canonical way for a mod to locate its own XML.

#### `public static string GetMbprojPath(string id)`
`FolderPath + "/ModuleData/project.mbproj"`, or `""` if the module is unknown. Note this one *is* guarded.

#### `public static string GetXsdPathForModules(string moduleId, string xsdName)`
`GetModuleFullPath(moduleId) + "ModuleData/XmlSchemas/" + xsdName + ".xsd"` — the schema your custom `ModuleData` XML must satisfy.

#### `public static string GetXsdPath(string xmlInfoId)`
Resolves against `<game>/XmlSchemas/` (the base-game schema folder) instead of a module folder. Use it for base-game schemas such as `items`.

#### `public static string GetXmlPathForNativeWBase(string moduleId, string xmlName)`
Returns the literal `"$BASE/Modules/<moduleId>/<xmlName>"` — a template string for native to substitute, not a real path. Do not feed it to `File.Exists`.

### `public static void OnModuleActivated(string id)` / `public static void OnModuleDeactivated(string id)`

Toggle `ModuleInfo.IsActive` on an already-registered module. They are no-ops for unknown ids. Note the two static lists `ModulesDisablingLoadingAfterBeingRemoved` and `ModulesDisablingLoadingAfterBeingAdded`, which encode which official modules must not be turned back on / off at runtime.

## Examples

### Example 1 — guard an optional dependency and order against it

```csharp
using TaleWorlds.ModuleManager;

public class NavalGate
{
    public bool TryEnter()
    {
        // Probe first: IsModuleActive tolerates unknown ids, GetModuleFullPath does not.
        if (!ModuleHelper.IsModuleActive("NavalDLC"))
        {
            return false;
        }

        string navalRoot = ModuleHelper.GetModuleFullPath("NavalDLC");
        return System.IO.Directory.Exists(navalRoot + "ModuleData");
    }
}
```

### Example 2 — resolve your own module's assets and load them in dependency order

```csharp
using TaleWorlds.ModuleManager;

public class MyModBootstrap
{
    public void Load()
    {
        // My own XML, located relative to this mod's folder.
        string itemsXml = ModuleHelper.GetXmlPath("MyMod", "items");
        // Schema shipped inside the module.
        string schema = ModuleHelper.GetXsdPathForModules("MyMod", "items");

        // Dependency-respecting order across the modules I care about.
        foreach (ModuleInfo module in ModuleHelper.GetSortedModules(
                     new[] { "MyMod", "NavalDLC", "SandBox" }))
        {
            System.Console.WriteLine(module.Id + " active=" + module.IsActive);
        }
    }
}
```

### Example 3 — reflection over only the assemblies the active modules own

```csharp
using System;
using System.Collections.Generic;
using System.Reflection;
using TaleWorlds.ModuleManager;

public static class ProviderScan
{
    private static List<Assembly> _cache;   // ponytail: computed once; this reflection walk is not free

    public static IEnumerable<Type> FindProviders(Type openInterface)
    {
        _cache ??= ModuleHelper.GetActiveGameAssemblies();
        foreach (Assembly assembly in _cache)
        {
            foreach (Type type in assembly.GetTypesSafe())
            {
                if (type != null && type != openInterface && openInterface.IsAssignableFrom(type))
                {
                    yield return type;
                }
            }
        }
    }
}
```

## Risks and crash boundaries

- **Save serialization:** `ModuleHelper` is not part of the save system at all. Module state lives in the *launcher's* module list and the process's `_loadedModules`, not in a campaign save. Consequence for mods: a save records campaign objects only; on load, the *currently enabled* module set is used. A save made with a mod enabled and loaded without it will desync or crash on missing types, and `ModuleHelper` cannot tell you that.
- **Cross-domain dependencies:** the class sits in `TaleWorlds.ModuleManager`, a low-level assembly that campaign, mission, and UI code all reference. That makes it safe to call from anywhere — but it also means a mistake here is process-wide, not campaign-scoped.
- **Load order:** `_loadedModules` is `null` before `InitializeModules`. Any access — including `GetModuleInfos`, `GetModules`, `GetAllModules` — dereferences it. Query it from `SubModule` hooks, never from static/field initialisers that may run during assembly load.
- **ID stability:** module ids come from `SubModule.xml` and are the dictionary keys (lowercased). Renaming a module folder without renaming its id breaks every path lookup *and* every dependency declaration. The two version separators (`ModuleVersionSeperator ':'`, `ModuleCodeSeperator ';'`) are part of the `SubModule.xml` id grammar — do not use those characters inside an id.
- **`GetModuleFullPath` throws, `GetModuleInfo` returns null.** Mixing them up turns a "mod not installed" condition into a `KeyNotFoundException` with no useful message.
- **`Environment.Exit(0)` on the NavalDLC version check.** A hard process kill inside a static initialisation path is unrecoverable; do not trigger it accidentally by faking module ids.
- **`ModulesDisablingLoadingAfterBeingRemoved` / `ModulesDisablingLoadingAfterBeingAdded`.** These are declarative guards for official modules. Flipping `IsActive` on `StoryMode` or `NavalDLC` against these lists puts the game into a state the base game never creates.

## Cross-Version Notes

- **v1.3.x → v1.4.5:** the static surface is stable: `InitializeModules`, `GetModuleInfo`, `IsModuleActive`, `GetModuleFullPath`, `GetSortedModules`, `GetActiveGameAssemblies` and the path helpers all keep their signatures. `GetSortedModules` still returns `List<ModuleInfo>` (it converts the `IList` from `MBMath.TopologySort`).
- **v1.4.5:** `GetXmlPathForNativeWBase` deliberately returns the `$BASE/Modules/...` template rather than a resolved path — a common source of confusion when reading the decompiled source, because it looks like a normal absolute path.
- **v1.4.5:** there is no member named `LoadModule`, `UnloadModule` or `AddModule`. Module set changes are a launcher/launch-time concept; this class only exposes activation toggles for already-known modules.

## See Also

- ↑ Parent bucket: [Campaign-Ext API index](../)
- ↔ Sibling: [ModuleInfo](../ModuleInfo) — the record this registry stores and returns
- ↔ Sibling: [SubModuleInfo](../SubModuleInfo) — per-assembly declaration inside a module
- ↔ Sibling: [DependedModule](../DependedModule) — one dependency edge used by the sort graph
- ↔ Cross-bucket: [CampaignOptionsManager](../../viewmodel/CampaignOptionsManager) — consumer of `GetActiveGameAssemblies()`
- ↑ Hook declaration: [MBSubModuleBase](../../core/MBSubModuleBase)
