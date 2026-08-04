---
title: "BoardGameHelper"
description: "Public board-game enum contracts for AI difficulty and the final outcome reported through Campaign events."
---
# BoardGameHelper

**Namespace:** `Helpers`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class BoardGameHelper`  
**Base:** `System.Object`  
**Source:** `bin/TaleWorlds.CampaignSystem/Helpers/BoardGameHelper.cs`

## One-sentence responsibility

`BoardGameHelper` exposes the two public enum contracts shared by board-game Campaign behaviors, mission logic, AI implementations, skill progression, and the `OnPlayerBoardGameOverEvent` event.

## Mental Model

`BoardGameHelper` has no instances, methods, or mutable state in v1.4.5. Its value is the namespaced type identity of two enums:

- `BoardGameHelper.AIDifficulty` selects the board-game AI level: `Easy`, `Normal`, or `Hard`. `NumTypes` is a count/sentinel used for sizing or iteration; it is not a playable difficulty.
- `BoardGameHelper.BoardGameState` describes the final outcome reported by board-game mission logic: `None`, `Win`, `Loss`, or `Draw`. `None` is the initial/unresolved state, not a result to award as a win or loss.

SandBox often imports the nested enums and uses `AIDifficulty` or `BoardGameState` without the outer qualifier. The public identity is still `BoardGameHelper.AIDifficulty` or `BoardGameHelper.BoardGameState`, and event subscribers must match the event's generic argument exactly.

## When to use and when not to use

- **Use it:** to select a board-game AI difficulty for mission logic or to branch on a board-game result received from Campaign events.
- **Use it:** when implementing `ISkillLevelingManager.OnBoardGameWonAgainstLord`, whose public contract takes `BoardGameHelper.AIDifficulty`.
- **Do not use it:** as a factory or service; there is no `Initialize`, `Current`, or instance state to retrieve.
- **Do not treat `NumTypes` as a fourth difficulty:** it is a sentinel/count value.
- **Do not infer a win from any non-None value:** `Loss` and `Draw` are explicit outcomes and must remain distinct.

## Dependencies

- Event contract: [CampaignEvents](../../campaign/CampaignEvents) publishes `OnPlayerBoardGameOverEvent` with `Hero` and `BoardGameState` arguments.
- Participants: [Hero](../../campaign/Hero) identifies the opposing lord in the event and is also the skill-leveling subject.
- Mission owner: SandBox `MissionBoardGameLogic` stores the current difficulty and final state; `BoardGameHelper` does not own that mission lifecycle.
- AI consumers: SandBox board-game AI classes receive `AIDifficulty`; the difficulty changes move selection, not Campaign combat difficulty.
- Progression consumer: `DefaultSkillLevelingManager` branches on `Easy`, `Normal`, and `Hard` when awarding board-game skill progress.

## Public members

### AIDifficulty

`AIDifficulty` has the v1.4.5 values `Easy`, `Normal`, `Hard`, and `NumTypes`. The first three are the values passed to `MissionBoardGameLogic.SetCurrentDifficulty` and board-game AI constructors. `NumTypes` should only be used when code needs the number of defined gameplay levels.

```csharp
using Helpers;
using SandBox.BoardGames.MissionLogics;
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;

if (Mission.Current != null)
{
    MissionBoardGameLogic missionLogic = Mission.Current.GetMissionBehavior<MissionBoardGameLogic>();
    if (missionLogic != null)
    {
        missionLogic.SetCurrentDifficulty(BoardGameHelper.AIDifficulty.Hard);
    }
}
```

The mission logic owns the difficulty field; the enum only communicates the selected level.

### BoardGameState

`BoardGameState` has the v1.4.5 values `None`, `Win`, `Loss`, and `Draw`. `MissionBoardGameLogic` changes this state while the mission resolves, then `CampaignEvents.OnPlayerBoardGameOverEvent` sends the final state with the opposing [Hero](../../campaign/Hero).

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;
using TaleWorlds.Library;

CampaignEvents.OnPlayerBoardGameOverEvent.AddNonSerializedListener(
    this,
    (Hero opposingHero, BoardGameHelper.BoardGameState state) =>
    {
        Debug.Print($"Board game against {opposingHero.Name}: {state}");
    });
```

Subscribe from a Campaign behavior and unregister with that behavior's lifecycle. Do not award a result merely because the mission is opening; wait for the event's final state.

## Real example

This behavior-shaped example uses the public event and enum identity directly. It keeps `Draw` and `Loss` separate from `Win`, and does not construct a `BoardGameHelper` because the type is static and has no constructor workflow.

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;
using TaleWorlds.Library;

public sealed class BoardGameResultListener
{
    public void Register()
    {
        CampaignEvents.OnPlayerBoardGameOverEvent.AddNonSerializedListener(
            this,
            OnBoardGameOver);
    }

    private void OnBoardGameOver(Hero opposingHero, BoardGameHelper.BoardGameState state)
    {
        switch (state)
        {
            case BoardGameHelper.BoardGameState.Win:
                Debug.Print($"Board game win against {opposingHero.Name}");
                break;
            case BoardGameHelper.BoardGameState.Loss:
                Debug.Print($"Board game loss against {opposingHero.Name}");
                break;
            case BoardGameHelper.BoardGameState.Draw:
                Debug.Print($"Board game draw against {opposingHero.Name}");
                break;
        }
    }
}
```

The handler owns its side effects; the enum contract only supplies the typed state. A real behavior should use its normal registration/cleanup lifecycle for the non-serialized listener.

## Risks and save boundaries

- **Enum contract:** do not reorder or renumber these values in a compatibility-sensitive mod. Persisted or networked values may rely on the v1.4.5 order.
- **Sentinel value:** `AIDifficulty.NumTypes` is not a valid AI level for a board-game mission or AI constructor.
- **Event timing:** `BoardGameState.None` can represent an unresolved/default state. Awarding rewards belongs after the final event and its explicit `Win`/`Loss`/`Draw` value.
- **Lifecycle ownership:** mission difficulty and result are held by mission logic, while the Campaign event is non-serialized. Do not save a listener or cache a mission enum as a replacement for supported Campaign state.
- **Scope boundary:** these enums describe board games, not `CampaignOptions.CombatAIDifficulty` or the combat `DifficultyModel`.

## Version note

This page follows v1.4.5 `Helpers/BoardGameHelper.cs`. The file contains only the two nested enums; all mission transitions, AI behavior, event dispatch, and skill rewards belong to their respective Campaign/SandBox consumers.

## Navigation

- [↑ API system index](../)
- [Related: CampaignEvents](../../campaign/CampaignEvents)
- [Related: Hero](../../campaign/Hero)
- [Related: Campaign](../../campaign/Campaign)
