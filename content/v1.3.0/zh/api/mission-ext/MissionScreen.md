---
title: "MissionScreen"
description: "MissionScreen 的自动生成类参考。"
---
# MissionScreen

**Namespace:** TaleWorlds.MountAndBlade.View.Screens
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionScreen : ScreenBase, IMissionSystemHandler, IGameStateListener, IMissionScreen, IMissionListener, IChatLogHandlerScreen`
**Base:** `ScreenBase`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/MissionScreen.cs`

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
| `CustomCamera` | `public Camera CustomCamera { get; set; }` |
| `CameraBearing` | `public float CameraBearing { get; }` |
| `MaxCameraZoom` | `public float MaxCameraZoom { get; }` |
| `CameraElevation` | `public float CameraElevation { get; }` |
| `CameraResultDistanceToTarget` | `public float CameraResultDistanceToTarget { get; }` |
| `CameraViewAngle` | `public float CameraViewAngle { get; }` |
| `IsPhotoModeEnabled` | `public bool IsPhotoModeEnabled { get; }` |
| `IsConversationActive` | `public bool IsConversationActive { get; }` |
| `IsDeploymentActive` | `public bool IsDeploymentActive { get; }` |
| `SceneLayer` | `public SceneLayer SceneLayer { get; }` |
| `SceneView` | `public SceneView SceneView { get; }` |
| `Mission` | `public Mission Mission { get; }` |
| `IsCheatGhostMode` | `public bool IsCheatGhostMode { get; set; }` |
| `IsRadialMenuActive` | `public bool IsRadialMenuActive { get; }` |
| `InputManager` | `public IInputContext InputManager { get; }` |
| `LastFollowedAgent` | `public Agent LastFollowedAgent { get; }` |
| `LastFollowedAgentVisuals` | `public IAgentVisual LastFollowedAgentVisuals { get; set; }` |
| `MouseVisible` | `public override bool MouseVisible { get; }` |
| `IsMissionTickable` | `public bool IsMissionTickable { get; }` |
| `PhotoModeRequiresMouse` | `public bool PhotoModeRequiresMouse { get; }` |
| `IsFocusLost` | `public bool IsFocusLost { get; }` |

## 主要方法

### SetOrderFlagVisibility
`public void SetOrderFlagVisibility(bool value)`

**用途 / Purpose:** 为 order flag visibility 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionScreen 实例
MissionScreen missionScreen = ...;
missionScreen.SetOrderFlagVisibility(false);
```

### GetFollowText
`public string GetFollowText()`

**用途 / Purpose:** 读取并返回当前对象中 follow text 的结果。

```csharp
// 先通过子系统 API 拿到 MissionScreen 实例
MissionScreen missionScreen = ...;
var result = missionScreen.GetFollowText();
```

### GetFollowPartyText
`public string GetFollowPartyText()`

**用途 / Purpose:** 读取并返回当前对象中 follow party text 的结果。

```csharp
// 先通过子系统 API 拿到 MissionScreen 实例
MissionScreen missionScreen = ...;
var result = missionScreen.GetFollowPartyText();
```

### SetDisplayDialog
`public bool SetDisplayDialog(bool value)`

**用途 / Purpose:** 为 display dialog 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionScreen 实例
MissionScreen missionScreen = ...;
var result = missionScreen.SetDisplayDialog(false);
```

### OnFocusChangeOnGameWindow
`public override void OnFocusChangeOnGameWindow(bool focusGained)`

**用途 / Purpose:** 在 focus change on game window 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionScreen 实例
MissionScreen missionScreen = ...;
missionScreen.OnFocusChangeOnGameWindow(false);
```

### IsOpeningEscapeMenuOnFocusChangeAllowed
`public bool IsOpeningEscapeMenuOnFocusChangeAllowed()`

**用途 / Purpose:** 判断当前对象是否处于 opening escape menu on focus change allowed 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionScreen 实例
MissionScreen missionScreen = ...;
var result = missionScreen.IsOpeningEscapeMenuOnFocusChangeAllowed();
```

### SetExtraCameraParameters
`public void SetExtraCameraParameters(bool newForceCanZoom, float newCameraRayCastStartingPointOffset)`

**用途 / Purpose:** 为 extra camera parameters 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionScreen 实例
MissionScreen missionScreen = ...;
missionScreen.SetExtraCameraParameters(false, 0);
```

### SetCustomAgentListToSpectateGatherer
`public void SetCustomAgentListToSpectateGatherer(MissionScreen.GatherCustomAgentListToSpectateDelegate gatherer)`

**用途 / Purpose:** 为 custom agent list to spectate gatherer 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionScreen 实例
MissionScreen missionScreen = ...;
missionScreen.SetCustomAgentListToSpectateGatherer(gatherer);
```

