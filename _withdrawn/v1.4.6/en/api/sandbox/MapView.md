---
title: "MapView"
description: "MapView: a public class in SandBox.View.Map, inheriting SandboxView; 22 exposed members (19 methods, 2 properties, 1 fields). Canonical bucket sandbox. Source: SandBox.View/Map/MapView.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapView

**Namespace:** `SandBox.View.Map`
**Module:** `SandBox.View`
**Type:** `public abstract class MapView : SandboxView`
**File:** `SandBox.View/Map/MapView.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MapView lives in the SandBox.View module, source file SandBox.View/Map/MapView.cs. It is a public class (abstract), implementing/inheriting SandboxView; the inheritance chain is MapView → SandboxView. It exposes 22 public/protected members: 19 methods, 2 properties, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapView lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.View.Map`, inheritance chain MapView → SandboxView. The surface is method-led (methods 19/22, properties 2/22), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Map/MapView.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MapScreen` | `public MapScreen MapScreen` | property |
| `MapState` | `public MapState MapState` | property |
| `CreateLayout` | `protected internal virtual void CreateLayout()` | method |
| `OnResume` | `protected internal virtual void OnResume()` | method |
| `OnHourlyTick` | `protected internal virtual void OnHourlyTick()` | method |
| `OnStartWait` | `protected internal virtual void OnStartWait(string waitMenuId)` | method |
| `OnMainPartyEncounter` | `protected internal virtual void OnMainPartyEncounter()` | method |
| `OnDispersePlayerLeadedArmy` | `protected internal virtual void OnDispersePlayerLeadedArmy()` | method |
| `OnArmyLeft` | `protected internal virtual void OnArmyLeft()` | method |
| `IsEscaped` | `protected internal virtual bool IsEscaped()` | method |
| `IsOpeningEscapeMenuOnFocusChangeAllowed` | `protected internal virtual bool IsOpeningEscapeMenuOnFocusChangeAllowed()` | method |
| `OnOverlayCreated` | `protected internal virtual void OnOverlayCreated()` | method |
| `OnOverlayClosed` | `protected internal virtual void OnOverlayClosed()` | method |
| `OnMenuModeTick` | `protected internal virtual void OnMenuModeTick(float dt)` | method |
| `OnMapScreenUpdate` | `protected internal virtual void OnMapScreenUpdate(float dt)` | method |
| `OnIdleTick` | `protected internal virtual void OnIdleTick(float dt)` | method |
| `OnMapTerrainClick` | `protected internal virtual void OnMapTerrainClick()` | method |
| `OnSiegeEngineClick` | `protected internal virtual void OnSiegeEngineClick(MatrixFrame siegeEngineFrame)` | method |
| `OnMapConversationStart` | `protected internal virtual void OnMapConversationStart()` | method |
| `OnMapConversationOver` | `protected internal virtual void OnMapConversationOver()` | method |
| `GetTutorialContext` | `protected internal virtual TutorialContexts GetTutorialContext()` | method |
| `ContextAlphaModifier` | `protected const float ContextAlphaModifier` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SandboxView](../SandboxView/)
- [same namespace BattleSimulationMapView](../BattleSimulationMapView/)
- [same namespace BlockadePositionScript](../BlockadePositionScript/)
- [same namespace CampaignEntityVisualComponent](../CampaignEntityVisualComponent/)
- [same namespace DefaultMapConversationDataProvider](../DefaultMapConversationDataProvider/)
