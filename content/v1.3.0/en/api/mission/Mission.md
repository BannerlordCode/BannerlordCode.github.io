---
title: "Mission"
description: "Auto-generated class reference for Mission."
---
# Mission

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class Mission : DotNetObject, IMission`
**Base:** `DotNetObject`
**File:** `TaleWorlds.MountAndBlade/Mission.cs`

## Overview

`Mission` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsFinalized` | `public bool IsFinalized { get; }` |
| `Current` | `public static Mission Current { get; }` |
| `SceneName` | `public string SceneName { get; }` |
| `SceneLevels` | `public string SceneLevels { get; }` |
| `DamageToPlayerMultiplier` | `public float DamageToPlayerMultiplier { get; }` |
| `DamageToFriendsMultiplier` | `public float DamageToFriendsMultiplier { get; }` |
| `DamageFromPlayerToFriendsMultiplier` | `public float DamageFromPlayerToFriendsMultiplier { get; }` |
| `HasValidTerrainType` | `public bool HasValidTerrainType { get; }` |
| `TerrainType` | `public TerrainType TerrainType { get; }` |
| `Scene` | `public Scene Scene { get; }` |
| `CustomCameraTargetLocalOffset` | `public Vec3 CustomCameraTargetLocalOffset { get; }` |
| `CustomCameraLocalOffset` | `public Vec3 CustomCameraLocalOffset { get; }` |
| `CustomCameraLocalOffset2` | `public Vec3 CustomCameraLocalOffset2 { get; }` |
| `CustomCameraGlobalOffset` | `public Vec3 CustomCameraGlobalOffset { get; }` |
| `CustomCameraLocalRotationalOffset` | `public Vec3 CustomCameraLocalRotationalOffset { get; }` |
| `CustomCameraIgnoreCollision` | `public bool CustomCameraIgnoreCollision { get; }` |
| `CustomCameraFovMultiplier` | `public float CustomCameraFovMultiplier { get; }` |
| `CustomCameraFixedDistance` | `public float CustomCameraFixedDistance { get; }` |
| `IgnoredEntityForCamera` | `public GameEntity IgnoredEntityForCamera { get; }` |
| `ActiveMissionObjects` | `public MBReadOnlyList<MissionObject> ActiveMissionObjects { get; }` |
| `MissionObjects` | `public MBReadOnlyList<MissionObject> MissionObjects { get; }` |
| `AddedEntitiesInfo` | `public MBReadOnlyList<Mission.DynamicallyCreatedEntity> AddedEntitiesInfo { get; }` |
| `Boundaries` | `public Mission.MBBoundaryCollection Boundaries { get; }` |
| `IsMainAgentObjectInteractionEnabled` | `public bool IsMainAgentObjectInteractionEnabled { get; }` |
| `IsMainAgentItemInteractionEnabled` | `public bool IsMainAgentItemInteractionEnabled { get; }` |
| `IsTeleportingAgents` | `public bool IsTeleportingAgents { get; set; }` |
| `ForceTickOccasionally` | `public bool ForceTickOccasionally { get; set; }` |
| `CombatType` | `public Mission.MissionCombatType CombatType { get; set; }` |
| `Mode` | `public MissionMode Mode { get; }` |
| `CurrentTime` | `public float CurrentTime { get; set; }` |
| `PauseAITick` | `public bool PauseAITick { get; set; }` |
| `IsLoadingFinished` | `public bool IsLoadingFinished { get; }` |
| `CameraIsFirstPerson` | `public bool CameraIsFirstPerson { get; set; }` |
| `CameraAddedDistance` | `public static float CameraAddedDistance { get; set; }` |
| `ClearSceneTimerElapsedTime` | `public float ClearSceneTimerElapsedTime { get; }` |
| `MissilesList` | `public MBReadOnlyList<Mission.Missile> MissilesList { get; }` |
| `MissionEnded` | `public bool MissionEnded { get; }` |
| `MountsWithoutRiders` | `public MBReadOnlyList<KeyValuePair<Agent, MissionTime>> MountsWithoutRiders { get; }` |
| `MissionIsEnding` | `public bool MissionIsEnding { get; }` |
| `IsDeploymentFinished` | `public bool IsDeploymentFinished { get; }` |
| `RetreatSide` | `public BattleSideEnum RetreatSide { get; }` |
| `IsFastForward` | `public bool IsFastForward { get; }` |
| `FixedDeltaTimeMode` | `public bool FixedDeltaTimeMode { get; }` |
| `FixedDeltaTime` | `public float FixedDeltaTime { get; }` |
| `CurrentState` | `public Mission.State CurrentState { get; }` |
| `Teams` | `public Mission.TeamCollection Teams { get; }` |
| `AttackerTeam` | `public Team AttackerTeam { get; }` |
| `DefenderTeam` | `public Team DefenderTeam { get; }` |
| `AttackerAllyTeam` | `public Team AttackerAllyTeam { get; }` |
| `DefenderAllyTeam` | `public Team DefenderAllyTeam { get; set; }` |
| `PlayerTeam` | `public Team PlayerTeam { get; set; }` |
| `PlayerEnemyTeam` | `public Team PlayerEnemyTeam { get; set; }` |
| `PlayerAllyTeam` | `public Team PlayerAllyTeam { get; set; }` |
| `SpectatorTeam` | `public Team SpectatorTeam { get; set; }` |
| `IsMissionEnding` | `public bool IsMissionEnding { get; }` |
| `MissionLogics` | `public List<MissionLogic> MissionLogics { get; set; }` |
| `MissionBehaviors` | `public List<MissionBehavior> MissionBehaviors { get; }` |
| `InputManager` | `public IInputContext InputManager { get; }` |
| `NeedsMemoryCleanup` | `public bool NeedsMemoryCleanup { get; }` |
| `MainAgent` | `public Agent MainAgent { get; set; }` |
| `DeploymentPlan` | `public IMissionDeploymentPlan DeploymentPlan { get; }` |
| `MainAgentServer` | `public Agent MainAgentServer { get; set; }` |
| `HasSpawnPath` | `public bool HasSpawnPath { get; }` |
| `IsFieldBattle` | `public bool IsFieldBattle { get; }` |
| `IsSiegeBattle` | `public bool IsSiegeBattle { get; }` |
| `IsSallyOutBattle` | `public bool IsSallyOutBattle { get; }` |
| `IsNavalBattle` | `public bool IsNavalBattle { get; }` |
| `AllAgents` | `public AgentReadOnlyList AllAgents { get; }` |
| `CorpseAgentInfos` | `public MBReadOnlyList<Mission.CorpseAgentInfo> CorpseAgentInfos { get; }` |
| `Agents` | `public AgentReadOnlyList Agents { get; }` |
| `IsInventoryAccessAllowed` | `public bool IsInventoryAccessAllowed { get; }` |
| `IsInventoryAccessible` | `public bool IsInventoryAccessible { get; }` |
| `MissionResult` | `public MissionResult MissionResult { get; }` |
| `FocusableObjectInformationProvider` | `public MissionFocusableObjectInformationProvider FocusableObjectInformationProvider { get; }` |
| `IsQuestScreenAccessible` | `public bool IsQuestScreenAccessible { get; set; }` |
| `IsQuestScreenAccessAllowed` | `public bool IsQuestScreenAccessAllowed { get; }` |
| `IsCharacterWindowAccessible` | `public bool IsCharacterWindowAccessible { get; set; }` |
| `IsCharacterWindowAccessAllowed` | `public bool IsCharacterWindowAccessAllowed { get; }` |
| `IsPartyWindowAccessible` | `public bool IsPartyWindowAccessible { get; set; }` |
| `IsPartyWindowAccessAllowed` | `public bool IsPartyWindowAccessAllowed { get; }` |
| `IsKingdomWindowAccessible` | `public bool IsKingdomWindowAccessible { get; set; }` |
| `IsKingdomWindowAccessAllowed` | `public bool IsKingdomWindowAccessAllowed { get; }` |
| `IsClanWindowAccessible` | `public bool IsClanWindowAccessible { get; set; }` |
| `IsClanWindowAccessAllowed` | `public bool IsClanWindowAccessAllowed { get; }` |
| `IsEncyclopediaWindowAccessible` | `public bool IsEncyclopediaWindowAccessible { get; set; }` |
| `IsEncyclopediaWindowAccessAllowed` | `public bool IsEncyclopediaWindowAccessAllowed { get; }` |
| `IsBannerWindowAccessible` | `public bool IsBannerWindowAccessible { get; set; }` |
| `IsBannerWindowAccessAllowed` | `public bool IsBannerWindowAccessAllowed { get; }` |
| `DoesMissionRequireCivilianEquipment` | `public bool DoesMissionRequireCivilianEquipment { get; set; }` |
| `MissionTeamAIType` | `public Mission.MissionTeamAITypeEnum MissionTeamAIType { get; set; }` |
| `Recorder` | `public MissionRecorder Recorder { get; }` |
| `MissionTimeTracker` | `public MissionTimeTracker MissionTimeTracker { get; }` |
| `Count` | `public int Count { get; }` |
| `IsReadOnly` | `public bool IsReadOnly { get; }` |
| `Keys` | `public ICollection<string> Keys { get; }` |
| `Values` | `public ICollection<ICollection<Vec2>> Values { get; }` |
| `this` | `public ICollection<Vec2> this { get; }` |
| `RequestedTimeSpeed` | `public float RequestedTimeSpeed { get; }` |
| `RequestID` | `public int RequestID { get; }` |
| `Entity` | `public GameEntity Entity { get; }` |
| `Weapon` | `public MissionWeapon Weapon { get; }` |
| `ShooterAgent` | `public Agent ShooterAgent { get; }` |
| `MissionObjectToIgnore` | `public MissionObject MissionObjectToIgnore { get; }` |
| `AlreadyHitEntityToIgnore` | `public GameEntity AlreadyHitEntityToIgnore { get; }` |
| `AgentToFollow` | `public Agent AgentToFollow { get; }` |
| `AgentVisualToFollow` | `public IAgentVisual AgentVisualToFollow { get; }` |
| `CameraType` | `public SpectatorCameraTypes CameraType { get; }` |
| `Attacker` | `public Team Attacker { get; }` |
| `Defender` | `public Team Defender { get; }` |
| `AttackerAlly` | `public Team AttackerAlly { get; }` |
| `DefenderAlly` | `public Team DefenderAlly { get; }` |
| `Player` | `public Team Player { get; set; }` |
| `PlayerEnemy` | `public Team PlayerEnemy { get; }` |
| `PlayerAlly` | `public Team PlayerAlly { get; }` |

