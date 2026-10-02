---
title: "ClanFiefsVM"
description: "ClanFiefsVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories. 7 public members (0 static)."
---

<!-- v147-skeleton -->
# ClanFiefsVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class ClanFiefsVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanFiefsVM.cs`

## Overview

`ClanFiefsVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ClanFiefsVM`.
- **Instance members** (6): `CreateSettlementItem`, `RefreshValues`, `OnFinalize`, `RefreshAllLists`, `SelectFief`, `ExecuteAssignGovernor`.
- **Extension points** (3): `CreateSettlementItem`, `RefreshValues`, `OnFinalize`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `CreateSettlementItem` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 4 arguments: `Settlement settlement`, `Action<ClanSettlementItemVM> onSelection`, `Action onShowSendMembers`, `ITeleportationCampaignBehavior teleportationBehavior`. Returns `ClanSettlementItemVM`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `ExecuteAssignGovernor` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshAllLists` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `SelectFief` | method | Instance entry point. Takes 1 argument: `Settlement settlement`. |
| `ClanFiefsVM` | ctor | Instance entry point. Takes 2 arguments: `Action onRefresh`, `Action<ClanCardSelectionInfo> openCardSelectionPopup`. Returns ``. |

- Constructed as `public ClanFiefsVM(Action onRefresh, Action<ClanCardSelectionInfo> openCardSelectionPopup)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new ClanFiefsVM(onRefresh, openCardSelectionPopup);

// Command the widget invokes on confirm:
viewModel.CreateSettlementItem(settlement, onSelection, onShowSendMembers, teleportationBehavior);
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanFiefsVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ClanCardSelectionInfo](../ClanCardSelectionInfo/) — `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`.
- [ClanFiefsSortControllerVM](../ClanFiefsSortControllerVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`.
- [HintViewModel](../HintViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.
- [CampaignUIHelper](../CampaignUIHelper/) — `TaleWorlds.CampaignSystem.ViewModelCollection`.
- [Town](../../campaign/Town/) — `TaleWorlds.CampaignSystem.Settlements`.
- [ClanCardSelectionItemInfo](../ClanCardSelectionItemInfo/) — `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`.
- [CharacterImageIdentifier](../../core-extra/CharacterImageIdentifier/) — `TaleWorlds.Core.ImageIdentifiers`.
- [CardSelectionItemSpriteType](../CardSelectionItemSpriteType/) — `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`.
- [ClanCardSelectionItemPropertyInfo](../ClanCardSelectionItemPropertyInfo/) — `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.

Section: [api/viewmodel/](../) — the other types in this bucket.
