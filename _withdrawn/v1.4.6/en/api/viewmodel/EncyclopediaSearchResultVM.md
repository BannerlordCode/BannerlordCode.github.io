---
title: "EncyclopediaSearchResultVM"
description: "EncyclopediaSearchResultVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia, inheriting ViewModel; 6 exposed members (2 methods, 2 properties, 1 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaSearchResultVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EncyclopediaSearchResultVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaSearchResultVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaSearchResultVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

EncyclopediaSearchResultVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaSearchResultVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is EncyclopediaSearchResultVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 6 public/protected members: 2 methods, 2 properties, 1 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncyclopediaSearchResultVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia`, inheritance chain EncyclopediaSearchResultVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 2/6, properties 2/6), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaSearchResultVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OrgNameText` | `public string OrgNameText` | property |
| `EncyclopediaSearchResultVM` | `public EncyclopediaSearchResultVM(EncyclopediaListItem source, string searchedText, int matchStartIndex)` | constructor |
| `UpdateSearchedText` | `public void UpdateSearchedText(string searchedText)` | method |
| `Execute` | `public void Execute()` | method |
| `NameText` | `public string NameText` | property |
| `LinkId` | `public string LinkId` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace EncyclopediaHomeVM](../EncyclopediaHomeVM/)
- [same namespace EncyclopediaLinkVM](../EncyclopediaLinkVM/)
- [same namespace EncyclopediaNavigatorVM](../EncyclopediaNavigatorVM/)
- [same namespace EncyclopediaPageChangedEvent](../EncyclopediaPageChangedEvent/)
