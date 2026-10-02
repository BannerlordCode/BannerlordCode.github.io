---
title: "PartyScreenWidget"
description: "PartyScreenWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party, inheriting Widget; 26 exposed members (4 methods, 21 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyScreenWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PartyScreenWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class PartyScreenWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyScreenWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

PartyScreenWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyScreenWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is PartyScreenWidget → Widget → PropertyOwnerObject. It exposes 26 public/protected members: 4 methods, 21 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyScreenWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party`, inheritance chain PartyScreenWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 21/26, methods 4/26), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyScreenWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MainScrollPanel` | `public ScrollablePanel MainScrollPanel` | property |
| `OtherScrollPanel` | `public ScrollablePanel OtherScrollPanel` | property |
| `TransferInputKeyVisual` | `public InputKeyVisualWidget TransferInputKeyVisual` | property |
| `PartyScreenWidget` | `public PartyScreenWidget(UIContext context) : base(context)` | constructor |
| `OnConnectedToRoot` | `protected override void OnConnectedToRoot()` | method |
| `OnDisconnectedFromRoot` | `protected override void OnDisconnectedFromRoot()` | method |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `UpgradePopupParent` | `public Widget UpgradePopupParent` | property |
| `RecruitPopupParent` | `public Widget RecruitPopupParent` | property |
| `TakeAllPrisonersInputKeyVisualParent` | `public Widget TakeAllPrisonersInputKeyVisualParent` | property |
| `DismissAllPrisonersInputKeyVisualParent` | `public Widget DismissAllPrisonersInputKeyVisualParent` | property |
| `MainPartyTroopSize` | `public int MainPartyTroopSize` | property |
| `IsPrisonerWarningEnabled` | `public bool IsPrisonerWarningEnabled` | property |
| `IsOtherTroopWarningEnabled` | `public bool IsOtherTroopWarningEnabled` | property |
| `IsTroopWarningEnabled` | `public bool IsTroopWarningEnabled` | property |
| `TroopLabel` | `public TextWidget TroopLabel` | property |
| `PrisonerLabel` | `public TextWidget PrisonerLabel` | property |
| `OtherTroopLabel` | `public TextWidget OtherTroopLabel` | property |
| `OtherMemberList` | `public ListPanel OtherMemberList` | property |
| `OtherPrisonerList` | `public ListPanel OtherPrisonerList` | property |
| `MainMemberList` | `public ListPanel MainMemberList` | property |
| `MainPrisonerList` | `public ListPanel MainPrisonerList` | property |
| `ScrollToCharacter` | `public bool ScrollToCharacter` | property |
| `ScrollCharacterId` | `public string ScrollCharacterId` | property |
| `IsScrollTargetPrisoner` | `public bool IsScrollTargetPrisoner` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace PartyFormationDropdownWidget](../PartyFormationDropdownWidget/)
- [same namespace PartyHeaderToggleWidget](../PartyHeaderToggleWidget/)
- [same namespace PartyHealthFillBarWidget](../PartyHealthFillBarWidget/)
- [same namespace PartyListPanel](../PartyListPanel/)
