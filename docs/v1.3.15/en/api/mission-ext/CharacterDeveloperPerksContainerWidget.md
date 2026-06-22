<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterDeveloperPerksContainerWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
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
// Typical usage of CharacterDeveloperPerksContainerWidget (Widget)
// 声明/访问一个 CharacterDeveloperPerksContainerWidget
var widget = root.GetChild("characterDeveloperPerksContainerWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)