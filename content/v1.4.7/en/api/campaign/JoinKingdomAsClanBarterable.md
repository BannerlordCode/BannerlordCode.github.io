---
title: "JoinKingdomAsClanBarterable"
description: "JoinKingdomAsClanBarterable — class in TaleWorlds.CampaignSystem.BarterSystem.Barterables. 11 public members (0 static)."
---

<!-- v147-skeleton -->
# JoinKingdomAsClanBarterable

**Namespace:** `TaleWorlds.CampaignSystem.BarterSystem.Barterables`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class JoinKingdomAsClanBarterable : Barterable`  
**Base:** `Barterable`  
**Source:** `TaleWorlds.CampaignSystem/BarterSystem/Barterables/JoinKingdomAsClanBarterable.cs`

## Overview

`JoinKingdomAsClanBarterable` is a named type in the TaleWorlds.CampaignSystem.BarterSystem.Barterables namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends Barterable, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `JoinKingdomAsClanBarterable`.
- **Instance members** (8): `StringID`, `Name`, `GetUnitValueForFaction`, `CheckBarterLink`, `IsCompatible`, `GetVisualIdentifier`, ….
- **Extension points** (8): `StringID`, `Name`, `GetUnitValueForFaction`, `CheckBarterLink`, `IsCompatible`, `GetVisualIdentifier`, ….
- **Data and constants** (2): `TargetKingdom`, `IsDefecting`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Apply` | method (override) | Overrides the base member. Takes no arguments. |
| `CheckBarterLink` | method (override) | Overrides the base member. Takes 1 argument: `Barterable linkedBarterable`. |
| `GetEncyclopediaLink` | method (override) | Overrides the base member. Takes no arguments. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetUnitValueForFaction` | method (override) | Overrides the base member. Takes 1 argument: `IFaction factionForEvaluation`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetVisualIdentifier` | method (override) | Overrides the base member. Takes no arguments. Returns `ImageIdentifier`. Read path: prefer it over reaching for the backing store. |
| `IsCompatible` | method (override) | Overrides the base member. Takes 1 argument: `Barterable barterable`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `Name` | property (override) | Overrides the base member `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `StringID` | property (override) | Overrides the base member `string` property. Read it for current state; a declared setter writes that state in place. |
| `JoinKingdomAsClanBarterable` | ctor | Instance entry point. Takes 3 arguments: `Hero owner`, `Kingdom targetKingdom`, `bool isDefecting`. Returns ``. |
| `IsDefecting` | field | Instance entry point `bool` field — direct storage with no validation or notification. |
| `TargetKingdom` | field | Instance entry point `Kingdom` field — direct storage with no validation or notification. |

- Constructed as `public JoinKingdomAsClanBarterable(Hero owner, Kingdom targetKingdom, bool isDefecting = false)`.

## Usage Example

```csharp
var joinKingdomAsClanBarterable = new JoinKingdomAsClanBarterable(owner, targetKingdom, isDefecting);
joinKingdomAsClanBarterable.GetUnitValueForFaction(factionForEvaluation);
// Read current state through joinKingdomAsClanBarterable.StringID.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 8 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/BarterSystem/Barterables/JoinKingdomAsClanBarterable.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Barterable](../Barterable/) — `TaleWorlds.CampaignSystem.BarterSystem.Barterables`.
- [DefaultPerks](../DefaultPerks/) — `TaleWorlds.CampaignSystem.CharacterDevelopment`.
- [ImageIdentifier](../../core-extra/ImageIdentifier/) — `TaleWorlds.Core.ImageIdentifiers`.
- [BannerImageIdentifier](../../core-extra/BannerImageIdentifier/) — `TaleWorlds.Core.ImageIdentifiers`.
- [PlayerEncounter](../PlayerEncounter/) — `TaleWorlds.CampaignSystem.Encounters`.
- [PlayerSiege](../PlayerSiege/) — `TaleWorlds.CampaignSystem.Siege`.

Section: [api/campaign/](../) — the other types in this bucket.
