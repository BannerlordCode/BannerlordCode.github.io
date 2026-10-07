---
title: "AgentAmmoTextWidget"
description: "Auto-generated class reference for AgentAmmoTextWidget."
---
# AgentAmmoTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentAmmoTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/AgentAmmoTextWidget.cs`

## Overview

`AgentAmmoTextWidget` is a mission-HUD text label declared in
`TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission`. Despite the name it reads no ammo and holds no
`Agent` reference: the entire behaviour of the class is to pick which of two Gauntlet visual states the
label is drawn in. On every late update it calls `SetState("Alert")` when `IsAlertEnabled` is true and
`SetState("Default")` otherwise (`AgentAmmoTextWidget.cs:17`). The number drawn comes from the inherited
`IntText` property and is written by whichever screen code owns the HUD.

Nothing in the 1.3.15 C# tree constructs this type — searching for the name outside its own declaration
returns no hits — so the instance is created by the mission HUD prefab and lives as long as that screen.
A modder's lever is the prefab plus the value pushed into `IsAlertEnabled`, not the widget class itself.

## Mental Model

Treat it as a two-state skin over a number, not as a data source. Three boundaries decide whether it does
what you expect:

- `OnLateUpdate` calls `SetState` unconditionally each frame (`AgentAmmoTextWidget.cs:22`). Any state you
  set yourself from outside code is overwritten on the next late update, so drive the appearance through
  `IsAlertEnabled`, never through a direct `SetState` call.
- The setter only fires its notification when the value actually changes (`AgentAmmoTextWidget.cs:39`).
  Re-assigning the same `IsAlertEnabled` is a no-op, so a binding that pushes the same value every tick
  will not re-trigger anything.
- `"Alert"` and `"Default"` are visual-state *names* resolved inside the prefab. A prefab that declares
  only `Default` renders no difference when the alert fires, and nothing warns you at runtime.

## How to use

**Getting one.** There is no factory and no code-side construction site in this version. GauntletUI
builds the widget from the prefab, and the only thing the type must expose is the single-`UIContext`
constructor at `AgentAmmoTextWidget.cs:11`. To use it from a mission behaviour you hold the instance the
screen already created and write to it.

**Typical use** — a behaviour that keeps the label and its alert flag in step with the player's weapon:

```csharp
public class AmmoLabelDriver : MissionLogic
{
    private AgentAmmoTextWidget _label;

    public AmmoLabelDriver(AgentAmmoTextWidget label) { _label = label; }

    public override void OnMissionTick(int tick)
    {
        Agent main = Agent.Main;                       // Agent.cs:555 exposes WieldedWeapon
        if (main == null || _label == null) { return; }

        MissionWeapon weapon = main.WieldedWeapon;     // MissionWeapon.cs:129 -> short Ammo
        _label.IntText = weapon.Ammo;                  // TextWidget property; this class never sets it
        _label.IsAlertEnabled = main.HasRangedWeapon(true) && weapon.Ammo == 0;
    }
}
```

**The mistake that bites.** Setting `IntText` alone and expecting the low-ammo look. The class draws
whatever `IsAlertEnabled` says every frame, so a label showing `0` with the flag left at its initial
`false` keeps rendering in the `Default` state and the player never sees the warning you built into the
prefab.



## Key Properties

| Name | Signature |
|------|-----------|
| `IsAlertEnabled` | `public bool IsAlertEnabled { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
AgentAmmoTextWidget widget = ...;
```

## See Also

- [Area Index](../)
- [AgentHealthWidget](../AgentHealthWidget)
- [AgentLockVisualBrushWidget](../AgentLockVisualBrushWidget)
- [AgentWeaponPassiveUsageVisualBrushWidget](../AgentWeaponPassiveUsageVisualBrushWidget)
- [CrosshairWidget](../CrosshairWidget)
- [中文页面](../../../../zh/api/mission-ext/AgentAmmoTextWidget)