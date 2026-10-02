---
title: "HeroVM"
description: "HeroVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 15 exposed members (5 methods, 9 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/HeroVM.cs."
---
# HeroVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class HeroVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/HeroVM.cs`

## Overview

HeroVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/HeroVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is HeroVM → ViewModel. It exposes 15 public/protected members: 5 methods, 9 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HeroVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace matching the module directory; inheritance chain HeroVM → ViewModel. The surface is property-led (properties 9/15, methods 5/15), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/HeroVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Hero` | `public Hero Hero` | property |
| `HeroVM` | `public HeroVM(Hero hero, bool useCivilian = false)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteLink` | `public void ExecuteLink()` | method |
| `ExecuteBeginHint` | `public virtual void ExecuteBeginHint()` | method |
| `ExecuteEndHint` | `public virtual void ExecuteEndHint()` | method |
| `IsDead` | `public bool IsDead` | property |
| `IsChild` | `public bool IsChild` | property |
| `IsKingdomLeader` | `public bool IsKingdomLeader` | property |
| `Relation` | `public int Relation` | property |
| `ImageIdentifier` | `public CharacterImageIdentifierVM ImageIdentifier` | property |
| `NameText` | `public string NameText` | property |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner` | property |
| `ClanBanner_9` | `public BannerImageIdentifierVM ClanBanner_9` | property |
| `GetRelation` | `public static int GetRelation(Hero hero)` | method |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionCampaignOptionData](../ActionCampaignOptionData)
- [same namespace BannerEditorVM](../BannerEditorVM)
- [same namespace BooleanCampaignOptionData](../BooleanCampaignOptionData)
- [same namespace CampaignOptionData](../CampaignOptionData)
