---
title: "FastModeSubModule"
description: "FastModeSubModule — class in TaleWorlds.CampaignSystem.FastMode. 1 public member (0 static)."
---

<!-- v147-skeleton -->
# FastModeSubModule

**Namespace:** `TaleWorlds.CampaignSystem.FastMode`  
**Module:** `TaleWorlds.CampaignSystem.FastMode`  
**Type:** `public class FastModeSubModule : MBSubModuleBase`  
**Base:** `MBSubModuleBase`  
**Source:** `TaleWorlds.CampaignSystem.FastMode/FastModeSubModule.cs`

## Overview

`FastModeSubModule` is a named type in the TaleWorlds.CampaignSystem.FastMode namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends MBSubModuleBase, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (1): `InitializeGameStarter`.
- **Extension points** (1): `InitializeGameStarter`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `InitializeGameStarter` | method (override) | Overrides the base member. Takes 2 arguments: `Game game`, `IGameStarter gameStarterObject`. |

## Usage Example

```csharp
// FastModeSubModule exposes no public members in TaleWorlds.CampaignSystem.FastMode.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.FastMode/FastModeSubModule.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [IGameStarter](../../core-extra/IGameStarter/) — `TaleWorlds.Core`.
- [GameType](../../mission-ext/GameType/) — `TaleWorlds.MountAndBlade.Launcher.Library.UserDatas`.

Section: [api/campaign/](../) — the other types in this bucket.
