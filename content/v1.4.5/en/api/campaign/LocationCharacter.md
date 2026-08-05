---
title: "LocationCharacter"
description: "LocationCharacter is the campaign-location descriptor that supplies Agent origin, behavior callbacks, equipment policy, and spawn metadata to Mission code."
---
# LocationCharacter

**Namespace:** `TaleWorlds.CampaignSystem.Settlements.Locations`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class LocationCharacter`  
**Base:** none  
**Source file:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements.Locations/LocationCharacter.cs`

## One-sentence responsibility

It describes how one campaign character becomes an Agent in a settlement location, including its origin, relation, action sets, behavior delegates, fixed-location policy, and optional special item.

## Mental Model

`LocationCharacter` is a spawn recipe plus location identity. A [Location](../Location) stores it in its character list; `MissionAgentHandler` later reads the recipe and creates the actual engine Agent. The object is therefore neither a `Hero` nor an `Agent`: `Character` points back to the `CharacterObject`, while `AgentData` and `AgentOrigin` provide the information needed to construct the runtime Agent.

The constructor also performs campaign-specific body-property setup. In campaign mode it reads the character's equipment and either the fixed-character deterministic seed or `AgentData.AgentEquipmentSeed`. It then chooses a default villager action set when no explicit action set was supplied. Creating one is consequently a campaign/settlement operation with dependencies on `Campaign.Current`, the character, and valid `AgentData`, not a harmless data-only allocation.

## When to use and when not to use

- Read an existing instance through `LocationComplex.GetLocationCharacterOfHero`, `Location.GetLocationCharacter`, or `LocationComplex.FindCharacter` when a Mission or campaign behavior needs to connect an Agent back to campaign data.
- Construct one only when a campaign behavior is deliberately adding a new location character and can provide a real `AgentData`, behavior delegate, spawn tag, relation, and equipment policy.
- Use `SetAlleyOfCharacter` for the alley ownership relation; do not infer it from `Location.StringId`.
- Use `CreateBodyguardHero` when the source flow needs the built-in bodyguard recipe. It creates a friendly no-horse descriptor with a settlement monster and the supplied behavior callback.
- Do not treat `SpecialTargetTag`, `ActionSetCode`, or `CharacterRelation` as sufficient to spawn an Agent. The Mission factory and `MissionAgentHandler` still own scene props, Agent components, and spawn timing.
- Do not move an already registered instance by constructing a duplicate. Use [LocationComplex](../LocationComplex).`ChangeLocation` so hero uniqueness and mission callbacks are preserved.

## Dependencies

```text
AgentData / AgentOrigin / CharacterObject
  -> LocationCharacter spawn recipe
  -> Location character list
  -> MissionAgentHandler creates Agent and attaches behaviors
  -> CampaignMission / Mission owns the live runtime Agent
```

- Container: [Location](../Location) stores instances and enforces hero removal from the previous node when adding.
- Graph: [LocationComplex](../LocationComplex) finds, moves, and removes location characters.
- Runtime: [Mission](../../mission/Mission), [MissionAgentHandler](../../campaign-ext/MissionAgentHandler), and [Agent](../../mission/Agent) turn the descriptor into a live Agent.
- Campaign identity: [Hero](../Hero), [MobileParty](../MobileParty), [AgentData](../../core-extra/AgentData), and [PartyAgentOrigin](../PartyAgentOrigin) provide real origins and character data.
- Encounter policy: [AccompanyingCharacter](../AccompanyingCharacter) can wrap this instance for player-following and location restrictions.

## Members and construction policy

