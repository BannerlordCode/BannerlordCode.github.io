---
title: "MissionScreen"
description: "MissionScreen：TaleWorlds.MountAndBlade.View.Screens 的 public 类，继承 ScreenBase、IMissionSystemHandler；公开成员 89 个（方法 51、属性 25、字段 8）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/MissionScreen.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionScreen

**Namespace:** `TaleWorlds.MountAndBlade.View.Screens`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class MissionScreen : ScreenBase, IMissionSystemHandler, IGameStateListener, IMissionScreen, IMissionListener, IChatLogHandlerScreen`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/MissionScreen.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MissionScreen 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/MissionScreen.cs。它是一个 public 类，实现/继承 ScreenBase、IMissionSystemHandler、IGameStateListener、IMissionScreen、IMissionListener、IChatLogHandlerScreen，继承链为 MissionScreen → ScreenBase。public/protected 成员共 89 个：51 方法、25 属性、8 字段、2 事件、1 构造函数、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionScreen 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.View.Screens`，继承链 MissionScreen → ScreenBase。成员构成以方法为主（方法 51/89，属性 25/89），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/MissionScreen.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `LockCameraMovement` | `public bool LockCameraMovement` | 属性 |
| `OnSpectateAgentFocusIn;` | `public event MissionScreen.OnSpectateAgentDelegate OnSpectateAgentFocusIn;` | 事件 |
| `OnSpectateAgentFocusOut;` | `public event MissionScreen.OnSpectateAgentDelegate OnSpectateAgentFocusOut;` | 事件 |
| `OrderFlag` | `public OrderFlag OrderFlag` | 属性 |
| `CombatCamera` | `public Camera CombatCamera` | 属性 |
| `CustomCamera` | `public Camera CustomCamera` | 属性 |
| `CameraBearing` | `public float CameraBearing` | 属性 |
| `MaxCameraZoom` | `public float MaxCameraZoom` | 属性 |
| `CameraElevation` | `public float CameraElevation` | 属性 |
| `CameraResultDistanceToTarget` | `public float CameraResultDistanceToTarget` | 属性 |
| `CameraViewAngle` | `public float CameraViewAngle` | 属性 |
| `IsPhotoModeEnabled` | `public bool IsPhotoModeEnabled` | 属性 |
| `IsConversationMission` | `public bool IsConversationMission` | 属性 |
| `IsConversationActive` | `public bool IsConversationActive` | 属性 |
| `IsDeploymentActive` | `public bool IsDeploymentActive` | 属性 |
| `SceneLayer` | `public SceneLayer SceneLayer` | 属性 |
| `SceneView` | `public SceneView SceneView` | 属性 |
| `Mission` | `public Mission Mission` | 属性 |
| `IsCheatGhostMode` | `public bool IsCheatGhostMode` | 属性 |
| `IsRadialMenuActive` | `public bool IsRadialMenuActive` | 属性 |
| `InputManager` | `public IInputContext InputManager` | 属性 |
| `LastFollowedAgent` | `public Agent LastFollowedAgent` | 属性 |
| `LastFollowedAgentVisuals` | `public IAgentVisual LastFollowedAgentVisuals` | 属性 |
| `MouseVisible` | `public override bool MouseVisible` | 属性 |
| `PhotoModeRequiresMouse` | `public bool PhotoModeRequiresMouse` | 属性 |
| `IsFocusLost` | `public bool IsFocusLost` | 属性 |
| `IsMissionTickable` | `public bool IsMissionTickable` | 属性 |
| `MissionScreen` | `public MissionScreen(MissionState missionState)` | 构造函数 |
| `OnInitialize` | `protected override void OnInitialize()` | 方法 |
| `InitializeMissionView` | `protected virtual void InitializeMissionView()` | 方法 |
| `OnActivate` | `protected override void OnActivate()` | 方法 |
| `OnResume` | `protected override void OnResume()` | 方法 |
| `OnFocusChangeOnGameWindow` | `public override void OnFocusChangeOnGameWindow(bool focusGained)` | 方法 |
| `SetOrderFlagVisibility` | `public void SetOrderFlagVisibility(bool value)` | 方法 |
| `GetFollowText` | `public string GetFollowText()` | 方法 |
| `GetFollowPartyText` | `public string GetFollowPartyText()` | 方法 |
| `SetDisplayDialog` | `public bool SetDisplayDialog(bool value)` | 方法 |
| `IsOpeningEscapeMenuOnFocusChangeAllowed` | `public bool IsOpeningEscapeMenuOnFocusChangeAllowed()` | 方法 |
| `IsPhotoModeAllowed` | `public bool IsPhotoModeAllowed()` | 方法 |
| `SetExtraCameraParameters` | `public void SetExtraCameraParameters(bool newForceCanZoom, float newCameraRayCastStartingPointOffset)` | 方法 |
| `SetCustomAgentListToSpectateGatherer` | `public void SetCustomAgentListToSpectateGatherer(MissionScreen.GatherCustomAgentListToSpectateDelegate gatherer)` | 方法 |
| `UpdateFreeCamera` | `public void UpdateFreeCamera(MatrixFrame frame)` | 方法 |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | 方法 |
| `OnMainAgentWeaponChanged` | `public void OnMainAgentWeaponChanged()` | 方法 |
| `OnDeactivate` | `protected override void OnDeactivate()` | 方法 |
| `OnFinalize` | `protected override void OnFinalize()` | 方法 |
| `ToggleFixedMissionCamera` | `public static string ToggleFixedMissionCamera(List<string>strings)` | 方法 |
| `SetFixedMissionCameraActive` | `public static void SetFixedMissionCameraActive(bool active)` | 方法 |
| `SetShiftCameraSpeed` | `public static string SetShiftCameraSpeed(List<string>strings)` | 方法 |
| `SetCameraPosition` | `public static string SetCameraPosition(List<string>strings)` | 方法 |
| `CanToggleCamera` | `protected virtual bool CanToggleCamera()` | 方法 |
| `CanViewCharacter` | `protected virtual bool CanViewCharacter()` | 方法 |
| `IsViewingCharacter` | `public bool IsViewingCharacter()` | 方法 |
| `GetCameraToggleProgress` | `public float GetCameraToggleProgress()` | 方法 |
| `AddMissionView` | `public void AddMissionView(MissionView missionView)` | 方法 |
| `ScreenPointToWorldRay` | `public void ScreenPointToWorldRay(Vec2 screenPoint, out Vec3 rayBegin, out Vec3 rayEnd)` | 方法 |
| `GetProjectedMousePositionOnGround` | `public bool GetProjectedMousePositionOnGround(out Vec3 groundPosition, out Vec3 groundNormal, BodyFlags excludeBodyOwnerFlags, bool checkOccludedSurface)` | 方法 |
| `GetProjectedMousePositionOnWater` | `public bool GetProjectedMousePositionOnWater(out Vec3 waterPosition)` | 方法 |
| `CancelQuickPositionOrder` | `public void CancelQuickPositionOrder()` | 方法 |
| `MissionStartedRendering` | `public bool MissionStartedRendering()` | 方法 |
| `GetOrderFlagPosition` | `public Vec3 GetOrderFlagPosition()` | 方法 |
| `GetOrderFlagFrame` | `public MatrixFrame GetOrderFlagFrame()` | 方法 |
| `RegisterRadialMenuObject` | `public void RegisterRadialMenuObject<T>(T radialMenuOwnerObject) where T : class` | 方法 |
| `UnregisterRadialMenuObject` | `public void UnregisterRadialMenuObject(object radialMenuOwnerObject)` | 方法 |
| `SetPhotoModeRequiresMouse` | `public void SetPhotoModeRequiresMouse(bool isRequired)` | 方法 |
| `SetPhotoModeEnabled` | `public void SetPhotoModeEnabled(bool isEnabled)` | 方法 |
| `SetConversationActive` | `public void SetConversationActive(bool isActive)` | 方法 |
| `SetAsConversationMission` | `public void SetAsConversationMission()` | 方法 |
| `SetCameraLockState` | `public void SetCameraLockState(bool isLocked)` | 方法 |
| `RegisterView` | `public void RegisterView(MissionView missionView)` | 方法 |
| `UnregisterView` | `public void UnregisterView(MissionView missionView)` | 方法 |
| `TeleportMainAgentToCameraFocusForCheat` | `public virtual void TeleportMainAgentToCameraFocusForCheat()` | 方法 |
| `GetPlayerAgentVisuals` | `public IAgentVisual GetPlayerAgentVisuals(MissionPeer lobbyPeer)` | 方法 |
| `SetAgentToFollow` | `public void SetAgentToFollow(Agent agent)` | 方法 |
| `GetSpectatingData` | `public Mission.SpectatorData GetSpectatingData(Vec3 currentCameraPosition)` | 方法 |
| `AfterMissionTick` | `protected virtual void AfterMissionTick(Mission mission, float realDt)` | 方法 |
| `OnEscape` | `public void OnEscape()` | 方法 |
| `LoadingScreenFramesLeftInitial` | `public const int LoadingScreenFramesLeftInitial` | 字段 |
| `FirstPersonNearClippingDistance` | `public const float FirstPersonNearClippingDistance` | 字段 |
| `ThirdPersonNearClippingDistance` | `public const float ThirdPersonNearClippingDistance` | 字段 |
| `FarClippingDistance` | `public const float FarClippingDistance` | 字段 |
| `MinCameraAddedDistance` | `public const float MinCameraAddedDistance` | 字段 |
| `MinCameraDistanceHardLimit` | `public const float MinCameraDistanceHardLimit` | 字段 |
| `DefaultViewAngle` | `public const float DefaultViewAngle` | 字段 |
| `MaxCameraAddedDistance` | `public const float MaxCameraAddedDistance` | 字段 |
| `OnSpectateAgentDelegate` | `public delegate void OnSpectateAgentDelegate(Agent followedAgent);` | 方法 |
| `List` | `public delegate List<Agent>GatherCustomAgentListToSpectateDelegate(Agent forcedAgentToInclude);` | 方法 |
| `OnSpectateAgentDelegate` | `public delegate void OnSpectateAgentDelegate(Agent followedAgent)` | 嵌套类型 |
| `List` | `public delegate List<Agent>GatherCustomAgentListToSpectateDelegate(Agent forcedAgentToInclude)` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ScreenBase](../../gui/ScreenBase/)
- [基类/接口 IMissionSystemHandler](../IMissionSystemHandler/)
- [基类/接口 IGameStateListener](../../core-extra/IGameStateListener/)
- [同命名空间 BannerBuilderScreen](../BannerBuilderScreen/)
- [同命名空间 BenchmarkScreen](../BenchmarkScreen/)
- [同命名空间 CreditsScreen](../CreditsScreen/)
- [同命名空间 FaceGeneratorScreen](../FaceGeneratorScreen/)
