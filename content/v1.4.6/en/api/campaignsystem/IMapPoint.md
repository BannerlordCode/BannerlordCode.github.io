---
title: "IMapPoint"
description: "IMapPoint: a public interface in TaleWorlds.CampaignSystem; 8 exposed members (1 methods, 7 properties, 0 fields). Source: TaleWorlds.CampaignSystem/Map/IMapPoint.cs."
---
# IMapPoint

**Namespace:** `TaleWorlds.CampaignSystem.Map`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IMapPoint`
**File:** `TaleWorlds.CampaignSystem/Map/IMapPoint.cs`

## Overview

IMapPoint lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Map/IMapPoint.cs. It is a public interface; the inheritance chain is IMapPoint. It exposes 8 public/protected members: 1 methods, 7 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IMapPoint is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Map) the module directory; inheritance chain IMapPoint. The surface is property-led (properties 7/8, methods 1/8), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Map/IMapPoint.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Name` | `TextObject Name` | property |
| `Position` | `CampaignVec2 Position` | property |
| `CurrentNavigationFace` | `PathFaceRecord CurrentNavigationFace` | property |
| `GetPositionAsVec3` | `Vec3 GetPositionAsVec3();` | method |
| `MapFaction` | `IFaction MapFaction` | property |
| `IsInspected` | `bool IsInspected` | property |
| `IsVisible` | `bool IsVisible` | property |
| `IsActive` | `bool IsActive` | property |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace IInteractablePoint](../IInteractablePoint)
- [same namespace IMapScene](../IMapScene)
- [same namespace IMapSceneCreator](../IMapSceneCreator)
- [same namespace LocatableSearchData](../LocatableSearchData__1)