### UpdateFreeCamera
`public void UpdateFreeCamera(MatrixFrame frame)`

**用途 / Purpose:** 重新计算并更新 free camera 的最新表示。

```csharp
// 先通过子系统 API 拿到 MissionScreen 实例
MissionScreen missionScreen = ...;
missionScreen.UpdateFreeCamera(frame);
```

### OnMainAgentWeaponChanged
`public void OnMainAgentWeaponChanged()`

**用途 / Purpose:** 在 main agent weapon changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionScreen 实例
MissionScreen missionScreen = ...;
missionScreen.OnMainAgentWeaponChanged();
```

### ToggleFixedMissionCamera
`public static string ToggleFixedMissionCamera(List<string> strings)`

**用途 / Purpose:** 调用 ToggleFixedMissionCamera 对应的操作。

```csharp
// 静态调用，不需要实例
MissionScreen.ToggleFixedMissionCamera(strings);
```

### SetFixedMissionCameraActive
`public static void SetFixedMissionCameraActive(bool active)`

**用途 / Purpose:** 为 fixed mission camera active 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MissionScreen.SetFixedMissionCameraActive(false);
```

### SetShiftCameraSpeed
`public static string SetShiftCameraSpeed(List<string> strings)`

**用途 / Purpose:** 为 shift camera speed 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MissionScreen.SetShiftCameraSpeed(strings);
```

### SetCameraPosition
`public static string SetCameraPosition(List<string> strings)`

**用途 / Purpose:** 为 camera position 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MissionScreen.SetCameraPosition(strings);
```

### IsViewingCharacter
`public bool IsViewingCharacter()`

**用途 / Purpose:** 判断当前对象是否处于 viewing character 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionScreen 实例
MissionScreen missionScreen = ...;
var result = missionScreen.IsViewingCharacter();
```

### GetCameraToggleProgress
`public float GetCameraToggleProgress()`

**用途 / Purpose:** 读取并返回当前对象中 camera toggle progress 的结果。

```csharp
// 先通过子系统 API 拿到 MissionScreen 实例
MissionScreen missionScreen = ...;
var result = missionScreen.GetCameraToggleProgress();
```

### AddMissionView
`public void AddMissionView(MissionView missionView)`

**用途 / Purpose:** 将 mission view 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MissionScreen 实例
MissionScreen missionScreen = ...;
missionScreen.AddMissionView(missionView);
```

### ScreenPointToWorldRay
`public void ScreenPointToWorldRay(Vec2 screenPoint, out Vec3 rayBegin, out Vec3 rayEnd)`

**用途 / Purpose:** 调用 ScreenPointToWorldRay 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionScreen 实例
MissionScreen missionScreen = ...;
missionScreen.ScreenPointToWorldRay(screenPoint, rayBegin, rayEnd);
```

### GetProjectedMousePositionOnGround
`public bool GetProjectedMousePositionOnGround(out Vec3 groundPosition, out Vec3 groundNormal, BodyFlags excludeBodyOwnerFlags, bool checkOccludedSurface)`

**用途 / Purpose:** 读取并返回当前对象中 projected mouse position on ground 的结果。

```csharp
// 先通过子系统 API 拿到 MissionScreen 实例
MissionScreen missionScreen = ...;
var result = missionScreen.GetProjectedMousePositionOnGround(groundPosition, groundNormal, excludeBodyOwnerFlags, false);
```

### GetProjectedMousePositionOnWater
`public bool GetProjectedMousePositionOnWater(out Vec3 waterPosition)`

**用途 / Purpose:** 读取并返回当前对象中 projected mouse position on water 的结果。

```csharp
// 先通过子系统 API 拿到 MissionScreen 实例
MissionScreen missionScreen = ...;
var result = missionScreen.GetProjectedMousePositionOnWater(waterPosition);
```

### CancelQuickPositionOrder
`public void CancelQuickPositionOrder()`

**用途 / Purpose:** 检查当前对象是否满足 cel quick position order 的前置条件。

```csharp
// 先通过子系统 API 拿到 MissionScreen 实例
MissionScreen missionScreen = ...;
missionScreen.CancelQuickPositionOrder();
```

### MissionStartedRendering
`public bool MissionStartedRendering()`

**用途 / Purpose:** 调用 MissionStartedRendering 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionScreen 实例
MissionScreen missionScreen = ...;
var result = missionScreen.MissionStartedRendering();
```

### GetOrderFlagPosition
`public Vec3 GetOrderFlagPosition()`

**用途 / Purpose:** 读取并返回当前对象中 order flag position 的结果。

```csharp
// 先通过子系统 API 拿到 MissionScreen 实例
MissionScreen missionScreen = ...;
var result = missionScreen.GetOrderFlagPosition();
```

### GetOrderFlagFrame
`public MatrixFrame GetOrderFlagFrame()`

