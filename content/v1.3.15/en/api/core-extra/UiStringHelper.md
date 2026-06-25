---
title: "UiStringHelper"
description: "Auto-generated class reference for UiStringHelper."
---
# UiStringHelper

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class UiStringHelper`
**Base:** none
**File:** `TaleWorlds.Library/UiStringHelper.cs`

## Overview

`UiStringHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `UiStringHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### IsStringNoneOrEmptyForUi
`public static bool IsStringNoneOrEmptyForUi(string str)`

**Purpose:** Determines whether the current object is in the `string none or empty for ui` state or condition.

```csharp
// Static call; no instance required
UiStringHelper.IsStringNoneOrEmptyForUi("example");
```

## Usage Example

```csharp
UiStringHelper.Initialize();
```

## See Also

- [Area Index](../)