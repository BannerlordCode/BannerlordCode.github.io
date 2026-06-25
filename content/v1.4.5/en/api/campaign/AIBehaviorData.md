---
title: "AIBehaviorData"
description: "Auto-generated class reference for AIBehaviorData."
---
# AIBehaviorData

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct AIBehaviorData : IEquatable<AIBehaviorData>`
**Base:** `IEquatable<AIBehaviorData>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/AIBehaviorData.cs`

## Overview

`AIBehaviorData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `AIBehaviorData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of AIBehaviorData from the subsystem API first
AIBehaviorData aIBehaviorData = ...;
var result = aIBehaviorData.Equals(obj);
```

### Equals
`public bool Equals(AIBehaviorData other)`

**Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of AIBehaviorData from the subsystem API first
AIBehaviorData aIBehaviorData = ...;
var result = aIBehaviorData.Equals(other);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of AIBehaviorData from the subsystem API first
AIBehaviorData aIBehaviorData = ...;
var result = aIBehaviorData.GetHashCode();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
AIBehaviorData entry = ...;
```

## See Also

- [Area Index](../)