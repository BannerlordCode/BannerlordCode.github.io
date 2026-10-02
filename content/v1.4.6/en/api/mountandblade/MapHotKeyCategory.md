---
title: "MapHotKeyCategory"
description: "MapHotKeyCategory: a public class in TaleWorlds.MountAndBlade, inheriting GameKeyContext; 30 exposed members (0 methods, 0 properties, 29 fields). Source: TaleWorlds.MountAndBlade/MapHotKeyCategory.cs."
---
# MapHotKeyCategory

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class MapHotKeyCategory : GameKeyContext`
**File:** `TaleWorlds.MountAndBlade/MapHotKeyCategory.cs`

## Overview

MapHotKeyCategory lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MapHotKeyCategory.cs. It is a public class (sealed), implementing/inheriting GameKeyContext; the inheritance chain is MapHotKeyCategory → GameKeyContext. It exposes 30 public/protected members: 29 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapHotKeyCategory is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MapHotKeyCategory → GameKeyContext. The surface is method-led (methods 0/30, properties 0/30), so it mostly exposes operations. GameKeyContext on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MapHotKeyCategory.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapHotKeyCategory` | `public MapHotKeyCategory() : base(" ", 116, GameKeyContext.GameKeyContextType.Default)` | constructor |
| `CategoryId` | `public const string CategoryId` | field |
| `QuickSave` | `public const int QuickSave` | field |
| `PartyMoveUp` | `public const int PartyMoveUp` | field |
| `PartyMoveLeft` | `public const int PartyMoveLeft` | field |
| `PartyMoveDown` | `public const int PartyMoveDown` | field |
| `PartyMoveRight` | `public const int PartyMoveRight` | field |
| `MapMoveUp` | `public const int MapMoveUp` | field |
| `MapMoveDown` | `public const int MapMoveDown` | field |
| `MapMoveLeft` | `public const int MapMoveLeft` | field |
| `MapMoveRight` | `public const int MapMoveRight` | field |
| `MovementAxisX` | `public const string MovementAxisX` | field |
| `MovementAxisY` | `public const string MovementAxisY` | field |
| `MapFastMove` | `public const int MapFastMove` | field |
| `MapZoomIn` | `public const int MapZoomIn` | field |
| `MapZoomOut` | `public const int MapZoomOut` | field |
| `MapRotateLeft` | `public const int MapRotateLeft` | field |
| `MapRotateRight` | `public const int MapRotateRight` | field |
| `MapCameraFollowMode` | `public const int MapCameraFollowMode` | field |
| `MapToggleFastForward` | `public const int MapToggleFastForward` | field |
| `MapTrackSettlement` | `public const int MapTrackSettlement` | field |
| `MapGoToEncylopedia` | `public const int MapGoToEncylopedia` | field |
| `MapClick` | `public const string MapClick` | field |
| `MapTouchpadClick` | `public const string MapTouchpadClick` | field |
| `MapFollowModifier` | `public const string MapFollowModifier` | field |
| `MapChangeCursorMode` | `public const string MapChangeCursorMode` | field |
| `MapTimeStop` | `public const int MapTimeStop` | field |
| `MapTimeNormal` | `public const int MapTimeNormal` | field |
| `MapTimeFastForward` | `public const int MapTimeFastForward` | field |
| `MapTimeTogglePause` | `public const int MapTimeTogglePause` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
