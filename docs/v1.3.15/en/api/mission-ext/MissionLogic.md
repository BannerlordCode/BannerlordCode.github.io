# MissionLogic

## Class Overview

| Item | Description |
|------|-------------|
| **Namespace** | TaleWorlds.MountAndBlade |
| **File Path** | TaleWorlds.MountAndBlade/MissionLogic.cs |
| **Base Class** | MissionBehavior |
| **Type** | Abstract class |

## Description

`MissionLogic` is the base class for mission logic, inheriting from `MissionBehavior`. Used to implement game rules, victory/defeat conditions, special modes, and other mission-level logic.

## Key Properties

| Property | Type | Description |
|----------|------|-------------|
| BehaviorType | MissionBehaviorType | Returns Logic |

## Key Methods

| Method | Return Value | Description |
|--------|--------------|-------------|
| OnEndMissionRequest(out bool canLeave) | InquiryData | Called when end mission is requested |
| MissionEnded(ref MissionResult missionResult) | bool | Called when mission ends, returns whether it ended |
| OnBattleEnded() | void | Called when battle ends |
| ShowBattleResults() | void | Displays battle results |
| OnRetreatMission() | void | Called on retreat |
| OnSurrenderMission() | void | Called on surrender |
| OnAutoDeployTeam(Team team) | void | Called when team auto deploys |
| GetExtraEquipmentElementsForCharacter(BasicCharacterObject character, bool getAllEquipments) | List | Gets extra equipment |
| OnMissionResultReady(MissionResult missionResult) | void | Called when mission result is ready |

## Usage Example

```csharp
// Create custom mission logic
public class MyMissionLogic : MissionLogic
{
    public override bool MissionEnded(ref MissionResult missionResult)
    {
        // Check custom end conditions
        if (ShouldEndMission())
        {
            missionResult = MissionResult.CreateSuccessful();
            return true;
        }
        return false;
    }

    public override void OnBattleEnded()
    {
        // Cleanup after battle
    }
}

// Register to mission
mission.AddMissionLogic(new MyMissionLogic());
```
