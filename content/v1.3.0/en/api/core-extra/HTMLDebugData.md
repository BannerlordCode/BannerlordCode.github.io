---
title: "HTMLDebugData"
description: "Auto-generated class reference for HTMLDebugData."
---
# HTMLDebugData

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `internal class HTMLDebugData`
**Base:** none
**File:** `TaleWorlds.Library/HTMLDebugData.cs`

## Overview

`HTMLDebugData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `HTMLDebugData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
HTMLDebugData entry = ...;
```

## See Also

- [Area Index](../)