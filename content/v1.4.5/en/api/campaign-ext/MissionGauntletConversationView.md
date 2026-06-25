---
title: "MissionGauntletConversationView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionGauntletConversationView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionGauntletConversationView

**Namespace:** SandBox.GauntletUI.Missions
**Module:** SandBox.GauntletUI
**Type:** `public class MissionGauntletConversationView : MissionView, IConversationStateHandler`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Missions/MissionGauntletConversationView.cs`

## Overview

`MissionGauntletConversationView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionGauntletConversationView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ConversationHandler` | `public MissionConversationLogic ConversationHandler { get; }` |

## Key Methods

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Called when the `mission screen tick` event is raised.

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Called when the `mission screen finalize` event is raised.

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Handles logic related to `early start`.

### OnMissionScreenActivate
`public override void OnMissionScreenActivate()`

**Purpose:** Called when the `mission screen activate` event is raised.

### OnMissionModeChange
`public override void OnMissionModeChange(MissionMode oldMissionMode, bool atStart)`

**Purpose:** Called when the `mission mode change` event is raised.

## Usage Example

```csharp
var view = new MissionGauntletConversationView();
```

## See Also

- [Complete Class Catalog](../catalog)