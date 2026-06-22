<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingWeaponTypeIconWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingWeaponTypeIconWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftingWeaponTypeIconWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftingWeaponTypeIconWidget.cs`

## Overview

`CraftingWeaponTypeIconWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `WeaponType` | `public string WeaponType { get; set; }` |

## Usage Example

```csharp
// Typical usage of CraftingWeaponTypeIconWidget (Widget)
// 声明/访问一个 CraftingWeaponTypeIconWidget
var widget = root.GetChild("craftingWeaponTypeIconWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)