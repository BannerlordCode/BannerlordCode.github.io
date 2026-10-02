---
title: "HideoutBossFightBehavior"
description: "HideoutBossFightBehavior 的自动生成类参考。"
---
# HideoutBossFightBehavior

**Namespace:** SandBox.Objects.Cinematics
**Module:** SandBox
**Type:** `public class HideoutBossFightBehavior : ScriptComponentBehavior `
**Base:** ScriptComponentBehavior
**Source:** SandBox/Objects/Cinematics/HideoutBossFightBehavior.cs

## 概述

`HideoutBossFightBehavior` 的自动生成类参考页面。声明来自 `SandBox/Objects/Cinematics/HideoutBossFightBehavior.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetPlayerFrames
`public void GetPlayerFrames(out MatrixFrame initialFrame,out MatrixFrame targetFrame,float perturbAmount = 0f) `

### GetBossFrames
`public void GetBossFrames(out MatrixFrame initialFrame,out MatrixFrame targetFrame,float perturbAmount = 0f) `

### GetAllyFrames
`public void GetAllyFrames(out List<MatrixFrame> initialFrames,out List<MatrixFrame> targetFrames,int agentCount = 10,float agentOffsetAngle = 0.15707964f,float perturbAmount = 0f) `

### GetBanditFrames
`public void GetBanditFrames(out List<MatrixFrame> initialFrames,out List<MatrixFrame> targetFrames,int agentCount = 10,float agentOffsetAngle = 0.15707964f,float perturbAmount = 0f) `

### GetAlliesInitialFrame
`public void GetAlliesInitialFrame(out MatrixFrame frame) `

### GetBanditsInitialFrame
`public void GetBanditsInitialFrame(out MatrixFrame frame) `

### IsWorldPointInsideCameraVolume
`public bool IsWorldPointInsideCameraVolume(in Vec3 worldPoint) `

### ClampWorldPointToCameraVolume
`public bool ClampWorldPointToCameraVolume(in Vec3 worldPoint,out Vec3 clampedPoint) `

### OnEditorVariableChanged
`protected override void OnEditorVariableChanged(string variableName) `

### OnEditorTick
`protected override void OnEditorTick(float dt) `

### OnRemoved
`protected override void OnRemoved(int removeReason) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
