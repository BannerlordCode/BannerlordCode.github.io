---
title: "BannerDebugInfo"
description: "Auto-generated class reference for BannerDebugInfo."
---
# BannerDebugInfo

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct BannerDebugInfo`
**Base:** none
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails/BannerDebugInfo.cs`

## Overview

`BannerDebugInfo` lives in `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateManual
`public static BannerDebugInfo CreateManual(string sourceName)`

**Purpose:** Constructs a new `manual` entity and returns it to the caller.

```csharp
// Static call; no instance required
BannerDebugInfo.CreateManual("example");
```

### CreateWidget
`public static BannerDebugInfo CreateWidget(string sourceName)`

**Purpose:** Constructs a new `widget` entity and returns it to the caller.

```csharp
// Static call; no instance required
BannerDebugInfo.CreateWidget("example");
```

### CreateName
`public string CreateName()`

**Purpose:** Constructs a new `name` entity and returns it to the caller.

```csharp
// Obtain an instance of BannerDebugInfo from the subsystem API first
BannerDebugInfo bannerDebugInfo = ...;
var result = bannerDebugInfo.CreateName();
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the current object.

```csharp
// Obtain an instance of BannerDebugInfo from the subsystem API first
BannerDebugInfo bannerDebugInfo = ...;
var result = bannerDebugInfo.ToString();
```

## Usage Example

```csharp
BannerDebugInfo.CreateManual("example");
```

## See Also

- [Area Index](../)