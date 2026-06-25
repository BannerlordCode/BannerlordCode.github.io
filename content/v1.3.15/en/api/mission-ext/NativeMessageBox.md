---
title: "NativeMessageBox"
description: "Auto-generated class reference for NativeMessageBox."
---
# NativeMessageBox

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class NativeMessageBox`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/NativeMessageBox.cs`

## Overview

`NativeMessageBox` lives in `TaleWorlds.MountAndBlade.Launcher.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Launcher.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Show
`public static NativeMessageBox.Result Show(string text, string caption = "Message", NativeMessageBox.Buttons buttons = NativeMessageBox.Buttons.OK, NativeMessageBox.Icon icon = NativeMessageBox.Icon.None)`

**Purpose:** **Purpose:** Displays the UI or element associated with the this instance.

```csharp
// Static call; no instance required
NativeMessageBox.Show("example", "example", nativeMessageBox.Buttons.OK, nativeMessageBox.Icon.None);
```

## Usage Example

```csharp
NativeMessageBox.Show("example", "example", nativeMessageBox.Buttons.OK, nativeMessageBox.Icon.None);
```

## See Also

- [Area Index](../)