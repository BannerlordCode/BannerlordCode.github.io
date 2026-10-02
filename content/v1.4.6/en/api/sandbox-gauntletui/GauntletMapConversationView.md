---
title: "GauntletMapConversationView"
description: "GauntletMapConversationView: a public class in SandBox.GauntletUI, inheriting MapConversationView, IConversationStateHandler; 11 exposed members (10 methods, 0 properties, 0 fields). Source: SandBox.GauntletUI/Map/GauntletMapConversationView.cs."
---
# GauntletMapConversationView

**Namespace:** `SandBox.GauntletUI.Map`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletMapConversationView : MapConversationView, IConversationStateHandler`
**File:** `SandBox.GauntletUI/Map/GauntletMapConversationView.cs`

## Overview

GauntletMapConversationView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Map/GauntletMapConversationView.cs. It is a public class, implementing/inheriting MapConversationView, IConversationStateHandler; the inheritance chain is GauntletMapConversationView → MapConversationView. It exposes 11 public/protected members: 10 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletMapConversationView is a top-level type in SandBox.GauntletUI, namespace differing from (SandBox.GauntletUI.Map) the module directory; inheritance chain GauntletMapConversationView → MapConversationView. The surface is method-led (methods 10/11, properties 0/11), so it mostly exposes operations. MapConversationView on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Map/GauntletMapConversationView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GauntletMapConversationView` | `public GauntletMapConversationView()` | constructor |
| `InitializeConversation` | `protected override void InitializeConversation(ConversationCharacterData playerCharacterData, ConversationCharacterData conversationPartnerData)` | method |
| `FinalizeConversation` | `protected override void FinalizeConversation()` | method |
| `OnActivate` | `protected override void OnActivate()` | method |
| `OnDeactivate` | `protected override void OnDeactivate()` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `IsEscaped` | `protected override bool IsEscaped()` | method |
| `IsOpeningEscapeMenuOnFocusChangeAllowed` | `protected override bool IsOpeningEscapeMenuOnFocusChangeAllowed()` | method |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | method |
| `OnIdleTick` | `protected override void OnIdleTick(float dt)` | method |
| `OnMenuModeTick` | `protected override void OnMenuModeTick(float dt)` | method |

## See Also

- [↑ sandbox-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GauntletHeirSelectionPopupView](../GauntletHeirSelectionPopupView)
- [same namespace GauntletMapBarGlobalLayer](../GauntletMapBarGlobalLayer)
- [same namespace GauntletMapBarView](../GauntletMapBarView)
- [same namespace GauntletMapBasicView](../GauntletMapBasicView)
