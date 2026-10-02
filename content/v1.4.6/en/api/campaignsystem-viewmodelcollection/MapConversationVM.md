---
title: "MapConversationVM"
description: "MapConversationVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 7 exposed members (3 methods, 3 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapConversation/MapConversationVM.cs."
---
# MapConversationVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapConversation`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class MapConversationVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapConversation/MapConversationVM.cs`

## Overview

MapConversationVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapConversation/MapConversationVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MapConversationVM → ViewModel. It exposes 7 public/protected members: 3 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapConversationVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapConversation) the module directory; inheritance chain MapConversationVM → ViewModel. The surface is method-led (methods 3/7, properties 3/7), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapConversation/MapConversationVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapConversationVM` | `public MapConversationVM(Action onContinue, Func<string>getContinueInputText)` | constructor |
| `ExecuteContinue` | `public void ExecuteContinue()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `Tick` | `public void Tick(float dt)` | method |
| `DialogController` | `public MissionConversationVM DialogController` | property |
| `TableauData` | `public object TableauData` | property |
| `IsBarterActive` | `public bool IsBarterActive` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
