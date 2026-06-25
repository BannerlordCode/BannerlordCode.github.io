---
title: "Buttons"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Buttons`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Buttons

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum Buttons : uint`
**Base:** `uint`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Launcher.Library/TaleWorlds.MountAndBlade.Launcher.Library/NativeMessageBox.cs`

## Overview

`Buttons` lives in `TaleWorlds.MountAndBlade.Launcher.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Launcher.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
Buttons example = Buttons.Value;
```

## See Also

- [Complete Class Catalog](../catalog)