---
title: "HeroRelatedIssueCoolDownData"
description: "Auto-generated class reference for HeroRelatedIssueCoolDownData."
---
# HeroRelatedIssueCoolDownData

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeroRelatedIssueCoolDownData : IssueCoolDownData`
**Base:** `IssueCoolDownData`
**File:** `TaleWorlds.CampaignSystem/Issues/HeroRelatedIssueCoolDownData.cs`

## Overview

`HeroRelatedIssueCoolDownData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `HeroRelatedIssueCoolDownData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### IsRelatedTo
`public override bool IsRelatedTo(object obj)`

**Purpose:** Determines whether the current object is in the `related to` state or condition.

```csharp
// Obtain an instance of HeroRelatedIssueCoolDownData from the subsystem API first
HeroRelatedIssueCoolDownData heroRelatedIssueCoolDownData = ...;
var result = heroRelatedIssueCoolDownData.IsRelatedTo(obj);
```

### IsValid
`public override bool IsValid()`

**Purpose:** Determines whether the current object is in the `valid` state or condition.

```csharp
// Obtain an instance of HeroRelatedIssueCoolDownData from the subsystem API first
HeroRelatedIssueCoolDownData heroRelatedIssueCoolDownData = ...;
var result = heroRelatedIssueCoolDownData.IsValid();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
HeroRelatedIssueCoolDownData entry = ...;
```

## See Also

- [Area Index](../)