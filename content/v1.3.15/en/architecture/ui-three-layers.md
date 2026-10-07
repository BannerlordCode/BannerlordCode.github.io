---
title: "UI Three-Layer Architecture — ScreenManager / GauntletLayer / ViewModel"
description: "Explains how the Bannerlord interface stack is driven by ScreenManager, how a Screen contains Layers via AddLayer, and how GauntletLayer binds a ViewModel to a Gauntlet movie, with compilable integration steps and a mental model."
---

# UI Three-Layer Architecture

**Namespace:** `TaleWorlds.ScreenSystem` · `TaleWorlds.Engine.GauntletUI` · `TaleWorlds.Library`  
**Module:** `TaleWorlds.ScreenSystem` · `TaleWorlds.Engine.GauntletUI` · `TaleWorlds.Library`  
**Type:** Architecture topic page — spanning `ScreenManager` / `ScreenBase` / `ScreenLayer` / `GauntletLayer` / `ViewModel`  
**Source files:** `TaleWorlds.ScreenSystem/ScreenManager.cs` · `TaleWorlds.ScreenSystem/ScreenBase.cs` · `TaleWorlds.ScreenSystem/ScreenLayer.cs` · `TaleWorlds.Engine.GauntletUI/GauntletLayer.cs` · `TaleWorlds.Library/ViewModel.cs`  
**Line-number basis:** every `X.cs:N` on this page refers to the **v1.3.15** source tree (`bannerlord-1.3.15/`).

> Section schema: this page follows the canonical seven sections (Overview / Mental Model / How To Use / Key Members / Real Example / See Also / Navigation).

## Overview

This UI system splits "who owns the interface", "who draws the interface", and "who supplies the data" into three layers with strictly one-way dependencies between them. The outermost layer is the screen stack: a single global static stack manager only ever talks to the screen on top of the stack, asking it once per frame for an update, and that top screen in turn asks each of its owned layers in order. So at any moment only the layer set of the current screen participates in updates, and switching screens is nothing more than a push or a pop. The middle layer is the screen and its layers: a screen is an abstract base class that draws nothing itself — it only holds an ordered layer collection and offers attach and detach entry points; layers are the units actually driven frame by frame, and both gameplay-logic layers and movie layers derive from one common abstract base. The innermost layer is the data: an observable view model that only exposes properties and change notifications and knows nothing about any widget, with widgets subscribing to it through data binding. The dependency direction can therefore only be stack manager → screen → layer → view model, and the reverse is never allowed. Once this main line is understood, writing an interface reduces to three acts: build a screen, stuff layers into it, and feed a view model to the movie layer.

## Mental Model

**First thing: this is a containment relationship, not three peer implementations.** Screen stack, screen, and layer sound like three parallel things, but in reality only the stack manager is the "manager" while screen and layer are the "managed", and between screen and layer there is a whole-to-part relationship. A screen object internally holds a layer list, and a layer only has meaning once it is attached to some screen through `AddLayer` at `ScreenBase.cs:333`; a layer detached from any screen is driven by nobody. Conversely, a layer does not care which screen it hangs on — it only implements the uniform per-frame interface. The direct benefit of this containment is that switching screens requires no per-listener unregistration: pop the screen off the stack and it, together with its whole layer group, simply loses the chance to be driven. Lifecycle follows the stack for free.

**Second thing: the complete Tick chain is fixed.** Every frame starts at `Tick(float dt)` in `ScreenManager.cs:318`, which only calls the frame update on the top screen; the top screen then traverses its owned layers and calls each layer's `Tick` in turn. In other words, the update order is decided jointly by two dimensions — the vertical depth of the stack and the horizontal order of layers within a screen — and the former has higher priority: all layers of the top screen run before any layer of the screen below it gets a chance. Rendering walks the render hooks of the same structure, so logic updates and drawing are naturally separated. If you want to inject custom logic, the correct move is to create a new layer and attach it to a screen, not to touch the stack manager.

**Third thing: each layer has its own timing and taboos.** The stack manager layer is only for "the whole interface is going away", e.g. from the campaign map into a battle or from a battle back to the main menu; it governs mutually exclusive global state, so do not use it for panels that stack on the same screen. The screen layer is for "one self-consistent interface"; it owns a protected initialize hook and a protected finalize hook, which is the place for one-time resource acquisition and release. The layer layer is for "one independently toggleable part of the interface", such as a minimap, a quest hint, or a dialogue panel — when you need frequent show/hide, use a layer instead of pushing and popping screens repeatedly. The view model layer is for "pure data and state"; it should be constructible and testable with no interface present. On dependencies: the stack manager depends on the screen abstraction, the screen depends on the layer abstraction, and the movie layer depends on the view model interface; any reverse reference turns the cleanup order at screen switch into a quagmire. Failure modes are also distinctive: stack errors usually show up as a frozen or doubly-stacked interface, layer attach errors show up as a part that never updates for a whole frame, and binding errors show up as stale data or null references on screen.

