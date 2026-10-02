---
title: "TalkToNpcQuestTask"
description: "TalkToNpcQuestTask: a public class in TaleWorlds.CampaignSystem, inheriting QuestTaskBase; 5 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/Issues/IssueQuestTasks/TalkToNpcQuestTask.cs."
---
# TalkToNpcQuestTask

**Namespace:** `TaleWorlds.CampaignSystem.Issues.IssueQuestTasks`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class TalkToNpcQuestTask : QuestTaskBase`
**File:** `TaleWorlds.CampaignSystem/Issues/IssueQuestTasks/TalkToNpcQuestTask.cs`

## Overview

TalkToNpcQuestTask lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Issues/IssueQuestTasks/TalkToNpcQuestTask.cs. It is a public class, implementing/inheriting QuestTaskBase; the inheritance chain is TalkToNpcQuestTask → QuestTaskBase. It exposes 5 public/protected members: 3 methods, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TalkToNpcQuestTask is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Issues.IssueQuestTasks) the module directory; inheritance chain TalkToNpcQuestTask → QuestTaskBase. The surface is method-led (methods 3/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Issues/IssueQuestTasks/TalkToNpcQuestTask.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TalkToNpcQuestTask` | `public TalkToNpcQuestTask(Hero hero, Action onSucceededAction, DialogFlow dialogFlow = null) : base(dialogFlow, onSucceededAction, null, null)` | constructor |
| `TalkToNpcQuestTask` | `public TalkToNpcQuestTask(CharacterObject character, Action onSucceededAction, DialogFlow dialogFlow = null) : base(dialogFlow, onSucceededAction, null, null)` | constructor |
| `IsTaskCharacter` | `public bool IsTaskCharacter()` | method |
| `OnFinished` | `protected override void OnFinished()` | method |
| `SetReferences` | `public override void SetReferences()` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface QuestTaskBase](../QuestTaskBase)
- [same namespace CaptureAndBringNpcTask](../CaptureAndBringNpcTask)
- [same namespace ChangeCommonAreaOwnerQuestTask](../ChangeCommonAreaOwnerQuestTask)
- [same namespace ChangeSettlementOwnerTask](../ChangeSettlementOwnerTask)
- [same namespace DefeatPartyQuestTask](../DefeatPartyQuestTask)