## Key Methods

### AddActiveMissionObject
`public void AddActiveMissionObject(MissionObject missionObject)`

**Purpose:** **Purpose:** Adds active mission object to the current collection or state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.AddActiveMissionObject(missionObject);
```

### ActivateMissionObject
`public void ActivateMissionObject(MissionObject missionObject)`

**Purpose:** **Purpose:** Activates the resource, state, or feature associated with mission object.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.ActivateMissionObject(missionObject);
```

### DeactivateMissionObject
`public void DeactivateMissionObject(MissionObject missionObject)`

**Purpose:** **Purpose:** Deactivates the resource, state, or feature associated with mission object.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.DeactivateMissionObject(missionObject);
```

### SetMissionCombatType
`public void SetMissionCombatType(Mission.MissionCombatType missionCombatType)`

**Purpose:** **Purpose:** Assigns a new value to mission combat type and updates the object's internal state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.SetMissionCombatType(missionCombatType);
```

### ConversationCharacterChanged
`public void ConversationCharacterChanged()`

**Purpose:** **Purpose:** Executes the ConversationCharacterChanged logic.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.ConversationCharacterChanged();
```

### SetMissionMode
`public void SetMissionMode(MissionMode newMode, bool atStart)`

**Purpose:** **Purpose:** Assigns a new value to mission mode and updates the object's internal state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.SetMissionMode(newMode, false);
```

### GetAverageFps
`public float GetAverageFps()`

**Purpose:** **Purpose:** Reads and returns the average fps value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetAverageFps();
```

### GetFallAvoidSystemActive
`public bool GetFallAvoidSystemActive()`

**Purpose:** **Purpose:** Reads and returns the fall avoid system active value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetFallAvoidSystemActive();
```

### SetFallAvoidSystemActive
`public void SetFallAvoidSystemActive(bool fallAvoidActive)`

**Purpose:** **Purpose:** Assigns a new value to fall avoid system active and updates the object's internal state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.SetFallAvoidSystemActive(false);
```

### IsPositionInsideBoundaries
`public bool IsPositionInsideBoundaries(Vec2 position)`

**Purpose:** **Purpose:** Determines whether the this instance is in the position inside boundaries state or condition.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.IsPositionInsideBoundaries(position);
```

### IsPositionInsideAnyBlockerNavMeshFace2D
`public bool IsPositionInsideAnyBlockerNavMeshFace2D(Vec2 position)`

**Purpose:** **Purpose:** Determines whether the this instance is in the position inside any blocker nav mesh face2 d state or condition.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.IsPositionInsideAnyBlockerNavMeshFace2D(position);
```

### IsPositionOnAnyBlockerNavMeshFace
`public bool IsPositionOnAnyBlockerNavMeshFace(Vec3 position)`

**Purpose:** **Purpose:** Determines whether the this instance is in the position on any blocker nav mesh face state or condition.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.IsPositionOnAnyBlockerNavMeshFace(position);
```

### RayCastForClosestAgent
`public Agent RayCastForClosestAgent(Vec3 sourcePoint, Vec3 targetPoint, int excludedAgentIndex, float rayThickness, out float collisionDistance)`

**Purpose:** **Purpose:** Executes the RayCastForClosestAgent logic.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.RayCastForClosestAgent(sourcePoint, targetPoint, 0, 0, collisionDistance);
```

### RayCastForClosestAgentsLimbs
`public Agent RayCastForClosestAgentsLimbs(Vec3 sourcePoint, Vec3 targetPoint, int excludedAgentIndex, float rayThickness, out float collisionDistance, out sbyte boneIndex)`

**Purpose:** **Purpose:** Executes the RayCastForClosestAgentsLimbs logic.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.RayCastForClosestAgentsLimbs(sourcePoint, targetPoint, 0, 0, collisionDistance, boneIndex);
```

### RayCastForGivenAgentsLimbs
`public bool RayCastForGivenAgentsLimbs(Vec3 sourcePoint, Vec3 rayFinishPoint, int givenAgentIndex, float rayThickness, out float collisionDistance, out sbyte boneIndex)`

**Purpose:** **Purpose:** Executes the RayCastForGivenAgentsLimbs logic.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.RayCastForGivenAgentsLimbs(sourcePoint, rayFinishPoint, 0, 0, collisionDistance, boneIndex);
```

### GetBiggestAgentCollisionPadding
`public float GetBiggestAgentCollisionPadding()`

**Purpose:** **Purpose:** Reads and returns the biggest agent collision padding value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetBiggestAgentCollisionPadding();
```

### SetMissionCorpseFadeOutTimeInSeconds
`public void SetMissionCorpseFadeOutTimeInSeconds(float corpseFadeOutTimeInSeconds)`

**Purpose:** **Purpose:** Assigns a new value to mission corpse fade out time in seconds and updates the object's internal state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.SetMissionCorpseFadeOutTimeInSeconds(0);
```

### SetOverrideCorpseCount
`public void SetOverrideCorpseCount(int overrideCorpseCount)`

**Purpose:** **Purpose:** Assigns a new value to override corpse count and updates the object's internal state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.SetOverrideCorpseCount(0);
```

### SetReportStuckAgentsMode
`public void SetReportStuckAgentsMode(bool value)`

**Purpose:** **Purpose:** Assigns a new value to report stuck agents mode and updates the object's internal state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.SetReportStuckAgentsMode(false);
```

### ResetMission
`public void ResetMission()`

**Purpose:** **Purpose:** Returns mission to its default or initial condition.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.ResetMission();
```

### Initialize
`public void Initialize()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.Initialize();
```

### TickAgentsAndTeamsAsync
`public void TickAgentsAndTeamsAsync(float dt)`

**Purpose:** **Purpose:** Advances the agents and teams async state each frame or update cycle.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.TickAgentsAndTeamsAsync(0);
```

### MakeSound
`public void MakeSound(int soundIndex, Vec3 position, bool soundCanBePredicted, bool isReliable, int relatedAgent1, int relatedAgent2)`

**Purpose:** **Purpose:** Executes the MakeSound logic.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.MakeSound(0, position, false, false, 0, 0);
```

### MakeSound
`public void MakeSound(int soundIndex, Vec3 position, bool soundCanBePredicted, bool isReliable, int relatedAgent1, int relatedAgent2, ref SoundEventParameter parameter)`

**Purpose:** **Purpose:** Executes the MakeSound logic.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.MakeSound(0, position, false, false, 0, 0, parameter);
```

### MakeSoundOnlyOnRelatedPeer
`public void MakeSoundOnlyOnRelatedPeer(int soundIndex, Vec3 position, int relatedAgent)`

**Purpose:** **Purpose:** Executes the MakeSoundOnlyOnRelatedPeer logic.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.MakeSoundOnlyOnRelatedPeer(0, position, 0);
```

### AddDynamicallySpawnedMissionObjectInfo
`public void AddDynamicallySpawnedMissionObjectInfo(Mission.DynamicallyCreatedEntity entityInfo)`

**Purpose:** **Purpose:** Adds dynamically spawned mission object info to the current collection or state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.AddDynamicallySpawnedMissionObjectInfo(entityInfo);
```

### GetMissileCollisionPoint
`public Vec3 GetMissileCollisionPoint(Vec3 missileStartingPosition, Vec3 missileDirection, float missileSpeed, in WeaponData weaponData)`

**Purpose:** **Purpose:** Reads and returns the missile collision point value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetMissileCollisionPoint(missileStartingPosition, missileDirection, 0, weaponData);
```

### RemoveMissileAsClient
`public void RemoveMissileAsClient(int missileIndex)`

**Purpose:** **Purpose:** Removes missile as client from the current collection or state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.RemoveMissileAsClient(0);
```

### GetMissileVerticalAimCorrection
`public static float GetMissileVerticalAimCorrection(Vec3 vecToTarget, float missileStartingSpeed, ref WeaponStatsData weaponStatsData, float airFrictionConstant)`

**Purpose:** **Purpose:** Reads and returns the missile vertical aim correction value held by the this instance.

```csharp
// Static call; no instance required
Mission.GetMissileVerticalAimCorrection(vecToTarget, 0, weaponStatsData, 0);
```

### GetMissileRange
`public static float GetMissileRange(float missileStartingSpeed, float heightDifference)`

**Purpose:** **Purpose:** Reads and returns the missile range value held by the this instance.

```csharp
// Static call; no instance required
Mission.GetMissileRange(0, 0);
```

### PrepareMissileWeaponForDrop
`public void PrepareMissileWeaponForDrop(int missileIndex)`

**Purpose:** **Purpose:** Finishes prerequisite setup for the upcoming missile weapon for drop operation.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.PrepareMissileWeaponForDrop(0);
```

### AddParticleSystemBurstByName
`public void AddParticleSystemBurstByName(string particleSystem, MatrixFrame frame, bool synchThroughNetwork)`