| Member | Meaning and timing |
|---|---|
| `Character`, `AgentOrigin`, `AgentData` | Resolve the campaign character and the origin used to create its Agent. `Character` is derived from `AgentData.AgentCharacter`; invalid data fails later in construction or spawning. |
| `CharacterRelation` | `Neutral`, `Friendly`, or `Enemy`; consumed by Mission behavior and team/interaction setup, not by `Location` membership. |
| `SpecialTargetTag`, `ForceSpawnInSpecialTargetTag` | Scene spawn-tag selection. The force flag is only a request to the Agent handler; a missing scene prop still prevents a valid spawn. |
| `FixedLocation` | Prevents `LocationComplex.AgentPassageUsageTick` from selecting this character for ordinary AI passage movement. It does not freeze an explicit `ChangeLocation` call. |
| `ActionSetCode`, `AlarmedActionSetCode` | Normal and alarmed action-set names. A null normal code is replaced with the generated `_villager` suffix. |
| `AddBehaviors`, `AfterAgentCreated` | Delegates invoked by the Agent creation path. They are callbacks, not places to run campaign logic before the Agent exists. |
| `UseCivilianEquipment`, `SpecialItem`, `IsVisualTracked`, `PrefabNamesForBones` | Spawn and visual policy consumed by Mission systems. They do not add the object to a location or save a live Agent. |
| `MemberOfAlley` / `SetAlleyOfCharacter` | Optional alley association, assigned explicitly by the alley behavior. |
| `CharacterRelations` | Enum used by the constructor and spawn flows; do not substitute raw integers in mod code. |

## Real example

Reading an existing hero descriptor is the safest integration boundary:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements.Locations;
using TaleWorlds.Core;

LocationComplex complex = LocationComplex.Current;
LocationCharacter heroCharacter = complex?.GetLocationCharacterOfHero(Hero.MainHero);
if (heroCharacter != null)
{
    CharacterObject character = heroCharacter.Character;
    Location currentLocation = complex.GetLocationOfCharacter(heroCharacter);
    bool isFixed = heroCharacter.FixedLocation;
}
```

When a campaign flow really needs a bodyguard recipe, the v1.4.5 source uses the static factory with a real hero, party, and behavior callback:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements.Locations;

LocationCharacter bodyguard = LocationCharacter.CreateBodyguardHero(
    Hero.MainHero,
    MobileParty.MainParty,
    SandBoxManager.Instance.AgentBehaviorManager.AddCompanionBehaviors);
```

The returned object is not active until a location adds it and the appropriate Mission factory spawns it. A mod should normally reuse the owning campaign behavior's callback and then call `Location.AddCharacter` or `LocationComplex.ChangeLocation` inside the same encounter lifecycle.

## Risks and save boundaries

- The constructor reads `Campaign.Current.GameMode` and may read `Settlement.CurrentSettlement` for fixed-character body properties. Do not construct it before campaign and settlement initialization.
- `AgentData.AgentCharacter` must be a valid `CharacterObject`; `Character` is an unchecked cast. Null or incompatible data can fail before the Mission has a chance to report a useful error.
- `LocationCharacter` has no `Location` property. The owning `Location` is found by scanning the `LocationComplex`; caching an old node across a location change gives stale ownership.
- Adding a hero through `Location.AddCharacter` removes an existing descriptor for that hero from the owner complex. Bypassing that container or keeping duplicate descriptors can make Agent lookup ambiguous.
- Behavior delegates run at Agent creation time. Do not capture disposed Agents or use callbacks to mutate save data from an arbitrary thread.
- `SpecialItem` and visual fields are spawn-time state; they are not a substitute for adding the item to an [ItemRoster](../ItemRoster) or persisting an inventory change.

## Version note

This page follows v1.4.5 `LocationCharacter` and its SandBox call sites for wanderers, guards, companions, bodyguards, prison breaks, and alley characters. Constructor flags and action-set conventions are version-sensitive.

## Navigation

- Parent: [Campaign API](../)
- Siblings: [Location](../Location) · [LocationComplex](../LocationComplex) · [AccompanyingCharacter](../AccompanyingCharacter)
- Related: [AgentData](../../core-extra/AgentData) · [PartyAgentOrigin](../PartyAgentOrigin) · [MissionAgentHandler](../../campaign-ext/MissionAgentHandler) · [Mission](../../mission/Mission)
