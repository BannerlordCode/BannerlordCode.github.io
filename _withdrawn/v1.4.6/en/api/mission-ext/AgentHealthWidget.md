---
title: "AgentHealthWidget"
description: "AgentHealthWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission, inheriting Widget; 10 exposed members (1 methods, 7 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/AgentHealthWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AgentHealthWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class AgentHealthWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/AgentHealthWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

AgentHealthWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/AgentHealthWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is AgentHealthWidget → Widget → PropertyOwnerObject. It exposes 10 public/protected members: 1 methods, 7 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AgentHealthWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission`, inheritance chain AgentHealthWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 7/10, methods 1/10), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/AgentHealthWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `AgentHealthWidget` | `public AgentHealthWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `Health` | `public int Health` | property |
| `MaxHealth` | `public int MaxHealth` | property |
| `HealthBar` | `public FillBarWidget HealthBar` | property |
| `HealthDropContainer` | `public Widget HealthDropContainer` | property |
| `HealthDropBrush` | `public Brush HealthDropBrush` | property |
| `ShowHealthBar` | `public bool ShowHealthBar` | property |
| `HealthDropData` | `public class HealthDropData` | property |
| `HealthDropData` | `public class HealthDropData` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AgentAlarmStateWidget](../AgentAlarmStateWidget/)
- [same namespace AgentAmmoTextWidget](../AgentAmmoTextWidget/)
- [same namespace AgentLockVisualBrushWidget](../AgentLockVisualBrushWidget/)
- [same namespace AgentWeaponPassiveUsageVisualBrushWidget](../AgentWeaponPassiveUsageVisualBrushWidget/)
