---
title: "Barterable"
description: "Barterable — class in TaleWorlds.CampaignSystem.BarterSystem.Barterables. 24 public members (0 static)."
---

<!-- v147-skeleton -->
# Barterable

**Namespace:** `TaleWorlds.CampaignSystem.BarterSystem.Barterables`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class Barterable`  
**Source:** `TaleWorlds.CampaignSystem/BarterSystem/Barterables/Barterable.cs`

## Overview

`Barterable` is a named type in the TaleWorlds.CampaignSystem.BarterSystem.Barterables namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `Barterable`.
- **Instance members** (22): `StringID`, `OriginalOwner`, `OriginalParty`, `Name`, `GetValueForFaction`, `CheckBarterLink`, ….
- **Extension points** (9): `StringID`, `Name`, `CheckBarterLink`, `GetUnitValueForFaction`, `MaxAmount`, `IsCompatible`, ….
- **Data and constants** (1): `_linkedBarterables`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Apply` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. |
| `CheckBarterLink` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `Barterable linkedBarterable`. |
| `GetEncyclopediaLink` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetUnitValueForFaction` | method (abstract) | Abstract — a subclass must supply it. Takes 1 argument: `IFaction faction`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetVisualIdentifier` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Returns `ImageIdentifier`. Read path: prefer it over reaching for the backing store. |
| `IsCompatible` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `Barterable barterable`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `MaxAmount` | property (virtual) | Virtual — override it to change behaviour for every caller `int` property. Read it for current state; a declared setter writes that state in place. |
| `Name` | property (abstract) | Abstract — a subclass must supply it `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `StringID` | property (abstract) | Abstract — a subclass must supply it `string` property. Read it for current state; a declared setter writes that state in place. |
| `AddBarterLink` | method | Instance entry point. Takes 1 argument: `Barterable barterable`. Adds to the collection or relation this type owns. |
| `BarterSide` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `CurrentAmount` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `GetValueForFaction` | method | Instance entry point. Takes 1 argument: `IFaction faction`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `Group` | property | Instance entry point `BarterGroup` property. Read it for current state; a declared setter writes that state in place. |
| `Initialize` | method | Instance entry point. Takes 2 arguments: `BarterGroup barterGroup`, `bool isContextDependent`. |
| `IsContextDependent` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsOffered` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `LinkedBarterables` | property | Instance entry point `MBReadOnlyList<Barterable>` property. Read it for current state; a declared setter writes that state in place. |
| `OriginalOwner` | property | Instance entry point `Hero` property. Read it for current state; a declared setter writes that state in place. |
| `OriginalParty` | property | Instance entry point `PartyBase` property. Read it for current state; a declared setter writes that state in place. |
| `SetIsOffered` | method | Instance entry point. Takes 1 argument: `bool value`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `Side` | property | Instance entry point `Barterable.BarterSide` property. Read it for current state; a declared setter writes that state in place. |
| `Barterable` | ctor | Protected — for subclasses only. Takes 2 arguments: `Hero originalOwner`, `PartyBase originalParty`. Returns ``. |
| `_linkedBarterables` | field | Protected — for subclasses only `MBList<Barterable>` field — direct storage with no validation or notification. |

- Constructed as `protected Barterable(Hero originalOwner, PartyBase originalParty)`.

## Usage Example

```csharp
// Barterable is read through its properties:
//   StringID : string
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 9 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/BarterSystem/Barterables/Barterable.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BarterGroup](../BarterGroup/) — `TaleWorlds.CampaignSystem.BarterSystem`.
- [ImageIdentifier](../../core-extra/ImageIdentifier/) — `TaleWorlds.Core.ImageIdentifiers`.

Section: [api/campaign/](../) — the other types in this bucket.
