---
title: "GameMenuPartyItemVM"
description: "GameMenuPartyItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay, inheriting ViewModel; 40 exposed members (11 methods, 25 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/GameMenuPartyItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameMenuPartyItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class GameMenuPartyItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/GameMenuPartyItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

GameMenuPartyItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/GameMenuPartyItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is GameMenuPartyItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 40 public/protected members: 11 methods, 25 properties, 4 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameMenuPartyItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay`, inheritance chain GameMenuPartyItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 25/40, methods 11/40), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/GameMenuPartyItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GameMenuPartyItemVM` | `public GameMenuPartyItemVM()` | constructor |
| `GameMenuPartyItemVM` | `public GameMenuPartyItemVM(Action<GameMenuPartyItemVM>onSetAsContextMenuActiveItem, Settlement settlement)` | constructor |
| `GameMenuPartyItemVM` | `public GameMenuPartyItemVM(Action<GameMenuPartyItemVM>onSetAsContextMenuActiveItem, PartyBase item, bool canShowQuest)` | constructor |
| `GameMenuPartyItemVM` | `public GameMenuPartyItemVM(Action<GameMenuPartyItemVM>onSetAsContextMenuActiveItem, CharacterObject character, bool useCivilianEquipment)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteSetAsContextMenuItem` | `public void ExecuteSetAsContextMenuItem()` | method |
| `ExecuteOpenEncyclopedia` | `public void ExecuteOpenEncyclopedia()` | method |
| `ExecuteCloseTooltip` | `public void ExecuteCloseTooltip()` | method |
| `ExecuteOpenTooltip` | `public void ExecuteOpenTooltip()` | method |
| `RefreshProperties` | `public void RefreshProperties()` | method |
| `RefreshQuestStatus` | `public void RefreshQuestStatus()` | method |
| `RefreshVisual` | `public void RefreshVisual()` | method |
| `RefreshCounts` | `public void RefreshCounts()` | method |
| `GetPartyDescriptionTextFromValues` | `public string GetPartyDescriptionTextFromValues()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `Relation` | `public int Relation` | property |
| `MBBindingList` | `public MBBindingList<QuestMarkerVM>Quests` | property |
| `IsHighlightEnabled` | `public bool IsHighlightEnabled` | property |
| `IsCharacterInPrison` | `public bool IsCharacterInPrison` | property |
| `HasShips` | `public bool HasShips` | property |
| `IsIdle` | `public bool IsIdle` | property |
| `IsPlayer` | `public bool IsPlayer` | property |
| `IsEnemy` | `public bool IsEnemy` | property |
| `IsAlly` | `public bool IsAlly` | property |
| `IsNeutral` | `public bool IsNeutral` | property |
| `IsMergedWithArmy` | `public bool IsMergedWithArmy` | property |
| `NameText` | `public string NameText` | property |
| `SettlementPath` | `public string SettlementPath` | property |
| `LocationText` | `public string LocationText` | property |
| `PowerText` | `public string PowerText` | property |
| `DescriptionText` | `public string DescriptionText` | property |
| `ProfessionText` | `public string ProfessionText` | property |
| `EncyclopediaCursorEffect` | `public string EncyclopediaCursorEffect` | property |
| `Visual` | `public CharacterImageIdentifierVM Visual` | property |
| `Banner_9` | `public BannerImageIdentifierVM Banner_9` | property |
| `PartySize` | `public int PartySize` | property |
| `PartyWoundedSize` | `public int PartyWoundedSize` | property |
| `ShipCount` | `public int ShipCount` | property |
| `PartySizeLbl` | `public string PartySizeLbl` | property |
| `IsLeader` | `public bool IsLeader` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ArmyMenuOverlayVM](../ArmyMenuOverlayVM/)
- [same namespace EncounterMenuOverlayVM](../EncounterMenuOverlayVM/)
- [same namespace GameMenuOverlay](../GameMenuOverlay/)
- [same namespace GameMenuOverlayActionVM](../GameMenuOverlayActionVM/)
