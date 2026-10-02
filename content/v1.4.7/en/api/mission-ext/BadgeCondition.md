---
title: "BadgeCondition"
description: "BadgeCondition — class in TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges. 6 public members (0 static)."
---

<!-- v147-skeleton -->
# BadgeCondition

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges`  
**Module:** `TaleWorlds.MountAndBlade.Diamond`  
**Type:** `public class BadgeCondition`  
**Source:** `TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/BadgeCondition.cs`

## Overview

`BadgeCondition` is a rule or comparison type: it answers a yes/no or ordering question so that callers can sort, filter or gate behaviour without writing the condition inline.

## Mental Model

A rule is a named decision. Keep the condition pure and cheap — it may be evaluated once per entity per frame — and keep the effect outside it.

Prefer composing rules over branching inside one: a rule that reads as a single sentence is a rule you can trust when the data changes.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `BadgeCondition`.
- **Instance members** (5): `Type`, `GroupType`, `Description`, `StringId`, `Check`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Check` | method | Instance entry point. Takes 1 argument: `string value`. Returns `bool`. |
| `Description` | property | Instance entry point `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `GroupType` | property | Instance entry point `ConditionGroupType` property. Read it for current state; a declared setter writes that state in place. |
| `StringId` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `Type` | property | Instance entry point `ConditionType` property. Read it for current state; a declared setter writes that state in place. |
| `BadgeCondition` | ctor | Instance entry point. Takes 2 arguments: `int index`, `XmlNode node`. Returns ``. |

- Constructed as `public BadgeCondition(int index, XmlNode node)`.

## Usage Example

```csharp
var data = new BadgeCondition
{
    Type = default,
    GroupType = default,
    Description = default,
    StringId = "",
};
```

## Risks and Boundaries

- Rules are evaluated in hot loops; avoid allocation inside the comparison.
- The null case is usually unhandled and shows up as an exception rather than a filtered-out entry.
- A rule that captures mutable state gives order-dependent results; keep it stateless.
- The declaration in `TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/BadgeCondition.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ConditionGroupType](../ConditionGroupType/) — `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges`.
- [Attributes](../../campaign/Attributes/) — `TaleWorlds.CampaignSystem.Extensions`.

Section: [api/mission-ext/](../) — the other types in this bucket.
