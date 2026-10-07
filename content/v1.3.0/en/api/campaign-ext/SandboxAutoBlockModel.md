---
title: "SandboxAutoBlockModel"
description: "Auto-generated class reference for SandboxAutoBlockModel."
---
# SandboxAutoBlockModel

**Namespace:** SandBox.GameComponents
**Module:** SandBox.GameComponents
**Type:** `public class SandboxAutoBlockModel : AutoBlockModel`
**Base:** `AutoBlockModel`
**File:** `SandBox/GameComponents/SandboxAutoBlockModel.cs`

## Overview

`SandboxAutoBlockModel` picks which way the player's block key swings. `GetBlockDirection` (`SandBox/GameComponents/SandboxAutoBlockModel.cs:12`) walks every agent in the mission, keeps the human enemies of the main agent who are in the middle of an action, and scores each one by how close it is, how much it faces the main agent, and how much the main agent faces it — the three clamped factors are multiplied at `:29` — returning the facing of the highest scorer. The result is a direction, not a target: `GetCurrentActionDirection` of the winning enemy is taken at `:33` and coerced to a positive usage direction when it comes back negative (`:34`).

## Mental Model

Read it as a scoring heuristic with a fixed bias toward straight ahead, not as a threat calculation — the dot product against the main agent's look direction is offset by `+0.8f` before clamping (`SandBox/GameComponents/SandboxAutoBlockModel.cs:26`), so an enemy beside the player scores near zero and the method defaults to `Agent.UsageDirection.UsageDirectionRight` (`:16`) when nothing scores higher. `MissionMainAgentController.cs:683` consumes the answer while resolving the player's input, so the whole behaviour is decided in that single call. Two constraints follow for a mod overriding it: the loop only considers human agents that are enemies of the main agent and are not mid-swing (`:19`, `:22`), so a siege engine or a friendly will never be selected no matter how the scoring is changed; and the initialiser is a local `float.MinValue`, so a subclass that returns a score without seeding that field makes the method return the hard-coded default direction for every enemy.

## Key Methods

### GetBlockDirection
`public override Agent.UsageDirection GetBlockDirection(Mission mission)`

**Purpose:** Reads and returns the block direction value held by this instance.

```csharp
SandboxAutoBlockModel sandboxAutoBlockModel = ...;
var result = sandboxAutoBlockModel.GetBlockDirection(mission);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<AutoBlockModel>(new SandboxAutoBlockModel());
}
```

`AutoBlockModel` is declared as `MBGameModel<AutoBlockModel>` (`AutoBlockModel.cs:7`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `SandBoxSubModule.cs:37`.

## See Also

- [Area Index](../)