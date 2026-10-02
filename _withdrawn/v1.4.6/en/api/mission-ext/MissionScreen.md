---
title: "MissionScreen"
description: "MissionScreen: a public class in TaleWorlds.MountAndBlade.View.Screens, inheriting ScreenBase, IMissionSystemHandler; 89 exposed members (51 methods, 25 properties, 8 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/MissionScreen.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionScreen

**Namespace:** `TaleWorlds.MountAndBlade.View.Screens`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class MissionScreen : ScreenBase, IMissionSystemHandler, IGameStateListener, IMissionScreen, IMissionListener, IChatLogHandlerScreen`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/MissionScreen.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MissionScreen lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/MissionScreen.cs. It is a public class, implementing/inheriting ScreenBase, IMissionSystemHandler, IGameStateListener, IMissionScreen, IMissionListener, IChatLogHandlerScreen; the inheritance chain is MissionScreen → ScreenBase. It exposes 89 public/protected members: 51 methods, 25 properties, 8 fields, 2 events, 1 constructors, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionScreen lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.View.Screens`, inheritance chain MissionScreen → ScreenBase. The surface is method-led (methods 51/89, properties 25/89), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/MissionScreen.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `LockCameraMovement` | `public bool LockCameraMovement` | property |
| `OnSpectateAgentFocusIn;` | `public event MissionScreen.OnSpectateAgentDelegate OnSpectateAgentFocusIn;` | event |
| `OnSpectateAgentFocusOut;` | `public event MissionScreen.OnSpectateAgentDelegate OnSpectateAgentFocusOut;` | event |
| `OrderFlag` | `public OrderFlag OrderFlag` | property |
| `CombatCamera` | `public Camera CombatCamera` | property |
| `CustomCamera` | `public Camera CustomCamera` | property |
| `CameraBearing` | `public float CameraBearing` | property |
| `MaxCameraZoom` | `public float MaxCameraZoom` | property |
| `CameraElevation` | `public float CameraElevation` | property |
| `CameraResultDistanceToTarget` | `public float CameraResultDistanceToTarget` | property |
| `CameraViewAngle` | `public float CameraViewAngle` | property |
| `IsPhotoModeEnabled` | `public bool IsPhotoModeEnabled` | property |
| `IsConversationMission` | `public bool IsConversationMission` | property |
| `IsConversationActive` | `public bool IsConversationActive` | property |
| `IsDeploymentActive` | `public bool IsDeploymentActive` | property |
| `SceneLayer` | `public SceneLayer SceneLayer` | property |
| `SceneView` | `public SceneView SceneView` | property |
| `Mission` | `public Mission Mission` | property |
| `IsCheatGhostMode` | `public bool IsCheatGhostMode` | property |
| `IsRadialMenuActive` | `public bool IsRadialMenuActive` | property |
| `InputManager` | `public IInputContext InputManager` | property |
| `LastFollowedAgent` | `public Agent LastFollowedAgent` | property |
| `LastFollowedAgentVisuals` | `public IAgentVisual LastFollowedAgentVisuals` | property |
| `MouseVisible` | `public override bool MouseVisible` | property |
| `PhotoModeRequiresMouse` | `public bool PhotoModeRequiresMouse` | property |
| `IsFocusLost` | `public bool IsFocusLost` | property |
| `IsMissionTickable` | `public bool IsMissionTickable` | property |
| `MissionScreen` | `public MissionScreen(MissionState missionState)` | constructor |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `InitializeMissionView` | `protected virtual void InitializeMissionView()` | method |
| `OnActivate` | `protected override void OnActivate()` | method |
| `OnResume` | `protected override void OnResume()` | method |
| `OnFocusChangeOnGameWindow` | `public override void OnFocusChangeOnGameWindow(bool focusGained)` | method |
| `SetOrderFlagVisibility` | `public void SetOrderFlagVisibility(bool value)` | method |
| `GetFollowText` | `public string GetFollowText()` | method |
| `GetFollowPartyText` | `public string GetFollowPartyText()` | method |
| `SetDisplayDialog` | `public bool SetDisplayDialog(bool value)` | method |
| `IsOpeningEscapeMenuOnFocusChangeAllowed` | `public bool IsOpeningEscapeMenuOnFocusChangeAllowed()` | method |
| `IsPhotoModeAllowed` | `public bool IsPhotoModeAllowed()` | method |
| `SetExtraCameraParameters` | `public void SetExtraCameraParameters(bool newForceCanZoom, float newCameraRayCastStartingPointOffset)` | method |
| `SetCustomAgentListToSpectateGatherer` | `public void SetCustomAgentListToSpectateGatherer(MissionScreen.GatherCustomAgentListToSpectateDelegate gatherer)` | method |
| `UpdateFreeCamera` | `public void UpdateFreeCamera(MatrixFrame frame)` | method |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | method |
| `OnMainAgentWeaponChanged` | `public void OnMainAgentWeaponChanged()` | method |
| `OnDeactivate` | `protected override void OnDeactivate()` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `ToggleFixedMissionCamera` | `public static string ToggleFixedMissionCamera(List<string>strings)` | method |
| `SetFixedMissionCameraActive` | `public static void SetFixedMissionCameraActive(bool active)` | method |
| `SetShiftCameraSpeed` | `public static string SetShiftCameraSpeed(List<string>strings)` | method |
| `SetCameraPosition` | `public static string SetCameraPosition(List<string>strings)` | method |
| `CanToggleCamera` | `protected virtual bool CanToggleCamera()` | method |
| `CanViewCharacter` | `protected virtual bool CanViewCharacter()` | method |
| `IsViewingCharacter` | `public bool IsViewingCharacter()` | method |
| `GetCameraToggleProgress` | `public float GetCameraToggleProgress()` | method |
| `AddMissionView` | `public void AddMissionView(MissionView missionView)` | method |
| `ScreenPointToWorldRay` | `public void ScreenPointToWorldRay(Vec2 screenPoint, out Vec3 rayBegin, out Vec3 rayEnd)` | method |
| `GetProjectedMousePositionOnGround` | `public bool GetProjectedMousePositionOnGround(out Vec3 groundPosition, out Vec3 groundNormal, BodyFlags excludeBodyOwnerFlags, bool checkOccludedSurface)` | method |
| `GetProjectedMousePositionOnWater` | `public bool GetProjectedMousePositionOnWater(out Vec3 waterPosition)` | method |
| `CancelQuickPositionOrder` | `public void CancelQuickPositionOrder()` | method |
| `MissionStartedRendering` | `public bool MissionStartedRendering()` | method |
| `GetOrderFlagPosition` | `public Vec3 GetOrderFlagPosition()` | method |
| `GetOrderFlagFrame` | `public MatrixFrame GetOrderFlagFrame()` | method |
| `RegisterRadialMenuObject` | `public void RegisterRadialMenuObject<T>(T radialMenuOwnerObject) where T : class` | method |
| `UnregisterRadialMenuObject` | `public void UnregisterRadialMenuObject(object radialMenuOwnerObject)` | method |
| `SetPhotoModeRequiresMouse` | `public void SetPhotoModeRequiresMouse(bool isRequired)` | method |
| `SetPhotoModeEnabled` | `public void SetPhotoModeEnabled(bool isEnabled)` | method |
| `SetConversationActive` | `public void SetConversationActive(bool isActive)` | method |
| `SetAsConversationMission` | `public void SetAsConversationMission()` | method |
| `SetCameraLockState` | `public void SetCameraLockState(bool isLocked)` | method |
| `RegisterView` | `public void RegisterView(MissionView missionView)` | method |
| `UnregisterView` | `public void UnregisterView(MissionView missionView)` | method |
| `TeleportMainAgentToCameraFocusForCheat` | `public virtual void TeleportMainAgentToCameraFocusForCheat()` | method |
| `GetPlayerAgentVisuals` | `public IAgentVisual GetPlayerAgentVisuals(MissionPeer lobbyPeer)` | method |
| `SetAgentToFollow` | `public void SetAgentToFollow(Agent agent)` | method |
| `GetSpectatingData` | `public Mission.SpectatorData GetSpectatingData(Vec3 currentCameraPosition)` | method |
| `AfterMissionTick` | `protected virtual void AfterMissionTick(Mission mission, float realDt)` | method |
| `OnEscape` | `public void OnEscape()` | method |
| `LoadingScreenFramesLeftInitial` | `public const int LoadingScreenFramesLeftInitial` | field |
| `FirstPersonNearClippingDistance` | `public const float FirstPersonNearClippingDistance` | field |
| `ThirdPersonNearClippingDistance` | `public const float ThirdPersonNearClippingDistance` | field |
| `FarClippingDistance` | `public const float FarClippingDistance` | field |
| `MinCameraAddedDistance` | `public const float MinCameraAddedDistance` | field |
| `MinCameraDistanceHardLimit` | `public const float MinCameraDistanceHardLimit` | field |
| `DefaultViewAngle` | `public const float DefaultViewAngle` | field |
| `MaxCameraAddedDistance` | `public const float MaxCameraAddedDistance` | field |
| `OnSpectateAgentDelegate` | `public delegate void OnSpectateAgentDelegate(Agent followedAgent);` | method |
| `List` | `public delegate List<Agent>GatherCustomAgentListToSpectateDelegate(Agent forcedAgentToInclude);` | method |
| `OnSpectateAgentDelegate` | `public delegate void OnSpectateAgentDelegate(Agent followedAgent)` | nested type |
| `List` | `public delegate List<Agent>GatherCustomAgentListToSpectateDelegate(Agent forcedAgentToInclude)` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IMissionSystemHandler](../IMissionSystemHandler/)
- [base / interface IGameStateListener](../../core-extra/IGameStateListener/)
- [same namespace BannerBuilderScreen](../BannerBuilderScreen/)
- [same namespace BenchmarkScreen](../BenchmarkScreen/)
- [same namespace CreditsScreen](../CreditsScreen/)
- [same namespace FaceGeneratorScreen](../FaceGeneratorScreen/)
