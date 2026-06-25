---
title: "MissionScreen"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionScreen`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionScreen

**Namespace:** TaleWorlds.MountAndBlade.View.Screens
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionScreen : ScreenBase, IMissionSystemHandler, IGameStateListener, IMissionScreen, IMissionListener, IChatLogHandlerScreen`
**Base:** `ScreenBase`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Screens/MissionScreen.cs`

## 概述

`MissionScreen` 位于 `TaleWorlds.MountAndBlade.View.Screens`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View.Screens` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `LockCameraMovement` | `public bool LockCameraMovement { get; }` |
| `OrderFlag` | `public OrderFlag OrderFlag { get; }` |
| `CombatCamera` | `public Camera CombatCamera { get; }` |
| `CustomCamera` | `public Camera CustomCamera { get; }` |
| `CameraBearing` | `public float CameraBearing { get; }` |
| `MaxCameraZoom` | `public float MaxCameraZoom { get; }` |
| `CameraElevation` | `public float CameraElevation { get; }` |
| `CameraResultDistanceToTarget` | `public float CameraResultDistanceToTarget { get; }` |
| `CameraViewAngle` | `public float CameraViewAngle { get; }` |
| `IsPhotoModeEnabled` | `public bool IsPhotoModeEnabled { get; }` |
| `IsConversationMission` | `public bool IsConversationMission { get; }` |
| `IsConversationActive` | `public bool IsConversationActive { get; }` |
| `SceneLayer` | `public SceneLayer SceneLayer { get; }` |
| `SceneView` | `public SceneView SceneView { get; }` |
| `Mission` | `public Mission Mission { get; }` |
| `IsCheatGhostMode` | `public bool IsCheatGhostMode { get; set; }` |
| `LastFollowedAgent` | `public Agent LastFollowedAgent { get; }` |
| `LastFollowedAgentVisuals` | `public IAgentVisual LastFollowedAgentVisuals { get; }` |
| `PhotoModeRequiresMouse` | `public bool PhotoModeRequiresMouse { get; }` |
| `IsFocusLost` | `public bool IsFocusLost { get; }` |
| `IsMissionTickable` | `public bool IsMissionTickable { get; }` |

## 主要方法

### OnSpectateAgentDelegate
`public delegate void OnSpectateAgentDelegate(Agent followedAgent)`

**用途 / Purpose:** 当 `spectate agent delegate` 事件触发时调用此方法。

### GatherCustomAgentListToSpectateDelegate
`public delegate List<Agent> GatherCustomAgentListToSpectateDelegate(Agent forcedAgentToInclude)`

**用途 / Purpose:** 处理 `gather custom agent list to spectate delegate` 相关逻辑。

### OnFocusChangeOnGameWindow
`public override void OnFocusChangeOnGameWindow(bool focusGained)`

**用途 / Purpose:** 当 `focus change on game window` 事件触发时调用此方法。

### SetOrderFlagVisibility
`public void SetOrderFlagVisibility(bool value)`

**用途 / Purpose:** 设置 `order flag visibility` 的值或状态。

### GetFollowText
`public string GetFollowText()`

**用途 / Purpose:** 获取 `follow text` 的当前值。

### GetFollowPartyText
`public string GetFollowPartyText()`

**用途 / Purpose:** 获取 `follow party text` 的当前值。

### SetDisplayDialog
`public bool SetDisplayDialog(bool value)`

**用途 / Purpose:** 设置 `display dialog` 的值或状态。

### IsOpeningEscapeMenuOnFocusChangeAllowed
`public bool IsOpeningEscapeMenuOnFocusChangeAllowed()`

**用途 / Purpose:** 处理 `is opening escape menu on focus change allowed` 相关逻辑。

### IsPhotoModeAllowed
`public bool IsPhotoModeAllowed()`

**用途 / Purpose:** 处理 `is photo mode allowed` 相关逻辑。

### SetExtraCameraParameters
`public void SetExtraCameraParameters(bool newForceCanZoom, float newCameraRayCastStartingPointOffset)`

**用途 / Purpose:** 设置 `extra camera parameters` 的值或状态。

### SetCustomAgentListToSpectateGatherer
`public void SetCustomAgentListToSpectateGatherer(GatherCustomAgentListToSpectateDelegate gatherer)`

**用途 / Purpose:** 设置 `custom agent list to spectate gatherer` 的值或状态。

### UpdateFreeCamera
`public void UpdateFreeCamera(MatrixFrame frame)`

**用途 / Purpose:** 更新 `free camera` 的状态或数据。

### OnMainAgentWeaponChanged
`public void OnMainAgentWeaponChanged()`

**用途 / Purpose:** 当 `main agent weapon changed` 事件触发时调用此方法。

### ToggleFixedMissionCamera
`public static string ToggleFixedMissionCamera(List<string> strings)`

