---
title: "PartyHealthFillBarWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyHealthFillBarWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PartyHealthFillBarWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyHealthFillBarWidget`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party/PartyHealthFillBarWidget.cs`

## Overview

`PartyHealthFillBarWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `PartyHealthFillBarWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Health` | `public int Health { get; set; }` |
| `IsWounded` | `public bool IsWounded { get; set; }` |
| `HealthText` | `public TextWidget HealthText { get; set; }` |

## Key Methods

### PartyHealthFillBarWidget
`public class PartyHealthFillBarWidget(UIContext context)`

**Purpose:** Handles logic related to `party health fill bar widget`.

## Usage Example

```csharp
var widget = new PartyHealthFillBarWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)