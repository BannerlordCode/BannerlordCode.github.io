---
title: "ViewCreatorModule"
description: "Auto-generated class reference for ViewCreatorModule."
---
# ViewCreatorModule

> ⚠ 本页为自动生成的类参考，示例未经源码核对，勿直接引用其中的 API。

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ViewCreatorModule : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.MountAndBlade/ViewCreatorModule.cs`

## Overview

`ViewCreatorModule` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
ViewCreatorModule instance = ...;
```

## See Also

- [Area Index](../)