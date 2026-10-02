---
title: "ViewModel"
description: "The data-binding base class behind Gauntlet UI: implements INotifyPropertyChanged, maintains a reflection index of properties and methods, dispatches commands by name, and resolves binding paths across nested view-model trees. Every custom UI panel derives from it."
---
# ViewModel

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public abstract class ViewModel : IViewModel, INotifyPropertyChanged`
**Base:** none; implements `TaleWorlds.Library.IViewModel` and `System.ComponentModel.INotifyPropertyChanged`
**Source:** `TaleWorlds.Library/ViewModel.cs` (declaration at line 10)

## Overview

`ViewModel` is where the data half of Bannerlord's UI lives. Gauntlet does not use a static XAML-style binding tree; it resolves bindings **at runtime, by name**. A prefab names a property; the engine calls `GetPropertyValue("SomeText")`; the value is read, and a subscription to `PropertyChanged` keeps it current afterwards.

This class supplies that machinery, in four parts.

**Change notification.** `OnPropertyChanged(string propertyName)` raises the plain `INotifyPropertyChanged` event. `OnPropertyChangedWithValue<T>` has a set of overloads that carry the new value with the notification — one generic overload constrained to `where T : class`, and concrete overloads for `bool`, `int`, `float`, `uint`, `double`, `Color` and `Vec2` — each backed by its own typed event so the UI side does not have to unbox. `SetField<T>(ref T field, T value, string propertyName)` is the workhorse: it assigns and notifies, and returns whether the value actually changed.

**The reflection index.** `RefreshPropertyAndMethodInfos()` is a **static** rebuild of the process-wide tables. `Properties` and `Methods` hold the resulting `Dictionary<string, PropertyInfo>` and `Dictionary<string, MethodInfo>`, and the private nested `DataSourceTypeBindingPropertiesCollection` bundles the two. `GetPropertyValue`, `GetPropertyType` and `SetPropertyValue` are the named accessors.

**Command dispatch.** `ExecuteCommand(string commandName, object[] parameters)` looks the name up in `Methods` and invokes it. This is how a button in a prefab reaches your code without a delegate.

**Path resolution.** `GetViewModelAtPath(BindingPath path)` and its `GetViewModelAtPath(BindingPath path, bool isList)` overload walk into nested view-model trees, where a middle segment may legitimately be absent.

`UIDebugMode` is a static flag that turns on richer diagnostics for binding failures. `OnFinalize()` is the teardown hook, and `RefreshValues()` is the virtual recompute entry point.

## Mental Model

Three rules cover almost everything, and each one fails silently when broken.

**Public properties are the binding surface, and a wrong name is invisible.** A prefab that names `VM.SomeText` will find whatever property is called exactly that. There is no compile-time check, no exception — an unmatched name yields null and a blank widget. Before you start auditing your update code, turn on `ViewModel.UIDebugMode`.

**Notify on every change, and only on real changes.** `SetField(ref _x, value, nameof(X))` is the normal path: it assigns, compares, and raises only when the value differs. That comparison is what keeps a value that ticks every frame from repainting the UI every frame. Writing to the backing field directly and then calling `OnPropertyChanged` by hand works but is easy to get wrong; calling `base.RefreshValues()` after an override is equally easy to forget.

**Commands are public methods resolved by name.** The prefab's command name is matched against `Methods`. A mismatch produces no error — the button simply does nothing. A method invoked through a command must be callable with the parameter shape the prefab supplies; a method with no parameters is the safe default.

**Path resolution returns null, it does not throw.** `GetViewModelAtPath` treats a missing segment as a null result. Nested trees routinely have absent middle layers, so callers must check each level.

**Two static, process-wide things need care.** `RefreshPropertyAndMethodInfos()` rebuilds the index for every view model in the process; after a hot reload, a newly added member is not bindable until it runs. `UIDebugMode` is likewise global.

**Lifetime belongs to the screen stack.** A view model is created by its screen and destroyed with it. A static field holding one survives the screen and hands you a dead object next time.

## When to Use / When Not To Use

- **Use** as the base class for the data side of any custom Gauntlet panel.
- **Use** `SetField` in every binding property so notification happens exactly once and only on change.
- **Use** `ExecuteCommand` for button actions, rather than wiring delegates in code.
- **Use** `RefreshValues()` to compute initial and refreshed values; override it and call `base`.
- **Use** `ViewModel.UIDebugMode` when a bound widget is blank.
- **Do not** cache `PropertyInfo` or `MethodInfo` yourself to bypass `Properties` and `Methods`; the shared index is what survives a rebuild.
- **Do not** mutate one notifying property from another property's change handler; that is how notification storms start.
- **Do not** keep a view model in a static field — the screen stack owns its lifetime.
- **Do not** expect `OnPropertyChangedWithValue` for arbitrary structs; it has overloads for `class`, `bool`, `int`, `float`, `uint`, `double`, `Color` and `Vec2` only.

## Members

### Change notification

| Member | What it is for |
| --- | --- |
| `protected bool SetField<T>(ref T field, T value, string propertyName)` | **The normal write path.** Assigns, notifies only if the value changed, returns whether it changed. |
| `public void OnPropertyChanged([CallerMemberName] string propertyName = null)` | Raises the plain change notification; the property name is filled in by the compiler. |
| `public void OnPropertyChangedWithValue<T>(T value, [CallerMemberName] string propertyName = null) where T : class` | Reference-type overload carrying the new value. |
| `OnPropertyChangedWithValue(bool value, ...)` | Concrete value-type overload for `bool`. |
| `OnPropertyChangedWithValue(int value, ...)` | Concrete value-type overload for `int`. |
| `OnPropertyChangedWithValue(float value, ...)` | Concrete value-type overload for `float`. |
| `OnPropertyChangedWithValue(uint value, ...)` | Concrete value-type overload for `uint`. |
| `OnPropertyChangedWithValue(double value, ...)` | Concrete value-type overload for `double`. |
| `OnPropertyChangedWithValue(Color value, ...)` | Concrete overload for `TaleWorlds.Core.Color`. |
| `OnPropertyChangedWithValue(Vec2 value, ...)` | Concrete overload for `TaleWorlds.Core.Vec2`. |
| `event PropertyChangedEventHandler PropertyChanged` | The `INotifyPropertyChanged` event the binding engine subscribes to. Do not raise it yourself; call `OnPropertyChanged`. |
| `event PropertyChangedWithValueEventHandler PropertyChangedWithValue` | Typed counterpart of `PropertyChangedWithValue`. |
| `event PropertyChangedWithBoolValueEventHandler PropertyChangedWithBoolValue` | Typed `bool` notification event. |
| `event PropertyChangedWithIntValueEventHandler PropertyChangedWithIntValue` | Typed `int` notification event. |
| `event PropertyChangedWithFloatValueEventHandler PropertyChangedWithFloatValue` | Typed `float` notification event. |
| `event PropertyChangedWithUIntValueEventHandler PropertyChangedWithUIntValue` | Typed `uint` notification event. |
| `event PropertyChangedWithDoubleValueEventHandler PropertyChangedWithDoubleValue` | Typed `double` notification event. |
| `event PropertyChangedWithColorValueEventHandler PropertyChangedWithColorValue` | Typed `Color` notification event. |
| `event PropertyChangedWithVec2ValueEventHandler PropertyChangedWithVec2Value` | Typed `Vec2` notification event. |
| `public virtual void OnFinalize()` | Teardown hook. Unsubscribe from external sources and drop references here. |
| `public virtual void RefreshValues()` | Recomputes everything bindable. Call once at construction, and again when the data source changes. |

### The reflection index

| Member | What it is for |
| --- | --- |
| `public static void RefreshPropertyAndMethodInfos()` | **Static, process-wide** rebuild of the property and method tables. Needed after a hot reload before a newly added member becomes bindable. |
| `public object GetPropertyValue(string name)` | The binding engine's main entry point. Returns null for an unknown name. |
| `public object GetPropertyValue(string name, PropertyTypeFeeder propertyTypeFeeder)` | Same, with type feedback for widgets that need to distinguish types. |
| `public Type GetPropertyType(string name)` | The declared type of a named property; null when there is none. |
| `public void SetPropertyValue(string name, object value)` | Writes a named property. **A type mismatch throws** — that is the diagnostic signal for a bad two-way binding. |
| `public Dictionary<string, PropertyInfo> Properties { get; set; }` | The property index. Writable, and rewriting it points the whole binding system at the wrong members. |
| `public Dictionary<string, MethodInfo> Methods { get; set; }` | The method index used by command dispatch. |

### Command dispatch

| Member | What it is for |
| --- | --- |
| `public void ExecuteCommand(string commandName, object[] parameters)` | Invokes a public method by name. **An unmatched name fails silently** — the symptom is a button that does nothing. |

### Path resolution

| Member | What it is for |
| --- | --- |
| `public object GetViewModelAtPath(BindingPath path)` | Walks into a nested view-model tree. **A missing segment returns null; it does not throw.** |
| `public object GetViewModelAtPath(BindingPath path, bool isList)` | The same, flagging whether the final segment is a list. |

### Helper contracts and switches

| Member | What it is for |
| --- | --- |
| `public interface IViewModelGetterInterface` | Declares the read-only getter contract for binding interfaces. |
| `public interface IViewModelSetterInterface` | Declares the writable setter contract for two-way bindings. |
| `public static bool UIDebugMode` | **Static switch.** Turns on richer diagnostics for binding failures. The first thing to enable when a bound widget is blank. |

## Examples

### Example 1: The standard shape — SetField, a command, RefreshValues

```csharp
using TaleWorlds.Library;

