<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterDeveloperPerksContainerWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterDeveloperPerksContainerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CharacterDeveloperPerksContainerWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/CharacterDeveloperPerksContainerWidget.cs`

## Overview

`CharacterDeveloperPerksContainerWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `CharacterDeveloperPerksContainerWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `LeftScopeID` | `public string LeftScopeID { get; set; }` |
| `RightScopeID` | `public string RightScopeID { get; set; }` |
| `DownScopeID` | `public string DownScopeID { get; set; }` |
| `UpScopeID` | `public string UpScopeID { get; set; }` |
| `FirstScopeID` | `public string FirstScopeID { get; set; }` |

## Usage Example

```csharp
var widget = new CharacterDeveloperPerksContainerWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)