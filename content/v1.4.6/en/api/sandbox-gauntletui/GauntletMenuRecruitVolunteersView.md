---
title: "GauntletMenuRecruitVolunteersView"
description: "GauntletMenuRecruitVolunteersView: a public class in SandBox.GauntletUI, inheriting MenuView; 7 exposed members (6 methods, 1 properties, 0 fields). Source: SandBox.GauntletUI/Menu/GauntletMenuRecruitVolunteersView.cs."
---
# GauntletMenuRecruitVolunteersView

**Namespace:** `SandBox.GauntletUI.Menu`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletMenuRecruitVolunteersView : MenuView`
**File:** `SandBox.GauntletUI/Menu/GauntletMenuRecruitVolunteersView.cs`

## Overview

GauntletMenuRecruitVolunteersView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Menu/GauntletMenuRecruitVolunteersView.cs. It is a public class, implementing/inheriting MenuView; the inheritance chain is GauntletMenuRecruitVolunteersView → MenuView. It exposes 7 public/protected members: 6 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletMenuRecruitVolunteersView is a top-level type in SandBox.GauntletUI, namespace differing from (SandBox.GauntletUI.Menu) the module directory; inheritance chain GauntletMenuRecruitVolunteersView → MenuView. The surface is method-led (methods 6/7, properties 1/7), so it mostly exposes operations. MenuView on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Menu/GauntletMenuRecruitVolunteersView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ShouldUpdateMenuAfterRemoved` | `public override bool ShouldUpdateMenuAfterRemoved` | property |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | method |
| `GetTutorialContext` | `protected override TutorialContexts GetTutorialContext()` | method |
| `OnMapConversationActivated` | `protected override void OnMapConversationActivated()` | method |
| `OnMapConversationDeactivated` | `protected override void OnMapConversationDeactivated()` | method |

## See Also

- [↑ sandbox-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GauntletMenuBackground](../GauntletMenuBackground)
- [same namespace GauntletMenuBaseView](../GauntletMenuBaseView)
- [same namespace GauntletMenuOverlayBaseView](../GauntletMenuOverlayBaseView)
- [same namespace GauntletMenuTournamentLeaderboardView](../GauntletMenuTournamentLeaderboardView)
