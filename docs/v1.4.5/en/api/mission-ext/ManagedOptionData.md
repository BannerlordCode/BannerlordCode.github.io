<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ManagedOptionData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ManagedOptionData

**Namespace:** TaleWorlds.MountAndBlade.Options.ManagedOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class ManagedOptionData : IOptionData`
**Base:** `IOptionData`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Options.ManagedOptions/ManagedOptionData.cs`

## Overview

`ManagedOptionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ManagedOptionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetDefaultValue
`public virtual float GetDefaultValue()`

**Purpose:** Gets the current value of `default value`.

### Commit
`public void Commit()`

**Purpose:** Handles logic related to `commit`.

### GetValue
`public float GetValue(bool forceRefresh)`

**Purpose:** Gets the current value of `value`.

### SetValue
`public void SetValue(float value)`

**Purpose:** Sets the value or state of `value`.

### GetOptionType
`public object GetOptionType()`

**Purpose:** Gets the current value of `option type`.

### IsNative
`public bool IsNative()`

**Purpose:** Handles logic related to `is native`.

### IsAction
`public bool IsAction()`

**Purpose:** Handles logic related to `is action`.

## Usage Example

```csharp
var implementation = new CustomManagedOptionData();
```

## See Also

- [Complete Class Catalog](../catalog)