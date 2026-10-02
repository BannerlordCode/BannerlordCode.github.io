---
title: "TheSpyPartyIssueQuestBehavior"
description: "TheSpyPartyIssueQuestBehavior: a public class in SandBox, inheriting CampaignBehaviorBase; 11 exposed members (3 methods, 4 properties, 0 fields). Source: SandBox/Issues/TheSpyPartyIssueQuestBehavior.cs."
---
# TheSpyPartyIssueQuestBehavior

**Namespace:** `SandBox.Issues`
**Module:** `SandBox`
**Type:** `public class TheSpyPartyIssueQuestBehavior : CampaignBehaviorBase`
**File:** `SandBox/Issues/TheSpyPartyIssueQuestBehavior.cs`

## Overview

TheSpyPartyIssueQuestBehavior lives in the SandBox module, source file SandBox/Issues/TheSpyPartyIssueQuestBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is TheSpyPartyIssueQuestBehavior → CampaignBehaviorBase. It exposes 11 public/protected members: 3 methods, 4 properties, 4 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TheSpyPartyIssueQuestBehavior is a top-level type in SandBox, namespace differing from (SandBox.Issues) the module directory; inheritance chain TheSpyPartyIssueQuestBehavior → CampaignBehaviorBase. The surface is property-led (properties 4/11, methods 3/11), so it mostly exposes state for reading. CampaignBehaviorBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Issues/TheSpyPartyIssueQuestBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `OnCheckForIssue` | `public void OnCheckForIssue(Hero hero)` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `SaveableTypeDefiner` | `public class TheSpyPartyIssueQuestTypeDefiner : SaveableTypeDefiner` | property |
| `SuspectNpc` | `public struct SuspectNpc` | property |
| `IssueBase` | `public class TheSpyPartyIssue : IssueBase` | property |
| `QuestBase` | `public class TheSpyPartyIssueQuest : QuestBase` | property |
| `SaveableTypeDefiner` | `public class TheSpyPartyIssueQuestTypeDefiner : SaveableTypeDefiner` | nested type |
| `SuspectNpc` | `public struct SuspectNpc` | nested type |
| `IssueBase` | `public class TheSpyPartyIssue : IssueBase` | nested type |
| `QuestBase` | `public class TheSpyPartyIssueQuest : QuestBase` | nested type |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace FamilyFeudIssueBehavior](../FamilyFeudIssueBehavior)
- [same namespace NotableWantsDaughterFoundIssueBehavior](../NotableWantsDaughterFoundIssueBehavior)
- [same namespace ProdigalSonIssueBehavior](../ProdigalSonIssueBehavior)
- [same namespace RivalGangMovingInIssueBehavior](../RivalGangMovingInIssueBehavior)
