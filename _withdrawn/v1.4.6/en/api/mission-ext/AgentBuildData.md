---
title: "AgentBuildData"
description: "AgentBuildData: a public class in TaleWorlds.MountAndBlade; 92 exposed members (41 methods, 48 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/AgentBuildData.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AgentBuildData

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AgentBuildData`
**File:** `TaleWorlds.MountAndBlade/AgentBuildData.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

AgentBuildData lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/AgentBuildData.cs. It is a public class; the inheritance chain is AgentBuildData. It exposes 92 public/protected members: 41 methods, 48 properties, 3 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AgentBuildData lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain AgentBuildData. The surface is property-led (properties 48/92, methods 41/92), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/AgentBuildData.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `AgentData` | `public AgentData AgentData` | property |
| `AgentCharacter` | `public BasicCharacterObject AgentCharacter` | property |
| `AgentMonster` | `public Monster AgentMonster` | property |
| `AgentOverridenSpawnEquipment` | `public Equipment AgentOverridenSpawnEquipment` | property |
| `AgentOverridenSpawnMissionEquipment` | `public MissionEquipment AgentOverridenSpawnMissionEquipment` | property |
| `AgentEquipmentSeed` | `public int AgentEquipmentSeed` | property |
| `AgentNoHorses` | `public bool AgentNoHorses` | property |
| `AgentMountKey` | `public string AgentMountKey` | property |
| `AgentNoWeapons` | `public bool AgentNoWeapons` | property |
| `AgentNoArmor` | `public bool AgentNoArmor` | property |
| `AgentFixedEquipment` | `public bool AgentFixedEquipment` | property |
| `AgentCivilianEquipment` | `public bool AgentCivilianEquipment` | property |
| `AgentClothingColor1` | `public uint AgentClothingColor1` | property |
| `AgentClothingColor2` | `public uint AgentClothingColor2` | property |
| `BodyPropertiesOverriden` | `public bool BodyPropertiesOverriden` | property |
| `AgentBodyProperties` | `public BodyProperties AgentBodyProperties` | property |
| `AgeOverriden` | `public bool AgeOverriden` | property |
| `AgentAge` | `public int AgentAge` | property |
| `PrepareImmediately` | `public bool PrepareImmediately` | property |
| `GenderOverriden` | `public bool GenderOverriden` | property |
| `AgentIsFemale` | `public bool AgentIsFemale` | property |
| `AgentRace` | `public int AgentRace` | property |
| `AgentOrigin` | `public IAgentOriginBase AgentOrigin` | property |
| `AgentController` | `public AgentControllerType AgentController` | property |
| `AgentTeam` | `public Team AgentTeam` | property |
| `AgentIsReinforcement` | `public bool AgentIsReinforcement` | property |
| `AgentSpawnsIntoOwnFormation` | `public bool AgentSpawnsIntoOwnFormation` | property |
| `AgentSpawnsUsingOwnTroopClass` | `public bool AgentSpawnsUsingOwnTroopClass` | property |
| `MakeUnitStandOutDistance` | `public float MakeUnitStandOutDistance` | property |
| `AgentInitialPosition` | `public Vec3? AgentInitialPosition` | property |
| `AgentInitialDirection` | `public Vec2? AgentInitialDirection` | property |
| `AgentFormation` | `public Formation AgentFormation` | property |
| `AgentFormationTroopSpawnCount` | `public int AgentFormationTroopSpawnCount` | property |
| `AgentFormationTroopSpawnIndex` | `public int AgentFormationTroopSpawnIndex` | property |
| `AgentMissionPeer` | `public MissionPeer AgentMissionPeer` | property |
| `OwningAgentMissionPeer` | `public MissionPeer OwningAgentMissionPeer` | property |
| `AgentIndexOverriden` | `public bool AgentIndexOverriden` | property |
| `AgentIndex` | `public int AgentIndex` | property |
| `AgentMountIndexOverriden` | `public bool AgentMountIndexOverriden` | property |
| `AgentMountIndex` | `public int AgentMountIndex` | property |
| `AgentVisualsIndex` | `public int AgentVisualsIndex` | property |
| `AgentBanner` | `public Banner AgentBanner` | property |
| `AgentBannerItem` | `public ItemObject AgentBannerItem` | property |
| `AgentBannerReplacementWeaponItem` | `public ItemObject AgentBannerReplacementWeaponItem` | property |
| `AgentCanSpawnOutsideOfMissionBoundary` | `public bool AgentCanSpawnOutsideOfMissionBoundary` | property |
| `RandomizeColors` | `public bool RandomizeColors` | property |
| `UseFaceCache` | `public bool UseFaceCache` | property |
| `FaceCacheId` | `public int FaceCacheId` | property |
| `AgentBuildData` | `public AgentBuildData(AgentData agentData) : this()` | constructor |
| `AgentBuildData` | `public AgentBuildData(IAgentOriginBase agentOrigin) : this()` | constructor |
| `AgentBuildData` | `public AgentBuildData(BasicCharacterObject characterObject) : this()` | constructor |
| `Character` | `public AgentBuildData Character(BasicCharacterObject characterObject)` | method |
| `Controller` | `public AgentBuildData Controller(AgentControllerType controller)` | method |
| `Team` | `public AgentBuildData Team(Team team)` | method |
| `IsReinforcement` | `public AgentBuildData IsReinforcement(bool isReinforcement)` | method |
| `SpawnsIntoOwnFormation` | `public AgentBuildData SpawnsIntoOwnFormation(bool spawnIntoOwnFormation)` | method |
| `SpawnsUsingOwnTroopClass` | `public AgentBuildData SpawnsUsingOwnTroopClass(bool spawnUsingOwnTroopClass)` | method |
| `MakeUnitStandOutOfFormationDistance` | `public AgentBuildData MakeUnitStandOutOfFormationDistance(float makeUnitStandOutDistance)` | method |
| `InitialPosition` | `public AgentBuildData InitialPosition(in Vec3 position)` | method |
| `InitialDirection` | `public AgentBuildData InitialDirection(in Vec2 direction)` | method |
| `InitialFrameFromSpawnPointEntity` | `public AgentBuildData InitialFrameFromSpawnPointEntity(GameEntity entity)` | method |
| `InitialFrameFromSpawnPointEntity` | `public AgentBuildData InitialFrameFromSpawnPointEntity(WeakGameEntity entity)` | method |
| `Formation` | `public AgentBuildData Formation(Formation formation)` | method |
| `Monster` | `public AgentBuildData Monster(Monster monster)` | method |
| `VisualsIndex` | `public AgentBuildData VisualsIndex(int index)` | method |
| `Equipment` | `public AgentBuildData Equipment(Equipment equipment)` | method |
| `MissionEquipment` | `public AgentBuildData MissionEquipment(MissionEquipment missionEquipment)` | method |
| `EquipmentSeed` | `public AgentBuildData EquipmentSeed(int seed)` | method |
| `NoHorses` | `public AgentBuildData NoHorses(bool noHorses)` | method |
| `NoWeapons` | `public AgentBuildData NoWeapons(bool noWeapons)` | method |
| `NoArmor` | `public AgentBuildData NoArmor(bool noArmor)` | method |
| `FixedEquipment` | `public AgentBuildData FixedEquipment(bool fixedEquipment)` | method |
| `CivilianEquipment` | `public AgentBuildData CivilianEquipment(bool civilianEquipment)` | method |
| `SetPrepareImmediately` | `public AgentBuildData SetPrepareImmediately()` | method |
| `ClothingColor1` | `public AgentBuildData ClothingColor1(uint color)` | method |
| `ClothingColor2` | `public AgentBuildData ClothingColor2(uint color)` | method |
| `MissionPeer` | `public AgentBuildData MissionPeer(MissionPeer missionPeer)` | method |
| `OwningMissionPeer` | `public AgentBuildData OwningMissionPeer(MissionPeer missionPeer)` | method |
| `BodyProperties` | `public AgentBuildData BodyProperties(BodyProperties bodyProperties)` | method |
| `Age` | `public AgentBuildData Age(int age)` | method |
| `TroopOrigin` | `public AgentBuildData TroopOrigin(IAgentOriginBase troopOrigin)` | method |
| `IsFemale` | `public AgentBuildData IsFemale(bool isFemale)` | method |
| `Race` | `public AgentBuildData Race(int race)` | method |
| `MountKey` | `public AgentBuildData MountKey(string mountKey)` | method |
| `Index` | `public AgentBuildData Index(int index)` | method |
| `MountIndex` | `public AgentBuildData MountIndex(int mountIndex)` | method |
| `Banner` | `public AgentBuildData Banner(Banner banner)` | method |
| `BannerItem` | `public AgentBuildData BannerItem(ItemObject bannerItem)` | method |
| `BannerReplacementWeaponItem` | `public AgentBuildData BannerReplacementWeaponItem(ItemObject weaponItem)` | method |
| `FormationTroopSpawnCount` | `public AgentBuildData FormationTroopSpawnCount(int formationTroopCount)` | method |
| `FormationTroopSpawnIndex` | `public AgentBuildData FormationTroopSpawnIndex(int formationTroopIndex)` | method |
| `CanSpawnOutsideOfMissionBoundary` | `public AgentBuildData CanSpawnOutsideOfMissionBoundary(bool canSpawn)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
- [same namespace AgentComponent](../AgentComponent/)
