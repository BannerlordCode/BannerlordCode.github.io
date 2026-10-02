---
title: "CharacterCreationCampaignBehavior"
description: "CharacterCreationCampaignBehavior: a public class in TaleWorlds.CampaignSystem.CampaignBehaviors, inheriting CampaignBehaviorBase, ICharacterCreationContentHandler; 25 exposed members (9 methods, 0 properties, 16 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/CampaignBehaviors/CharacterCreationCampaignBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CharacterCreationCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class CharacterCreationCampaignBehavior : CampaignBehaviorBase, ICharacterCreationContentHandler`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/CharacterCreationCampaignBehavior.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.CampaignBehaviors)

## Overview

CharacterCreationCampaignBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignBehaviors/CharacterCreationCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase, ICharacterCreationContentHandler; the inheritance chain is CharacterCreationCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 25 public/protected members: 9 methods, 16 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterCreationCampaignBehavior lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.CampaignBehaviors`), namespace `TaleWorlds.CampaignSystem.CampaignBehaviors`, inheritance chain CharacterCreationCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 9/25, properties 0/25), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignBehaviors/CharacterCreationCampaignBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `InitializeCharacterCreationStages` | `public void InitializeCharacterCreationStages(CharacterCreationManager characterCreationManager)` | method |
| `InitializeCharacterCreationCultures` | `public void InitializeCharacterCreationCultures(CharacterCreationManager characterCreationManager)` | method |
| `InitializeData` | `public void InitializeData(CharacterCreationManager characterCreationManager)` | method |
| `FaceGenUpdated` | `public void FaceGenUpdated()` | method |
| `UpdateParentEquipment` | `public void UpdateParentEquipment(CharacterCreationManager characterCreationManager, MBEquipmentRoster motherEquipment, MBEquipmentRoster fatherEquipment, string motherAnimation, string fatherAnimation)` | method |
| `AddEducationMenu` | `public void AddEducationMenu(CharacterCreationManager characterCreationManager)` | method |
| `SetHeroAge` | `public void SetHeroAge(float age)` | method |
| `FocusToAddYouthStart` | `public const int FocusToAddYouthStart` | field |
| `FocusToAddAdultStart` | `public const int FocusToAddAdultStart` | field |
| `FocusToAddMiddleAgedStart` | `public const int FocusToAddMiddleAgedStart` | field |
| `FocusToAddElderlyStart` | `public const int FocusToAddElderlyStart` | field |
| `AttributeToAddYouthStart` | `public const int AttributeToAddYouthStart` | field |
| `AttributeToAddAdultStart` | `public const int AttributeToAddAdultStart` | field |
| `AttributeToAddMiddleAgedStart` | `public const int AttributeToAddMiddleAgedStart` | field |
| `AttributeToAddElderlyStart` | `public const int AttributeToAddElderlyStart` | field |
| `MotherNarrativeCharacterStringId` | `public const string MotherNarrativeCharacterStringId` | field |
| `FatherNarrativeCharacterStringId` | `public const string FatherNarrativeCharacterStringId` | field |
| `PlayerChildhoodCharacterStringId` | `public const string PlayerChildhoodCharacterStringId` | field |
| `PlayerEducationCharacterStringId` | `public const string PlayerEducationCharacterStringId` | field |
| `PlayerYouthCharacterStringId` | `public const string PlayerYouthCharacterStringId` | field |
| `PlayerAdulthoodCharacterStringId` | `public const string PlayerAdulthoodCharacterStringId` | field |
| `PlayerAgeSelectionCharacterStringId` | `public const string PlayerAgeSelectionCharacterStringId` | field |
| `HorseNarrativeCharacterStringId` | `public const string HorseNarrativeCharacterStringId` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ICharacterCreationContentHandler](../../campaign/ICharacterCreationContentHandler/)
- [same namespace AgingCampaignBehavior](../AgingCampaignBehavior/)
- [same namespace AllianceCampaignBehavior](../AllianceCampaignBehavior/)
- [same namespace BackstoryCampaignBehavior](../BackstoryCampaignBehavior/)
- [same namespace BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior/)
