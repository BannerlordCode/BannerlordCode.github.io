---
title: "CosmeticsManager"
description: "CosmeticsManager — class in TaleWorlds.MountAndBlade.Diamond.Cosmetics. 3 public members (3 static)."
---

<!-- v147-skeleton -->
# CosmeticsManager

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.Cosmetics`  
**Module:** `TaleWorlds.MountAndBlade.Diamond`  
**Type:** `public static class CosmeticsManager`  
**Source:** `TaleWorlds.MountAndBlade.Diamond/Cosmetics/CosmeticsManager.cs`

## Overview

`CosmeticsManager` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Static entry points** (3): `CosmeticElementsList`, `GetCosmeticElement`, `LoadFromXml`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CosmeticElementsList` | property (static) | Static entry point `MBReadOnlyList<CosmeticElement>` property. Read it for current state; a declared setter writes that state in place. |
| `GetCosmeticElement` | method (static) | Static entry point. Takes 1 argument: `string cosmeticId`. Returns `CosmeticElement`. Read path: prefer it over reaching for the backing store. |
| `LoadFromXml` | method (static) | Static entry point. Takes 1 argument: `string path`. |

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
// CosmeticsManager exposes no accessor; the engine passes the instance to its callbacks.
CosmeticsManager.GetCosmeticElement(cosmeticId);
CosmeticsManager.LoadFromXml(path);
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `TaleWorlds.MountAndBlade.Diamond/Cosmetics/CosmeticsManager.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ModuleHelper](../../modulemanager/ModuleHelper/) — `TaleWorlds.ModuleManager`.
- [CosmeticElement](../CosmeticElement/) — `TaleWorlds.MountAndBlade.Diamond.Cosmetics`.
- [Attributes](../../campaign/Attributes/) — `TaleWorlds.CampaignSystem.Extensions`.
- [ClothingCosmeticElement](../ClothingCosmeticElement/) — `TaleWorlds.MountAndBlade.Diamond.Cosmetics.CosmeticTypes`.
- [SigilCosmeticElement](../SigilCosmeticElement/) — `TaleWorlds.MountAndBlade.Diamond.Cosmetics.CosmeticTypes`.
- [TauntCosmeticElement](../TauntCosmeticElement/) — `TaleWorlds.MountAndBlade.Diamond.Cosmetics.CosmeticTypes`.

Section: [api/mission-ext/](../) — the other types in this bucket.
