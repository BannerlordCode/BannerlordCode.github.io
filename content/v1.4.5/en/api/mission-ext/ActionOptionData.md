---
title: "ActionOptionData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ActionOptionData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ActionOptionData

**Namespace:** TaleWorlds.MountAndBlade.Options
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ActionOptionData : IOptionData`
**Base:** `IOptionData`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Options/ActionOptionData.cs`

## Overview

`ActionOptionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ActionOptionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `OnAction` | `public Action OnAction { get; }` |

## Key Methods

### Commit
`public void Commit()`

**Purpose:** Handles logic related to `commit`.

### GetDefaultValue
`public float GetDefaultValue()`

**Purpose:** Gets the current value of `default value`.

### GetOptionType
`public object GetOptionType()`

**Purpose:** Gets the current value of `option type`.

### GetValue
`public float GetValue(bool forceRefresh)`

**Purpose:** Gets the current value of `value`.

### IsNative
`public bool IsNative()`

**Purpose:** Handles logic related to `is native`.

### SetValue
`public void SetValue(float value)`

**Purpose:** Sets the value or state of `value`.

### IsAction
`public bool IsAction()`

**Purpose:** Handles logic related to `is action`.

## Usage Example

```csharp
var value = new ActionOptionData();
```

## See Also

- [Complete Class Catalog](../catalog)