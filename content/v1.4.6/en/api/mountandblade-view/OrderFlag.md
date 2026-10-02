---
title: "OrderFlag"
description: "OrderFlag: a public class in TaleWorlds.MountAndBlade.View; 14 exposed members (7 methods, 5 properties, 1 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Order/OrderFlag.cs."
---
# OrderFlag

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews.Order`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class OrderFlag`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Order/OrderFlag.cs`

## Overview

OrderFlag lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Order/OrderFlag.cs. It is a public class; the inheritance chain is OrderFlag. It exposes 14 public/protected members: 7 methods, 5 properties, 1 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OrderFlag is a top-level type in TaleWorlds.MountAndBlade.View, namespace differing from (TaleWorlds.MountAndBlade.View.MissionViews.Order) the module directory; inheritance chain OrderFlag. The surface is method-led (methods 7/14, properties 5/14), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Order/OrderFlag.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FocusedOrderableObject` | `public IOrderable FocusedOrderableObject` | property |
| `LatestUpdateFrameNo` | `public int LatestUpdateFrameNo` | property |
| `OrderFlag` | `public OrderFlag(Mission mission, MissionScreen missionScreen, float flagScale = 10f)` | constructor |
| `Tick` | `public void Tick(float dt)` | method |
| `SetArrowVisibility` | `public void SetArrowVisibility(bool isVisible, Vec2 arrowDirection)` | method |
| `GetFlagPosition` | `protected virtual Vec3 GetFlagPosition(out bool isOnValidGround, bool checkForTargetEntity, Vec3 targetCollisionPoint)` | method |
| `UpdateFrame` | `protected virtual void UpdateFrame(out bool isOnValidGround, bool checkForTargetEntity, Vec3 targetCollisionPoint)` | method |
| `IsPositionOnValidGround` | `public virtual bool IsPositionOnValidGround(WorldPosition worldPosition)` | method |
| `IsOrderPositionValid` | `public static bool IsOrderPositionValid(WorldPosition orderPosition)` | method |
| `Position` | `public Vec3 Position` | property |
| `Frame` | `public MatrixFrame Frame` | property |
| `IsVisible` | `public bool IsVisible` | property |
| `SetWidthVisibility` | `public void SetWidthVisibility(bool isVisible, float width)` | method |
| `IsTroop` | `public bool IsTroop` | field |

## See Also

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace OrderTroopPlacer](../OrderTroopPlacer)
