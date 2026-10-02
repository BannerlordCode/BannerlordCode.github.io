---
title: "GauntletMenuBaseView"
description: "GauntletMenuBaseView: a public class in SandBox.GauntletUI.Menu, inheriting MenuView; 12 exposed members (11 methods, 1 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.GauntletUI/Menu/GauntletMenuBaseView.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletMenuBaseView

**Namespace:** `SandBox.GauntletUI.Menu`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletMenuBaseView : MenuView`
**File:** `SandBox.GauntletUI/Menu/GauntletMenuBaseView.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

GauntletMenuBaseView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Menu/GauntletMenuBaseView.cs. It is a public class, implementing/inheriting MenuView; the inheritance chain is GauntletMenuBaseView → MenuView → SandboxView. It exposes 12 public/protected members: 11 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletMenuBaseView lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.GauntletUI.Menu`, inheritance chain GauntletMenuBaseView → MenuView → SandboxView. The surface is method-led (methods 11/12, properties 1/12), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Menu/GauntletMenuBaseView.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GameMenuDataSource` | `public GameMenuVM GameMenuDataSource` | property |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `OnActivate` | `protected override void OnActivate()` | method |
| `OnDeactivate` | `protected override void OnDeactivate()` | method |
| `OnResume` | `protected override void OnResume()` | method |
| `OnMenuContextRefreshed` | `protected override void OnMenuContextRefreshed()` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | method |
| `OnMapConversationActivated` | `protected override void OnMapConversationActivated()` | method |
| `OnMapConversationDeactivated` | `protected override void OnMapConversationDeactivated()` | method |
| `OnMenuContextUpdated` | `protected override void OnMenuContextUpdated(MenuContext newMenuContext)` | method |
| `OnBackgroundMeshNameSet` | `protected override void OnBackgroundMeshNameSet(string name)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MenuView](../MenuView/)
- [same namespace GauntletMenuBackground](../GauntletMenuBackground/)
- [same namespace GauntletMenuOverlayBaseView](../GauntletMenuOverlayBaseView/)
- [same namespace GauntletMenuRecruitVolunteersView](../GauntletMenuRecruitVolunteersView/)
- [same namespace GauntletMenuTournamentLeaderboardView](../GauntletMenuTournamentLeaderboardView/)
