---
title: "WindowsForm"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WindowsForm`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# WindowsForm

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `public class WindowsForm`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.TwoDimension.Standalone/TaleWorlds.TwoDimension.Standalone/WindowsForm.cs`

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

**Purpose:** Sets the value or state of `parent`.

### Show
`public void Show()`

**Purpose:** Handles logic related to `show`.

### Hide
`public void Hide()`

**Purpose:** Handles logic related to `hide`.

### Destroy
`public void Destroy()`

**Purpose:** Handles logic related to `destroy`.

### AddMessageHandler
`public void AddMessageHandler(WindowsFormMessageHandler messageHandler)`

**Purpose:** Adds `message handler` to the current collection or state.

## Usage Example

```csharp
var value = new WindowsForm();
value.SetParent(parentHandle);
```

## See Also

- [Complete Class Catalog](../catalog)