**用途 / Purpose:** 处理 `toggle fixed mission camera` 相关逻辑。

### SetFixedMissionCameraActive
`public static void SetFixedMissionCameraActive(bool active)`

**用途 / Purpose:** 设置 `fixed mission camera active` 的值或状态。

### SetShiftCameraSpeed
`public static string SetShiftCameraSpeed(List<string> strings)`

**用途 / Purpose:** 设置 `shift camera speed` 的值或状态。

### SetCameraPosition
`public static string SetCameraPosition(List<string> strings)`

**用途 / Purpose:** 设置 `camera position` 的值或状态。

### IsViewingCharacter
`public bool IsViewingCharacter()`

**用途 / Purpose:** 处理 `is viewing character` 相关逻辑。

### GetCameraToggleProgress
`public float GetCameraToggleProgress()`

**用途 / Purpose:** 获取 `camera toggle progress` 的当前值。

### AddMissionView
`public void AddMissionView(MissionView missionView)`

**用途 / Purpose:** 向当前集合/状态中添加 `mission view`。

### ScreenPointToWorldRay
`public void ScreenPointToWorldRay(Vec2 screenPoint, out Vec3 rayBegin, out Vec3 rayEnd)`

**用途 / Purpose:** 处理 `screen point to world ray` 相关逻辑。

### GetProjectedMousePositionOnGround
`public bool GetProjectedMousePositionOnGround(out Vec3 groundPosition, out Vec3 groundNormal, BodyFlags excludeBodyOwnerFlags, bool checkOccludedSurface)`

**用途 / Purpose:** 获取 `projected mouse position on ground` 的当前值。

### GetProjectedMousePositionOnWater
`public bool GetProjectedMousePositionOnWater(out Vec3 waterPosition)`

**用途 / Purpose:** 获取 `projected mouse position on water` 的当前值。

### CancelQuickPositionOrder
`public void CancelQuickPositionOrder()`

**用途 / Purpose:** 判断当前对象是否可以执行 `cel quick position order`。

### MissionStartedRendering
`public bool MissionStartedRendering()`

**用途 / Purpose:** 处理 `mission started rendering` 相关逻辑。

### GetOrderFlagPosition
`public Vec3 GetOrderFlagPosition()`

**用途 / Purpose:** 获取 `order flag position` 的当前值。

### GetOrderFlagFrame
`public MatrixFrame GetOrderFlagFrame()`

**用途 / Purpose:** 获取 `order flag frame` 的当前值。

### UnregisterRadialMenuObject
`public void UnregisterRadialMenuObject(object radialMenuOwnerObject)`

**用途 / Purpose:** 处理 `unregister radial menu object` 相关逻辑。

### SetPhotoModeRequiresMouse
`public void SetPhotoModeRequiresMouse(bool isRequired)`

**用途 / Purpose:** 设置 `photo mode requires mouse` 的值或状态。

### SetPhotoModeEnabled
`public void SetPhotoModeEnabled(bool isEnabled)`

**用途 / Purpose:** 设置 `photo mode enabled` 的值或状态。

### SetConversationActive
`public void SetConversationActive(bool isActive)`

**用途 / Purpose:** 设置 `conversation active` 的值或状态。

### SetAsConversationMission
`public void SetAsConversationMission()`

**用途 / Purpose:** 设置 `as conversation mission` 的值或状态。

### SetCameraLockState
`public void SetCameraLockState(bool isLocked)`

**用途 / Purpose:** 设置 `camera lock state` 的值或状态。

### RegisterView
`public void RegisterView(MissionView missionView)`

**用途 / Purpose:** 处理 `register view` 相关逻辑。

### UnregisterView
`public void UnregisterView(MissionView missionView)`

**用途 / Purpose:** 处理 `unregister view` 相关逻辑。

### TeleportMainAgentToCameraFocusForCheat
`public virtual void TeleportMainAgentToCameraFocusForCheat()`

**用途 / Purpose:** 处理 `teleport main agent to camera focus for cheat` 相关逻辑。

### GetPlayerAgentVisuals
`public IAgentVisual GetPlayerAgentVisuals(MissionPeer lobbyPeer)`

**用途 / Purpose:** 获取 `player agent visuals` 的当前值。

### SetAgentToFollow
`public void SetAgentToFollow(Agent agent)`

**用途 / Purpose:** 设置 `agent to follow` 的值或状态。

### GetSpectatingData
`public SpectatorData GetSpectatingData(Vec3 currentCameraPosition)`

**用途 / Purpose:** 获取 `spectating data` 的当前值。

### OnEscape
`public void OnEscape()`

**用途 / Purpose:** 当 `escape` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new MissionScreen();
value.OnSpectateAgentDelegate(followedAgent);
```

## 参见

- [完整类目录](../catalog)