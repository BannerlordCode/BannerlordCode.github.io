---
title: "CharacterDeveloperPerksContainerWidget"
description: "CharacterDeveloperPerksContainerWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 9 exposed members (3 methods, 5 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/CharacterDeveloperPerksContainerWidget.cs."
---
# CharacterDeveloperPerksContainerWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class CharacterDeveloperPerksContainerWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/CharacterDeveloperPerksContainerWidget.cs`

## Overview

CharacterDeveloperPerksContainerWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/CharacterDeveloperPerksContainerWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is CharacterDeveloperPerksContainerWidget → Widget. It exposes 9 public/protected members: 3 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterDeveloperPerksContainerWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper) the module directory; inheritance chain CharacterDeveloperPerksContainerWidget → Widget. The surface is property-led (properties 5/9, methods 3/9), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/CharacterDeveloperPerksContainerWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CharacterDeveloperPerksContainerWidget` | `public CharacterDeveloperPerksContainerWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `OnChildAdded` | `protected override void OnChildAdded(Widget child)` | method |
| `OnBeforeChildRemoved` | `protected override void OnBeforeChildRemoved(Widget child)` | method |
| `LeftScopeID` | `public string LeftScopeID` | property |
| `RightScopeID` | `public string RightScopeID` | property |
| `DownScopeID` | `public string DownScopeID` | property |
| `UpScopeID` | `public string UpScopeID` | property |
| `FirstScopeID` | `public string FirstScopeID` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CharacterDeveloperAttributeInspectionPopupWidget](../CharacterDeveloperAttributeInspectionPopupWidget)
- [same namespace CharacterDeveloperPerkSelectionItemButtonWidget](../CharacterDeveloperPerkSelectionItemButtonWidget)
- [same namespace CharacterDeveloperPerkSelectionWidget](../CharacterDeveloperPerkSelectionWidget)
- [same namespace CharacterDeveloperSkillVerticalSeperatorWidget](../CharacterDeveloperSkillVerticalSeperatorWidget)
