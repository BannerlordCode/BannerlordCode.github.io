---
title: "PartyUpgradeRequirementWidget"
description: "PartyUpgradeRequirementWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 7 exposed members (1 methods, 5 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyUpgradeRequirementWidget.cs."
---
# PartyUpgradeRequirementWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class PartyUpgradeRequirementWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyUpgradeRequirementWidget.cs`

## Overview

PartyUpgradeRequirementWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyUpgradeRequirementWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is PartyUpgradeRequirementWidget → Widget. It exposes 7 public/protected members: 1 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyUpgradeRequirementWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party) the module directory; inheritance chain PartyUpgradeRequirementWidget → Widget. The surface is property-led (properties 5/7, methods 1/7), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyUpgradeRequirementWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PartyUpgradeRequirementWidget` | `public PartyUpgradeRequirementWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `RequirementId` | `public string RequirementId` | property |
| `IsSufficient` | `public bool IsSufficient` | property |
| `IsPerkRequirement` | `public bool IsPerkRequirement` | property |
| `NormalColor` | `public Color NormalColor` | property |
| `InsufficientColor` | `public Color InsufficientColor` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace PartyFormationDropdownWidget](../PartyFormationDropdownWidget)
- [same namespace PartyHeaderToggleWidget](../PartyHeaderToggleWidget)
- [same namespace PartyHealthFillBarWidget](../PartyHealthFillBarWidget)
- [same namespace PartyListPanel](../PartyListPanel)
