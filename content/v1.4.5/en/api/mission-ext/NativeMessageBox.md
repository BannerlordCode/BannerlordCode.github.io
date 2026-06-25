---
title: "NativeMessageBox"
description: "Auto-generated class reference for NativeMessageBox."
---
# NativeMessageBox

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class NativeMessageBox`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.Launcher.Library/TaleWorlds.MountAndBlade.Launcher.Library/NativeMessageBox.cs`

## Overview

`NativeMessageBox` lives in `TaleWorlds.MountAndBlade.Launcher.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Launcher.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Show
`public static Result Show(string text, string caption = "Message", Buttons buttons = Buttons.OK, Icon icon = Icon.None)`

**Purpose:** Displays the UI or element associated with the this instance.

```csharp
// Static call; no instance required
NativeMessageBox.Show("example", "example", buttons.OK, icon.None);
```

## Usage Example

```csharp
NativeMessageBox.Show("example", "example", buttons.OK, icon.None);
```

## See Also

- [Area Index](../)