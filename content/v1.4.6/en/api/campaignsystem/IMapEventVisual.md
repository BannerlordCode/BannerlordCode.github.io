---
title: "IMapEventVisual"
description: "IMapEventVisual: a public interface in TaleWorlds.CampaignSystem; 3 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/MapEvents/IMapEventVisual.cs."
---
# IMapEventVisual

**Namespace:** `TaleWorlds.CampaignSystem.MapEvents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IMapEventVisual`
**File:** `TaleWorlds.CampaignSystem/MapEvents/IMapEventVisual.cs`

## Overview

IMapEventVisual lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/MapEvents/IMapEventVisual.cs. It is a public interface; the inheritance chain is IMapEventVisual. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IMapEventVisual is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.MapEvents) the module directory; inheritance chain IMapEventVisual. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/MapEvents/IMapEventVisual.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Initialize` | `void Initialize(CampaignVec2 position, bool isVisible);` | method |
| `OnMapEventEnd` | `void OnMapEventEnd();` | method |
| `SetVisibility` | `void SetVisibility(bool isVisible);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BlockadeBattleMapEvent](../BlockadeBattleMapEvent)
- [same namespace FieldBattleEventComponent](../FieldBattleEventComponent)
- [same namespace ForceSuppliesEventComponent](../ForceSuppliesEventComponent)
- [same namespace ForceVolunteersEventComponent](../ForceVolunteersEventComponent)
