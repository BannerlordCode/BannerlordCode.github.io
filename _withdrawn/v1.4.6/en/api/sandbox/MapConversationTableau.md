---
title: "MapConversationTableau"
description: "MapConversationTableau: a public class in SandBox.View.Map; 10 exposed members (8 methods, 1 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.View/Map/MapConversationTableau.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapConversationTableau

**Namespace:** `SandBox.View.Map`
**Module:** `SandBox.View`
**Type:** `public class MapConversationTableau`
**File:** `SandBox.View/Map/MapConversationTableau.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MapConversationTableau lives in the SandBox.View module, source file SandBox.View/Map/MapConversationTableau.cs. It is a public class; the inheritance chain is MapConversationTableau. It exposes 10 public/protected members: 8 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapConversationTableau lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.View.Map`, inheritance chain MapConversationTableau. The surface is method-led (methods 8/10, properties 1/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Map/MapConversationTableau.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Texture` | `public Texture Texture` | property |
| `MapConversationTableau` | `public MapConversationTableau()` | constructor |
| `SetEnabled` | `public void SetEnabled(bool enabled)` | method |
| `SetData` | `public void SetData(object data)` | method |
| `SetTargetSize` | `public void SetTargetSize(int width, int height)` | method |
| `OnFinalize` | `public void OnFinalize(bool clearNextFrame)` | method |
| `OnTick` | `public void OnTick(float dt)` | method |
| `OnConversationPlay` | `public void OnConversationPlay(string idleActionId, string idleFaceAnimId, string reactionId, string reactionFaceAnimId, string soundPath)` | method |
| `RemovePreviousAgentsSoundEvent` | `public void RemovePreviousAgentsSoundEvent()` | method |
| `StopConversationSoundEvent` | `public void StopConversationSoundEvent()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BattleSimulationMapView](../BattleSimulationMapView/)
- [same namespace BlockadePositionScript](../BlockadePositionScript/)
- [same namespace CampaignEntityVisualComponent](../CampaignEntityVisualComponent/)
- [same namespace DefaultMapConversationDataProvider](../DefaultMapConversationDataProvider/)
