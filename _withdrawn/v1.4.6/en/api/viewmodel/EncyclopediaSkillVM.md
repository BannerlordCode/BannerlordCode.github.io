---
title: "EncyclopediaSkillVM"
description: "EncyclopediaSkillVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items, inheriting ViewModel; 5 exposed members (1 methods, 3 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaSkillVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EncyclopediaSkillVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaSkillVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaSkillVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

EncyclopediaSkillVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaSkillVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is EncyclopediaSkillVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 5 public/protected members: 1 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncyclopediaSkillVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items`, inheritance chain EncyclopediaSkillVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 3/5, methods 1/5), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaSkillVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `EncyclopediaSkillVM` | `public EncyclopediaSkillVM(SkillObject skill, int skillValue)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `Hint` | `public BasicTooltipViewModel Hint` | property |
| `SkillValue` | `public int SkillValue` | property |
| `SkillId` | `public string SkillId` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace EncyclopediaDwellingVM](../EncyclopediaDwellingVM/)
- [same namespace EncyclopediaFactionVM](../EncyclopediaFactionVM/)
- [same namespace EncyclopediaFamilyMemberVM](../EncyclopediaFamilyMemberVM/)
- [same namespace EncyclopediaHistoryEventVM](../EncyclopediaHistoryEventVM/)
