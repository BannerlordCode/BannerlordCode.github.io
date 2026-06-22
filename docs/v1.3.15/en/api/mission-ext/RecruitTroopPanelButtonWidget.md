<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RecruitTroopPanelButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RecruitTroopPanelButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Recruitment
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RecruitTroopPanelButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Recruitment/RecruitTroopPanelButtonWidget.cs`

## Overview

`RecruitTroopPanelButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `CanBeRecruited` | `public bool CanBeRecruited { get; set; }` |
| `IsInCart` | `public bool IsInCart { get; set; }` |
| `RemoveFromCartButton` | `public ButtonWidget RemoveFromCartButton { get; set; }` |
| `CharacterImageWidget` | `public ImageIdentifierWidget CharacterImageWidget { get; set; }` |
| `IsTroopEmpty` | `public bool IsTroopEmpty { get; set; }` |
| `PlayerHasEnoughRelation` | `public bool PlayerHasEnoughRelation { get; set; }` |

## Usage Example

```csharp
// Typical usage of RecruitTroopPanelButtonWidget (Widget)
// 声明/访问一个 RecruitTroopPanelButtonWidget
var widget = root.GetChild("recruitTroopPanelButtonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)