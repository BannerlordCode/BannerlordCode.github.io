---
title: "GauntletBannerEditorScreen"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletBannerEditorScreen`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletBannerEditorScreen

**Namespace:** SandBox.GauntletUI.BannerEditor
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletBannerEditorScreen : ScreenBase, IGameStateListener`
**Base:** `ScreenBase`
**File:** `SandBox.GauntletUI/BannerEditor/GauntletBannerEditorScreen.cs`

## Overview

`GauntletBannerEditorScreen` lives in `SandBox.GauntletUI.BannerEditor` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.GauntletUI.BannerEditor` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnDone
`public void OnDone()`

**Purpose:** Called when the `done` event is raised.

### OnCancel
`public void OnCancel()`

**Purpose:** Called when the `cancel` event is raised.

## Usage Example

```csharp
var value = new GauntletBannerEditorScreen();
value.OnDone();
```

## See Also

- [Complete Class Catalog](../catalog)