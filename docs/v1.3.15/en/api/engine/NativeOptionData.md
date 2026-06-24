<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NativeOptionData`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NativeOptionData

**Namespace:** TaleWorlds.Engine.Options
**Module:** TaleWorlds.Engine
**Type:** `public abstract class NativeOptionData : IOptionData`
**Base:** `IOptionData`
**File:** `TaleWorlds.Engine/Options/NativeOptionData.cs`

## Overview

`NativeOptionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `NativeOptionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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

### GetIsDisabledAndReasonID
`public ValueTuple<string, bool> GetIsDisabledAndReasonID()`

**Purpose:** Gets the current value of `is disabled and reason i d`.

## Usage Example

```csharp
var implementation = new CustomNativeOptionData();
```

## See Also

- [Complete Class Catalog](../catalog)