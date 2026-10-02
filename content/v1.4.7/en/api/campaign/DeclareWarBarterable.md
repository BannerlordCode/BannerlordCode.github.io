---
title: "DeclareWarBarterable"
description: "DeclareWarBarterable — class in TaleWorlds.CampaignSystem.BarterSystem.Barterables. 8 public members (0 static)."
---

<!-- v147-skeleton -->
# DeclareWarBarterable

**Namespace:** `TaleWorlds.CampaignSystem.BarterSystem.Barterables`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DeclareWarBarterable : Barterable`  
**Base:** `Barterable`  
**Source:** `TaleWorlds.CampaignSystem/BarterSystem/Barterables/DeclareWarBarterable.cs`

## Overview

`DeclareWarBarterable` is a named type in the TaleWorlds.CampaignSystem.BarterSystem.Barterables namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends Barterable, so the members it does not redeclare are inherited from there. 4 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `DeclareWarBarterable`.
- **Instance members** (7): `StringID`, `DeclaringFaction`, `OtherFaction`, `Name`, `Apply`, `GetUnitValueForFaction`, ….
- **Extension points** (5): `StringID`, `Name`, `Apply`, `GetUnitValueForFaction`, `GetVisualIdentifier`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Apply` | method (override) | Overrides the base member. Takes no arguments. |
| `GetUnitValueForFaction` | method (override) | Overrides the base member. Takes 1 argument: `IFaction faction`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetVisualIdentifier` | method (override) | Overrides the base member. Takes no arguments. Returns `ImageIdentifier`. Read path: prefer it over reaching for the backing store. |
| `Name` | property (override) | Overrides the base member `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `StringID` | property (override) | Overrides the base member `string` property. Read it for current state; a declared setter writes that state in place. |
| `DeclaringFaction` | property | Instance entry point `IFaction` property. Read it for current state; a declared setter writes that state in place. |
| `OtherFaction` | property | Instance entry point `IFaction` property. Read it for current state; a declared setter writes that state in place. |
| `DeclareWarBarterable` | ctor | Instance entry point. Takes 2 arguments: `IFaction declaringFaction`, `IFaction otherFaction`. Returns ``. |

- Constructed as `public DeclareWarBarterable(IFaction declaringFaction, IFaction otherFaction)`.

## Usage Example

```csharp
var declareWarBarterable = new DeclareWarBarterable(declaringFaction, otherFaction);
declareWarBarterable.Apply();
// Read current state through declareWarBarterable.StringID.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 5 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/BarterSystem/Barterables/DeclareWarBarterable.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Barterable](../Barterable/) — `TaleWorlds.CampaignSystem.BarterSystem.Barterables`.
- [ImageIdentifier](../../core-extra/ImageIdentifier/) — `TaleWorlds.Core.ImageIdentifiers`.

Section: [api/campaign/](../) — the other types in this bucket.
