---
title: "NameplateNotificationListPanel"
description: "Auto-generated class reference for NameplateNotificationListPanel."
---
# NameplateNotificationListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate.Notifications
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class NameplateNotificationListPanel`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate.Notifications/NameplateNotificationListPanel.cs`

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

## Key Methods

### NameplateNotificationListPanel
`public class NameplateNotificationListPanel(UIContext context)`

**Purpose:** **Purpose:** Executes the NameplateNotificationListPanel logic.

```csharp
// Obtain an instance of NameplateNotificationListPanel from the subsystem API first
NameplateNotificationListPanel nameplateNotificationListPanel = ...;
var result = nameplateNotificationListPanel.NameplateNotificationListPanel(context);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
NameplateNotificationListPanel nameplateNotificationListPanel = ...;
nameplateNotificationListPanel.NameplateNotificationListPanel(context);
```

## See Also

- [Area Index](../)