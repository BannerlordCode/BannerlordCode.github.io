---
title: "UI Three-Layer Architecture"
description: "ScreenManager / GauntletLayer / ViewModel responsibility boundaries and lifecycle"
---

## One-Line Summary

Game UI is built from three collaborating layers: **ScreenManager** manages the Screen stack (push/pop), **GauntletLayer** is the base class for Gauntlet UI layers handling frame rendering and input, and **ViewModel** is the data-binding layer connecting logic to view.

## Mental Model

### Three-Layer Responsibility Boundaries

| Layer | Class | Responsibility | Lifecycle |
|---|---|---|---|
| Stack Management | `ScreenManager` | Maintains Screen stack, handles Push/Pop, drives Tick/Render | Global singleton, lives for entire game session |
| UI Layer | `GauntletLayer` | Base class for Gauntlet UI, manages Widget tree, frame updates, input dispatch | Created/destroyed with Screen |
| Data Layer | `ViewModel` | Data-binding base class, notifies View via `OnPropertyChanged` | Created with Layer, released on Screen close |

### Screen Lifecycle

1. **Push**: `ScreenManager.PushScreen(screen)` pushes Screen onto stack, calls `screen.OnInitialize()`
2. **Tick**: Each frame `ScreenManager.Tick(dt)` drives top Screen's `OnTick(dt)`
3. **Render**: `ScreenManager.Render()` drives top Screen's `OnRender()`
4. **Pop**: `ScreenManager.PopScreen()` pops stack, calls `screen.OnFinalize()`

### ViewModel ↔ View Binding

- ViewModel extends `TaleWorlds.Library.ViewModel`
- Notifies View of property changes via `OnPropertyChanged(string propertyName)`
- View (Widget) auto-responds to `RefreshValues()` through data binding
- Custom VM must override `RefreshValues()` to sync from game state

### When to Use Which Layer

- **Need full-screen UI**: Extend `ScreenBase`, push via `ScreenManager.PushScreen`
- **Need Gauntlet UI components**: Extend `GauntletLayer`, build Widget tree in `Initialize`
- **Need data binding**: Extend `ViewModel`, create and bind in Layer

## Real Minimal Example

```csharp
// Custom ViewModel: binds a counter
public class MyCounterViewModel : TaleWorlds.Library.ViewModel
{
    private int _count;
    public int Count
    {
        get => _count;
        set { _count = value; OnPropertyChanged(nameof(Count)); }
    }

    public void Increment() => Count++;
}

// Custom GauntletLayer: attaches ViewModel
public class MyScreenLayer : TaleWorlds.Engine.GauntletUI.GauntletLayer
{
    private MyCounterViewModel _vm;
    public MyScreenLayer(int layerIndex = 0) : base(layerIndex) { }

    protected override void Tick(float dt)
    {
        base.Tick(dt);
        _vm = new MyCounterViewModel();
        this.SetViewModel(_vm);
    }
}

// Custom Screen: push into ScreenManager
public class MyScreen : TaleWorlds.ScreenSystem.ScreenBase
{
    private MyScreenLayer _layer;
    public override void OnInitialize()
    {
        _layer = new MyScreenLayer();
        TaleWorlds.ScreenSystem.ScreenManager.Instance.PushScreen(this);
    }
}
```

### Key Source Locations

| Symbol | file:line | Actual content |
|---|---|---|
| `ScreenManager.PushScreen` | `ScreenManager.cs:608` | `public static void PushScreen(ScreenBase screen)` |
| `GauntletLayer.Tick` | `GauntletLayer.cs:188` | `protected override void Tick(float dt)` |
| `ViewModel.OnPropertyChanged` | `ViewModel.cs:249` | `public void OnPropertyChanged([CallerMemberName] string propertyName = null)` |

## Common Misuses

1. **Directly manipulating View from ViewModel**: VM should only hold data state; View operations should go through bindings or events. Directly referencing Widgets breaks layering.
2. **Forgetting `base.Tick(dt)`**: GauntletLayer subclasses overriding `Tick` must call the base implementation, or the frame update chain breaks.
3. **Pushing Screen without managing the return stack**: If you PushScreen without PopScreen at the right time, the Screen stack leaks and input conflicts arise.
4. **ViewModel not overriding `RefreshValues()`**: Custom VM that does not sync from game state will display stale values in the View.

## Navigation

- ↑ Parent: [..](../)
- ↔ Siblings: [GameModel Decorator](../gamemodel-decorator) | [Mission Lifecycle](../mission-lifecycle) | [Campaign Event System](../campaign-event-system)
- Related class pages: `ScreenManager` / `ScreenBase` / `ScreenLayer` (code snippets; links handled by later pass)

## Section Schema Declaration

This page uses architecture hub form: One-Line Summary=Overview; Mental Model=Mental Model; Real Minimal Example=How to Use + Real Example; Common Misuses=Mental Model Expansion; Navigation=See Also.
