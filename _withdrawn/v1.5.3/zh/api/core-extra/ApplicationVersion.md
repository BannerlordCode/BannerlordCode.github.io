---
title: "ApplicationVersion"
description: "ApplicationVersion 的自动生成类参考。"
---
# ApplicationVersion

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct ApplicationVersion `
**Base:** System.Object
**Source:** TaleWorlds.Library/ApplicationVersion.cs

## 概述

`ApplicationVersion` 的自动生成类参考页面。声明来自 `TaleWorlds.Library/ApplicationVersion.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### FromParametersFile
`public static ApplicationVersion FromParametersFile(string customParameterFilePath = null) `

### FromString
`public static ApplicationVersion FromString(string versionAsString,int defaultChangeSet = 0) `

### IsSame
`public bool IsSame(ApplicationVersion other,bool checkChangeSet) `

### IsOlderThan
`public bool IsOlderThan(ApplicationVersion other) `

### IsNewerThan
`public bool IsNewerThan(ApplicationVersion other) `

### ApplicationVersionTypeFromString
`public static ApplicationVersionType ApplicationVersionTypeFromString(string applicationVersionTypeAsString) `

### GetPrefix
`public static string GetPrefix(ApplicationVersionType applicationVersionType) `

### ToString
`public override string ToString() `

### GetHashCode
`public override int GetHashCode() `

### Equals
`public override bool Equals(object obj) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
