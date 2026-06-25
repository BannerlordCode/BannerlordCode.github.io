---
title: "Mission"
description: "Mission 的自动生成类参考。"
---
# Mission

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class Mission : DotNetObject, IMission`
**Base:** `DotNetObject`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Mission.cs`

## 概述

`Mission` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
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
| `Player` | `public Team Player { get; }` |
| `PlayerEnemy` | `public Team PlayerEnemy { get; }` |
| `PlayerAlly` | `public Team PlayerAlly { get; }` |
| `Current` | `public static Mission Current { get; }` |
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
| `ListenerAndAttenuationPosBlendFactor` | `public float ListenerAndAttenuationPosBlendFactor { get; }` |
| `IgnoredEntityForCamera` | `public GameEntity IgnoredEntityForCamera { get; }` |
| `Boundaries` | `public MBBoundaryCollection Boundaries { get; }` |
| `IsMainAgentObjectInteractionEnabled` | `public bool IsMainAgentObjectInteractionEnabled { get; }` |
| `IsMainAgentItemInteractionEnabled` | `public bool IsMainAgentItemInteractionEnabled { get; }` |
| `IsTeleportingAgents` | `public bool IsTeleportingAgents { get; set; }` |
| `ForceTickOccasionally` | `public bool ForceTickOccasionally { get; set; }` |
| `CombatType` | `public MissionCombatType CombatType { get; set; }` |
| `PauseAITick` | `public bool PauseAITick { get; set; }` |
| `CameraIsFirstPerson` | `public bool CameraIsFirstPerson { get; set; }` |
| `CameraAddedDistance` | `public static float CameraAddedDistance { get; set; }` |
| `MissionEnded` | `public bool MissionEnded { get; }` |
| `MissionIsEnding` | `public bool MissionIsEnding { get; }` |
| `IsDeploymentFinished` | `public bool IsDeploymentFinished { get; }` |
| `RetreatSide` | `public BattleSideEnum RetreatSide { get; }` |
| `IsFastForward` | `public bool IsFastForward { get; }` |
| `FixedDeltaTimeMode` | `public bool FixedDeltaTimeMode { get; }` |
| `FixedDeltaTime` | `public float FixedDeltaTime { get; }` |
| `CurrentState` | `public State CurrentState { get; }` |
| `Teams` | `public TeamCollection Teams { get; }` |
| `PlayerTeam` | `public Team PlayerTeam { get; set; }` |
| `SpectatorTeam` | `public Team SpectatorTeam { get; set; }` |
| `IsMissionEnding` | `public bool IsMissionEnding { get; }` |
| `MissionLogics` | `public List<MissionLogic> MissionLogics { get; set; }` |
| `MissionBehaviors` | `public List<MissionBehavior> MissionBehaviors { get; }` |
| `InputManager` | `public IInputContext InputManager { get; }` |
| `NeedsMemoryCleanup` | `public bool NeedsMemoryCleanup { get; }` |
| `MainAgent` | `public Agent MainAgent { get; set; }` |
| `IsBattleSpawnPathSelectorInitialized` | `public bool IsBattleSpawnPathSelectorInitialized { get; }` |
| `MainAgentServer` | `public Agent MainAgentServer { get; set; }` |
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
| `MissionTeamAIType` | `public MissionTeamAITypeEnum MissionTeamAIType { get; set; }` |
| `MissionTimeTracker` | `public MissionTimeTracker MissionTimeTracker { get; }` |

## 主要方法

### GetEnumerator
`public IEnumerator<KeyValuePair<string, ICollection<Vec2>>> GetEnumerator()`

**用途 / Purpose:** 读取并返回当前对象中 enumerator 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetEnumerator();
```

### GetBoundaryRadius
`public float GetBoundaryRadius(string name)`

**用途 / Purpose:** 读取并返回当前对象中 boundary radius 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetBoundaryRadius("example");
```

### GetOrientedBoundariesBox
`public void GetOrientedBoundariesBox(out Vec2 boxMinimum, out Vec2 boxMaximum, float rotationInRadians = 0f)`

**用途 / Purpose:** 读取并返回当前对象中 oriented boundaries box 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.GetOrientedBoundariesBox(boxMinimum, boxMaximum, 0);
```

### Add
`public void Add(KeyValuePair<string, ICollection<Vec2>> item)`

**用途 / Purpose:** 向当前容器或状态添加项。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.Add(keyValuePair<string, item);
```

### Clear
`public void Clear()`

**用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.Clear();
```

### Contains
`public bool Contains(KeyValuePair<string, ICollection<Vec2>> item)`

**用途 / Purpose:** 检查当前对象是否含有目标项。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.Contains(keyValuePair<string, item);
```

### CopyTo
`public void CopyTo(KeyValuePair<string, ICollection<Vec2>> array, int arrayIndex)`

**用途 / Purpose:** 把当前对象的to状态复制到目标对象。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.CopyTo(keyValuePair<string, array, 0);
```

### Remove
`public bool Remove(KeyValuePair<string, ICollection<Vec2>> item)`

**用途 / Purpose:** 从当前容器或状态中移除项。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.Remove(keyValuePair<string, item);
```

### Add
`public void Add(string name, ICollection<Vec2> points)`

**用途 / Purpose:** 向当前容器或状态添加项。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.Add("example", points);
```

### Add
`public void Add(string name, ICollection<Vec2> points, bool isAllowanceInside)`

**用途 / Purpose:** 向当前容器或状态添加项。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.Add("example", points, false);
```

### ContainsKey
`public bool ContainsKey(string name)`

**用途 / Purpose:** 检查当前对象是否含有key。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.ContainsKey("example");
```

### Remove
`public bool Remove(string name)`

**用途 / Purpose:** 从当前容器或状态中移除项。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.Remove("example");
```

### TryGetValue
`public bool TryGetValue(string name, out ICollection<Vec2> points)`

**用途 / Purpose:** 尝试获取 get value 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.TryGetValue("example", points);
```

### GetAgentFromIndex
`public static Agent GetAgentFromIndex(int agentIndex, bool canBeNull = false)`

**用途 / Purpose:** 读取并返回当前对象中 agent from index 的结果。

```csharp
// 静态调用，不需要实例
Mission.GetAgentFromIndex(0, false);
```

### GetMBTeamFromTeamIndex
`public static MBTeam GetMBTeamFromTeamIndex(int teamIndex)`

**用途 / Purpose:** 读取并返回当前对象中 m b team from team index 的结果。

```csharp
// 静态调用，不需要实例
Mission.GetMBTeamFromTeamIndex(0);
```

### GetTeamFromTeamIndex
`public static Team GetTeamFromTeamIndex(int teamIndex)`

**用途 / Purpose:** 读取并返回当前对象中 team from team index 的结果。

```csharp
// 静态调用，不需要实例
Mission.GetTeamFromTeamIndex(0);
```

### GetMissionObjectFromMissionObjectId
`public static MissionObject GetMissionObjectFromMissionObjectId(MissionObjectId missionObjectId)`

**用途 / Purpose:** 读取并返回当前对象中 mission object from mission object id 的结果。

```csharp
// 静态调用，不需要实例
Mission.GetMissionObjectFromMissionObjectId(missionObjectId);
```

### GetCombatLogDataForCombatLogNetworkMessage
`public static CombatLogData GetCombatLogDataForCombatLogNetworkMessage(CombatLogNetworkMessage message)`

**用途 / Purpose:** 读取并返回当前对象中 combat log data for combat log network message 的结果。

```csharp
// 静态调用，不需要实例
Mission.GetCombatLogDataForCombatLogNetworkMessage(message);
```

### CalculatePassbySoundParametersMT
`public void CalculatePassbySoundParametersMT(ref SoundEventParameter soundEventParameter)`

**用途 / Purpose:** 计算passby sound parameters m t的当前值或结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.CalculatePassbySoundParametersMT(soundEventParameter);
```

### CalculateBounceBackVelocity
`public void CalculateBounceBackVelocity(Vec3 rotationSpeed, AttackCollisionData collisionData, out Vec3 velocity, out Vec3 angularVelocity)`

**用途 / Purpose:** 计算bounce back velocity的当前值或结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.CalculateBounceBackVelocity(rotationSpeed, collisionData, velocity, angularVelocity);
```

### PassThroughEntity
`public void PassThroughEntity(GameEntity entity)`

**用途 / Purpose:** 调用 PassThroughEntity 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.PassThroughEntity(entity);
```

### OnBeforeAgentRemovedDelegate
`public delegate void OnBeforeAgentRemovedDelegate(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** 在 before agent removed delegate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.OnBeforeAgentRemovedDelegate(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnAddSoundAlarmFactorToAgentsDelegate
`public delegate void OnAddSoundAlarmFactorToAgentsDelegate(Agent alarmCreatorAgent, in Vec3 soundPosition, float soundLevelSquareRoot)`

**用途 / Purpose:** 在 add sound alarm factor to agents delegate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.OnAddSoundAlarmFactorToAgentsDelegate(alarmCreatorAgent, soundPosition, 0);
```

