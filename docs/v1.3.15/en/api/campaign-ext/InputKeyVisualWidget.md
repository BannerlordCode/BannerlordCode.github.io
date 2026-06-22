<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InputKeyVisualWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InputKeyVisualWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class InputKeyVisualWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/InputKeyVisualWidget.cs`

## Overview

`InputKeyVisualWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `KeyID` | `public string KeyID { get { return this._keyID; }` |
| `IconsPath` | `public string IconsPath { get { return this._iconsPath; }` |

## Usage Example

```csharp
// Typical usage of InputKeyVisualWidget (Widget)
// 声明/访问一个 InputKeyVisualWidget
var widget = root.GetChild("inputKeyVisualWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)