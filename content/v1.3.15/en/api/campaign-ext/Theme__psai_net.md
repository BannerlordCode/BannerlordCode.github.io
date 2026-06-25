---
title: "Theme"
description: "Auto-generated class reference for Theme."
---
# Theme

**Namespace:** psai.net
**Module:** psai.net
**Type:** `public class Theme`
**Base:** none
**File:** `TaleWorlds.PSAI/net/Theme.cs`

## Overview

`Theme` lives in `psai.net` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `psai.net` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ThemeInterruptionBehaviorRequiresEvaluationOfSegmentCompatibilities
`public static bool ThemeInterruptionBehaviorRequiresEvaluationOfSegmentCompatibilities(ThemeInterruptionBehavior interruptionBehavior)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Theme.ThemeInterruptionBehaviorRequiresEvaluationOfSegmentCompatibilities(interruptionBehavior);
```

### ThemeTypeToString
`public static string ThemeTypeToString(ThemeType themeType)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Theme.ThemeTypeToString(themeType);
```

### GetThemeInterruptionBehavior
`public static ThemeInterruptionBehavior GetThemeInterruptionBehavior(ThemeType sourceThemeType, ThemeType targetThemeType)`

**Purpose:** Reads and returns the `theme interruption behavior` value held by the current object.

```csharp
// Static call; no instance required
Theme.GetThemeInterruptionBehavior(sourceThemeType, targetThemeType);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the current object.

```csharp
// Obtain an instance of Theme from the subsystem API first
Theme theme = ...;
var result = theme.ToString();
```

## Usage Example

```csharp
Theme.ThemeInterruptionBehaviorRequiresEvaluationOfSegmentCompatibilities(interruptionBehavior);
```

## See Also

- [Area Index](../)