<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaCharacterTableauWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaCharacterTableauWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EncyclopediaCharacterTableauWidget : CharacterTableauWidget`
**Base:** `CharacterTableauWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Encyclopedia/EncyclopediaCharacterTableauWidget.cs`

## Overview

`EncyclopediaCharacterTableauWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsDead` | `public bool IsDead { get; set; }` |

## Usage Example

```csharp
// Typical usage of EncyclopediaCharacterTableauWidget (Widget)
// 声明/访问一个 EncyclopediaCharacterTableauWidget
var widget = root.GetChild("encyclopediaCharacterTableauWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)