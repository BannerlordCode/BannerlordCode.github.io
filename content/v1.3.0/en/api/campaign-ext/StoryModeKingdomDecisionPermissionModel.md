---
title: "StoryModeKingdomDecisionPermissionModel"
description: "Auto-generated class reference for StoryModeKingdomDecisionPermissionModel."
---
# StoryModeKingdomDecisionPermissionModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeKingdomDecisionPermissionModel : KingdomDecisionPermissionModel`
**Base:** `KingdomDecisionPermissionModel`
**File:** `StoryMode/GameComponents/StoryModeKingdomDecisionPermissionModel.cs`

## Overview

`StoryModeKingdomDecisionPermissionModel` vetoes two diplomatic decisions once the story reaches its third phase, and passes every other one through untouched. When `MainStoryLine.ThirdPhase` exists, declaring war between two kingdoms that both appear in `OppositionKingdoms` is refused (`StoryMode/GameComponents/StoryModeKingdomDecisionPermissionModel.cs:44`, `:47`), and making peace between an opposition kingdom and an ally kingdom is refused in both argument orders (`:60`, `:62`). Both refusals come with a player-facing reason text, `str_kingdom_diplomacy_war_truce_disabled_reason_story`, looked up through `GameTexts.FindText` (`:46`). Policy, annexation, expulsion, king selection and alliance decisions are all straight delegations to the sandbox model (`:17`, `:23`, `:29`, `:35`, `:72`).

## Mental Model

Two things distinguish this from a plain boolean filter. The signature is `bool Is...(..., out TextObject reason)`, so a refusal is not free — the caller reads the reason string to explain the refusal, and an override that returns `false` without setting `reason` produces a blank or stale explanation in the decision menu. `DeclareWarDecision.cs:47` reads the war answer to decide whether the decision is offered at all, and `ExpelClanFromKingdomDecision.cs:55` reads the expulsion answer for the same purpose. Second, the checks are pair-wise rather than global: only war between *two opposition* kingdoms is blocked, so declaring war on an opposition kingdom from outside that set remains permitted, and the peace block only fires when one side is an ally and the other an opponent. `ThirdPhase` being null is treated as "no restrictions", which is what makes the model safe to install before the phase exists.

## Key Methods

### IsPolicyDecisionAllowed
`public override bool IsPolicyDecisionAllowed(PolicyObject policy)`

**Purpose:** Determines whether this instance is in the policy decision allowed state or condition.

```csharp
StoryModeKingdomDecisionPermissionModel storyModeKingdomDecisionPermissionModel = ...;
var result = storyModeKingdomDecisionPermissionModel.IsPolicyDecisionAllowed(policy);
```

### IsAnnexationDecisionAllowed
`public override bool IsAnnexationDecisionAllowed(Settlement annexedSettlement)`

**Purpose:** Determines whether this instance is in the annexation decision allowed state or condition.

```csharp
StoryModeKingdomDecisionPermissionModel storyModeKingdomDecisionPermissionModel = ...;
var result = storyModeKingdomDecisionPermissionModel.IsAnnexationDecisionAllowed(annexedSettlement);
```

### IsExpulsionDecisionAllowed
`public override bool IsExpulsionDecisionAllowed(Clan expelledClan)`

**Purpose:** Determines whether this instance is in the expulsion decision allowed state or condition.

```csharp
StoryModeKingdomDecisionPermissionModel storyModeKingdomDecisionPermissionModel = ...;
var result = storyModeKingdomDecisionPermissionModel.IsExpulsionDecisionAllowed(expelledClan);
```

### IsKingSelectionDecisionAllowed
`public override bool IsKingSelectionDecisionAllowed(Kingdom kingdom)`

**Purpose:** Determines whether this instance is in the king selection decision allowed state or condition.

```csharp
StoryModeKingdomDecisionPermissionModel storyModeKingdomDecisionPermissionModel = ...;
var result = storyModeKingdomDecisionPermissionModel.IsKingSelectionDecisionAllowed(kingdom);
```

### IsWarDecisionAllowedBetweenKingdoms
`public override bool IsWarDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)`

**Purpose:** Determines whether this instance is in the war decision allowed between kingdoms state or condition.

```csharp
StoryModeKingdomDecisionPermissionModel storyModeKingdomDecisionPermissionModel = ...;
var result = storyModeKingdomDecisionPermissionModel.IsWarDecisionAllowedBetweenKingdoms(kingdom1, kingdom2, reason);
```

### IsPeaceDecisionAllowedBetweenKingdoms
`public override bool IsPeaceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)`

**Purpose:** Determines whether this instance is in the peace decision allowed between kingdoms state or condition.

```csharp
StoryModeKingdomDecisionPermissionModel storyModeKingdomDecisionPermissionModel = ...;
var result = storyModeKingdomDecisionPermissionModel.IsPeaceDecisionAllowedBetweenKingdoms(kingdom1, kingdom2, reason);
```

### IsStartAllianceDecisionAllowedBetweenKingdoms
`public override bool IsStartAllianceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)`

**Purpose:** Determines whether this instance is in the start alliance decision allowed between kingdoms state or condition.

```csharp
StoryModeKingdomDecisionPermissionModel storyModeKingdomDecisionPermissionModel = ...;
var result = storyModeKingdomDecisionPermissionModel.IsStartAllianceDecisionAllowedBetweenKingdoms(kingdom1, kingdom2, reason);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<KingdomDecisionPermissionModel>(new StoryModeKingdomDecisionPermissionModel());
}
```

`KingdomDecisionPermissionModel` is declared as `MBGameModel<KingdomDecisionPermissionModel>` (`KingdomDecisionPermissionModel.cs:9`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `StoryModeSubModule.cs:95`.

## See Also

- [Area Index](../)