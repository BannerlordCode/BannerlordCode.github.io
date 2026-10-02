---
title: "GameMenuOverlayActionVM"
description: "GameMenuOverlayActionVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay, inheriting StringItemWithEnabledAndHintVM; 2 exposed members (0 methods, 1 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/GameMenuOverlayActionVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameMenuOverlayActionVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class GameMenuOverlayActionVM : StringItemWithEnabledAndHintVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/GameMenuOverlayActionVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

GameMenuOverlayActionVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/GameMenuOverlayActionVM.cs. It is a public class, implementing/inheriting StringItemWithEnabledAndHintVM; the inheritance chain is GameMenuOverlayActionVM → StringItemWithEnabledAndHintVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 2 public/protected members: 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameMenuOverlayActionVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay`, inheritance chain GameMenuOverlayActionVM → StringItemWithEnabledAndHintVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 1/2, methods 0/2), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/GameMenuOverlayActionVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GameMenuOverlayActionVM` | `public GameMenuOverlayActionVM(Action<object>onExecute, string item, bool isEnabled, object identifier, TextObject hint = null) : base(onExecute, item, isEnabled, identifier, hint)` | constructor |
| `IsHiglightEnabled` | `public bool IsHiglightEnabled` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface StringItemWithEnabledAndHintVM](../StringItemWithEnabledAndHintVM/)
- [same namespace ArmyMenuOverlayVM](../ArmyMenuOverlayVM/)
- [same namespace EncounterMenuOverlayVM](../EncounterMenuOverlayVM/)
- [same namespace GameMenuOverlay](../GameMenuOverlay/)
- [same namespace GameMenuOverlayFactory](../GameMenuOverlayFactory/)
