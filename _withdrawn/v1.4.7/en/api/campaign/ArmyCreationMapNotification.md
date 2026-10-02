---
title: "ArmyCreationMapNotification"
description: "ArmyCreationMapNotification — class in TaleWorlds.CampaignSystem.MapNotificationTypes. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# ArmyCreationMapNotification

**Namespace:** `TaleWorlds.CampaignSystem.MapNotificationTypes`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class ArmyCreationMapNotification : InformationData`  
**Base:** `InformationData`  
**Source:** `TaleWorlds.CampaignSystem/MapNotificationTypes/ArmyCreationMapNotification.cs`

## Overview

`ArmyCreationMapNotification` is a named type in the TaleWorlds.CampaignSystem.MapNotificationTypes namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends InformationData, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ArmyCreationMapNotification`.
- **Instance members** (2): `TitleText`, `SoundEventPath`.
- **Extension points** (2): `TitleText`, `SoundEventPath`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `SoundEventPath` | property (override) | Overrides the base member `string` property. Read it for current state; a declared setter writes that state in place. |
| `TitleText` | property (override) | Overrides the base member `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `ArmyCreationMapNotification` | ctor | Instance entry point. Takes 2 arguments: `Army createdArmy`, `TextObject description`. Returns ``. |

- Constructed as `public ArmyCreationMapNotification(Army createdArmy, TextObject description)`.

## Usage Example

```csharp
var armyCreationMapNotification = new ArmyCreationMapNotification(createdArmy, description);
// Read current state through armyCreationMapNotification.TitleText.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/MapNotificationTypes/ArmyCreationMapNotification.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/campaign/](../) — the other types in this bucket.
