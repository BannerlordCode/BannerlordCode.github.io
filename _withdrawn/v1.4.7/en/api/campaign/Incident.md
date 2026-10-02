---
title: "Incident"
description: "Incident — class in TaleWorlds.CampaignSystem.Incidents. 15 public members (0 static)."
---

<!-- v147-skeleton -->
# Incident

**Namespace:** `TaleWorlds.CampaignSystem.Incidents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class Incident : MBObjectBase`  
**Base:** `MBObjectBase`  
**Source:** `TaleWorlds.CampaignSystem/Incidents/Incident.cs`

## Overview

`Incident` is a named type in the TaleWorlds.CampaignSystem.Incidents namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends MBObjectBase, so the members it does not redeclare are inherited from there. 6 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `Incident`.
- **Instance members** (14): `Title`, `Description`, `Trigger`, `Type`, `Cooldown`, `NumOfOptions`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AddOption` | method | Instance entry point. Takes 4 arguments: `string text`, `List<IncidentEffect> effects`, `Incident.IncidentOptionConditionDelegate condition`, `Incident.IncidentOptionConsequenceDelegate consequence`. Adds to the collection or relation this type owns. |
| `CanIncidentBeInvoked` | method | Instance entry point. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `Cooldown` | property | Instance entry point `CampaignTime` property. Read it for current state; a declared setter writes that state in place. |
| `Description` | property | Instance entry point `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `GetOptionHint` | method | Instance entry point. Takes 1 argument: `int index`. Returns `List<TextObject>`. Read path: prefer it over reaching for the backing store. |
| `GetOptionText` | method | Instance entry point. Takes 1 argument: `int index`. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `IncidentOptionConditionDelegate` | method | Instance entry point. Takes 1 argument: `TextObject text`. Returns `delegate bool`. |
| `IncidentOptionConsequenceDelegate` | method | Instance entry point. Takes no arguments. Returns `delegate void`. |
| `Initialize` | method | Instance entry point. Takes 7 arguments: `string title`, `string description`, `IncidentsCampaignBehaviour.IncidentTrigger trigger`, `IncidentsCampaignBehaviour.IncidentType type`, …. |
| `InvokeOption` | method | Instance entry point. Takes 1 argument: `int index`. Returns `List<TextObject>`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `NumOfOptions` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `Title` | property | Instance entry point `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `Trigger` | property | Instance entry point `IncidentsCampaignBehaviour.IncidentTrigger` property. Read it for current state; a declared setter writes that state in place. |
| `Type` | property | Instance entry point `IncidentsCampaignBehaviour.IncidentType` property. Read it for current state; a declared setter writes that state in place. |
| `Incident` | ctor | Instance entry point. Takes 1 argument: `string id`. Returns ``. |

- Constructed as `public Incident(string id)`.

## Usage Example

```csharp
var incident = new Incident(id);
incident.Initialize(title, description, trigger, type, cooldown, theTarget, condition);
// Read current state through incident.Title.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.CampaignSystem/Incidents/Incident.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [IncidentEffect](../IncidentEffect/) — `TaleWorlds.CampaignSystem.Incidents`.

Section: [api/campaign/](../) — the other types in this bucket.
