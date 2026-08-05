---
title: "MissionManager"
description: "MissionManager is the discovery attribute that marks static mission factories for Bannerlord's mission registry."
---
# MissionManager

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class MissionManager : Attribute`  
**Base:** `Attribute`  
**Source file:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionManager.cs`

## One-sentence responsibility

It marks a type whose public static `[MissionMethod]` methods should be discovered as mission-opening entries.

## Mental Model

Despite its name, `MissionManager` is not a runtime manager, does not own `Mission.Current`, and has no properties or methods. During module initialization, `Module.FindMissions()` scans loaded, acceptable assemblies for types carrying this attribute. For each marked type it inspects public static methods carrying `[MissionMethod]`, records their manager type and method, and exposes those entries to mission selection/editor code. The actual mission still opens through the factory method, commonly by calling `MissionState.OpenNew`.

## When to use and when not to use

- Use it on a static mission factory type when the module must publish discoverable mission methods.
- Put the real creation logic on public static methods marked `[MissionMethod]`; the marker alone publishes nothing.
- Do not use it as a singleton and do not look for `MissionManager.Current`.
- Do not confuse it with [MissionState](../../campaign-ext/MissionState), which owns the active game-state wrapper.

## Dependencies

```
[MissionManager] type
  -> Module.FindMissions()
  -> public static [MissionMethod] methods
  -> MissionInfo registry entries
  -> mission factory / MissionState.OpenNew
```

- Discovery owner: [Module](../../core/Module) scans loaded assemblies and creates mission metadata.
- Factory boundary: [MissionState](../../campaign-ext/MissionState) creates and pushes the active mission state.
- Behavior composition: [MissionBehavior](../../mission/MissionBehavior) instances are supplied by the factory callback.
- Existing implementation: [SandBoxMissions](../../campaign-ext/SandBoxMissions) is marked with this attribute.

## Real example

This follows the same shape as the source `SandBoxMissions` class: the attribute is on the static container and the method is separately marked for discovery.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.MountAndBlade;

[MissionManager]
public static class MyMissionFactories
{
    [MissionMethod]
    public static Mission OpenTelemetryMission(MissionInitializerRecord record)
    {
        return MissionState.OpenNew(
            "TelemetryMission",
            record,
            mission => new MissionBehavior[]
            {
                new MissionTelemetryLogic()
            });
    }
}

public sealed class MissionTelemetryLogic : MissionLogic
{
    public override void OnMissionTick(float dt)
    {
        if (Mission.Current != null)
        {
            // Read or record mission-local state here.
        }
    }
}

Mission mission = Mission.Current;
Campaign campaign = Campaign.Current;
```

`Module.FindMissions()` only registers the method when both markers and the required public/static shape are present. The method's `MissionInitializerRecord` and behavior list remain the factory's responsibility.

## Risks and boundaries

- The attribute does not validate scenes, initializer records, or behavior ordering.
- A marked type in an assembly that fails the module's assembly check will not be discovered.
- A public static method without `[MissionMethod]` is not a registered mission method.
- A factory that omits required behaviors can create a mission that loads but lacks campaign, Agent, network, or UI logic.
- This attribute is metadata, not save data and not a replacement for [Mission](../../mission/Mission).

## Version note

This page follows v1.4.5 `MissionManager` and `Module.FindMissions()`. The discovery filters and `[MissionMethod]` metadata should be rechecked when targeting a different version.

## Navigation

- Parent: [Mission extension API](../)
- Siblings: [MissionState](../../campaign-ext/MissionState) · [MissionLogic](../MissionLogic)
- Related: [Mission](../../mission/Mission) · [MissionBehavior](../../mission/MissionBehavior) · [SandBoxMissions](../../campaign-ext/SandBoxMissions)
