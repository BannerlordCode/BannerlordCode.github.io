---
title: "MissionGauntletCameraFadeView"
description: "Auto-generated class reference for MissionGauntletCameraFadeView."
---
# MissionGauntletCameraFadeView

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletCameraFadeView : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletCameraFadeView.cs`

## Overview

`MissionGauntletCameraFadeView` is the `[DefaultView]` Gauntlet layer that actually *draws* the mission fade. It contains no fade logic at all — its whole job is to copy one float from another behaviour into a bound property. It reads `MissionCameraFadeView.FadeAlpha` on every screen tick and writes it into a `BindingListFloatItem` that a `GauntletLayer` movie is bound to.

Like its controller it carries `[DefaultView]` (`MissionGauntletCameraFadeView.cs:10`), so it is created reflectively in every mission rather than being constructed by name; nothing in the tree references the type directly. The `ViewCreatorManager.CreateDefaultMissionBehaviors` path instantiates it with a parameterless constructor (`ViewCreatorManager.cs:102`), so adding a constructor parameter would silently drop the layer with a failed assert (`ViewCreatorManager.cs:107`).

The three lifecycle hooks are a clean create / bind / destroy pairing. `OnMissionScreenInitialize` builds the binding item, creates a `GauntletLayer` at id `100000`, loads the `CameraFade` movie and adds the layer to the mission screen (`MissionGauntletCameraFadeView.cs:17` through `MissionGauntletCameraFadeView.cs:20`). `AfterStart` fetches the controller behaviour and stores it (`MissionGauntletCameraFadeView.cs:27`). `OnMissionScreenFinalize` removes the layer and nulls all three fields (`MissionGauntletCameraFadeView.cs:44` through `MissionGauntletCameraFadeView.cs:47`).

## Mental Model

The per-tick write is double-guarded, and both guards are needed. `OnMissionScreenTick` only touches the binding item `if (this._dataSource != null && this._controller != null)` (`MissionGauntletCameraFadeView.cs:34`), so a tick that arrives after initialise but before `AfterStart` — or after finalise has started nulling fields — writes nothing rather than throwing. If you extend this class, keep that shape: the two fields are set in *different* lifecycle phases (`_dataSource` in screen-initialise, `_controller` in `AfterStart`) and cleared together only at finalise, so any single-frame window has exactly one of them.

`BindingListFloatItem.Item` is the whole binding surface — one float, no property-change machinery, which is why assigning the same value every frame is cheap and silent. The layer id `100000` is much higher than neighbouring mission layers (`MissionGauntletCameraFadeView.cs:18`), which is how the fade is guaranteed to composite above the mission screen rather than under it.

The important asymmetry: this class never advances anything. If `FadeAlpha` does not change, nothing redraws differently, and if the controller behaviour is missing the movie simply stays at whatever `BindingListFloatItem(0f)` was constructed with (`MissionGauntletCameraFadeView.cs:17`) — fully transparent. So a fade that "does not work" is nearly always a missing or mis-ordered `MissionCameraFadeView`, not a rendering problem here.

The controller lookup is `base.Mission.GetMissionBehavior<MissionCameraFadeView>()` (`MissionGauntletCameraFadeView.cs:27`) and the result is **not** null-checked. It relies on both types being `[DefaultView]`, so both are created by the same reflection scan in the same pass; a mod that removes or breaks the controller's default registration leaves this layer with a null controller and a permanently transparent fade rather than a crash.

## How to use

**Getting it.** Do not construct it. To change what the fade looks like, replace the prefab, not the class; to change how it behaves, drive `MissionCameraFadeView`.

```csharp
// Read the current fade state from inside a mission behaviour.
MissionCameraFadeView controller = Mission.GetMissionBehavior<MissionCameraFadeView>();
MissionGauntletCameraFadeView layer = Mission.GetMissionBehavior<MissionGauntletCameraFadeView>();

Debug.Print("alpha=" + controller.FadeAlpha
            + " state=" + controller.FadeState
            + " layer bound=" + (layer != null), false);

// Drive it the way the cinematic views do.
controller.BeginFadeOut(0.5f);
```

If you want your own overlay on top of the mission screen instead of the stock one, subclass and override `OnMissionScreenInitialize` / `OnMissionScreenFinalize`, keeping the constructor parameterless:

```csharp
[DefaultView]                       // otherwise the stock layer still wins
public class MyFadeLayer : MissionView
{
    private GauntletLayer _layer;   // must be parameterless-constructible
    private BindingListFloatItem _data;

    public MyFadeLayer() { }

    public override void OnMissionScreenInitialize()
    {
        _data = new BindingListFloatItem(0f);
        _layer = new GauntletLayer(100001, "GauntletLayer", false);
        _layer.LoadMovie("CameraFade", _data);
        MissionScreen.AddLayer(_layer);
    }

    public override void OnMissionScreenTick(float dt)
    {
        MissionCameraFadeView controller = Mission.GetMissionBehavior<MissionCameraFadeView>();
        if (_data != null && controller != null)
        {
            _data.Item = controller.FadeAlpha;   // 1 == fully dark, both directions
        }
    }

    public override void OnMissionScreenFinalize()
    {
        MissionScreen.RemoveLayer(_layer);
        _layer = null;
        _data = null;
    }
}
```

**The mistake that makes the fade silently disappear.** Adding a constructor argument to your override. `CreateDefaultMissionBehaviors` calls `Activator.CreateInstance(type2)` with no argument array (`ViewCreatorManager.cs:102`), so there is no constructor it can bind; the type is dropped with `Debug.FailedAssert("Failed to initialize default mission view type: {0}", ...)` (`ViewCreatorManager.cs:107`) and every mission loads without a fade layer. No exception, no crash — the screen simply never dims when the controller asks it to.

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Invoked when the mission screen initialize event is raised.

```csharp
// Obtain an instance of MissionGauntletCameraFadeView from the subsystem API first
MissionGauntletCameraFadeView missionGauntletCameraFadeView = ...;
missionGauntletCameraFadeView.OnMissionScreenInitialize();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of MissionGauntletCameraFadeView from the subsystem API first
MissionGauntletCameraFadeView missionGauntletCameraFadeView = ...;
missionGauntletCameraFadeView.AfterStart();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Invoked when the mission screen tick event is raised.

```csharp
// Obtain an instance of MissionGauntletCameraFadeView from the subsystem API first
MissionGauntletCameraFadeView missionGauntletCameraFadeView = ...;
missionGauntletCameraFadeView.OnMissionScreenTick(0);
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the mission screen finalize event is raised.

```csharp
// Obtain an instance of MissionGauntletCameraFadeView from the subsystem API first
MissionGauntletCameraFadeView missionGauntletCameraFadeView = ...;
missionGauntletCameraFadeView.OnMissionScreenFinalize();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionGauntletCameraFadeView view = ...;
```

## See Also

- [MissionCameraFadeView — the controller whose FadeAlpha this layer renders](../MissionCameraFadeView)
- [MissionMainAgentControlModeView — the other empty `[DefaultView]` marker](../MissionMainAgentControlModeView)
- [MissionGamepadEffectsView — another auto-created default mission view](../MissionGamepadEffectsView)
- [Area Index](../)