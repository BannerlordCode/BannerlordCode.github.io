---
title: "ArenaDuelQuestTask"
description: "ArenaDuelQuestTask: a public class in SandBox, inheriting QuestTaskBase; 5 exposed members (4 methods, 0 properties, 0 fields). Source: SandBox/Issues/IssueQuestTasks/ArenaDuelQuestTask.cs."
---
# ArenaDuelQuestTask

**Namespace:** `SandBox.Issues.IssueQuestTasks`
**Module:** `SandBox`
**Type:** `public class ArenaDuelQuestTask : QuestTaskBase`
**File:** `SandBox/Issues/IssueQuestTasks/ArenaDuelQuestTask.cs`

## Overview

ArenaDuelQuestTask lives in the SandBox module, source file SandBox/Issues/IssueQuestTasks/ArenaDuelQuestTask.cs. It is a public class, implementing/inheriting QuestTaskBase; the inheritance chain is ArenaDuelQuestTask → QuestTaskBase. It exposes 5 public/protected members: 4 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ArenaDuelQuestTask is a top-level type in SandBox, namespace differing from (SandBox.Issues.IssueQuestTasks) the module directory; inheritance chain ArenaDuelQuestTask → QuestTaskBase. The surface is method-led (methods 4/5, properties 0/5), so it mostly exposes operations. QuestTaskBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Issues/IssueQuestTasks/ArenaDuelQuestTask.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ArenaDuelQuestTask` | `public ArenaDuelQuestTask(CharacterObject duelOpponentCharacter, Settlement settlement, Action onSucceededAction, Action onFailedAction, DialogFlow dialogFlow = null) : base(dialogFlow, onSucceededAction, onFailedAction, null)` | constructor |
| `AfterStart` | `public void AfterStart(IMission mission)` | method |
| `SetReferences` | `public override void SetReferences()` | method |
| `OnGameMenuOpened` | `public void OnGameMenuOpened(MenuCallbackArgs args)` | method |
| `MissionTick` | `public void MissionTick(float dt)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BeginConversationInitiatedByAIQuestTask](../BeginConversationInitiatedByAIQuestTask)
- [same namespace FollowAgentQuestTask](../FollowAgentQuestTask)