### OnMainAgentChangedDelegate
`public delegate void OnMainAgentChangedDelegate(Agent oldAgent)`

**用途 / Purpose:** 在 main agent changed delegate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.OnMainAgentChangedDelegate(oldAgent);
```

### OnCameraShakeTriggeredDelegate
`public delegate void OnCameraShakeTriggeredDelegate(in Vec3 position, float radius)`

**用途 / Purpose:** 在 camera shake triggered delegate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.OnCameraShakeTriggeredDelegate(position, 0);
```

### ComputeTroopBodyPropertiesDelegate
`public delegate BodyProperties ComputeTroopBodyPropertiesDelegate(AgentBuildData agentBuildData, BasicCharacterObject characterObject, Equipment equipment, int seed)`

**用途 / Purpose:** 调用 ComputeTroopBodyPropertiesDelegate 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.ComputeTroopBodyPropertiesDelegate(agentBuildData, characterObject, equipment, 0);
```

### Add
`public new void Add(Team t)`

**用途 / Purpose:** 向当前容器或状态添加项。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.Add(t);
```

### Add
`public Team Add(BattleSideEnum side, uint color = uint.MaxValue, uint color2 = uint.MaxValue, Banner banner = null, bool isPlayerGeneral = true, bool isPlayerSergeant = false, bool isSettingRelations = true)`

**用途 / Purpose:** 向当前容器或状态添加项。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.Add(side, 0, 0, null, false, false, false);
```

### Find
`public Team Find(MBTeam mbTeam)`

**用途 / Purpose:** 在当前集合/范围内查找匹配项。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.Find(mbTeam);
```

### ClearResources
`public void ClearResources()`

**用途 / Purpose:** 清空当前对象中的resources。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.ClearResources();
```

### Clear
`public new void Clear()`

**用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.Clear();
```

### AddActiveMissionObject
`public void AddActiveMissionObject(MissionObject missionObject)`

**用途 / Purpose:** 将 active mission object 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.AddActiveMissionObject(missionObject);
```

### ActivateMissionObject
`public void ActivateMissionObject(MissionObject missionObject)`

**用途 / Purpose:** 激活mission object对应的资源、状态或功能。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.ActivateMissionObject(missionObject);
```

### DeactivateMissionObject
`public void DeactivateMissionObject(MissionObject missionObject)`

**用途 / Purpose:** 停用mission object对应的资源、状态或功能。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.DeactivateMissionObject(missionObject);
```

### SetMissionCombatType
`public void SetMissionCombatType(MissionCombatType missionCombatType)`

**用途 / Purpose:** 为 mission combat type 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.SetMissionCombatType(missionCombatType);
```

### ConversationCharacterChanged
`public void ConversationCharacterChanged()`

**用途 / Purpose:** 调用 ConversationCharacterChanged 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.ConversationCharacterChanged();
```

### SetMissionMode
`public void SetMissionMode(MissionMode newMode, bool atStart)`

**用途 / Purpose:** 为 mission mode 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.SetMissionMode(newMode, false);
```

### GetAverageFps
`public float GetAverageFps()`

**用途 / Purpose:** 读取并返回当前对象中 average fps 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetAverageFps();
```

### GetFallAvoidSystemActive
`public bool GetFallAvoidSystemActive()`

**用途 / Purpose:** 读取并返回当前对象中 fall avoid system active 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetFallAvoidSystemActive();
```

### SetFallAvoidSystemActive
`public void SetFallAvoidSystemActive(bool fallAvoidActive)`

**用途 / Purpose:** 为 fall avoid system active 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.SetFallAvoidSystemActive(false);
```

### IsPositionInsideBoundaries
`public bool IsPositionInsideBoundaries(Vec2 position)`

**用途 / Purpose:** 判断当前对象是否处于 position inside boundaries 状态或条件。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.IsPositionInsideBoundaries(position);
```

### IsPositionInsideHardBoundaries
`public bool IsPositionInsideHardBoundaries(Vec2 position)`

**用途 / Purpose:** 判断当前对象是否处于 position inside hard boundaries 状态或条件。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.IsPositionInsideHardBoundaries(position);
```

### IsPositionInsideAnyBlockerNavMeshFace2D
`public bool IsPositionInsideAnyBlockerNavMeshFace2D(Vec2 position)`

**用途 / Purpose:** 判断当前对象是否处于 position inside any blocker nav mesh face2 d 状态或条件。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.IsPositionInsideAnyBlockerNavMeshFace2D(position);
```

### IsPositionOnAnyBlockerNavMeshFace
`public bool IsPositionOnAnyBlockerNavMeshFace(Vec3 position)`

**用途 / Purpose:** 判断当前对象是否处于 position on any blocker nav mesh face 状态或条件。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.IsPositionOnAnyBlockerNavMeshFace(position);
```

### RayCastForClosestAgent
`public Agent RayCastForClosestAgent(Vec3 sourcePoint, Vec3 targetPoint, int excludedAgentIndex, float rayThickness, out float collisionDistance)`

**用途 / Purpose:** 调用 RayCastForClosestAgent 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.RayCastForClosestAgent(sourcePoint, targetPoint, 0, 0, collisionDistance);
```

### RayCastForClosestAgentsLimbs
`public Agent RayCastForClosestAgentsLimbs(Vec3 sourcePoint, Vec3 targetPoint, int excludedAgentIndex, float rayThickness, out float collisionDistance, out sbyte boneIndex)`

**用途 / Purpose:** 调用 RayCastForClosestAgentsLimbs 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.RayCastForClosestAgentsLimbs(sourcePoint, targetPoint, 0, 0, collisionDistance, boneIndex);
```

### RayCastForGivenAgentsLimbs
`public bool RayCastForGivenAgentsLimbs(Vec3 sourcePoint, Vec3 rayFinishPoint, int givenAgentIndex, float rayThickness, out float collisionDistance, out sbyte boneIndex)`

**用途 / Purpose:** 调用 RayCastForGivenAgentsLimbs 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.RayCastForGivenAgentsLimbs(sourcePoint, rayFinishPoint, 0, 0, collisionDistance, boneIndex);
```

### GetBiggestAgentCollisionPadding
`public float GetBiggestAgentCollisionPadding()`

**用途 / Purpose:** 读取并返回当前对象中 biggest agent collision padding 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetBiggestAgentCollisionPadding();
```

### SetMissionCorpseFadeOutTimeInSeconds
`public void SetMissionCorpseFadeOutTimeInSeconds(float corpseFadeOutTimeInSeconds)`

**用途 / Purpose:** 为 mission corpse fade out time in seconds 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.SetMissionCorpseFadeOutTimeInSeconds(0);
```

### SetOverrideCorpseCount
`public void SetOverrideCorpseCount(int overrideCorpseCount)`

**用途 / Purpose:** 为 override corpse count 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.SetOverrideCorpseCount(0);
```

### SetReportStuckAgentsMode
`public void SetReportStuckAgentsMode(bool value)`

**用途 / Purpose:** 为 report stuck agents mode 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.SetReportStuckAgentsMode(false);
```

### ResetMission
`public void ResetMission()`

**用途 / Purpose:** 将 mission 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.ResetMission();
```

### Initialize
`public void Initialize()`

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.Initialize();
```

### TickAgentsAndTeamsAsync
`public void TickAgentsAndTeamsAsync(float dt)`

**用途 / Purpose:** 在每一帧或每个更新周期内推进agents and teams async的状态。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.TickAgentsAndTeamsAsync(0);
```

### MakeSound
`public void MakeSound(int soundIndex, Vec3 position, bool soundCanBePredicted, bool isReliable, int relatedAgent1, int relatedAgent2)`

**用途 / Purpose:** 调用 MakeSound 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.MakeSound(0, position, false, false, 0, 0);
```

### MakeSound
`public void MakeSound(int soundIndex, Vec3 position, bool soundCanBePredicted, bool isReliable, int relatedAgent1, int relatedAgent2, ref SoundEventParameter parameter)`

**用途 / Purpose:** 调用 MakeSound 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.MakeSound(0, position, false, false, 0, 0, parameter);
```

### MakeSoundOnlyOnRelatedPeer
`public void MakeSoundOnlyOnRelatedPeer(int soundIndex, Vec3 position, int relatedAgent)`

**用途 / Purpose:** 调用 MakeSoundOnlyOnRelatedPeer 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.MakeSoundOnlyOnRelatedPeer(0, position, 0);
```

### AddDynamicallySpawnedMissionObjectInfo
`public void AddDynamicallySpawnedMissionObjectInfo(DynamicallyCreatedEntity entityInfo)`

