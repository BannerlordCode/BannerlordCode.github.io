---
title: "IViewModel"
description: "Base interface for the MVVM ViewModel layer in TaleWorlds.Library, defining typed property-change events and the binding-path protocol the Gauntlet UI uses to talk to ViewModels."
---

# IViewModel

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public interface IViewModel : INotifyPropertyChanged`
**Base:** `INotifyPropertyChanged`
**File:** `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/IViewModel.cs`

## Overview

`IViewModel` is the base interface for the MVVM ViewModel layer in `TaleWorlds.Library`. It extends `INotifyPropertyChanged` and adds a family of typed `PropertyChangedWithValue` events so the UI data-binding layer can subscribe to the exact property type it cares about without boxing the value into a generic `object`.

Beyond change notification, `IViewModel` defines the binding-path protocol that the Gauntlet UI uses to talk to ViewModels: `GetViewModelAtPath` navigates a tree of view models by path, `GetPropertyValue` and `SetPropertyValue` read and write a property by name, and `ExecuteCommand` invokes a named command with arguments. Together these let the UI layer drive a ViewModel without knowing its concrete type.

The interface is implemented by the abstract class `ViewModel` (ViewModel.cs:9), which provides the base behavior most screens and mods build on. A mod almost never implements `IViewModel` directly; it derives from `ViewModel` and raises the typed events.

## Mental Model

Think of `IViewModel` as the contract between the UI and the data. The UI holds a reference to an `IViewModel` and speaks to it through binding paths — string addresses like `"SomeChild/SomeProperty"` — rather than through typed members. The ViewModel, in turn, tells the UI when something changed by raising the typed `PropertyChangedWithValue` events.

Key rules and invariants:

- The typed events are additive. Raising `PropertyChangedWithIntValue` does not raise `INotifyPropertyChanged.PropertyChanged`; a binding that only listens to `PropertyChanged` will not see the typed notification. Raise both when a property changes in a way that should refresh every subscriber.
- `BindingPath` is the path type. A path is a `/`-separated address into the ViewModel tree; `GetViewModelAtPath` resolves it to a child ViewModel, and the two-argument overload takes an `isList` flag that alters how the path is resolved.
- `GetPropertyValue` returns `object`, so the caller must cast. The `PropertyTypeFeeder` overload lets the binding layer describe the expected type so the ViewModel can convert or coerce the stored value.
- `SetPropertyValue` writes by name and is the write half of two-way binding; it is the mirror of `GetPropertyValue`.
- `ExecuteCommand` is the action half of the protocol: the UI invokes a named command (for example a button click) and the ViewModel decides what to do with the arguments.

## How to use

### How to get it

A mod does not usually construct an `IViewModel`. It derives from the abstract implementer `ViewModel` (ViewModel.cs:9), which already satisfies the interface. The source tree path is `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/ViewModel.cs`. Existing screens and Gauntlet views obtain their ViewModel through the UI framework's data-binding layer, which resolves the ViewModel at a `BindingPath` via `GetViewModelAtPath` (IViewModel.cs:23).

### Typical usage

A mod creates a `ViewModel` subclass, exposes properties, and raises the typed `PropertyChangedWithValue` events when those properties change. The UI layer subscribes to the typed event that matches the property's type, or binds through a `BindingPath` and calls `GetPropertyValue`/`SetPropertyValue` (IViewModel.cs:27, IViewModel.cs:31). To trigger an action, the UI calls `ExecuteCommand` (IViewModel.cs:33) with a command name and arguments.

### Pitfalls

- Forgetting to raise `INotifyPropertyChanged.PropertyChanged` alongside the typed event. The typed events are a convenience for the binding layer, not a replacement for the base notification.
- Assuming `GetViewModelAtPath` returns a non-null child for any path. The two-argument overload takes an `isList` flag (IViewModel.cs:25) that changes resolution; the single-argument form (IViewModel.cs:23) has its own default behavior.
- Casting the `object` returned by `GetPropertyValue` (IViewModel.cs:27) without checking the runtime type, especially when the value was stored as a different type.
- Treating `ExecuteCommand` (IViewModel.cs:33) as type-safe. The command name and arguments are resolved by the ViewModel at runtime, so a typo fails silently unless the ViewModel validates them.

## Key Members

| Member | Signature | What it is for |
| --- | --- | --- |
| `PropertyChangedWithValue` | `event PropertyChangedWithValueEventHandler PropertyChangedWithValue` | Base typed change notification that the binding layer subscribes to for property updates. |
| `PropertyChangedWithBoolValue` | `event PropertyChangedWithBoolValueEventHandler PropertyChangedWithBoolValue` | Raises a boxing-free `bool` change notification for boolean properties. |
| `PropertyChangedWithIntValue` | `event PropertyChangedWithIntValueEventHandler PropertyChangedWithIntValue` | Raises an `int` change notification without boxing. |
| `PropertyChangedWithFloatValue` | `event PropertyChangedWithFloatValueEventHandler PropertyChangedWithFloatValue` | Raises a `float` change notification without boxing. |
| `PropertyChangedWithUIntValue` | `event PropertyChangedWithUIntValueEventHandler PropertyChangedWithUIntValue` | Raises a `uint` change notification without boxing. |
| `PropertyChangedWithColorValue` | `event PropertyChangedWithColorValueEventHandler PropertyChangedWithColorValue` | Raises a `Color` change notification for color-valued properties. |
| `PropertyChangedWithDoubleValue` | `event PropertyChangedWithDoubleValueEventHandler PropertyChangedWithDoubleValue` | Raises a `double` change notification without boxing. |
| `PropertyChangedWithVec2Value` | `event PropertyChangedWithVec2ValueEventHandler PropertyChangedWithVec2Value` | Raises a `Vec2` change notification for 2D-vector properties. |
| `GetViewModelAtPath` | `object GetViewModelAtPath(BindingPath path)` | Resolves a binding path to the child ViewModel at that address. |
| `GetViewModelAtPath` | `object GetViewModelAtPath(BindingPath path, bool isList)` | Resolves a binding path, with an `isList` flag that alters how the path is resolved. |
| `GetPropertyValue` | `object GetPropertyValue(string name)` | Reads a property by name and returns it as `object` for the binding layer. |
| `GetPropertyValue` | `object GetPropertyValue(string name, PropertyTypeFeeder propertyTypeFeeder)` | Reads a property by name, using the feeder to describe the expected type. |
| `SetPropertyValue` | `void SetPropertyValue(string name, object value)` | Writes a property by name; the write half of two-way binding. |
| `ExecuteCommand` | `void ExecuteCommand(string commandName, object[] parameters)` | Invokes a named command with arguments; the action half of the protocol. |

## Real Example

```csharp
using TaleWorlds.Library;

public class MyScreenViewModel : ViewModel
{
    private int _count;
    private bool _isOpen;

    public int Count
    {
        get => _count;
        set
        {
            if (_count == value) return;
            _count = value;
            OnPropertyChanged();
            OnPropertyChangedWithValue(value);
        }
    }

    public bool IsOpen
    {
        get => _isOpen;
        set
        {
            if (_isOpen == value) return;
            _isOpen = value;
            OnPropertyChanged();
            OnPropertyChangedWithValue(value);
        }
    }

    public override void OnRefresh()
    {
        // Re-read data and raise the typed events so the UI updates.
    }
}
```

## See also
- [BindingPath](../BindingPath)
- [GameState](../GameState)

## Navigation
- [core-extra index](../)
- [BindingPath](../BindingPath)
