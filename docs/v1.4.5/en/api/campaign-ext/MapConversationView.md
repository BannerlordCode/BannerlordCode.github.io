<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapConversationView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapConversationView

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapConversationView : MapView`
**Base:** `MapView`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Map/MapConversationView.cs`

## Overview

`MapConversationView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MapConversationView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ConversationTableau` | `public MapConversationTableau ConversationTableau { get; }` |
| `IsConversationActive` | `public bool IsConversationActive { get; set; }` |

## Key Methods

### ConversationPlayArgs
`public struct ConversationPlayArgs(string idleActionId, string idleFaceAnimId, string reactionId, string reactionFaceAnimId, string soundPath)`

**Purpose:** Handles logic related to `conversation play args`.

### SetConversationTableau
`public void SetConversationTableau(MapConversationTableau tableau)`

**Purpose:** Sets the value or state of `conversation tableau`.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### OnFinalize
`public void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

## Usage Example

```csharp
var view = new MapConversationView();
```

## See Also

- [Complete Class Catalog](../catalog)