**用途 / Purpose:** 将 dynamically spawned mission object info 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.AddDynamicallySpawnedMissionObjectInfo(entityInfo);
```

### GetMissileCollisionPoint
`public Vec3 GetMissileCollisionPoint(Vec3 missileStartingPosition, Vec3 missileDirection, float missileSpeed, in WeaponData weaponData)`

**用途 / Purpose:** 读取并返回当前对象中 missile collision point 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetMissileCollisionPoint(missileStartingPosition, missileDirection, 0, weaponData);
```

### RemoveMissileAsClient
`public void RemoveMissileAsClient(int missileIndex)`

**用途 / Purpose:** 从当前容器或状态中移除 missile as client。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.RemoveMissileAsClient(0);
```

### GetMissileVerticalAimCorrection
`public static float GetMissileVerticalAimCorrection(Vec3 vecToTarget, float missileStartingSpeed, ref WeaponStatsData weaponStatsData, float airFrictionConstant)`

**用途 / Purpose:** 读取并返回当前对象中 missile vertical aim correction 的结果。

```csharp
// 静态调用，不需要实例
Mission.GetMissileVerticalAimCorrection(vecToTarget, 0, weaponStatsData, 0);
```

### GetMissileRange
`public static float GetMissileRange(float missileStartingSpeed, float heightDifference)`

**用途 / Purpose:** 读取并返回当前对象中 missile range 的结果。

```csharp
// 静态调用，不需要实例
Mission.GetMissileRange(0, 0);
```

### PrepareMissileWeaponForDrop
`public void PrepareMissileWeaponForDrop(int missileIndex)`

**用途 / Purpose:** 为即将执行的missile weapon for drop操作完成前置准备工作。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.PrepareMissileWeaponForDrop(0);
```

### AddParticleSystemBurstByName
`public void AddParticleSystemBurstByName(string particleSystem, MatrixFrame frame, bool synchThroughNetwork)`

**用途 / Purpose:** 将 particle system burst by name 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.AddParticleSystemBurstByName("example", frame, false);
```

### GetClosestBoundaryPosition
`public Vec2 GetClosestBoundaryPosition(Vec2 position)`

**用途 / Purpose:** 读取并返回当前对象中 closest boundary position 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetClosestBoundaryPosition(position);
```

### GetFreeRuntimeMissionObjectId
`public int GetFreeRuntimeMissionObjectId()`

**用途 / Purpose:** 读取并返回当前对象中 free runtime mission object id 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetFreeRuntimeMissionObjectId();
```

### GetFreeSceneMissionObjectId
`public int GetFreeSceneMissionObjectId()`

**用途 / Purpose:** 读取并返回当前对象中 free scene mission object id 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetFreeSceneMissionObjectId();
```

### SetCameraFrame
`public void SetCameraFrame(ref MatrixFrame cameraFrame, float zoomFactor)`

**用途 / Purpose:** 为 camera frame 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.SetCameraFrame(cameraFrame, 0);
```

### SetCameraFrame
`public void SetCameraFrame(ref MatrixFrame cameraFrame, float zoomFactor, ref Vec3 attenuationPosition)`

**用途 / Purpose:** 为 camera frame 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.SetCameraFrame(cameraFrame, 0, attenuationPosition);
```

### GetCameraFrame
`public MatrixFrame GetCameraFrame()`

**用途 / Purpose:** 读取并返回当前对象中 camera frame 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetCameraFrame();
```

### ResetFirstThirdPersonView
`public void ResetFirstThirdPersonView()`

**用途 / Purpose:** 将 first third person view 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.ResetFirstThirdPersonView();
```

### SetCustomCameraLocalOffset
`public void SetCustomCameraLocalOffset(Vec3 newCameraOffset)`

**用途 / Purpose:** 为 custom camera local offset 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.SetCustomCameraLocalOffset(newCameraOffset);
```

### SetCustomCameraTargetLocalOffset
`public void SetCustomCameraTargetLocalOffset(Vec3 newTargetLocalOffset)`

**用途 / Purpose:** 为 custom camera target local offset 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.SetCustomCameraTargetLocalOffset(newTargetLocalOffset);
```

### SetCustomCameraLocalOffset2
`public void SetCustomCameraLocalOffset2(Vec3 newCameraOffset)`

**用途 / Purpose:** 为 custom camera local offset2 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.SetCustomCameraLocalOffset2(newCameraOffset);
```

### SetCustomCameraLocalRotationalOffset
`public void SetCustomCameraLocalRotationalOffset(Vec3 newCameraRotationalOffset)`

**用途 / Purpose:** 为 custom camera local rotational offset 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.SetCustomCameraLocalRotationalOffset(newCameraRotationalOffset);
```

### SetCustomCameraGlobalOffset
`public void SetCustomCameraGlobalOffset(Vec3 newCameraOffset)`

**用途 / Purpose:** 为 custom camera global offset 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.SetCustomCameraGlobalOffset(newCameraOffset);
```

### SetCustomCameraFovMultiplier
`public void SetCustomCameraFovMultiplier(float newFovMultiplier)`

**用途 / Purpose:** 为 custom camera fov multiplier 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.SetCustomCameraFovMultiplier(0);
```

### SetCustomCameraFixedDistance
`public void SetCustomCameraFixedDistance(float distance)`

**用途 / Purpose:** 为 custom camera fixed distance 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.SetCustomCameraFixedDistance(0);
```

### SetIgnoredEntityForCamera
`public void SetIgnoredEntityForCamera(GameEntity ignoredEntity)`

**用途 / Purpose:** 为 ignored entity for camera 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.SetIgnoredEntityForCamera(ignoredEntity);
```

### SetCustomCameraIgnoreCollision
`public void SetCustomCameraIgnoreCollision(bool ignoreCollision)`

**用途 / Purpose:** 为 custom camera ignore collision 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.SetCustomCameraIgnoreCollision(false);
```

### SetListenerAndAttenuationPosBlendFactor
`public void SetListenerAndAttenuationPosBlendFactor(float factor)`

**用途 / Purpose:** 为 listener and attenuation pos blend factor 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.SetListenerAndAttenuationPosBlendFactor(0);
```

### AddTimeSpeedRequest
`public void AddTimeSpeedRequest(TimeSpeedRequest request)`

**用途 / Purpose:** 将 time speed request 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.AddTimeSpeedRequest(request);
```

### RemoveTimeSpeedRequest
`public void RemoveTimeSpeedRequest(int timeSpeedRequestID)`

**用途 / Purpose:** 从当前容器或状态中移除 time speed request。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.RemoveTimeSpeedRequest(0);
```

### GetRequestedTimeSpeed
`public bool GetRequestedTimeSpeed(int timeSpeedRequestID, out float requestedTime)`

**用途 / Purpose:** 读取并返回当前对象中 requested time speed 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetRequestedTimeSpeed(0, requestedTime);
```

### ClearAgentActions
`public void ClearAgentActions()`

**用途 / Purpose:** 清空当前对象中的agent actions。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.ClearAgentActions();
```

### ClearMissiles
`public void ClearMissiles()`

**用途 / Purpose:** 清空当前对象中的missiles。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.ClearMissiles();
```

### ClearCorpses
`public void ClearCorpses(bool isMissionReset)`

**用途 / Purpose:** 清空当前对象中的corpses。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.ClearCorpses(false);
```

### IsAgentInProximityMap
`public bool IsAgentInProximityMap(Agent agent)`

**用途 / Purpose:** 判断当前对象是否处于 agent in proximity map 状态或条件。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.IsAgentInProximityMap(agent);
```

### OnMissionStateActivate
`public void OnMissionStateActivate()`

**用途 / Purpose:** 在 mission state activate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.OnMissionStateActivate();
```

### OnMissionStateDeactivate
`public void OnMissionStateDeactivate()`

**用途 / Purpose:** 在 mission state deactivate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.OnMissionStateDeactivate();
```

### OnMissionStateFinalize
`public void OnMissionStateFinalize(bool forceClearGPUResources)`

**用途 / Purpose:** 在 mission state finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.OnMissionStateFinalize(false);
```

### ClearUnreferencedResources
`public void ClearUnreferencedResources(bool forceClearGPUResources)`

**用途 / Purpose:** 清空当前对象中的unreferenced resources。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.ClearUnreferencedResources(false);
```

### GetMainAgentMaxCameraZoom
`public float GetMainAgentMaxCameraZoom()`

**用途 / Purpose:** 读取并返回当前对象中 main agent max camera zoom 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetMainAgentMaxCameraZoom();
```

### GetBestSlopeTowardsDirection
`public WorldPosition GetBestSlopeTowardsDirection(ref WorldPosition centerPosition, float halfSize, ref WorldPosition referencePosition)`

