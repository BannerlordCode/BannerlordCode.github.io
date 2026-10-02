---
title: "ConspiracyQuestMapNotification"
description: "ConspiracyQuestMapNotification — class in StoryMode. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# ConspiracyQuestMapNotification

**Namespace:** `StoryMode`  
**Module:** `StoryMode`  
**Type:** `public class ConspiracyQuestMapNotification : InformationData`  
**Base:** `InformationData`  
**Source:** `StoryMode/ConspiracyQuestMapNotification.cs`

## Overview

`ConspiracyQuestMapNotification` is a named type in the StoryMode namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends InformationData, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ConspiracyQuestMapNotification`.
- **Instance members** (2): `TitleText`, `SoundEventPath`.
- **Extension points** (2): `TitleText`, `SoundEventPath`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `SoundEventPath` | property (override) | Overrides the base member `string` property. Read it for current state; a declared setter writes that state in place. |
| `TitleText` | property (override) | Overrides the base member `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `ConspiracyQuestMapNotification` | ctor | Instance entry point. Takes 2 arguments: `QuestBase conspiracyQuest`, `TextObject descriptionText`. Returns ``. |

- Constructed as `public ConspiracyQuestMapNotification(QuestBase conspiracyQuest, TextObject descriptionText)`.

## Usage Example

```csharp
var conspiracyQuestMapNotification = new ConspiracyQuestMapNotification(conspiracyQuest, descriptionText);
// Read current state through conspiracyQuestMapNotification.TitleText.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `StoryMode/ConspiracyQuestMapNotification.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/storymode/](../) — the other types in this bucket.
