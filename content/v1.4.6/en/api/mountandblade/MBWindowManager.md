---
title: "MBWindowManager"
description: "MBWindowManager: a public class in TaleWorlds.MountAndBlade; 7 exposed members (7 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MBWindowManager.cs."
---
# MBWindowManager

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MBWindowManager`
**File:** `TaleWorlds.MountAndBlade/MBWindowManager.cs`

## Overview

MBWindowManager lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MBWindowManager.cs. It is a public class; the inheritance chain is MBWindowManager. It exposes 7 public/protected members: 7 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBWindowManager is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MBWindowManager. The surface is method-led (methods 7/7, properties 0/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MBWindowManager.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `WorldToScreen` | `public static float WorldToScreen(Camera camera, Vec3 worldSpacePosition, ref float screenX, ref float screenY, ref float w)` | method |
| `WorldToScreenInsideUsableArea` | `public static float WorldToScreenInsideUsableArea(Camera camera, Vec3 worldSpacePosition, ref float screenX, ref float screenY, ref float w)` | method |
| `WorldToScreenWithFixedZ` | `public static float WorldToScreenWithFixedZ(Camera camera, Vec3 cameraPosition, Vec3 worldSpacePosition, ref float screenX, ref float screenY, ref float w)` | method |
| `ScreenToWorld` | `public static void ScreenToWorld(Camera camera, float screenX, float screenY, float w, ref Vec3 worldSpacePosition)` | method |
| `GetScreenResolution` | `public static Vec2 GetScreenResolution()` | method |
| `PreDisplay` | `public static void PreDisplay()` | method |
| `DontChangeCursorPos` | `public static void DontChangeCursorPos()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
