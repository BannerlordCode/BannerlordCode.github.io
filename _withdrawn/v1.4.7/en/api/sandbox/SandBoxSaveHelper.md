---
title: "SandBoxSaveHelper"
description: "SandBoxSaveHelper — class in SandBox. 5 public members (5 static)."
---

<!-- v147-skeleton -->
# SandBoxSaveHelper

**Namespace:** `SandBox`  
**Module:** `SandBox`  
**Type:** `public static class SandBoxSaveHelper`  
**Source:** `SandBox/SandBoxSaveHelper.cs`

## Overview

`SandBoxSaveHelper` is a helper namespace: stateless functions that answer a question or compute a value that would otherwise be duplicated across call sites. It holds no campaign state of its own.

## Mental Model

A helper is the right home for "given these inputs, what is the answer", and the wrong home for anything that has to be remembered. Call it, take the value, and let the caller own the lifetime.

Because helpers are shared by many systems, changing the meaning of a parameter is a breaking change for every caller — treat the signature as a published contract even though there is no interface.

Concretely, the surface breaks down like this:

- **Static entry points** (4): `TryLoadSave`, `CheckMetaDataCompatibilityErrors`, `GetIsDisabledWithReason`, `GetModuleNameFromModuleId`.
- **Data and constants** (1): `OnStateChange`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CheckMetaDataCompatibilityErrors` | method (static) | Static entry point. Takes 1 argument: `MetaData fileMetaData`. Returns `MBReadOnlyList<SandBoxSaveHelper.ModuleCheckResult>`. |
| `GetIsDisabledWithReason` | method (static) | Static entry point. Takes 2 arguments: `SaveGameFileInfo saveGameFileInfo`, `out TextObject reason`. Returns `bool`. Read path: prefer it over reaching for the backing store. |
| `GetModuleNameFromModuleId` | method (static) | Static entry point. Takes 1 argument: `string id`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `TryLoadSave` | method (static) | Static entry point. Takes 3 arguments: `SaveGameFileInfo saveInfo`, `Action<LoadResult> onStartGame`, `Action onCancel`. |
| `OnStateChange` | field (static) | Static entry point `Action<SandBoxSaveHelper.SaveHelperState>` field — direct storage with no validation or notification. |

## Usage Example

```csharp
// Static entry points on SandBoxSaveHelper:
SandBoxSaveHelper.TryLoadSave(saveInfo, onStartGame, onCancel);
SandBoxSaveHelper.CheckMetaDataCompatibilityErrors(fileMetaData);
SandBoxSaveHelper.GetIsDisabledWithReason(saveGameFileInfo, theTarget);
```

## Risks and Boundaries

- Most helpers assume an active game context; they read `Campaign.Current` or the mission singleton internally.
- They are pure-looking but not pure: several helpers cache results for the current frame.
- Null arguments are usually not validated; a missing hero or party surfaces as a null-reference much later.
- The declaration in `SandBox/SandBoxSaveHelper.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ModuleHelper](../../modulemanager/ModuleHelper/) — `TaleWorlds.ModuleManager`.
- [ModuleInfo](../../modulemanager/ModuleInfo/) — `TaleWorlds.ModuleManager`.
- [GameTextManager](../../core-extra/GameTextManager/) — `TaleWorlds.Core`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.
- [Utilities](../../engine/Utilities/) — `TaleWorlds.Engine`.
- [Error](../../core-extra/Error/) — `TaleWorlds.LinQuick`.

Section: [api/sandbox/](../) — the other types in this bucket.