**Purpose:** **Purpose:** Adds particle system burst by name to the current collection or state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.AddParticleSystemBurstByName("example", frame, false);
```

### GetClosestBoundaryPosition
`public Vec2 GetClosestBoundaryPosition(Vec2 position)`

**Purpose:** **Purpose:** Reads and returns the closest boundary position value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetClosestBoundaryPosition(position);
```

### GetFreeRuntimeMissionObjectId
`public int GetFreeRuntimeMissionObjectId()`

**Purpose:** **Purpose:** Reads and returns the free runtime mission object id value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetFreeRuntimeMissionObjectId();
```

### GetFreeSceneMissionObjectId
`public int GetFreeSceneMissionObjectId()`

**Purpose:** **Purpose:** Reads and returns the free scene mission object id value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetFreeSceneMissionObjectId();
```

### SetCameraFrame
`public void SetCameraFrame(ref MatrixFrame cameraFrame, float zoomFactor)`

**Purpose:** **Purpose:** Assigns a new value to camera frame and updates the object's internal state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.SetCameraFrame(cameraFrame, 0);
```

### SetCameraFrame
`public void SetCameraFrame(ref MatrixFrame cameraFrame, float zoomFactor, ref Vec3 attenuationPosition)`

**Purpose:** **Purpose:** Assigns a new value to camera frame and updates the object's internal state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.SetCameraFrame(cameraFrame, 0, attenuationPosition);
```

### GetCameraFrame
`public MatrixFrame GetCameraFrame()`

**Purpose:** **Purpose:** Reads and returns the camera frame value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetCameraFrame();
```

### ResetFirstThirdPersonView
`public void ResetFirstThirdPersonView()`

**Purpose:** **Purpose:** Returns first third person view to its default or initial condition.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.ResetFirstThirdPersonView();
```

### SetCustomCameraLocalOffset
`public void SetCustomCameraLocalOffset(Vec3 newCameraOffset)`

**Purpose:** **Purpose:** Assigns a new value to custom camera local offset and updates the object's internal state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.SetCustomCameraLocalOffset(newCameraOffset);
```

### SetCustomCameraTargetLocalOffset
`public void SetCustomCameraTargetLocalOffset(Vec3 newTargetLocalOffset)`

**Purpose:** **Purpose:** Assigns a new value to custom camera target local offset and updates the object's internal state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.SetCustomCameraTargetLocalOffset(newTargetLocalOffset);
```

### SetCustomCameraLocalOffset2
`public void SetCustomCameraLocalOffset2(Vec3 newCameraOffset)`

**Purpose:** **Purpose:** Assigns a new value to custom camera local offset2 and updates the object's internal state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.SetCustomCameraLocalOffset2(newCameraOffset);
```

### SetCustomCameraLocalRotationalOffset
`public void SetCustomCameraLocalRotationalOffset(Vec3 newCameraRotationalOffset)`

**Purpose:** **Purpose:** Assigns a new value to custom camera local rotational offset and updates the object's internal state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.SetCustomCameraLocalRotationalOffset(newCameraRotationalOffset);
```

### SetCustomCameraGlobalOffset
`public void SetCustomCameraGlobalOffset(Vec3 newCameraOffset)`

**Purpose:** **Purpose:** Assigns a new value to custom camera global offset and updates the object's internal state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.SetCustomCameraGlobalOffset(newCameraOffset);
```

### SetCustomCameraFovMultiplier
`public void SetCustomCameraFovMultiplier(float newFovMultiplier)`

**Purpose:** **Purpose:** Assigns a new value to custom camera fov multiplier and updates the object's internal state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.SetCustomCameraFovMultiplier(0);
```

### SetCustomCameraFixedDistance
`public void SetCustomCameraFixedDistance(float distance)`

**Purpose:** **Purpose:** Assigns a new value to custom camera fixed distance and updates the object's internal state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.SetCustomCameraFixedDistance(0);
```

### SetIgnoredEntityForCamera
`public void SetIgnoredEntityForCamera(GameEntity ignoredEntity)`

**Purpose:** **Purpose:** Assigns a new value to ignored entity for camera and updates the object's internal state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.SetIgnoredEntityForCamera(ignoredEntity);
```

### SetCustomCameraIgnoreCollision
`public void SetCustomCameraIgnoreCollision(bool ignoreCollision)`

**Purpose:** **Purpose:** Assigns a new value to custom camera ignore collision and updates the object's internal state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.SetCustomCameraIgnoreCollision(false);
```

### AddTimeSpeedRequest
`public void AddTimeSpeedRequest(Mission.TimeSpeedRequest request)`

**Purpose:** **Purpose:** Adds time speed request to the current collection or state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.AddTimeSpeedRequest(request);
```

### RemoveTimeSpeedRequest
`public void RemoveTimeSpeedRequest(int timeSpeedRequestID)`

**Purpose:** **Purpose:** Removes time speed request from the current collection or state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.RemoveTimeSpeedRequest(0);
```

### GetRequestedTimeSpeed
`public bool GetRequestedTimeSpeed(int timeSpeedRequestID, out float requestedTime)`

**Purpose:** **Purpose:** Reads and returns the requested time speed value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetRequestedTimeSpeed(0, requestedTime);
```

### ClearAgentActions
`public void ClearAgentActions()`

**Purpose:** **Purpose:** Removes all agent actions from the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.ClearAgentActions();
```

### ClearMissiles
`public void ClearMissiles()`

**Purpose:** **Purpose:** Removes all missiles from the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.ClearMissiles();
```

### ClearCorpses
`public void ClearCorpses(bool isMissionReset)`

**Purpose:** **Purpose:** Removes all corpses from the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.ClearCorpses(false);
```

### IsAgentInProximityMap
`public bool IsAgentInProximityMap(Agent agent)`

**Purpose:** **Purpose:** Determines whether the this instance is in the agent in proximity map state or condition.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.IsAgentInProximityMap(agent);
```

### OnMissionStateActivate
`public void OnMissionStateActivate()`

**Purpose:** **Purpose:** Invoked when the mission state activate event is raised.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.OnMissionStateActivate();
```

### OnMissionStateDeactivate
`public void OnMissionStateDeactivate()`

**Purpose:** **Purpose:** Invoked when the mission state deactivate event is raised.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.OnMissionStateDeactivate();
```

### OnMissionStateFinalize
`public void OnMissionStateFinalize(bool forceClearGPUResources)`

**Purpose:** **Purpose:** Invoked when the mission state finalize event is raised.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.OnMissionStateFinalize(false);
```

### ClearUnreferencedResources
`public void ClearUnreferencedResources(bool forceClearGPUResources)`

**Purpose:** **Purpose:** Removes all unreferenced resources from the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.ClearUnreferencedResources(false);
```

### GetMainAgentMaxCameraZoom
`public float GetMainAgentMaxCameraZoom()`

**Purpose:** **Purpose:** Reads and returns the main agent max camera zoom value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetMainAgentMaxCameraZoom();
```

### GetBestSlopeTowardsDirection
`public WorldPosition GetBestSlopeTowardsDirection(ref WorldPosition centerPosition, float halfSize, ref WorldPosition referencePosition)`

**Purpose:** **Purpose:** Reads and returns the best slope towards direction value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetBestSlopeTowardsDirection(centerPosition, 0, referencePosition);
```

### GetBestSlopeAngleHeightPosForDefending
`public WorldPosition GetBestSlopeAngleHeightPosForDefending(WorldPosition enemyPosition, WorldPosition defendingPosition, int sampleSize, float distanceRatioAllowedFromDefendedPos, float distanceSqrdAllowedFromBoundary, float cosinusOfBestSlope, float cosinusOfMaxAcceptedSlope, float minSlopeScore, float maxSlopeScore, float excessiveSlopePenalty, float nearConeCenterRatio, float nearConeCenterBonus, float heightDifferenceCeiling, float maxDisplacementPenalty)`

