---
title: "RichTextException"
description: "Auto-generated class reference for RichTextException."
---
# RichTextException

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class RichTextException : Exception`
**Base:** `Exception`
**File:** `bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/RichTextException.cs`

## Overview

`RichTextException` is an exception type used to signal a specific error condition; callers decide whether to catch it, translate it, or let it bubble up.

## Mental Model

Treat `RichTextException` as a Exception-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
try { /* call branch that may throw */ }
catch (RichTextException ex) { /* handle it */ }
```

## See Also

- [Area Index](../)