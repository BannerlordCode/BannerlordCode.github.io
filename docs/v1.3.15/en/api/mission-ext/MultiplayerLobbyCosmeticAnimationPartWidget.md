<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerLobbyCosmeticAnimationPartWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLobbyCosmeticAnimationPartWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyCosmeticAnimationPartWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyCosmeticAnimationPartWidget.cs`

## Overview

`MultiplayerLobbyCosmeticAnimationPartWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Methods

### InitializeAnimationParameters
```csharp
public void InitializeAnimationParameters()
```

### StartAnimation
```csharp
public void StartAnimation(float alphaChangeDuration, float minAlpha, float maxAlpha)
```

### StopAnimation
```csharp
public void StopAnimation()
```

## Usage Example

```csharp
// Typical usage of MultiplayerLobbyCosmeticAnimationPartWidget (Widget)
// 声明/访问一个 MultiplayerLobbyCosmeticAnimationPartWidget
var widget = root.GetChild("multiplayerLobbyCosmeticAnimationPartWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)