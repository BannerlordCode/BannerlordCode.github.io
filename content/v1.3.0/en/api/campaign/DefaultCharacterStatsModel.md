---
title: "DefaultCharacterStatsModel"
description: "Auto-generated class reference for DefaultCharacterStatsModel."
---
# DefaultCharacterStatsModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCharacterStatsModel : CharacterStatsModel`
**Base:** `CharacterStatsModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCharacterStatsModel.cs`

## Overview

`DefaultCharacterStatsModel` supplies the numbers a single character is judged by: their tier, their maximum hit points and their wounded threshold. `GetTier` is a level formula rather than data — heroes are always tier 0 (`TaleWorlds.CampaignSystem/GameComponents/DefaultCharacterStatsModel.cs:33`), and everyone else gets `ceil((level − 5) / 5)` clamped into the range 0 to `MaxCharacterTier`, which is 6 (`:36`). `MaxHitpoints` starts every character at 100 (`:42`) and then adds the relevant perks on top — OneHanded Trainer, OneHanded UnwaveringDefense, TwoHanded ThickHides, Athletics WellBuilt and Medicine PreventiveMedicine (`:43`–`:47`). Wounded threshold is a flat 20 regardless of tier or level (`:26`).

## Mental Model

The tier formula has three properties worth internalising before changing it. It is level-driven, so two characters of the same level always share a tier no matter their perks; it is floored at zero, so every character below level 5 is tier 0 and shares a bracket with every hero (`:36`); and it is capped by `MaxCharacterTier` read back through the model rather than hard-coded, so lowering that property compresses every tier above the ceiling into the top bracket. That last point is what makes `MaxCharacterTier` the lever to pull for a balance change, and it is also why `RecruitmentCampaignBehavior.cs:300` and `:301` read the tier and the maximum separately: the merchant recruitment roll multiplies the *gap* between them by 2 and by 5 to bound how many mercenaries a character brings in (`:302`, `:303`). Since every hero sits at tier 0, heroes always sit at the widest possible gap and therefore recruit the maximum. The wounded threshold at 20 is the one value here with no dependency on anything: it is a constant, so a mod that wants wounded units to fall earlier must override the method rather than scale it off tier. And because `MaxHitpoints` builds an `ExplainedNumber` from 100 upward, every perk it adds is itemised in the results panel — replacing the method with a bare multiplication loses that breakdown while keeping the total.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxCharacterTier` | `public override int MaxCharacterTier { get; }` |

## Key Methods

### WoundedHitPointLimit
`public override int WoundedHitPointLimit(Hero hero)`

**Purpose:** Executes the WoundedHitPointLimit logic.

```csharp
DefaultCharacterStatsModel defaultCharacterStatsModel = ...;
var result = defaultCharacterStatsModel.WoundedHitPointLimit(hero);
```

### GetTier
`public override int GetTier(CharacterObject character)`

**Purpose:** Reads and returns the tier value held by this instance.

```csharp
DefaultCharacterStatsModel defaultCharacterStatsModel = ...;
var result = defaultCharacterStatsModel.GetTier(character);
```

### MaxHitpoints
`public override ExplainedNumber MaxHitpoints(CharacterObject character, bool includeDescriptions = false)`

**Purpose:** Executes the MaxHitpoints logic.

```csharp
DefaultCharacterStatsModel defaultCharacterStatsModel = ...;
var result = defaultCharacterStatsModel.MaxHitpoints(character, false);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<CharacterStatsModel>(new DefaultCharacterStatsModel());
}
```

`CharacterStatsModel` is declared as `MBGameModel<CharacterStatsModel>` (`CharacterStatsModel.cs:7`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `SandBoxManager.cs:249`.

## See Also

- [Area Index](../)