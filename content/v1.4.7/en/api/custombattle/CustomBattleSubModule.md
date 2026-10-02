---
title: "CustomBattleSubModule"
description: "CustomBattleSubModule — class in TaleWorlds.MountAndBlade.CustomBattle. 2 public members (0 static)."
---

<!-- v147-skeleton -->
# CustomBattleSubModule

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle`  
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`  
**Type:** `public class CustomBattleSubModule : MBSubModuleBase`  
**Base:** `MBSubModuleBase`  
**Source:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattleSubModule.cs`

## Overview

`CustomBattleSubModule` is a named type in the TaleWorlds.MountAndBlade.CustomBattle namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends MBSubModuleBase, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (2): `OnSubModuleLoad`, `OnApplicationTick`.
- **Extension points** (2): `OnSubModuleLoad`, `OnApplicationTick`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnApplicationTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnSubModuleLoad` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |

## Usage Example

```csharp
// CustomBattleSubModule exposes no public members in TaleWorlds.MountAndBlade.CustomBattle.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.CustomBattle/CustomBattleSubModule.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [CustomBattleFactory](../../mission-ext/CustomBattleFactory/) — `TaleWorlds.MountAndBlade.View.CustomBattle`.
- [CustomBattleProvider](../CustomBattleProvider/) — `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`.
- [TauntUsageManager](../../core-extra/TauntUsageManager/) — `TaleWorlds.Core`.
- [GauntletSceneNotification](../../mission-ext/GauntletSceneNotification/) — `TaleWorlds.MountAndBlade.GauntletUI.SceneNotification`.
- [Utilities](../../engine/Utilities/) — `TaleWorlds.Engine`.
- [CustomBattleSceneNotificationContextProvider](../CustomBattleSceneNotificationContextProvider/) — `TaleWorlds.MountAndBlade.CustomBattle`.

Section: [api/custombattle/](../) — the other types in this bucket.
