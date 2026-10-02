---
title: "EducationCampaignBehavior"
description: "EducationCampaignBehavior: a public class in TaleWorlds.CampaignSystem.CampaignBehaviors, inheriting CampaignBehaviorBase, IEducationLogic; 12 exposed members (7 methods, 1 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/CampaignBehaviors/EducationCampaignBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EducationCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class EducationCampaignBehavior : CampaignBehaviorBase, IEducationLogic`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/EducationCampaignBehavior.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.CampaignBehaviors)

## Overview

EducationCampaignBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignBehaviors/EducationCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase, IEducationLogic; the inheritance chain is EducationCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 12 public/protected members: 7 methods, 1 properties, 4 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EducationCampaignBehavior lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.CampaignBehaviors`), namespace `TaleWorlds.CampaignSystem.CampaignBehaviors`, inheritance chain EducationCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 7/12, properties 1/12), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignBehaviors/EducationCampaignBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `GetOptionProperties` | `public void GetOptionProperties(Hero child, string optionKey, List<string>previousOptions, out TextObject optionTitle, out TextObject description, out TextObject effect, out ValueTuple<CharacterAttribute, int>[]attributes, out ValueTuple<SkillObject, int>[]skills, out ValueTuple<SkillObject, int>[]focusPoints, out EducationCampaignBehavior.EducationCharacterProperties[]educationCharacterProperties)` | method |
| `GetPageProperties` | `public void GetPageProperties(Hero child, List<string>previousChoices, out TextObject title, out TextObject description, out TextObject instruction, out EducationCampaignBehavior.EducationCharacterProperties[]defaultCharacterProperties, out string[]availableOptions)` | method |
| `IsValidEducationNotification` | `public bool IsValidEducationNotification(EducationMapNotification data)` | method |
| `GetStageProperties` | `public void GetStageProperties(Hero child, out int pageCount)` | method |
| `Finalize` | `public void Finalize(Hero child, List<string>chosenOptions)` | method |
| `EducationCharacterProperties` | `public struct EducationCharacterProperties` | property |
| `EducationOptionConditionDelegate` | `public delegate bool EducationOptionConditionDelegate(EducationCampaignBehavior.EducationOption option, List<EducationCampaignBehavior.EducationOption>previousOptions)` | nested type |
| `EducationOptionConsequenceDelegate` | `public delegate bool EducationOptionConsequenceDelegate(EducationCampaignBehavior.EducationOption option)` | nested type |
| `EducationCharacterProperties` | `public struct EducationCharacterProperties` | nested type |
| `EducationPageConditionDelegate` | `public delegate bool EducationPageConditionDelegate(EducationCampaignBehavior.EducationPage page, List<EducationCampaignBehavior.EducationOption>previousOptions)` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IEducationLogic](../IEducationLogic/)
- [same namespace AgingCampaignBehavior](../AgingCampaignBehavior/)
- [same namespace AllianceCampaignBehavior](../AllianceCampaignBehavior/)
- [same namespace BackstoryCampaignBehavior](../BackstoryCampaignBehavior/)
- [same namespace BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior/)