**Fourth thing: why a view model must never hold a widget.** Once a view model holds a widget reference, the data layer depends on the presentation layer, the widget's lifecycle (which dies when the screen is popped) pollutes the data layer, and screen switches produce dangling references and duplicate subscriptions. The correct shape is that the view model only emits change notifications and the binding layer pushes new values to the widgets; the notification capability for this is provided by `ViewModel.cs:249` and `ViewModel.cs:263`. This way the view model can be driven directly by unit tests and can be re-bound to a brand-new widget set after the interface is rebuilt, with no residual state.

**Finally, three errors in the old documentation must be corrected.** First, the stack manager is a static class and has no instance property, so `ScreenManager.Instance.PushScreen(...)` does not compile — the correct form is `ScreenManager.PushScreen(...)`. Second, the screen's initialize and finalize hooks are protected virtual methods; external code cannot call them directly, it can only override them in a derived class. Third, the movie layer has no method to set the view model — the view model is passed in as an argument when the movie is loaded, so loading is binding. These three errors are three faces of one single misunderstanding: reading layered collaboration as a set of peer utilities that may be called at will.

## How To Use

1. Derive your own screen class from the screen base class and override the protected initialize hook at `ScreenBase.cs:264`; put one-time resource acquisition and layer setup here. The matching finalize hook is at `ScreenBase.cs:269` and releases in pairs.
2. Inside the initialize hook, construct a movie layer; the constructor signature is at `GauntletLayer.cs:86` and needs a layer name, its order value within the screen, and the order value decides the sequence of several layers on the same screen.
3. Construct your own view model instance and put all state the interface must display into it; the notification capability comes from `ViewModel.cs:249`.
4. Hand the movie name and the view model to the layer together using the load method at `GauntletLayer.cs:130`; the load action completes the binding at the same time, and afterwards changes raised by the view model are pushed to the widgets inside the movie.
5. Attach this layer to the current screen with `AddLayer` at `ScreenBase.cs:333`; only after attachment does it enter the per-frame update sequence.
6. Push the whole screen onto the stack with `ScreenManager.cs:608`; it immediately becomes the top of the stack and starts receiving frame updates; on exit, pop it with `ScreenManager.cs:633` and control returns to the next screen.
7. During screen finalization, release the movie with `GauntletLayer.cs:154` to unbind and reclaim movie resources; to detach a layer use `ScreenBase.cs:361`.

## Key Members