**Purpose:** **Purpose:** Reads and returns the best slope angle height pos for defending value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetBestSlopeAngleHeightPosForDefending(enemyPosition, defendingPosition, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
```

### GetAveragePositionOfAgents
`public Vec2 GetAveragePositionOfAgents(List<Agent> agents)`

**Purpose:** **Purpose:** Reads and returns the average position of agents value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetAveragePositionOfAgents(agents);
```

### SetRandomDecideTimeOfAgentsWithIndices
`public void SetRandomDecideTimeOfAgentsWithIndices(int agentIndices, float? minAIReactionTime = null, float? maxAIReactionTime = null)`

**Purpose:** **Purpose:** Assigns a new value to random decide time of agents with indices and updates the object's internal state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.SetRandomDecideTimeOfAgentsWithIndices(0, 0, 0);
```

### SetBowMissileSpeedModifier
`public void SetBowMissileSpeedModifier(float modifier)`

**Purpose:** **Purpose:** Assigns a new value to bow missile speed modifier and updates the object's internal state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.SetBowMissileSpeedModifier(0);
```

### SetCrossbowMissileSpeedModifier
`public void SetCrossbowMissileSpeedModifier(float modifier)`

**Purpose:** **Purpose:** Assigns a new value to crossbow missile speed modifier and updates the object's internal state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.SetCrossbowMissileSpeedModifier(0);
```

### SetThrowingMissileSpeedModifier
`public void SetThrowingMissileSpeedModifier(float modifier)`

**Purpose:** **Purpose:** Assigns a new value to throwing missile speed modifier and updates the object's internal state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.SetThrowingMissileSpeedModifier(0);
```

### SetMissileRangeModifier
`public void SetMissileRangeModifier(float modifier)`

**Purpose:** **Purpose:** Assigns a new value to missile range modifier and updates the object's internal state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.SetMissileRangeModifier(0);
```

### SetLastMovementKeyPressed
`public void SetLastMovementKeyPressed(Agent.MovementControlFlag lastMovementKeyPressed)`

**Purpose:** **Purpose:** Assigns a new value to last movement key pressed and updates the object's internal state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.SetLastMovementKeyPressed(lastMovementKeyPressed);
```

### GetWeightedPointOfEnemies
`public Vec2 GetWeightedPointOfEnemies(Agent agent, Vec2 basePoint)`

**Purpose:** **Purpose:** Reads and returns the weighted point of enemies value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetWeightedPointOfEnemies(agent, basePoint);
```

### GetPathBetweenPositions
`public bool GetPathBetweenPositions(ref NavigationData navData)`

**Purpose:** **Purpose:** Reads and returns the path between positions value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetPathBetweenPositions(navData);
```

### SetNavigationFaceCostWithIdAroundPosition
`public void SetNavigationFaceCostWithIdAroundPosition(int navigationFaceId, Vec3 position, float cost)`

**Purpose:** **Purpose:** Assigns a new value to navigation face cost with id around position and updates the object's internal state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.SetNavigationFaceCostWithIdAroundPosition(0, position, 0);
```

### GetStraightPathToTarget
`public WorldPosition GetStraightPathToTarget(Vec2 targetPosition, WorldPosition startingPosition, float samplingDistance = 1f, bool stopAtObstacle = true)`

**Purpose:** **Purpose:** Reads and returns the straight path to target value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetStraightPathToTarget(targetPosition, startingPosition, 0, false);
```

### SkipForwardMissionReplay
`public void SkipForwardMissionReplay(float startTime, float endTime)`

**Purpose:** **Purpose:** Executes the SkipForwardMissionReplay logic.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.SkipForwardMissionReplay(0, 0);
```

### GetDebugAgent
`public int GetDebugAgent()`

**Purpose:** **Purpose:** Reads and returns the debug agent value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetDebugAgent();
```

### AddAiDebugText
`public void AddAiDebugText(string str)`

**Purpose:** **Purpose:** Adds ai debug text to the current collection or state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.AddAiDebugText("example");
```

### SetDebugAgent
`public void SetDebugAgent(int index)`

**Purpose:** **Purpose:** Assigns a new value to debug agent and updates the object's internal state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.SetDebugAgent(0);
```

### GetFirstPersonFov
`public static float GetFirstPersonFov()`

**Purpose:** **Purpose:** Reads and returns the first person fov value held by the this instance.

```csharp
// Static call; no instance required
Mission.GetFirstPersonFov();
```

### GetWaterLevelAtPosition
`public float GetWaterLevelAtPosition(Vec2 position, bool useWaterRenderer)`

**Purpose:** **Purpose:** Reads and returns the water level at position value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetWaterLevelAtPosition(position, false);
```

### GetWaterLevelAtPositionMT
`public float GetWaterLevelAtPositionMT(Vec2 position, bool useWaterRenderer)`

**Purpose:** **Purpose:** Reads and returns the water level at position m t value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetWaterLevelAtPositionMT(position, false);
```

### CanPhysicsCollideBetweenTwoEntities
`public bool CanPhysicsCollideBetweenTwoEntities(UIntPtr entity0Ptr, UIntPtr entity1Ptr)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for physics collide between two entities.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.CanPhysicsCollideBetweenTwoEntities(entity0Ptr, entity1Ptr);
```

### GetRemovedAgentRatioForSide
`public float GetRemovedAgentRatioForSide(BattleSideEnum side)`

**Purpose:** **Purpose:** Reads and returns the removed agent ratio for side value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetRemovedAgentRatioForSide(side);
```

### GetAttackerWeaponsForFriendlyFirePreventing
`public ref readonly List<SiegeWeapon> GetAttackerWeaponsForFriendlyFirePreventing()`

**Purpose:** **Purpose:** Reads and returns the attacker weapons for friendly fire preventing value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetAttackerWeaponsForFriendlyFirePreventing();
```

### OnDeploymentPlanMade
`public void OnDeploymentPlanMade(Team team, bool isFirstPlan)`

**Purpose:** **Purpose:** Invoked when the deployment plan made event is raised.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.OnDeploymentPlanMade(team, false);
```

### GetAlternatePositionForNavmeshlessOrOutOfBoundsPosition
`public WorldPosition GetAlternatePositionForNavmeshlessOrOutOfBoundsPosition(Vec2 directionTowards, WorldPosition originalPosition, ref float positionPenalty)`

**Purpose:** **Purpose:** Reads and returns the alternate position for navmeshless or out of bounds position value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetAlternatePositionForNavmeshlessOrOutOfBoundsPosition(directionTowards, originalPosition, positionPenalty);
```

### GetNextDynamicNavMeshIdStart
`public int GetNextDynamicNavMeshIdStart()`

**Purpose:** **Purpose:** Reads and returns the next dynamic nav mesh id start value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetNextDynamicNavMeshIdStart();
```

### GetAgentTroopClass
`public FormationClass GetAgentTroopClass(BattleSideEnum battleSide, BasicCharacterObject agentCharacter)`

**Purpose:** **Purpose:** Reads and returns the agent troop class value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetAgentTroopClass(battleSide, agentCharacter);
```

### GetClosestFleePositionForAgent
`public WorldPosition GetClosestFleePositionForAgent(Agent agent)`

**Purpose:** **Purpose:** Reads and returns the closest flee position for agent value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetClosestFleePositionForAgent(agent);
```

### GetClosestFleePositionForFormation
`public WorldPosition GetClosestFleePositionForFormation(Formation formation)`

**Purpose:** **Purpose:** Reads and returns the closest flee position for formation value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetClosestFleePositionForFormation(formation);
```

### GetFleePositionsForSide
`public MBReadOnlyList<FleePosition> GetFleePositionsForSide(BattleSideEnum side)`

**Purpose:** **Purpose:** Reads and returns the flee positions for side value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetFleePositionsForSide(side);
```

### AddToWeaponListForFriendlyFirePreventing
`public void AddToWeaponListForFriendlyFirePreventing(SiegeWeapon weapon)`

**Purpose:** **Purpose:** Adds to weapon list for friendly fire preventing to the current collection or state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.AddToWeaponListForFriendlyFirePreventing(weapon);
```

### AddFleePosition
`public void AddFleePosition(FleePosition fleePosition)`

**Purpose:** **Purpose:** Adds flee position to the current collection or state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.AddFleePosition(fleePosition);
```

### RetreatMission
`public void RetreatMission()`

**Purpose:** **Purpose:** Executes the RetreatMission logic.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.RetreatMission();
```

### SurrenderMission
`public void SurrenderMission()`

**Purpose:** **Purpose:** Executes the SurrenderMission logic.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.SurrenderMission();
```

### SpawnAttachedWeaponOnCorpse
`public void SpawnAttachedWeaponOnCorpse(Agent agent, int attachedWeaponIndex, int forcedSpawnIndex)`

**Purpose:** **Purpose:** Executes the SpawnAttachedWeaponOnCorpse logic.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.SpawnAttachedWeaponOnCorpse(agent, 0, 0);
```

### AddMountWithoutRider
`public void AddMountWithoutRider(Agent mount)`

**Purpose:** **Purpose:** Adds mount without rider to the current collection or state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.AddMountWithoutRider(mount);
```

### RemoveMountWithoutRider
`public void RemoveMountWithoutRider(Agent mount)`

**Purpose:** **Purpose:** Removes mount without rider from the current collection or state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.RemoveMountWithoutRider(mount);
```

### UpdateMountReservationsAfterRiderMounts
`public void UpdateMountReservationsAfterRiderMounts(Agent rider, Agent mount)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of mount reservations after rider mounts.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.UpdateMountReservationsAfterRiderMounts(rider, mount);
```

### OnObjectDisabled
`public void OnObjectDisabled(DestructableComponent destructionComponent)`

**Purpose:** **Purpose:** Invoked when the object disabled event is raised.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.OnObjectDisabled(destructionComponent);
```

### SpawnWeaponAsDropFromMissile
`public MissionObjectId SpawnWeaponAsDropFromMissile(int missileIndex, MissionObject attachedMissionObject, in MatrixFrame attachLocalFrame, Mission.WeaponSpawnFlags spawnFlags, in Vec3 velocity, in Vec3 angularVelocity, int forcedSpawnIndex)`

**Purpose:** **Purpose:** Executes the SpawnWeaponAsDropFromMissile logic.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.SpawnWeaponAsDropFromMissile(0, attachedMissionObject, attachLocalFrame, spawnFlags, velocity, angularVelocity, 0);
```

### SpawnWeaponAsDropFromAgentAux
`public void SpawnWeaponAsDropFromAgentAux(Agent agent, EquipmentIndex equipmentIndex, ref Vec3 globalVelocity, ref Vec3 globalAngularVelocity, Mission.WeaponSpawnFlags spawnFlags, int forcedSpawnIndex)`

**Purpose:** **Purpose:** Executes the SpawnWeaponAsDropFromAgentAux logic.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.SpawnWeaponAsDropFromAgentAux(agent, equipmentIndex, globalVelocity, globalAngularVelocity, spawnFlags, 0);
```

### SpawnAttachedWeaponOnSpawnedWeapon
`public void SpawnAttachedWeaponOnSpawnedWeapon(SpawnedItemEntity spawnedWeapon, int attachmentIndex, int forcedSpawnIndex)`

**Purpose:** **Purpose:** Executes the SpawnAttachedWeaponOnSpawnedWeapon logic.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.SpawnAttachedWeaponOnSpawnedWeapon(spawnedWeapon, 0, 0);
```

### SpawnWeaponWithNewEntity
`public GameEntity SpawnWeaponWithNewEntity(ref MissionWeapon weapon, Mission.WeaponSpawnFlags spawnFlags, MatrixFrame frame)`

**Purpose:** **Purpose:** Executes the SpawnWeaponWithNewEntity logic.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.SpawnWeaponWithNewEntity(weapon, spawnFlags, frame);
```

### SpawnWeaponWithNewEntityAux
`public GameEntity SpawnWeaponWithNewEntityAux(MissionWeapon weapon, Mission.WeaponSpawnFlags spawnFlags, MatrixFrame frame, int forcedSpawnIndex, MissionObject attachedMissionObject, bool hasLifeTime)`

**Purpose:** **Purpose:** Executes the SpawnWeaponWithNewEntityAux logic.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.SpawnWeaponWithNewEntityAux(weapon, spawnFlags, frame, 0, attachedMissionObject, false);
```

### AttachWeaponWithNewEntityToSpawnedWeapon
`public void AttachWeaponWithNewEntityToSpawnedWeapon(MissionWeapon weapon, SpawnedItemEntity spawnedItem, MatrixFrame attachLocalFrame)`

**Purpose:** **Purpose:** Executes the AttachWeaponWithNewEntityToSpawnedWeapon logic.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.AttachWeaponWithNewEntityToSpawnedWeapon(weapon, spawnedItem, attachLocalFrame);
```

### OnEquipItemsFromSpawnEquipmentBegin
`public void OnEquipItemsFromSpawnEquipmentBegin(Agent agent, Agent.CreationType creationType)`

**Purpose:** **Purpose:** Invoked when the equip items from spawn equipment begin event is raised.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.OnEquipItemsFromSpawnEquipmentBegin(agent, creationType);
```

### OnEquipItemsFromSpawnEquipment
`public void OnEquipItemsFromSpawnEquipment(Agent agent, Agent.CreationType creationType)`

**Purpose:** **Purpose:** Invoked when the equip items from spawn equipment event is raised.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.OnEquipItemsFromSpawnEquipment(agent, creationType);
```

### MakeEnemiesFleeCheat
`public static string MakeEnemiesFleeCheat(List<string> strings)`

**Purpose:** **Purpose:** Executes the MakeEnemiesFleeCheat logic.

```csharp
// Static call; no instance required
Mission.MakeEnemiesFleeCheat(strings);
```

### MakeTeamFleeCheat
`public static string MakeTeamFleeCheat(List<string> strings)`

**Purpose:** **Purpose:** Executes the MakeTeamFleeCheat logic.

```csharp
// Static call; no instance required
Mission.MakeTeamFleeCheat(strings);
```

### RecalculateBody
`public void RecalculateBody(ref WeaponData weaponData, ItemComponent itemComponent, WeaponDesign craftedWeaponData, ref Mission.WeaponSpawnFlags spawnFlags)`

**Purpose:** **Purpose:** Recalculates body to reflect the latest state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.RecalculateBody(weaponData, itemComponent, craftedWeaponData, spawnFlags);
```

### SetFacialAnimToAgent
`public static string SetFacialAnimToAgent(List<string> strings)`

**Purpose:** **Purpose:** Assigns a new value to facial anim to agent and updates the object's internal state.

```csharp
// Static call; no instance required
Mission.SetFacialAnimToAgent(strings);
```

### TickAgentsAndTeamsImp
`public void TickAgentsAndTeamsImp(float dt)`

**Purpose:** **Purpose:** Advances the agents and teams imp state each frame or update cycle.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.TickAgentsAndTeamsImp(0);
```

### EnableSpeedAdjustmentCommand
`public static string EnableSpeedAdjustmentCommand(List<string> strings)`

**Purpose:** **Purpose:** Executes the EnableSpeedAdjustmentCommand logic.

```csharp
// Static call; no instance required
Mission.EnableSpeedAdjustmentCommand(strings);
```

### OnTick
`public void OnTick(float dt, float realDt, bool updateCamera, bool doAsyncAITick)`

**Purpose:** **Purpose:** Invoked when the tick event is raised.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.OnTick(0, 0, false, false);
```

### AddTickAction
`public void AddTickAction(Mission.MissionTickAction action, Agent agent, int param1, int param2)`

**Purpose:** **Purpose:** Adds tick action to the current collection or state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.AddTickAction(action, agent, 0, 0);
```

### AddTickActionMT
`public void AddTickActionMT(Mission.MissionTickAction action, Agent agent, int param1, int param2)`

**Purpose:** **Purpose:** Adds tick action m t to the current collection or state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.AddTickActionMT(action, agent, 0, 0);
```

### RemoveSpawnedItemsAndMissiles
`public void RemoveSpawnedItemsAndMissiles()`

**Purpose:** **Purpose:** Removes spawned items and missiles from the current collection or state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.RemoveSpawnedItemsAndMissiles();
```

### AfterStart
`public void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.AfterStart();
```

### OnEndMissionRequest
`public void OnEndMissionRequest()`

**Purpose:** **Purpose:** Invoked when the end mission request event is raised.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.OnEndMissionRequest();
```

### GetMissionEndTimeInSeconds
`public float GetMissionEndTimeInSeconds()`

**Purpose:** **Purpose:** Reads and returns the mission end time in seconds value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetMissionEndTimeInSeconds();
```

### GetMissionEndTimerValue
`public float GetMissionEndTimerValue()`

**Purpose:** **Purpose:** Reads and returns the mission end timer value value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetMissionEndTimerValue();
```

### GetMemberCountOfSide
`public int GetMemberCountOfSide(BattleSideEnum side)`

**Purpose:** **Purpose:** Reads and returns the member count of side value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetMemberCountOfSide(side);
```

### GetInitialSpawnPath
`public Path GetInitialSpawnPath()`

**Purpose:** **Purpose:** Reads and returns the initial spawn path value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetInitialSpawnPath();
```

### GetInitialSpawnPathData
`public SpawnPathData GetInitialSpawnPathData(BattleSideEnum battleSide)`

**Purpose:** **Purpose:** Reads and returns the initial spawn path data value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetInitialSpawnPathData(battleSide);
```

### GetReinforcementPathsDataOfSide
`public MBReadOnlyList<SpawnPathData> GetReinforcementPathsDataOfSide(BattleSideEnum battleSide)`

**Purpose:** **Purpose:** Reads and returns the reinforcement paths data of side value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetReinforcementPathsDataOfSide(battleSide);
```

### GetTroopSpawnFrameWithIndex
`public void GetTroopSpawnFrameWithIndex(AgentBuildData buildData, int troopSpawnIndex, int troopSpawnCount, out Vec3 troopSpawnPosition, out Vec2 troopSpawnDirection)`

**Purpose:** **Purpose:** Reads and returns the troop spawn frame with index value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.GetTroopSpawnFrameWithIndex(buildData, 0, 0, troopSpawnPosition, troopSpawnDirection);
```

### GetFormationSpawnFrame
`public void GetFormationSpawnFrame(Team team, FormationClass formationClass, bool isReinforcement, out WorldPosition spawnPosition, out Vec2 spawnDirection)`

**Purpose:** **Purpose:** Reads and returns the formation spawn frame value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.GetFormationSpawnFrame(team, formationClass, false, spawnPosition, spawnDirection);
```

### GetSpawnPathFrame
`public WorldFrame GetSpawnPathFrame(BattleSideEnum battleSide, float pathOffset = 0f, float targetOffset = 0f)`

**Purpose:** **Purpose:** Reads and returns the spawn path frame value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetSpawnPathFrame(battleSide, 0, 0);
```

### SetBattleAgentCount
`public void SetBattleAgentCount(int agentCount)`

**Purpose:** **Purpose:** Assigns a new value to battle agent count and updates the object's internal state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.SetBattleAgentCount(0);
```

### GetFormationSpawnPosition
`public Vec2 GetFormationSpawnPosition(Team team, FormationClass formationClass)`

**Purpose:** **Purpose:** Reads and returns the formation spawn position value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetFormationSpawnPosition(team, formationClass);
```

### GetFormationSpawnClass
`public FormationClass GetFormationSpawnClass(Team team, FormationClass formationClass, bool isReinforcement = false)`

**Purpose:** **Purpose:** Reads and returns the formation spawn class value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetFormationSpawnClass(team, formationClass, false);
```

### SpawnAgent
`public Agent SpawnAgent(AgentBuildData agentBuildData, bool spawnFromAgentVisuals = false)`

**Purpose:** **Purpose:** Executes the SpawnAgent logic.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.SpawnAgent(agentBuildData, false);
```

### SetInitialAgentCountForSide
`public void SetInitialAgentCountForSide(BattleSideEnum side, int agentCount)`

**Purpose:** **Purpose:** Assigns a new value to initial agent count for side and updates the object's internal state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.SetInitialAgentCountForSide(side, 0);
```

### SetFormationPositioningFromDeploymentPlan
`public void SetFormationPositioningFromDeploymentPlan(Formation formation)`

**Purpose:** **Purpose:** Assigns a new value to formation positioning from deployment plan and updates the object's internal state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.SetFormationPositioningFromDeploymentPlan(formation);
```

### SpawnMonster
`public Agent SpawnMonster(ItemRosterElement rosterElement, ItemRosterElement harnessRosterElement, in Vec3 initialPosition, in Vec2 initialDirection, int forcedAgentIndex = -1)`

**Purpose:** **Purpose:** Executes the SpawnMonster logic.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.SpawnMonster(rosterElement, harnessRosterElement, initialPosition, initialDirection, 0);
```

### SpawnMonster
`public Agent SpawnMonster(EquipmentElement equipmentElement, EquipmentElement harnessRosterElement, in Vec3 initialPosition, in Vec2 initialDirection, int forcedAgentIndex = -1)`

**Purpose:** **Purpose:** Executes the SpawnMonster logic.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.SpawnMonster(equipmentElement, harnessRosterElement, initialPosition, initialDirection, 0);
```

### SpawnTroop
`public Agent SpawnTroop(IAgentOriginBase troopOrigin, bool isPlayerSide, bool hasFormation, bool spawnWithHorse, bool isReinforcement, int formationTroopCount, int formationTroopIndex, bool isAlarmed, bool wieldInitialWeapons, bool forceDismounted, Vec3? initialPosition, Vec2? initialDirection, string specialActionSetSuffix = null, ItemObject bannerItem = null, FormationClass formationIndex = FormationClass.NumberOfAllFormations, bool useTroopClassForSpawn = false)`

**Purpose:** **Purpose:** Executes the SpawnTroop logic.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.SpawnTroop(troopOrigin, false, false, false, false, 0, 0, false, false, false, initialPosition, initialDirection, "example", null, formationClass.NumberOfAllFormations, false);
```

### ReplaceBotWithPlayer
`public Agent ReplaceBotWithPlayer(Agent botAgent, MissionPeer missionPeer)`

**Purpose:** **Purpose:** Executes the ReplaceBotWithPlayer logic.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.ReplaceBotWithPlayer(botAgent, missionPeer);
```

### OnAgentInteraction
`public void OnAgentInteraction(Agent requesterAgent, Agent targetAgent, sbyte agentBoneIndex)`

**Purpose:** **Purpose:** Invoked when the agent interaction event is raised.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.OnAgentInteraction(requesterAgent, targetAgent, 0);
```

### EndMission
`public void EndMission()`

**Purpose:** **Purpose:** Executes the EndMission logic.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.EndMission();
```

### AddMissionBehavior
`public void AddMissionBehavior(MissionBehavior missionBehavior)`

**Purpose:** **Purpose:** Adds mission behavior to the current collection or state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.AddMissionBehavior(missionBehavior);
```

### RemoveMissionBehavior
`public void RemoveMissionBehavior(MissionBehavior missionBehavior)`

**Purpose:** **Purpose:** Removes mission behavior from the current collection or state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.RemoveMissionBehavior(missionBehavior);
```

### JoinEnemyTeam
`public void JoinEnemyTeam()`

**Purpose:** **Purpose:** Joins several enemy team items into a single whole.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.JoinEnemyTeam();
```

### OnEndMissionResult
`public void OnEndMissionResult()`

**Purpose:** **Purpose:** Invoked when the end mission result event is raised.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.OnEndMissionResult();
```

### IsAgentInteractionAllowed
`public bool IsAgentInteractionAllowed()`

**Purpose:** **Purpose:** Determines whether the this instance is in the agent interaction allowed state or condition.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.IsAgentInteractionAllowed();
```

### IsOrderGesturesEnabled
`public bool IsOrderGesturesEnabled()`

**Purpose:** **Purpose:** Determines whether the this instance is in the order gestures enabled state or condition.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.IsOrderGesturesEnabled();
```

### GetExtraEquipmentElementsForCharacter
`public List<EquipmentElement> GetExtraEquipmentElementsForCharacter(BasicCharacterObject character, bool getAllEquipments = false)`

**Purpose:** **Purpose:** Reads and returns the extra equipment elements for character value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetExtraEquipmentElementsForCharacter(character, false);
```

### IsPlayerCloseToAnEnemy
`public bool IsPlayerCloseToAnEnemy(float distance = 5f)`

**Purpose:** **Purpose:** Determines whether the this instance is in the player close to an enemy state or condition.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.IsPlayerCloseToAnEnemy(0);
```

### GetRandomPositionAroundPoint
`public Vec3 GetRandomPositionAroundPoint(Vec3 center, float minDistance, float maxDistance, bool nearFirst = false)`

**Purpose:** **Purpose:** Reads and returns the random position around point value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetRandomPositionAroundPoint(center, 0, 0, false);
```

### FindBestDefendingPosition
`public WorldPosition FindBestDefendingPosition(WorldPosition enemyPosition, WorldPosition defendedPosition)`

**Purpose:** **Purpose:** Looks up the matching best defending position in the current collection or scope.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.FindBestDefendingPosition(enemyPosition, defendedPosition);
```

### FindPositionWithBiggestSlopeTowardsDirectionInSquare
`public WorldPosition FindPositionWithBiggestSlopeTowardsDirectionInSquare(ref WorldPosition center, float halfSize, ref WorldPosition referencePosition)`

**Purpose:** **Purpose:** Looks up the matching position with biggest slope towards direction in square in the current collection or scope.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.FindPositionWithBiggestSlopeTowardsDirectionInSquare(center, 0, referencePosition);
```

### AddCustomMissile
`public Mission.Missile AddCustomMissile(Agent shooterAgent, MissionWeapon missileWeapon, Vec3 position, Vec3 direction, Mat3 orientation, float baseSpeed, float speed, bool addRigidBody, MissionObject missionObjectToIgnore, int forcedMissileIndex = -1)`

**Purpose:** **Purpose:** Adds custom missile to the current collection or state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.AddCustomMissile(shooterAgent, missileWeapon, position, direction, orientation, 0, 0, false, missionObjectToIgnore, 0);
```

### OnAgentMount
`public void OnAgentMount(Agent agent)`

**Purpose:** **Purpose:** Invoked when the agent mount event is raised.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.OnAgentMount(agent);
```

### OnAgentDismount
`public void OnAgentDismount(Agent agent)`

**Purpose:** **Purpose:** Invoked when the agent dismount event is raised.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.OnAgentDismount(agent);
```

### OnObjectUsed
`public void OnObjectUsed(Agent userAgent, UsableMissionObject usableGameObject)`

**Purpose:** **Purpose:** Invoked when the object used event is raised.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.OnObjectUsed(userAgent, usableGameObject);
```

### OnObjectStoppedBeingUsed
`public void OnObjectStoppedBeingUsed(Agent userAgent, UsableMissionObject usableGameObject)`

**Purpose:** **Purpose:** Invoked when the object stopped being used event is raised.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.OnObjectStoppedBeingUsed(userAgent, usableGameObject);
```

### InitializeStartingBehaviors
`public void InitializeStartingBehaviors(MissionLogic logicBehaviors, MissionBehavior otherBehaviors, MissionNetwork networkBehaviors)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by starting behaviors.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.InitializeStartingBehaviors(logicBehaviors, otherBehaviors, networkBehaviors);
```

### GetClosestEnemyAgent
`public Agent GetClosestEnemyAgent(Team team, Vec3 position, float radius)`

**Purpose:** **Purpose:** Reads and returns the closest enemy agent value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetClosestEnemyAgent(team, position, 0);
```

### GetClosestAllyAgent
`public Agent GetClosestAllyAgent(Team team, Vec3 position, float radius)`

**Purpose:** **Purpose:** Reads and returns the closest ally agent value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetClosestAllyAgent(team, position, 0);
```

### GetNearbyEnemyAgentCount
`public int GetNearbyEnemyAgentCount(Team team, Vec2 position, float radius)`

**Purpose:** **Purpose:** Reads and returns the nearby enemy agent count value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetNearbyEnemyAgentCount(team, position, 0);
```

### HasAnyAgentsOfSideInRange
`public bool HasAnyAgentsOfSideInRange(Vec3 origin, float radius, BattleSideEnum side)`

**Purpose:** **Purpose:** Determines whether the this instance already holds any agents of side in range.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.HasAnyAgentsOfSideInRange(origin, 0, side);
```

### AddSoundAlarmFactorToAgents
`public void AddSoundAlarmFactorToAgents(Agent alarmCreatorAgent, in Vec3 soundPosition, float soundLevelSquareRoot)`

**Purpose:** **Purpose:** Adds sound alarm factor to agents to the current collection or state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.AddSoundAlarmFactorToAgents(alarmCreatorAgent, soundPosition, 0);
```

### OnMissionObjectRemoved
`public bool OnMissionObjectRemoved(MissionObject missionObject, int removeReason)`

**Purpose:** **Purpose:** Invoked when the mission object removed event is raised.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.OnMissionObjectRemoved(missionObject, 0);
```

### AgentLookingAtAgent
`public bool AgentLookingAtAgent(Agent agent1, Agent agent2)`

**Purpose:** **Purpose:** Executes the AgentLookingAtAgent logic.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.AgentLookingAtAgent(agent1, agent2);
```

### FindAgentWithIndex
`public Agent FindAgentWithIndex(int agentId)`

**Purpose:** **Purpose:** Looks up the matching agent with index in the current collection or scope.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.FindAgentWithIndex(0);
```

### GetUnderAttackTypeOfAgents
`public static Agent.UnderAttackType GetUnderAttackTypeOfAgents(IEnumerable<Agent> agents, float timeLimit = 3f)`

**Purpose:** **Purpose:** Reads and returns the under attack type of agents value held by the this instance.

```csharp
// Static call; no instance required
Mission.GetUnderAttackTypeOfAgents(agents, 0);
```

### GetAgentTeam
`public static Team GetAgentTeam(IAgentOriginBase troopOrigin, bool isPlayerSide)`

**Purpose:** **Purpose:** Reads and returns the agent team value held by the this instance.

```csharp
// Static call; no instance required
Mission.GetAgentTeam(troopOrigin, false);
```

### GetTeam
`public static Team GetTeam(TeamSideEnum teamSide)`

**Purpose:** **Purpose:** Reads and returns the team value held by the this instance.

```csharp
// Static call; no instance required
Mission.GetTeam(teamSide);
```

### GetTeamsOfSide
`public static IEnumerable<Team> GetTeamsOfSide(BattleSideEnum side)`

**Purpose:** **Purpose:** Reads and returns the teams of side value held by the this instance.

```csharp
// Static call; no instance required
Mission.GetTeamsOfSide(side);
```

### GetBattleSizeOffset
`public static float GetBattleSizeOffset(int battleSize, Path path)`

**Purpose:** **Purpose:** Reads and returns the battle size offset value held by the this instance.

```csharp
// Static call; no instance required
Mission.GetBattleSizeOffset(0, path);
```

### GetPathOffsetFromDistance
`public static float GetPathOffsetFromDistance(float distance, Path path)`

**Purpose:** **Purpose:** Reads and returns the path offset from distance value held by the this instance.

```csharp
// Static call; no instance required
Mission.GetPathOffsetFromDistance(0, path);
```

### OnRenderingStarted
`public void OnRenderingStarted()`

**Purpose:** **Purpose:** Invoked when the rendering started event is raised.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.OnRenderingStarted();
```

### GetBattleSizeFactor
`public static float GetBattleSizeFactor(int battleSize, float normalizationFactor)`

**Purpose:** **Purpose:** Reads and returns the battle size factor value held by the this instance.

```csharp
// Static call; no instance required
Mission.GetBattleSizeFactor(0, 0);
```

### GetMovementTypeOfAgents
`public unsafe Agent.MovementBehaviorType GetMovementTypeOfAgents(IEnumerable<Agent> agents)`

**Purpose:** **Purpose:** Reads and returns the movement type of agents value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetMovementTypeOfAgents(agents);
```

### ShowInMissionLoadingScreen
`public void ShowInMissionLoadingScreen(int durationInSecond, Action onLoadingEndedAction)`

**Purpose:** **Purpose:** Displays the UI or element associated with in mission loading screen.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.ShowInMissionLoadingScreen(0, onLoadingEndedAction);
```

### CanAgentRout
`public bool CanAgentRout(Agent agent)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for agent rout.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.CanAgentRout(agent);
```

### HandleMissileCollisionReaction
`public void HandleMissileCollisionReaction(int missileIndex, Mission.MissileCollisionReaction collisionReaction, MatrixFrame attachLocalFrame, bool isAttachedFrameLocal, Agent attackerAgent, Agent attachedAgent, bool attachedToShield, sbyte attachedBoneIndex, MissionObject attachedMissionObject, Vec3 bounceBackVelocity, Vec3 bounceBackAngularVelocity, int forcedSpawnIndex)`

**Purpose:** **Purpose:** Executes the response logic associated with missile collision reaction.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.HandleMissileCollisionReaction(0, collisionReaction, attachLocalFrame, false, attackerAgent, attachedAgent, false, 0, attachedMissionObject, bounceBackVelocity, bounceBackAngularVelocity, 0);
```

### KillAgentsOnEntity
`public void KillAgentsOnEntity(GameEntity entity, Agent destroyerAgent, bool burnAgents)`

**Purpose:** **Purpose:** Executes the KillAgentsOnEntity logic.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.KillAgentsOnEntity(entity, destroyerAgent, false);
```

### KillAgentCheat
`public void KillAgentCheat(Agent agent)`

**Purpose:** **Purpose:** Executes the KillAgentCheat logic.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.KillAgentCheat(agent);
```

### KillCheats
`public bool KillCheats(bool killAll, bool killEnemy, bool killHorse, bool killYourself)`

**Purpose:** **Purpose:** Executes the KillCheats logic.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.KillCheats(false, false, false, false);
```

### GetDamageMultiplierOfCombatDifficulty
`public float GetDamageMultiplierOfCombatDifficulty(Agent victimAgent, Agent attackerAgent = null)`

**Purpose:** **Purpose:** Reads and returns the damage multiplier of combat difficulty value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetDamageMultiplierOfCombatDifficulty(victimAgent, null);
```

### GetShootDifficulty
`public float GetShootDifficulty(Agent affectedAgent, Agent affectorAgent, bool isHeadShot)`

**Purpose:** **Purpose:** Reads and returns the shoot difficulty value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetShootDifficulty(affectedAgent, affectorAgent, false);
```

### AddCombatLogSafe
`public void AddCombatLogSafe(Agent attackerAgent, Agent victimAgent, CombatLogData combatLog)`

**Purpose:** **Purpose:** Adds combat log safe to the current collection or state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.AddCombatLogSafe(attackerAgent, victimAgent, combatLog);
```

### CreateMissionObjectFromPrefab
`public MissionObject CreateMissionObjectFromPrefab(string prefab, MatrixFrame frame, Action<GameEntity> actionAppliedBeforeScriptInitialization)`

**Purpose:** **Purpose:** Constructs a new mission object from prefab entity and returns it to the caller.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.CreateMissionObjectFromPrefab("example", frame, actionAppliedBeforeScriptInitialization);
```

### GetNearbyAllyAgentsCount
`public int GetNearbyAllyAgentsCount(Vec2 center, float radius, Team team)`

**Purpose:** **Purpose:** Reads and returns the nearby ally agents count value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetNearbyAllyAgentsCount(center, 0, team);
```

### GetNearbyAllyAgents
`public MBList<Agent> GetNearbyAllyAgents(Vec2 center, float radius, Team team, MBList<Agent> agents)`

**Purpose:** **Purpose:** Reads and returns the nearby ally agents value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetNearbyAllyAgents(center, 0, team, agents);
```

### GetNearbyEnemyAgents
`public MBList<Agent> GetNearbyEnemyAgents(Vec2 center, float radius, Team team, MBList<Agent> agents)`

**Purpose:** **Purpose:** Reads and returns the nearby enemy agents value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetNearbyEnemyAgents(center, 0, team, agents);
```

### GetNearbyAgents
`public MBList<Agent> GetNearbyAgents(Vec2 center, float radius, MBList<Agent> agents)`

**Purpose:** **Purpose:** Reads and returns the nearby agents value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetNearbyAgents(center, 0, agents);
```

### IsFormationUnitPositionAvailableMT
`public bool IsFormationUnitPositionAvailableMT(ref WorldPosition formationPosition, ref WorldPosition unitPosition, ref WorldPosition nearestAvailableUnitPosition, float manhattanDistance, Team team)`

**Purpose:** **Purpose:** Determines whether the this instance is in the formation unit position available m t state or condition.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.IsFormationUnitPositionAvailableMT(formationPosition, unitPosition, nearestAvailableUnitPosition, 0, team);
```

### IsOrderPositionAvailable
`public bool IsOrderPositionAvailable(in WorldPosition orderPosition, Team team)`

**Purpose:** **Purpose:** Determines whether the this instance is in the order position available state or condition.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.IsOrderPositionAvailable(orderPosition, team);
```

### IsFormationUnitPositionAvailable
`public bool IsFormationUnitPositionAvailable(ref WorldPosition unitPosition, Team team)`

**Purpose:** **Purpose:** Determines whether the this instance is in the formation unit position available state or condition.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.IsFormationUnitPositionAvailable(unitPosition, team);
```

### HasSceneMapPatch
`public bool HasSceneMapPatch()`

**Purpose:** **Purpose:** Determines whether the this instance already holds scene map patch.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.HasSceneMapPatch();
```

### GetPatchSceneEncounterPosition
`public bool GetPatchSceneEncounterPosition(out Vec3 position)`

**Purpose:** **Purpose:** Reads and returns the patch scene encounter position value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetPatchSceneEncounterPosition(position);
```

### GetPatchSceneEncounterDirection
`public bool GetPatchSceneEncounterDirection(out Vec2 direction)`

**Purpose:** **Purpose:** Reads and returns the patch scene encounter direction value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetPatchSceneEncounterDirection(direction);
```

### AddTimerToDynamicEntity
`public void AddTimerToDynamicEntity(GameEntity gameEntity, float timeToKill = 10f)`

**Purpose:** **Purpose:** Adds timer to dynamic entity to the current collection or state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.AddTimerToDynamicEntity(gameEntity, 0);
```

### AddListener
`public void AddListener(IMissionListener listener)`

**Purpose:** **Purpose:** Adds listener to the current collection or state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.AddListener(listener);
```

### RemoveListener
`public void RemoveListener(IMissionListener listener)`

**Purpose:** **Purpose:** Removes listener from the current collection or state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.RemoveListener(listener);
```

### OnAgentFleeing
`public void OnAgentFleeing(Agent agent)`

**Purpose:** **Purpose:** Invoked when the agent fleeing event is raised.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.OnAgentFleeing(agent);
```

### OnAgentPanicked
`public void OnAgentPanicked(Agent agent)`

**Purpose:** **Purpose:** Invoked when the agent panicked event is raised.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.OnAgentPanicked(agent);
```

### OnTeamDeployed
`public void OnTeamDeployed(Team team)`

**Purpose:** **Purpose:** Invoked when the team deployed event is raised.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.OnTeamDeployed(team);
```

### OnBattleSideDeployed
`public void OnBattleSideDeployed(BattleSideEnum side)`

**Purpose:** **Purpose:** Invoked when the battle side deployed event is raised.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.OnBattleSideDeployed(side);
```

### OnDeploymentFinished
`public void OnDeploymentFinished()`

**Purpose:** **Purpose:** Invoked when the deployment finished event is raised.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.OnDeploymentFinished();
```

### OnAfterDeploymentFinished
`public void OnAfterDeploymentFinished()`

**Purpose:** **Purpose:** Invoked when the after deployment finished event is raised.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.OnAfterDeploymentFinished();
```

### OnFormationCaptainChanged
`public void OnFormationCaptainChanged(Formation formation)`

**Purpose:** **Purpose:** Invoked when the formation captain changed event is raised.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.OnFormationCaptainChanged(formation);
```

### SetFastForwardingFromUI
`public void SetFastForwardingFromUI(bool fastForwarding)`

**Purpose:** **Purpose:** Assigns a new value to fast forwarding from u i and updates the object's internal state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.SetFastForwardingFromUI(false);
```

### CheckIfBattleInRetreat
`public bool CheckIfBattleInRetreat()`

**Purpose:** **Purpose:** Verifies whether if battle in retreat holds true for the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.CheckIfBattleInRetreat();
```

### AddSpawnedItemEntityCreatedAtRuntime
`public void AddSpawnedItemEntityCreatedAtRuntime(SpawnedItemEntity spawnedItemEntity)`

**Purpose:** **Purpose:** Adds spawned item entity created at runtime to the current collection or state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.AddSpawnedItemEntityCreatedAtRuntime(spawnedItemEntity);
```

### TriggerOnItemPickUpEvent
`public void TriggerOnItemPickUpEvent(Agent agent, SpawnedItemEntity spawnedItemEntity)`

**Purpose:** **Purpose:** Triggers the logic or event associated with on item pick up event.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.TriggerOnItemPickUpEvent(agent, spawnedItemEntity);
```

### KillNAllies
`public static string KillNAllies(List<string> strings)`

**Purpose:** **Purpose:** Executes the KillNAllies logic.

```csharp
// Static call; no instance required
Mission.KillNAllies(strings);
```

### KillAllAllies
`public static string KillAllAllies(List<string> strings)`

**Purpose:** **Purpose:** Executes the KillAllAllies logic.

```csharp
// Static call; no instance required
Mission.KillAllAllies(strings);
```

### ToggleDisableDying
`public static string ToggleDisableDying(List<string> strings)`

**Purpose:** **Purpose:** Executes the ToggleDisableDying logic.

```csharp
// Static call; no instance required
Mission.ToggleDisableDying(strings);
```

### ToggleDisableDyingTeam
`public static string ToggleDisableDyingTeam(List<string> strings)`

**Purpose:** **Purpose:** Executes the ToggleDisableDyingTeam logic.

```csharp
// Static call; no instance required
Mission.ToggleDisableDyingTeam(strings);
```

### KillAgent
`public static string KillAgent(List<string> strings)`

**Purpose:** **Purpose:** Executes the KillAgent logic.

```csharp
// Static call; no instance required
Mission.KillAgent(strings);
```

### IncreaseBatteringRamSpeeds
`public static string IncreaseBatteringRamSpeeds(List<string> strings)`

**Purpose:** **Purpose:** Executes the IncreaseBatteringRamSpeeds logic.

```csharp
// Static call; no instance required
Mission.IncreaseBatteringRamSpeeds(strings);
```

### IncreaseSiegeTowerSpeed
`public static string IncreaseSiegeTowerSpeed(List<string> strings)`

**Purpose:** **Purpose:** Executes the IncreaseSiegeTowerSpeed logic.

```csharp
// Static call; no instance required
Mission.IncreaseSiegeTowerSpeed(strings);
```

### LoadParamsDebug
`public static string LoadParamsDebug(List<string> strings)`

**Purpose:** **Purpose:** Reads params debug from persistent storage or a stream.

```csharp
// Static call; no instance required
Mission.LoadParamsDebug(strings);
```

### GetEnumerator
`public IEnumerator<KeyValuePair<string, ICollection<Vec2>>> GetEnumerator()`

**Purpose:** **Purpose:** Reads and returns the enumerator value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetEnumerator();
```

### GetBoundaryRadius
`public float GetBoundaryRadius(string name)`

**Purpose:** **Purpose:** Reads and returns the boundary radius value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.GetBoundaryRadius("example");
```

### GetOrientedBoundariesBox
`public void GetOrientedBoundariesBox(out Vec2 boxMinimum, out Vec2 boxMaximum, float rotationInRadians = 0f)`

**Purpose:** **Purpose:** Reads and returns the oriented boundaries box value held by the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.GetOrientedBoundariesBox(boxMinimum, boxMaximum, 0);
```

### Add
`public void Add(KeyValuePair<string, ICollection<Vec2>> item)`

**Purpose:** **Purpose:** Adds an item to the current collection or state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.Add(keyValuePair<string, item);
```

### Clear
`public void Clear()`

**Purpose:** **Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.Clear();
```

### Contains
`public bool Contains(KeyValuePair<string, ICollection<Vec2>> item)`

**Purpose:** **Purpose:** Indicates whether the this instance contains the specified item.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.Contains(keyValuePair<string, item);
```

### CopyTo
`public void CopyTo(KeyValuePair<string, ICollection<Vec2>> array, int arrayIndex)`

**Purpose:** **Purpose:** Copies the to state of the this instance to a target.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.CopyTo(keyValuePair<string, array, 0);
```

### Remove
`public bool Remove(KeyValuePair<string, ICollection<Vec2>> item)`

**Purpose:** **Purpose:** Removes an item from the current collection or state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.Remove(keyValuePair<string, item);
```

### Add
`public void Add(string name, ICollection<Vec2> points)`

**Purpose:** **Purpose:** Adds an item to the current collection or state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.Add("example", points);
```

### Add
`public void Add(string name, ICollection<Vec2> points, bool isAllowanceInside)`

**Purpose:** **Purpose:** Adds an item to the current collection or state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.Add("example", points, false);
```

### ContainsKey
`public bool ContainsKey(string name)`

**Purpose:** **Purpose:** Indicates whether the this instance contains key.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.ContainsKey("example");
```

### Remove
`public bool Remove(string name)`

**Purpose:** **Purpose:** Removes an item from the current collection or state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.Remove("example");
```

### TryGetValue
`public bool TryGetValue(string name, out ICollection<Vec2> points)`

**Purpose:** **Purpose:** Attempts to retrieve get value, usually returning success through an out parameter.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.TryGetValue("example", points);
```

### GetAgentFromIndex
`public static Agent GetAgentFromIndex(int agentIndex, bool canBeNull = false)`

**Purpose:** **Purpose:** Reads and returns the agent from index value held by the this instance.

```csharp
// Static call; no instance required
Mission.GetAgentFromIndex(0, false);
```

### GetMBTeamFromTeamIndex
`public static MBTeam GetMBTeamFromTeamIndex(int teamIndex)`

**Purpose:** **Purpose:** Reads and returns the m b team from team index value held by the this instance.

```csharp
// Static call; no instance required
Mission.GetMBTeamFromTeamIndex(0);
```

### GetTeamFromTeamIndex
`public static Team GetTeamFromTeamIndex(int teamIndex)`

**Purpose:** **Purpose:** Reads and returns the team from team index value held by the this instance.

```csharp
// Static call; no instance required
Mission.GetTeamFromTeamIndex(0);
```

### GetMissionObjectFromMissionObjectId
`public static MissionObject GetMissionObjectFromMissionObjectId(MissionObjectId missionObjectId)`

**Purpose:** **Purpose:** Reads and returns the mission object from mission object id value held by the this instance.

```csharp
// Static call; no instance required
Mission.GetMissionObjectFromMissionObjectId(missionObjectId);
```

### GetCombatLogDataForCombatLogNetworkMessage
`public static CombatLogData GetCombatLogDataForCombatLogNetworkMessage(CombatLogNetworkMessage message)`

**Purpose:** **Purpose:** Reads and returns the combat log data for combat log network message value held by the this instance.

```csharp
// Static call; no instance required
Mission.GetCombatLogDataForCombatLogNetworkMessage(message);
```

### CalculatePassbySoundParametersMT
`public void CalculatePassbySoundParametersMT(ref SoundEventParameter soundEventParameter)`

**Purpose:** **Purpose:** Calculates the current value or result of passby sound parameters m t.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.CalculatePassbySoundParametersMT(soundEventParameter);
```

### CalculateBounceBackVelocity
`public void CalculateBounceBackVelocity(Vec3 rotationSpeed, AttackCollisionData collisionData, out Vec3 velocity, out Vec3 angularVelocity)`

**Purpose:** **Purpose:** Calculates the current value or result of bounce back velocity.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.CalculateBounceBackVelocity(rotationSpeed, collisionData, velocity, angularVelocity);
```

### PassThroughEntity
`public void PassThroughEntity(GameEntity entity)`

**Purpose:** **Purpose:** Executes the PassThroughEntity logic.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.PassThroughEntity(entity);
```

### OnBeforeAgentRemovedDelegate
`public delegate void OnBeforeAgentRemovedDelegate(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** **Purpose:** Invoked when the before agent removed delegate event is raised.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.OnBeforeAgentRemovedDelegate(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnAddSoundAlarmFactorToAgentsDelegate
`public delegate void OnAddSoundAlarmFactorToAgentsDelegate(Agent alarmCreatorAgent, in Vec3 soundPosition, float soundLevelSquareRoot)`

**Purpose:** **Purpose:** Invoked when the add sound alarm factor to agents delegate event is raised.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.OnAddSoundAlarmFactorToAgentsDelegate(alarmCreatorAgent, soundPosition, 0);
```

### OnMainAgentChangedDelegate
`public delegate void OnMainAgentChangedDelegate(Agent oldAgent)`

**Purpose:** **Purpose:** Invoked when the main agent changed delegate event is raised.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.OnMainAgentChangedDelegate(oldAgent);
```

### Add
`public new void Add(Team t)`

**Purpose:** **Purpose:** Adds an item to the current collection or state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.Add(t);
```

### Add
`public Team Add(BattleSideEnum side, uint color = 4294967295U, uint color2 = 4294967295U, Banner banner = null, bool isPlayerGeneral = true, bool isPlayerSergeant = false, bool isSettingRelations = true)`

**Purpose:** **Purpose:** Adds an item to the current collection or state.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.Add(side, 0, 0, null, false, false, false);
```

### Find
`public Team Find(MBTeam mbTeam)`

**Purpose:** **Purpose:** Finds the matching entry in the current collection or scope.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
var result = mission.Find(mbTeam);
```

### ClearResources
`public void ClearResources()`

**Purpose:** **Purpose:** Removes all resources from the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.ClearResources();
```

### Clear
`public new void Clear()`

**Purpose:** **Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of Mission from the subsystem API first
Mission mission = ...;
mission.Clear();
```

## Usage Example

```csharp
var mission = Mission.Current;
mission.AddActiveMissionObject(missionObject);
```

## See Also

- [Area Index](../)