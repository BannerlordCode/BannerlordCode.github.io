---
title: "MissionScreen"
description: "MissionScreen 的自动生成类参考。"
---
# MissionScreen

**Namespace:** TaleWorlds.MountAndBlade.View.Screens
**Module:** TaleWorlds.MountAndBlade.View
**Type:** `public class MissionScreen : ScreenBase,IMissionSystemHandler,IGameStateListener,IMissionScreen,IMissionListener,IChatLogHandlerScreen `
**Base:** ScreenBase,IMissionSystemHandler,IGameStateListener,IMissionScreen,IMissionListener,IChatLogHandlerScreen
**Source:** TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/MissionScreen.cs

## 概述

`MissionScreen` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/MissionScreen.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### OnInitialize
`protected override void OnInitialize() `

### InitializeMissionView
`protected virtual void InitializeMissionView() `

### OnActivate
`protected override void OnActivate() `

### OnResume
`protected override void OnResume() `

### OnFocusChangeOnGameWindow
`public override void OnFocusChangeOnGameWindow(bool focusGained) `

### SetOrderFlagVisibility
`public void SetOrderFlagVisibility(bool value) `

### GetFollowText
`public string GetFollowText() `

### GetFollowPartyText
`public string GetFollowPartyText() `

### SetDisplayDialog
`public bool SetDisplayDialog(bool value) `

### IsOpeningEscapeMenuOnFocusChangeAllowed
`public bool IsOpeningEscapeMenuOnFocusChangeAllowed() `

### IsPhotoModeAllowed
`public bool IsPhotoModeAllowed() `

### SetExtraCameraParameters
`public void SetExtraCameraParameters(bool newForceCanZoom,float newCameraRayCastStartingPointOffset) `

### SetCustomAgentListToSpectateGatherer
`public void SetCustomAgentListToSpectateGatherer(MissionScreen.GatherCustomAgentListToSpectateDelegate gatherer) `

### UpdateFreeCamera
`public void UpdateFreeCamera(MatrixFrame frame) `

### OnFrameTick
`protected override void OnFrameTick(float dt) `

### OnMainAgentWeaponChanged
`public void OnMainAgentWeaponChanged() `

### OnDeactivate
`protected override void OnDeactivate() `

### OnFinalize
`protected override void OnFinalize() `

### ToggleFixedMissionCamera
`public static string ToggleFixedMissionCamera(List<string> strings) `

### SetFixedMissionCameraActive
`public static void SetFixedMissionCameraActive(bool active) `

### SetShiftCameraSpeed
`public static string SetShiftCameraSpeed(List<string> strings) `

### SetCameraPosition
`public static string SetCameraPosition(List<string> strings) `

### CanToggleCamera
`protected virtual bool CanToggleCamera() `

### CanViewCharacter
`protected virtual bool CanViewCharacter() `

### IsViewingCharacter
`public bool IsViewingCharacter() `

### GetCameraToggleProgress
`public float GetCameraToggleProgress() `

### AddMissionView
`public void AddMissionView(MissionView missionView) `

### ScreenPointToWorldRay
`public void ScreenPointToWorldRay(Vec2 screenPoint,out Vec3 rayBegin,out Vec3 rayEnd) `

### GetProjectedMousePositionOnGround
`public bool GetProjectedMousePositionOnGround(out Vec3 groundPosition,out Vec3 groundNormal,BodyFlags excludeBodyOwnerFlags,bool checkOccludedSurface) `

### GetProjectedMousePositionOnWater
`public bool GetProjectedMousePositionOnWater(out Vec3 waterPosition) `

### CancelQuickPositionOrder
`public void CancelQuickPositionOrder() `

### MissionStartedRendering
`public bool MissionStartedRendering() `

### MissionLoadingWindowDisabled
`public bool MissionLoadingWindowDisabled() `

### GetOrderFlagPosition
`public Vec3 GetOrderFlagPosition() `

### GetOrderFlagFrame
`public MatrixFrame GetOrderFlagFrame() `

### UnregisterRadialMenuObject
`public void UnregisterRadialMenuObject(object radialMenuOwnerObject) `

### SetPhotoModeRequiresMouse
`public void SetPhotoModeRequiresMouse(bool isRequired) `

### SetPhotoModeEnabled
`public void SetPhotoModeEnabled(bool isEnabled) `

### SetConversationActive
`public void SetConversationActive(bool isActive) `

### SetAsConversationMission
`public void SetAsConversationMission() `

### SetCameraLockState
`public void SetCameraLockState(bool isLocked) `

### RegisterView
`public void RegisterView(MissionView missionView) `

### UnregisterView
`public void UnregisterView(MissionView missionView) `

### TeleportMainAgentToCameraFocusForCheat
`public virtual void TeleportMainAgentToCameraFocusForCheat() `

### GetPlayerAgentVisuals
`public IAgentVisual GetPlayerAgentVisuals(MissionPeer lobbyPeer) `

### SetAgentToFollow
`public void SetAgentToFollow(Agent agent) `

### SetSpectatorCameraOverride
`public void SetSpectatorCameraOverride(SpectatorCameraTypes? cameraMode) `

### RequestSpectatorCycle
`public void RequestSpectatorCycle(int direction) `

### SuppressSpectatorCyclingThisFrame
`public void SuppressSpectatorCyclingThisFrame() `

### GetSpectatingData
`public Mission.SpectatorData GetSpectatingData(Vec3 currentCameraPosition) `

### AfterMissionTick
`protected virtual void AfterMissionTick(Mission mission,float realDt) `

### OnEscape
`public void OnEscape() `

### OnSpectateAgentDelegate
`public delegate void OnSpectateAgentDelegate(Agent followedAgent)`

### GatherCustomAgentListToSpectateDelegate
`public delegate List<Agent> GatherCustomAgentListToSpectateDelegate(Agent forcedAgentToInclude)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
