---
title: "ChangeSettlementOwnerTask"
description: "ChangeSettlementOwnerTask — class in TaleWorlds.CampaignSystem.Issues.IssueQuestTasks. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# ChangeSettlementOwnerTask

**Namespace:** `TaleWorlds.CampaignSystem.Issues.IssueQuestTasks`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class ChangeSettlementOwnerTask : QuestTaskBase`  
**Base:** `QuestTaskBase`  
**Source:** `TaleWorlds.CampaignSystem/Issues/IssueQuestTasks/ChangeSettlementOwnerTask.cs`

## Overview

`ChangeSettlementOwnerTask` is a named type in the TaleWorlds.CampaignSystem.Issues.IssueQuestTasks namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends QuestTaskBase, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ChangeSettlementOwnerTask`.
- **Instance members** (2): `OnSettlementOwnerChanged`, `SetReferences`.
- **Extension points** (1): `SetReferences`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `SetReferences` | method (override) | Overrides the base member. Takes no arguments. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `OnSettlementOwnerChanged` | method | Instance entry point. Takes 6 arguments: `Settlement settlement`, `bool openToClaim`, `Hero newOwner`, `Hero oldOwner`, …. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ChangeSettlementOwnerTask` | ctor | Instance entry point. Takes 6 arguments: `Settlement settlement`, `Hero newOwner`, `Action onSucceededAction`, `Action onFailedAction`, …. Returns ``. Write path: where the engine offers a matching Action or owner method, prefer that instead. |

- Constructed as `public ChangeSettlementOwnerTask(Settlement settlement, Hero newOwner, Action onSucceededAction, Action onFailedAction, Action onCanceledAction, DialogFlow dialogFlow = null)`.

## Usage Example

```csharp
var changeSettlementOwnerTask = new ChangeSettlementOwnerTask(settlement, newOwner, onSucceededAction, onFailedAction, onCanceledAction, dialogFlow);
changeSettlementOwnerTask.OnSettlementOwnerChanged(settlement, openToClaim, newOwner, oldOwner, capturerHero, detail);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/Issues/IssueQuestTasks/ChangeSettlementOwnerTask.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/campaign-ext/](../) — the other types in this bucket.
