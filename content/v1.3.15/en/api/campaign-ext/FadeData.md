---
title: "FadeData"
description: "Auto-generated class reference for FadeData."
---
# FadeData

**Namespace:** psai.net
**Module:** psai.net
**Type:** `internal class FadeData`
**Base:** none
**File:** `TaleWorlds.PSAI/net/FadeData.cs`

## Overview

`FadeData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `FadeData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
FadeData entry = ...;
```

## See Also

- [Area Index](../)