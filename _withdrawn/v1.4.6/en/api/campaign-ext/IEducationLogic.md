---
title: "IEducationLogic"
description: "IEducationLogic: a public interface in TaleWorlds.CampaignSystem.CampaignBehaviors; 5 exposed members (5 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/CampaignBehaviors/IEducationLogic.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IEducationLogic

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IEducationLogic`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/IEducationLogic.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.CampaignBehaviors)

## Overview

IEducationLogic lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignBehaviors/IEducationLogic.cs. It is a public interface; the inheritance chain is IEducationLogic. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IEducationLogic lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.CampaignBehaviors`), namespace `TaleWorlds.CampaignSystem.CampaignBehaviors`, inheritance chain IEducationLogic. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignBehaviors/IEducationLogic.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Finalize` | `void Finalize(Hero child, List<string>chosenOptions);` | method |
| `GetOptionProperties` | `void GetOptionProperties(Hero child, string optionKey, List<string>previousChoices, out TextObject optionTitle, out TextObject description, out TextObject effect, out ValueTuple<CharacterAttribute, int>[]attributes, out ValueTuple<SkillObject, int>[]skills, out ValueTuple<SkillObject, int>[]focusPoints, out EducationCampaignBehavior.EducationCharacterProperties[]characterProperties);` | method |
| `GetPageProperties` | `void GetPageProperties(Hero child, List<string>previousChoices, out TextObject title, out TextObject description, out TextObject instruction, out EducationCampaignBehavior.EducationCharacterProperties[]defaultProperties, out string[]availableOptions);` | method |
| `GetStageProperties` | `void GetStageProperties(Hero child, out int pageCount);` | method |
| `IsValidEducationNotification` | `bool IsValidEducationNotification(EducationMapNotification educationMapNotification);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AgingCampaignBehavior](../AgingCampaignBehavior/)
- [same namespace AllianceCampaignBehavior](../AllianceCampaignBehavior/)
- [same namespace BackstoryCampaignBehavior](../BackstoryCampaignBehavior/)
- [same namespace BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior/)
