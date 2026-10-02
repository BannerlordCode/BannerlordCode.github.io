---
title: "MenuView"
description: "MenuView: a public class in SandBox.View, inheriting SandboxView; 15 exposed members (11 methods, 3 properties, 1 fields). Source: SandBox.View/Menu/MenuView.cs."
---
# MenuView

**Namespace:** `SandBox.View.Menu`
**Module:** `SandBox.View`
**Type:** `public abstract class MenuView : SandboxView`
**File:** `SandBox.View/Menu/MenuView.cs`

## Overview

MenuView lives in the SandBox.View module, source file SandBox.View/Menu/MenuView.cs. It is a public class (abstract), implementing/inheriting SandboxView; the inheritance chain is MenuView → SandboxView. It exposes 15 public/protected members: 11 methods, 3 properties, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MenuView is a top-level type in SandBox.View, namespace differing from (SandBox.View.Menu) the module directory; inheritance chain MenuView → SandboxView. The surface is method-led (methods 11/15, properties 3/15), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Menu/MenuView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ShouldUpdateMenuAfterRemoved` | `public virtual bool ShouldUpdateMenuAfterRemoved` | property |
| `MenuViewContext` | `public MenuViewContext MenuViewContext` | property |
| `MenuContext` | `public MenuContext MenuContext` | property |
| `OnMenuContextUpdated` | `protected internal virtual void OnMenuContextUpdated(MenuContext newMenuContext)` | method |
| `OnMenuContextRefreshed` | `protected internal virtual void OnMenuContextRefreshed()` | method |
| `OnOverlayTypeChange` | `protected internal virtual void OnOverlayTypeChange(GameMenu.MenuOverlayType newType)` | method |
| `OnCharacterDeveloperOpened` | `protected internal virtual void OnCharacterDeveloperOpened()` | method |
| `OnCharacterDeveloperClosed` | `protected internal virtual void OnCharacterDeveloperClosed()` | method |
| `OnBackgroundMeshNameSet` | `protected internal virtual void OnBackgroundMeshNameSet(string name)` | method |
| `OnHourlyTick` | `protected internal virtual void OnHourlyTick()` | method |
| `OnResume` | `protected internal virtual void OnResume()` | method |
| `OnMapConversationActivated` | `protected internal virtual void OnMapConversationActivated()` | method |
| `OnMapConversationDeactivated` | `protected internal virtual void OnMapConversationDeactivated()` | method |
| `GetTutorialContext` | `protected internal virtual TutorialContexts GetTutorialContext()` | method |
| `ContextAlphaModifier` | `protected const float ContextAlphaModifier` | field |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface SandboxView](../SandboxView)
- [same namespace MenuBackgroundView](../MenuBackgroundView)
- [same namespace MenuBaseView](../MenuBaseView)
- [same namespace MenuOverlayBaseView](../MenuOverlayBaseView)
- [same namespace MenuRecruitVolunteersView](../MenuRecruitVolunteersView)
