---
title: "NarrativeMenu"
description: "NarrativeMenu: a public class in TaleWorlds.CampaignSystem.CharacterCreationContent; 7 exposed members (3 methods, 2 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/CharacterCreationContent/NarrativeMenu.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# NarrativeMenu

**Namespace:** `TaleWorlds.CampaignSystem.CharacterCreationContent`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public sealed class NarrativeMenu`
**File:** `TaleWorlds.CampaignSystem/CharacterCreationContent/NarrativeMenu.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

NarrativeMenu lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CharacterCreationContent/NarrativeMenu.cs. It is a public class (sealed); the inheritance chain is NarrativeMenu. It exposes 7 public/protected members: 3 methods, 2 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NarrativeMenu lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.CharacterCreationContent`, inheritance chain NarrativeMenu. The surface is method-led (methods 3/7, properties 2/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CharacterCreationContent/NarrativeMenu.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `List` | `public List<NarrativeMenuCharacter>Characters` | property |
| `MBReadOnlyList` | `public MBReadOnlyList<NarrativeMenuOption>CharacterCreationMenuOptions` | property |
| `NarrativeMenu` | `public NarrativeMenu(string stringId, string inputMenuId, string outputMenuId, TextObject title, TextObject description, List<NarrativeMenuCharacter>characters, NarrativeMenu.GetNarrativeMenuCharacterArgsDelegate getNarrativeMenuCharacterArgs)` | constructor |
| `AddNarrativeMenuOption` | `public void AddNarrativeMenuOption(NarrativeMenuOption narrativeMenuOption)` | method |
| `RemoveNarrativeMenuOption` | `public void RemoveNarrativeMenuOption(NarrativeMenuOption narrativeMenuOption)` | method |
| `List` | `public delegate List<NarrativeMenuCharacterArgs>GetNarrativeMenuCharacterArgsDelegate(CultureObject culture, string occupationType, CharacterCreationManager characterCreationManager);` | method |
| `List` | `public delegate List<NarrativeMenuCharacterArgs>GetNarrativeMenuCharacterArgsDelegate(CultureObject culture, string occupationType, CharacterCreationManager characterCreationManager)` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CharacterCreationBannerEditorStage](../CharacterCreationBannerEditorStage/)
- [same namespace CharacterCreationClanNamingStage](../CharacterCreationClanNamingStage/)
- [same namespace CharacterCreationContent](../CharacterCreationContent/)
- [same namespace CharacterCreationCultureStage](../CharacterCreationCultureStage/)
