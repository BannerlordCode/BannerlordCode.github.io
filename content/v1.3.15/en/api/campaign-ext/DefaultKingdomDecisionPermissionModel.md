---
title: "DefaultKingdomDecisionPermissionModel"
description: "Auto-generated class reference for DefaultKingdomDecisionPermissionModel."
---
# DefaultKingdomDecisionPermissionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultKingdomDecisionPermissionModel : KingdomDecisionPermissionModel`
**Base:** `KingdomDecisionPermissionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultKingdomDecisionPermissionModel.cs`

## Overview

`DefaultKingdomDecisionPermissionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultKingdomDecisionPermissionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### IsPolicyDecisionAllowed
`public override bool IsPolicyDecisionAllowed(PolicyObject policy)`

**Purpose:** Determines whether the this instance is in the policy decision allowed state or condition.

```csharp
// Obtain an instance of DefaultKingdomDecisionPermissionModel from the subsystem API first
DefaultKingdomDecisionPermissionModel defaultKingdomDecisionPermissionModel = ...;
var result = defaultKingdomDecisionPermissionModel.IsPolicyDecisionAllowed(policy);
```

### IsWarDecisionAllowedBetweenKingdoms
`public override bool IsWarDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)`

**Purpose:** Determines whether the this instance is in the war decision allowed between kingdoms state or condition.

```csharp
// Obtain an instance of DefaultKingdomDecisionPermissionModel from the subsystem API first
DefaultKingdomDecisionPermissionModel defaultKingdomDecisionPermissionModel = ...;
var result = defaultKingdomDecisionPermissionModel.IsWarDecisionAllowedBetweenKingdoms(kingdom1, kingdom2, reason);
```

### IsPeaceDecisionAllowedBetweenKingdoms
`public override bool IsPeaceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)`

**Purpose:** Determines whether the this instance is in the peace decision allowed between kingdoms state or condition.

```csharp
// Obtain an instance of DefaultKingdomDecisionPermissionModel from the subsystem API first
DefaultKingdomDecisionPermissionModel defaultKingdomDecisionPermissionModel = ...;
var result = defaultKingdomDecisionPermissionModel.IsPeaceDecisionAllowedBetweenKingdoms(kingdom1, kingdom2, reason);
```

### IsAnnexationDecisionAllowed
`public override bool IsAnnexationDecisionAllowed(Settlement annexedSettlement)`

**Purpose:** Determines whether the this instance is in the annexation decision allowed state or condition.

```csharp
// Obtain an instance of DefaultKingdomDecisionPermissionModel from the subsystem API first
DefaultKingdomDecisionPermissionModel defaultKingdomDecisionPermissionModel = ...;
var result = defaultKingdomDecisionPermissionModel.IsAnnexationDecisionAllowed(annexedSettlement);
```

### IsExpulsionDecisionAllowed
`public override bool IsExpulsionDecisionAllowed(Clan expelledClan)`

**Purpose:** Determines whether the this instance is in the expulsion decision allowed state or condition.

```csharp
// Obtain an instance of DefaultKingdomDecisionPermissionModel from the subsystem API first
DefaultKingdomDecisionPermissionModel defaultKingdomDecisionPermissionModel = ...;
var result = defaultKingdomDecisionPermissionModel.IsExpulsionDecisionAllowed(expelledClan);
```

### IsKingSelectionDecisionAllowed
`public override bool IsKingSelectionDecisionAllowed(Kingdom kingdom)`

**Purpose:** Determines whether the this instance is in the king selection decision allowed state or condition.

```csharp
// Obtain an instance of DefaultKingdomDecisionPermissionModel from the subsystem API first
DefaultKingdomDecisionPermissionModel defaultKingdomDecisionPermissionModel = ...;
var result = defaultKingdomDecisionPermissionModel.IsKingSelectionDecisionAllowed(kingdom);
```

### IsStartAllianceDecisionAllowedBetweenKingdoms
`public override bool IsStartAllianceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)`

**Purpose:** Determines whether the this instance is in the start alliance decision allowed between kingdoms state or condition.

```csharp
// Obtain an instance of DefaultKingdomDecisionPermissionModel from the subsystem API first
DefaultKingdomDecisionPermissionModel defaultKingdomDecisionPermissionModel = ...;
var result = defaultKingdomDecisionPermissionModel.IsStartAllianceDecisionAllowedBetweenKingdoms(kingdom1, kingdom2, reason);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultKingdomDecisionPermissionModel>(new MyDefaultKingdomDecisionPermissionModel());
```

## See Also

- [Area Index](../)