public class MyPanelViewModel : ViewModel
{
    private string _titleText = "";
    private int _count;

    public string TitleText
    {
        get { return _titleText; }
        set { SetField(ref _titleText, value, nameof(TitleText)); }
    }

    public int Count
    {
        get { return _count; }
        set { SetField(ref _count, value, nameof(Count)); }
    }

    // A prefab button with CommandName="Increment" lands here
    public void Increment()
    {
        Count = Count + 1;
    }

    public override void RefreshValues()
    {
        base.RefreshValues();

        TitleText = "Initial title";
        Count = 0;
    }
}
```

### Example 2: Read a value back the way the engine does

Use the named accessors when you want to check a binding rather than your own field.

```csharp
using TaleWorlds.Library;

public class MyPanelViewModel : ViewModel
{
    private string _statusText = "";

    public MyPanelViewModel()
    {
        RefreshValues();
        StatusText = "Ready";
    }

    public string StatusText
    {
        get { return _statusText; }
        set { SetField(ref _statusText, value, nameof(StatusText)); }
    }

    // SetStatus(string) is what a parameterised prefab command invokes
    public void SetStatus(string text)
    {
        StatusText = text;
    }

    public void RefreshPanel()
    {
        // Same route as a button click
        ExecuteCommand("SetStatus", new object[] { "Refreshed" });
    }