**用途 / Purpose:** 读取并返回当前对象中 best slope towards direction 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetBestSlopeTowardsDirection(centerPosition, 0, referencePosition);
```

### GetBestSlopeAngleHeightPosForDefending
`public WorldPosition GetBestSlopeAngleHeightPosForDefending(WorldPosition enemyPosition, WorldPosition defendingPosition, int sampleSize, float distanceRatioAllowedFromDefendedPos, float distanceSqrdAllowedFromBoundary, float cosinusOfBestSlope, float cosinusOfMaxAcceptedSlope, float minSlopeScore, float maxSlopeScore, float excessiveSlopePenalty, float nearConeCenterRatio, float nearConeCenterBonus, float heightDifferenceCeiling, float maxDisplacementPenalty)`

**用途 / Purpose:** 读取并返回当前对象中 best slope angle height pos for defending 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetBestSlopeAngleHeightPosForDefending(enemyPosition, defendingPosition, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
```

### GetAveragePositionOfAgents
`public Vec2 GetAveragePositionOfAgents(List<Agent> agents)`

**用途 / Purpose:** 读取并返回当前对象中 average position of agents 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetAveragePositionOfAgents(agents);
```

### SetRandomDecideTimeOfAgentsWithIndices
`public void SetRandomDecideTimeOfAgentsWithIndices(int agentIndices, float? minAIReactionTime = null, float? maxAIReactionTime = null)`

**用途 / Purpose:** 为 random decide time of agents with indices 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.SetRandomDecideTimeOfAgentsWithIndices(0, 0, 0);
```

### SetBowMissileSpeedModifier
`public void SetBowMissileSpeedModifier(float modifier)`

**用途 / Purpose:** 为 bow missile speed modifier 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.SetBowMissileSpeedModifier(0);
```

### SetCrossbowMissileSpeedModifier
`public void SetCrossbowMissileSpeedModifier(float modifier)`

**用途 / Purpose:** 为 crossbow missile speed modifier 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.SetCrossbowMissileSpeedModifier(0);
```

### SetThrowingMissileSpeedModifier
`public void SetThrowingMissileSpeedModifier(float modifier)`

**用途 / Purpose:** 为 throwing missile speed modifier 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.SetThrowingMissileSpeedModifier(0);
```

### SetMissileRangeModifier
`public void SetMissileRangeModifier(float modifier)`

**用途 / Purpose:** 为 missile range modifier 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.SetMissileRangeModifier(0);
```

### SetLastMovementKeyPressed
`public void SetLastMovementKeyPressed(Agent.MovementControlFlag lastMovementKeyPressed)`

**用途 / Purpose:** 为 last movement key pressed 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.SetLastMovementKeyPressed(lastMovementKeyPressed);
```

### GetWeightedPointOfEnemies
`public Vec2 GetWeightedPointOfEnemies(Agent agent, Vec2 basePoint)`

**用途 / Purpose:** 读取并返回当前对象中 weighted point of enemies 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetWeightedPointOfEnemies(agent, basePoint);
```

### GetPathBetweenPositions
`public bool GetPathBetweenPositions(ref NavigationData navData)`

**用途 / Purpose:** 读取并返回当前对象中 path between positions 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetPathBetweenPositions(navData);
```

### SetNavigationFaceCostWithIdAroundPosition
`public void SetNavigationFaceCostWithIdAroundPosition(int navigationFaceId, Vec3 position, float cost)`

**用途 / Purpose:** 为 navigation face cost with id around position 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.SetNavigationFaceCostWithIdAroundPosition(0, position, 0);
```

### GetStraightPathToTarget
`public WorldPosition GetStraightPathToTarget(Vec2 targetPosition, WorldPosition startingPosition, float samplingDistance = 1f, bool stopAtObstacle = true)`

**用途 / Purpose:** 读取并返回当前对象中 straight path to target 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetStraightPathToTarget(targetPosition, startingPosition, 0, false);
```

### SkipForwardMissionReplay
`public void SkipForwardMissionReplay(float startTime, float endTime)`

**用途 / Purpose:** 调用 SkipForwardMissionReplay 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.SkipForwardMissionReplay(0, 0);
```

### GetDebugAgent
`public int GetDebugAgent()`

**用途 / Purpose:** 读取并返回当前对象中 debug agent 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetDebugAgent();
```

### AddAiDebugText
`public void AddAiDebugText(string str)`

**用途 / Purpose:** 将 ai debug text 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.AddAiDebugText("example");
```

### SetDebugAgent
`public void SetDebugAgent(int index)`

**用途 / Purpose:** 为 debug agent 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.SetDebugAgent(0);
```

### GetFirstPersonFov
`public static float GetFirstPersonFov()`

**用途 / Purpose:** 读取并返回当前对象中 first person fov 的结果。

```csharp
// 静态调用，不需要实例
Mission.GetFirstPersonFov();
```

### GetWaterLevelAtPosition
`public float GetWaterLevelAtPosition(Vec2 position, bool useWaterRenderer)`

**用途 / Purpose:** 读取并返回当前对象中 water level at position 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetWaterLevelAtPosition(position, false);
```

### GetWaterLevelAtPositionMT
`public float GetWaterLevelAtPositionMT(Vec2 position, bool useWaterRenderer)`

**用途 / Purpose:** 读取并返回当前对象中 water level at position m t 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetWaterLevelAtPositionMT(position, false);
```

### CanPhysicsCollideBetweenTwoEntities
`public bool CanPhysicsCollideBetweenTwoEntities(UIntPtr entity0Ptr, UIntPtr entity1Ptr)`

**用途 / Purpose:** 检查当前对象是否满足 physics collide between two entities 的前置条件。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.CanPhysicsCollideBetweenTwoEntities(entity0Ptr, entity1Ptr);
```

### GetRemovedAgentRatioForSide
`public float GetRemovedAgentRatioForSide(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 removed agent ratio for side 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetRemovedAgentRatioForSide(side);
```

### GetAttackerWeaponsForFriendlyFirePreventing
`public ref readonly List<SiegeWeapon> GetAttackerWeaponsForFriendlyFirePreventing()`

**用途 / Purpose:** 读取并返回当前对象中 attacker weapons for friendly fire preventing 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetAttackerWeaponsForFriendlyFirePreventing();
```

### OnDeploymentPlanMade
`public void OnDeploymentPlanMade(Team team, bool isFirstPlan)`

**用途 / Purpose:** 在 deployment plan made 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.OnDeploymentPlanMade(team, false);
```

### GetAlternatePositionForNavmeshlessOrOutOfBoundsPosition
`public WorldPosition GetAlternatePositionForNavmeshlessOrOutOfBoundsPosition(Vec2 directionTowards, WorldPosition originalPosition, ref float positionPenalty)`

**用途 / Purpose:** 读取并返回当前对象中 alternate position for navmeshless or out of bounds position 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetAlternatePositionForNavmeshlessOrOutOfBoundsPosition(directionTowards, originalPosition, positionPenalty);
```

### GetNextDynamicNavMeshIdStart
`public int GetNextDynamicNavMeshIdStart()`

**用途 / Purpose:** 读取并返回当前对象中 next dynamic nav mesh id start 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetNextDynamicNavMeshIdStart();
```

### GetAgentTroopClass
`public FormationClass GetAgentTroopClass(BattleSideEnum battleSide, BasicCharacterObject agentCharacter)`

**用途 / Purpose:** 读取并返回当前对象中 agent troop class 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetAgentTroopClass(battleSide, agentCharacter);
```

### GetClosestFleePositionForAgent
`public WorldPosition GetClosestFleePositionForAgent(Agent agent)`

**用途 / Purpose:** 读取并返回当前对象中 closest flee position for agent 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetClosestFleePositionForAgent(agent);
```

### GetClosestFleePositionForFormation
`public WorldPosition GetClosestFleePositionForFormation(Formation formation)`

