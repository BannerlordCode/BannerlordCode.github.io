<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterCreationFirstStageFadeOutWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterCreationFirstStageFadeOutWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterCreation.Culture
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CharacterCreationFirstStageFadeOutWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterCreation/Culture/CharacterCreationFirstStageFadeOutWidget.cs`

## Overview

`CharacterCreationFirstStageFadeOutWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `StayTime` | `public float StayTime { get; set; }` |
| `FadeOutTime` | `public float FadeOutTime { get; set; }` |

## Usage Example

```csharp
// Typical usage of CharacterCreationFirstStageFadeOutWidget (Widget)
// 声明/访问一个 CharacterCreationFirstStageFadeOutWidget
var widget = root.GetChild("characterCreationFirstStageFadeOutWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)