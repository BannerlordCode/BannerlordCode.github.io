---
title: "IInteractablePoint"
description: "IInteractablePoint: a public interface in TaleWorlds.CampaignSystem.Map; 3 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/Map/IInteractablePoint.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IInteractablePoint

**Namespace:** `TaleWorlds.CampaignSystem.Map`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IInteractablePoint`
**File:** `TaleWorlds.CampaignSystem/Map/IInteractablePoint.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

IInteractablePoint lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Map/IInteractablePoint.cs. It is a public interface; the inheritance chain is IInteractablePoint. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IInteractablePoint lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.Map`, inheritance chain IInteractablePoint. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Map/IInteractablePoint.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetInteractionPosition` | `CampaignVec2 GetInteractionPosition(MobileParty interactingParty);` | method |
| `CanPartyInteract` | `bool CanPartyInteract(MobileParty mobileParty, float dt);` | method |
| `OnPartyInteraction` | `void OnPartyInteraction(MobileParty mobileParty);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace IMapPoint](../IMapPoint/)
- [same namespace IMapScene](../IMapScene/)
- [same namespace IMapSceneCreator](../IMapSceneCreator/)
- [same namespace LocatableSearchData](../LocatableSearchData__1/)
