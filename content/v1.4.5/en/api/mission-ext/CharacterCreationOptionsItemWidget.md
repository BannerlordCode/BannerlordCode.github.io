---
title: "CharacterCreationOptionsItemWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterCreationOptionsItemWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterCreationOptionsItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterCreation.Options
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CharacterCreationOptionsItemWidget`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterCreation.Options/CharacterCreationOptionsItemWidget.cs`

## Overview

`CharacterCreationOptionsItemWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `CharacterCreationOptionsItemWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Type` | `public int Type { get; set; }` |
| `ActionOptionWidget` | `public Widget ActionOptionWidget { get; set; }` |
| `NumericOptionWidget` | `public Widget NumericOptionWidget { get; set; }` |
| `SelectionOptionWidget` | `public Widget SelectionOptionWidget { get; set; }` |
| `BooleanOptionWidget` | `public Widget BooleanOptionWidget { get; set; }` |

## Key Methods

### CharacterCreationOptionsItemWidget
`public class CharacterCreationOptionsItemWidget(UIContext context)`

**Purpose:** Handles logic related to `character creation options item widget`.

## Usage Example

```csharp
var widget = new CharacterCreationOptionsItemWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)