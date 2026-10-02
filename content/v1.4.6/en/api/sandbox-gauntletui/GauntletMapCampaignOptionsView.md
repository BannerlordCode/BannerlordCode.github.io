---
title: "GauntletMapCampaignOptionsView"
description: "GauntletMapCampaignOptionsView: a public class in SandBox.GauntletUI, inheriting MapCampaignOptionsView; 5 exposed members (5 methods, 0 properties, 0 fields). Source: SandBox.GauntletUI/Map/GauntletMapCampaignOptionsView.cs."
---
# GauntletMapCampaignOptionsView

**Namespace:** `SandBox.GauntletUI.Map`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletMapCampaignOptionsView : MapCampaignOptionsView`
**File:** `SandBox.GauntletUI/Map/GauntletMapCampaignOptionsView.cs`

## Overview

GauntletMapCampaignOptionsView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Map/GauntletMapCampaignOptionsView.cs. It is a public class, implementing/inheriting MapCampaignOptionsView; the inheritance chain is GauntletMapCampaignOptionsView → MapCampaignOptionsView. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletMapCampaignOptionsView is a top-level type in SandBox.GauntletUI, namespace differing from (SandBox.GauntletUI.Map) the module directory; inheritance chain GauntletMapCampaignOptionsView → MapCampaignOptionsView. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. MapCampaignOptionsView on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Map/GauntletMapCampaignOptionsView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreateLayout` | `protected override void CreateLayout()` | method |
| `OnIdleTick` | `protected override void OnIdleTick(float dt)` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `OnMapConversationStart` | `protected override void OnMapConversationStart()` | method |
| `OnMapConversationOver` | `protected override void OnMapConversationOver()` | method |

## See Also

- [↑ sandbox-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GauntletHeirSelectionPopupView](../GauntletHeirSelectionPopupView)
- [same namespace GauntletMapBarGlobalLayer](../GauntletMapBarGlobalLayer)
- [same namespace GauntletMapBarView](../GauntletMapBarView)
- [same namespace GauntletMapBasicView](../GauntletMapBasicView)
