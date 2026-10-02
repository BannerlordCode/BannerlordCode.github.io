---
title: "ItemBarterable"
description: "ItemBarterable — class in TaleWorlds.CampaignSystem.BarterSystem.Barterables. 11 public members (0 static)."
---

<!-- v147-skeleton -->
# ItemBarterable

**Namespace:** `TaleWorlds.CampaignSystem.BarterSystem.Barterables`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class ItemBarterable : Barterable`  
**Base:** `Barterable`  
**Source:** `TaleWorlds.CampaignSystem/BarterSystem/Barterables/ItemBarterable.cs`

## Overview

`ItemBarterable` is a named type in the TaleWorlds.CampaignSystem.BarterSystem.Barterables namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends Barterable, so the members it does not redeclare are inherited from there. 5 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ItemBarterable`.
- **Instance members** (10): `StringID`, `ItemRosterElement`, `MaxAmount`, `Name`, `ItemValue`, `GetUnitValueForFaction`, ….
- **Extension points** (8): `StringID`, `MaxAmount`, `Name`, `GetUnitValueForFaction`, `CheckBarterLink`, `GetVisualIdentifier`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Apply` | method (override) | Overrides the base member. Takes no arguments. |
| `CheckBarterLink` | method (override) | Overrides the base member. Takes 1 argument: `Barterable parentLinkedBarterable`. |
| `GetEncyclopediaLink` | method (override) | Overrides the base member. Takes no arguments. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetUnitValueForFaction` | method (override) | Overrides the base member. Takes 1 argument: `IFaction faction`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetVisualIdentifier` | method (override) | Overrides the base member. Takes no arguments. Returns `ImageIdentifier`. Read path: prefer it over reaching for the backing store. |
| `MaxAmount` | property (override) | Overrides the base member `int` property. Read it for current state; a declared setter writes that state in place. |
| `Name` | property (override) | Overrides the base member `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `StringID` | property (override) | Overrides the base member `string` property. Read it for current state; a declared setter writes that state in place. |
| `ItemRosterElement` | property | Instance entry point `ItemRosterElement` property. Read it for current state; a declared setter writes that state in place. |
| `ItemValue` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `ItemBarterable` | ctor | Instance entry point. Takes 6 arguments: `Hero ownerHero`, `Hero otherHero`, `PartyBase ownerParty`, `PartyBase otherParty`, …. Returns ``. |

- Constructed as `public ItemBarterable(Hero ownerHero, Hero otherHero, PartyBase ownerParty, PartyBase otherParty, ItemRosterElement itemRosterElement, int averageValueOfItemInNearbySettlements)`.

## Usage Example

```csharp
var itemBarterable = new ItemBarterable(ownerHero, otherHero, ownerParty, otherParty, itemRosterElement, averageValueOfItemInNearbySettlements);
itemBarterable.GetUnitValueForFaction(faction);
// Read current state through itemBarterable.StringID.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 8 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/BarterSystem/Barterables/ItemBarterable.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Barterable](../Barterable/) — `TaleWorlds.CampaignSystem.BarterSystem.Barterables`.
- [ImageIdentifier](../../core-extra/ImageIdentifier/) — `TaleWorlds.Core.ImageIdentifiers`.
- [ItemImageIdentifier](../../core-extra/ItemImageIdentifier/) — `TaleWorlds.Core.ImageIdentifiers`.
- [ItemRoster](../ItemRoster/) — `TaleWorlds.CampaignSystem.Roster`.

Section: [api/campaign/](../) — the other types in this bucket.
