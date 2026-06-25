---
title: "NameplateNotificationListPanel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NameplateNotificationListPanel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NameplateNotificationListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate.Notifications
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class NameplateNotificationListPanel : ListPanel`
**Base:** `ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/Notifications/NameplateNotificationListPanel.cs`

## Overview

`NameplateNotificationListPanel` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate.Notifications` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate.Notifications` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `RelationVisualWidget` | `public Widget RelationVisualWidget { get; set; }` |
| `RelationType` | `public int RelationType { get; set; }` |
| `StayAmount` | `public float StayAmount { get; set; }` |
| `FadeTime` | `public float FadeTime { get; set; }` |

## Usage Example

```csharp
var value = new NameplateNotificationListPanel();
```

## See Also

- [Complete Class Catalog](../catalog)