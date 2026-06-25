---
title: "BehaviorData"
description: "Auto-generated class reference for BehaviorData."
---
# BehaviorData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BehaviorData`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/FormationAI.cs`

## Overview

`BehaviorData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `BehaviorData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
BehaviorData entry = ...;
```

## See Also

- [Area Index](../)