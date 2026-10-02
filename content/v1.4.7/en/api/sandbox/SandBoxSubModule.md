---
title: "SandBoxSubModule"
description: "SandBoxSubModule — class in SandBox. 10 public members (0 static)."
---

<!-- v147-skeleton -->
# SandBoxSubModule

**Namespace:** `SandBox`  
**Module:** `SandBox`  
**Type:** `public class SandBoxSubModule : MBSubModuleBase`  
**Base:** `MBSubModuleBase`  
**Source:** `SandBox/SandBoxSubModule.cs`

## Overview

`SandBoxSubModule` is a named type in the SandBox namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends MBSubModuleBase, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (10): `OnSubModuleLoad`, `InitializeGameStarter`, `OnCampaignStart`, `OnGameInitializationFinished`, `RegisterSubModuleObjects`, `AfterRegisterSubModuleObjects`, ….
- **Extension points** (10): `OnSubModuleLoad`, `InitializeGameStarter`, `OnCampaignStart`, `OnGameInitializationFinished`, `RegisterSubModuleObjects`, `AfterRegisterSubModuleObjects`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AfterRegisterSubModuleObjects` | method (override) | Overrides the base member. Takes 1 argument: `bool isSavedCampaign`. |
| `OnCampaignStart` | method (override) | Overrides the base member. Takes 2 arguments: `Game game`, `object starterObject`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnConfigChanged` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnGameInitializationFinished` | method (override) | Overrides the base member. Takes 1 argument: `Game game`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnGameLoaded` | method (override) | Overrides the base member. Takes 2 arguments: `Game game`, `object starterObject`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RegisterSubModuleObjects` | method (override) | Overrides the base member. Takes 1 argument: `bool isSavedCampaign`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `InitializeGameStarter` | method (override) | Overrides the base member. Takes 2 arguments: `Game game`, `IGameStarter gameStarterObject`. |
| `OnBeforeInitialModuleScreenSetAsRoot` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnNewModuleLoad` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnSubModuleLoad` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |

## Usage Example

```csharp
// SandBoxSubModule exposes no public members in SandBox.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 10 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/SandBoxSubModule.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [TauntUsageManager](../../core-extra/TauntUsageManager/) — `TaleWorlds.Core`.
- [IGameStarter](../../core-extra/IGameStarter/) — `TaleWorlds.Core`.
- [GameType](../../mission-ext/GameType/) — `TaleWorlds.MountAndBlade.Launcher.Library.UserDatas`.
- [SandboxAgentStatCalculateModel](../SandboxAgentStatCalculateModel/) — `SandBox.GameComponents`.
- [AgentApplyDamageModel](../../mission-ext/AgentApplyDamageModel/) — `TaleWorlds.MountAndBlade.ComponentInterfaces`.
- [SandboxAgentApplyDamageModel](../SandboxAgentApplyDamageModel/) — `SandBox.GameComponents`.
- [ApplyWeatherEffectsModel](../../mission-ext/ApplyWeatherEffectsModel/) — `TaleWorlds.MountAndBlade.ComponentInterfaces`.
- [SandboxApplyWeatherEffectsModel](../SandboxApplyWeatherEffectsModel/) — `SandBox.GameComponents`.
- [AutoBlockModel](../../mission-ext/AutoBlockModel/) — `TaleWorlds.MountAndBlade.ComponentInterfaces`.
- [AgentDecideKilledOrUnconsciousModel](../../mission-ext/AgentDecideKilledOrUnconsciousModel/) — `TaleWorlds.MountAndBlade.ComponentInterfaces`.

Section: [api/sandbox/](../) — the other types in this bucket.
