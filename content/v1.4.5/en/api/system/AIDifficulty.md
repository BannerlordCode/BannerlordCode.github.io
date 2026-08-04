---
title: "AIDifficulty"
description: "The nested BoardGameHelper difficulty enum used to pass Easy, Normal, or Hard board-game results to SkillLevelingManager, not to control CampaignOptions combat difficulty."
---
# AIDifficulty

**Namespace:** `Helpers`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public enum AIDifficulty` (declared inside `BoardGameHelper`)  
**Base:** `System.Enum`  
**Source:** `bin/TaleWorlds.CampaignSystem/Helpers/BoardGameHelper.cs`

## Responsibility in one sentence

`AIDifficulty` is the discrete difficulty label passed from a board-game result into the skill-leveling system. It describes the opponent for that board game; it does not read or modify the global combat-AI option and it is not a replaceable difficulty model.

## Mental model: a result input, not a settings object

The source declares this enum as `BoardGameHelper.AIDifficulty`, with `Easy`, `Normal`, `Hard`, and `NumTypes`. Its concrete consumer is `SkillLevelingManager.OnBoardGameWonAgainstLord(Hero, BoardGameHelper.AIDifficulty, bool)`. The default skill manager uses the value to choose the board-game victory experience branch.

Keep the two difficulty contexts separate:

- `BoardGameHelper.AIDifficulty` labels one board-game outcome.
- `CampaignOptions.CombatAIDifficulty` uses a different `Difficulty` enum for `DifficultyModel` combat-AI multipliers; it is not an alias for this type.

`NumTypes` is a count/sentinel value, not a playable difficulty. Do not show it to players, treat it as Hard, or persist it as a custom difficulty setting.

## Members and timing

| Member | Meaning | Boundary |
| --- | --- | --- |
| `Easy` | The board-game opponent used the easy difficulty | Pass it to the skill-leveling path after a real board-game win. |
| `Normal` | The board-game opponent used the normal difficulty | Labels a normal-difficulty result; it does not change Campaign options. |
| `Hard` | The board-game opponent used the hard difficulty | Labels a hard-difficulty result; it does not make the opponent harder at runtime. |
| `NumTypes` | A count/sentinel for the enum members | Use only for internal counting or range checks; never report it as a result. |

## Real usage path

The normal flow calls the skill manager after the board-game system has established both the result and the opposing hero. A mod that implements an equivalent board-game settlement adapter can pass a real campaign hero, but only after the win is confirmed:

```csharp
using TaleWorlds.CampaignSystem;
using Helpers;

public static void ReportNormalBoardGameWin()
{
    if (Campaign.Current == null || Hero.MainHero == null)
    {
        return;
    }

    BoardGameHelper.AIDifficulty difficulty = BoardGameHelper.AIDifficulty.Normal;
    SkillLevelingManager.OnBoardGameWonAgainstLord(
        Hero.MainHero,
        difficulty,
        extraXpGain: false);
}
```

This enters the skill-leveling side-effect path; it is not a query for the current difficulty. For board-game UI settings, return to the board-game state itself. For combat-AI multipliers, use [Campaign](../../campaign/Campaign), `CampaignOptions`, and the relevant `DifficultyModel`.

## Dependencies and boundaries

- `BoardGameHelper` declares the nested enum but does not own a current board-game instance or result; see [BoardGameHelper](../BoardGameHelper).
- [SkillLevelingManager](../../campaign/SkillLevelingManager) consumes the enum and turns a victory into skill progression; the default branch is documented at [DefaultSkillLevelingManager](../../campaign/DefaultSkillLevelingManager).
- [Campaign](../../campaign/Campaign) and [Hero](../../campaign/Hero) provide a live campaign and player/opposing hero. The settlement path must not run during the main menu, teardown, or before `Hero.MainHero` exists.
- Board-game completion is exposed through [CampaignEvents](../../campaign/CampaignEvents); use the event's real hero and state rather than inferring a result from the enum.

## Risks and version notes

- Calling `SkillLevelingManager.OnBoardGameWonAgainstLord` is a mutating skill-experience settlement, not a pure classifier; duplicate calls can duplicate rewards.
- Enum numeric order is not a stable save protocol. Persist a mod-owned semantic ID and map it to `Easy`, `Normal`, or `Hard` at runtime.
- Never pass `NumTypes` to the default skill manager. It is not a difficulty and future branches may treat it as out of range.
- `AIDifficulty` and `CampaignOptions.CombatAIDifficulty` have different types and lifetimes. Mixing them routes board-game rewards or combat multipliers into the wrong subsystem.

## Navigation

- Up: [`api/system`](../)
- Siblings: [BoardGameHelper](../BoardGameHelper) · [DistanceHelper](../DistanceHelper)
- Related: [SkillLevelingManager](../../campaign/SkillLevelingManager) · [CampaignEvents](../../campaign/CampaignEvents) · [Campaign](../../campaign/Campaign) · [Hero](../../campaign/Hero)
- 中文：[AIDifficulty](../../../../zh/api/system/AIDifficulty)

