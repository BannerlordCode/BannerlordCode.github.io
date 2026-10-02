---
title: "Badge"
description: "Badge — class in TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges. 13 public members (0 static)."
---

<!-- v147-skeleton -->
# Badge

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges`  
**Module:** `TaleWorlds.MountAndBlade.Diamond`  
**Type:** `public class Badge`  
**Source:** `TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/Badge.cs`

## Overview

`Badge` is a named type in the TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `Badge`.
- **Instance members** (12): `Index`, `Type`, `StringId`, `GroupId`, `Name`, `Description`, ….
- **Extension points** (1): `Deserialize`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Deserialize` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `XmlNode node`. |
| `Description` | property | Instance entry point `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `GroupId` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `Index` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `IsActive` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsTimed` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsVisibleOnlyWhenEarned` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `Name` | property | Instance entry point `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `PeriodEnd` | property | Instance entry point `DateTime` property. Read it for current state; a declared setter writes that state in place. |
| `PeriodStart` | property | Instance entry point `DateTime` property. Read it for current state; a declared setter writes that state in place. |
| `StringId` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `Type` | property | Instance entry point `BadgeType` property. Read it for current state; a declared setter writes that state in place. |
| `Badge` | ctor | Instance entry point. Takes 2 arguments: `int index`, `BadgeType badgeType`. Returns ``. |

- Constructed as `public Badge(int index, BadgeType badgeType)`.

## Usage Example

```csharp
var badge = new Badge(index, badgeType);
badge.Deserialize(node);
// Read current state through badge.Index.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/Badge.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BadgeType](../BadgeType/) — `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges`.
- [Attributes](../../campaign/Attributes/) — `TaleWorlds.CampaignSystem.Extensions`.

Section: [api/mission-ext/](../) — the other types in this bucket.
