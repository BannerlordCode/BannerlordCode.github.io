---
title: "LayeredWindowController"
description: "LayeredWindowController — class in TaleWorlds.TwoDimension.Standalone. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# LayeredWindowController

**Namespace:** `TaleWorlds.TwoDimension.Standalone`  
**Module:** `TaleWorlds.TwoDimension.Standalone`  
**Type:** `public class LayeredWindowController`  
**Source:** `TaleWorlds.TwoDimension.Standalone/LayeredWindowController.cs`

## Overview

`LayeredWindowController` coordinates one flow: it receives input or notifications, decides what the next step is, and forwards the result to the systems that own the state. The state itself lives elsewhere.

## Mental Model

A controller is the decision point of a flow. Read it top to bottom as "input comes in → the controller validates it → a domain call happens → listeners are told". Keeping the decision here and the data elsewhere is what makes the flow re-enterable.

Because controllers are callback-driven, they must tolerate being called at awkward times; assume no particular ordering of the surrounding system.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `LayeredWindowController`.
- **Instance members** (3): `SetSize`, `PostRender`, `OnFinalize`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFinalize` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `PostRender` | method | Instance entry point. Takes no arguments. |
| `SetSize` | method | Instance entry point. Takes 2 arguments: `int width`, `int height`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `LayeredWindowController` | ctor | Instance entry point. Takes 3 arguments: `IntPtr windowHandle`, `int width`, `int height`. Returns ``. |

- Constructed as `public LayeredWindowController(IntPtr windowHandle, int width, int height)`.

## Usage Example

```csharp
// Controllers are callback-driven: the engine owns the lifetime.
public class MyLayeredWindowController : CampaignBehaviorBase
{
    // Register from the game starter, exactly once.
    public override void RegisterEvents()
    {
        // forward the notification this controller reacts to
    }
}
```

## Risks and Boundaries

- Re-entrancy is the main hazard: a callback that comes back into the controller while it is mid-update can loop.
- Controllers hold no durable state — anything that must survive a save belongs on a saveable object.
- Assume callbacks arrive on the main thread; locking around them usually deadlocks the engine.
- The declaration in `TaleWorlds.TwoDimension.Standalone/LayeredWindowController.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [User32](../User32/) — `TaleWorlds.TwoDimension.Standalone.Native.Windows`.
- [BitmapInfoHeader](../BitmapInfoHeader/) — `TaleWorlds.TwoDimension.Standalone.Native.Windows`.
- [BlendFunction](../BlendFunction/) — `TaleWorlds.TwoDimension.Standalone.Native.Windows`.
- [BitmapInfo](../BitmapInfo/) — `TaleWorlds.TwoDimension.Standalone.Native.Windows`.

Section: [api/gui/](../) — the other types in this bucket.
