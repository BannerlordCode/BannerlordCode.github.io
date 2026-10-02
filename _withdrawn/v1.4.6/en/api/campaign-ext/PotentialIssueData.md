---
title: "PotentialIssueData"
description: "PotentialIssueData: a public struct in TaleWorlds.CampaignSystem.Issues; 10 exposed members (1 methods, 6 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/Issues/PotentialIssueData.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PotentialIssueData

**Namespace:** `TaleWorlds.CampaignSystem.Issues`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public struct PotentialIssueData`
**File:** `TaleWorlds.CampaignSystem/Issues/PotentialIssueData.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.Issues)

## Overview

PotentialIssueData lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Issues/PotentialIssueData.cs. It is a public struct; the inheritance chain is PotentialIssueData. It exposes 10 public/protected members: 1 methods, 6 properties, 2 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PotentialIssueData lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.Issues`), namespace `TaleWorlds.CampaignSystem.Issues`, inheritance chain PotentialIssueData. The surface is property-led (properties 6/10, methods 1/10), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Issues/PotentialIssueData.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnStartIssue` | `public PotentialIssueData.StartIssueDelegate OnStartIssue` | property |
| `IssueId` | `public string IssueId` | property |
| `IssueType` | `public Type IssueType` | property |
| `Frequency` | `public IssueBase.IssueFrequency Frequency` | property |
| `RelatedObject` | `public object RelatedObject` | property |
| `IsValid` | `public bool IsValid` | property |
| `PotentialIssueData` | `public PotentialIssueData(PotentialIssueData.StartIssueDelegate onStartIssue, Type issueType, IssueBase.IssueFrequency frequency, object relatedObject = null)` | constructor |
| `PotentialIssueData` | `public PotentialIssueData(Type issueType, IssueBase.IssueFrequency frequency)` | constructor |
| `StartIssueDelegate` | `public delegate IssueBase StartIssueDelegate(in PotentialIssueData pid, Hero issueOwner);` | method |
| `StartIssueDelegate` | `public delegate IssueBase StartIssueDelegate(in PotentialIssueData pid, Hero issueOwner)` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ArmyNeedsSuppliesIssueBehavior](../ArmyNeedsSuppliesIssueBehavior/)
- [same namespace ArtisanCantSellProductsAtAFairPriceIssueBehavior](../ArtisanCantSellProductsAtAFairPriceIssueBehavior/)
- [same namespace ArtisanOverpricedGoodsIssueBehavior](../ArtisanOverpricedGoodsIssueBehavior/)
- [same namespace BettingFraudIssueBehavior](../BettingFraudIssueBehavior/)
