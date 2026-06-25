---
title: "KingdomDecisionPermissionModel"
description: "Auto-generated class reference for KingdomDecisionPermissionModel."
---
# KingdomDecisionPermissionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class KingdomDecisionPermissionModel : MBGameModel<KingdomDecisionPermissionModel>`
**Base:** `MBGameModel<KingdomDecisionPermissionModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/KingdomDecisionPermissionModel.cs`

## Overview

`KingdomDecisionPermissionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `KingdomDecisionPermissionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### IsPolicyDecisionAllowed
`public abstract bool IsPolicyDecisionAllowed(PolicyObject policy)`

**Purpose:** Determines whether the current object is in the `policy decision allowed` state or condition.

```csharp
// Obtain an instance of KingdomDecisionPermissionModel from the subsystem API first
KingdomDecisionPermissionModel kingdomDecisionPermissionModel = ...;
var result = kingdomDecisionPermissionModel.IsPolicyDecisionAllowed(policy);
```

### IsWarDecisionAllowedBetweenKingdoms
`public abstract bool IsWarDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)`

**Purpose:** Determines whether the current object is in the `war decision allowed between kingdoms` state or condition.

```csharp
// Obtain an instance of KingdomDecisionPermissionModel from the subsystem API first
KingdomDecisionPermissionModel kingdomDecisionPermissionModel = ...;
var result = kingdomDecisionPermissionModel.IsWarDecisionAllowedBetweenKingdoms(kingdom1, kingdom2, reason);
```

### IsPeaceDecisionAllowedBetweenKingdoms
`public abstract bool IsPeaceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)`

**Purpose:** Determines whether the current object is in the `peace decision allowed between kingdoms` state or condition.

```csharp
// Obtain an instance of KingdomDecisionPermissionModel from the subsystem API first
KingdomDecisionPermissionModel kingdomDecisionPermissionModel = ...;
var result = kingdomDecisionPermissionModel.IsPeaceDecisionAllowedBetweenKingdoms(kingdom1, kingdom2, reason);
```

### IsStartAllianceDecisionAllowedBetweenKingdoms
`public abstract bool IsStartAllianceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)`

**Purpose:** Determines whether the current object is in the `start alliance decision allowed between kingdoms` state or condition.

```csharp
// Obtain an instance of KingdomDecisionPermissionModel from the subsystem API first
KingdomDecisionPermissionModel kingdomDecisionPermissionModel = ...;
var result = kingdomDecisionPermissionModel.IsStartAllianceDecisionAllowedBetweenKingdoms(kingdom1, kingdom2, reason);
```

### IsAnnexationDecisionAllowed
`public abstract bool IsAnnexationDecisionAllowed(Settlement annexedSettlement)`

**Purpose:** Determines whether the current object is in the `annexation decision allowed` state or condition.

```csharp
// Obtain an instance of KingdomDecisionPermissionModel from the subsystem API first
KingdomDecisionPermissionModel kingdomDecisionPermissionModel = ...;
var result = kingdomDecisionPermissionModel.IsAnnexationDecisionAllowed(annexedSettlement);
```

### IsExpulsionDecisionAllowed
`public abstract bool IsExpulsionDecisionAllowed(Clan expelledClan)`

**Purpose:** Determines whether the current object is in the `expulsion decision allowed` state or condition.

```csharp
// Obtain an instance of KingdomDecisionPermissionModel from the subsystem API first
KingdomDecisionPermissionModel kingdomDecisionPermissionModel = ...;
var result = kingdomDecisionPermissionModel.IsExpulsionDecisionAllowed(expelledClan);
```

### IsKingSelectionDecisionAllowed
`public abstract bool IsKingSelectionDecisionAllowed(Kingdom kingdom)`

**Purpose:** Determines whether the current object is in the `king selection decision allowed` state or condition.

```csharp
// Obtain an instance of KingdomDecisionPermissionModel from the subsystem API first
KingdomDecisionPermissionModel kingdomDecisionPermissionModel = ...;
var result = kingdomDecisionPermissionModel.IsKingSelectionDecisionAllowed(kingdom);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
KingdomDecisionPermissionModel instance = ...;
```

## See Also

- [Area Index](../)