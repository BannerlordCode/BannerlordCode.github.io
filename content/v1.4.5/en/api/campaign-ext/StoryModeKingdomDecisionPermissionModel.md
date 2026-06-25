---
title: "StoryModeKingdomDecisionPermissionModel"
description: "Auto-generated class reference for StoryModeKingdomDecisionPermissionModel."
---
# StoryModeKingdomDecisionPermissionModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeKingdomDecisionPermissionModel : KingdomDecisionPermissionModel`
**Base:** `KingdomDecisionPermissionModel`
**File:** `Modules.StoryMode/StoryMode/StoryMode.GameComponents/StoryModeKingdomDecisionPermissionModel.cs`

## Overview

`StoryModeKingdomDecisionPermissionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `StoryModeKingdomDecisionPermissionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### IsPolicyDecisionAllowed
`public override bool IsPolicyDecisionAllowed(PolicyObject policy)`

**Purpose:** Determines whether the this instance is in the policy decision allowed state or condition.

```csharp
// Obtain an instance of StoryModeKingdomDecisionPermissionModel from the subsystem API first
StoryModeKingdomDecisionPermissionModel storyModeKingdomDecisionPermissionModel = ...;
var result = storyModeKingdomDecisionPermissionModel.IsPolicyDecisionAllowed(policy);
```

### IsAnnexationDecisionAllowed
`public override bool IsAnnexationDecisionAllowed(Settlement annexedSettlement)`

**Purpose:** Determines whether the this instance is in the annexation decision allowed state or condition.

```csharp
// Obtain an instance of StoryModeKingdomDecisionPermissionModel from the subsystem API first
StoryModeKingdomDecisionPermissionModel storyModeKingdomDecisionPermissionModel = ...;
var result = storyModeKingdomDecisionPermissionModel.IsAnnexationDecisionAllowed(annexedSettlement);
```

### IsExpulsionDecisionAllowed
`public override bool IsExpulsionDecisionAllowed(Clan expelledClan)`

**Purpose:** Determines whether the this instance is in the expulsion decision allowed state or condition.

```csharp
// Obtain an instance of StoryModeKingdomDecisionPermissionModel from the subsystem API first
StoryModeKingdomDecisionPermissionModel storyModeKingdomDecisionPermissionModel = ...;
var result = storyModeKingdomDecisionPermissionModel.IsExpulsionDecisionAllowed(expelledClan);
```

### IsKingSelectionDecisionAllowed
`public override bool IsKingSelectionDecisionAllowed(Kingdom kingdom)`

**Purpose:** Determines whether the this instance is in the king selection decision allowed state or condition.

```csharp
// Obtain an instance of StoryModeKingdomDecisionPermissionModel from the subsystem API first
StoryModeKingdomDecisionPermissionModel storyModeKingdomDecisionPermissionModel = ...;
var result = storyModeKingdomDecisionPermissionModel.IsKingSelectionDecisionAllowed(kingdom);
```

### IsWarDecisionAllowedBetweenKingdoms
`public override bool IsWarDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)`

**Purpose:** Determines whether the this instance is in the war decision allowed between kingdoms state or condition.

```csharp
// Obtain an instance of StoryModeKingdomDecisionPermissionModel from the subsystem API first
StoryModeKingdomDecisionPermissionModel storyModeKingdomDecisionPermissionModel = ...;
var result = storyModeKingdomDecisionPermissionModel.IsWarDecisionAllowedBetweenKingdoms(kingdom1, kingdom2, reason);
```

### IsPeaceDecisionAllowedBetweenKingdoms
`public override bool IsPeaceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)`

**Purpose:** Determines whether the this instance is in the peace decision allowed between kingdoms state or condition.

```csharp
// Obtain an instance of StoryModeKingdomDecisionPermissionModel from the subsystem API first
StoryModeKingdomDecisionPermissionModel storyModeKingdomDecisionPermissionModel = ...;
var result = storyModeKingdomDecisionPermissionModel.IsPeaceDecisionAllowedBetweenKingdoms(kingdom1, kingdom2, reason);
```

### IsStartAllianceDecisionAllowedBetweenKingdoms
`public override bool IsStartAllianceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)`

**Purpose:** Determines whether the this instance is in the start alliance decision allowed between kingdoms state or condition.

```csharp
// Obtain an instance of StoryModeKingdomDecisionPermissionModel from the subsystem API first
StoryModeKingdomDecisionPermissionModel storyModeKingdomDecisionPermissionModel = ...;
var result = storyModeKingdomDecisionPermissionModel.IsStartAllianceDecisionAllowedBetweenKingdoms(kingdom1, kingdom2, reason);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<StoryModeKingdomDecisionPermissionModel>(new MyStoryModeKingdomDecisionPermissionModel());
```

## See Also

- [Area Index](../)