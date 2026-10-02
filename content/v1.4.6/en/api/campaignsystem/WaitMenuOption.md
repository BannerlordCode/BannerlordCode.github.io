---
title: "WaitMenuOption"
description: "WaitMenuOption: a public class in TaleWorlds.CampaignSystem; 12 exposed members (5 methods, 5 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameMenus/WaitMenuOption.cs."
---
# WaitMenuOption

**Namespace:** `TaleWorlds.CampaignSystem.GameMenus`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class WaitMenuOption`
**File:** `TaleWorlds.CampaignSystem/GameMenus/WaitMenuOption.cs`

## Overview

WaitMenuOption lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameMenus/WaitMenuOption.cs. It is a public class; the inheritance chain is WaitMenuOption. It exposes 12 public/protected members: 5 methods, 5 properties, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WaitMenuOption is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameMenus) the module directory; inheritance chain WaitMenuOption. The surface is method-led (methods 5/12, properties 5/12), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameMenus/WaitMenuOption.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Priority` | `public int Priority` | property |
| `GetConditionsHold` | `public bool GetConditionsHold(Game game, MapState mapState)` | method |
| `Text` | `public TextObject Text` | property |
| `IdString` | `public string IdString` | property |
| `Tooltip` | `public string Tooltip` | property |
| `IsLeave` | `public bool IsLeave` | property |
| `RunConsequence` | `public void RunConsequence(Game game, MapState mapState)` | method |
| `Deserialize` | `public void Deserialize(XmlNode node, Type typeOfWaitMenusCallbacks)` | method |
| `OnConditionDelegate` | `public delegate bool OnConditionDelegate(MenuCallbackArgs args);` | method |
| `OnConsequenceDelegate` | `public delegate void OnConsequenceDelegate(MenuCallbackArgs args);` | method |
| `OnConditionDelegate` | `public delegate bool OnConditionDelegate(MenuCallbackArgs args)` | nested type |
| `OnConsequenceDelegate` | `public delegate void OnConsequenceDelegate(MenuCallbackArgs args)` | nested type |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GameMenu](../GameMenu)
- [same namespace GameMenuCallbackManager](../GameMenuCallbackManager)
- [same namespace GameMenuEventHandler](../GameMenuEventHandler)
- [same namespace GameMenuEventHandlerDelegate](../GameMenuEventHandlerDelegate)
