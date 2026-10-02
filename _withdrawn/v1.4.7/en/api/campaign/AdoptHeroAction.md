---
title: "AdoptHeroAction"
description: "AdoptHeroAction — class in TaleWorlds.CampaignSystem.Actions. 1 public member (1 static)."
---

<!-- v147-skeleton -->
# AdoptHeroAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class AdoptHeroAction`  
**Source:** `TaleWorlds.CampaignSystem/Actions/AdoptHeroAction.cs`

## Overview

`AdoptHeroAction` is a static action class: a single place where one campaign change is applied. Rather than letting callers poke at fields and hope the rest of the world notices, the engine routes the change through a named operation so that side effects, event broadcasts and save consistency happen in a defined order.

## Mental Model

Treat an action class as a transaction with a fixed shape. You describe *what* should change; the action decides the order in which the related objects, events and save data are updated. Writing to a field directly bypasses that order, which is how campaign saves end up inconsistent.

Read it as a set of static entry points rather than an object you own. There is no instance to keep: call the static method and the whole graph moves at once.

Concretely, the surface breaks down like this:

- **Static entry points** (1): `Apply`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Apply` | method (static) | Static entry point. Takes 1 argument: `Hero adoptedHero`. |

## Usage Example

```csharp
// Static action entry points — call them instead of writing the fields yourself.
AdoptHeroAction.Apply(adoptedHero);
```

## Risks and Boundaries

- Action methods assume a live campaign. Calling one from `OnSubModuleLoad`, the main menu or campaign teardown will hit a null `Campaign.Current`.
- Do not mix an action with a direct field write in the same frame — the action reads the field it is about to change, so the order decides the result.
- Some actions fire events synchronously; a handler that writes the same object again can recurse.
- The declaration in `TaleWorlds.CampaignSystem/Actions/AdoptHeroAction.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/campaign/](../) — the other types in this bucket.
