---
title: "ModuleHelper"
description: "ModuleHelper — class in TaleWorlds.ModuleManager. 32 public members (30 static)."
---

<!-- v147-skeleton -->
# ModuleHelper

**Namespace:** `TaleWorlds.ModuleManager`  
**Module:** `TaleWorlds.ModuleManager`  
**Type:** `public static class ModuleHelper`  
**Source:** `TaleWorlds.ModuleManager/ModuleHelper.cs`

## Overview

`ModuleHelper` is a helper namespace: stateless functions that answer a question or compute a value that would otherwise be duplicated across call sites. It holds no campaign state of its own.

## Mental Model

A helper is the right home for "given these inputs, what is the answer", and the wrong home for anything that has to be remembered. Call it, take the value, and let the caller own the lifetime.

Because helpers are shared by many systems, changing the meaning of a parameter is a breaking change for every caller — treat the signature as a published contract even though there is no interface.

Concretely, the surface breaks down like this:

- **Static entry points** (30): `GetModuleFullPath`, `GetModuleInfo`, `OnModuleDeactivated`, `OnModuleActivated`, `InitializeModules`, `InitializeSingleModule`, ….
- **Data and constants** (2): `ModuleVersionSeperator`, `ModuleCodeSeperator`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ClearPlatformModuleExtension` | method (static) | Static entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `GetActiveGameAssemblies` | method (static) | Static entry point. Takes no arguments. Returns `MBList<Assembly>`. Read path: prefer it over reaching for the backing store. |
| `GetActiveModules` | method (static) | Static entry point. Takes no arguments. Returns `List<ModuleInfo>`. Read path: prefer it over reaching for the backing store. |
| `GetAllModules` | method (static) | Static entry point. Takes no arguments. Returns `Dictionary<string, ModuleInfo>.ValueCollection`. Read path: prefer it over reaching for the backing store. |
| `GetDependentModulesOf` | method (static) | Static entry point. Takes 2 arguments: `IEnumerable<ModuleInfo> source`, `ModuleInfo module`. Returns `IEnumerable<ModuleInfo>`. Read path: prefer it over reaching for the backing store. |
| `GetMbprojPath` | method (static) | Static entry point. Takes 1 argument: `string id`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetModuleFullPath` | method (static) | Static entry point. Takes 1 argument: `string moduleId`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetModuleInfo` | method (static) | Static entry point. Takes 1 argument: `string moduleId`. Returns `ModuleInfo`. Read path: prefer it over reaching for the backing store. |
| `GetModuleInfos` | method (static) | Static entry point. Takes 1 argument: `string[] moduleIds`. Returns `List<ModuleInfo>`. Read path: prefer it over reaching for the backing store. |
| `GetModules` | method (static) | Static entry point. Takes 2 arguments: `Func<ModuleInfo`, `bool> cond`. Returns `List<ModuleInfo>`. Read path: prefer it over reaching for the backing store. |
| `GetModulesForLauncher` | method (static) | Static entry point. Takes no arguments. Returns `List<ModuleInfo>`. Read path: prefer it over reaching for the backing store. |
| `GetOfficialModuleIds` | method (static) | Static entry point. Takes no arguments. Returns `MBList<string>`. Read path: prefer it over reaching for the backing store. |
| `GetPath` | method (static) | Static entry point. Takes 1 argument: `string id`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetSortedModules` | method (static) | Static entry point. Takes 1 argument: `string[] moduleIDs`. Returns `List<ModuleInfo>`. Read path: prefer it over reaching for the backing store. |
| `GetXmlPath` | method (static) | Static entry point. Takes 2 arguments: `string moduleId`, `string xmlName`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetXmlPathForNative` | method (static) | Static entry point. Takes 2 arguments: `string moduleId`, `string xmlName`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetXmlPathForNativeWBase` | method (static) | Static entry point. Takes 2 arguments: `string moduleId`, `string xmlName`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetXsdPath` | method (static) | Static entry point. Takes 1 argument: `string xmlInfoId`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetXsdPathForModules` | method (static) | Static entry point. Takes 2 arguments: `string moduleId`, `string xsdName`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetXsltPath` | method (static) | Static entry point. Takes 2 arguments: `string moduleId`, `string xmlName`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetXsltPathForNative` | method (static) | Static entry point. Takes 2 arguments: `string moduleId`, `string xsltName`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `InitializeModules` | method (static) | Static entry point. Takes 2 arguments: `string[] loadedModuleIds`, `string[] platformModulePaths`. |
| `InitializePlatformModuleExtension` | method (static) | Static entry point. Takes 2 arguments: `IPlatformModuleExtension moduleExtension`, `List<string> args`. |
| `InitializeSingleModule` | method (static) | Static entry point. Takes 1 argument: `string modulePath`. Returns `ModuleInfo`. |

8 further public members follow the same patterns.
## Usage Example

```csharp
// Static entry points on ModuleHelper:
ModuleHelper.GetModuleFullPath(moduleId);
ModuleHelper.GetModuleInfo(moduleId);
ModuleHelper.OnModuleDeactivated(id);
```

## Risks and Boundaries

- Most helpers assume an active game context; they read `Campaign.Current` or the mission singleton internally.
- They are pure-looking but not pure: several helpers cache results for the current frame.
- Null arguments are usually not validated; a missing hero or party surfaces as a null-reference much later.
- The declaration in `TaleWorlds.ModuleManager/ModuleHelper.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ModuleInfo](../ModuleInfo/) — `TaleWorlds.ModuleManager`.
- [DependedModule](../DependedModule/) — `TaleWorlds.ModuleManager`.
- [IPlatformModuleExtension](../IPlatformModuleExtension/) — `TaleWorlds.ModuleManager`.

Section: [api/modulemanager/](../) — the other types in this bucket.
