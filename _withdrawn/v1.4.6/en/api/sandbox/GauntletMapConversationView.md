---
title: "GauntletMapConversationView"
description: "GauntletMapConversationView: a public class in SandBox.GauntletUI.Map, inheriting MapConversationView, IConversationStateHandler; 11 exposed members (10 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.GauntletUI/Map/GauntletMapConversationView.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletMapConversationView

**Namespace:** `SandBox.GauntletUI.Map`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletMapConversationView : MapConversationView, IConversationStateHandler`
**File:** `SandBox.GauntletUI/Map/GauntletMapConversationView.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

GauntletMapConversationView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Map/GauntletMapConversationView.cs. It is a public class, implementing/inheriting MapConversationView, IConversationStateHandler; the inheritance chain is GauntletMapConversationView → MapConversationView → MapView → SandboxView. It exposes 11 public/protected members: 10 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletMapConversationView lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.GauntletUI.Map`, inheritance chain GauntletMapConversationView → MapConversationView → MapView → SandboxView. The surface is method-led (methods 10/11, properties 0/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Map/GauntletMapConversationView.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MapConversationView](../MapConversationView/)
- [base / interface IConversationStateHandler](../../campaign-ext/IConversationStateHandler/)
- [same namespace GauntletHeirSelectionPopupView](../GauntletHeirSelectionPopupView/)
- [same namespace GauntletMapBarGlobalLayer](../GauntletMapBarGlobalLayer/)
- [same namespace GauntletMapBarView](../GauntletMapBarView/)
- [same namespace GauntletMapBasicView](../GauntletMapBasicView/)
