---
title: "WindowsForm"
description: "Auto-generated class reference for WindowsForm."
---
# WindowsForm

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `public class WindowsForm`
**Base:** none
**File:** `TaleWorlds.TwoDimension.Standalone/WindowsForm.cs`

## Overview

`WindowsForm` lives in `TaleWorlds.TwoDimension.Standalone` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension.Standalone` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Width` | `public int Width { get; set; }` |
| `Height` | `public int Height { get; set; }` |
| `Text` | `public string Text { get; set; }` |
| `Handle` | `public IntPtr Handle { get; set; }` |

## Key Methods

### SetParent
`public void SetParent(IntPtr parentHandle)`

**Purpose:** Assigns a new value to `parent` and updates the object's internal state.

```csharp
// Obtain an instance of WindowsForm from the subsystem API first
WindowsForm windowsForm = ...;
windowsForm.SetParent(parentHandle);
```

### Show
`public void Show()`

**Purpose:** Displays the UI or element associated with the current object.

```csharp
// Obtain an instance of WindowsForm from the subsystem API first
WindowsForm windowsForm = ...;
windowsForm.Show();
```

### Hide
`public void Hide()`

**Purpose:** Hides the UI or element associated with the current object.

```csharp
// Obtain an instance of WindowsForm from the subsystem API first
WindowsForm windowsForm = ...;
windowsForm.Hide();
```

### Destroy
`public void Destroy()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of WindowsForm from the subsystem API first
WindowsForm windowsForm = ...;
windowsForm.Destroy();
```

### AddMessageHandler
`public void AddMessageHandler(WindowsFormMessageHandler messageHandler)`

**Purpose:** Adds `message handler` to the current collection or state.

```csharp
// Obtain an instance of WindowsForm from the subsystem API first
WindowsForm windowsForm = ...;
windowsForm.AddMessageHandler(messageHandler);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
WindowsForm windowsForm = ...;
windowsForm.SetParent(parentHandle);
```

## See Also

- [Area Index](../)