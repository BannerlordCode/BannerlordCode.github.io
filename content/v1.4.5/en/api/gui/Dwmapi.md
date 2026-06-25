---
title: "Dwmapi"
description: "Auto-generated class reference for Dwmapi."
---
# Dwmapi

**Namespace:** TaleWorlds.TwoDimension.Standalone.Native.Windows
**Module:** TaleWorlds.TwoDimension
**Type:** `internal static class Dwmapi`
**Base:** none
**File:** `bin/TaleWorlds.TwoDimension.Standalone/TaleWorlds.TwoDimension.Standalone.Native.Windows/Dwmapi.cs`

## Overview

`Dwmapi` lives in `TaleWorlds.TwoDimension.Standalone.Native.Windows` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension.Standalone.Native.Windows` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### DwmEnableBlurBehindWindow
`public static extern IntPtr DwmEnableBlurBehindWindow(IntPtr hwnd, ref DwmBlurBehind ppfd)`

**Purpose:** **Purpose:** Executes the DwmEnableBlurBehindWindow logic.

```csharp
// Static call; no instance required
Dwmapi.DwmEnableBlurBehindWindow(hwnd, ppfd);
```

## Usage Example

```csharp
Dwmapi.DwmEnableBlurBehindWindow(hwnd, ppfd);
```

## See Also

- [Area Index](../)