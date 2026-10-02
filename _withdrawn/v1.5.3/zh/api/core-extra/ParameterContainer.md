---
title: "ParameterContainer"
description: "ParameterContainer 的自动生成类参考。"
---
# ParameterContainer

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class ParameterContainer `
**Base:** System.Object
**Source:** TaleWorlds.Library/ParameterContainer.cs

## 概述

`ParameterContainer` 的自动生成类参考页面。声明来自 `TaleWorlds.Library/ParameterContainer.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### AddParameter
`public void AddParameter(string key,string value,bool overwriteIfExists) `

### AddParameterConcurrent
`public void AddParameterConcurrent(string key,string value,bool overwriteIfExists) `

### AddParametersConcurrent
`public void AddParametersConcurrent(IEnumerable<KeyValuePair<string,string>> parameters,bool overwriteIfExists) `

### ClearParameters
`public void ClearParameters() `

### TryGetParameter
`public bool TryGetParameter(string key,out string outValue) `

### TryGetParameterAsBool
`public bool TryGetParameterAsBool(string key,out bool outValue) `

### TryGetParameterAsInt
`public bool TryGetParameterAsInt(string key,out int outValue) `

### TryGetParameterAsUInt16
`public bool TryGetParameterAsUInt16(string key,out ushort outValue) `

### TryGetParameterAsFloat
`public bool TryGetParameterAsFloat(string key,out float outValue) `

### TryGetParameterAsByte
`public bool TryGetParameterAsByte(string key,out byte outValue) `

### TryGetParameterAsSByte
`public bool TryGetParameterAsSByte(string key,out sbyte outValue) `

### TryGetParameterAsVec3
`public bool TryGetParameterAsVec3(string key,out Vec3 outValue) `

### TryGetParameterAsVec2
`public bool TryGetParameterAsVec2(string key,out Vec2 outValue) `

### GetParameter
`public string GetParameter(string key) `

### Clone
`public ParameterContainer Clone() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
