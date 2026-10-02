---
title: "BeHostileAction"
description: "BeHostileAction — class in TaleWorlds.CampaignSystem.Actions. 4 public members (4 static)."
---

<!-- v147-skeleton -->
# BeHostileAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class BeHostileAction`  
**Source:** `TaleWorlds.CampaignSystem/Actions/BeHostileAction.cs`

## Overview

`BeHostileAction` is a static action class: a single place where one campaign change is applied. Rather than letting callers poke at fields and hope the rest of the world notices, the engine routes the change through a named operation so that side effects, event broadcasts and save consistency happen in a defined order.

## Mental Model

Treat an action class as a transaction with a fixed shape. You describe *what* should change; the action decides the order in which the related objects, events and save data are updated. Writing to a field directly bypasses that order, which is how campaign saves end up inconsistent.

Read it as a set of static entry points rather than an object you own. There is no instance to keep: call the static method and the whole graph moves at once.

Concretely, the surface breaks down like this:

- **Static entry points** (4): `ApplyHostileAction`, `ApplyMinorCoercionHostileAction`, `ApplyMajorCoercionHostileAction`, `ApplyEncounterHostileAction`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ApplyEncounterHostileAction` | method (static) | Static entry point. Takes 2 arguments: `PartyBase attackerParty`, `PartyBase defenderParty`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `ApplyHostileAction` | method (static) | Static entry point. Takes 3 arguments: `PartyBase attackerParty`, `PartyBase defenderParty`, `float value`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `ApplyMajorCoercionHostileAction` | method (static) | Static entry point. Takes 2 arguments: `PartyBase attackerParty`, `PartyBase defenderParty`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `ApplyMinorCoercionHostileAction` | method (static) | Static entry point. Takes 2 arguments: `PartyBase attackerParty`, `PartyBase defenderParty`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |

## Usage Example

```csharp
// Static action entry points — call them instead of writing the fields yourself.
BeHostileAction.ApplyHostileAction(attackerParty, defenderParty, value);
BeHostileAction.ApplyMinorCoercionHostileAction(attackerParty, defenderParty);
BeHostileAction.ApplyMajorCoercionHostileAction(attackerParty, defenderParty);
```

## Risks and Boundaries

- Action methods assume a live campaign. Calling one from `OnSubModuleLoad`, the main menu or campaign teardown will hit a null `Campaign.Current`.
- Do not mix an action with a direct field write in the same frame — the action reads the field it is about to change, so the order decides the result.
- Some actions fire events synchronously; a handler that writes the same object again can recurse.
- The declaration in `TaleWorlds.CampaignSystem/Actions/BeHostileAction.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MobileParty](../MobileParty/) — `TaleWorlds.CampaignSystem.Party`.

Section: [api/campaign/](../) — the other types in this bucket.
