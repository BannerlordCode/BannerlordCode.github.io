---
title: "FollowAgentQuestTask"
description: "FollowAgentQuestTask: a public class in SandBox.Issues.IssueQuestTasks, inheriting QuestTaskBase; 5 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Issues/IssueQuestTasks/FollowAgentQuestTask.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# FollowAgentQuestTask

**Namespace:** `SandBox.Issues.IssueQuestTasks`
**Module:** `SandBox`
**Type:** `public class FollowAgentQuestTask : QuestTaskBase`
**File:** `SandBox/Issues/IssueQuestTasks/FollowAgentQuestTask.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

FollowAgentQuestTask lives in the SandBox module, source file SandBox/Issues/IssueQuestTasks/FollowAgentQuestTask.cs. It is a public class, implementing/inheriting QuestTaskBase; the inheritance chain is FollowAgentQuestTask → QuestTaskBase. It exposes 5 public/protected members: 3 methods, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FollowAgentQuestTask lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Issues.IssueQuestTasks`, inheritance chain FollowAgentQuestTask → QuestTaskBase. The surface is method-led (methods 3/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Issues/IssueQuestTasks/FollowAgentQuestTask.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `FollowAgentQuestTask` | `public FollowAgentQuestTask(Agent followedAgent, GameEntity targetEntity, Action onSucceededAction, Action onCanceledAction, DialogFlow dialogFlow = null) : base(dialogFlow, onSucceededAction, null, onCanceledAction)` | constructor |
| `FollowAgentQuestTask` | `public FollowAgentQuestTask(Agent followedAgent, Agent targetAgent, Action onSucceededAction, Action onCanceledAction, DialogFlow dialogFlow = null) : base(dialogFlow, onSucceededAction, null, onCanceledAction)` | constructor |
| `MissionTick` | `public void MissionTick(float dt)` | method |
| `OnFinished` | `protected override void OnFinished()` | method |
| `SetReferences` | `public override void SetReferences()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface QuestTaskBase](../../campaign/QuestTaskBase/)
- [same namespace ArenaDuelQuestTask](../ArenaDuelQuestTask/)
- [same namespace BeginConversationInitiatedByAIQuestTask](../BeginConversationInitiatedByAIQuestTask/)
