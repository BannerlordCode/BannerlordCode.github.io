---
title: "InformationData"
description: "Auto-generated class reference for InformationData."
---
# InformationData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class InformationData`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/InformationData.cs`

## Overview

`InformationData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `InformationData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TitleText` | `public abstract TextObject TitleText { get; }` |
| `SoundEventPath` | `public abstract string SoundEventPath { get; }` |

## Key Methods

### IsValid
`public virtual bool IsValid()`

**Purpose:** **Purpose:** Determines whether the this instance is in the valid state or condition.

```csharp
// Obtain an instance of InformationData from the subsystem API first
InformationData informationData = ...;
var result = informationData.IsValid();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
InformationData instance = ...;
```

## See Also

- [Area Index](../)