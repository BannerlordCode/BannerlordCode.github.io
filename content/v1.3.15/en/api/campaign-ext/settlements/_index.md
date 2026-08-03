---
title: "Settlements Family"
description: "Settlement ownership, town and village state, economy, garrisons, and safe mutation boundaries."
---

# Settlements Family

**One-sentence role:** Settlement APIs expose the campaign map's towns, villages, workshops, and ownership relationships while models calculate their changing values.

## Mental model and reading order

Read [Settlement](../../campaign/Settlement), [Town](../Town), and [Village](../../campaign/Village). Then compare [Workshop](../../campaign/Workshop) with the settlement economy models before using an ownership action.

## When to use

Use settlement entities for identity and current state. Use a model for daily calculations and an action for owner or state changes. Do not directly set loyalty, security, or prosperity fields to simulate a daily tick.

## Dependency map

- Upstream: [MobileParty](../../campaign/MobileParty), clans, kingdoms, and map events.
- Downstream: settlement menus, garrisons, economy models, notifications, and save data.
- Siblings: [Party](../party), [Actions](../actions), and [Models](../models).

## Real entry points

```csharp
Settlement settlement = Settlement.Find("town_1");
Town town = settlement.Town;
```

Resolve by the engine's object identity and check nullability before traversing town or village state.

## Risk boundaries

Settlement changes fan out to clan, kingdom, garrison, and economy systems. Route owner changes through the matching action and let daily models remain read-only.

## Navigation

- [Parent: Campaign-Ext](..)
- [Sibling: Party](../party) · [Models](../models)
- [Related: MapEvents](../mapevents)
