---
title: "MapConversationView"
description: "MapConversationView: a public class in SandBox.View, inheriting MapView; 9 exposed members (5 methods, 2 properties, 0 fields). Source: SandBox.View/Map/MapConversationView.cs."
---
# MapConversationView

**Namespace:** `SandBox.View.Map`
**Module:** `SandBox.View`
**Type:** `public class MapConversationView : MapView`
**File:** `SandBox.View/Map/MapConversationView.cs`

## Overview

MapConversationView lives in the SandBox.View module, source file SandBox.View/Map/MapConversationView.cs. It is a public class, implementing/inheriting MapView; the inheritance chain is MapConversationView → MapView → SandboxView. It exposes 9 public/protected members: 5 methods, 2 properties, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapConversationView is a top-level type in SandBox.View, namespace differing from (SandBox.View.Map) the module directory; inheritance chain MapConversationView → MapView → SandboxView. The surface is method-led (methods 5/9, properties 2/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Map/MapConversationView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsConversationActive` | `public bool IsConversationActive` | property |
| `InitializeConversation` | `protected internal virtual void InitializeConversation(ConversationCharacterData playerCharacterData, ConversationCharacterData conversationPartnerData)` | method |
| `OnFinalize` | `protected internal override void OnFinalize()` | method |
| `FinalizeConversation` | `protected internal virtual void FinalizeConversation()` | method |
| `CreateConversationMissionIfMissing` | `protected void CreateConversationMissionIfMissing()` | method |
| `DestroyConversationMission` | `protected void DestroyConversationMission()` | method |
| `ICampaignMission` | `public class MapConversationMission : ICampaignMission` | property |
| `ICampaignMission` | `public class MapConversationMission : ICampaignMission` | nested type |
| `ConversationPlayArgs` | `public struct ConversationPlayArgs` | nested type |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MapView](../MapView)
- [same namespace BattleSimulationMapView](../BattleSimulationMapView)
- [same namespace BlockadePositionScript](../BlockadePositionScript)
- [same namespace CampaignEntityVisualComponent](../CampaignEntityVisualComponent)
- [same namespace DefaultMapConversationDataProvider](../DefaultMapConversationDataProvider)