**用途 / Purpose:** 读取并返回当前对象中 order flag frame 的结果。

```csharp
// 先通过子系统 API 拿到 MissionScreen 实例
MissionScreen missionScreen = ...;
var result = missionScreen.GetOrderFlagFrame();
```

### UnregisterRadialMenuObject
`public void UnregisterRadialMenuObject(object radialMenuOwnerObject)`

**用途 / Purpose:** 从当前系统中注销radial menu object。

```csharp
// 先通过子系统 API 拿到 MissionScreen 实例
MissionScreen missionScreen = ...;
missionScreen.UnregisterRadialMenuObject(radialMenuOwnerObject);
```

### SetPhotoModeRequiresMouse
`public void SetPhotoModeRequiresMouse(bool isRequired)`

**用途 / Purpose:** 为 photo mode requires mouse 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionScreen 实例
MissionScreen missionScreen = ...;
missionScreen.SetPhotoModeRequiresMouse(false);
```

### SetPhotoModeEnabled
`public void SetPhotoModeEnabled(bool isEnabled)`

**用途 / Purpose:** 为 photo mode enabled 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionScreen 实例
MissionScreen missionScreen = ...;
missionScreen.SetPhotoModeEnabled(false);
```

### SetConversationActive
`public void SetConversationActive(bool isActive)`

**用途 / Purpose:** 为 conversation active 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionScreen 实例
MissionScreen missionScreen = ...;
missionScreen.SetConversationActive(false);
```

### SetCameraLockState
`public void SetCameraLockState(bool isLocked)`

**用途 / Purpose:** 为 camera lock state 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionScreen 实例
MissionScreen missionScreen = ...;
missionScreen.SetCameraLockState(false);
```

### RegisterView
`public void RegisterView(MissionView missionView)`

**用途 / Purpose:** 将view注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 MissionScreen 实例
MissionScreen missionScreen = ...;
missionScreen.RegisterView(missionView);
```

### UnregisterView
`public void UnregisterView(MissionView missionView)`

**用途 / Purpose:** 从当前系统中注销view。

```csharp
// 先通过子系统 API 拿到 MissionScreen 实例
MissionScreen missionScreen = ...;
missionScreen.UnregisterView(missionView);
```

### TeleportMainAgentToCameraFocusForCheat
`public virtual void TeleportMainAgentToCameraFocusForCheat()`

**用途 / Purpose:** 调用 TeleportMainAgentToCameraFocusForCheat 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionScreen 实例
MissionScreen missionScreen = ...;
missionScreen.TeleportMainAgentToCameraFocusForCheat();
```

### GetPlayerAgentVisuals
`public IAgentVisual GetPlayerAgentVisuals(MissionPeer lobbyPeer)`

**用途 / Purpose:** 读取并返回当前对象中 player agent visuals 的结果。

```csharp
// 先通过子系统 API 拿到 MissionScreen 实例
MissionScreen missionScreen = ...;
var result = missionScreen.GetPlayerAgentVisuals(lobbyPeer);
```

### SetAgentToFollow
`public void SetAgentToFollow(Agent agent)`

**用途 / Purpose:** 为 agent to follow 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionScreen 实例
MissionScreen missionScreen = ...;
missionScreen.SetAgentToFollow(agent);
```

### GetSpectatingData
`public Mission.SpectatorData GetSpectatingData(Vec3 currentCameraPosition)`

**用途 / Purpose:** 读取并返回当前对象中 spectating data 的结果。

```csharp
// 先通过子系统 API 拿到 MissionScreen 实例
MissionScreen missionScreen = ...;
var result = missionScreen.GetSpectatingData(currentCameraPosition);
```

### OnEscape
`public void OnEscape()`

**用途 / Purpose:** 在 escape 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionScreen 实例
MissionScreen missionScreen = ...;
missionScreen.OnEscape();
```

### OnSpectateAgentDelegate
`public delegate void OnSpectateAgentDelegate(Agent followedAgent)`

**用途 / Purpose:** 在 spectate agent delegate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionScreen 实例
MissionScreen missionScreen = ...;
missionScreen.OnSpectateAgentDelegate(followedAgent);
```

### GatherCustomAgentListToSpectateDelegate
`public delegate List<Agent> GatherCustomAgentListToSpectateDelegate(Agent forcedAgentToInclude)`

**用途 / Purpose:** 收集或汇总custom agent list to spectate delegate到当前对象。

```csharp
// 先通过子系统 API 拿到 MissionScreen 实例
MissionScreen missionScreen = ...;
var result = missionScreen.GatherCustomAgentListToSpectateDelegate(forcedAgentToInclude);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionScreen missionScreen = ...;
missionScreen.SetOrderFlagVisibility(false);
```

## 参见

- [本区域目录](../)