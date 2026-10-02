---
title: "EncyclopediaSearchResultVM"
description: "EncyclopediaSearchResultVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 6 exposed members (2 methods, 2 properties, 1 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaSearchResultVM.cs."
---
# EncyclopediaSearchResultVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaSearchResultVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaSearchResultVM.cs`

## Overview

EncyclopediaSearchResultVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaSearchResultVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is EncyclopediaSearchResultVM → ViewModel. It exposes 6 public/protected members: 2 methods, 2 properties, 1 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncyclopediaSearchResultVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia) the module directory; inheritance chain EncyclopediaSearchResultVM → ViewModel. The surface is method-led (methods 2/6, properties 2/6), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaSearchResultVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OrgNameText` | `public string OrgNameText` | property |
| `EncyclopediaSearchResultVM` | `public EncyclopediaSearchResultVM(EncyclopediaListItem source, string searchedText, int matchStartIndex)` | constructor |
| `UpdateSearchedText` | `public void UpdateSearchedText(string searchedText)` | method |
| `Execute` | `public void Execute()` | method |
| `NameText` | `public string NameText` | property |
| `LinkId` | `public string LinkId` | field |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace EncyclopediaHomeVM](../EncyclopediaHomeVM)
- [same namespace EncyclopediaLinkVM](../EncyclopediaLinkVM)
- [same namespace EncyclopediaNavigatorVM](../EncyclopediaNavigatorVM)
- [same namespace EncyclopediaPageChangedEvent](../EncyclopediaPageChangedEvent)
