---
title: "ICampaignBehaviorManager"
description: "ICampaignBehaviorManager: a public interface in TaleWorlds.CampaignSystem; 8 exposed members (8 methods, 0 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/ICampaignBehaviorManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ICampaignBehaviorManager

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface ICampaignBehaviorManager`
**File:** `TaleWorlds.CampaignSystem/ICampaignBehaviorManager.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

ICampaignBehaviorManager lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ICampaignBehaviorManager.cs. It is a public interface; the inheritance chain is ICampaignBehaviorManager. It exposes 8 public/protected members: 8 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ICampaignBehaviorManager lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem`, inheritance chain ICampaignBehaviorManager. The surface is method-led (methods 8/8, properties 0/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ICampaignBehaviorManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RegisterEvents` | `void RegisterEvents();` | method |
| `GetBehavior` | `T GetBehavior<T>();` | method |
| `IEnumerable` | `IEnumerable<T>GetBehaviors<T>();` | method |
| `AddBehavior` | `void AddBehavior(CampaignBehaviorBase campaignBehavior);` | method |
| `RemoveBehavior` | `void RemoveBehavior<T>() where T : CampaignBehaviorBase;` | method |
| `ClearBehaviors` | `void ClearBehaviors();` | method |
| `LoadBehaviorData` | `void LoadBehaviorData();` | method |
| `InitializeCampaignBehaviors` | `void InitializeCampaignBehaviors(IEnumerable<CampaignBehaviorBase>inputComponents);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionNotes](../ActionNotes/)
- [same namespace AIBehaviorData](../AIBehaviorData/)
- [same namespace Army](../Army/)
- [same namespace AtmosphereGrid](../AtmosphereGrid/)
