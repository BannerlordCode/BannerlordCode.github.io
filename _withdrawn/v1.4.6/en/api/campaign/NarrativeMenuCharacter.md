---
title: "NarrativeMenuCharacter"
description: "NarrativeMenuCharacter: a public class in TaleWorlds.CampaignSystem.CharacterCreationContent; 24 exposed members (12 methods, 10 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/CharacterCreationContent/NarrativeMenuCharacter.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# NarrativeMenuCharacter

**Namespace:** `TaleWorlds.CampaignSystem.CharacterCreationContent`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class NarrativeMenuCharacter`
**File:** `TaleWorlds.CampaignSystem/CharacterCreationContent/NarrativeMenuCharacter.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

NarrativeMenuCharacter lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CharacterCreationContent/NarrativeMenuCharacter.cs. It is a public class; the inheritance chain is NarrativeMenuCharacter. It exposes 24 public/protected members: 12 methods, 10 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NarrativeMenuCharacter lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.CharacterCreationContent`, inheritance chain NarrativeMenuCharacter. The surface is method-led (methods 12/24, properties 10/24), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CharacterCreationContent/NarrativeMenuCharacter.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `BodyProperties` | `public BodyProperties BodyProperties` | property |
| `Race` | `public int Race` | property |
| `IsFemale` | `public bool IsFemale` | property |
| `Equipment` | `public MBEquipmentRoster Equipment` | property |
| `AnimationId` | `public string AnimationId` | property |
| `MountCreationKey` | `public MountCreationKey MountCreationKey` | property |
| `Item1Id` | `public string Item1Id` | property |
| `Item2Id` | `public string Item2Id` | property |
| `RightHandEquipmentIndex` | `public EquipmentIndex RightHandEquipmentIndex` | property |
| `LeftHandEquipmentIndex` | `public EquipmentIndex LeftHandEquipmentIndex` | property |
| `NarrativeMenuCharacter` | `public NarrativeMenuCharacter(string stringId, BodyProperties bodyProperties, int race, bool isFemale)` | constructor |
| `NarrativeMenuCharacter` | `public NarrativeMenuCharacter(string stringId)` | constructor |
| `UpdateBodyProperties` | `public void UpdateBodyProperties(BodyProperties bodyProperties, int race, bool isFemale)` | method |
| `SetEquipment` | `public void SetEquipment(MBEquipmentRoster equipment)` | method |
| `SetAnimationId` | `public void SetAnimationId(string animationId)` | method |
| `SetRightHandItem` | `public void SetRightHandItem(string itemId)` | method |
| `SetLeftHandItem` | `public void SetLeftHandItem(string itemId)` | method |
| `EquipRightHandItemWithEquipmentIndex` | `public void EquipRightHandItemWithEquipmentIndex(EquipmentIndex item)` | method |
| `EquipLeftHandItemWithEquipmentIndex` | `public void EquipLeftHandItemWithEquipmentIndex(EquipmentIndex item)` | method |
| `SetSpawnPointEntityId` | `public void SetSpawnPointEntityId(string spawnPointEntityId)` | method |
| `ChangeAge` | `public void ChangeAge(float age)` | method |
| `SetMountCreationKey` | `public void SetMountCreationKey(MountCreationKey mountCreationKey)` | method |
| `SetHorseItemId` | `public void SetHorseItemId(string itemId)` | method |
| `SetHarnessItemId` | `public void SetHarnessItemId(string itemId)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CharacterCreationBannerEditorStage](../CharacterCreationBannerEditorStage/)
- [same namespace CharacterCreationClanNamingStage](../CharacterCreationClanNamingStage/)
- [same namespace CharacterCreationContent](../CharacterCreationContent/)
- [same namespace CharacterCreationCultureStage](../CharacterCreationCultureStage/)