**用途 / Purpose:** 读取并返回当前对象中 closest flee position for formation 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetClosestFleePositionForFormation(formation);
```

### GetFleePositionsForSide
`public MBReadOnlyList<FleePosition> GetFleePositionsForSide(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 flee positions for side 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetFleePositionsForSide(side);
```

### AddToWeaponListForFriendlyFirePreventing
`public void AddToWeaponListForFriendlyFirePreventing(SiegeWeapon weapon)`

**用途 / Purpose:** 将 to weapon list for friendly fire preventing 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.AddToWeaponListForFriendlyFirePreventing(weapon);
```

### SetCloseProximityWaveSoundsEnabled
`public void SetCloseProximityWaveSoundsEnabled(bool value)`

**用途 / Purpose:** 为 close proximity wave sounds enabled 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.SetCloseProximityWaveSoundsEnabled(false);
```

### ForceDisableOcclusion
`public void ForceDisableOcclusion(bool value)`

**用途 / Purpose:** 调用 ForceDisableOcclusion 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.ForceDisableOcclusion(false);
```

### AddFleePosition
`public void AddFleePosition(FleePosition fleePosition)`

**用途 / Purpose:** 将 flee position 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.AddFleePosition(fleePosition);
```

### RetreatMission
`public void RetreatMission()`

**用途 / Purpose:** 调用 RetreatMission 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.RetreatMission();
```

### SurrenderMission
`public void SurrenderMission()`

**用途 / Purpose:** 调用 SurrenderMission 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.SurrenderMission();
```

### SpawnAttachedWeaponOnCorpse
`public SpawnedItemEntity SpawnAttachedWeaponOnCorpse(Agent agent, int attachedWeaponIndex, int forcedSpawnIndex)`

**用途 / Purpose:** 调用 SpawnAttachedWeaponOnCorpse 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.SpawnAttachedWeaponOnCorpse(agent, 0, 0);
```

### AddMountWithoutRider
`public void AddMountWithoutRider(Agent mount)`

**用途 / Purpose:** 将 mount without rider 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.AddMountWithoutRider(mount);
```

### RemoveMountWithoutRider
`public void RemoveMountWithoutRider(Agent mount)`

**用途 / Purpose:** 从当前容器或状态中移除 mount without rider。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.RemoveMountWithoutRider(mount);
```

### UpdateMountReservationsAfterRiderMounts
`public void UpdateMountReservationsAfterRiderMounts(Agent rider, Agent mount)`

**用途 / Purpose:** 重新计算并更新 mount reservations after rider mounts 的最新表示。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.UpdateMountReservationsAfterRiderMounts(rider, mount);
```

### OnObjectDisabled
`public void OnObjectDisabled(DestructableComponent destructionComponent)`

**用途 / Purpose:** 在 object disabled 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.OnObjectDisabled(destructionComponent);
```

### TryGetMissileVelocityFromMissileIndex
`public bool TryGetMissileVelocityFromMissileIndex(int missileIndex, out Vec3 velocity)`

**用途 / Purpose:** 尝试获取 get missile velocity from missile index 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.TryGetMissileVelocityFromMissileIndex(0, velocity);
```

### SpawnWeaponAsDropFromMissile
`public MissionObjectId SpawnWeaponAsDropFromMissile(int missileIndex, MissionObject attachedMissionObject, in MatrixFrame attachLocalFrame, WeaponSpawnFlags spawnFlags, in Vec3 velocity, in Vec3 angularVelocity, int forcedSpawnIndex)`

**用途 / Purpose:** 调用 SpawnWeaponAsDropFromMissile 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.SpawnWeaponAsDropFromMissile(0, attachedMissionObject, attachLocalFrame, spawnFlags, velocity, angularVelocity, 0);
```

### SpawnWeaponAsDropFromAgentAux
`public void SpawnWeaponAsDropFromAgentAux(Agent agent, EquipmentIndex equipmentIndex, ref Vec3 globalVelocity, ref Vec3 globalAngularVelocity, WeaponSpawnFlags spawnFlags, int forcedSpawnIndex)`

**用途 / Purpose:** 调用 SpawnWeaponAsDropFromAgentAux 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.SpawnWeaponAsDropFromAgentAux(agent, equipmentIndex, globalVelocity, globalAngularVelocity, spawnFlags, 0);
```

### SpawnAttachedWeaponOnSpawnedWeapon
`public void SpawnAttachedWeaponOnSpawnedWeapon(SpawnedItemEntity spawnedWeapon, int attachmentIndex, int forcedSpawnIndex)`

**用途 / Purpose:** 调用 SpawnAttachedWeaponOnSpawnedWeapon 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.SpawnAttachedWeaponOnSpawnedWeapon(spawnedWeapon, 0, 0);
```

### SpawnWeaponWithNewEntity
`public GameEntity SpawnWeaponWithNewEntity(ref MissionWeapon weapon, WeaponSpawnFlags spawnFlags, MatrixFrame frame)`

**用途 / Purpose:** 调用 SpawnWeaponWithNewEntity 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.SpawnWeaponWithNewEntity(weapon, spawnFlags, frame);
```

### SpawnWeaponWithNewEntityAux
`public GameEntity SpawnWeaponWithNewEntityAux(MissionWeapon weapon, WeaponSpawnFlags spawnFlags, MatrixFrame frame, int forcedSpawnIndex, MissionObject attachedMissionObject, bool hasLifeTime, bool spawnedOnACorpse = false)`

**用途 / Purpose:** 调用 SpawnWeaponWithNewEntityAux 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.SpawnWeaponWithNewEntityAux(weapon, spawnFlags, frame, 0, attachedMissionObject, false, false);
```

### AttachWeaponWithNewEntityToSpawnedWeapon
`public void AttachWeaponWithNewEntityToSpawnedWeapon(MissionWeapon weapon, SpawnedItemEntity spawnedItem, MatrixFrame attachLocalFrame)`

**用途 / Purpose:** 调用 AttachWeaponWithNewEntityToSpawnedWeapon 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.AttachWeaponWithNewEntityToSpawnedWeapon(weapon, spawnedItem, attachLocalFrame);
```

### OnEquipItemsFromSpawnEquipmentBegin
`public void OnEquipItemsFromSpawnEquipmentBegin(Agent agent, Agent.CreationType creationType)`

**用途 / Purpose:** 在 equip items from spawn equipment begin 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.OnEquipItemsFromSpawnEquipmentBegin(agent, creationType);
```

### OnEquipItemsFromSpawnEquipment
`public void OnEquipItemsFromSpawnEquipment(Agent agent, Agent.CreationType creationType)`

**用途 / Purpose:** 在 equip items from spawn equipment 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.OnEquipItemsFromSpawnEquipment(agent, creationType);
```

### GetCurrentVolumeGeneratorVersion
`public static int GetCurrentVolumeGeneratorVersion()`

**用途 / Purpose:** 读取并返回当前对象中 current volume generator version 的结果。

```csharp
// 静态调用，不需要实例
Mission.GetCurrentVolumeGeneratorVersion();
```

### MakeEnemiesFleeCheat
`public static string MakeEnemiesFleeCheat(List<string> strings)`

**用途 / Purpose:** 调用 MakeEnemiesFleeCheat 对应的操作。

```csharp
// 静态调用，不需要实例
Mission.MakeEnemiesFleeCheat(strings);
```

### MakeTeamFleeCheat
`public static string MakeTeamFleeCheat(List<string> strings)`

**用途 / Purpose:** 调用 MakeTeamFleeCheat 对应的操作。

```csharp
// 静态调用，不需要实例
Mission.MakeTeamFleeCheat(strings);
```

### RecalculateBody
`public void RecalculateBody(ref WeaponData weaponData, ItemComponent itemComponent, WeaponDesign craftedWeaponData, ref WeaponSpawnFlags spawnFlags)`

**用途 / Purpose:** 重新计算body以反映最新状态。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.RecalculateBody(weaponData, itemComponent, craftedWeaponData, spawnFlags);
```

### SetFacialAnimToAgent
`public static string SetFacialAnimToAgent(List<string> strings)`

**用途 / Purpose:** 为 facial anim to agent 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Mission.SetFacialAnimToAgent(strings);
```

### TickAgentsAndTeamsImp
`public void TickAgentsAndTeamsImp(float dt, bool tickPaused)`

**用途 / Purpose:** 在每一帧或每个更新周期内推进agents and teams imp的状态。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.TickAgentsAndTeamsImp(0, false);
```

### EnableSpeedAdjustmentCommand
`public static string EnableSpeedAdjustmentCommand(List<string> strings)`

**用途 / Purpose:** 调用 EnableSpeedAdjustmentCommand 对应的操作。

```csharp
// 静态调用，不需要实例
Mission.EnableSpeedAdjustmentCommand(strings);
```

### OnTick
`public void OnTick(float dt, float realDt, bool updateCamera, bool doAsyncAITick)`

**用途 / Purpose:** 在 tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.OnTick(0, 0, false, false);
```

### AddTickAction
`public void AddTickAction(MissionTickAction action, Agent agent, int param1, int param2)`

**用途 / Purpose:** 将 tick action 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.AddTickAction(action, agent, 0, 0);
```

### AddTickActionMT
`public void AddTickActionMT(MissionTickAction action, Agent agent, int param1, int param2)`

**用途 / Purpose:** 将 tick action m t 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.AddTickActionMT(action, agent, 0, 0);
```

### RemoveSpawnedItemsAndMissiles
`public void RemoveSpawnedItemsAndMissiles()`

**用途 / Purpose:** 从当前容器或状态中移除 spawned items and missiles。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.RemoveSpawnedItemsAndMissiles();
```

### AfterStart
`public void AfterStart()`

**用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.AfterStart();
```

### OnEndMissionRequest
`public void OnEndMissionRequest()`

**用途 / Purpose:** 在 end mission request 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.OnEndMissionRequest();
```

### GetMissionEndTimeInSeconds
`public float GetMissionEndTimeInSeconds()`

**用途 / Purpose:** 读取并返回当前对象中 mission end time in seconds 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetMissionEndTimeInSeconds();
```

### GetMissionEndTimerValue
`public float GetMissionEndTimerValue()`

**用途 / Purpose:** 读取并返回当前对象中 mission end timer value 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetMissionEndTimerValue();
```

### GetMemberCountOfSide
`public int GetMemberCountOfSide(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 member count of side 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetMemberCountOfSide(side);
```

### GetInitialSpawnPath
`public Path GetInitialSpawnPath()`

**用途 / Purpose:** 读取并返回当前对象中 initial spawn path 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetInitialSpawnPath();
```

### GetInitialSpawnPathData
`public SpawnPathData GetInitialSpawnPathData(BattleSideEnum battleSide)`

**用途 / Purpose:** 读取并返回当前对象中 initial spawn path data 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetInitialSpawnPathData(battleSide);
```

### GetReinforcementPathsDataOfSide
`public MBReadOnlyList<SpawnPathData> GetReinforcementPathsDataOfSide(BattleSideEnum battleSide)`

**用途 / Purpose:** 读取并返回当前对象中 reinforcement paths data of side 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetReinforcementPathsDataOfSide(battleSide);
```

### GetTroopSpawnFrameWithIndex
`public void GetTroopSpawnFrameWithIndex(AgentBuildData buildData, int troopSpawnIndex, int troopSpawnCount, out Vec3 troopSpawnPosition, out Vec2 troopSpawnDirection)`

**用途 / Purpose:** 读取并返回当前对象中 troop spawn frame with index 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.GetTroopSpawnFrameWithIndex(buildData, 0, 0, troopSpawnPosition, troopSpawnDirection);
```

### GetFormationSpawnFrame
`public void GetFormationSpawnFrame(Team team, FormationClass formationClass, bool isReinforcement, out WorldPosition spawnPosition, out Vec2 spawnDirection, bool useDefaultClassIfNotFound = true)`

**用途 / Purpose:** 读取并返回当前对象中 formation spawn frame 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.GetFormationSpawnFrame(team, formationClass, false, spawnPosition, spawnDirection, false);
```

### GetSpawnPathFrame
`public WorldFrame GetSpawnPathFrame(BattleSideEnum battleSide, float pathOffset = 0f, float targetOffset = 0f)`

**用途 / Purpose:** 读取并返回当前对象中 spawn path frame 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetSpawnPathFrame(battleSide, 0, 0);
```

### SetBattleAgentCount
`public void SetBattleAgentCount(int agentCount)`

**用途 / Purpose:** 为 battle agent count 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.SetBattleAgentCount(0);
```

### GetFormationSpawnPosition
`public Vec2 GetFormationSpawnPosition(Team team, FormationClass formationClass)`

**用途 / Purpose:** 读取并返回当前对象中 formation spawn position 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetFormationSpawnPosition(team, formationClass);
```

### GetFormationSpawnClass
`public FormationClass GetFormationSpawnClass(Team team, FormationClass formationClass, bool isReinforcement = false)`

**用途 / Purpose:** 读取并返回当前对象中 formation spawn class 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetFormationSpawnClass(team, formationClass, false);
```

### SpawnAgent
`public Agent SpawnAgent(AgentBuildData agentBuildData, bool spawnFromAgentVisuals = false)`

**用途 / Purpose:** 调用 SpawnAgent 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.SpawnAgent(agentBuildData, false);
```

### SetInitialAgentCountForSide
`public void SetInitialAgentCountForSide(BattleSideEnum side, int agentCount)`

**用途 / Purpose:** 为 initial agent count for side 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.SetInitialAgentCountForSide(side, 0);
```

### SetFormationPositioningFromDeploymentPlan
`public void SetFormationPositioningFromDeploymentPlan(Formation formation)`

**用途 / Purpose:** 为 formation positioning from deployment plan 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.SetFormationPositioningFromDeploymentPlan(formation);
```

### SpawnMonster
`public Agent SpawnMonster(ItemRosterElement rosterElement, ItemRosterElement harnessRosterElement, in Vec3 initialPosition, in Vec2 initialDirection, int forcedAgentIndex = -1)`

**用途 / Purpose:** 调用 SpawnMonster 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.SpawnMonster(rosterElement, harnessRosterElement, initialPosition, initialDirection, 0);
```

### SpawnMonster
`public Agent SpawnMonster(EquipmentElement equipmentElement, EquipmentElement harnessRosterElement, in Vec3 initialPosition, in Vec2 initialDirection, int forcedAgentIndex = -1)`

**用途 / Purpose:** 调用 SpawnMonster 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.SpawnMonster(equipmentElement, harnessRosterElement, initialPosition, initialDirection, 0);
```

### SpawnTroop
`public Agent SpawnTroop(IAgentOriginBase troopOrigin, bool isPlayerSide, bool hasFormation, bool spawnWithHorse, bool isReinforcement, int formationTroopCount, int formationTroopIndex, bool isAlarmed, bool wieldInitialWeapons, Vec3? initialPosition, Vec2? initialDirection, string specialActionSetSuffix = null, ItemObject bannerItem = null, FormationClass formationIndex = FormationClass.NumberOfAllFormations, bool useTroopClassForSpawn = false)`

**用途 / Purpose:** 调用 SpawnTroop 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.SpawnTroop(troopOrigin, false, false, false, false, 0, 0, false, false, initialPosition, initialDirection, "example", null, formationClass.NumberOfAllFormations, false);
```

### ReplaceBotWithPlayer
`public Agent ReplaceBotWithPlayer(Agent botAgent, MissionPeer missionPeer)`

**用途 / Purpose:** 调用 ReplaceBotWithPlayer 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.ReplaceBotWithPlayer(botAgent, missionPeer);
```

### OnAgentInteraction
`public void OnAgentInteraction(Agent requesterAgent, Agent targetAgent, sbyte agentBoneIndex)`

**用途 / Purpose:** 在 agent interaction 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.OnAgentInteraction(requesterAgent, targetAgent, 0);
```

### EndMission
`public void EndMission()`

**用途 / Purpose:** 调用 EndMission 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.EndMission();
```

### AddMissionBehavior
`public void AddMissionBehavior(MissionBehavior missionBehavior)`

**用途 / Purpose:** 将 mission behavior 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.AddMissionBehavior(missionBehavior);
```

### RemoveMissionBehavior
`public void RemoveMissionBehavior(MissionBehavior missionBehavior)`

**用途 / Purpose:** 从当前容器或状态中移除 mission behavior。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.RemoveMissionBehavior(missionBehavior);
```

### JoinEnemyTeam
`public void JoinEnemyTeam()`

**用途 / Purpose:** 把若干enemy team连接成一个整体。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.JoinEnemyTeam();
```

### OnEndMissionResult
`public void OnEndMissionResult()`

**用途 / Purpose:** 在 end mission result 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.OnEndMissionResult();
```

### IsAgentInteractionAllowed
`public bool IsAgentInteractionAllowed()`

**用途 / Purpose:** 判断当前对象是否处于 agent interaction allowed 状态或条件。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.IsAgentInteractionAllowed();
```

### IsOrderGesturesEnabled
`public bool IsOrderGesturesEnabled()`

**用途 / Purpose:** 判断当前对象是否处于 order gestures enabled 状态或条件。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.IsOrderGesturesEnabled();
```

### GetExtraEquipmentElementsForCharacter
`public List<EquipmentElement> GetExtraEquipmentElementsForCharacter(BasicCharacterObject character, bool getAllEquipments = false)`

**用途 / Purpose:** 读取并返回当前对象中 extra equipment elements for character 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetExtraEquipmentElementsForCharacter(character, false);
```

### IsPlayerCloseToAnEnemy
`public bool IsPlayerCloseToAnEnemy(float distance = 5f)`

**用途 / Purpose:** 判断当前对象是否处于 player close to an enemy 状态或条件。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.IsPlayerCloseToAnEnemy(0);
```

### GetRandomPositionAroundPoint
`public Vec3 GetRandomPositionAroundPoint(Vec3 center, float minDistance, float maxDistance, bool nearFirst = false)`

**用途 / Purpose:** 读取并返回当前对象中 random position around point 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetRandomPositionAroundPoint(center, 0, 0, false);
```

### FindBestDefendingPosition
`public WorldPosition FindBestDefendingPosition(WorldPosition enemyPosition, WorldPosition defendedPosition)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的best defending position。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.FindBestDefendingPosition(enemyPosition, defendedPosition);
```

### FindPositionWithBiggestSlopeTowardsDirectionInSquare
`public WorldPosition FindPositionWithBiggestSlopeTowardsDirectionInSquare(ref WorldPosition center, float halfSize, ref WorldPosition referencePosition)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的position with biggest slope towards direction in square。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.FindPositionWithBiggestSlopeTowardsDirectionInSquare(center, 0, referencePosition);
```

### AddCustomMissile
`public Missile AddCustomMissile(Agent shooterAgent, MissionWeapon missileWeapon, Vec3 position, Vec3 direction, Mat3 orientation, float baseSpeed, float speed, bool addRigidBody, MissionObject missionObjectToIgnore, int forcedMissileIndex = -1)`

**用途 / Purpose:** 将 custom missile 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.AddCustomMissile(shooterAgent, missileWeapon, position, direction, orientation, 0, 0, false, missionObjectToIgnore, 0);
```

### OnAgentMount
`public void OnAgentMount(Agent agent)`

**用途 / Purpose:** 在 agent mount 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.OnAgentMount(agent);
```

### OnAgentDismount
`public void OnAgentDismount(Agent agent)`

**用途 / Purpose:** 在 agent dismount 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.OnAgentDismount(agent);
```

### OnObjectUsed
`public void OnObjectUsed(Agent userAgent, UsableMissionObject usableGameObject)`

**用途 / Purpose:** 在 object used 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.OnObjectUsed(userAgent, usableGameObject);
```

### OnObjectStoppedBeingUsed
`public void OnObjectStoppedBeingUsed(Agent userAgent, UsableMissionObject usableGameObject)`

**用途 / Purpose:** 在 object stopped being used 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.OnObjectStoppedBeingUsed(userAgent, usableGameObject);
```

### InitializeStartingBehaviors
`public void InitializeStartingBehaviors(MissionLogic logicBehaviors, MissionBehavior otherBehaviors, MissionNetwork networkBehaviors)`

**用途 / Purpose:** 为 starting behaviors 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.InitializeStartingBehaviors(logicBehaviors, otherBehaviors, networkBehaviors);
```

### GetClosestEnemyAgent
`public Agent GetClosestEnemyAgent(Team team, Vec3 position, float radius)`

**用途 / Purpose:** 读取并返回当前对象中 closest enemy agent 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetClosestEnemyAgent(team, position, 0);
```

### GetClosestAllyAgent
`public Agent GetClosestAllyAgent(Team team, Vec3 position, float radius)`

**用途 / Purpose:** 读取并返回当前对象中 closest ally agent 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetClosestAllyAgent(team, position, 0);
```

### GetNearbyEnemyAgentCount
`public int GetNearbyEnemyAgentCount(Team team, Vec2 position, float radius)`

**用途 / Purpose:** 读取并返回当前对象中 nearby enemy agent count 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetNearbyEnemyAgentCount(team, position, 0);
```

### HasAnyAgentsOfSideInRange
`public bool HasAnyAgentsOfSideInRange(Vec3 origin, float radius, BattleSideEnum side)`

**用途 / Purpose:** 判断当前对象是否已经持有 any agents of side in range。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.HasAnyAgentsOfSideInRange(origin, 0, side);
```

### AddSoundAlarmFactorToAgents
`public void AddSoundAlarmFactorToAgents(Agent alarmCreatorAgent, in Vec3 soundPosition, float soundLevelSquareRoot)`

**用途 / Purpose:** 将 sound alarm factor to agents 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.AddSoundAlarmFactorToAgents(alarmCreatorAgent, soundPosition, 0);
```

### OnMissionObjectRemoved
`public bool OnMissionObjectRemoved(MissionObject missionObject, int removeReason)`

**用途 / Purpose:** 在 mission object removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.OnMissionObjectRemoved(missionObject, 0);
```

### AgentLookingAtAgent
`public bool AgentLookingAtAgent(Agent agent1, Agent agent2)`

**用途 / Purpose:** 调用 AgentLookingAtAgent 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.AgentLookingAtAgent(agent1, agent2);
```

### FindAgentWithIndex
`public Agent FindAgentWithIndex(int agentId)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的agent with index。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.FindAgentWithIndex(0);
```

### GetUnderAttackTypeOfAgents
`public static Agent.UnderAttackType GetUnderAttackTypeOfAgents(IEnumerable<Agent> agents, float timeLimit = 3f)`

**用途 / Purpose:** 读取并返回当前对象中 under attack type of agents 的结果。

```csharp
// 静态调用，不需要实例
Mission.GetUnderAttackTypeOfAgents(agents, 0);
```

### GetAgentTeam
`public static Team GetAgentTeam(IAgentOriginBase troopOrigin, bool isPlayerSide)`

**用途 / Purpose:** 读取并返回当前对象中 agent team 的结果。

```csharp
// 静态调用，不需要实例
Mission.GetAgentTeam(troopOrigin, false);
```

### GetTeam
`public static Team GetTeam(TeamSideEnum teamSide)`

**用途 / Purpose:** 读取并返回当前对象中 team 的结果。

```csharp
// 静态调用，不需要实例
Mission.GetTeam(teamSide);
```

### GetTeamsOfSide
`public static IEnumerable<Team> GetTeamsOfSide(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 teams of side 的结果。

```csharp
// 静态调用，不需要实例
Mission.GetTeamsOfSide(side);
```

### ComputeSpawnPathDeploymentOffset
`public static float ComputeSpawnPathDeploymentOffset(int troopCount, Path path)`

**用途 / Purpose:** 调用 ComputeSpawnPathDeploymentOffset 对应的操作。

```csharp
// 静态调用，不需要实例
Mission.ComputeSpawnPathDeploymentOffset(0, path);
```

### OnRenderingStarted
`public void OnRenderingStarted()`

**用途 / Purpose:** 在 rendering started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.OnRenderingStarted();
```

### GetMovementTypeOfAgents
`public Agent.MovementBehaviorType GetMovementTypeOfAgents(IEnumerable<Agent> agents)`

**用途 / Purpose:** 读取并返回当前对象中 movement type of agents 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetMovementTypeOfAgents(agents);
```

### ShowInMissionLoadingScreen
`public void ShowInMissionLoadingScreen(int durationInSecond, Action onLoadingEndedAction)`

**用途 / Purpose:** 显示in mission loading screen对应的界面或元素。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.ShowInMissionLoadingScreen(0, onLoadingEndedAction);
```

### CanAgentRout
`public bool CanAgentRout(Agent agent)`

**用途 / Purpose:** 检查当前对象是否满足 agent rout 的前置条件。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.CanAgentRout(agent);
```

### HandleMissileCollisionReaction
`public void HandleMissileCollisionReaction(int missileIndex, MissileCollisionReaction collisionReaction, MatrixFrame attachLocalFrame, bool isAttachedFrameLocal, Agent attackerAgent, Agent attachedAgent, bool attachedToShield, sbyte attachedBoneIndex, MissionObject attachedMissionObject, Vec3 bounceBackVelocity, Vec3 bounceBackAngularVelocity, int forcedSpawnIndex)`

**用途 / Purpose:** 响应 missile collision reaction 事件，执行对应的处理逻辑。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.HandleMissileCollisionReaction(0, collisionReaction, attachLocalFrame, false, attackerAgent, attachedAgent, false, 0, attachedMissionObject, bounceBackVelocity, bounceBackAngularVelocity, 0);
```

### KillAgentsOnEntity
`public void KillAgentsOnEntity(GameEntity entity, Agent destroyerAgent, bool burnAgents)`

**用途 / Purpose:** 调用 KillAgentsOnEntity 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.KillAgentsOnEntity(entity, destroyerAgent, false);
```

### KillAgentCheat
`public void KillAgentCheat(Agent agent)`

**用途 / Purpose:** 调用 KillAgentCheat 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.KillAgentCheat(agent);
```

### KillCheats
`public bool KillCheats(bool killAll, bool killEnemy, bool killHorse, bool killYourself)`

**用途 / Purpose:** 调用 KillCheats 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.KillCheats(false, false, false, false);
```

### CanTakeControlOfAgent
`public bool CanTakeControlOfAgent(Agent agentToTakeControlOf)`

**用途 / Purpose:** 检查当前对象是否满足 take control of agent 的前置条件。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.CanTakeControlOfAgent(agentToTakeControlOf);
```

### SetPlayerCanTakeControlOfAnotherAgentWhenDead
`public void SetPlayerCanTakeControlOfAnotherAgentWhenDead()`

**用途 / Purpose:** 为 player can take control of another agent when dead 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.SetPlayerCanTakeControlOfAnotherAgentWhenDead();
```

### TakeControlOfAgent
`public void TakeControlOfAgent(Agent agentToTakeControlOf)`

**用途 / Purpose:** 调用 TakeControlOfAgent 对应的操作。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.TakeControlOfAgent(agentToTakeControlOf);
```

### GetDamageMultiplierOfCombatDifficulty
`public float GetDamageMultiplierOfCombatDifficulty(Agent victimAgent, Agent attackerAgent = null)`

**用途 / Purpose:** 读取并返回当前对象中 damage multiplier of combat difficulty 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetDamageMultiplierOfCombatDifficulty(victimAgent, null);
```

### GetShootDifficulty
`public float GetShootDifficulty(Agent affectedAgent, Agent affectorAgent, bool isHeadShot)`

**用途 / Purpose:** 读取并返回当前对象中 shoot difficulty 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetShootDifficulty(affectedAgent, affectorAgent, false);
```

### AddCombatLogSafe
`public void AddCombatLogSafe(Agent attackerAgent, Agent victimAgent, CombatLogData combatLog)`

**用途 / Purpose:** 将 combat log safe 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.AddCombatLogSafe(attackerAgent, victimAgent, combatLog);
```

### CreateMissionObjectFromPrefab
`public MissionObject CreateMissionObjectFromPrefab(string prefab, MatrixFrame frame, bool hasCustomRestOffset, float restOffset, Action<GameEntity> actionAppliedBeforeScriptInitialization)`

**用途 / Purpose:** 构建一个新的 mission object from prefab 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.CreateMissionObjectFromPrefab("example", frame, false, 0, actionAppliedBeforeScriptInitialization);
```

### GetNearbyAllyAgentsCount
`public int GetNearbyAllyAgentsCount(Vec2 center, float radius, Team team)`

**用途 / Purpose:** 读取并返回当前对象中 nearby ally agents count 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetNearbyAllyAgentsCount(center, 0, team);
```

### GetNearbyAllyAgents
`public MBList<Agent> GetNearbyAllyAgents(Vec2 center, float radius, Team team, MBList<Agent> agents)`

**用途 / Purpose:** 读取并返回当前对象中 nearby ally agents 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetNearbyAllyAgents(center, 0, team, agents);
```

### GetNearbyEnemyAgents
`public MBList<Agent> GetNearbyEnemyAgents(Vec2 center, float radius, Team team, MBList<Agent> agents)`

**用途 / Purpose:** 读取并返回当前对象中 nearby enemy agents 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetNearbyEnemyAgents(center, 0, team, agents);
```

### GetNearbyAgents
`public MBList<Agent> GetNearbyAgents(Vec2 center, float radius, MBList<Agent> agents)`

**用途 / Purpose:** 读取并返回当前对象中 nearby agents 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetNearbyAgents(center, 0, agents);
```

### IsFormationUnitPositionAvailableMT
`public bool IsFormationUnitPositionAvailableMT(ref WorldPosition formationPosition, ref WorldPosition unitPosition, ref WorldPosition nearestAvailableUnitPosition, float manhattanDistance, Team team)`

**用途 / Purpose:** 判断当前对象是否处于 formation unit position available m t 状态或条件。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.IsFormationUnitPositionAvailableMT(formationPosition, unitPosition, nearestAvailableUnitPosition, 0, team);
```

### IsOrderPositionAvailable
`public bool IsOrderPositionAvailable(in WorldPosition orderPosition, Team team)`

**用途 / Purpose:** 判断当前对象是否处于 order position available 状态或条件。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.IsOrderPositionAvailable(orderPosition, team);
```

### IsFormationUnitPositionAvailable
`public bool IsFormationUnitPositionAvailable(ref WorldPosition unitPosition, Team team)`

**用途 / Purpose:** 判断当前对象是否处于 formation unit position available 状态或条件。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.IsFormationUnitPositionAvailable(unitPosition, team);
```

### HasSceneMapPatch
`public bool HasSceneMapPatch()`

**用途 / Purpose:** 判断当前对象是否已经持有 scene map patch。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.HasSceneMapPatch();
```

### GetPatchSceneEncounterPosition
`public bool GetPatchSceneEncounterPosition(out Vec3 position)`

**用途 / Purpose:** 读取并返回当前对象中 patch scene encounter position 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetPatchSceneEncounterPosition(position);
```

### GetPatchSceneEncounterDirection
`public bool GetPatchSceneEncounterDirection(out Vec2 direction)`

**用途 / Purpose:** 读取并返回当前对象中 patch scene encounter direction 的结果。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.GetPatchSceneEncounterDirection(direction);
```

### AddTimerToDynamicEntity
`public void AddTimerToDynamicEntity(GameEntity gameEntity, float timeToKill = 10f)`

**用途 / Purpose:** 将 timer to dynamic entity 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.AddTimerToDynamicEntity(gameEntity, 0);
```

### AddListener
`public void AddListener(IMissionListener listener)`

**用途 / Purpose:** 将 listener 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.AddListener(listener);
```

### RemoveListener
`public void RemoveListener(IMissionListener listener)`

**用途 / Purpose:** 从当前容器或状态中移除 listener。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.RemoveListener(listener);
```

### OnAgentFleeing
`public void OnAgentFleeing(Agent agent)`

**用途 / Purpose:** 在 agent fleeing 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.OnAgentFleeing(agent);
```

### OnAgentPanicked
`public void OnAgentPanicked(Agent agent)`

**用途 / Purpose:** 在 agent panicked 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.OnAgentPanicked(agent);
```

### OnTeamDeployed
`public void OnTeamDeployed(Team team)`

**用途 / Purpose:** 在 team deployed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.OnTeamDeployed(team);
```

### OnBattleSideDeployed
`public void OnBattleSideDeployed(BattleSideEnum side)`

**用途 / Purpose:** 在 battle side deployed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.OnBattleSideDeployed(side);
```

### OnDeploymentFinished
`public void OnDeploymentFinished()`

**用途 / Purpose:** 在 deployment finished 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.OnDeploymentFinished();
```

### OnAfterDeploymentFinished
`public void OnAfterDeploymentFinished()`

**用途 / Purpose:** 在 after deployment finished 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.OnAfterDeploymentFinished();
```

### OnFormationCaptainChanged
`public void OnFormationCaptainChanged(Formation formation)`

**用途 / Purpose:** 在 formation captain changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.OnFormationCaptainChanged(formation);
```

### SetFastForwardingFromUI
`public void SetFastForwardingFromUI(bool fastForwarding)`

**用途 / Purpose:** 为 fast forwarding from u i 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.SetFastForwardingFromUI(false);
```

### CheckIfBattleInRetreat
`public bool CheckIfBattleInRetreat()`

**用途 / Purpose:** 检查if battle in retreat在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
var result = mission.CheckIfBattleInRetreat();
```

### AddSpawnedItemEntityCreatedAtRuntime
`public void AddSpawnedItemEntityCreatedAtRuntime(SpawnedItemEntity spawnedItemEntity)`

**用途 / Purpose:** 将 spawned item entity created at runtime 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.AddSpawnedItemEntityCreatedAtRuntime(spawnedItemEntity);
```

### TriggerOnItemPickUpEvent
`public void TriggerOnItemPickUpEvent(Agent agent, SpawnedItemEntity spawnedItemEntity)`

**用途 / Purpose:** 触发on item pick up event对应的逻辑或事件。

```csharp
// 先通过子系统 API 拿到 Mission 实例
Mission mission = ...;
mission.TriggerOnItemPickUpEvent(agent, spawnedItemEntity);
```

### KillNAllies
`public static string KillNAllies(List<string> strings)`

**用途 / Purpose:** 调用 KillNAllies 对应的操作。

```csharp
// 静态调用，不需要实例
Mission.KillNAllies(strings);
```

### KillAllAllies
`public static string KillAllAllies(List<string> strings)`

**用途 / Purpose:** 调用 KillAllAllies 对应的操作。

```csharp
// 静态调用，不需要实例
Mission.KillAllAllies(strings);
```

### ToggleDisableDying
`public static string ToggleDisableDying(List<string> strings)`

**用途 / Purpose:** 调用 ToggleDisableDying 对应的操作。

```csharp
// 静态调用，不需要实例
Mission.ToggleDisableDying(strings);
```

### ToggleDisableDyingTeam
`public static string ToggleDisableDyingTeam(List<string> strings)`

**用途 / Purpose:** 调用 ToggleDisableDyingTeam 对应的操作。

```csharp
// 静态调用，不需要实例
Mission.ToggleDisableDyingTeam(strings);
```

### KillAgent
`public static string KillAgent(List<string> strings)`

**用途 / Purpose:** 调用 KillAgent 对应的操作。

```csharp
// 静态调用，不需要实例
Mission.KillAgent(strings);
```

### IncreaseBatteringRamSpeeds
`public static string IncreaseBatteringRamSpeeds(List<string> strings)`

**用途 / Purpose:** 调用 IncreaseBatteringRamSpeeds 对应的操作。

```csharp
// 静态调用，不需要实例
Mission.IncreaseBatteringRamSpeeds(strings);
```

### IncreaseSiegeTowerSpeed
`public static string IncreaseSiegeTowerSpeed(List<string> strings)`

**用途 / Purpose:** 调用 IncreaseSiegeTowerSpeed 对应的操作。

```csharp
// 静态调用，不需要实例
Mission.IncreaseSiegeTowerSpeed(strings);
```

### LoadParamsDebug
`public static string LoadParamsDebug(List<string> strings)`

**用途 / Purpose:** 从持久化存储或流中读取 params debug。

```csharp
// 静态调用，不需要实例
Mission.LoadParamsDebug(strings);
```

## 使用示例

```csharp
var mission = Mission.Current;
mission.AddActiveMissionObject(missionObject);
```

## 参见

- [本区域目录](../)