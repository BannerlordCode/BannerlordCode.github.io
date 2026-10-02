---
title: "AcceptCallToWarOfferMapNotification"
description: "AcceptCallToWarOfferMapNotification — class in TaleWorlds.CampaignSystem.MapNotificationTypes. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# AcceptCallToWarOfferMapNotification

**Namespace:** `TaleWorlds.CampaignSystem.MapNotificationTypes`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class AcceptCallToWarOfferMapNotification : InformationData`  
**Base:** `InformationData`  
**Source:** `TaleWorlds.CampaignSystem/MapNotificationTypes/AcceptCallToWarOfferMapNotification.cs`

## Overview

`AcceptCallToWarOfferMapNotification` is a named type in the TaleWorlds.CampaignSystem.MapNotificationTypes namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends InformationData, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (2): `AcceptCallToWarOfferMapNotification`, `AcceptCallToWarOfferMapNotification`.
- **Instance members** (3): `TitleText`, `SoundEventPath`, `IsValid`.
- **Extension points** (3): `TitleText`, `SoundEventPath`, `IsValid`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `IsValid` | method (override) | Overrides the base member. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `SoundEventPath` | property (override) | Overrides the base member `string` property. Read it for current state; a declared setter writes that state in place. |
| `TitleText` | property (override) | Overrides the base member `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `AcceptCallToWarOfferMapNotification` | ctor | Instance entry point. Takes 3 arguments: `Kingdom offeringKingdom`, `Kingdom kingdomToCallToWarAgainst`, `TextObject descriptionText`. Returns ``. |
| `AcceptCallToWarOfferMapNotification` | ctor | Instance entry point. Takes 1 argument: `TextObject description`. Returns ``. |

- Constructed as `public AcceptCallToWarOfferMapNotification(Kingdom offeringKingdom, Kingdom kingdomToCallToWarAgainst, TextObject descriptionText)`.
- Constructed as `public AcceptCallToWarOfferMapNotification(TextObject description)`.

## Usage Example

```csharp
var acceptCallToWarOfferMapNotification = new AcceptCallToWarOfferMapNotification(offeringKingdom, kingdomToCallToWarAgainst, descriptionText);
acceptCallToWarOfferMapNotification.IsValid();
// Read current state through acceptCallToWarOfferMapNotification.TitleText.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/MapNotificationTypes/AcceptCallToWarOfferMapNotification.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [AllianceModel](../../campaign-ext/AllianceModel/) — `TaleWorlds.CampaignSystem.ComponentInterfaces`.

Section: [api/campaign/](../) — the other types in this bucket.
