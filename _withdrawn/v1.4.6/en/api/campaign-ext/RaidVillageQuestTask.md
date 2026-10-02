---
title: "RaidVillageQuestTask"
description: "RaidVillageQuestTask: a public class in TaleWorlds.CampaignSystem.Issues.IssueQuestTasks, inheriting QuestTaskBase; 4 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/Issues/IssueQuestTasks/RaidVillageQuestTask.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# RaidVillageQuestTask

**Namespace:** `TaleWorlds.CampaignSystem.Issues.IssueQuestTasks`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class RaidVillageQuestTask : QuestTaskBase`
**File:** `TaleWorlds.CampaignSystem/Issues/IssueQuestTasks/RaidVillageQuestTask.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.Issues)

## Overview

RaidVillageQuestTask lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Issues/IssueQuestTasks/RaidVillageQuestTask.cs. It is a public class, implementing/inheriting QuestTaskBase; the inheritance chain is RaidVillageQuestTask → QuestTaskBase. It exposes 4 public/protected members: 3 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RaidVillageQuestTask lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.Issues`), namespace `TaleWorlds.CampaignSystem.Issues.IssueQuestTasks`, inheritance chain RaidVillageQuestTask → QuestTaskBase. The surface is method-led (methods 3/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Issues/IssueQuestTasks/RaidVillageQuestTask.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RaidVillageQuestTask` | `public RaidVillageQuestTask(Village village, Action onSucceededAction, Action onFailedAction, Action onCanceledAction, DialogFlow dialogFlow = null) : base(dialogFlow, onSucceededAction, onFailedAction, onCanceledAction)` | constructor |
| `OnVillageLooted` | `public void OnVillageLooted(Village village)` | method |
| `OnClanChangedKingdom` | `public void OnClanChangedKingdom(Clan clan, Kingdom oldKingdom, Kingdom newKingdom, ChangeKingdomAction.ChangeKingdomActionDetail detail, bool showNotification)` | method |
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
