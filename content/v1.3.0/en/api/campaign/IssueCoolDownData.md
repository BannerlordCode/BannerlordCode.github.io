---
title: "IssueCoolDownData"
description: "Auto-generated class reference for IssueCoolDownData."
---
# IssueCoolDownData

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class IssueCoolDownData`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Issues/IssueCoolDownData.cs`

## Overview

`IssueCoolDownData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `IssueCoolDownData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### IsValid
`public virtual bool IsValid()`

**Purpose:** Determines whether the current object is in the `valid` state or condition.

```csharp
// Obtain an instance of IssueCoolDownData from the subsystem API first
IssueCoolDownData issueCoolDownData = ...;
var result = issueCoolDownData.IsValid();
```

### IsRelatedTo
`public abstract bool IsRelatedTo(object obj)`

**Purpose:** Determines whether the current object is in the `related to` state or condition.

```csharp
// Obtain an instance of IssueCoolDownData from the subsystem API first
IssueCoolDownData issueCoolDownData = ...;
var result = issueCoolDownData.IsRelatedTo(obj);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
IssueCoolDownData instance = ...;
```

## See Also

- [Area Index](../)