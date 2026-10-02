---
title: "TalkToNpcQuestTask"
description: "TalkToNpcQuestTask: a public class in TaleWorlds.CampaignSystem.Issues.IssueQuestTasks, inheriting QuestTaskBase; 5 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/Issues/IssueQuestTasks/TalkToNpcQuestTask.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TalkToNpcQuestTask

**Namespace:** `TaleWorlds.CampaignSystem.Issues.IssueQuestTasks`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class TalkToNpcQuestTask : QuestTaskBase`
**File:** `TaleWorlds.CampaignSystem/Issues/IssueQuestTasks/TalkToNpcQuestTask.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.Issues)

## Overview

TalkToNpcQuestTask lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Issues/IssueQuestTasks/TalkToNpcQuestTask.cs. It is a public class, implementing/inheriting QuestTaskBase; the inheritance chain is TalkToNpcQuestTask → QuestTaskBase. It exposes 5 public/protected members: 3 methods, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TalkToNpcQuestTask lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.Issues`), namespace `TaleWorlds.CampaignSystem.Issues.IssueQuestTasks`, inheritance chain TalkToNpcQuestTask → QuestTaskBase. The surface is method-led (methods 3/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Issues/IssueQuestTasks/TalkToNpcQuestTask.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `TalkToNpcQuestTask` | `public TalkToNpcQuestTask(Hero hero, Action onSucceededAction, DialogFlow dialogFlow = null) : base(dialogFlow, onSucceededAction, null, null)` | constructor |
| `TalkToNpcQuestTask` | `public TalkToNpcQuestTask(CharacterObject character, Action onSucceededAction, DialogFlow dialogFlow = null) : base(dialogFlow, onSucceededAction, null, null)` | constructor |
| `IsTaskCharacter` | `public bool IsTaskCharacter()` | method |
| `OnFinished` | `protected override void OnFinished()` | method |
| `SetReferences` | `public override void SetReferences()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface QuestTaskBase](../../campaign/QuestTaskBase/)
- [same namespace CaptureAndBringNpcTask](../CaptureAndBringNpcTask/)
- [same namespace ChangeCommonAreaOwnerQuestTask](../ChangeCommonAreaOwnerQuestTask/)
- [same namespace ChangeSettlementOwnerTask](../ChangeSettlementOwnerTask/)
- [same namespace DefeatPartyQuestTask](../DefeatPartyQuestTask/)