    public string ReadBackStatus()
    {
        return GetPropertyValue("StatusText") as string;
    }

    public System.Type StatusType()
    {
        return GetPropertyType("StatusText");
    }
}
```

### Example 3: Turn on diagnostics when a binding is blank

```csharp
using TaleWorlds.Library;

public static void EnableBindingDiagnostics()
{
    // Static, process-wide: do this once, and only while debugging
    ViewModel.UIDebugMode = true;
}

public static bool IsBound(ViewModel viewModel, string propertyName)
{
    if (viewModel == null)
    {
        return false;
    }

    // A null type means the prefab name matches no property on this class
    return viewModel.GetPropertyType(propertyName) != null;
}
```

### Example 4: Guard a nested tree level by level

```csharp
using TaleWorlds.Library;

public class MyRootViewModel : ViewModel
{
    private MyChildViewModel _child;

    public MyChildViewModel Child
    {
        get { return _child; }
        set { SetField(ref _child, value, nameof(Child)); }
    }

    public bool HasChild()
    {
        // GetViewModelAtPath returns null for a missing segment rather than
        // throwing, so every level has to be checked
        return Child != null;
    }
}
```

## Risks and Boundaries

- **A misspelled binding name fails silently.** The prefab resolves to null and the widget stays blank. Enable `ViewModel.UIDebugMode` first; it is nearly always the binding, not the update code.
- **A mismatched command name fails silently.** "The button does nothing" almost always means the prefab's command name and the method name differ.
- **`SetPropertyValue` throws on a type mismatch.** A two-way binding that points an `int` at a string property raises at runtime rather than degrading.
- **`RefreshPropertyAndMethodInfos()` is process-wide.** Calling it at runtime affects every view model. After a hot reload, a new property is not bindable until it runs.
- **The overload set is finite.** `OnPropertyChangedWithValue` covers `class`, `bool`, `int`, `float`, `uint`, `double`, `Color` and `Vec2`. Other structs go through plain `OnPropertyChanged(nameof(X))`.
- **`RefreshValues()` is virtual and must be chained.** An override that skips `base` skips whatever the base implementation does.
- **Single-threaded.** Notifications and command dispatch happen on the UI thread. Changing a field from a background thread and then notifying is a race — marshal first.
- **The screen stack owns the lifetime.** A view model in a static field outlives its screen and is handed back the next time that screen opens.
- **`Properties` and `Methods` are writable.** An external writer redirects the entire binding system.

## Dependencies

- **Upstream / providers**
  - [GauntletLayer](../../engine/GauntletLayer) receives the view model through `LoadMovie` and resolves the bindings against it.
  - [ScreenBase](../../gui/ScreenBase) owns the view model and drives its lifetime; [ScreenManager](../../gui/ScreenManager) manages the screen that carries it.
- **Peers / downstream**
  - [Game](../../core-extra/Game) and [MBSubModuleBase](../../core/MBSubModuleBase) decide when the owning screen is created.
  - [Campaign](../../campaign/Campaign) models are the usual data source; the view model is only the presentation layer.

## See Also

- ↑ Parent: [core-extra index](../)
- ↔ Related: [GauntletLayer](../../engine/GauntletLayer) · [ScreenBase](../../gui/ScreenBase) · [ScreenManager](../../gui/ScreenManager) · [Game](../../core-extra/Game) · [MBSubModuleBase](../../core/MBSubModuleBase) · [Chinese twin](../../../../zh/api/core-extra/ViewModel)