---
title: "MenuViewContext"
description: "MenuViewContext: a public class in SandBox.View.Menu, inheriting IMenuContextHandler; 30 exposed members (27 methods, 2 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.View/Menu/MenuViewContext.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MenuViewContext

**Namespace:** `SandBox.View.Menu`
**Module:** `SandBox.View`
**Type:** `public class MenuViewContext : IMenuContextHandler`
**File:** `SandBox.View/Menu/MenuViewContext.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MenuViewContext lives in the SandBox.View module, source file SandBox.View/Menu/MenuViewContext.cs. It is a public class, implementing/inheriting IMenuContextHandler; the inheritance chain is MenuViewContext → IMenuContextHandler. It exposes 30 public/protected members: 27 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MenuViewContext lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.View.Menu`, inheritance chain MenuViewContext → IMenuContextHandler. The surface is method-led (methods 27/30, properties 2/30), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Menu/MenuViewContext.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MenuContext` | `public MenuContext MenuContext` | property |
| `List` | `public List<MenuView>MenuViews` | property |
| `MenuViewContext` | `public MenuViewContext(ScreenBase screen, MenuContext menuContext)` | constructor |
| `UpdateMenuContext` | `public void UpdateMenuContext(MenuContext menuContext)` | method |
| `AddLayer` | `public void AddLayer(ScreenLayer layer)` | method |
| `RemoveLayer` | `public void RemoveLayer(ScreenLayer layer)` | method |
| `FindLayer` | `public T FindLayer<T>() where T : ScreenLayer` | method |
| `FindLayer` | `public T FindLayer<T>(string name) where T : ScreenLayer` | method |
| `OnFrameTick` | `public void OnFrameTick(float dt)` | method |
| `OnResume` | `public void OnResume()` | method |
| `OnHourlyTick` | `public void OnHourlyTick()` | method |
| `OnActivate` | `public void OnActivate()` | method |
| `OnDeactivate` | `public void OnDeactivate()` | method |
| `OnInitialize` | `public void OnInitialize()` | method |
| `OnFinalize` | `public void OnFinalize()` | method |
| `StopAllSounds` | `public void StopAllSounds()` | method |
| `OnMapConversationActivated` | `public void OnMapConversationActivated()` | method |
| `OnMapConversationDeactivated` | `public void OnMapConversationDeactivated()` | method |
| `OnGameStateDeactivate` | `public void OnGameStateDeactivate()` | method |
| `OnGameStateInitialize` | `public void OnGameStateInitialize()` | method |
| `OnGameStateFinalize` | `public void OnGameStateFinalize()` | method |
| `CloseCharacterDeveloper` | `public void CloseCharacterDeveloper()` | method |
| `AddMenuView` | `public MenuView AddMenuView<T>(params object[]parameters) where T : MenuView, new()` | method |
| `GetMenuView` | `public T GetMenuView<T>() where T : MenuView` | method |
| `RemoveMenuView` | `public void RemoveMenuView(MenuView menuView)` | method |
| `CloseTownManagement` | `public void CloseTownManagement()` | method |
| `CloseRecruitVolunteers` | `public void CloseRecruitVolunteers()` | method |
| `CloseTournamentLeaderboard` | `public void CloseTournamentLeaderboard()` | method |
| `CloseTroopSelection` | `public void CloseTroopSelection()` | method |
| `CreateTroopSelectionView` | `protected virtual MenuView CreateTroopSelectionView(TroopRoster fullRoster, TroopRoster initialSelections, List<Ship>eligibleShips, Func<CharacterObject, bool>canChangeStatusOfTroop, Action<TroopRoster>onDone, int maxSelectableTroopCount, int minSelectableTroopCount, bool isNavalRaid)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IMenuContextHandler](../../campaign/IMenuContextHandler/)
- [same namespace MenuBackgroundView](../MenuBackgroundView/)
- [same namespace MenuBaseView](../MenuBaseView/)
- [same namespace MenuOverlayBaseView](../MenuOverlayBaseView/)
- [same namespace MenuRecruitVolunteersView](../MenuRecruitVolunteersView/)
