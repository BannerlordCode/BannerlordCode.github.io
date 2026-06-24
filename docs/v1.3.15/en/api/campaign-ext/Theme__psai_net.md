<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Theme`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `theme interruption behavior requires evaluation of segment compatibilities`.

### ThemeTypeToString
`public static string ThemeTypeToString(ThemeType themeType)`

**Purpose:** Handles logic related to `theme type to string`.

### GetThemeInterruptionBehavior
`public static ThemeInterruptionBehavior GetThemeInterruptionBehavior(ThemeType sourceThemeType, ThemeType targetThemeType)`

**Purpose:** Gets the current value of `theme interruption behavior`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

## Usage Example

```csharp
Theme.ThemeInterruptionBehaviorRequiresEvaluationOfSegmentCompatibilities(interruptionBehavior);
```

## See Also

- [Complete Class Catalog](../catalog)