| Symbol | file:line | What it does |
| --- | --- | --- |
| `ScreenManager` | `ScreenManager.cs:14` | Static holder of the screen stack and the single global entry point; all screen switching goes through it, so it needs no instance and none may be created. |
| `ScreenManager.TopScreen` | `ScreenManager.cs:124` | Read-only property exposing the current top screen so external code can ask "what state is the interface in right now"; note it only has a getter. |
| `ScreenManager.Tick` | `ScreenManager.cs:318` | The per-frame master entry point; it only drives the top screen and is the start of the whole update chain. |
| `ScreenManager.PushScreen` | `ScreenManager.cs:608` | Pushes a screen onto the top of the stack; the previous top stops receiving frame updates and the new screen begins initializing. |
| `ScreenManager.PopScreen` | `ScreenManager.cs:633` | Pops the top of the stack and hands control back to the next screen; the only correct way to leave the current interface. |
| `ScreenBase` | `ScreenBase.cs:9` | Abstract screen base class defining the layer container and the lifecycle hooks; derive from it to join the screen stack. |
| `ScreenBase.Layers` | `ScreenBase.cs:333` | Read-only layer collection; external code can query which layers the current screen holds, but additions and removals must go through the dedicated methods. |
| `ScreenBase.OnInitialize` | `ScreenBase.cs:264` | Protected initialize virtual method, invoked after the screen is pushed; the standard place to set up layers. |
| `ScreenBase.OnFinalize` | `ScreenBase.cs:269` | Protected finalize virtual method, paired with initialize, used to release one-time resources. |
| `ScreenBase.AddLayer` | `ScreenBase.cs:333` | Attaches a layer to this screen; once attached the layer enters the per-frame update sequence. |
| `ScreenBase.RemoveLayer` | `ScreenBase.cs:361` | Detaches a layer from this screen, used to dynamically close a part while the interface is running. |
| `ScreenLayer` | `ScreenLayer.cs:10` | Abstract layer base class, the common parent of gameplay-logic layers and movie layers; implements a comparison interface to support ordering. |
| `ScreenLayer.Name` | `ScreenLayer.cs:20` | Layer name, read-only, for debugging and log location; it takes no part in update logic. |
| `ScreenLayer.Tick` | `ScreenLayer.cs:107` | Protected per-frame logic hook; override it when writing a custom gameplay-logic layer. |
| `ScreenLayer.RenderTick` | `ScreenLayer.cs:117` | Protected per-frame render hook, separated from the logic hook so draw timing can be controlled independently. |
| `ScreenLayer.Update` | `ScreenLayer.cs:122` | Protected input-handling hook receiving the key list of the previous frame; the entry point for layer-level input interception. |
| `GauntletLayer` | `GauntletLayer.cs:15` | Movie layer, wiring a Gauntlet movie into the layer system; the layer type most interfaces actually use. |
| `GauntletLayer..ctor` | `GauntletLayer.cs:86` | Constructs a movie layer, taking the layer name, the order value, and a clear-screen flag. |
| `GauntletLayer.LoadMovie` | `GauntletLayer.cs:130` | Loads a movie by name and binds the view model at the same time; loading is binding, there is no separate bind step. |
| `GauntletLayer.ReleaseMovie` | `GauntletLayer.cs:154` | Releases the movie and unbinds it; must be called during finalization to avoid resource leaks. |
| `ViewModel.OnPropertyChanged` | `ViewModel.cs:249` | Raises a property-change notification, able to take the property name automatically from the caller member name; the starting point of binding push. |
| `ViewModel.OnPropertyChangedWithValue` | `ViewModel.cs:263` | Value-carrying notification overload; value-type properties use it to avoid boxing and push the new value directly. |

## Real Example

```csharp
using System.Collections.Generic;
using TaleWorlds.Engine.GauntletUI;
using TaleWorlds.Library;
using TaleWorlds.ScreenSystem;

// View model: data and notifications only, no widget references
public class MyPanelViewModel : ViewModel
{
    private string _title = "Unnamed";

    public string Title
    {
        get => _title;
        set
        {
            if (_title == value) return;
            _title = value;
            OnPropertyChanged();                 // ViewModel.cs:249
        }
    }

    public void Refresh(string newTitle)
    {
        Title = newTitle;
    }
}

// Screen: owns the layer, responsible for setup and teardown
public class MyScreen : ScreenBase
{
    private GauntletLayer _layer;
    private MyPanelViewModel _viewModel;

    protected override void OnInitialize()               // ScreenBase.cs:264
    {
        base.OnInitialize();
        _viewModel = new MyPanelViewModel();
        _viewModel.Refresh("Ready");

        _layer = new GauntletLayer("MyLayer", 100);      // GauntletLayer.cs:86
        _layer.LoadMovie("MyMovie", _viewModel);         // GauntletLayer.cs:130
        AddLayer(_layer);                                 // ScreenBase.cs:333
    }

    protected override void OnFinalize()                 // ScreenBase.cs:269
    {
        if (_layer != null)
        {
            _layer.ReleaseMovie();                        // GauntletLayer.cs:154
            RemoveLayer(_layer);                          // ScreenBase.cs:361
            _layer = null;
        }
        _viewModel = null;
        base.OnFinalize();
    }
}

// Entry point: push with the static method, never write ScreenManager.Instance
public static class MyScreenLauncher
{
    public static void Open()
    {
        ScreenManager.PushScreen(new MyScreen());         // ScreenManager.cs:608
    }

    public static void Close()
    {
        ScreenManager.PopScreen();                        // ScreenManager.cs:633
    }
}
```

## See Also

- [GameModel decorator pattern](../gamemodel-decorator)
- [Mission lifecycle](../mission-lifecycle)
- [ViewModel class page](../../api/core-extra/ViewModel)
- [ScreenManager class page](../../api/gui/ScreenManager)
- [GauntletLayer class page](../../api/engine/GauntletLayer)

## Navigation

- ↑ Parent: [..](../)
- ↔ Sibling: [GameModel decorator pattern](../gamemodel-decorator) | [Save object graph](../save-object-graph) | [Action family](../action-family)
- Related class pages: [ScreenBase](../../api/campaign-ext/ScreenBase) | [ScreenLayer](../../api/campaign-ext/ScreenLayer)
