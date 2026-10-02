---
title: "BeginConversationInitiatedByAIQuestTask"
description: "BeginConversationInitiatedByAIQuestTask: a public class in SandBox.Issues.IssueQuestTasks, inheriting QuestTaskBase; 4 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Issues/IssueQuestTasks/BeginConversationInitiatedByAIQuestTask.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BeginConversationInitiatedByAIQuestTask

**Namespace:** `SandBox.Issues.IssueQuestTasks`
**Module:** `SandBox`
**Type:** `public class BeginConversationInitiatedByAIQuestTask : QuestTaskBase`
**File:** `SandBox/Issues/IssueQuestTasks/BeginConversationInitiatedByAIQuestTask.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

BeginConversationInitiatedByAIQuestTask lives in the SandBox module, source file SandBox/Issues/IssueQuestTasks/BeginConversationInitiatedByAIQuestTask.cs. It is a public class, implementing/inheriting QuestTaskBase; the inheritance chain is BeginConversationInitiatedByAIQuestTask → QuestTaskBase. It exposes 4 public/protected members: 3 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BeginConversationInitiatedByAIQuestTask lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Issues.IssueQuestTasks`, inheritance chain BeginConversationInitiatedByAIQuestTask → QuestTaskBase. The surface is method-led (methods 3/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Issues/IssueQuestTasks/BeginConversationInitiatedByAIQuestTask.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `BeginConversationInitiatedByAIQuestTask` | `public BeginConversationInitiatedByAIQuestTask(Agent agent, Action onSucceededAction, Action onFailedAction, Action onCanceledAction, DialogFlow dialogFlow = null) : base(dialogFlow, onSucceededAction, onFailedAction, onCanceledAction)` | constructor |
| `MissionTick` | `public void MissionTick(float dt)` | method |
| `OnFinished` | `protected override void OnFinished()` | method |
| `SetReferences` | `public override void SetReferences()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface QuestTaskBase](../../campaign/QuestTaskBase/)
- [same namespace ArenaDuelQuestTask](../ArenaDuelQuestTask/)
- [same namespace FollowAgentQuestTask](../FollowAgentQuestTask/)
