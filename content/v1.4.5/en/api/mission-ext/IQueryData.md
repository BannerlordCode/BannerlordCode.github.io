---
title: "IQueryData"
description: "Auto-generated class reference for IQueryData."
---
# IQueryData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface IQueryData`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/IQueryData.cs`

## Overview

`IQueryData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `IQueryData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIQueryData service = ...;
```

## See Also

- [Area Index](../)