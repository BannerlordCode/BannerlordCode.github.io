---
title: "ICharacterCreationContentHandler"
description: "ICharacterCreationContentHandler: a public interface in TaleWorlds.CampaignSystem.CharacterCreationContent; 4 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/CharacterCreationContent/ICharacterCreationContentHandler.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ICharacterCreationContentHandler

**Namespace:** `TaleWorlds.CampaignSystem.CharacterCreationContent`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface ICharacterCreationContentHandler`
**File:** `TaleWorlds.CampaignSystem/CharacterCreationContent/ICharacterCreationContentHandler.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

ICharacterCreationContentHandler lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CharacterCreationContent/ICharacterCreationContentHandler.cs. It is a public interface; the inheritance chain is ICharacterCreationContentHandler. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ICharacterCreationContentHandler lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.CharacterCreationContent`, inheritance chain ICharacterCreationContentHandler. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CharacterCreationContent/ICharacterCreationContentHandler.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `InitializeContent` | `void InitializeContent(CharacterCreationManager characterCreationManager);` | method |
| `AfterInitializeContent` | `void AfterInitializeContent(CharacterCreationManager characterCreationManager);` | method |
| `OnStageCompleted` | `void OnStageCompleted(CharacterCreationStageBase stage);` | method |
| `OnCharacterCreationFinalize` | `void OnCharacterCreationFinalize(CharacterCreationManager characterCreationManager);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CharacterCreationBannerEditorStage](../CharacterCreationBannerEditorStage/)
- [same namespace CharacterCreationClanNamingStage](../CharacterCreationClanNamingStage/)
- [same namespace CharacterCreationContent](../CharacterCreationContent/)
- [same namespace CharacterCreationCultureStage](../CharacterCreationCultureStage/)
