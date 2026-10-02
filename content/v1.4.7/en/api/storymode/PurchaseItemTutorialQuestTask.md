---
title: "PurchaseItemTutorialQuestTask"
description: "PurchaseItemTutorialQuestTask — class in StoryMode.Quests.QuestTasks. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# PurchaseItemTutorialQuestTask

**Namespace:** `StoryMode.Quests.QuestTasks`  
**Module:** `StoryMode`  
**Type:** `public class PurchaseItemTutorialQuestTask : QuestTaskBase`  
**Base:** `QuestTaskBase`  
**Source:** `StoryMode/Quests/QuestTasks/PurchaseItemTutorialQuestTask.cs`

## Overview

`PurchaseItemTutorialQuestTask` is a named type in the StoryMode.Quests.QuestTasks namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends QuestTaskBase, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `PurchaseItemTutorialQuestTask`.
- **Instance members** (2): `InitializeTaskOnLoad`, `SetReferences`.
- **Extension points** (1): `SetReferences`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `SetReferences` | method (override) | Overrides the base member. Takes no arguments. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `InitializeTaskOnLoad` | method | Instance entry point. Takes 2 arguments: `int targetItemAmount`, `ItemObject item`. |
| `PurchaseItemTutorialQuestTask` | ctor | Instance entry point. Takes 4 arguments: `Action onSucceed`, `int targetItemAmount`, `ItemObject item`, `JournalLog progressLog`. Returns ``. |

- Constructed as `public PurchaseItemTutorialQuestTask(Action onSucceed, int targetItemAmount, ItemObject item, JournalLog progressLog = null)`.

## Usage Example

```csharp
var purchaseItemTutorialQuestTask = new PurchaseItemTutorialQuestTask(onSucceed, targetItemAmount, item, progressLog);
purchaseItemTutorialQuestTask.InitializeTaskOnLoad(targetItemAmount, item);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `StoryMode/Quests/QuestTasks/PurchaseItemTutorialQuestTask.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/storymode/](../) — the other types in this bucket.
