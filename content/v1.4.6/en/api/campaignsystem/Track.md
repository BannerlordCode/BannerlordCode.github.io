---
title: "Track"
description: "Track: a public class in TaleWorlds.CampaignSystem, inheriting ILocatable<Track>, IInteractablePoint; 14 exposed members (3 methods, 9 properties, 0 fields). Source: TaleWorlds.CampaignSystem/Track.cs."
---
# Track

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public sealed class Track : ILocatable<Track>, IInteractablePoint`
**File:** `TaleWorlds.CampaignSystem/Track.cs`

## Overview

Track lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Track.cs. It is a public class (sealed), implementing/inheriting ILocatable<Track>, IInteractablePoint; the inheritance chain is Track → ILocatable. It exposes 14 public/protected members: 3 methods, 9 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Track is a top-level type in TaleWorlds.CampaignSystem, namespace matching the module directory; inheritance chain Track → ILocatable. The surface is property-led (properties 9/14, methods 3/14), so it mostly exposes state for reading. ILocatable on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Track.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetPosition2D` | `public Vec2 GetPosition2D` | property |
| `CanPartyInteract` | `public bool CanPartyInteract(MobileParty mobileParty, float dt)` | method |
| `GetPartyTypeEnum` | `public static Track.PartyTypeEnum GetPartyTypeEnum(MobileParty party)` | method |
| `Size` | `public int Size` | property |
| `IsDetected` | `public bool IsDetected` | property |
| `IsPointer` | `public bool IsPointer` | property |
| `IsEnemy` | `public bool IsEnemy` | property |
| `IsExpired` | `public bool IsExpired` | property |
| `IsAlive` | `public bool IsAlive` | property |
| `Scale` | `public float Scale` | property |
| `Track` | `public Track()` | constructor |
| `Reset` | `public void Reset()` | method |
| `PartyTypeEnum` | `public enum PartyTypeEnum` | property |
| `PartyTypeEnum` | `public enum PartyTypeEnum` | nested type |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface IInteractablePoint](../IInteractablePoint)
- [same namespace ActionNotes](../ActionNotes)
- [same namespace AIBehaviorData](../AIBehaviorData)
- [same namespace Army](../Army)
- [same namespace AtmosphereGrid](../AtmosphereGrid)
