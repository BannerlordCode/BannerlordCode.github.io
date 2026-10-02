---
title: "TauntUsageManager"
description: "TauntUsageManager — class in TaleWorlds.Core. 12 public members (3 static)."
---

<!-- v147-skeleton -->
# TauntUsageManager

**Namespace:** `TaleWorlds.Core`  
**Module:** `TaleWorlds.Core`  
**Type:** `public class TauntUsageManager`  
**Source:** `TaleWorlds.Core/TauntUsageManager.cs`

## Overview

`TauntUsageManager` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Static entry points** (3): `Instance`, `Initialize`, `GetActionDisabledReasonText`.
- **Instance members** (9): `Read`, `GetUsageSet`, `GetAction`, `GetIsActionNotSuitableReason`, `GetTauntItemCount`, `GetIndexOfAction`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetActionDisabledReasonText` | method (static) | Static entry point. Takes 1 argument: `TauntUsageManager.TauntUsage.TauntUsageFlag disabledReasonFlag`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `Initialize` | method (static) | Static entry point. Takes no arguments. Returns `TauntUsageManager`. |
| `Instance` | property (static) | Static entry point `TauntUsageManager` property. Read it for current state; a declared setter writes that state in place. |
| `GetAction` | method | Instance entry point. Takes 5 arguments: `int index`, `bool isLeftStance`, `bool onFoot`, `WeaponComponentData mainHandWeapon`, …. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetDefaultAction` | method | Instance entry point. Takes 1 argument: `int index`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetIndexOfAction` | method | Instance entry point. Takes 1 argument: `string id`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetIsActionNotSuitableReason` | method | Instance entry point. Takes 5 arguments: `int index`, `bool isLeftStance`, `bool onFoot`, `WeaponComponentData mainHandWeapon`, …. Returns `TauntUsageManager.TauntUsage.TauntUsageFlag`. Read path: prefer it over reaching for the backing store. |
| `GetTauntItemCount` | method | Instance entry point. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetUsageSet` | method | Instance entry point. Takes 1 argument: `string id`. Returns `TauntUsageManager.TauntUsageSet`. Read path: prefer it over reaching for the backing store. |
| `Read` | method | Instance entry point. Takes no arguments. |
| `TauntUsage` | property | Instance entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `TauntUsageSet` | property | Instance entry point `class` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
var tauntUsageManager = TauntUsageManager.Instance;
TauntUsageManager.Initialize();
TauntUsageManager.GetActionDisabledReasonText(disabledReasonFlag);
// Read the live state through tauntUsageManager.TauntUsageSet.
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `TaleWorlds.Core/TauntUsageManager.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ModuleHelper](../../modulemanager/ModuleHelper/) — `TaleWorlds.ModuleManager`.
- [Attributes](../../campaign/Attributes/) — `TaleWorlds.CampaignSystem.Extensions`.

Section: [api/core-extra/](../) — the other types in this bucket.
