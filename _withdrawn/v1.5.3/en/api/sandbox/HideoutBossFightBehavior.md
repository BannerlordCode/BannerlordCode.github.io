---
title: "HideoutBossFightBehavior"
description: "Auto-generated class reference for HideoutBossFightBehavior."
---
# HideoutBossFightBehavior

**Namespace:** SandBox.Objects.Cinematics
**Module:** SandBox
**Type:** `public class HideoutBossFightBehavior : ScriptComponentBehavior `
**Base:** ScriptComponentBehavior
**Source:** SandBox/Objects/Cinematics/HideoutBossFightBehavior.cs

## Overview

Auto-generated stub for `HideoutBossFightBehavior`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetPlayerFrames
`public void GetPlayerFrames(out MatrixFrame initialFrame,out MatrixFrame targetFrame,float perturbAmount = 0f)`

### GetBossFrames
`public void GetBossFrames(out MatrixFrame initialFrame,out MatrixFrame targetFrame,float perturbAmount = 0f)`

### GetAllyFrames
`public void GetAllyFrames(out List<MatrixFrame> initialFrames,out List<MatrixFrame> targetFrames,int agentCount = 10,float agentOffsetAngle = 0.15707964f,float perturbAmount = 0f)`

### GetBanditFrames
`public void GetBanditFrames(out List<MatrixFrame> initialFrames,out List<MatrixFrame> targetFrames,int agentCount = 10,float agentOffsetAngle = 0.15707964f,float perturbAmount = 0f)`

### GetAlliesInitialFrame
`public void GetAlliesInitialFrame(out MatrixFrame frame)`

### GetBanditsInitialFrame
`public void GetBanditsInitialFrame(out MatrixFrame frame)`

### IsWorldPointInsideCameraVolume
`public bool IsWorldPointInsideCameraVolume(in Vec3 worldPoint)`

### ClampWorldPointToCameraVolume
`public bool ClampWorldPointToCameraVolume(in Vec3 worldPoint,out Vec3 clampedPoint)`

### OnEditorVariableChanged
`protected override void OnEditorVariableChanged(string variableName)`

### OnEditorTick
`protected override void OnEditorTick(float dt)`

### OnRemoved
`protected override void OnRemoved(int removeReason)`

## See Also

- [Section index](../)
