---
title: "MissionScreen"
description: "Auto-generated class reference for MissionScreen."
---
# MissionScreen

**Namespace:** TaleWorlds.MountAndBlade.View.Screens
**Module:** TaleWorlds.MountAndBlade.View
**Type:** `public class MissionScreen : ScreenBase,IMissionSystemHandler,IGameStateListener,IMissionScreen,IMissionListener,IChatLogHandlerScreen `
**Base:** ScreenBase, IMissionSystemHandler, IGameStateListener, IMissionScreen, IMissionListener, IChatLogHandlerScreen
**Source:** TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/MissionScreen.cs

## Overview

Auto-generated stub for `MissionScreen`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### OnInitialize
`protected override void OnInitialize()`

### InitializeMissionView
`protected virtual void InitializeMissionView()`

### OnActivate
`protected override void OnActivate()`

### OnResume
`protected override void OnResume()`

### OnFocusChangeOnGameWindow
`public override void OnFocusChangeOnGameWindow(bool focusGained)`

### SetOrderFlagVisibility
`public void SetOrderFlagVisibility(bool value)`

### GetFollowText
`public string GetFollowText()`

### GetFollowPartyText
`public string GetFollowPartyText()`

### SetDisplayDialog
`public bool SetDisplayDialog(bool value)`

### IsOpeningEscapeMenuOnFocusChangeAllowed
`public bool IsOpeningEscapeMenuOnFocusChangeAllowed()`

### IsPhotoModeAllowed
`public bool IsPhotoModeAllowed()`

### SetExtraCameraParameters
`public void SetExtraCameraParameters(bool newForceCanZoom,float newCameraRayCastStartingPointOffset)`

### SetCustomAgentListToSpectateGatherer
`public void SetCustomAgentListToSpectateGatherer(MissionScreen.GatherCustomAgentListToSpectateDelegate gatherer)`

### UpdateFreeCamera
`public void UpdateFreeCamera(MatrixFrame frame)`

### OnFrameTick
`protected override void OnFrameTick(float dt)`

### OnMainAgentWeaponChanged
`public void OnMainAgentWeaponChanged()`

### OnDeactivate
`protected override void OnDeactivate()`

### OnFinalize
`protected override void OnFinalize()`

### ToggleFixedMissionCamera
`public static string ToggleFixedMissionCamera(List<string> strings)`

### SetFixedMissionCameraActive
`public static void SetFixedMissionCameraActive(bool active)`

### SetShiftCameraSpeed
`public static string SetShiftCameraSpeed(List<string> strings)`

### SetCameraPosition
`public static string SetCameraPosition(List<string> strings)`

### CanToggleCamera
`protected virtual bool CanToggleCamera()`

### CanViewCharacter
`protected virtual bool CanViewCharacter()`

### IsViewingCharacter
`public bool IsViewingCharacter()`

### GetCameraToggleProgress
`public float GetCameraToggleProgress()`

### AddMissionView
`public void AddMissionView(MissionView missionView)`

### ScreenPointToWorldRay
`public void ScreenPointToWorldRay(Vec2 screenPoint,out Vec3 rayBegin,out Vec3 rayEnd)`

### GetProjectedMousePositionOnGround
`public bool GetProjectedMousePositionOnGround(out Vec3 groundPosition,out Vec3 groundNormal,BodyFlags excludeBodyOwnerFlags,bool checkOccludedSurface)`

### GetProjectedMousePositionOnWater
`public bool GetProjectedMousePositionOnWater(out Vec3 waterPosition)`

### CancelQuickPositionOrder
`public void CancelQuickPositionOrder()`

### MissionStartedRendering
`public bool MissionStartedRendering()`

### MissionLoadingWindowDisabled
`public bool MissionLoadingWindowDisabled()`

### GetOrderFlagPosition
`public Vec3 GetOrderFlagPosition()`

### GetOrderFlagFrame
`public MatrixFrame GetOrderFlagFrame()`

### UnregisterRadialMenuObject
`public void UnregisterRadialMenuObject(object radialMenuOwnerObject)`

### SetPhotoModeRequiresMouse
`public void SetPhotoModeRequiresMouse(bool isRequired)`

### SetPhotoModeEnabled
`public void SetPhotoModeEnabled(bool isEnabled)`

### SetConversationActive
`public void SetConversationActive(bool isActive)`

### SetAsConversationMission
`public void SetAsConversationMission()`

### SetCameraLockState
`public void SetCameraLockState(bool isLocked)`

### RegisterView
`public void RegisterView(MissionView missionView)`

### UnregisterView
`public void UnregisterView(MissionView missionView)`

### TeleportMainAgentToCameraFocusForCheat
`public virtual void TeleportMainAgentToCameraFocusForCheat()`

### GetPlayerAgentVisuals
`public IAgentVisual GetPlayerAgentVisuals(MissionPeer lobbyPeer)`

### SetAgentToFollow
`public void SetAgentToFollow(Agent agent)`

### SetSpectatorCameraOverride
`public void SetSpectatorCameraOverride(SpectatorCameraTypes? cameraMode)`

### RequestSpectatorCycle
`public void RequestSpectatorCycle(int direction)`

### SuppressSpectatorCyclingThisFrame
`public void SuppressSpectatorCyclingThisFrame()`

### GetSpectatingData
`public Mission.SpectatorData GetSpectatingData(Vec3 currentCameraPosition)`

### AfterMissionTick
`protected virtual void AfterMissionTick(Mission mission,float realDt)`

### OnEscape
`public void OnEscape()`

### OnSpectateAgentDelegate
`public delegate void OnSpectateAgentDelegate(Agent followedAgent)`

### GatherCustomAgentListToSpectateDelegate
`public delegate List<Agent> GatherCustomAgentListToSpectateDelegate(Agent forcedAgentToInclude)`

## See Also

- [Section index](../)
