---
title: "Path"
description: "Auto-generated class reference for Path."
---
# Path

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Path : NativeObject `
**Base:** NativeObject
**Source:** TaleWorlds.Engine/Path.cs

## Overview

Auto-generated stub for `Path`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetHermiteFrameForDt
`public MatrixFrame GetHermiteFrameForDt(float phase,int first_point)`

### GetFrameForDistance
`public MatrixFrame GetFrameForDistance(float distance)`

### GetNearestFrameWithValidAlphaForDistance
`public MatrixFrame GetNearestFrameWithValidAlphaForDistance(float distance,bool searchForward = true,float alphaThreshold = 0.5f)`

### GetFrameAndColorForDistance
`public void GetFrameAndColorForDistance(float distance,out MatrixFrame frame,out Vec3 color)`

### GetArcLength
`public float GetArcLength(int first_point)`

### GetPoints
`public void GetPoints(MatrixFrame[] points)`

### GetTotalLength
`public float GetTotalLength()`

### GetVersion
`public int GetVersion()`

### SetFrameOfPoint
`public void SetFrameOfPoint(int pointIndex,ref MatrixFrame frame)`

### SetTangentPositionOfPoint
`public void SetTangentPositionOfPoint(int pointIndex,int tangentIndex,ref Vec3 position)`

### AddPathPoint
`public int AddPathPoint(int newNodeIndex)`

### DeletePathPoint
`public void DeletePathPoint(int nodeIndex)`

### HasValidAlphaAtPathPoint
`public bool HasValidAlphaAtPathPoint(int nodeIndex,float alphaThreshold = 0.5f)`

### GetName
`public string GetName()`

## See Also

- [Section index](../)
