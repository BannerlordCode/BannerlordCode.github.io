---
title: "NativeMessageBox"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NativeMessageBox`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NativeMessageBox

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class NativeMessageBox`
**Area:** mission-ext

## Overview

`NativeMessageBox` lives in `TaleWorlds.MountAndBlade.Launcher.Library`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Launcher.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Show
`public static NativeMessageBox.Result Show(string text, string caption = "Message", NativeMessageBox.Buttons buttons = NativeMessageBox.Buttons.OK, NativeMessageBox.Icon icon = NativeMessageBox.Icon.None)`

**Purpose:** Handles logic related to `show`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
NativeMessageBox.Show("example", "example", nativeMessageBox.Buttons.OK, nativeMessageBox.Icon.None);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
